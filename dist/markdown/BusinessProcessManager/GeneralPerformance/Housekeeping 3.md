Date:2019-12-13

## Overview

There are several areas of IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW) system-level cleanup that should be done on a regular basis to help to save disk space on the database server and to improve overall performance of the BPM/BAW environment. Housekeeping Fundamentals Education teaches the basics how to do the housekeeping, best practices of when to do the housekeeping, and a better understanding of overall procedures. This module serves as the basis for in-depth education modules on BPM/BAW housekeeping.

## Prerequisites

1.Terminology
**Named snapshot(s)** - these types of snapshots are present in both types of BPM servers - Development (Process Center) and Runtime (Process Server). In Development they are created each time you click on the Snapshot icon in Process Designer (PD) or WebPD and name your snapshot. Runtime named snapshots are the application snapshots you deploy from your Development environment, both online or offline deployments.

**Un-named snapshots** - these types of snapshots are present only in your Process Center/Development environments. They are NOT present in Process Server/Runtime environments. In Development these snapshots are created each time any developer working in PD/WebPD performs a "Save" operation for any item, including Business Process Diagrams (BPD), services, etc.

**PC/DEV** – Acronym for Process Center / Development BPM environment

**PS/Runtime** – Acronym for Process Server / Runtime BPM environment

**PDW** – Acronym for Performance Data Warehouse

2.BPM Database and relation between important tables
All BPM objects are stored in the BPM databases. Please note that this information is just shared for educational purposes. The BPM database is considered to be a "black box" and you should NOT directly manipulate data in any of the tables. All database updates should be done through APIs and other supported methods. For the purposes in this article, we start by examining the following:

&nbsp;&nbsp;&nbsp;&nbsp;**a. <u>LSW_PROJECT</u>** – This is where all the process application (PA) and toolkit (TK) names are stored.  The columns we are most concerned with are:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1) NAME** – the name of the PA/TK.  This is shown in the Process Designer and Process Center Console as the logical display name.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2)	PROJECT_ID** – the GUID of the PROJECT.  This will be used to lookup the various snapshots in the LSW_SNAPSHOT table.
&nbsp;&nbsp;&nbsp;&nbsp;**b. <u>LSW_BRANCH</u>** – This is where all the PAs and TKs tracks are stored
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1)	NAME** – the name of the Track (Main - default).  This is shown in the Process Designer and Process Center Console as the track name in the left top corner (drop-down list)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2)	BASE_SNAPSHOT_ID** - this column would be populated only when it's a non-default track (not Main), then it would point to a base (Main) snapshot id
&nbsp;&nbsp;&nbsp;&nbsp;**c. <u>LSW_SNAPSHOT</u>** – This is where all the named and unnamed snapshots will be listed.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1) PROJECT_ID** – we use this to select the appropriate snapshots for a project we want to examine.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2)	NAME** – Name of the snapshot if a name has been specified (by a user creating a new snapshot), or null if the snapshot is unnamed.
&nbsp;&nbsp;&nbsp;&nbsp;**d. <u>LSW_DUR_MSG_RECEIVED</u>** – Where durable intermediate message events (IMEs) are stored.

## Components

**1.The most important tables that gets cleaned up**

**<u>PA/TK snapshot cleanup:</u>**
Main tables are involved in this cleanup are - LSW_SNAPSHOT, LSW_PO_VERSIONS, LSW_FAVORITES, LSW_BRANCH, LSW_PROJECT, LSW_USR_GRP_XREF, LSW_USR_GRP_GRP_XREF, LSW_USR_GRP_* .

**IMPORTANT NOTE:** As part of snapshot cleanup instances and tasks are cleaned up automatically as well. So, see the next section to see what tables are involved in instances/tasks cleanup.

**<u>Instances/tasks cleanup:</u>**

**Users/groups:**
LSW_USR_GRP_MEM_XREF
LSW_USR_GRP_XREF
LSW_USR_GRP_*

**Task associated with this instance from:**
LSW_TASK_ADDR
LSW_TASK_EXECUTION_CONTEXT
LSW_TASK_NARR
LSW_TASK_FILE
LSW_TASK_IPF_DATA
LSW_TASK_EXTACT_DATA
LSW_TASK

**BPD Instance data from:**
LSW_BPD_INSTANCE_DOC_PROPS (only if legacy BPM 8.0.x docs are still used)
LSW_BPD_INSTANCE_DOCUMENTS (only if legacy BPM 8.0.x docs are still used)
LSW_BPD_INSTANCE_VARIABLES
LSW_BPD_INSTANCE_DATA
LSW_BPD_NOTIFICATION
LSW_RUNTIME_ERROR
LSW_BPD_INSTANCE
LSW_INST_MSG_INCL

**Durable message event cleanup:**
LSW_DUR_MSG_RECEIVED

**2.Critical amount of runtime data**
Starting BAW 18.0.0.1 the following useful information is added in the system out log each time during server startup - 

The system maintenance monitor is determining if maintenance is required. The system is in an OK state.
```
-----------------<logging sample>-----------------
[10/9/18 12:48:59:415 UTC] 00000171 MaintenanceLo I com.ibm.bpm.maintenance.MaintenanceLogger log
 
Current number of snapshots: 77
Maximum number of snapshots allowed: 500
No action is required.
 
[10/9/18 12:48:59:416 UTC] 00000171 MaintenanceLo I com.ibm.bpm.maintenance.MaintenanceLogger log
 
Current number of unnamed snapshots: 1,093
Maximum number of unnamed snapshots allowed: 10,000
No action is required.
 
[10/9/18 12:48:59:417 UTC] 00000171 MaintenanceLo I com.ibm.bpm.maintenance.MaintenanceLogger log
 
Current number of task instances: 119
Maximum number of task instances allowed: 2,400,000
No action is required.
 
[10/9/18 12:48:59:418 UTC] 00000171 MaintenanceLo I com.ibm.bpm.maintenance.MaintenanceLogger log
 
Current number of process instances: 38
Maximum number of process instances allowed: 600,000
No action is required.
 
[10/9/18 12:48:59:419 UTC] 00000171 MaintenanceLo I com.ibm.bpm.maintenance.MaintenanceLogger log
 
Current number of durable messages: 3
Maximum number of durable messages allowed: 8,000,000
No action is required.
--------------------------------------------------
```
You may get all of this information using the database queries and/or wsadmin commands in earlier versions of BPM but above information gives you a good idea of what IBM considers good/allowed numbers of snapshots/instances/tasks/durable message events in the system. So, you may do your cleanup/purge job based off of this information.

Besides, we can see such kind of performance data via Process Admin Console.

&nbsp;&nbsp;&nbsp;&nbsp;a.Under **Server Admin > Performance > Dashboard**, click on **Load Data**.

Refer to Knowledge Center document:
[Discovering and managing database performance issues by using the Performance Dashboard](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/pac_performance_dashboard.html)

![图片 1](https://media.github.ibm.com/user/228551/files/2495b880-1d81-11ea-867e-a32c524b9b3c)

&nbsp;&nbsp;&nbsp;&nbsp;b.Under **System Maintenance Status**.

![图片 2](https://media.github.ibm.com/user/228551/files/30817a80-1d81-11ea-848b-ad34ce1ecccb)

**3.Types of cleanup**

There are certain things to be aware of before you start performing any type of cleanup and especially snapshot cleanup.

**What you need to know first -**

&nbsp;&nbsp;&nbsp;&nbsp;a. It is better to perform it by schedule at the time when there is little to no activity on the BPM server. It puts quite a high load on the database and on a big number of important BPM tables, so the less overloaded the BPM server the better.
&nbsp;&nbsp;&nbsp;&nbsp;b. Make sure you have a good backup of the database before you perform any type of cleanup (especially in Production). So a good schedule sequence would be - backup the database first, cleanup procedure next.
&nbsp;&nbsp;&nbsp;&nbsp;c. Best practice when to do the cleanup
 
Refer to [Managing persisted data](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/persisted_data.html) for

&nbsp;&nbsp;&nbsp;&nbsp;a. Process Instances cleanup
&nbsp;&nbsp;&nbsp;&nbsp;b. Tasks cleanup
&nbsp;&nbsp;&nbsp;&nbsp;c. Snapshot cleanup
&nbsp;&nbsp;&nbsp;&nbsp;d. Durable Message Events cleanup
&nbsp;&nbsp;&nbsp;&nbsp;e. Shared Business Objects cleanup
&nbsp;&nbsp;&nbsp;&nbsp;f. BPM temporary directory cleanup

Besides, we can do these cleanups.

&nbsp;&nbsp;&nbsp;&nbsp;g. Old EPV values cleanup

To reduce the performance impact of having a large number of exposed process variables (EPVs), use [BPMEPVHistoryCleanup](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_bpmepvhistorycleanup.html) command to delete EPV values that are no longer required.

&nbsp;&nbsp;&nbsp;&nbsp;h. Event Manager on-hold tasks deletion

Event Manager tasks are special kind of tasks that are not human tasks. Event Manager tasks include UCA's, timer events, message events, token move tasks. As you may know there are cases when Event Manager might get stuck and as a result you may get Event Manager tasks (UCAs, timer events, BPD token move tasks, Message Events) getting stuck. As a result in the event manager console, these events are scheduled for execution on "1/2/99" or "2099-02-01" depending on localization. In other words, they will stay there forever unless you replay them using the [BPMReplayOnHoldEMTasks](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_bpmreplayonholdemtasks.html) command. But if you know for sure that you don't want to replay those tasks and instead, you want to get rid of them because associated process instance is no longer valid for such a replay then use [BPMListOnHoldEMTasks](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_bpmlistonholdemtasks.html) and [BPMDeleteOnHoldEMTasks](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_bpmdeleteonholdemtasks.html) commands for that.

You can also do this using the UI in Process Admin Console (PAC):

PAC -> IBM BPM Admin -> Health Management -> Delete Event Manager Tasks.

&nbsp;&nbsp;&nbsp;&nbsp;i. Purging Portal Search Index (aka Lucene Index)

 In order to build up this index, BPM uses database tables as well as file system (for the local storage of Lucene index). The tables in BPM database for the index are - 
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1) BPM_TASK_INDEX
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2) BPM_INSTANCE_INDEX
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3) BPM_TASK_INDEX_JOB

Currently, there is no automatic maintenance task running, which will delete unneeded data from table (1) and (2). Only for table (3) cleanup is done on a regular basis (by default every hour).

If you're running on BPM beyond IBM BPM 8.6 CF2018.03 then the following [dwAnswer](https://ibmsf.force.com/mysupport/s/question/0D50z000062klCJCAY/how-to-purge-rows-from-bpmtaskindex-and-bpminstanceindex-tables-which-relates-to-tasks-and-instances-which-have-been-deleted-from-bpm-database-and-from-all-existing-process-portal-search-indexes?language=en_US) has all the details and SQL scripts you need to know on how to cleanup (1) and (2) tables after you perform a cleanup of snapshots / instances / tasks.

If you're running on BPM 8.6 CF2018.03 or BAW versions then the scripts/commands are included as part of the Product (indexTablesCleanup.bat for Windows or indexTablesCleanup .sh for Linux). More details can be found in the following [Knowledge Center](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/cadm_task_index_updating.html#cadm_task_index_updating__cleanup_indextables) article.

The overall advice is to always run this cleanup after you do a cleanup of any of runtime data.

## Best Practices

**When to do the cleanup?**

**You can consider cleanup under any of these situations.**
1.Instance or task querying takes a long time.
&nbsp;&nbsp;&nbsp;&nbsp;a. Check instance and task table counts referring to “A．Check BPM database table counts”.
&nbsp;&nbsp;&nbsp;&nbsp;b. According to “B．General recommendation based on table counts”, go for instance cleanup.

2.Slowness for most of REST API calls.
&nbsp;&nbsp;&nbsp;&nbsp;a.Check SystemOut.log of AppTarget servers searching by “elapsed time”.

If seeing lots of different REST API calls slowness like this, that means you should consider for cleanup continuously.
```
-----------------<logging sample>-----------------
[10/1/19 17:15:58:030 CST] 00000562 LoggingUtils  I   The elapsed time for the following REST request was 102.38 seconds, which exceeds the warning threshold of 60 seconds:                  https://bpm.abc.com/rest/bpm/wle/v1/coachflow/instancedata       
[10/1/19 17:15:58:056 CST] 0000063b LoggingUtils  I   The elapsed time for the following REST request was 165.62 seconds, which exceeds the warning threshold of 60 seconds:                    https://bpm.abc.com/rest/bpm/wle/v1/task/actions                              
[10/1/19 17:18:34:494 CST] 00000638 LoggingUtils  I   The elapsed time for the following REST request was 66.71 seconds, which exceeds the warning threshold of 60 seconds:                    https://bpm.abc.com/rest/bpm/wle/v1/coachflow/service/1.6267619e-cf32-483e-b857-fe1bfba907eb       
[10/1/19 17:27:13:150 CST] 000006e5 LoggingUtils  I   The elapsed time for the following REST request was 78.57 seconds, which exceeds the warning threshold of 60 seconds:                     https://bpm.abc.com/rest/bpm/wle/v1/task/658483                    
[10/1/19 17:29:33:497 CST] 0000057d LoggingUtils  I   The elapsed time for the following REST request was 80.42 seconds, which exceeds the warning threshold of 60 seconds:                      https://bpm.abc.com/rest/bpm/wle/v1/process/96919/actions        
[10/1/19 17:45:53:096 CST] 00000793 LoggingUtils  I   The elapsed time for the following REST request was 117.68 seconds, which exceeds the warning threshold of 60 seconds:                     https://bpm.abc.com/rest/bpm/wle/v1/process/38410
--------------------------------------------------
```
&nbsp;&nbsp;&nbsp;&nbsp;b.	Check instance and task table counts, also snapshot table counts referring to “A．Check BPM database table counts”.
&nbsp;&nbsp;&nbsp;&nbsp;c.	According to “B．General recommendation based on table counts”, go for instance cleanup and snapshot cleanup.
3.	Slowness on Process Portal occurs and potentially increases to an unusable state.
&nbsp;&nbsp;&nbsp;&nbsp;a.	Collect client-side network data:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）	HAR file captured through Firefox & Google Chrome Developer tools (F12) Network tab.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）	XML file captured through IE Developer Tools (F12) Network tab.
&nbsp;&nbsp;&nbsp;&nbsp;b.	Review client-side network data by Fiddler.
If slowness happens on REST call execution in BPM server side, then go to the same steps mentioned in situation 2).

![图片 3](https://media.github.ibm.com/user/228551/files/3aaf7300-1d99-11ea-94f2-e3df3813ecdd)

4.BPM database tables are using too much disk space.
[LSW_PROCESS table is Occupying 10 GB data, can I clean this and how do I do that?](https://developer.ibm.com/answers/questions/324008/lsw-process-table-is-occupying-10-gb-data-can-i-cl/)

The LSW_PROCESS table contains the models of services (integration services, human services, etc.). It contains a row for all versions for all services.
To get rid of data there, it is recommended to cleanup old snapshots, especially unnamed snapshots.

5.Exposed service REST call slowness.
&nbsp;&nbsp;&nbsp;&nbsp;a.	Check SystemOut.log of AppTarget servers searching by “elapsed time”, and see slow REST call of exposed service, like this:
[10/2/19 10:03:36:786 CST] 00000125 LoggingUtils I The elapsed time for the following REST request was 341.75 seconds, which exceeds the warning threshold of 60 seconds: https://bpm.abc.com/rest/bpm/wle/v1/exposed
&nbsp;&nbsp;&nbsp;&nbsp;b.	Check these two table counts of BPM database, the larger counts the poorer performance of exposed service REST call.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`1）select count(*) from <schema_name>.lsw_favorite where enabled = 'T';`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`2）select count(*) from <schema_name>.lsw_snapshot where is_active = 'T';`
&nbsp;&nbsp;&nbsp;&nbsp;c.	To improve exposed service REST call performance, go to consider for unneeded snapshot cleanup.
&nbsp;&nbsp;&nbsp;&nbsp;d.	Additional, <branch-context-max-cache-size> property value should be equal to or greater than the number of active snapshots in order to get acceptable performance. You can check <branch-context-max-cache-size> value in TeamWorksConfiguration.running.xml , which is located in the following locations:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）Process Center profile: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;install_ root/ profiles/profile _ name/config/cells/cell_name/nodes/node_name/servers/server_name/process-center

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）Process Server profile:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;install_ root / profiles/profile _ name/config/cells/cell_name/nodes/node_name/servers/server_name/process-server

#### Reference

1.Check BPM database table counts
[Useful SQLs for performance related issues](https://w3id.sso.ibm.com/auth/sps/samlidp2/saml20/logininitial?RequestBinding=HTTPPost&PartnerId=https://w3-connections.ibm.com/samlsps/IBMWebSphereSamlACSListenerServlet&Target=https://w3-connections.ibm.com/blogs/qingzou/entry/Useful_SQLs_for_performance_related_issues&NameIdFormat=email)

2.General recommendation based on table counts
[How do I know the when the BPM databases should be cleaned up?](https://www.ibm.com/mysupport/s/question/0D50z000062kSWDCA2/how-do-i-know-the-when-the-bpm-databases-should-be-cleaned-up?language=en_US) 

**Applications and Snapshots**

Generally when LSW_SNAPSHOT has more than 100,000 rows or LSW_PO_VERSIONS has more than 1,000,000 rows the system may need to be pruned to increase performance. First check to see if the environment has many active snapshots from the same application. In a DEV, TEST or QA type environment months of testing may have hundreds of active snapshots for one application. Work with client application developers to start archiving old and unneeded applications. Then work to schedule deleting the snapshots. On the Process Center you can have the [unnamed snapshots auto delete](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/unnamed_snapshots_deletion_ovw.html) enabled.

**Instances and Tasks**
The key is the ratio of closed to total instances along with the age of the closed instances, which can be counted on LSW_BPD_INSTANCE table. For example we will say the business decided instances closed more than 30 days old may be deleted. If the percentage of closed past 30 days to all instances is more than 30% look into making a regular purge policy for instance cleanup.
