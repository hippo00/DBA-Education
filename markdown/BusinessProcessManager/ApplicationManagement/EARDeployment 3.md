2019-11-1

## Overview

After you develop and test a service module in IBM Integration Designer and are satisfied that the module is working as designed, you can deploy it into the runtime environment.  Business Process Manager enables you to deploy and run business integration components such as BPEL business processes, human tasks, business state machines, business rules, and other components. The process of deployment is the topic of this chapter. 

## Prerequisites (Optional)

This chapter requires our audience to get prepared on what an EAR file is and how it gets deployed to a BPM server. 

Deploying BPM Service Modules
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/cdplyovw.html 

WebSphere Application Server: Deploying Applications
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/welc6topdeploying.html 

## Component

Unlike Snapshot deployment, EAR deployment is not a function BPM owns but borrows from WebSphere Application Server.  From the perspective of application install or deploy, BPM doesn’t change the fundamental mechanism on how it works.  Therefore, to understand how an EAR gets deployed, we will need to get back to WebSphere Application Server. 

**1.Enterprise Application Deployment**

As part of deploying an application, you install application files on a server configured to hold installable modules. 

You can install the following enterprise modules on a server:
* Enterprise archive (EAR)
* Enterprise bean (EJB)
* Web archive (WAR)
* Session Initiation Protocol (SIP) module (SAR)
* Resource adapter (connector or RAR)
* Application client modules

EAR file is one of the enterprise application modules we are going to cover in the article. 

WebSphere Application Server provides a few different ways to install the modules including the administrative console, adding modules to the monitored directory, wsadmin command line, and Java programs. 

**Ways to install enterprise applications or modules**
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/crun_app_install.html 

**2.EAR File Overview**

An EAR file is a critical piece in deploying a service application to a production server. It is a compressed file that contains the libraries, enterprise beans, and JAR files that the application requires for deployment.

You create a JAR file when you export your application modules from Integration Designer. Use this JAR file and any other artifact libraries or objects as input to the installation process.  The serviceDeploy command creates an EAR file from the input files that contain the component descriptions and Java code that make up the application.

BPM have some default applications installed once you have your deployment environment ready. You could take a look at the EAR packages along with them as examples.   Location: /install_root/profiles/profile_name/installedApps/

**3.Libraries and JAR files Overview**

Modules often use artifacts that are located in libraries, which are special projects in Integration Designer used for storing shared resources. At deployment time, Integration Designer libraries are transformed into utility JAR files and packaged in the applications to be run.

While developing a module, you might identify certain resources or components that could be used by other modules. These artifacts can be shared by using a library.

**Library**

A library is a special project in Integration Designer that is used for the development, version management, and organization of shared resources, such as those resources that are typically shared between modules. Only a subset of artifact types can be created and stored in a library, including:

* Interfaces or web services descriptors (files with a .wsdl extension)
* Business object XML schema definitions (files with an .xsd extension)
* Business object maps (files with a .map extension)
* Relationship and role definitions (files with a .rel and .rol extension)

In BPM, a JAR file also contains an application, which is the assembled version of the module with all the supporting references and interfaces to any other service components used by the module. To completely install the application, you need this JAR file, any other dependent JAR, web services archive (WAR), resource archive (RAR), staging libraries (Enterprise JavaBeans) JAR files, and any other archives. You then create an installable EAR file using the serviceDeploy command. 
The figure below shows how an application contains components and related libraries.

<img width="210" alt="1" src="https://media.github.ibm.com/user/228551/files/f078a380-fcbc-11e9-931a-9890017acf6e">

**4.Installation Procedure**

As mentioned above, you can either use the administrative console or a script to install the application. 

Using Script:

1.Copy the module and other files onto the production server. The modules and resources (EAR, JAR, RAR, and WAR files) needed by the application are moved to your production environment.

2.Run the **serviceDeploy** command to create an installable EAR file. This step defines the module to the server in preparation for installing the application into production.

&nbsp;&nbsp;&nbsp;&nbsp;a. Locate the JAR file that contains the module to deploy.
&nbsp;&nbsp;&nbsp;&nbsp;b. Issue the serviceDeploy command using the JAR file from the previous step as input.

3.Install the EAR file from step #2. How you install the applications depends on whether you are installing the application on a stand alone server or a server in a cell.

4.Save the configuration. The module is now installed as an application.

5.Start the application.

ServiceDeploy:
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rdev_servicedeploy.html 

Using Administrative console: (As this is the method is provided by WebSphere Application Server, I will only put link here for reference.) 
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/trun_app_install_default.html?pos=2 

## Troubleshooting

Based on our experience, we have two types typical issues falling into this category.   First is about clients’ own libraries or module design at Integration Designer.   Second is about the install/deploy mechanism maintained by WebSphere Application Server team. 

#### Data Collection

We have two sets of mustgather materials we usually use to collect data from clients.  
If the issue is related to BPM/IID capability, product design, BPEL, and SCA module, here is the list of data collection.

**1.Log Files + Trace**

Trace String
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <th style="text-align:center;";>Description</th>
    <th style="text-align:center">Trace string</th>
  </tr>
  <tr>
    <td style="background-color:white">General trace string On DMgr and App cluster members</td>
    <td style="background-color:white">*=info:WAS.clientinfopluslogging=all: com.ibm.bpm.*=all</td>
  </tr>
  <tr>
    <td style="background-color:white">SCA and bindings issues On DMgr</td>
    <td style="background-color:white">SCA.*=all:SCA.Bindings.*=all</td>
  </tr>
  <tr>
    <td style="background-color:white">BPEL issues On DMgr and App cluster members</td>
    <td style="background-color:white">com.ibm.bpe.*=all</td>
  </tr>

  <tr>
    <td style="background-color:white">WAS config and sync On Dmgr</td>
    <td style="background-color:white">com.ibm.ws.management.*=all:  com.ibm.websphere.management.*=all</td>
  </tr>
  <tr>
    <td style="background-color:white">Authorization issues</td>
    <td style="background-color:white">com.ibm.ws.security.*=all</td>
  </tr>
</table>

The log files need to be gathered from the deployment manager profile and each node containing an app cluster member. If the needed trace is not clear just provide the log files. 

**2.EAR or TWX export**
* If your issue is with EAR deployment, provide the EAR you are attempting to deploy. 
Let us know how the EAR was created. 
We may also need a PI export from IID if there are issues with the EAR. 

* If your issue is with a snapshot deployment, provide a TWX export of the snapshot you are trying to install as well. 

**3.Profile config directory**

In certain situations, we will need config information from the profiles. This is often the case if the install is failing to find certain files/classes and with application startup issues. If this is needed provide the following directories: 

* /config directory from the DMgr profile
* /installedApps directory from the App cluster profile

**Collect troubleshooting data for EAR or Advanced Snapshot deployments with the IBM Business Process Manager (BPM) products**
https://www.ibm.com/support/pages/collect-troubleshooting-data-ear-or-advanced-snapshot-deployments-ibm-business-process-manager-bpm-products 

If the issue is related to the installation process itself rather than the modules clients try to deploy, Or we could see the pretty obvious WAS strack from the trace collected at the first round based on the trace string given above like the exception of EJB modules or calls, engage WAS team on this could be another possible route.  The following items are the data we need to help client to prepare for WAS team. 

* EAR File (Copy of the application) 
* WebSphere Application Trace + WAS Collector

a. If possible, stop all WebSphere processes and clear the following directory: profile_root/logs
b. Restart the Deployment Manager or Application Server process.
c. Set the following Runtime mode trace:
  * In the administrative console, navigate to Troubleshooting > Logs and Trace > dmgr > Diagnostic Trace > Change Log Detail Levels.
  * Select the Runtime tab.

Note: If you are in a Base environment, select server1 instead of the dmgr server. If the problem is the application is not expanded to the installedApps directory, then also enable the traces on the Node Agent process as well.
  * In the Change Log Detail Levels, modify the existing trace string to:
```
*=info:com.ibm.ws.console.app*=all:com.ibm.ws.management.application.*=all:com.ibm.websphere.management.application.*=all
```
  * If the issue is coming from annotation scanning, modify the existing trace string to:
```
*=info:com.ibm.ws.console.app*=all:com.ibm.config.eclipse.wtp=finer:com.ibm.ws.ecs=finer:com.ibm.config.annotations=finer:com.ibm.ws.management.application.*=all:com.ibm.websphere.management.application.*=all
```
  * Click **Apply** or **OK** so that the trace string is saved.

d. If you are using wsadmin, enable the following tracing: 
  * Modify the wsadmin.properties file located in the following directory:
profile_root/properties

Replace the following line:
```
#com.ibm.ws.scripting.traceString=com.ibm.*=all=enabled
```
To following line:
```
com.ibm.ws.scripting.traceString=com.ibm.ws.scripting.AdminAppClient.*=all=enabled:com.ibm.ws.scripting.AbstractShell.*=all=enabled:com.ibm.ws.management.*=all=enabled:com.ibm.websphere.management.*=all=enabled
```
If the issue is coming from annotation scanning, replace with following line instead:
```
com.ibm.ws.scripting.traceString=com.ibm.ws.scripting.AdminAppClient.*=all=enabled:com.ibm.ws.scripting.AbstractShell.*=all=enabled:com.ibm.ws.management.*=all=enabled:com.ibm.websphere.management.*=all=enabled:com.ibm.config.eclipse.wtp=fine=enabled:com.ibm.ws.metadata.annotations.*=all=enabled:com.ibm.ws.websvcs.annotations.*=all=enabled
```
e. Recreate the problem.
f.  Save a screen capture of the administrative console if an error is displayed on the console screen. 
g. Run the collector tool.

**MustGather: Problems during deployment of EAR/JAR/WAR files in WebSphere Application Server Traditional**
https://www.ibm.com/support/pages/mustgather-problems-during-deployment-earjarwar-files-websphere-application-server-traditional#

#### Data Analysis

To diagnose an EAR deployment issue, it’s important to isolate the scope of problems and narrow down what possible root causes could be.  Before requesting data, some questions may help you as well. 

**Question:** 
* Whether this issue happened to a specific application and jar file?  Or all of the applications hit this problem?  

If the problem only occurred on one specific application/Jar file, we might want to put our focus on the content of this application and it’s specific install process, 

If the problem happened to ALL applications and files, the install service we provided or the environment may have issues, you probably want to ask if the client conducted any upgrade or environment changes on his/her end. 

**Trace Stack:**

Like snapshot deployment you will need to understand the keyword of the installation process from the track stack to determine the time of start and ends of this deployment attempt. 
For example,
Keywords: <font color="blue">thread name ‘InstallSchedu’</font>
```
[9/14/17 16:53:33:015 GMT+05:30] 00000619 InstallSchedu I ADMA5016I: Installation of BPM_TestFlow_New_V1App started.

[9/14/17 16:53:48:590 GMT+05:30] 00000619 InstallSchedu I ADMA5014E: The installation of application BPM_TestFlow_New_V1App failed

[3/20/18 4:36:14:285 GMT] 00000132 InstallSchedu I   ADMA5013I: Application BPM_TestFlow_New_V1App installed successfully.
```
Next, we will need to look into the error stack at ffdc to see which component it’s possibly related to. 
```
[8/24/16 14:59:19:183 EDT] 00000171 FfdcProvider W com.ibm.ws.ffdc.impl.FfdcProvider logIncident FFDC1003I: FFDC Incident emitted on /opt/IBM/BPM/profiles/Dmgr01/logs/ffdc/dmgr_bac390c7_16.08.24_14.59.19.1135999813550397244176.txt com.ibm.ws.management.application.SchedulerImpl.run 328
[8/24/16 14:59:19:197 EDT] 00000171 InstallSchedu I ADMA5014E: The installation of application BPM _Test_OutboundApp failed.
```

Open the FFDC pointed, locate this NPE thrown to see the details. 

Keywords: <font color="blue">DMGRDeployedBPCApplicationResolver.getDeployedBPCApplications</font>
```
[8/24/16 14:59:19:113 EDT] FFDC Exception:java.lang.NullPointerException SourceId:com.ibm.ws.management.application.SchedulerImpl.run ProbeId:328 Reporter:java.lang.Class@43240c3e
java.lang.NullPointerException
at com.ibm.bpe.management.application.DMGRDeployedBPCApplicationResolver.getDeployedBPCApplications(DMGRDeployedBPCApplicationResolver.java:566)
at com.ibm.bpe.management.application.DMGRDeployedBPCApplicationResolver.isTemplateAlreadyDeployedOnTarget(DMGRDeployedBPCApplicationResolver.java:617)
at com.ibm.bpe.management.application.DMGRDeployedBPCApplicationResolver.isProcessTemplateAlreadyDeployedOnTarget(DMGRDeployedBPCApplicationResolver.java:594)
at com.ibm.bpe.management.application.TargetHasProcessTemplateNotAlreadyConfiguredRule.verify(TargetHasProcessTemplateNotAlreadyConfiguredRule.java:73)
at com.ibm.bpe.management.application.AbstractDeploymentTask.runVerificationRules(AbstractDeploymentTask.java:371)
at com.ibm.bpe.management.application.AbstractDeploymentTask.performTask(AbstractDeploymentTask.java:100)
at com.ibm.ws.management.application.SchedulerImpl.run(SchedulerImpl.java:315)
at java.lang.Thread.run(Thread.java:796)
```
We could confirm that it’s not a WAS issue and BPM/WPS code plays an important role here. And we could try to request the PI and try to install it locally to verify our guess.  At this point, if there is no known issue can be found, you might want to seek help from BPM L3 and point out this exception to them. 

Here for this case, based on our experience, to install a SCA application, one of the very tricky questions is that client may try to install and uninstall or fail to install an application for many times.  It’s reasonable that they want to try multiple times if the first one didn’t work.   However, they may forget to clear the configuration workspace created by the previous attempts. 

Therefore, we usually search the name of application or ear at the history logs and we found
```
ADMR0015I: User admin created document cells/my_cell01/applications/ BPM _Test_OutboundApp.ear/ BPM _Test_OutboundApp.ear.
```
If you asked client to provide all of the historical logs, you might be able to see the failed attempt initiated earlier before this attempt. 

It shows that they cannot install an SCA application with BPEL content to the Process Server even though the application is not already installed and its artifacts do not exist in the file system. A NullPointerException is thrown with getDeployedBPCApplications. 

**PI File**

Except for pure EAR deployment, a snapshot install could fail caused by the advanced component in it.   We also classify this part of issue as EAR deployment failure due to its root cause.  

For example, a snapshot install could fail if clients have associated advanced content modules with the problematic  snapshot although they do not contain any AIS services or SCA components. 

Error Stack:
```
CWLLG2164E: Install did not complete successfully because of an unexpected exception. Error:  /tmp/tmp_8509242345/import.zip7171900072405698481
    com.ibm.bpm.pal.PALException: Failed to execute advanced transition, Error: Process app was not started.
```
In Process Center, you might see an exception that is similar to the following text:
```
CWLLG2164E: Install did not complete successfully because of an unexpected exception.
com.ibm.bpm.fds.common.FDSException: Failed to process contribution dependency, <dependancy info>
at com.ibm.bpm.pal.action.BaseActionsImpl.executeAction(BaseActionsImpl.java:363)
at com.ibm.bpm.pal.action.ProcessServerActionsImpl.snapshotDeployed(ProcessServerActionsImpl.java:59)
at com.ibm.bpm.flm.impl.WLEInstallSnapshotHelper.performDeployment(WLEInstallSnapshotHelper.java:235)
at com.ibm.bpm.flm.impl.WLEInstallSnapshotHelper.deploySnapshot(WLEInstallSnapshotHelper.java:157 
```
On the target Process Server deployment manager, you might see the following exception:
```
CWWMH0197E: Problems were encountered while attempting to start business-level application "WebSphere:blaname=MYPA-S1".  It is possible that the business-level application is not running or is only partially running.  Please refer to FFDC log entries for details on any failures which were encountered. 
```
On the target Process Server application cluster, you might see an error that is similar to the following text:
```
CWLLG2164E: Install did not complete successfully because of an unexpected exception. Error:  /tmp/tmp_856858345/import.zip123545775698481
com.ibm.bpm.pal.PALException: Failed to execute advanced transition, Error: Process app was not started. 
```
On the target Process Server application cluster, FFDC files might show various exceptions that get the status for the BLA or one of its components. For example:
```
RedundantStateChangeException: Composition Unit WebSphere:cuname=HSAV1-T1-Hiring_Sample_Advanced_v801_Library_0001.jar,cuedition=BASE already started 
```
Depending on the version, you might notice warning messages during the installation process that are similar to the following text when the uninstall phase occurs:
```
CWSAM0001W: Package does not contain SCA artifacts.
```
This is an issue happened with quite high frequency, many clients are not cautious on their application design and don’t pay attention on these ‘empty’ modules they didn’t intend to create and lead to this issue.     For this case, we could help client to import their PI and found the empty SCA component which blocks the deployment process.  

**Engage WebSphere Application Server Team**

For more other situations, we need to engage WAS team as the fundamental code for EAR deployment is owned by them.   Here are some general tips for the issues we should consult them for help. 

* Exception is thrown from the calls to EJB deploy
* Deployment target cannot be found,  like ObjectName, nodeName, serverName…etc. 
* If client didn’t use serviceDeploy and console but other script provided by WAS as install method

Besides, here is a list of common WAS issues happened during application deployment for reference.
https://www.ibm.com/support/pages/troubleshoot-application-deployment-issues 


## Reference (Optional)

Deploying BPM Service Modules
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/cdplyovw.html 

WebSphere Application Server: Deploying Applications
https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/welc6topdeploying.html 

Collect troubleshooting data for EAR or Advanced Snapshot deployments with the IBM Business Process Manager (BPM) products
https://www.ibm.com/support/pages/collect-troubleshooting-data-ear-or-advanced-snapshot-deployments-ibm-business-process-manager-bpm-products 

MustGather: Problems during deployment of EAR/JAR/WAR files in WebSphere Application Server Traditional
https://www.ibm.com/support/pages/mustgather-problems-during-deployment-earjarwar-files-websphere-application-server-traditional#

Common WAS issues happened during application deployment.
https://www.ibm.com/support/pages/troubleshoot-application-deployment-issues 

Education Decks Shared by WASADM Team
https://ibm.ent.box.com/s/zfsjxdmy9dai7o27f1rmcvs8gqi6yped/folder/47185220988 

