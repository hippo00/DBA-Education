Date:2020-01-16

## Overview

The Decision Center uses a specific Database, that will store all the Decision Center information, including the Rule Projects, but also the Business Console Test Suites, reports, history.
The Schema used for this database is specific to Operational Decision Manager, and setting up this database is an important step of the installation.

## Prerequisites

https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_dc_admin_db.html

The list of supported Database is listed in the System Requirements.
https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements

**Datasource and JDBC provider**
The connection between Decision Center and its Database is controlled thanks to a datasource, which uses a JDBC Provider.

**Setting details**

Liberty:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.wlp/config_dc_liberty/tpc_wlp_config_dc_console.html

WAS:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/config_dc_websphere/tpc_was_create_datasrc_cpl.html

Tomcat:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.wlp/config_dc_liberty/tpc_wlp_config_dc_console.html

JBoss:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.jboss/config_dc_jboss/tpc_jboss_config_console.html

Oracle WebLogic:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.weblo/config_dc_weblogic/tpc_wlogic_config_console.html

## Component

When installing IBM Operational Decision Manager, if the customer choses to install the Sample Server, the installer will create a database (using a H2 database for current versions).
However, this is a sample server, which is fine for testing the ODM Features. But this is not appropriate  for deployment, nor even for proper testing such as performance. A more robust database (from an IBM point of view, DB2 for instance) is recommended for this.
To set up the database, 

The easiest way is to create the schema of your database is to do so directly in Decision Center by using the **Installation Settings Wizard**:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tsk_config_install_dbase.html
This generates sql scripts that can be either run directly from the wizard, or be downloaded to be run by an Database Administrator.

![图片 1](https://media.github.ibm.com/user/228551/files/1f83c780-385f-11ea-85ff-22d4df2ab870)

The other solution is to use the ant script:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/dbschema/tsk_rts_ant_db_setextensions.html

## Troubleshooting

**Issue:
Finding out corruption or Database issues, and solving them**

When you suspect some connectivity, corruption or other issue with the database, the first step is to open the “Diagnostics” page in the “Administration” tab of the Decision Center Business Console, and to expend the “Database” entry:

![图片 2](https://media.github.ibm.com/user/228551/files/493cee80-385f-11ea-898e-f05061024f1e)

It will check all the different tables for inconsistencies, and if any is found you will have to analyze that in more details.

Note that you have also the same diagnostic information available in the Enterprise Console, in Configure -> Diagnostics:

![图片 3](https://media.github.ibm.com/user/228551/files/65d92680-385f-11ea-9fb2-e71958584eec)

**Solution:**
In most case, the corruptions that show up in this diagnostic page can be solved using the ant task database repair tool available in:
https://www.ibm.com/support/pages/odm-decision-center-diagnostics

The tasks to run are the following:

* referencing baseline corruption: repair-referencing-baselines-consistency
* lft/rgt indexes corruption: repair-package-index
* baseline dependencies:  repair-baseline-dependencies
* locale inconsistencies: repair-locale
* UUID table inconsistency: repair-uuid-table

For more usage details, please follow the instruction here.

**Issue:**
When publishing a project from Rule Designer, getting an error message such as:
This element locale is 'aa_BB', however Decision Center persistence locale is 'en_US'

**Solution:**
To be able to publish a project from Rule Designer to Decision Center (or to be able to import a project in Decision Center, for instance from an archive file) you need to have the Decision Center database **persistence locale** to be set to the same locale as the Rule Project. If you have for instance a rule project written in Chinese (zh_CN) you need to have the Decision Center database persistence locale set in zh_CN.
You can change the Decision Center Persistence locale in the Step 4 of the Installation Settings Wizard, however this is only possible before any project get deployed to Decision Center.
If you already have some deployed project, it means that they are not in the same locale, so you need to create a new database for each locale you want to use. 
 
For details:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/tsk_rts_ant_setting_db_locale.html


**Issue:**
Customer wants to use several databases with his Decision Center.

**Solution:**
This is possible, as long as the customer creates different datasources for each of his database.
For details:
https://developer.ibm.com/answers/questions/166060/how-can-i-use-decision-center-with-multiple-data-s.html


#### Import/Export tools

When the database repair tools does not help solve database corruption, or when the customer problem is specific to his project but we cannot reproduce with the exported project, we usually need want to re-create the customer database on our side.

This is possible using the DB-Import tool that are available in ODM ant task.

Two steps:
**1.Ask the customer to export the database**
For this follow the instruction in https://www.ibm.com/support/pages/decision-center-database-export-utility so that he deploy the database export utility tool (teamserver-dbdump-1.0.war) then uses the http://<host>:<port>//decisioncenter-dbdump to get the database dump file (a zip file)

**2.Run the ant task import-schema against this dump file to import the database on your side.**
For instance:
```
ant.bat import-schema -f "C:\IBM\ODMXXX\teamserver\bin\build.xml" -Dusername=rtsAdmin -Dpassword=rtsAdmin -DserverURL=http://localhost:9090/teamserver -DdatasourceName=jdbc/ilogDataSource -DdumpPath=C:\temp\dump.zip >> import_log.txt
```
**For details instruction:**
https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W5196b8aad00b_4444_abff_23526484d404/page/DBDump%20import%20-%20How%20to
