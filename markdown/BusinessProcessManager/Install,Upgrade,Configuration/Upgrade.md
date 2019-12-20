# BAW/BPM Upgrade and Migration

## Overview 
Always encourage client to upgrate to the latest software versions to avoid running production systems on an unsupported configuration. Note that upgrades are different from migrations. Upgrades are an in-place upgrade of software. Migrations involve moving to a different platform, a different database, operating system or hardware.

#### 1.IBM Installation Manager (IIM):

IBM Installation Manager is a tool that you can use to upgrade your IBM software packages. Wizards guide you through the steps that you must take to install, modify, update, roll back, or uninstall your IBM products.
IBM Installation Manager is used to install WAS/BPM binary files.

a. What are the critical directories that you must back up in case of Installation Manager data loss or corruption?
http://www-01.ibm.com/support/docview.wss?uid=swg21665878

b. IM log files
https://www.ibm.com/support/knowledgecenter/en/SSVJJU_6.4.0/com.ibm.IBMDS.doc_6.4/c_ig_ibmim_sds_log_files.html

  * the IM log is a xml file you will find it under IM_HOME/data/logs i.e. 20180404_1014.xml
  * there are different tags available:
    - Info = Green
    - Warning = Yellow
    - Error = Red

#### 2.BPM/BAW Upgrade Roadmap:

Each of the IBM Business Process Manager configurations has its own roadmap to guide through upgrading and configuring that version of the software. 

Find all the supported upgrade roadmaps(for different source and target versions) from below link: 
https://www-01.ibm.com/support/docview.wss?uid=swg21610883

a.	BPM upgrade:
https://www-01.ibm.com/support/docview.wss?uid=swg27050085

b.	BAW upgrade: 
https://www-01.ibm.com/support/docview.wss?uid=swg27050790

c.	Attention:
* There are some steps you can ignore/skip for Advanced-Only setup.
* BPMv860 ships option to switch to Java 1.8
* Usually rollback is needed if DBUpgrade task failed
* Usually rollback is not needed if BootstrapProcessServerData or Toolkit upgrade fails  

#### 3.BPM/BAW Upgrade log:

a.	Provide the log files if the profiles have already been created.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compress all files from the following directory :

* deployment_manager_ profile_root/logs/            
(contain logs related to database initialization and upgrade) 
* deployment_manager_ profile_root/properties/
(contain logs related to configAction and logs) 
* deployment_manager_ profile_root/workspace/
(contain flags related to successful upgrade)

b.	Monitor the <profile_root>/properties/service/productDir/logs/runConfigActions.log file to see the activity that is in progress during the profile upgrade process.
logs to check: <Dmgr_profile_root>/logs
* DBUpgrade_timestamp.log (upgrade database schemas and data)
* bootstrapProcessServerData.log (loading DB with system information)
* BPMConfig_xxxxx.log (create, update, upgrade or delete an IBM BPM deployment environment)
* BPMUpdateSystemApp_xxxxx.log (update on app [twx] level)

Check for INSTCONFSUCCESS or INSTCONFFAILED If running DBUpgrade was unsuccessful, correct the errors and restore your databases from the backup before running the command again.

c.	Those log can be collected by using the IBM Business Process Manager data collector:
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/ttro_isa.html

d. To enable wsadmin.properties trace for an upgrade issue with the BPMUpdateSystemApp/bootstrap command, do the following:  
Modify the wsadmin.properties file located in the following directory:  
install_root/profiles/profile_name/properties/  
  
Replace following line:  
    #com.ibm.ws.scripting.traceString=com.ibm.*=all=enabled  
  
With this line:  
    com.ibm.ws.scripting.traceString=WLE.*=all:org.springframework.jdbc.*=all:WAS.clientinfopluslogging=all 

#### 4.BPM Upgrade troubleshooting checklist

a.	You should be able to find the product version info from dbupgradexxx.log file:
Source version is : 8.6.1.xxxxxx
This version info should match that in BPM configuration properties if customer follow the upgrade procedure correctly
(you may find the log shows upgrade from version XXX to version YYY, but XXX and YYY are not correct version, that does not mean upgrade goes wrong. It’s output in middle of upgrade process)

b.	Make sure the database table upgrade is successful in dbupgradexxx.log
If it failed, you will find an error in this log

c.	In BPMconfigupgradexxx.log, make sure you can find the upgradeApplicaiton records for those BPM applications. So that you know the upgrade does happen. You should also make sure there is no error found in this log.

d.	In bootstrapProcessServerData.log, you should find: bootstrapping of data completed successfully if the upgrade procedure is good. There will be an error message if upgrade fails.

e.	In BPMUpdateSystemApp_xxxxx.log, you should be able to find BPMUpdateSystemApp completed successfully in at the end of log if the upgrade procedure is good.

f.	After checking those logs under DMGR profile, you need also check the BPMconfigxxx.log under node profile, make sure there is no error.

g.	Check the nodeagent snycNode.log, make sure the Synchronization is successful.

#### 5.BPM Environment Backup

BPM environments need backup before upgrade.

<p>a.	<b>Installation Manager Backup</b> --- You need backup four Installation Manager folds: 1)IM Registry File, 2)IMShared, 3)IM Agent Data, 4)IM Install Dir</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use OS utility or OS command to backup above IIM paths.

b.	**Profile Backup** --- Before you upgrade a product, run the backupConfig command to back up the configuration files of each profile.

c.	**Database** (BPMDB, CMNDB, PDWDB) --- Ask database administrator to backup BPM databases. Make a backup of the databases at the same time as making the profile backup.

d.	**BPM customization** --- Backup customized artefacts before upgrade, in case any customization is missing during upgrade. ( theme.css、collaboration.css、img)

#### 6.BPM Upgrade failure samples

If BPM/BAW upgrade fails, find the correct log by referring “BPM/BAW Upgrade log” section. There are some samples here:

a. Upgrade failed at bootstrapping of the Process Server, check databasebootstrapProcessServerData.log and find:
[xxxxxx] xxxxxx AntTasksHelpe I  UserId could not retrieved, Either DeAdmin role is not set or Cell Admin role is not set

**Possible solution:**
Check whether the right user id with appropriate authorization was deployed and have a look at table LSW_USR_XREF in the Process Server database to confirm that the upgrading user id is listed there.

b. Upgrade failed at BPMUpdateSystemApp failed, check BPMUpdateSystemApp.log and find:

[xxxxx] MutableSnapsh W CWLLG0523I: Ignoring identical dependency PODependency(source=TWProcess.ed8d1a03-7895-4126-ac69-e94ea4349be8, sourceReferenceLocation=Coach:2025.3b7ce7d2-b133-40b9-91bc-8543896da95b/CoachView:/64.ad2b879f-ee68-4bc9-9b1b-fb7c0856a48e, reference=Ref[/CoachView.ad2b879f-ee68-4bc9-9b1b-fb7c0856a48e]).

**Possible solution:**
The only explanation for this appears to be the BPM database may have been corrupted during the initial BPMUpdateSystemApp run. If the Toolkits are not upgraded properly, there is a potential problem with mismatch between the System Application, installed binary and toolkits in the database.

Need revert the system back to the time before they started the upgrade so they applied a backup of the database and the BPM binaries

c. Upgrade failed at DBUpgrade command, (Customer upgrade from 8.5.5 to 19.0.0.2) check DBUpgrade_timestamp.log and find:

[xxxxx] failed at 8.5.6 to 8.5.7
[xxxxx] 00000001 FINE: com.lombardisoftware.tools.SQLFileExec.handleError - ORA-30556: either functional or bitmap join index is defined on the column to be modified ORA-06512: at line 9
java.sql.SQLException: ORA-30556: either functional or bitmap join index is defined on the column to be modified ORA-06512: at line 9

**Possible solution:**
BPM database upgrade failed at 8.5.6 to 8.5.7 step with bitmap join index error. That needs to check if there is bitmap join index and disable it. After correcting the error and restore the database from the backup, then run the DBUpgrade command again. That will see upgrade 8.5.6 to 8.5.7 success.

What can be seen from these samples is that it is important to understand where the upgrade failed and find the correct log file to check. Usually you need look at the very first failure that occurred in the log files to find the real cause and resolve the problem.


## News 

### 2019-09 - BPM Upgrade Information

Friendly reminder to please us this link with BPM customers when discussing upgrading to the latest product level. This is a good link to send to any customer still using BPM to warn them of the impending EOS dates but especially for an upgrade discussion.  
https://www.ibm.com/support/pages/upgrading-business-process-manager-latest-product-level

Also if you happen across an ESB customer we do have this similar link for them:  
https://www.ibm.com/support/pages/upgrading-websphere-enterprise-service-bus-wesb-or-ibm-business-process-manager-enterprise-service-bus-bpm-esb

### 2019-09 - Oracle Support

For background, Oracle changed their lifecycle policies. It is described in this article:  
https://support.oracle.com/knowledge/Oracle%20Database%20Products/742060_1.html

Our customers have been a bit confused by this and are starting to ask a lot of questions regarding Oracle support.  
* The following things can be shared with customers:  
* Oracle 12.2 is supported starting with BPM 8.6 2017.12  
* We are changing our SPCRs so that 18C is also supported by all releases which support 12.2.  
* Detailed System Requirement reports are now updated and we do support Oracle 19c with all BPM 8.6 and BAW 18.x  

