Date:2019-10-16

## Overview
The IBM Business Process Manager (BPM) Process Admin Console provides configuration and management approaches for the Process Server. 

The Process Admin Console provides functionality to manage BPM users, as well as the queues and caches for a particular server. The console also provides tools to configure the installed applications.  

To work with the Process Admin Console: 

* Use the Server Admin page to perform server administration tasks and view status information for process instances and applications. 

* Use the Process Inspector page to view and manage process instances for process applications. 

* Use the Installed Apps page to view and manage snapshots of installed process applications. 

## Component 

1.Server Admin
When the Process Admin Console starts, it displays the Server Admin capabilities. You can perform server administration tasks, user and group management, process and event monitoring in this area. Use the WebSphere command-line administration tool (wsadmin) AdminConfig commands to change the access restriction or grant access to additional users to the listed menu. 
![image](https://media.github.ibm.com/user/228551/files/77165b00-f004-11e9-806f-7c8523ffafb7)

2.Process Inspector
Use Process Inspector to view and manage process instances for process applications that are running on a specific process server. You can use Process Inspector to investigate and resolve runtime problems with process instances. Refer to below topic on knowledge center for detailed introduction. 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tadm_procinspector.html 

3.Installed Apps 
The Installed Apps area provides capabilities to administer and configure runtime settings for application snapshots that are installed on a Process Server. 

## Troubleshooting 

#### Data Collection

If the issue is related to a user not seeing expected menus in the Server Admin console, collect the following data. 

1)SystemOut.log file 

2)Output of below command: 
```
wsadmin -conntype NONE -lang jython -f <bpm_install_dir>\util\Security\BPMSecurityConfig_sample.py -E <deployment_environment> -g <console_value> 
```
The console value can be found in the 'Properties' column of Table 2 in link https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csec_config_properties.html#csec_config_properties__pac 
For example: 
```
wsadmin -conntype NONE -lang jython -f C:\IBM\BPM\v8.6\util\Security\BPMSecurityConfig_sample.py -E ProcessCenter -g console.manage.caches 
```
3)For users who cannot access certain control panels, execute the below command in Internet Explorer (IE) and collect the output. 
http://[server]:[port]/rest/bpm/wle/v1/user/[userName]?parts=all 
For example: 
http://localhost:9080/rest/bpm/wle/v1/user/deadmin?parts=all 

#### Data Analysis 

First, review the output of wsadmin command as below. 
```
C:\IBM\BPM\v8.6\bin>wsadmin -conntype NONE -lang jython -f C:\IBM\BPM\v8.6\util\Security\BPMSecurityConfig_sample.py -E ProcessCenter -g console.manage.caches 

WASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode. 
WASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[-E, ProcessCenter, -g, console.manage.caches]" 

Current value for property console.manage.caches in DE ProcessCenter is: 
constraint 0 : tw_admins 
```
Above outcome indicates the Manage Caches menu is only visible for group tw_admins. 

Next, check the membership definitions in the REST result. The result should contain below definition if the user wants to see the menu. 
```
<memberships>tw_admins</memberships> 
```
Otherwise, client should change the access restriction and grant proper access to the user by using wsadmin AdminConfig command as described in below article. 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csec_config_properties.html 

#### Reference 

Collect troubleshooting data for problems with the Process Admin Console in IBM Business Process Manager (BPM) 
https://www.ibm.com/support/pages/collect-troubleshooting-data-problems-process-admin-console-ibm-business-process-manager-bpm 

Reading and decoding instrumentation files for WebSphere Lombardi Edition (WLE), and IBM Business Process Manager (BPM) products 
https://www.ibm.com/support/pages/reading-and-decoding-instrumentation-files-websphere-lombardi-edition-wle-and-ibm-business-process-manager-bpm-products 

 
 
