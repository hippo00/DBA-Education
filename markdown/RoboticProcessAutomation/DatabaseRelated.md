Date:2020-01-16

## Overview

The RPA (Robotic Process Automation) Fundamentals Education is an overview of the different parts of RPA which is built on top of Automation Anywhere. This module teaches the basics of how AA interacts with databases in different ways and how to troubleshoot issues with them.

## Prerequisites

1.Please see the AA installer sections for further details on the database settings used during the install

## Component

1.Main Databases
2.Dashboard Metadata DB
3.Running Database commands in the Client

## Troubleshooting

**Main Databases**

During an RPA install, you need to specify two different databases for the install to use, the Bot Insight Database and the Control Room database. These two databases are the main ones used by the Control Room and stores everything except for the bots and credential vault (which are stored in the repository file path instead). You can use MSSQL for the two main database or on more recent versions you can use Oracle DB as well. For details on troubleshooting database issues during the install, please see the AA Installer education.

At times checking content in the database may be useful or is required by some workarounds suggested by AA. For MSSQL databases, using [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017) is highly suggested. That said, make sure you get approval from AA before suggesting database changes to a customer.

To edit the database settings being use by the Control Room, the settings are stored in the following two files in a Control Room installation:
* C:\Program Files\Automation Anywhere\Enterprise\config\boot.db.properties
* C:\Program Files\Automation Anywhere\Enterprise\DWAService\bin\src\main\resources\DWMP_CONNECTIONS.properties

**Dashboard Metadata DB**

There is one last database that is created during the installation, the Dashboard Metadata DB. This database is either store in a postgresql server that is installed along with AA or in recent versions it can be stored in a MSSQL DB as well. This database is primarily used by the zoomdata component to help generate dashboards, it may be useful to check this DB for dashboard issues

After the installation details on those users to access the dashboard database as well as the URLpaths are stored in the following files:
* C:\Program Files\Automation Anywhere\Enterprise\DWAService\bin\src\main\resources\DWMP_ZOOM.properties
* C:\Program Files\Automation Anywhere\Enterprise\zoomdata\conf\zoomdata.properties

Please note that the postgresql server will have some default users and credentials based on what is selected during installation time in those files. You should check those files if you need to access it, AA does not provide any details sadly on troubleshoot the postgresql DB, so we would either need to rely on them for assistance or lookup help on our own. For the MSSQL option, please note that the dashboard metadata DB ends up creating 4 different databases in it:
* BIVisualization
* BIVisualization-keyset
* BIVisualization-scheduler
* BIVisualization-upload

If you have one of the DB servers selected, there are currently no ways to switch to the other one. Thus, if a customer was previously using postgresql before MSSQL was an option, they are not able to migrate the Dashboard database over to MSSQL 

**Running Database commands in the Client**

The last database related thing to watch out for would be the client-side DB calls. Bots can potentially use the [Database Commands](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/commands/database-command.html) in order to connect to a database and perform SQL queries on it. The Database command has 5 possible actions:

* Connect
* Disconnect
* SQL Query
* Insert/Update/Delete
* Run Stored Procedure

The database commands use an OLE DB driver to perform the commands, you should install any needed drivers onto the client machine for the database you are connecting to. Please note the OLE DB drivers are installed to Windows and the AA Client will pick up on the Windows drivers, so if you do not see the driver you want you should check the OS first.

Every DB command should start with a connect operation and end with a disconnect. In addition, this is a place where strong usage of the credential vault for connection string and DB user/passwords is highly advised. So far we have not seen any major issues with the database commands, so if you encounter issues, make sure to get the database version, the drivers involved, and reach out to AA on the issue.


