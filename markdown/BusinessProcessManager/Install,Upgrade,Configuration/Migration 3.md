Date:2019-11-11

## Overview

Business Process Manager/Business Automation Workflow  (BPM/BAW) Fundamentals Education is an overview of BPM/BAW products. This module teaches the basics of migration and troubleshooting BPM/BAW migration issues. This module serves as the basis for in-depth education modules on BPM/BAW migration.

#### 1.Migration Overview:

A product migration applies when you want to move the current installed product version to a new product version. In most of the cases you can identify a migration by checking the product version number. The major product version is defined by the first digits and the cumulative fixes packs by the last digits. 
For example:

Major version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			Cumulative fix
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BPM 8.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.0.1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BPM 8.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.5.5 / 8.5.6 /8.5.7

A version to version migration requires a full installation of the binary files of the new version.The new binary files (the new version) are in a different directory than the old binary files (the old versions).

A hardware migration requires a full installation of the binary files of the new version.The new binary files (the new version) are in a different location(hardware) than the old binary files (the old versions).

Find all the supported upgrade roadmaps(for different source and target versions) from below link: 
https://www-01.ibm.com/support/docview.wss?uid=swg21610883

#### 2.IBM Installation Manager (IIM):

IBM Installation Manager is a program that helps you to install IBM products. Wizards guide you through the steps that you must take to install, modify, update, roll back, or uninstall your IBM products. It keeps track of what you are about to install, software components that you have already installed, and components that are available for you to install. 

In a migration process, if the IIM is installed on new hardware you must  make a backup of the agent data location directory of the old installation to keep track of the installation history:

Here is a technote how to restore the IM history with BPM and BAW:  
https://www.ibm.com/support/pages/restoring-ibm-installation-manager-history-ibm-business-process-manager-bpm-and-websphere-enterprise-service-bus-wesb

**NOTE:** Changing the content, files, or directories in the agent data location directory or subdirectories is not supported. Any modification to this data is likely to cause corruption of the installed packages making it impossible to update, uninstall, modify, rollback, or install any packages in the future.

a. What are the critical directories that you must back up in case of Installation Manager data loss or corruption?
http://www-01.ibm.com/support/docview.wss?uid=swg21665878

b. IM log files
https://www.ibm.com/support/knowledgecenter/en/SSVJJU_6.4.0/com.ibm.IBMDS.doc_6.4/c_ig_ibmim_sds_log_files.html

* the IM log is a xml file you will find it under IM_HOME/data/logs i.e. 20180404_1014.xml
* there are different tags available:
  - Info = Green
  - Warning = Yellow
  - Error = Red

#### 3.BPM/BAW Migration:

a. BPM Migration:

Most customers use the Interactive Migration Guide to prepare migration from system_X/BPM_X --> system_Y/BPM_Y. 
Interactive Migration Guide link:
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/bpm_mig_roadmap_form.html

Migration Mustgather: 
https://www-01.ibm.com/support/docview.wss?uid=swg21663802
```
<BPM_install_root>/profiles/dmgr_profile_name/dbscripts
<BPM_install_root>/logs
<BPM_install_root>/profiles/dmgr_profile_name/logs
<BPM_install_root/profiles/profile_name/logs
<snapshot_directory>/logs
```

b. BAW Specific:
Planning Migration:
https://www.ibm.com/support/knowledgecenter/en/SS8JB4_18.0.0/com.ibm.wbpm.imuc.doc/topics/cpln_mig_planning.html

c. Same version to new hardware:
* Export config from old env with BPMConfig 
* Import config to new env with BPMConfig:
https://www.ibm.com/support/knowledgecenter/SS8JB4_18.0.0/com.ibm.wbpm.imuc.doc/topics/newhw_de.html

#### 4.BPM/BAW Migration Troubleshooting

If your deployment environment was not migrated successfully, you can take steps to resolve issues. Consider the following possibilities: 
* SOAP invocation timeout might have occurred; 
* Migration commands for the target environment failed.
* Migration commands for the source environment failed.

Read this page if any migration issue:
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/rmig_trouble.html

**a. SOAP invocation timeout**
If you are using a SOAP connection, the migration command can take longer to complete than the specified SOAP timeout value. You might see an exception like java.net.SocketTimeoutException: Read timed out.

To prevent this problem, modify the value of the com.ibm.SOAP.requestTimeout property in the soap.client.props file.

* If you installed the new version of the product on the same computer as the source environment, the file is found in BPM_home_8.5/util/migration/resources/.

* If you installed the new version of the product on a different computer and copied the migration files to the source environment, the file is found in remote_migration_utility/util/migration/resources/.

**b. Migration commands on target environment**
To diagnose the reason for a migration failure, you can enable tracing and rerun a command. To enable tracing for migration commands, complete the following steps:

**1)Locate the logging.properties file.**
* For the DBUpgrade command-line utility, 
the file is in BPM_home_8.5/util/dbUpgrade. 

* For the following command-line utilities:
BPMExtractSourceInformation
BPMManageApplications
BPMMigrate
the file is in BPM_home_8.5/util/migration/resources. 

**2)Set the log level in the logging.properties file.** 

The default log level is FINE for both global logging level and file output log level. Change both properties to FINEST to capture more detail in the log. 

**c. Migration commands on source environment**
If you ran all the migration commands on the source environment and created a snapshot before the migration failed, you do not need to rerun all the migration commands again from the beginning. If the migration failed on the target, for example at the database upgrade step or when you ran the BPMMigrate command, you can restore the database and rerun the commands on the target only.

Please see the Upgrade page.  
https://pages.github.ibm.com/dba-support/DBA-Education/#/BusinessProcessManager/Install,Upgrade,Migration/Upgrade
