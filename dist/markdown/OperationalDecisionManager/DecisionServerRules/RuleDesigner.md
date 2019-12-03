Date：2019-11-12

## Acronyms:
ODM: Operational Decision Manager
DC: Decision Center
DS: Decision Server
RES: Rule Execution Server
RD: Rule Designer
XU: Execution Unit
WAS: WebSphere Application Server
BOM: Business Object Model
XOM: Execution Object Model
IRL: ILOG Rule Language
JDK: Java Development Kit
JVM: Java Virtual Machine

## Overview

Rule Designer (RD) is an important tool for IBM Operational Decision Manager (ODM). It is where the customer will start their development, and where they will write their Excecution Object Model (XOM) before deploying to Decision Center (DC) or to Decision Server (DS).

## Prerequisites
The following tutorial is very helpful in understanding the major features of Rule Designer:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_designer_topics/tut_rule_designer_tutorials.html

## Component
Rule Designer is part of the ODM Decision Server.
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_designer_topics/tut_rule_designer_tutorials.html
Some customers believe that this is part of the Decision Center, but this is not the case.
Accordingly, to install it you need to install Decision Server. And if you need to apply a Fix Pack, it is the DS Fix Pack that will be needed. 

Installing Rule Designer in an existing Eclipse environment
While usually developers will use the Rule Designer being installed by IBM Installation Manager when you install Decision Server, they may need to extend an existing Eclipse environment (for instance, an environment where they already have other tools installed). This is possible:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/install_ds_designer/tsk_designer_install.html

## Troubleshooting

#### Starting Rule Designer in a different locale and missing bundles
<p>You can start Rule Designer in a different locale by adding the osgi.nl line in the</p>

```
<ODMInstall>/configuration/config.ini
```
For instance
osgi.nl=en_US
to force the start in English. 

You can also use the -nl
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/starting_topics/tsk_start_rule_designer_locale.html

When you start in a specific locale, if you do not see the menu showing up properly in that language, it is likely that this language was not selected during the installation. 
In that case, you need to run IBM Installation Manager, and select the “Modify” menu, select your ODM version, then make sure you select properly the different languages that you need.

Note that if you receive a project that was written in a specific locale, **you need to make sure you start Rule Designer in the same locale to be able to import it properly.**

#### Import/Export a project
To export a project, go to File => Export => General => Archive File
Then select all the artifacts and save in zip format 
You can then share this project.

To import a project exported as above:
Make sure you are first in Rule Perspective
Then go to File => Import => General => Existing Project into Workspace => Select Archive file 
https://www.ibm.com/support/knowledgecenter/SSQP76_8.8.1/com.ibm.odm.rules.embedded.samples/procedures/tsk_rules_embedded_impexp_ruledesigner.html

Common import problems:
When you import a customer project, the XOM may not build properly because of missing jars.
If the customer is using some 3rd party libraries you will need to request them and add them to the project.

#### Data Collection
https://www.ibm.com/support/pages/collecting-data-reporting-problem-rule-designer-event-designer-and-insight-designer

**Rule Designer is an Eclipse Environment.**

Accordingly the main information are being provided by Eclipse.
The first place to look for is in the Help Menu of Rule Designer. 
You will find all the Installation details in the “About Eclipse SDK” especially in the “Installation Details”.

Other place to look for:
* A “.log” file is being generated in the .metadata folder of the workspace.

This file is  the first one to look for potential exception. This file will likely be available even when Rule Designer studio does not start (usually an issue with JVM incorrectly being set), so open it for details. 

It will show the exceptions, but also the command line that was used to start eclipse.

* For synchronization issue with DC or DS:

In that case, the issue might be not on the Rule Designer side, but on the DC or DS side. 
So look for exception in the DC or DS application Server log.

Also, in that case you can edit the eclise.ini to generate network logs. For details on this:
https://www.ibm.com/support/pages/collecting-data-reporting-problem-rule-designer-event-designer-and-insight-designer

#### Common issues:

**Unexpected behavior such as hang
You should try to rebuild the workspace or restart Rule Designer**

**Rule Designer (Eclipse) does not start**
Check the .log file for reason.
Common root cause are: a .lock file remaining from a previous run or an incorrect JVM setting (such as inexistent folder set for the JDK)
To change the JVM:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.install/install_ds_designer/tsk_designer_change_jvm.html

**Out Of Memory**
If you see OutOfMemory in the .log file you may be lacking memory to load the project
In that case, edit the eclipse.ini to change the -Xmx value
For details:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/odm_topics/tsk_migrate_eclipse_projects.html

**JDK Issues**
A common issue faced when using Rule Designer is starting with a wrong JDK
The JDK can be set in the eclipse.ini with the -vm parameter
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.install/install_ds_designer/tsk_designer_change_jvm.html


**Performance issues**
If the build is taking too much time, you may try to remove some check being performed during the build.
Go to File => Preferences => Rule Designer => Build
Then you can remove the “checks” on BOM to XOM or on IRL 
It will build much faster but you will lack some extra checks.

More details on this settings is available in the following tuning guide for ODM, in the chapter “Rule Designer, Tuning Recommendations”
https://www.ibm.com/community/automation/wp-content/uploads/sites/8/2019/02/ODM89xTuningGuideV2.0.pdf
 
**Sync issues**
Make sure you check for errors or warnings in the “Synchronize View” of Rule Designer
Also, in that case you can edit the eclise.ini to generate network logs. For details on this:
https://www.ibm.com/support/pages/collecting-data-synchronization-between-rule-designer-and-decision-center

Also, in case the issue is on the Application Server side, make sure to retrieve the DC/DS logs.
For details:
https://www.ibm.com/support/pages/collecting-data-reporting-problem-ibm-decision-center

**XOM issue**
If the XOM has changed, you need to perform the BOM Updates
For details:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.1/com.ibm.odm.dserver.rules.designer.author/designing_bom_topics/tpc_bom_updating_to_xom.html

#### References

Rule Designer Tutorial:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_designer_topics/tut_rule_designer_tutorials.html

Install Rule Designer in existing Eclipse:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.icp/topics/tsk_install_designer.html

Collecting Data for Rule Designer:
https://www.ibm.com/support/pages/collecting-data-reporting-problem-rule-designer-event-designer-and-insight-designer

