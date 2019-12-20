Date：2019-11-20

## Overview

IBM Integration Designer (IID) is an integrated development environment (IDE) for building applications based on service-oriented architecture (SOA). It is the authoring tool for IBM Business Process Manager Process Server and IBM WebSphere Enterprise Service Bus.

IID is built on IBM Rational Application Developer (RAD) Eclipse based technology. 

Process Server and WebSphere Integration Developer components:

<u>1. &nbsp;&nbsp;Service components</u>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business State Machines
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Processes
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Human Tasks
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Rules
        
<u>2. &nbsp;&nbsp;Supporting Services</u>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Object Maps
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relationships
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selectors
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mediation Flows
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adapters
<u>3. &nbsp;&nbsp;SOA Core</u>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service component architecture
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Objects
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Common Event Infrastructure

The information below gives you an overview of the product, starting with product installation, upgrade and configuration, sample use cases for self-study, and finally a section with information about troubleshooting in case of problems come up to you while using that tool.

## Prerequisites (Optional)

To be able to run the self-study exercises you should have a working IID installation. For that, please download the IID source files from the links below and follow the installation instruction from the IBM Knowledge Center (KC).

<u>Support Lifecycle Policy for IID</u>
https://www.ibm.com/support/pages/ibm-business-automation-workflow-and-ibm-integration-designer-software-support-lifecycle-policy 
This Policy gives an overview about the actual supported product version.

<u>IID support portal</u>
https://www.ibm.com/support/home/product/S604170I01562R93/IBM_Integration_Designer 
Gives you an overview of available documents, downloads, tools as well as existing communities

<u>Getting started with IBM Integration Designer</u>
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wid.main.doc/prodoverview/topics/ctechprodovr.html
A more detailed instruction to understand the product's architecture and features

## Component

**1. Product Installation**

a. &nbsp;&nbsp;Prerequisites
&nbsp;&nbsp;&nbsp;&nbsp;OS: Windows OS
&nbsp;&nbsp;&nbsp;&nbsp;IBM Installation Manager (IBM IM) version 1.8.9 or higher
&nbsp;&nbsp;&nbsp;&nbsp;3 GB RAM minimum (4 – 6 GB recommended)
&nbsp;&nbsp;&nbsp;&nbsp;IID 18.0.0.1 supports Java 8, Eclipse 4.4.2.1, RAD 9.5.0.2
&nbsp;&nbsp;&nbsp;&nbsp;DB2 as used data base for Integrated Test Server
&nbsp;&nbsp;&nbsp;&nbsp;Supported browser: IE, FF and Chrome

b. &nbsp;&nbsp;Package download
https://w3-03.ibm.com/software/xl/download/ticket.wss 
&nbsp;&nbsp;&nbsp;&nbsp;CNV60ML	(Quick Start Guide)
&nbsp;&nbsp;&nbsp;&nbsp;CNV61ML	(IID tool)
&nbsp;&nbsp;&nbsp;&nbsp;CNV62ML
&nbsp;&nbsp;&nbsp;&nbsp;CNV63ML
&nbsp;&nbsp;&nbsp;&nbsp;CNV64ML	(Integrated Test Server)
&nbsp;&nbsp;&nbsp;&nbsp;CNV65ML
&nbsp;&nbsp;&nbsp;&nbsp;CNV66ML

Create a temporary folder and extract ALL files to the SAME temporary folder, not in a subfolder!!!

c. &nbsp;&nbsp;Installation (Installing from the product launchpad)
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wid.imuc.doc/topics/t_start_install_launchpad.html 

* Start launchpad.exe (as local Administrator)
* Standard installation path C:\IBM\IID\v18.0. (can be changed by custom installation)
* Add userID and password for Test Server and DB2 installation

d. &nbsp;&nbsp;Verification of Installation

* Check for error messages during installation
* Check the IBM IM log files for error messages (see troubleshooting)
* Check log files of Integrated Test Server (Dmgr, NodeAgent, SingleCluster log) for exceptions

**2. Backup Installation for emergency recovery**
In case of emergency recovery, you need a backup of 
* IBM Installation Manager
* WAS file system
* BPM data bases

Backing up IBM Installation Manager agent data and shared files for recovery with IBM Business Process Manager (BPM)
https://www.ibm.com/support/pages/backing-ibm-installation-manager-agent-data-and-shared-files-recovery-ibm-business-process-manager-bpm

Consistent backups for IBM Business Process Manager (BPM)
https://www.ibm.com/mysupport/s/question/0D50z000062k66hCAA/consistent-backups-for-ibm-business-process-manager-bpm?language=de

**3. IID online training presentation**
There are some good videos online available that give an overview of IID and how to use this tool

IBM Integration Designer online training presentation
https://www.youtube.com/watch?v=c-csDnC7XKQ 
https://www.youtube.com/watch?v=R6M8pjQoiyE

**4. Self-study samples**

The samples are intended for beginners and show how to model business process designs or how to develop / deploy SCA application in WID/IID. In one section every single step of that exercise is explained in detail. You can follow this instruction and build your own application.
If you don’t want to create the application by yourself, you can also download the deployable application file, add it to your test system and run your own test.

BPC sample
http://publib.boulder.ibm.com/bpcsamp/index.html

The samples cover nearly all the service components available in IID. Although the samples were created for older IID version (7.5) and the predecessor product WebSphere Integration Developer (WID), they are still valid for the actual IID version.

Here is another good link to a WID tutorial explaining the WID / IID components in detail, e.g.
* Mediation flows overview
* Trace Primitives
* Custom Mediation Primitives
* Message Filter Primitives
* Message Logger Primitives
* Flow Order Primitives
* Flat File Inbound / Outbound Adapter
* JDBC Inbound / Outbound Adapter
* Message Element Primitives
* Event Emitter Primitives
* Database Lookup Primitives
* WTx Primitives

https://de.slideshare.net/ravireddy76/wid-websphere-integration-development-guide

## Troubleshooting

#### Data Collection

<u>1. Troubleshooting and problem determination</u>
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wid.admin.doc/topics/ttrouble.html

This section from Knowledge Center gives some information about troubleshooting for very common problems you may see when using IID. In most cases, especially for specific error messages related to IID you need to collect more information as described in the IID general Mustgather

<u>2. General Mustgather</u>
Collect troubleshooting data for IBM Integration Designer
https://www.ibm.com/support/pages/collect-troubleshooting-data-ibm-integration-designer

Beside the standard information (detailed problem description and versionInfo) an important IID logfile is  <IID_workspace_root>/.metadata/.log
This log file stores all the activities that happens when IID is started and activities happen in the workbench.
If the problem happens when testing the application we need additional logs from the test server logs located at <profile_root>/logs

Additionally, the general Mustgather shows a way how to activate specific trace settings in IID (Preferences >> Logging and Tracing) as well as specific runtime trace strings

<u>3. MustGather: Java Application Hangs</u>
https://www.ibm.com/support/pages/mustgather-java-application-hangs

As IID is based on Java, you may see situation that the workbench freezes and isn’t responsive any longer. In that case we need to know what actually is running in the Java heap when that problem occurs. Javacore files are needed to be able to debug these types of problems. These documents outline how to trigger javacore files.

<u>4. JVM crashes</u>
https://www.ibm.com/support/pages/ibm-integration-designer-running-linux-throws-no-more-handles-mozillafivehomeusrlib64xulrunner-192-error-or-jvm-crashes-start 
https://www.ibm.com/support/pages/vm-terminated-exit-code-1-error-received-when-launching-websphere-integration-developer

Such kind of error happens at IID startup when the Java process is started (javaw) and it crashes. This is not an issue with IID itself but related to underlying ECLIPSE platform.

<u>5. IID in BPM environment – communication problem Process Center > IID</u>
trace string in WID (Window > Preferences > Business Integration >  Logging and Tracing):        
                                            
**com.ibm.wbit.lombardi.core.utils=fine:com.ibm.wbit.lombardi.core.rest=fi 
ne:com.ibm.bpm.common.rest.impl=fine:com.ibm.wbit.ui.bpmrepository.actio 
ns=fine**

![5](https://media.github.ibm.com/user/228551/files/8d2eb280-0b92-11ea-8ecb-4ee15cbdb21c)

< workspace >\.metadata\ folder that should contain
* bpmTrace.log 
* bpmHistory.log
* .log
  
#### Data Analysis

<u>1. General</u>

If the problem happens at development time (application modeling) you should check the content of < workspace >\.metadata\ folder. Always check first the .log folder that is created when Eclipse workspace was initialized correctly and logs every standard activity you do at development time in the workspace
If the problem is related to application deployment / test, then check the Dmgr log files (deployment) and Application Server log files (application test) for warnings or exception.
<server_root>\profile\profile_name\logs folder
* Systemout.log
* Trace.log

<u>2. JVM related problems and crashes (Eclipse)</u>

If IID crashes at server startup time, the log environment in IID is not initialized yet and nothing is written to the .log file.
In that case check for javacore files created in <IID_install_root>
Another file that is needed for problem determination is eclipse.ini holding startup parameter for eclipse environment.

How to investigate startup issues of Eclipse based products where the Java Process terminates unexpectedly during the start-up

Right after you started the application, it crashes and presents you an Eclipse pop-up window like the following:

![6](https://media.github.ibm.com/user/228551/files/f0b8e000-0b92-11ea-9707-7cb17c763a29)

Java started but crashed with exit code=1

Prepare yourself for some debug fun. If your coffee is gone, I recommend getting another one, then continuing with the below steps. If you still have coffee left, move right on to the next step. If javacore files are created check them for exception. If not, create Javacore files to gain more insight into the root cause of the crash.

Did anybody mess with your Eclipse startup parameters? If this is not a new installation and the exception happened all of a sudden, maybe some JVM arguments were changed and are hence causing this crash. Always a good candidate is the -Xmx value, which specifies the maximum memory allocation pool for the Java Virtual Machine (JVM). A lot of users still think: The more, the better! Unfortunately, they over-tune the JVM and the memory allocation is simply too large for the JVM to be successfully created. If changes were made to the JVM settings, please revert those changes back to the default values (you can for example compare them to a working or untouched system). Then try to launch your Eclipse based application again.

As Eclipse is still in the start-up process when the crash occurs, the JVM errors cannot be written to the Eclipse error logs under <workspace_root>/.metadata/.log
Hence, we need another way to get more information about the root cause. Open your eclipse.ini file (located in the <install_root> directory) and add the following line under -vmargs opt:

-Xdump:java:events=vmstop

![7](https://media.github.ibm.com/user/228551/files/1a720700-0b93-11ea-95fb-10c0b2d62d2f)

This should enforce the creation of a javacore.txt file in case of a JVM crash. In our case here, you will find it in the IID root directory after the next restart.

<u>3. Communication problems</u>

One of my customers reported an issue that he cannot open a Process Application or Toolkit in IBM Integration Designer (IID). This problem did NOT occur for all Applications or Toolkits, but only for some. At least consistently, so that’s good.
You can imagine that this kind of error blocks the user doing any of their work properly.
The following exception occurred when the user tried to open a sample Toolkit in the IID workspace:

![8](https://media.github.ibm.com/user/228551/files/59a05800-0b93-11ea-9fe8-a5bd549d7a6c)
**The error message from the workspace .log file and bpmHistory.log was as follows:**
```
!ENTRY com.ibm.wbit.ui 4 0 2016-04-06 04:58:10.982
!MESSAGE Unable to retrieve the list of process applications and toolkits from Process Center. Contact your Process Center administrator for help.
!STACK 0
com.ibm.wbit.lombardi.core.exceptions.TeamworksServerRetrieveException: Unable to retrieve the list of process applications and toolkits from Process Center. Contact your Process Center administrator for help.
                at com.ibm.wbit.lombardi.core.rest.RestActionImpl2.refresh(RestActionImpl2.java:749)
                at com.ibm.wbit.lombardi.core.utils.BPMRepoRESTUtils.refreshFromRepositorySelective(BPMRepoRESTUtils.java:1181)
                at com.ibm.wbit.ui.bpmrepository.utils.ProcessCenterUtils$2.run(ProcessCenterUtils.java:219)
                at com.ibm.wbit.lombardi.core.utils.AsyncThread.run(AsyncThread.java:50)
                at org.eclipse.core.internal.jobs.Worker.run(Worker.java:54)
Caused by: java.lang.NullPointerException
                at com.ibm.wbit.lombardi.core.rest.RestActionImpl2.refresh(RestActionImpl2.java:717)
                ... 4 more
```
From the exception text the problem is very likely related to
a.&nbsp;&nbsp;A connection problem: Process Center (PC) <--> IBM Integration Designer (IID)
&nbsp;&nbsp;&nbsp;&nbsp;or
b.&nbsp;&nbsp;A permission problem of user trying to open the Toolkit in IID workspace

Beside of activation of trace settings on IID end
**com.ibm.wbit.lombardi.core.utils=fine:com.ibm.wbit.lombardi.core.rest=fi 
ne:com.ibm.bpm.common.rest.impl=fine:com.ibm.wbit.ui.bpmrepository.actio 
ns=fine**                                                                

also check the Process Center (PC) server logs for logged exception messages. If the connection can be established to PC but is denied for any reason by PC it is logged in the server log file.

As the communication between PC and IID is made by http(s) calls you can also activate FIDDLER traces to see the communication between these 2 components. Maybe it shows some indication why the error happens. 

How to capture HTTP traffic with the Fiddler web debugging proxy
https://www.youtube.com/watch?v=mJ5o5qYPdVc

<u>4. Installation problems</u> 
Did this installation ever worked or did you just install it? If this error shows up after a new installation of the Eclipse based product (IID), check out the installation logs to make sure it was installed without any exceptions. To do so, have a look at the IBM Installation Manager log files under **<Installation_Manager_Install_Dir>/logs**

![9](https://media.github.ibm.com/user/228551/files/55c10580-0b94-11ea-91ea-bc04863106d6)

Open the index.xml file and review all logs linked in there for any exceptions or failures during the installation.

![10](https://media.github.ibm.com/user/228551/files/0b8c5400-0b95-11ea-936e-7504d1aea3b5)

JR60033: INSTALLING IBM INTEGRATION DESIGNER V18.0.0.1 FAILS IF AN EARLIER VERSION OF IBM INTEGRATION DESIGNER IS ALREADY INSTALLED
https://www-01.ibm.com/support/docview.wss?uid=swg1JR60033

When you install IBM Integration Designer 18.0.0.1, the installation completes with warnings. If you look at the IBM Installation Manager log file, you see these warning messages:

Eclipse launcher "C:\IBM\IID18\eclipse.exe" does not exist 
Eclipse initialize returned with error status=1

If you try to start Integration Designer, nothing happens.

## Reference (Optional)

1.Best Practices using IID in BPM environment
“Best practices when using IBM Integration Designer and IBM Process Designer together”
https://www.ibm.com/developerworks/websphere/bpmjournal/1106_taylor/1106_taylor.html

2.Hello World: WID (Skill Level: Beginner) – tutorial
https://www6.software.ibm.com/developerworks/education/wes-hellowid/wes-hellowid-a4.pdf
 
3.A beginner's guide to WebSphere Integration Developer
https://it.toolbox.com/blogs/gregfullard/a-beginners-guide-to-websphere-integration-developer-061507

4.SOA / SCA basic Tutorial
https://docs.huihoo.com/soa/osoa/SCA-OASIS-Tutorial-part1.pdf






