## ODM Upgrade and Migration
Date:2019-11-12

## Overview

IBM Operational Decision Manager (ODM) version numbers uses standard IBM format V.R.M.F which stands for Version.Release.Modification.Fixpack. 
Modification and fix packs include only bug fixes. Applying a modification or a fix pack does not require to migrate application code or data. Always encourage client to upgrade to the latest modification or fix pack to avoid the risk of encountering defects already fixed. 
Recommend client to migrate to the latest available version or release to benefit from the latest added features and improvements. 

## Prerequisites 

ODM download document: 
https://www.ibm.com/support/pages/operational-decision-manager-download-documents

ODM detailed system requirements:
https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements

ODM product lifecycle:
https://www-01.ibm.com/software/support/lifecycleapp/PLCDetail.wss?from=spf&synkey=W468400M91086O68

## Upgrade

Technote: When and how to apply a modification or fix pack
https://www.ibm.com/support/pages/when-and-how-apply-modification-or-fix-pack

Applying a modification or fix pack does not require any data migration, so the rule projects and database remain the same. It only requires to:

1.Install the modification or fix pack using Installation Manager
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_inst_updates.html

The fix pack installation updates the following files and folders:
  * JAR libraries in the installation directories, including <ODMInstallDir>\<Module>\lib.
  * EAR and WAR applications in the <ODMInstallDir>\<Module>\applicationservers\<App Server> folders.
  
2.Reapply product customizations to the up-to-date EAR and WAR applications (If there’s any)

3.Redeploy the up-to-date version of EAR and WAR applications
Update RES:
  * jrules-res-xu-<server>.rar
  * jrules-res-management-<server>.ear
  * jrules-ssp-<server>.ear
  * jrules-res-htds-<server>.ear
  
Update Decision Center:
  * jrules-teamserver-<server>.ear
  
4.Repackage client applications with the up-to-date jar libraries 

Rolling upgrade:
To upgrade Decision Server Rules and Decision Center from Vn to Vn+1 while keeping the existing system running, you can upgrade the system gradually, component by component.
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/shared_rolling_upg_topics/tsk_upg_odm.html

Once upgrade is complete, recommend client to verify that all the modules are at the same exact version/fix pack level, see https://www.ibm.com/support/pages/find-version-jruleswodm-components 

## Migration

Before migration, check out
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.	Verify that the old configuration is still supported. Migrating to a more recent version of ODM may require moving to a different version of platform, application server, database or JDK
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.	Latest added features. Check in KC for the “What’s new” section for the specific versions
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.overview/shared_whatsnew_topics/con_whats_new.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.	Deprecated and removed features
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.overview/shared_deprecation/con_deprecated_features.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d.	Decide the migration scenario
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/topics/con_migration_overview.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.	Migration guide for the specific version
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/topics/odm_distrib_migrating.html

Typical steps for ODM migration

1.Customizations 
Migrate rule model extensions, authoring & rule management extensions:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/topics/tsk_migrate_customizations.html
2.Eclipse projects
Import and clean build the existing projects in the new version of Rule Designer:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/odm_topics/tsk_migrate_eclipse_projects.html
3.Database data
DC database migration is mandatory when migrating from version prior to v8.6. For version 8.6 and later, the database schema is fully compatible with the latest versions. But schema migration is still required if user wants to use the latest features, like user management (v8.8.1) and Decision Model Service (v8.10)
Migrate Decision Center database:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/dcbc_topics/tsk_odm_distrib_migrate_db.html
4.Client applications
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.	re-build client application with the new ODM client libraries
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.	fix any deprecated warnings (possibly errors, if migrating across several versions) to use the new APIs
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.	repackage the applications with your up-to-date classes and the new ODM libraries

Once the migration is performed, recommend client to verify
  * all the modules are at the same exact version/fix pack level, see https://www.ibm.com/support/pages/find-version-jruleswodm-components 
  * they can see the data in the consoles without issue
  * they can run the Rule Execution Server/Decision Center console diagnostics without errors.

## Troubleshooting

#### Data Collection

When there is a problem after upgrade/migration, firstly we need to confirm the exact version of each ODM module/component. ODM does not provide a command for version check. User has to verify the version of each module/component. 
1.Check installed software versions (incl. fix packs /iFixes) in Installation Manager
* From IM GUI: 
File > Installed Packages 
* Command line: 
 imcl listInstalledPackages
Note, upgrade installed with IM does not guarantee the ODM applications have been deployed/updated in the application server.

2.Check version of running ODM modules
* Rule Designer: 
Help > About Eclipse SDK, click the “IBM” button
* Decision Center: 
In the console, click “About” on the top-right of any page
* Rule Execution Server: 
  * For the console version, click “About” on the top-right of any page
  * For the XU versions, go to tab “Server Info”
* HTDS:  
open page <a style="pointer-events: none;">http://hostname:port/DecisionService</a>
* DVS/Decision Runner:  
open page <a style="pointer-events: none;">http://hostname:port/testing</a> (login as RES admin)
  
3.Check interim fix level
* Interim fixes typically replace jar files. IFxxx is part of the file name. You can find interim fixes in running ODM applications by "grep" ping WAS-Profile-Dir/installedApps for files with "-IF0"

4.Check installed EAR/JAR versions

Sometimes client may want to find out the exact version of an ODM EAR file or JAR file before upgrade. Check out the content of  \Meta-INF\MANIFEST.MF file in the archive. For example, Decision Center 8.9.2 shows:
Specification-Title: Decision Server
Specification-Vendor: IBM
Specification-Version: 8.9.2 

Typical problems after upgrade or migration.

**Issue**#1 
Wrong class loading sequence 

If you redeploy the RES/DC EAR file, the module properties are lost. WebSphere Application Server reverts to the default parent first setting

**Symptom:**
Unable to open RES console due to below error:
```
Error 500: com.ibm.ws.jsp.JspCoreException: Unable to convert string 'ilog.rules.res.console.jsf.OnlineHelp' to class javax.el.ValueExpression for attribute basename: java.lang.IllegalArgumentException: Property Editor not registered with the PropertyEditorManager
```
Or
Unable to open Decision Center Enterprise console due to below error:
```
Error message: ServletWrappe E com.ibm.ws.webcontainer.servlet.ServletWrapper service SRVE0014E: Uncaught service() exception root cause /login.jsp: com.ibm.websphere.servlet.error.ServletErrorReport: com.ibm.ws.jsp.JspCoreException: Unable to convert string '#{ManagerBean.localeStr}' to class javax.el.ValueExpression for attribute locale: java.lang.IllegalArgumentException: Property Editor not registered with the PropertyEditorManager
```
**Resolving the Problem**
Usually the problem can be resolved by setting the class loading policy of the web modules to “parent last”
Sometimes it will require to clear the WAS cache and restart server: 
```
delete 
<WASInstallDir>\profiles\<WASProfileName>\temp\<nodeName>\<serverName>\<ApplicationName>.
```
**Issue**#2
Upgrade is not effective

Client may complain that a problem still persists after they have installed a fix pack/iFix which is supposed to fix the issue. 

**Symptom**
 Client has successfully installed a fix pack using Installation Manager, but the problem persists in Decision Center or Rule Execution Server.

**Resolving the Problem**
User has to make sure the up-to-date DC and RES EAR/WAR files are re-deployed to the application server.  Confirm the exact version from the about page in the Consoles:
https://www.ibm.com/support/pages/find-version-jruleswodm-components

Sometimes the re-deployment is not effective until the application server cache is cleaned. For example, for WAS user needs to delete the temp cache and restart:
```
<WASInstallDir>\profiles\<WASProfileName>\temp\<nodeName>\<serverName>\<ApplicationName>.
```
**Issue**#3
Class incompatibility issue

**Symptom**
Fail to run ant task after upgrade, due to a “local class incompatible” error. Something like:
```
java.io.InvalidClassException: ilog.rules.teamserver.model.IlrSessionContext; local class incompatible: stream classdesc serialVersionUID = 8625926335332160807, local class serialVersionUID = 8906827035412667122
or
java.io.InvalidClassException: ilog.rules.teamserver.model.impl.IlrElementHandleImpl; local class incompatible: stream classdesc ser
ialVersionUID = 8906827035412667122, local class serialVersionUID = 8532662047765799322
```
**Resolving the Problem**
This is due to an incompatibility between the local Decision Center libraries and the Decision Center EAR deployed on the server. User has to make sure they have upgraded both to the same version. 
Similar error can happen to Rule Execution Server too. 


**Issue**#4
Execution Unit (XU) Client version mismatch

**Symptom**
A warning is received in XU log: "The XU client does not have the same version as the XU: 8.9.1.0 / 8.9.2.0"

**Resolving the Problem**
This warning message indicates a version mismatch between the Client and the XU. User can confirm the XU version by checking the Server Info tab of RES console. 
The Client can be any of the RES libraries packaged in client application, depending on which invocation method is used. User has to make sure to repackage client applications with the up-to-date jar libraries 

