# Configuration

## Contents
<a href="#acronyms">Acronyms</a>  
<a href="#overview">Overview</a>  
<a href="#prerequisites">Prerequisites</a>  
<a href="#components">Components and Troubleshooting</a>  
<a href="#tools">References</a>  

---

<a name="acronyms" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Acronyms
ICPA - IBM Cloud Pak for Automation  
BAW - IBM Business Automation Workflow (In this document, BAW refers to either BAW or BPM)  
BPM - IBM Business Process Manager  
CLI - Command Line Interface  
GUI - Graphical User Interface

---

<a name="overview" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Overview
This section describes the tools and procedures for BAW configuration. Since BAW includes different components, there are different configurations to understand. BAW also provides multiple tools and interfaces for configuration, such as GUI-based configuration tools and command-line configuration tools.

From an Open Systems Interconnection (OSI) model perspective, we can consider the following aspects of BAW configuration:
* Network - IPv4, IPv6, DNS, NTP
* Transport - TCP/UDP ports
* Sessions - Communications wait times and timeouts
* Presentation - Security protocols, SSL, Kerberos
* Application - WebSphere (WAS), databases, web browser application

From a system lifecycle perspective, we can consider the following aspects of BAW configuration:
* Installation setup and configuration, including the IBM <a target="_blank" href="https://www.ibm.com/support/knowledgecenter/SSDV2W/im_family_welcome.html">Installation Manager</a> itself
* Maintenance and tuning for specific environments
* Troubleshooting, configuring log files and and traces
* Upgrades and migrations

---

<a name="prerequisites" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Prerequisites

Configuration of BAW/BPM requires a basic understanding of the product and related components, including WebSphere and the database (DB2, Oracle, or Microsoft SQL Server). For command-line tasks, you should be familiar with Linux and Microsoft Windows command-line scripting, including bash shell scripts, Microsoft Windows command prompt and batch (BAT) files, and Microsoft Windows PowerShell environments.

---

<a name="components" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Components and Troubleshooting

### Operating System
* CPU and memory
* Disk and storage
* Networking and time synchronization
* User, gorup, and role management
* Firewall and security

For the operating system, ensure systems meet the minimum system requirements by checking the Software Product Compatibility Reports (SPCR) https://www.ibm.com/software/reports/compatibility/clarity/softwareReqsForProduct.html

For networking, ensure systems, including databases, are properly configured to communicate on the network. Ensure systems can resolve DNS names.

Verify that Network Time Protocol (NTP) is enabled to ensure time synchronization between all servers. For Microsoft Windows, ensure the Windows Time service is configured and running. For Linux, ensure the ntpd service is configured and running. Failure to properly configure NTP results in mis-matched date/time stamps on server logs and may cause security protocols to fail, making troubleshooting more difficult.

Ensure that you follow the BAW documentation regarding any prerequsites to configure operating systems properly before installing BAW.  

#### Operating Systems Troubleshooting

Specific operating system troubleshooting is beyond the scope of this reference, but in general, you should always check operating system and networking configuration to eliminate these components as the root cause of problems.

Firewalls and Antivirus Software  
If you are troubleshooting connection issues, if possible try to test with firewalls and antivirus temporarily disabled. This can be a quick test to isolate whether the problem is with BAW or not. Security policies may limit firewall and antivirus configuration, so discuss with clients. It is recommended to disable antivirus scanning on BAW application folders. If you are unable to disable firewalls and antivirus software for troubleshooting, check the firewall and antiviurs log files for any helpful messages.

Linux example:   
<pre>
  &gt; sestatus  
  &gt; iptables --list  
 </pre>

Microsoft Windows example:   
<pre>
  C:\> sc query mpssvc  
  C:\> netsh advfirewall show allprofiles  
</pre>


NTP  
If secure communicaiton and security protocols are failing, check the time on each system. Ensure system times are synchronized.   

Before asking clients to collect log files for detailed troubleshooting, check each system from which you will collect log files to ensure system times are synchronized. If times are not synchronized, then matching date/time stamps from different log files will be very difficult and will waste time.  

Linux example:  
<pre>
  &gt; systemctl status ntpd  
  &gt; ntpq -p  
</pre>

Microsoft Windows example:   
<pre>
  C:\> w32tm /query /status  
</pre>

### Database. 
* Networking
* User, gorup, and role management  
* Structured Query Language (SQL)  
* Data Definition and Manipulation statements (DDL and DML)  
* Database storage  
* Database indexes  

BAW supports different databases and versions, including DB2, Oracle and Microsoft SQL Server databases, so specific database configuration is beyond the scope of this document, but you should be familiar with basic database configuration concepts and tasks, including SQL, security, and database drivers.   

Relational database management systems usually run on dedicated servers and are managed by a database administrator, so you may need to provide configuration information or scripts to a database administrator to configure BAW.   

Ensure that you follow the BAW documentation regarding any prerequsites to configure database systems properly before installing BAW.  

Database configuration for BAW consists of the following general steps. Depending on the database system and the BAW installation method, some or all of these steps may be automated.
1. Database system installation  
2. BAW database creation  
3. BAW table creation  
4. Bootstrapping  

Database system installation
Database system instalation is usually done by a database administrator, unless you are installing a local database for a development or testing environment. The BAW installation packages include an express version of Db2. If you use the included Db2 database system, then ensure to record the user names and TCP communications ports that you choose, as these are required for subsequent BPM configuration.

![Installation Manager with Db2](https://media.github.ibm.com/user/17148/files/835c6600-1527-11ea-92cf-715cc14b7b95)  

BAW database creation  
After you install the BAW binary files, you must ensure the required databases are created before you can create the WebSphere deployment environment to actually run BAW.

~~If you install BAW using Launchpad, then the databases are created automatically.  
If you do not use Launchpad, then you must manually create the databases.  ~~
Note: Launchpad is deprecated:
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/gbpm_deprecationlist.html

Database Creation:
a. Install BAW binary files with Installation Manager.  
b. Locate the database scripts.  
c. Copy and modify the database scripts to create the necessary databases.  
d. Run the database creation scripts against your database to create the databases.  

Linux example:  
<pre>
/opt/IBM/BPM860PC1/BPM/dbscripts/DB2/Create  
root>ls -l    
-rwxr-xr-x 1 root root    494 Sep 18  2017 createDatabase.sh  
-rw-r--r-- 1 root root   1117 Sep 18  2017 createDatabase.sql  

/opt/IBM/BPM860PC1/db2/bin  
root>./db2 -stvf cmndb-setup.sql  
create database CMNDB3 automatic storage yes  using codeset UTF-8 territory US pagesize 32768  
DB20000I  The CREATE DATABASE command completed successfully.  
  
connect to CMNDB3  

   Database Connection Information  
   
 Database server        = DB2/LINUXX8664 11.1.0  
 SQL authorization ID   = ROOT  
 Local database alias   = CMNDB3  
  
CREATE USER TEMPORARY TABLESPACE USRTMPSPC1  
DB20000I  The SQL command completed successfully.  
  
grant dbadm on database to user db2admin  
DB20000I  The SQL command completed successfully.  
  
UPDATE DB CFG FOR CMNDB3 USING LOGFILSIZ 16384 DEFERRED  
DB20000I  The UPDATE DATABASE CONFIGURATION command completed successfully.  
  
UPDATE DB CFG FOR CMNDB3 USING LOGSECOND 64 IMMEDIATE  
DB20000I  The UPDATE DATABASE CONFIGURATION command completed successfully.  
  
connect reset  
DB20000I  The SQL command completed successfully.  
</pre>

BAW table creation  
Database table creation happens during the WebSphere deployment envioronment creation.  If you use the WebSphere web interface to create your deployment environment, you have the option to create or defer table creation. If you are scripting your installation, then you also can choose to create the tables immediately or defer table creation until later using a generated script, which you can provide to your database administrator.  

![Deployment Environment Table creation](https://media.github.ibm.com/user/17148/files/97569680-152c-11ea-9add-2f63e758608a)  
  
![Database Privileges and Bootstrapping](https://media.github.ibm.com/user/17148/files/367b8e00-152d-11ea-854c-dc076be17873)    

Bootstrapping  
* When you create a deployment environment, the ‘bootstrapProcessServerData’ command must be completed successfully before you try to start or use Process Server or Process Center.
* Run the ‘bootstrapProcessServerData’ command successfully at least once for each deployment environment before you start using the environment.
* When you created the deployment environment either by setting the bpm.de.deferSchemaCreationparameter to falsefor the BPMConfigcommand or by enabling Create Tables in the Deployment Environment wizard, the bootstrapProcessServerDatacommand is run automatically.
* After run the command, check the bootstrapProcessServerDatalog for errors:DMgrprofile_root/logs/bootstrapProcesServerData.clusterName.log.


#### Database Troubleshooting  

As with the operating system, system requirements and networking are equally important, so remember to include the database system in your troubleshooting strategy.

Ensure the database is started. This is common in testing environments where the database is installed locally on a testing server. Test servers may be frequently restarted, and the database is often overlooked in the startup process.



### WebSphere
* Cells, nodes, clusters, applications
* Profiles
* Deployment environments
* User, groups, and roles
* Security and SSL certificates

![BPM Single Cluster](https://media.github.ibm.com/user/17148/files/129af480-fbdd-11e9-967c-8e4974ac2df7)  

![BPM Three Cluster](https://media.github.ibm.com/user/17148/files/12025e00-fbdd-11e9-96d8-7aba907e22c6). 

#### WebSphere Graphical User Interface (GUI)  
WebSphere 8.5.5 - Using the administrative console  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tcon_console.html

### Process Center
* Installation Manager
* Installation
* User, groups, and roles
* Security and SSL certificates
* Process Application snapshots
* Logging

### Process Server
* Installation Manager
* Installation
* User, groups, and roles
* Security and SSL certificates
* Process Application snapshots
* Logging

#### Script - Process Center to Process Server Communications Configuration  

Several configuration settings are require for Process Center to Process Server communication. When you install a new Process Server, you can choose whether to use Process Server offline or online. The Process Server configuration must match the Process Center configuration, including user names and passwords and SSL settings. Clients who add Process Servers to their environment or make changes to their existing environment may encounter communications issues between Process Center and Process Server. This script assists in checking configurations and troubleshooting. 

BPM 8.6 on Linux: bxPcpscommunication.sh  
https://github.ibm.com/hippo00/dba-scripts/blob/master/linux/bawbpm/bxPcpscommunication.sh

---

<a name="tools" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## References

### Software Product Compatibility Reports (SPCR)
https://www.ibm.com/software/reports/compatibility/clarity/softwareReqsForProduct.html

### Operating Systems

BAW supports different operating systems and verisons, so specific operating system configuration is beyond the scope of this document, but you should be familiar with basic operating system configuration concepts and tasks, including networking, security, and file system management.

#### Linux  
[TO-DO: Dba-scripts script to collect basic OS and networking information.  

#### Windows
[TO-DO: Dba-scripts script to collect basic OS and networking information.  

### Databases

[TO-DO: Add RHEL and Windows dba-scripts for common DB2 configuration tasks.]

DB2 database privileges
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/rpln_db_privileges_db2.html?view=embed

Oracle database privileges
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/rpln_db_privileges_oracle.html?view=embed

User ID or schema name privileges
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/rpln_userid_privilege_db.html?view=embed

### WebSphere

WebSphere 8.5.5 - Command-line utilities  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/welc_ref_adm_cmd.html

WebSphere 8.5.5 - wsadmin scripting tool  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/rxml_commandline.html

manageprofiles (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/rins_manageprofiles.html

wsadmin (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/welc_ref_adm_script.html

### BPMConfig

BPMConfig (BPM 8.6)  
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rbpmconfig.html

BPMConfig (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/rbpmconfig.html

Creating profiles, network deployment environments and database tables using BPMConfig (BPM 8.6.0)  
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/bpmcfg_create_win_db2.html

IBM BPM 8.5.x BPMConfig command line utility overview (BP3 external website)  
https://support.bp-3.com/hc/en-us/articles/202784686-IBM-BPM-8-5-x-BPMConfig-command-line-utility-overview
