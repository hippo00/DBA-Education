Date:2019-11-1

## Overview
The Process Admin Console provides configuration and management approaches for the process server in BPM environment. 

The Process Admin Console provides functionality to manage BPM users, as well as the queues and caches for particular server. The console also provides tools to configure the installed applications.  

To work with the Process Admin Console: 

* Use the Server Admin page to perform server administration tasks and view status information for process instances and applications. 
* Use the Process Inspector page to view and manage process instances for process applications. 
* Use the Installed Apps page to view and manage snapshots of installed process applications. 

## Prerequisites


## Component 

**1.Server Admin**

When the Process Admin Console starts, it displays the Server Admin capabilities. You can perform server administration tasks, user and group management, process and event monitoring in this area. Use the WebSphere command-line administration tool (wsadmin) AdminConfig commands to change the access restriction or grant access to additional users to the listed menu. 
![1](https://media.github.ibm.com/user/228551/files/8dceda00-fcb3-11e9-9e14-e9fac0d7f8ee)

**2.Process Inspector**

Use Process Inspector to view and manage process instances for process applications that are running on a specific process server. You can use Process Inspector to investigate and resolve runtime problems with process instances.  

The Process Inspector provides information about events and processes across your entire system-including information about such things as general metadata, current activities, timers, message events, orphaned tokens, and the status of tasks. In addition to viewing the detailed activity information about process instances, you can also interactively perform certain troubleshooting and maintenance tasks. For example, from the Process Inspector display, you can delete a process instance, or restart a group of failed process instances. 

Here are some typical activities administrator and task owners can perform on Process Inspector.  

* Delete Process Instances
Deletes a completed, failed, or suspended process instance on a non-production server. The delete action is not available on production servers. After a process instance is deleted, the row is gone and can be recovered only by using a backup. There is no way to revive a deleted process instance.

* Delete Orphaned Tokens
Deletes orphaned tokens from the process instance to allow processing to continue. 
Orphan tokens occur when an instance migrates from one snapshot to another and there is an activity in the old snapshot that contains a token but the activity does not exist in the new snapshot. Deleting orphaned tokens does not recover the orphaned tokens, but allows the process to resume so that the remaining process tokens can proceed. 

* Manage Process Instances
Edit Data section, change Due Date, Resume, Retry failed steps, Suspend the active instances, and Terminate failed or suspended instances.  

** All of the actions above regarding to process instances can be done by bulk processing. 

* Manage Runtime Activity Actions
Actions include ‘Disable’, ‘Start’, and ‘Enable’ to change the state. 

* Manage Tasks
Assign tasks to a user, remove the assignment, Edit Data section, Priority, and Due Date,

** Only the task owner or a member of the task owner's team can view and modify task data. By default, members of the BPM security group can act on the associated process instance.  

**Administering Process with Process Inspector**  
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tadm_procinspector.html

**3.Installed Apps**

The Installed Apps area provides capabilities to administer and configure runtime settings for application snapshots that are installed on a Process Server. 

## Troubleshooting 

#### Data Collection

<p>1.To trace the problems that are specific to user and group management issues, below trace string should be enabled on application server: </p>

```
*=info:WLE.*=all 
```

<p>2.To trace the problems that are specific to process inspector, below trace string should be enabled on application server: </p>

```
*=info:com.ibm.bpm.wle.query.*=all:com.ibm.bpm.wle.util.*=all:com.ibm.bpm.rest.*=all 
```

If the results shown on Inspector is not expected or different from what is captured from DB directly, the following database trace is also appropriate.  
```
*=info: WLE.*=all: WAS.clientinfopluslogging=all 
```

Sometimes we also need to enable Fiddler trace and Instrumentation logs to assist the troubleshooting.

3.If the issue is related to user not able to see expected menus in Server Admin console, collect the following data. 

1)SystemOut.log file 
2)Outcome of below command: 
```
wsadmin -conntype NONE -lang jython -f <bpm_install_dir>\util\Security\BPMSecurityConfig_sample.py -E <deployment_environment> -g <console_value> 
```
The console value can be found in the 'Properties' column of Table 2 in link https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csec_config_properties.html#csec_config_properties__pac 
For example: 
```
wsadmin -conntype NONE -lang jython -f C:\IBM\BPM\v8.6\util\Security\BPMSecurityConfig_sample.py -E ProcessCenter -g console.manage.caches 
```
3)For the user who cannot access certain control panels, execute below command in IE and collect the output. 
http://[server]:[port]/rest/bpm/wle/v1/user/[userName]?parts=all 
For example: 
http://localhost:9080/rest/bpm/wle/v1/user/deadmin?parts=all 

#### Data Analysis 

1.For troubleshooting the issue related to user not able to see expected menus in Process Admin Console, compare the outputs of commands mentioned in #3 in Data Collection section. The output of wsadmin likes below. 
```
C:\IBM\BPM\v8.6\bin>wsadmin -conntype NONE -lang jython -f C:\IBM\BPM\v8.6\util\Security\BPMSecurityConfig_sample.py -E ProcessCenter -g console.manage.caches 
WASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode. 
WASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[-E, ProcessCenter, -g, console.manage.caches]" 

Current value for property console.manage.caches in DE ProcessCenter is: 
constraint 0 : tw_admins 
```

Above outcome indicates the Manage Caches menu is only visible for group tw_admins. 

Then check the membership definitions in the REST result. The result should contain below definition if the user wants to see the menu. 
```
<memberships>tw_admins</memberships> 
```

Otherwise, customer should change the access restriction and grant proper access to the user by using wsadmin AdminConfig command as described in below article. 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/csec_config_properties.html 

2.Two typical issues occurred on Process Inspector are 

&nbsp;&nbsp;&nbsp;&nbsp;a.We see unexpected results at the search panel.  
&nbsp;&nbsp;&nbsp;&nbsp;b.Overall search behavior is very slow (performance)  

**We see unexpected results at the search panel.**  

For example, client searched and clicked the task data of a specific user task at Inspector.  However, nothing can be displayed, and a pop-up window showed the following exception: 
```
CWTBG0019E: Unexpected exception during execution. Exception 
information: 'For input string: "null 
```

Firstly, we could check the server logs and ffdc to see what happened.  

Keywords: createProcessInstanceCompleteDetails, updateTaskTypes, and getResponseData 
```
These errors also occurred in the logs 
[7/6/14 15:45:34:769 SGT] 00000144 BaseProcessIn E   <Null 
Message> 
com.ibm.processinspector.rest.ProcessAdminRestException 
 at 
com.ibm.processinspector.rest.BaseProcessInspectorRestAPI.getRes 
ponseData(BaseProcessInspectorRestAPI.java:762) 
 at 
com.ibm.processinspector.rest.BaseProcessInspectorRestAPI.update 
TaskTypes(BaseProcessInspectorRestAPI.java:589) 
 at 
com.ibm.processinspector.rest.BaseProcessInspectorRestAPI.create 
ProcessInstanceCompleteDetails(BaseProcessInspectorRestAPI.java: 
393) 
 at 
com.ibm.processinspector.rest.ProcessInstanceSearchAPIImpl.getPr 
ocessInstanceCompleteDetails(ProcessInstanceSearchAPIImpl.java:1 
388) 
 at 
com.ibm.processinspector.server.handlers.ProcessInstanceDetailsH 
andler.handleRequest(ProcessInstanceDetailsHandler.java:63) 
 at 
com.ibm.processinspector.server.BPMInspectorRestFacade.doGet(BPM 
InspectorRestFacade.java:124) 
```
 

And the following stack 
```
[7/6/14 15:46:00:205 SGT] 00000144 RestHelper    W   Invalid 
UUID string  'null' 
java.lang.IllegalArgumentException:  Invalid UUID string 'null' 
 at com.lombardisoftware.core.TWUUID.invalid(TWUUID.java:131) 
 at com.lombardisoftware.core.TWUUID.fromString(TWUUID.java:47) 
 at 
com.lombardisoftware.client.persistence.common.ID$UUID.<init>(ID 
.java:198) 
 at 
com.lombardisoftware.client.persistence.common.ID.get(ID.java:24 
1) 
 at 
com.ibm.bpm.rest.internal.impl.WLE75InternalAPIImpl.findVersioni 
ngContextAndServiceById(WLE75InternalAPIImpl.java:805) 
 at 
com.ibm.bpm.rest.internal.impl.WLE75InternalAPIImpl.findServiceB 
yId(WLE75InternalAPIImpl.java:789) 
 at 
com.ibm.bpm.rest.impl.service.ServiceModelResource.getServiceMod 
el(ServiceModelResource.java:107) 
```

Based on the stack above, we need to understand why a UUID type value was given an invalid string null value, while our code is trying to get this data for display.     

We could try to check the BPD in problem and verify whether it’s expected to see this ‘invalid string value’.  

But we checked with client and understood that this was not an internal call and it’s an external activity, and they cannot provide us the information on BPD details.  Therefore, we suggested client to enable the fiddler trace as well as the REST API trace, and the following HTTP URL request could be seen in the browser's web console or fiddle logs: 
```
https://<host>:<port>/rest/bpm/wle/v1/process/null 
```

This request illustrated that this issue can be either caused by the external client which sent this request OR our product code which is used to parse the incoming request.  


**Overall search behavior is very slow (performance)**  

The performance issue of Inspector always contributes to a quite large number of cases we handled.  Many of them might be caused by the large number of existing instance/tasks data, some of them are led by the imperfect database queries designed by our product, and a few of them are related to how a specific database vendor like DB2 or Oracle handle the complicated or nested SQL clauses.  

For a complicated Inspector performance issue, we will need to check the send and response time layer by layer including the database activities, web browser, and server.  

Browser → Server → Database → Server → Browser  

For example, if a client made a customized search on Process Inspector and it took more than 30s or longer to display the results Or it might get stuck at the loading page.  

DB:  
We could firstly suggest client to enable the database trace, and see how it took at DB side to get the response back.  
If the time elapsed at DB side has already occupied most of the time, then we will need to focus on the question what took DB such a long time to give the response.      
It’s recommended for client to query their total number records of some key tables in BPMDB, especially for LSW_BPD_INSTANCE, and LSW_TASK.     
Also, try to locate the most expensive SQL query from DB trace or client’s DBA can also provide the Oracle AWR and SYSIBMADMIN.TOP_DYN_SQL view as reference.  

SERVER: 
The issues happened at server side may vary, we will need to check the server log exception to determine what kind of server issue it could be.  

BROWSER: 
If the response time at DB and server sides look good for us, we will need to enable Fiddler trace or sometimes network trace to diagnose the performance issue only occurred at browser side.  

Best Practice for Ultimate Process Inspector Performance  
&nbsp;&nbsp;&nbsp;&nbsp;-  Delete completed Process Instances 
&nbsp;&nbsp;&nbsp;&nbsp;-  Delete Closed Tasks  
(Detailed information on instance & tasks cleanup can be found at our Chapter ‘Housekeeping’) 

#### Reference 

Collect troubleshooting data for problems with the Process Admin Console in IBM Business Process Manager (BPM) 
https://www.ibm.com/support/pages/collect-troubleshooting-data-problems-process-admin-console-ibm-business-process-manager-bpm 

Reading and decoding instrumentation files for WebSphere Lombardi Edition (WLE), and IBM Business Process Manager (BPM) products 
https://www.ibm.com/support/pages/reading-and-decoding-instrumentation-files-websphere-lombardi-edition-wle-and-ibm-business-process-manager-bpm-products 

 
 
