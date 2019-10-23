# Configuration

## Contents
<a href="#acronyms">Acronyms</a>  
<a href="#overview">Overview</a>  
<a href="#prerequisites">Prerequisites</a>  
<a href="#components">Components</a>  
<a href="#tools">Tools</a>  

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
* Installation setup and configuration, including the IBM Installation Manager itself
* Maintenance and tuning for specific environments
* Troubleshooting, configuring log files and and traces
* Upgrades and migrations

---

<a name="prerequisites" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Prerequisites

Configuration of BAW/BPM requires a basic understanding of the product and related components, including WebSphere and the database (DB2, Oracle, or Microsoft SQL Server). For command-line tasks, you should be familiar with Linux and Microsoft Windows command-line scripting, including bash shell scripts, Microsoft Windows command prompt and batch (BAT) files, and Microsoft Windows PowerShell environments.

---

<a name="components" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Components

### Operating System
* CPU and memory
* Disk and storage
* Networking and time synchronization
* User, gorup, and role management
* Firewall and security

### Database
* Structured Query Language (SQL)
* Data Definition and Manipulation statements (DDL and DML)
* Database storage
* Database indexes
* Networking
* User, gorup, and role management

### WebSphere
* Cells, nodes, clusters, applications
* Profiles
* Deployment environments
* User, groups, and roles
* Security and SSL certificates

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

---

<a name="tools" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Tools

### Operating Systems

[TO-DO: Add RHEL and Windows dba-scripts for common OS configuration tasks.]

BAW supports different operating systems and verisons, so specific operating system configuration is beyond the scope of this document, but you should be familiar with basic operating system configuration concepts and tasks, including networking, security, and file system management.

### Databases

[TO-DO: Add RHEL and Windows dba-scripts for common DB2 configuration tasks.]

BAW supports different databases and versions, including DB2, Oracle and Microsoft SQL Server databases, so specific database configuration is beyond the scope of this document, but you should be familiar with basic database configuration concepts and tasks, including SQL, security, and database drivers.

### WebSphere

#### Overview:  

![WAS Diagram](https://media.github.ibm.com/user/17148/files/59042700-f013-11e9-9561-f26a6572dcd1)

#### WebSphere Graphical User Interface (GUI)  

WebSphere 8.5.5 - Using the administrative console  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tcon_console.html

#### WebSphere Command Line

[TO-DO: Add RHEL and Windows dba-scripts scripts for common wsadmin tasks.]

WebSphere 8.5.5 - Command-line utilities  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/welc_ref_adm_cmd.html

WebSphere 8.5.5 - wsadmin scripting tool  
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/rxml_commandline.html

manageprofiles (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/rins_manageprofiles.html

wsadmin (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/welc_ref_adm_script.html

### BPMConfig

BPMConfig (BPM 8.5.7)  
https://www.ibm.com/support/knowledgecenter/en/SSFTN5_8.5.7/com.ibm.wbpm.ref.doc/topics/rbpmconfig.html

BPMConfig (BPM 8.6)  
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rbpmconfig.html

BPMConfig (BAW 19.0.0.2)  
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/topics/rbpmconfig.html

Creating profiles, network deployment environments and database tables using BPMConfig (BPM 8.6.0)  
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/bpmcfg_create_win_db2.html

IBM BPM 8.5.x BPMConfig command line utility overview (BP3 external website)  
https://support.bp-3.com/hc/en-us/articles/202784686-IBM-BPM-8-5-x-BPMConfig-command-line-utility-overview