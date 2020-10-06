Date:2020-01-16

## Overview

The RPA (Robotic Process Automation) Fundamentals Education is an overview of the different parts of RPA which is built on top of Automation Anywhere. This module teaches the basics of an AA install, what types of options are selected and what they do

## Prerequisites

1.Please see the [IBM Installer](https://pages.github.ibm.com/hippo00/DBA-Education/#/RoboticProcessAutomation/IBM%20Installer) section first in order to see what the IBM RPA installer specific components do
2.Parts of this education may also be covered in the AA side [Be The Bot Doctor](https://aaibm.litmos.com/account/login?ReturnUrl=%2fhome%2fcourse%2f2211035%3fr%3dFalse%26ts%3d637108906820614514&r=False&ts=637108906820614514)

## Component

1.AA Installer
2.Initial Post-install configuration
3.Editing the config after the install
4.Upgrade, Repairing, and Rolling Back

## Troubleshooting

**AA Installer**

After an IBM RPA install is started for the Control Room, it will bring up an installer window to guide you through the install. The possible options it will display will depend on what is selected with the [Express](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/install/installation-express.html) option providing few options while the [Custom](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/install/installation-custom.html) option will provide all potential customizations for the installer.

Both options will allow you to customize the install paths along with the database you are connecting to along with the DB names (please note this is only true for MSSQL DBs, if you are using Oracle DB you must select a Custom install). 

If you select the Custom option however, you will get the following steps as well:

* Configuring the cluster setup* (this means a HA install will also require you to perform a custom install)
* Configuring TLS including importing a custom certificate vs creating a self-signed certificate (which is the default option done in an express install)
* Configure the service credentials (Express defaults to the local system account performing the install) 

*Please note, due to the other cluster IP addresses needing to be selected during the initial install, that means that it is not possible to later add in additional clusters to a HA setup without using the installer. This is a good candidate for a RFE incidentally as it is quite difficult to add cluster members due to that limitation


All of the selected options picked during the install will be written out to the aae-installsummary.html file located in the Control Room install directory which can be used to check what a user selected during the install.

For the [Client](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/install/client-install.html) install, AA does have a GUI installer, but the IBM installer actually will perform a silent install based on the provided answers in the command line, so it should never appear for an IBM RPA installer. That said, there are a few optional options that the IBM installer would not set that are possible to set with the AA one:

* Enterprise Control Room URL (just setting a default one to appear so you don’t need to type it in manually)
* Folder for run-time files
* Client Certificate Path (used for Webseal client certificate authentication only)

Hence, if you need one of those options selected, you should check with the RPA L3 team on how to set our installer to use them.

#### Data Collection and Analysis

The AA installer will not log much data out, and instead would throw error messages for the user to see. Hence, getting screenshots is likely the first thing to get for an AA installer issue. That said, the install will write out to a few logs located in the AA logs directory (by default located in the C:\ProgramData\AutomationAnywhere\Logs directory).

The two logs in particular to check would be the crdbiliquibase and bidbliquibase logs files as those list the database changes. Thus, they are good logs in particular to check for if you get an error when the installer is creating the DB tables.

Otherwise, if you suspect an issue was due to the wrong option being selected during an install rather than a direct issue during the install, make sure to get the ae-installsummary.html file to check on what the customer selected.


**Initial Post-install configuration**

After the Control Room installer is done and the IBM RPA installer performs its customizations, if you connect to the Control Room in a web browser, you should will get the [post-install configuration](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/getting-started/configure-cr-first-time.html) page. If you selected an [Express Install](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/getting-started/configure-cr-first-time-express.html), you would only see the following options:

* Creating the first Admin user/password (authentication is already set to using CR DB for Express)
* Configuring Credential Vault (manual or express modes)

On a Custom install you can also set the following:

* The Control Room URL (used to specify a load balancer or web server in front of the cluster if you are setting up a HA environment)
* Repository URL (a shared file path all clusters should have access to and is used to store content in a file system like the uploaded bots)
* Authentication type (either Control Room DB, Active Directory, or Single Sign On)


After the post-install steps are completed, they are confirmed and the Control Room is finished setup. For HA setups, all of the other clusters that are install should pick up the changes automatically so the configuration would only need to be done on one cluster. This Is because all of the settings you pick in the post-install configuration steps are written out to the Control room database to the CONFIGURATION DB table. Hence the other clusters can see what was selected when checking the shared DB.

In addition, while it is not support for customers to do this for obvious reasons, you could theoretically change the selected options later on by modifying this DB table. I note that as AA may specifically suggest this at times when on calls. We should not suggest customer to do this without AA confirming it first, just like we should not suggest customer to edit their BPM DB tables without L3’s approval

#### Data Collection and Analysis

In general, most issues during the post-install configuration will when setting up the authentication type if the customer is trying to use SSO or Active Directory. Any errors that occur when trying to setup an external connection from the Control Room should be logged out to the WebCR.log, so make sure to check that log in particular. Otherwise, we do not see too many issues with the post-install configuration steps normally.

**Editing the config after install**

After the install and post-install steps are completed, only some of them can be changed while other are permanent. The following cannot be changed after an environment is setup and would require a reinstall with possibly a fresh database*:

* The Control Room URL
* The Credential Vault mode
* Authentication type
* Cluster setup

*Technically you may be able to change some of these via direct DB table updates, but that is unsupported as mentioned above

For the things you can configure after the installation, that would be the following:

•	The HTTPS certificates as detailed both on in the [AA documentation](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/install/config-control-room-https-import-cert.html) and [IBM documentation](https://www.ibm.com/support/knowledgecenter/en/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/certificate_import.html)
•	Change the database as detailed in the [IBM documentation](https://www.ibm.com/support/knowledgecenter/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/move_croom_dbs.html), but is not appear to be documented in the AA side
•	For AD authentication, you can modify the KDC via the um.properties file as detailed in the [AA documentation](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/troubleshooting/custom-defined-kdcs.html)
•	Service Credentials can be modified by manually going to the Windows Services and editing the runAs user for all of the [documented services](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architecture-implementation/control-room-overview.html)

Lastly, there are a large number of internal config options installed by AA such as zoomdata, postgresql, elasticSearch, etc. This config data is documented [here](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architecture-implementation/config-files-deploy.html). These functions are not well documented on the AA side and thus for any issues that appear to be linked to their settings we should be sure to contact AA on the matter. 


#### Data Collection and Analysis

Generally, we do not see issues with editing the configuration itself, but rather issues where editing the configuration is needed to solve a different issue. Hence, for issues with editing the configuration make sure to get details of what the customer is trying to do (ie, what steps are they doing) and confirm if it is something they are documented as being able to do without AA assistance. Many of these items (such as the cluster config) are good topics for an RFE or even serviceability item (such as better documentation on updating Service Credentials after the installation)

**Upgrade, Repairing, and Rolling Back**

When you are upgrading AA, you should first make sure that you take backups of all of the needed data. Our upgrade instructions should link to the [AA documentation](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/patch-install/pre-upgrade-checklist.html) noting the data to be backed up. 

If you performed a Control Room Express install or any Client installation previously, then the upgrade should be silent. However, if you performed a Custom install, the upgrade would need you to put in the settings again (in order to match the earlier installation.

There are two different types of upgrade packages from AA. The first type is a full upgrade installer will remove any older AA version and then install the new AA version on top of it. The upgrade .exe is identical to the full installer and IBM ships the same one in both the upgrade and full install. The second type is a partial upgrade installer that can only be run on top of a specific version of AA and would not perform a full uninstall like the full installer

If the upgrade fails part of the way into the install, (such as a DB error), then the only option would be to roll back. To roll back, you perform a reinstall while pointing to the backed-up data during the installation as [detailed here](https://www.ibm.com/support/knowledgecenter/en/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/rollback_rpa_upgrade.html). If you lack the backups, then a rollback is not possible and a full reinstall with new databases may be needed. For the client, a rollback would simply be an uninstall/reinstall of the older version.

Lastly, if you run the .exe while AA is already installed, you will have an option to [Repair an existing install](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/install/remove-or-repair-cr.html). This may be requested by AA Support when working on a case, the repair option should work similar to reinstall, but it will instead fetch the data from the existing install, perform an uninstall, and then show a new install with most of the options saved from the earlier install prefilled and cannot be edited.  This would help with cases where files are corrupted/deleted that the installed created. Noticeably, this is the one way to add on additional cluster members for a HA environment. Due to how the IBM installer works, we generally should not be suggesting this without AA’s explicit confirmation


#### Data Collection and Analysis

First off, for an immediate workaround for an upgrade issue the rollback steps are the first thing we should be suggesting. For an upgrade issue, you would likely see the installer fail with an error message and then have the produce in a partially installed state. In that case, make sure to get a screenshot of the error message along with logs similar to other AA installer issues before engaging AA.
