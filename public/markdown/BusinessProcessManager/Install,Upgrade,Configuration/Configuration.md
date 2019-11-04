# Configuration

## Contents
<a href="#acronyms">Acronyms</a>  
<a href="#overview">Overview</a>  
<a href="#prerequisites">Prerequisites</a>  
<a href="#components">Components and Scripts</a>  
<a href="#tools">Command Line Tools</a>  

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
## Components and Scripts

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
https://github.ibm.com/dba-support/dba-scripts/blob/master/linux/bawbpm/bxPcpscommunication.sh

---

<a name="tools" style="display:block;position:relative;top:-4em;visibility:hidden;"></a>
## Command Line Tools

### Operating Systems

BAW supports different operating systems and verisons, so specific operating system configuration is beyond the scope of this document, but you should be familiar with basic operating system configuration concepts and tasks, including networking, security, and file system management.

#### Linux  
[TO-DO: Add os-info.sh to dba-scripts - collection of basic OS and networking information.  

#### Windows
[TO-DO: Add os-info.sh to dba-scripts - collection of basic OS and networking information.  

### Databases

[TO-DO: Add RHEL and Windows dba-scripts for common DB2 configuration tasks.]

BAW supports different databases and versions, including DB2, Oracle and Microsoft SQL Server databases, so specific database configuration is beyond the scope of this document, but you should be familiar with basic database configuration concepts and tasks, including SQL, security, and database drivers.

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
