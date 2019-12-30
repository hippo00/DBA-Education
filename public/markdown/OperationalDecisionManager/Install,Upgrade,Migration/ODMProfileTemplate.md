Date：2019-12-27

## Overview

ODM provides WAS profile templates to facilitate the configuration of Decision Server and Decision Center. 

## Prerequisites

Managing WAS profiles using command or GUI:
https://www.ibm.com/support/knowledgecenter/en/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/tpro_profiles.html

## Component

**1.Install Profile Template**

If < WAS_InstallDir > directory is specified during the initial installation in IBM Installation Manager, the profile templates are installed to both < ODM_InstallDir > and < WAS_InstallDir >

For ODM v8.9.x and ODM v8.10.x, the profile templates folders are
`<ODM_InstallDir>/shared/profiles/profileTemplates/odm
<WAS_InstallDir>/profileTemplates/odm`

For older ODM versions prior to v8.9, the profile templates folders are 
`<ODM_InstallDir>/shared/profiles/profileTemplates/rules
<WAS_InstallDir>/profileTemplates/rules`

If <WAS_InstallDir> directory is not specified during the initial installation, you must copy the folders from `<ODM_InstallDir> to <WAS_InstallDir>`.

**2.Configuring servers by using profile templates and scripts**

The detailed commands and instructions can be a little different for different ODM versions. Carefully read the documentation for the specified ODM version before the installation. 

* Create the databases for Rule Execution Server and Decision Center
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/con_was_db.html
* Configuring on a stand-alone profile
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/con_was_profile.html
* Configuring on a clustered environment
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/con_was_clusters.html

**3.Install fixpack**

Upgrade the profile template using Installation Manager.
Currently there is no script available for fixpack or ifix installation. When you need to upgrade, follow the [Equivalent manual steps](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/odm_distrib_manual_config_was.html) to redeploy the updated EARs. Therefore, it is still important to understand the manual steps although profile template is the recommend approach to configure ODM on WAS.
The R&D has already started working on a serviceability item to provide scripts for upgrading profiles in future release:[RTC serviceability  item 124427](https://jazz004.hursley.ibm.com:9443/jazz/secure/authenticated/identity?redirectPath=%2Fjazz%2Fweb%2Fprojects%2FBusiness%2520Events%2520And%2520Rules#action=com.ibm.team.workitem.viewWorkItem&id=124427) 

## Troubleshooting

#### Data Collection

In case of profile creation or augmentation failure, request for manageprofile logs which is located at:
`<was_installdir>/logs/manageprofiles/<profie_name>/
<profie_name>_create.log or < profile_name>_augment.log`

Search for “<i>WASX</i>” in the log files to locate the detailed error message (refer to issue 1 for details).

**Typical Issues**

1.Profile creation failed due to “wsadmin task failed with return code: 105”

**Answer:**
This “return code: 105” is rather a general error message. There are usually more detailed WAS error messages in the format of “WASXxxxxE” (for example: WASX7017E)

To better determine the exact cause, request for 
* <profie_name>_create.log or < profile_name>_augment.log under <was_installdir>/logs/manageprofiles/
* The entire folder of <was_installdir>/logs/manageprofiles/<profie_name>/
 
Search for “<i>WASX</i>” in the log files to locate the detailed error message. There could be various causes. Examine the detailed error message to determine the root cause. 

For example, you may find below error message in \<profile_name>\rules.configure_all.ant.wsadmin.log: 
```
WASX7017E: Exception received while running file "C:\IBM\WebSphere\AppServer\profileTemplates\rules\actions\scripts\was\configure_all.py";      
exception information: com.ibm.ws.scripting.ScriptingException:         
WASX7108E: Invalid data specified for install task: "MapWebModToVH." 
Errors are: "ADMA0010E: Validation error in task Selecting virtual hosts for Web modules. A virtual host is not specified for web module decisioncenter-api with URI decisioncenter-api.war,WEB-INF/web.xml
```
It is because the decisioncenter-api is a new module introduced in ODM v8.9.1. This error could happen when the user is using the profile template of an older version prior to v8.9.1. Make sure to upgrade the profile template and ODM product to the same version using Installation Manager. If the <WAS_InstallDir> directory is not specified during the initial installation, you must copy the folders from `<ODM_InstallDir>/shared/profiles/profileTemplates/odm to <WAS_InstallDir>/profileTemplates/odm`


Another common error is
```
WASX7017E: Exception received while running file                        
"C:\Apps\IBM\WebSphere\AppServer\profileTemplates\rules\actions\scripts\was\configure_all.py"; exception information:                           
com.ibm.websphere.management.exception.ConfigServiceException           
com.ibm.websphere.management.exception.AdminException                   
java.lang.UnsupportedClassVersionError:                                 
java.lang.UnsupportedClassVersionError: JVMCFRE003 bad major version;  class=com/ibm/rules/res/xu/spi/internal/XUResourceAdapter, offset=6  
```
This error indicates JDK version 6 used is incompatible. Note, the output of “java -version” command does not imply the manageprofiles command uses the same JDK version. You can run managesdk commands to confirm the default JDK versions used by manageprofiles command:
```
managesdk -getNewProfileDefault
managesdk -getCommandDefault
```

If the JDK version is supported, you can run below command to confirm if the supported JDK version is available:
```
managesdk -listAvailable
```

Then you can use the managesdk command to specify a supported JDK version, for example:
```
managesdk -setCommandDefault -sdkname 1.8_64
managesdk. sh -setNewProfileDefault -sdkName 1.8_64
```

Note, different ODM versions requires different minimum Java SDK version. For example, ODM v8.10.x requires JDK 1.8_64 while ODM v8.9.x requires JDK 1.7_64. 

Sometimes the error is related to a .py script specific to a particular configuration step. For example, the following exception occurs when creating the Decision Center datasource:
```
Traceback (most recent call last):
File "/home/rulesadm/vtt-work-dir/ODM_Ubuntu_64_As_User/distrib/tests/installerTests/target/ivt_prereqs/profileTemplates/rules/actions/scripts/was/configure_dc_datasource.py", line 45, in doit
AdminTask.createAuthDataEntry('[-alias ODMDBAuth -user '+dbUserId+' -password '+dbPassword+' -description "ODM database authentication data" ]')
com.ibm.ws.scripting.ScriptingException: com.ibm.ws.scripting.ScriptingException: com.ibm.websphere.management.cmdframework.CommandValidationException
com.ibm.websphere.management.cmdframework.CommandValidationException: SECJ7813E: A duplicate alias name exists. You must use a unique alias name.

!!!!!!!!!!! ERROR !!!!!!!!!!!!!!
WASX7017E: Exception received while running file "/home/rulesadm/vtt-work-dir/ODM_Ubuntu_64_As_User/distrib/tests/installerTests/target/ivt_prereqs/profileTemplates/rules/actions/scripts/was/configure_all.py"; exception information: com.ibm.websphere.management.cmdframework.CommandValidationException
com.ibm.websphere.management.cmdframework.CommandValidationException: SECJ7813E: A duplicate alias name exists. You must use a unique alias name.
```
The above error is caused by APAR RS03373. For this kind of error, check the specific .py code, search for the error message in RTC/WASTON, and engage L3 if needed. Usually this kind of error does not stop profile creation. You will find the profile is created/augmented except that the datasource is not properly configured. In this case, you can guide the client to manually complete the installation. Refer to [Equivalent manual steps](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/odm_distrib_manual_config_was.html).

2.How to roll-back in case of failure?

**Answer:**
You can unaugment or delete the profile.
Unaugment Decision Center or Decision Server from existing profile:
* On Windows: 
manageprofiles.bat -unaugment -templatePath <template_path>  -profileName <profile_name>
* On Linux:
manageprofiles&nbsp;.sh -unaugment -templatePath <template_path>  -profileName <profile_name>
Delete profile after creation failure:
* On Windows:
manageprofiles.bat -delete -profileName <profile_name>
* On Linux:
manageprofiles&nbsp;.sh -delete -profileName <profile_name>

3.Can I change profile name after I have setup the profile?

**Answer:** 
By design, once when the profile name is setup, you cannot change its profile name. There are many resource dependencies with its profile name during the configuration.

4.Failed to create Decision Center profile due to OutOfMemory error

**Answer:**
Before augmenting the profile with Decision Center, you will need to increase the allocated heap size for the wsadmin Java process.
* On Windows, replace with -Xms2048M -Xmx4096M in your %JAVA_EXE% command in <WAS_InstallDir>\AppServer\bin\wsadmin.bat.
* On Linux, set the JVM_EXTRA_CMD_ARGS environment variable to "-Xms2048M -Xmx4096M"


<p>5.In WAS 9.0, I cannot find ODM profile template in the Profile Management Tool GUI. </p>

**Answer:**
ODM no longer provided the PMT plugin(com.ibm.ws.pmt.rules) for WAS 9.0 and therefore users cannot use the PMT GUI tool to create/augment ODM profiles for WAS 9.0.  You can follow the documentation to create/augment ODM profiles using the manageprofiles command.

#### Reference

APAR RS03208: WASX7017E WHEN USING PROFILE TEMPLATE SCRIPTS
