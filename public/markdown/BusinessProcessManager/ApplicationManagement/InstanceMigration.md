2019-11-4

## Overview

When a new snapshot of a process application is deployed, users want to migrate the running process instances from the old version of the snapshot to the new one. This kind of migration is referenced as Instance Migration.   Not only process instances, snapshot data can be migrated using similar procedure as well.  We will cover both snapshot data and process instance migration at this article. 

## Prerequisites (Optional)

This section requires basic knowledge of snapshot deployment process and how process instances work for each snapshot of a process application.  Also, it’s suggested to understand how snapshot data including EPV, ENV, team and UCA are managed as needed at an runtime environment.

## Component

**Migration Tasks covers the migrations of both Snapshot Data and Process Instances**
<img width="947" alt="1 copy" src="https://media.github.ibm.com/user/228551/files/ef5a7b80-fd7b-11e9-848f-82495ba25484">

**Snapshot data migration**

While snapshot data is migrated, various settings are migrated from the source snapshot to the destination. These actions are all performed as one transaction. The data for EPV, environment variables (ENVs), and teams is migrated depending on the following behaviors. After migration, the source snapshot is deactivated and the target snapshot is activated. If the source snapshot was the default, that property is also transferred to the target.

* **EPV data migration**
  Runtime EPV changes are migrated from the source snapshot to the target snapshot. An entry is added for each effective date and value pair. Default values set at design time are not migrated.
  If the <epv-deploy-default> property is set to true, a runtime EPV change is applied to each EPV during deployment with an effective date of the deployment time and a value equal to the EPV's default value.

* **Environment variable migration**
  Runtime environment variable and server configuration settings are migrated from the source to the target snapshot. Default values set at design time are not migrated. The changes to the environment variable or server configuration that occur during run time are migrated from the source if they have a modified date that is more recent than any change that occurred at run time in the target snapshot. A change at run time always overrides the snapshot default settings.

* **Team migration**
  The contents of teams from the source are merged with the teams in the target. Any users or groups listed for a team from the source snapshot are added to the team in the target. Dynamic teams cannot be migrated.
If the <disable-team-sync> property is set to true, teams are not migrated.

**Process instance migration**

Process instances with a status of active, failed, or suspended are migrated from the source to the target snapshot. Each process instance is migrated in its own transaction. Multiple threads process the instance migration work based on the value of the <thread-pool-size> setting. 
Do not use the source and target snapshot processes during migration because doing so could lead to lock contention and failures.

* **Task migration**
Tasks are migrated depending on the <migrate-tasks> and <defer-ec> settings. Depending on the <migrate-tasks> setting, all task, all tasks except closed ones, or no tasks are migrated. 

  By default, all tasks except closed ones are migrated. When the task is migrated, references to source snapshot objects are updated to target snapshot objects. If <defer-ec> is false, the task execution context is loaded and migrated to the target environment. If objects are missing from the source snapshot, migration failures might occur when the execution context is loaded. If task or execution context migration is skipped, migration occurs the next time the task runs. Business object definition version references are not updated in the task execution context.

  If tasks are not migrated, deleting snapshots those tasks refer to is prevented. Certain deprecated task assignment methods lead to dynamic teams which cannot be migrated from the source snapshot. These tasks will block the original snapshot's deletion until they are deleted. 

  If a token policy file is used, you can move or delete tokens associated with an orphaned activity during the instance migration. Some token migration failures will not prevent instance migration. If this occurs, you can perform the token commands after the instance migration is completed. If all tokens for a process are deleted, the process moves to the completed state. The Process Inspector in the Process Admin Console shows orphaned tokens if any were created from instance migration.

Snapshot data and process instance migration overview:
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csnapshotandinstovw.html

## Troubleshooting

The migration failure of process instance and snapshot data could have a few different consequences.   Unlike other problems, they should be quite straightforward and easy to identify and troubleshoot.  More importantly, we have some corresponding remedies and solutions for most of the common issues, and I want to put my focus on the preventive suggestions at this section since our Standard Runtime section will cover the detailed troubleshooting part on how we could handle the runtime issues after instance migration.  Here I would like to bring up three typical scenarios for discussions: orphan token, unexpected symptoms after instance migration, and performance tuning issue during instance migration.  


## Data Collection
**1.	Log Files + Trace**

Because snapshot data and instance migration can be triggered during snapshot deployment AND after a new snapshot gets installed manually.  Therefore, we could suggest client to enable the trace of snapshot deployment if the migration fails as a step of snapshot install. 

Trace String: 
```
*=info: WLE.*=all: WAS.clientinfopluslogging=all: com.ibm.bpm.fds.*=all: ProcessApplicationLifecycle=all
```
If it’s not happening during the snapshot deployment, but an in-flight data migration after installation, client could use the simplified database trace as below.

Trace String:
```
*=info: WLE.*=all: WAS.clientinfopluslogging=all
```

**2.DB Tables**

For issues with instance migration, we are more likely to give a specific DB SQL query for client to run against their Process Server database and get the result back to us.  The SQL queries depend on the trace stack we find out at the #1. 

For example, we could see the similar stack at the trace we collected:
```
SELECT LSW_BPD_INSTANCE.INSTANCE_NAME as bpd_name, 
LSW_BPD_INSTANCE.BPD_INSTANCE_ID as bpd_instance_id, LSW_BPD_INSTANCE.DOCUMENTS_STATE as documents_state FROM      LSW_BPD_INSTANCE
WHERE      LSW_BPD_INSTANCE.EXECUTION_STATUS IN (1, 3, 6) AND LSW_BPD_INSTANCE.SNAPSHOT_ID = ? AND MOD(LSW_BPD_INSTANCE.BPD_INSTANCE_ID, ?) = ?
```
Or we could check the specific instance which fails to migrate from source to target snapshot at the table LSW_BPD_INSTANCE.

**3.Configuration**

Due to the reason that we have different configuration properties which could decide how a instance migration works, we will need to check the runtime configuration file to make sure client set them correctly.   Client usually made changes on 100Custom.xml and we will check both 100Custom.xml and TeamWorksConfiguration.running.xml to verify the change. 

Locations: 
```
Dmgr_Profile_Root\config\cells\cell_name\nodes\node_name\servers\server_name\process-server\config\system\100Custom.xml

Managed_Node_Profile_RooT\config\cells\cell_name\nodes\node_name\servers\server_name\process-
center(server)\config\TeamWorksConfiguration.running.xml
```
Here are some properties directly related to instance migration, we will need to pay close attention on them while checking the configuration files. 
```
<thread-pool-size>
<migrate-tasks>
<defer-ec>
<epv-deploy-default>
<disable-team-sync>
```

**4.TWX file**

Under some circumstances, if we are not able to get direct evidence from trace and DB export, we may have to check the differences between two installed snapshot and helped client with the issue like orphan token. 

#### Data Analysis

**1.Orphaned Token**

A token is a pointer that is associated with an activity. The token becomes orphaned when it is associated with an activity which has been deleted from the process.  When instance migration causes orphaned tokens, you must decide what to do with potential orphaned tokens or risk that the process instances won't complete.

Some instance migrations fail with orphaned token, but some don’t.  Another typical symptom could be the migrated instances fail to proceed to certain steps.  We could verify this issue by either using log stack or checking the orphaned token via Process Admin console- Inspector. 

For instance, you might see the very similar stack as below:
```
CWLLG0531E: An exception occurred during migration. Log the error and move on to next instance.
com.lombardisoftware.core.TeamWorksException: Attempt to
access TWObject with classId TWClass.f1e801c6-7957-40b0-8659-27bb3ab1c9b3 that is not available
rootContext=Snapshot.c137c120-ef38-4f82-a406-ff89ac6a6755
at 
com.lombardisoftware.core.TeamWorksException.asTeamWorksException(TeamWorksException.java:136)
```
Or you might see the following exceptions while trying to access a particular instance at Process Admin console. 
```
"CWTBG0047E:Process 'BPD.XXX-XXX-XXX-XXX-XXX' does not exist; it might have been deleted in the meantime"
```
Most of the orphan token issue are very obvious for us to find out.  The challenge for such issue is to implement the solutions as needed. 

**Typical Recommendations:**

a.	Apply Migration Policy File [Before migration]

The easiest way to identify and manage orphaned tokens is to generate a migration policy file and use it to specify whether each potential orphaned token should be moved or deleted during instance migration.

Instruction on generating migration policy file before instance migration:
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/managing_orphans_with_policyfile.html 

b.	Move Token [After migration]

If you migrate process instances without using a policy file, orphaned tokens might be created. In this case, you can use the REST API client to move these orphaned tokens. 

Instruction on using REST API to move token
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tmovingtokens.html 

c.	Delete Token [After migration]

You could also delete tokens if necessary.  To delete orphaned token, we offer both REST API and Process Admin console- Inspector to do this. 

REST API – Delete Token
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tdeletingtokens.html 
Process Inspector – Delete Token
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tdeletingtokensinpi.html 

**2.Unexpected symptoms After instance migration**

Many clients saw some unexpected symptoms after snapshot install or instance migration.  Other than the issues caused by orphaned token, clients may fail to delete the old snapshots, or the EPV/ENV values were not changed as expected.   Here is a case that we would like to bring up for discussion. 
```
Problem Description:

We migrated instances from snapshot A to snapshot B and then tried to delete the snapshot A as it’s no longer useful.  However, snapshot A cannot be deleted.

Error stack while executing the command line BPMDeleteSnapshot
WASX7015E: Exception running command: "AdminTask.BPMDeleteSnapshot('[-containerAcronym SASR -containerSnapshotAcronyms SAS_238 -force]')"; exception information:

java.lang.Exception: java.lang.Exception: You cannot delete a snapshot that is referenced by tasks belonging to BPD instances referencing another snapshot
```
In order to delete a snapshot successfully, we have to make sure there is no running instances & BPEL instances existing.  However, there is one situation which might block the snapshot deletion for that.  As client mentioned that they just performed instance migration from snapshot A to snapshot B, it’s possible that they left the closed or even all tasks on the snapshot A.   And the migrated instances which are related to these tasks could be still running. 

Therefore, we will firstly check whether they migrate all tasks to the new snapshot B or not.    We could verify this by enabling the trace suggested and find out the task ID which blocks the deletion.   Or we could check the configuration client used when they did the instance migration.  

We found the following stack from their configuration file 100Custom.xml and TeamWorksConfiguration.running.xml

<font color="blue">Keywords: migrate-tasks</font>
  
```
<server>

<instance-migration merge="mergeChildren">

<thread-pool-size merge="replace">5</thread-pool-size>

<migrate-tasks merge="replace">skip-closed</migrate-tasks>

<defer-ec>false</defer-ec>

</instance-migration> 
```
The parameter <migrate-tasks> decides which tasks could be migrated.  Here are the three options for it. 
  
Chooses which tasks will be migration. The following options are availble: 
  * all - Migrate all tasks
  * none - Migrate no tasks
  * skip-closed - Migrate all tasks except closed tasks

Skip-closed is the default value in order to improve the performance of the entire process, and it also proved that there are closed tasks remained on snapshot A and led to this issue.   

To resolve this issue, we could either delete all of the closed tasks on snapshot A Or we could migrate the remaining closed tasks to a new snapshot then redo the snapshot deletion. 

Delete Tasks via Process Admin: https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/bpm_db_health_tasks_delete.html 
Delete Tasks via command line BPMTasksCleanup
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/topics/rref_bpmtaskscleanup.html 

**3.Performance Tuning** 

Work attempted on existing instances for the process app could slow down the instance migration process or cause failures. Large instance migrations could also put a heavy workload on the database.    Therefore, another type of issues reported for instance migration is performance tuning.  Because of the large amount of data transaction, our clients may experience very suspicious performance slowdown. And the reasons behind the slowness could be various. 

Let’s take a look at this trace stack:
Keywords: <font color="blue">addGroupToInternalGroup</font> and <font color="blue">InstanceMigrationCore.performParticipantGroupMigration</font>
```
[2/13/16 0:46:50:945 CST] 0000008d ThreadMonitor W WSVR0605W: Thread "WebContainer : 4" (00000130) has been active for 720,534 milliseconds and may be hung. There is/are 1 thread(s) in total in the server that may be hung. at
java.net.SocketInputStream.socketRead0(Native Method) at java.net.SocketInputStream.read(SocketInputStream.java:140) at
com.ibm.db2.jcc.t4.z.b(z.java:199) at com.ibm.db2.jcc.t4.z.c(z.java:259) ... at com.lombardisoftware.client.delegate.InternalGroupsDelegateDefault.addGroupToInternalGroup(InternalGroupsDelegateDefault.java:409) at com.lombardisoftware.server.ejb.migration.PGMigration.migrating(PGMigration.java:87) at
com.lombardisoftware.server.ejb.migration.InstanceMigrationCore.performParticipantGroupMigration(InstanceMigrationCore.java:266) at
com.lombardisoftware.server.ejb.migration.InstanceMigrationCore.performGlobalMigration(InstanceMigrationCore.java:192) at com.lombardisoftware.server.ejb.migration.InstanceMigrationCore.migrateGlobalData(InstanceMigrationCore.java:130) 
```
The stack above explains that the performance issue detected may have something to do with the participant groups.  And it’s reasonable for us to query the total number of records in related tables such as LSW_PARTICIPANT_GROUP.   And also, we could try to add the database trace to find out the specific SQL query.  It turned out the issue was caused by the large number of user groups, and we could recommend our client to purge the user group data.

Except for this, client may encounter performance issues like database lock contention, thread hung with timeout and so on. Here are some performance tuning best practice related to instance migration that we could always suggest client to check and test. 

**Best Practice of Performance Tuning:**
* Thread pool size for instance migration. The default size of parameter <thread-pool-size> is 5. This is the number of threads that concurrently perform migration activities. 
  
    To be noticed that all of the snapshot data (ENV, EPV and Team) migration are performed in one transaction.   To the contrary, each process instance is migrated in its own transaction. Multiple threads process the instance migration work based on the value <thread-pool-size>of the setting. 
  
* Migrate completed tasks or not. The default value is set to skip completed tasks during migration. As I mentioned at the previous example, we have three options for parameter <migrate-tasks>, migrate all tasks could affect the entire performance and total time in a very large extent.  

* Defer to updating task execution context during migration or not. 

  Because the execution context for a BPD instance or task is saved as a binary large object (BLOB) data type, the migration program has to load and deserialize the BLOB data, analyze, and update it, then serialize and save it back to the database. These are expensive database operations. If the volume of BPD instances and tasks that need to be migrated is large, the overall instance migration time can be significant.

  Deferring to updating task execution context <defer-ec> means that the migration program will not load, analyze, and write back the task execution context to the database. This process can save much time for migration because task execution context is saved as a BLOB, which requires expensive operations to load from and save to a database. The task execution context will be updated when the task is loaded in the future.

* Purge application data before instance migration 

  Data purge is also a good remedy for instance migration performance issue, we mainly focus on BPD instances and tasks as these data play significant roles on database activities.   We could use both PAC console and command lines BPMTasksCleanup BPMProcessInstancePurge to perform such purging.  For more detailed information, please check our chapter for ‘Housekeeping.’ 

## Reference (Optional)

* Opening a process instance migrated from an old snapshot causes the CWTBG0047E error to appear in IBM Business Process Manager
 https://www.ibm.com/support/pages/opening-process-instance-migrated-old-snapshot-causes-cwtbg0047e-error-appear-ibm-business-process-manager-bpm 
* Why are user / group lookup causing instance migration performance issue?
https://www.ibm.com/mysupport/s/question/0D50z000062kIuuCAE/why-are-user-group-lookup-causing-instance-migration-performance-issue?language=en_US
* Instance Migration
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csnapshotandprocessmig.html 
