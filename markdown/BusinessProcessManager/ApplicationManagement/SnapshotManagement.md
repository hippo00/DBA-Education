2019-11-4

## Overview

Snapshots record the state of library items within a process application or track at a specific point in time. You can create snapshots in the Process Center console or in IBM Process Designer. Snapshot management, such as installing, exporting, and archiving, is performed in the Process Center console.

## Prerequisites

This topic requires the basic understanding of BPM Process Center console and Process Designer.  Before reading the troubleshooting part, it’s suggested to have a good grasp of process application lifecycle from development to deployment. 

## Component

**1.Process Center**
<img width="559" alt="1 copy" src="https://media.github.ibm.com/user/228551/files/3e9bae80-fd72-11e9-9b5f-946b7b0eae0f">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.&nbsp;	From the Process Center console, users can create process applications and toolkits and grant other users access to those process applications and toolkits.

&nbsp;&nbsp;&nbsp;&nbsp;b.&nbsp;	Users in IBM Process Designer create process models, services, and other assets within process applications and toolkits.

&nbsp;&nbsp;&nbsp;&nbsp;c.&nbsp;	The Process Center includes two main features-a Process Center server and Performance Data Warehouse. These features allow users working in Process Designer to run their process applications and store performance data for testing and playback purposes during development efforts.

&nbsp;&nbsp;&nbsp;&nbsp;d.&nbsp;	From the Process Center console, administrators install process applications that are ready for testing or production on the Process Servers in those environments.

**2.Process Application, Track and Snapshot**

<img width="638" alt="2 copy" src="https://media.github.ibm.com/user/228551/files/2aa47c80-fd73-11e9-9e7f-5b0c37c16ee9">

&nbsp;&nbsp;&nbsp;&nbsp;a.&nbsp;	**Process Application (Project) :** Containers for the process models and supporting implementations that BPM analysts and developers create in Process Designer. You should create a process application for each business process to be automated using BPM.

&nbsp;&nbsp;&nbsp;&nbsp;b.&nbsp;	**Track (Branch):** Optional subdivisions in a process application based on team tasks or process application versions. You can determine if additional tracks are necessary for each process application and, if so, enable them at any time. 

&nbsp;&nbsp;&nbsp;&nbsp;c.&nbsp;	**Snapshot:** Record the state of the items within a process application or track at a specific point in time. From the Process Center console, you can create snapshots of your process applications. You can also deploy particular snapshots of your process applications on the process servers in development, test, staging, and production environments.

&nbsp;&nbsp;&nbsp;&nbsp;d.&nbsp;	**Toolkit:** Users can create toolkits to enable Process Designer users to share library items across process applications. Process applications can share library items from one or more toolkits, and toolkits can share library items from other toolkits.  A toolkit cannot be deployed on its own. 

&nbsp;&nbsp;&nbsp;&nbsp;e.&nbsp;	**BLA:** Business Level Application, any advanced content such as a module or library from Integration Designer. EARs and JARs created. 

**3.Snapshot Deployment**
<img width="472" alt="3 copy" src="https://media.github.ibm.com/user/228551/files/9d155c80-fd73-11e9-88d7-8ddfb1a9f84a">
When you install a process application snapshot to a process server, the library items for that snapshot (including toolkit snapshots) are copied from the repository to the selected process server if they do not already exist on the process server. The process server can be connected or offline. Depending on your needs and whether the process server is connected or offline, you can use the Process Center console or wsadmin commands to install the snapshots.

**Repository Concepts:**  https://ibm.box.com/s/k3xa5ftsgvbmycptjy23qgmsb7dysedv
**Managing and sharing assets in the Process Center repository**
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/managing_repos_main.html 
**Installing process application snapshots to a connected Process Server**
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tadm_install_extended_processapp.html 
**Installing snapshots to an offline server**
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/t_installingapps.html

## Troubleshooting

Two types of issues covered in this section are snapshot deployment and repository management. These two categories shared most of the data listed at data collection part, and we investigate them from different perspectives. 

## Data Collection

**1.Log files + Trace**

**Trace String:**
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <td style="background-color:white;">General Trace String:</th>
    <td style="background-color:white;">*=info: WLE.*=all: WAS.clientinfopluslogging=all: com.ibm.bpm.fds.*=all: ProcessApplicationLifecycle=all</th>
  </tr>
  <tr>
    <td style="background-color:white">Authorization Issues:</td>
    <td style="background-color:white">Include: com.ibm.ws.security.*=all</td>
  </tr>
  <tr>
    <td style="background-color:white">Connectivity Issues:</td>
    <td style="background-color:white">Include: com.ibm.bpm.endpoint.*=all:org.apache.commons.httpclient.*=all</td>
  </tr>
  <tr>
    <td style="background-color:white">Lightweight tracing:</td>
    <td style="background-color:white">WLE.wle_deploy=all:WLE.wle_expimp=all</td>
  </tr>
</table>

** *Regarding to the Advanced Content deployment issue, we will cover it under the topic of EAR deployment.*

Note:

* Before enabling the trace, you may also need to increase the trace file size and number if the logs are rolling too fast. 20MB is a good starting point for the file size and you shouldn't increase it over 50MB. 
* Please make sure you enable the trace on both Process Center and Process Server. 

**2.	TWX File of the problematic snapshot**

**3.	Configuration Files**

* If the issue is not clearly related to a specific configuration, request the entire configuration directory under DMGR profile could give us better understanding.  Directory: /dmgr_root/config/

* If the issue is about PC PS connection, the following list of configuration files may help for further precise investigation. Please make sure you request them from BOTH PC and PS environments. 
```
install_root/profiles/dmgr_name/config/cells/cell_name/cell-bpm.xml
install_root/profiles/dmgr_name/config/cells/cell_name/security.xml
install_root/profiles/dmgr_name/config/cells/cell_name/clusters/cluster_name/cluster-
bpm.xml (if you have more than one cluster, use the appTarget cluster here) 
```

* If there is any of the runtime configuration attributes is related to the issue, collect the specific configuration file and also request the runtime TWCR.xml file from the location below:

Managed_Node_Profile_ROOT\config\cells\cell_name\nodes\node_name\servers\server_name\process-center(server)\config\TeamWorksConfiguration.running.xml

**4.Related Database Tables**

* For most snapshot related issues,  it is helpful to have the following 3 snapshot related tables from the BPMDB. Depending on the issue there are various other tables that can provide useful data. 
    - LSW_SNAPSHOT
    - LSW_BRANCH
    - LSW_PROJECT

* For Snapshot Deployment specific issues, following tables could help as well. 
    - Process Center: LSW_SERVER; LSW_DEPLOYMENT; LSW_DEPLOYMENT_PACKAGE
    - Process Server: LSW_INSTALLATION

* For issues of repository, there could be various Persistent Objects (PO) related, we could request specific tables based on the objects client have problem with.  For instance, if clients cannot view or update the environment variables successfully, we may want to request the table LSW_ENV_VAR and other related tables. 

#### Data Analysis

The key of data analysis is to find out where or at which point the problem is.   The detailed analysis of data may depends on the case by case, most of the repository issues could end up with either database problems (data corruption or inconsistency) or Process Center issues (access permission, front-end issue..etc.) It’s relatively hard to locate and find where the problem is for snapshot deployment issues. Therefore, we will put our focus on snapshot install at this section.

BPM provides two types of snapshot installation process, one is online install, and another is offline, to Diagnose and locate the point at which clients fail their snapshot install, we will need to understand all of the steps this procedure involves. 

**1.PC PS Online Connection Mode**
<img width="1384" alt="4 copy" src="https://media.github.ibm.com/user/228551/files/08146280-fd77-11e9-9a5f-e425a35f7117">

A must-have prerequisite for any successful online deployment is that the connections between PC and PS are established and healthy. Therefore, we need to firstly guarantee the connection was good before the install started.  

Checking the connection requires us to understand the basic connection mode behind PC and PS.  It’s not PC firstly connect to PS when developers decide to install a snapshot; Process Server chooses to configure to a particular Process Center repository at the first place.  The configuration at PS side can be performed during the PS deployment environment creation, and it can be also modified after that.     All of the configuration of the target Process Center will be stored at configuration files (bpm-cluster.xml) at Process Server side.   Once the configuration steps are well conducted, Process Server starts to send periodic heartbeats to Process Center.  Each heartbeat can be recorded at server logs and trace, and the contains the data of the Process Server itself including it’s host, port, user authentication alias and installed snapshots.  These data of Process Server will be sent and is supposed to be saved at Process Center’s database table named LSW_SERVER. 

If all of the steps above are perfectly achieved, once a developer want to initiate a snapshot install, the Process Center will use the information stored at LSW_SERVER, connect to the specific Process Server, and send the deployment package to Process Server as expected. 

Any mistakes or problem at any steps mentioned above including misconfiguration, security (SSL) issue, or connection issues could abort the connection and lead to a fail snapshot install at the very beginning. 

Therefore, we could determine whether it’s a connection issue by checking the logs and trace and then use the configuration files and table output of LSW_SERVER to help verify the health of the connection.

For instance, if we see the snapshot install failed while PC trying to send package to PS as the trace below, we could firstly narrow the scope of the issue to the ‘connection’ between PC and PS. 

<font color="blue">Keywords: installation failed after ‘Request Message for sending installation package to server .’</font>
```
[6/2/17 10:21:37:888 GMT+05:30] 000035f2 AbstractSuppo I   CWLLG0154I: test1 Remote login succeeded.
[6/2/17 10:21:37:888 GMT+05:30] 000035f2 AbstractSuppo I   CWLLG0714I: test1 Sending export.
[6/2/17 10:21:37:889 GMT+05:30] 000035f2 wle_deploy    3   Request Message for sending installation package to server ...
org.apache.commons.httpclient.methods.PostMethod@6fdd7b6
[6/2/17 10:21:37:889 GMT+05:30] 000035f2 wle_deploy    3   Sending request to server for snapshot deploy
[6/2/17 10:21:38:556 GMT+05:30] 000035f2 HttpMethodBas 3 org.apache.commons.httpclient.HttpMethodBase getContentCharSet enter getContentCharSet( Header contentheader )
[6/2/17 10:21:38:556 GMT+05:30] 000035f2 HttpMethodBas 1 org.apache.commons.httpclient.HttpMethodBase getContentCharSet Default charset used: ISO-8859-1
[6/2/17 10:21:38:556 GMT+05:30] 000035f2 wle_deploy    3   Sending installation package to server failed!, Error Message ... 
Moved Temporarily, HTTP Code : 302
```
Given the error code HTTP 302, meaningful attempts are checking the connection configuration including security certificate between PC and PS, ruling out the possibilities caused by snapshot itself, confirming with client on their proxy/web server setting and other network topology,  and adding connectivity trace for further replication. 

**2.Snapshot Deployment Procedure**

If the snapshot package reaches to the Process Server successfully and start the installation service, we will need to concentrate on the log & trace on PS side as PC doesn’t play an important role at the following steps.  

* Install the necessary library items and assets for the process application and referenced toolkits.
* Run the deployment service flow for each toolkit.
* Run the deployment service flow for the process application.
* Migrate data and process instances if there are running business process definition instances. 
* Send tracking definitions to the Performance Data Warehouse.
* Activate scheduled undercover agents (UCAs).
* Deploy advanced content. 
* On a connected process server, send a message saying the installation is complete.

Both logs and trace enabled at PS side are quite readable and we could easily identify each phase of this procedure from the trace. 

PS Log   <font color="blue">Keywords: thread ‘InstallMessag’</font>

**Install Request Received**
```
[3/1/18 16:45:05:545 CST] 00002469 InstallMessag I   CWLLG3578I: [BEGIN]  The process server received a request to install process application Test Application(TA), snapshot V839(V839) from the Process Center.
[3/1/18 16:45:05:591 CST] 00002469 InstallMessag I   CWLLG3578I: [END]  The process server received a request to install process application Test Application(TA), snapshot V839(V839) from the Process Center.
```
**Installation Service Triggered**
```
[3/1/18 16:45:06:716 CST] 00002469 InstallMessag I   CWLLG3579I: [BEGIN]  Starting the installation of process application Test Application(TA), snapshot V839(V839) as user deadmin.
[3/1/18 16:45:06:841 CST] 00002469 InstallMessag I   CWLLG3579I: [END]  Starting the installation of process application Test Application(TA), snapshot V839(V839) as user deadmin.
```
**Development Service for Each Toolkits and Process Application**
```
[3/1/18 16:45:06:841 CST] 00002469 InstallmentSt I   CWLLG3533I: Process Application: BPM Test Project, Snapshot: V101: The snapshot is being imported.
[3/1/18 16:45:07:107 CST] 00002469 InstallMessag I   CWLLG3580I: [BEGIN]  Installing the library items and assets for the process application and referenced toolkits.
[3/1/18 16:45:07:341 CST] 00002469 InstallMessag I   CWLLG3581I: [BEGIN]  Installing toolkit BPM Test Adapter(BTDEA), snapshot V024(V024).
[3/1/18 16:45:23:044 CST] 00002469 InstallMessag I   CWLLG3581I: [END]  Installing toolkit BPM Test Adapter(BTDEA), snapshot V024(V024).
[3/1/18 16:46:00:419 CST] 00002469 InstallMessag I   CWLLG3582I: [BEGIN]  Installing process application Test Application(TA), snapshot V839(V839).
[3/1/18 16:46:14:950 CST] 00002469 InstallMessag I   CWLLG3582I: [END]  Installing process application Test Application(TA), snapshot V839(V839).
[3/1/18 16:46:15:200 CST] 00002469 InstallMessag I   CWLLG3580I: [END]  Installing the library items and assets for the process application and referenced toolkits.
```
**Migrate BPD Instances**
```
[3/1/18 16:46:16:887 CST] 00002469 InstallMessag I   CWLLG3586I: [BEGIN]  Migrating global data.
[3/1/18 16:46:16:903 CST] 00002469 wle_migration I   Migrating instances & data to snapshot: Snapshot.e7fed5e4-c865-49a0-a9b2-f14ebfcca53b
[3/1/18 16:46:16:903 CST] 00002469 wle_migration I   Source snapshots to be migrated: []
[3/1/18 16:46:16:903 CST] 00002469 wle_migration I   Source snapshots to be deleted: []
[3/1/18 16:46:17:059 CST] 00002469 InstallMessag I   CWLLG3586I: [END]  Migrating global data.
[3/1/18 16:46:17:090 CST] 00002469 InstallmentSt I   CWLLG3540I: Process Application: BPM Test Project, Snapshot: V101: The data for the snapshot was migrated successfully.
[3/1/18 16:46:17:090 CST] 00002469 InstallmentSt I   CWLLG3541I: Process Application: BPM Test Project, Snapshot: V101: The instances of the snapshot are being migrated.
[3/1/18 16:46:17:090 CST] 00002469 InstallMessag I   CWLLG3587I: [BEGIN]  Migrating process instances.
[3/1/18 16:46:17:106 CST] 00002469 InstallMessag I   CWLLG3587I: [END]  Migrating process instances.
[3/1/18 16:46:17:106 CST] 00002469 InstallmentSt I   CWLLG3542I: Process Application: BPM Test Project, Snapshot: V101: The instances of the snapshot were migrated successfully.
```
**Send Tracking Definition**
```
[3/1/18 16:46:17:121 CST] 00002469 InstallMessag I   CWLLG3588I: [BEGIN]  Sending tracking definitions to the Performance Data Warehouse server.
[3/1/18 16:46:19:356 CST] 00002469 InstallMessag I   CWLLG3588I: [END]  Sending tracking definitions to the Performance Data Warehouse server.
```
**Activate Scheduled Undercover Agents**
```
[3/1/18 16:46:19:418 CST] 00002469 UCASchedulerH I   CWLLG3550I: Process Application: BPM Test Project, Snapshot: V101: The scheduled UCAs for the snapshot are being activated.
[3/1/18 16:46:19:496 CST] 00002469 UCASchedulerH I   CWLLG3551I: Process Application: BPM Test Project, Snapshot: V101: The scheduled UCAs for the snapshot were activated successfully.
```
**Deploy Advanced Content**
```
[3/1/18 16:46:21:075 CST] 00002469 InstallMessag I   CWLLG3593I: [BEGIN]  Assembling and deploying advanced content.
[3/1/18 16:46:21:075 CST] 00002469 InstallMessag I   CWLLG3598I:  Will wait at most 720 seconds for the BLA creation and deployment to complete. If the timeout occurs, the deployment of the BLA will continue but the install will report a failure.
[3/1/18 16:46:21:340 CST] 00014207 Job           I   CWPFD2037I: The business level application preparation phase started for job e4397abe-a8b6-76s2-aee9-910ffb089879.
[3/1/18 16:46:21:481 CST] 00014207 FDSExtensionH I   CWPFD3005I: Process Application: BPM Test Project, Snapshot: V101: Preparing installable content for the snapshot with the ID Snapshot.e7fed5e4-c865-49a0-a9b2-f14ebfcca53b
[3/1/18 16:46:25:231 CST] 00014207 FDSExtensionH I   CWPFD3006I: Process Application: BPM Test Project, Snapshot: V101: Preparing advanced content
…
[3/1/18 16:46:33:481 CST] 00002469 InstallMessag E   CWLLG3604E:  The installation failed because the BLA deployment job failed. The failure message is: Service deploy failed with return code: -1. For additional error information, see the server logs.
[3/1/18 16:46:33:496 CST] 00002469 InstallMessag I   CWLLG3593I: [FAIL]  Assembling and deploying advanced content.
```
The trace & logs with the keywords identified can help you easily locate the step client has problem with and most of them reveal the cause of the failure.  Like the example above, it failed while deploying the advanced content.  It’s more likely happened while the advanced Ear itself may contain any empty or incompatible content.  And we could add more advanced content trace to see the detailed stack trace and requested client to provide both TWX as well as the PI file to see if it’s possible to replicate the issue. 

In summary, snapshot deployment issues could vary from snapshot design bug, environment upgrade failure, PC PS connection, advanced content issue, network, security and permission.  We are not able to cover all of the troubleshooting here.  This article introduces the basis and key to start working on a snapshot deployment issue, which is to locate the problematic step and isolate the possible root causes at the very first place. 

## Reference

* Collect troubleshooting data for snapshot deployment and repository problems in IBM Business Process Manager (BPM) 
https://www.ibm.com/support/pages/collect-troubleshooting-data-snapshot-deployment-and-repository-problems-ibm-business-process-manager-bpm 
* Configure Process Server to connect to Process Center using command line
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tconnect_to_pctr.html 
* Managing and sharing assets in the Process Center repository
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/managing_repos_main.html 
* Installing process application snapshots
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/t_installingsnapshots.html
* L2 Educational materials for Lifecycle
https://ibm.ent.box.com/folder/89523256455 
