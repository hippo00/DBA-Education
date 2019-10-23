Date:2019-10-22

## Overview

An Undercover Agent (UCA) listens for triggers from external systems, invokes UCA service components or scheduled, time-based events. UCAs also handle Message Start Events and Message Intermediate Events in a Business Process Definition (BPD) or process. 

## Component

#### On Event – Triggered as a result of an explicit Invoke UCA in a service 

When a UCA is activated, it basically represents an event. That event can carry payload data with it. When an event arrives and triggers a UCA, the UCA in turn will execute an IBPM service. This is specified by the Attached Service attribute and is commonly an IBPM General Service. The way that the UCA causes the service to be called is not by invoking that service explicitly, instead, the UCA queues the request to start the service on a logical queue. It must be stressed that this is indeed a logical queue and has no relationship to JMS or SI Bus. The queuing mechanism here is used to serialize the execution of UCA originated events. When the UCA places a request on a queue, any further requests placed on that queue are not processed until the previous events have completed which means that the associated services have completed. One exception to this is the special queue called the Async Queue. If the UCA start service request is placed on this queue, further requests to start services will not wait for previous services to complete. The number and names of these queues can be changed in the IBPM Process Admin Console. 

#### Time Elapsed – Triggered on schedule from the run-time

The Time Schedule defines recurring periods of when the UCA should fire. The Time Schedule is quite flexible in its configuration. Each time the schedule is reached, the UCA fires. Within Process Center there is a Process Server used for testing. It does not make sense for a UCA to fire for each of the schedules held in the repository in the Process Center Server. As such, they simply do not. For testing, the Run now button can be used to explicitly trigger an instance of the UCA. 
When a UCA is scheduled, we can see it in the Process Admin Console (PAC) under Event Manager > Monitor

![image](https://media.github.ibm.com/user/228551/files/14c1cc80-f4d4-11e9-8d2e-9f07b0f8b114)

#### Intermediate Message Event (IME)

The Message Intermediate Event is an Event listener that is used to listen for incoming events within a process instance that is already running.   
Because a Message Intermediate Event listener lives within an existing process instance, when an event occurs that event must be matched against the correct instance of the process for which the event is destined. The ability to match the event against this correct process instance is called "correlation". 
The Message Intermediate Event is actually watching for the arrival of a UCA. When that UCA arrives, the event is said to have happened. This is the mapping between the logical concept of an event and the actual implementation of an event within the IBPM product. 
A Message Intermediate Event is always associated with a UCA and a UCA can carry data with it. In the IBPM PD, we can specify a variable whose value must match that of an incoming event's UCA payload in order to be considered a match. 
Message Intermediate Event can also be used to invoke a UCA which is the logical equivalent of generating a new message. 

#### Start Message Event (SME)

The Message Start Event is a starting node that can be used to initiate an instance of a process due to the arrival of an event. When the Message Start Event element is added, the properties of that element allow users to define which UCA should be used. When the UCA fires the data from the UCA is passed as the starting data to the new instance of the Business Process that is to start. 

#### Invoke UCA

Within a Service, you may wish to invoke a UCA. Invoking a UCA can cause the creation of a new instance of a process. Remember that UCAs are usually associated with an external service or timer causing them to be invoked. Giving us the ability to initiate a UCA explicitly adds a lot more flexibility to solutions we may build. A primitive is supplied that allows us to explicitly invoke a named UCA. 
The UCA caller primitive's implementation names the UCA that is to be called. The Data Mapping section allows us to map the variables in scope in the process to the parameters expected by the UCA. 

## Mechanism
#### From UCA to Message Event

* Invocation of the UCA defined in one snapshot and passing data to it. This creates an Event Manager task
* The execution of the UCA task (and its optional attached service) 
* The delivery of the UCA output to a  number of eligible (correlation) message events, that subscribed to that UCA 

![image](https://media.github.ibm.com/user/228551/files/adf0e300-f4d4-11e9-8da1-2cbc7f8b1611)

#### How non-durable Subscription work (IME only)

* During deployment of the process app the linkage between the UCA and the IME will be created in table LSW_BPD_EVENT 
   - Link to UCA → LSW_BPD_EVENT.UCA_ID
   - non durable subscription → LSW_BPD_EVENT.DURABALE_SUBSCRIPTION = ‚F‘
* To subscribe to an UCA message, the token of a process instance needs to be on a message event. Process flow is suspended until the UCA is executed and the IME is ready to consume its output message. 
* There could be multiple IMEs waiting for an UCA message at the same time:  
→ All of those with correct correlation (explained in detail later)  would receive the message 

![image](https://media.github.ibm.com/user/228551/files/0922d580-f4d5-11e9-89b5-53d2c7896195)

#### UCA Correlation:

![image](https://media.github.ibm.com/user/228551/files/38d1dd80-f4d5-11e9-953b-2ea937094d5a)

#### Prerequisites for UCA execution

The following conditions need to be met for an UCA to execute: 

<p>1.EM active<br/>
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_EM_INSTANCE.STATUS = 1<br/> 
2.No Blackout Period active<br/>
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_BLACKOUT_CALENDAR<br/>
3.Snapshot containing UCA must be active and default*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_SNAPSHOT.IS_ACTIVE = T<br/>
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_SNAPSHOT.IS_DEFAULT = T<br/>
4.UCA enabled in Process Designer<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_UCA.IS_ENABLED = T<br/>
5.UCA enabled in PAC (not relevant for event based UCA)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;→ LSW_FAVORITE.ENABLED = T </p>

## Troubleshooting

#### Questions to ask

* Did the UCA ever work normally?
* Did you deploy any snapshot before the issue happened? 
* Is your BPM in same time zone with your BPM DB?
* Is your Event Manager still working normally?
* Can the tokens in your BPD/Process instances move forward? 
* Did you recently apply any fix and strictly follow the migration instruction? 

#### Verifying the UCA 

Login to the Process Admin Console (PAC) > Deployed Apps and check whether the UCA is enabled or not: (make sure the checkbox is selected) 
![image](https://media.github.ibm.com/user/228551/files/b0543c80-f4d6-11e9-8733-08b9bd17e1a7)
Check Event Manager Monitor in PAC and make sure the Time Based UCA is NOT scheduled at 2099: 
![image](https://media.github.ibm.com/user/228551/files/cf52ce80-f4d6-11e9-9d32-ab446a629d7f)

#### Data Collection 

<p>1.To trace the problems that are specific to Undercover Agent or Message Intermediate Event in BPM, the below trace string should be enabled on application server. Please Note: Enabling the trace might slow down your system. Disable this trace after collecting the requested information. </p>

```
*=info:WLE.*=all
```
Below is a lightweight trace string that has minor impact on BPM system performance, but please make clients aware that the trace string may not catch all information needed. 
```
WLE.wle_ucaexception=finest
```

2.Please dump below tables from the BPM database.  All instances of Time Base UCA should be here. You also can find the next scheduled execution time. 
```
LSW_EM_TASK , LSW_EM_TASK_KEYWORDS, LSW_UCA
```
Below are the LSW_UCA columns: 
![image](https://media.github.ibm.com/user/228551/files/2ce71b00-f4d7-11e9-838c-d66bcab2391f)

3.Event manager logging.
This function logs every operation that passes through the core BPMN (Lombardi) engine to the LSW_EM_TASK_HISTORY table. Complete the following steps. 

Use a custom XML configuration file to enable this logging. The following code is the contents of the XML file. The file must be XML compliant and have no extra spaces or line breaks. Due to web page formatting, the <task-execution-listener> value might not be on one line when it is copied over. 
   
```
  <properties> 
     <event-manager> 
       <scheduler> 
         <task-execution-listener merge="mergeChildren">com.lombardisoftware.server.scheduler.DbTaskExecutionListener</task-execution-listener> 
       </scheduler> 
     </event-manager> 
    </properties> 
```
Place this file in the same directory as the 100custom.xml file and restart the IBM Business Process Manager Process Server (AppTarget JVM). For more information on the 100custom.xml file, see Configuration file overview and explanation for Lombardi Teamworks, WebSphere Lombardi Edition (WLE), and the IBM Business Process Manager (BPM) products. 
  
Restart the server.
   
Check the TeamworksConfiguration.running.xml the <task-execution-listener> is in the file. If not, repeat steps 1-3 

Run one instance or task. Check the *LSW_EM_TASK_HISTORY* table for new entries. 
    
Two (2) additional tables will be required as well. *LSW_EM_TASK* and *LSW_EM_TASK_KEYWORDS*. 

Export the tables into an easy to consume text format with CSV (comma separated values) or XSL (Excel spread sheet) or ODS (open document spread sheet) 
    
After problem determination with IBM, remove the custom XML file, restart system to turn off logging, and truncate *LSW_EM_TASK_HISTORY*. This table can grow very quickly and use database disk space. 

After completing the previous steps, send the following information to IBM Technical Support using the information in the Exchanging information with IBM Technical Support for problem determination document: 
Provide an exported version of the *LSW_EM_TASK_HISTORY* table in a .csv or .xsl format. 

Note: The removal of data from the *LSW_EM_TASK_HISTORY* table is a manual process. To stop Event Manager history logging, remove the custom XML file and restart the IBM Business Process Manager Process Server (AppTarget). 

Provide the name of the failing or non-functioning UCA. 

Provide an exported version of the *LSW_EM_TASK* table in the .csv format. 
    
Provide an exported version of the application as a .twx file with details of how to find the UCA that is causing the error. If you cannot export the application, supply screen shots of the UCA settings and also provide a diagram that shows where the UCA is located. 

Provide a copy of the Event Manager settings from the 80EventManager.xml file and a copy of the TeamworksConfiguration.running.xml file. Both of these files are located two directories up from the following file path:

```
install_dir\profiles\profile_name\config\cells\cell_name\nodes\node_name\servers\server_name\server_type\config\system\ 
```

4.Request the .twx file for the process application as well as the service name in question.

#### Trace Analyzing 

All below information are gathered when UCA works correctly. You can search key words and locate the information in trace files. 
**Usage 1#:** Event Manager Start 
**Key words:** <font color="blue">Heartbeat/Acquire</font> 
**Sample:**
```
[4/6/17 18:31:20:601 CST] 00001579 Heartbeat     I   CWLLG0570I: Heartbeat paused. 
[4/6/17 18:31:51:466 CST] 000015ee Heartbeat     I   CWLLG0615I: Heartbeat resumed. 
[4/6/17 18:32:06:611 CST] 00000169 TaskLoader    I   CWLLG0597I: Trying to acquire synchronous queue SYNC_QUEUE_1. 
[4/6/17 18:32:06:639 CST] 00000169 TaskLoader    I   CWLLG0581I: Acquired synchronous queue SYNC_QUEUE_1. 
[4/6/17 18:32:22:045 CST] 00000169 TaskLoader    I   CWLLG0597I: Trying to acquire synchronous queue SYNC_QUEUE_2. 
[4/6/17 18:32:22:048 CST] 00000169 TaskLoader    I   CWLLG0581I: Acquired synchronous queue SYNC_QUEUE_2. 
[4/6/17 18:32:38:259 CST] 00000169 TaskLoader    I   CWLLG0597I: Trying to acquire synchronous queue SYNC_QUEUE_3. 
[4/6/17 18:32:38:260 CST] 00000169 TaskLoader    I   CWLLG0581I: Acquired synchronous queue SYNC_QUEUE_3. 
```

**Usage 2#:** InvokeUCA schedules task 
**Key words:** <font color="blue">TaskManager/scheduleTasks</font> 
**Comment :** Trace file when InvokeUCA triggers a UCA. 
**Sample:**
```
[4/19/17 14:03:24:928 CST] 000013b9 TaskManager   > com.lombardisoftware.server.scheduler.TaskManager scheduleTasks ENTRY [com.lombardisoftware.server.scheduler.ScheduledTask@629a7f38 
 - scheduledTime: 1492581804927 = Wed Apr 19 14:03:24 CST 2017 
 - repeatString: null 
 - execClassName: com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask 
 - arguments: 4.0ddf859f-d703-4984-a9bc-89bd2ae2b886;7;TonyUCA<reason type="UCAIDMessage" ucaId="4.0ddf859f-d703-4984-a9bc-89bd2ae2b886"> 
  <shortName>FCI_C</shortName> 
  <param name="Input"> 
    <value>&lt;variable type="String"&gt;&lt;![CDATA[000]]&gt;&lt;/variable&gt;</value> 
  </param> 
</reason> 
 - description: Execute UCA TonyUCA, triggered by invokeUCA 
 - queueId: -100 
 - blackoutCalendarId: 1 
 - blackoutBehavior: BlackoutBehavior(3, EXECUTE_MANY_AFTER_BLACKOUT) 
 - inClosingTransaction: false 
 - idInDB: null 
 - reuseStrategy: 0 
 - keywords: List start 
   - uca4.0ddf859f-d703-4984-a9bc-89bd2ae2b886 
   - invokeUCA 
List end] true 
/*if there is a big gap between BPM Time and BPD DB Time,  the UCA may be executed in wrong time*/ 
[4/19/17 14:03:24:928 CST] 000013b9 TaskManager   1 com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 currentTime   : 1492581804928 <<<<<<<<<<<<<<<<<<<<<<<< BPM Time 
[4/19/17 14:03:24:928 CST] 000013b9 TaskManager   1 com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 currentDbTime : 1492581804928 <<<<<<<<<<<<<<<<<<<<<<<< BPM  DB Time 
[4/19/17 14:03:24:929 CST] 000013b9 TaskManager   1 com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 scheduledTime before adjustment: 1492581804927 = Wed Apr 19 14:03:24 CST 2017 
[4/19/17 14:03:24:929 CST] 000013b9 TaskManager   1 com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 scheduledTime after adjustment: 1492581804927 = Wed Apr 19 14:03:24 CST 2017 
```

**Usage 3#:** JMS message is triggered 
**Key words:** <font color="blue">BaseJMSEventPublisher.send / UCA</font> 
**Sample:**
```
[10/7/16 13:21:40:060 MST] 000001ab wle_event 1 Entering BaseJMSEventPublisher.send, event 
is BranchSummaryChange( clientUUID=feb969dc-c8c4-4434-9ceb-d03fa9a29b3c, branchId=Branch.51857a4de755- 
478d-ad36-86ce6ce3217f, updatedClient=ClientActivitySummary{ seq=335604, 
branchId=Branch.51857a4d-e755-478d-ad36-86ce6ce3217f, tip=true, user=User.1, editing=[], 
viewingOnly=[ProjectDefaults.3ca830f0-cd7b-4898-aa29-e1444300d644, UCA.0d6a7a19-dec8-4420-8c4e- 
60c71f3a4e3c, BPD.558bf025-049f-48dc-ac58-4373d869d7d7] } ) and message properties is null 
```

**Usage 4#:** JMS message is received by Event Manager 
**Key words:** <font color="blue">Received Event Manager message</font> 
**Sample:**
```
[10/7/16 13:21:40:060 MST] 00000151 EventMgrMessa 1 
com.lombardisoftware.server.ejb.eventmgr.EventMgrMessageListenerCore onMessage Received Event 
Manager message: 
JMSMessage class: jms_text 
JMSType: null 
JMSDeliveryMode: 2 
JMSExpiration: 0 
JMSPriority: 4 
JMSMessageID: ID:7d556c1e25e710d25a44d203110a134f0000000000000001 
JMSTimestamp: 1475871699769 
JMSCorrelationID: null 
JMSDestination: queue://eventqueueDestination.SOA-AppCluster?busName=BPM.IPS-SOA.Bus 
JMSReplyTo: null 
JMSRedelivered: false 
JMSXDeliveryCount: 1 
JMS_IBM_System_MessageID: 2BD73D1D768F0472_64503589 
JMSXUserID: uid=deadmin,o=defaultWIMFileBasedRealm 
JMSXAppID: Service Integration Bus 
<?xml version="1.0" encoding="UTF-8"?> 
<in:eventmsg xmlns:in="http://BPMSOA_StartupInterface/J ... 
```

**Usage 5#:** UCA is scheduled(Make sure DB Time same to BPM Time) 
**Key words:** <font color="blue">Scheduling task / scheduleTasks</font> 
**Comment :** Trace file when Time Based UCA schedules the execution time. 
**Sample:** 
```
[10/7/16 13:21:40:078 MST] 00000151 TaskManager > 
com.lombardisoftware.server.scheduler.TaskManager scheduleTasks ENTRY 
[com.lombardisoftware.server.scheduler.ScheduledTask@5dabbc6f 
- scheduledTime: 1475871700066 = Fri Oct 07 13:21:40 MST 2016 
- repeatString: null 
- execClassName: com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask 
- arguments: 4.7420f1e5-80f0-46bf-9fb0-26fbbc010498;15;CTA Start UCA<reason 
type="UCANameMessage" ucaName="CTA Start UCA"> 
<shortName>CTA</shortName> 
<param name="CTARequest"> 
<value>&lt;value&gt; 
... 
[10/7/16 13:21:40:090 MST] 00000151 TaskManager 1 
com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 currentTime : 
1475871700079 
[10/7/16 13:21:40:090 MST] 00000151 TaskManager 1 
com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 currentDbTime : 
1475896900000 
[10/7/16 13:21:40:090 MST] 00000151 TaskManager 1 
com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 scheduledTime before 
adjustment: 1475871700066 = Fri Oct 07 13:21:40 MST 2016 
[10/7/16 13:21:40:090 MST] 00000151 TaskManager 1 
com.lombardisoftware.server.scheduler.TaskManager adjustTaskTimes *** JR43099 scheduledTime after 
adjustment: 1475896899987 = Fri Oct 07 20:21:39 MST 2016 
... 
[10/7/16 13:21:40:093 MST] 00000151 TaskManager 1 
com.lombardisoftware.server.scheduler.TaskManager scheduleTaskChunk Scheduling task 
Task_Id = 109704 
com.lombardisoftware.server.scheduler.ScheduledTask@5dabbc6f 
- scheduledTime: 1475896899987 = Fri Oct 07 20:21:39 MST 2016 
- repeatString: null 
- execClassName: com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask 
- arguments: 4.7420f1e5-80f0-46bf-9fb0-26fbbc010498;15;CTA Start UCA<reason 
type="UCANameMessage" ucaName="CTA Start UCA"> 
<shortName>CTA</shortName> 
<param name="CTARequest"> 
<value>&lt;value&gt; 
... 
[10/7/16 13:21:40:131 MST] 00000151 TaskManager < 
com.lombardisoftware.server.scheduler.TaskManager scheduleTasks RETURN 1 
```

**Usage 6#:** UCA is executing 
**Key words:** <font color="blue">CWLLG0194I / Executing TASK_ID</font>
**Sample:** 
```
[4/19/17 14:03:25:021 CST] 000015a2 Engine        1 com.lombardisoftware.server.scheduler.Engine execute CWLLG0194I: Execution of task Execute UCA TonyUCA, triggered by invokeUCA is beginning. 
[4/19/17 14:03:25:021 CST] 000015a2 Engine        1 com.lombardisoftware.server.scheduler.Engine execute  Executing TASK_ID = 638 
[4/19/17 14:03:25:021 CST] 000015a2 UcaExecutorTa 1 com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask execute Invoking UCA UCA.0ddf859f-d703-4984-a9bc-89bd2ae2b886 with reason <reason type="UCAIDMessage" ucaId="4.0ddf859f-d703-4984-a9bc-89bd2ae2b886"> 
  <shortName>FCI_C</shortName> 
  <param name="Input"> 
    <value>&lt;variable type="String"&gt;&lt;![CDATA[000]]&gt;&lt;/variable&gt;</value> 
  </param> 
</reason> 
[4/19/17 14:03:25:021 CST] 000015a2 clientinfoplu 3   preInvoke(executeUCA) 
[4/19/17 14:03:25:022 CST] 000015a2 EventMgrCore  > com.lombardisoftware.server.ejb.eventmgr.EventMgrCore executeUCA ENTRY id = UCA.0ddf859f-d703-4984-a9bc-89bd2ae2b886, xmlReason = <reason type="UCAIDMessage" ucaId="4.0ddf859f-d703-4984-a9bc-89bd2ae2b886"> 
  <shortName>FCI_C</shortName> 
  <param name="Input"> 
    <value>&lt;variable type="String"&gt;&lt;![CDATA[000]]&gt;&lt;/variable&gt;</value> 
  </param> 
</reason> 
```

**Usage 7#:** UCA is executed successfully or fails 
**Key words:** <font color="blue">CWLLG0202I / CWLLG0204I / CWLLG0203E / Successfully executed task</font>
Undercover Agent job succeeded / Undercover Agent job failed 
**Sample:**
```
[10/7/16 13:23:41:043 MST] 000558b2 wle_scheduler 1 com.lombardisoftware.server.scheduler.Engine 
notifyListeners CWLLG0202I: When notifying listeners of task 1,124, the following task execution 
log string was generated: Successfully executed task 'Execute UCA UCA - sinstring - Event, 
triggered directly (1124, com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask): start 
delay = 2.0 sec, execution time = 0.54 sec. 

[10/7/16 13:23:42:077 MST] 00558b2 wle_scheduler 1 com.lombardisoftware.server.scheduler.Engine 
notifyListeners CWLLG0204I: Undercover Agent job succeeded. Task 1,124 job details are: 
class=com.lombardisoftware.server.scheduler.tasks.UcaExecutorTask parameters=[4.0d6a7a19-dec8- 
4420-8c4e-60c71f3a4e3c;27;UCA - sinstring - Event<reason type="DirectMessage" 
rootContext="2064.b5a00725-3b5b-4834-a352-c07a2d91c669T" ucaRef="/4.0d6a7a19-dec8-4420-8c4e- 
60c71f3a4e3c" />] 

[10/7/16 13:23:42:077 MST] 0000004c CWLLG0203E: Undercover Agent job failed. Task 18542 job 
details are: class=com.lombardisoftware.bpd.runtime.engine.quartz.DbNotificationBpdTask 
parameters=[1234;654321] 
```

**Usage 8#:** SME is linked to start new BPD instance in same thread 
**Key words:** <font color="blue">doStartBPD / BPDExecutionContext / createToken</font> 
**Comment :** Trace file when SME receives event from UCA and starts. 
**Sample:**
```
//Linking the UCA to the start event of the BPD in the same thread 
[6/30/17 18:47:00:151 AEST] 000558b2 wle_engine 1 
com.lombardisoftware.server.ejb.bpd.BPDEngineServicesCore doStartBPD BEGIN: doStartBPD(), bpdId = 
BPD.558bf025-049f-48dc-ac58-4373d869d7d7, name = IBM L2 - test SME with UCA - sinstring, 
startEventId = BPDObjectIdImpl(bpdid:0574f2181bf4aeec:-484d2df6:13b3e1187dd:-7fc3) 
//Executing the instance created from the start message event (SME) 
[6/30/17 18:47:00:154 AEST] 000558b2 wle 1 
com.lombardisoftware.bpd.runtime.engine.BPDExecutionContext BPDExecutionContext BEGIN: 
constuctor(), instanceId = BpmnInstanceId(958), diagramId = Ref[/BPD.558bf025-049f-48dc-ac58- 
4373d869d7d7], startObjectId=BPDObjectIdImpl(bpdid:0574f2181bf4aeec:-484d2df6:13b3e1187dd:-7fc3), 
startLaneOwnerId = 9 
//Creating the BPMN token for the instance 
[6/30/17 18:47:00:155 AEST] 000558b2 wle 1 
com.lombardisoftware.bpd.runtime.engine.BPDNetState createToken END: createToken(), result = 
BPDToken(bpdInstanceId=BpmnInstanceId(958), tokenId=0, locationId = 
BPDObjectIdImpl(bpdid:0574f2181bf4aeec:-484d2df6:13b3e1187dd:-7fc3)) 
//Execution context saving for this instance. 
[6/30/17 18:47:00:155 AEST] 000558b2 wle 1 
com.lombardisoftware.bpd.runtime.engine.js.BPDTWSystemBPDScriptable setBpdExecutionContext BEGIN: 
setBpdExecutionContext(), bpdExecutionContext = <bpd-execution-context 
instanceId="BpmnInstanceId(958)"> 
<execution-tree> 
<execution-tree-node 
class="com.lombardisoftware.bpd.runtime.engine.RootBPDExecutionTreeNode"> 
<diagram-id>BPD.558bf025-049f-48dc-ac58-4373d869d7d7</diagram-id> 
<diagram-name>IBM L2 - test SME with UCA - sinstring</diagram-name> 
<flow-object-id></flow-object-id> 
<flow-object-name></flow-object-name> 
<counter>-1</counter> 
<bpd-net-state> 
<tokens> 
<BPDToken> 
<bpmnInstanceId>BpmnInstanceId(958)</bpmnInstanceId> 
<tokenId>0</tokenId> 
<locationId>BPDObjectIdImpl(bpdid:0574f2181bf4aeec:-484d2df6:13b3e1187dd:- 
7fc3)</locationId> 
</BPDToken> 
</tokens> 
<lane-owners> 
<entry /> 
</lane-owners> 
<lane-id>bpdid:0574f2181bf4aeec:-484d2df6:13b3e1187dd:-7fe9</lane-id> 
<lane-owner>9</lane-owner> 
</bpd-net-state> 
<symbol-table /> 
</execution-tree-node> 
</execution-tree> 
</bpd-execution-context> 
```

**Usage 9#:** Message is stored if Durable Subscription is checked in IME definition 
**Key words:** <font color="blue">DurableMessageCheckTask</font> 
**Comment:** Trace file when Message stored for Durable Subscription. 
**Sample:**
```
[6/30/17 18:46:59:992 AEST] 00000194 Engine كcom.lombardisoftware.server.scheduler.Engine 
loadTasksIfOwnerInternal loaded task: com.lombardisoftware.server.scheduler.FullTask@c912518f 
- taskId: 507 
- scheduledTime: 1498812419914 = Fri Jun 30 18:46:59 AEST 2017 
- dbScheduledTime: 1498812419992 = Fri Jun 30 18:46:59 AEST 2017 
- executeTime: 1498812419992 = Fri Jun 30 18:46:59 AEST 2017 
- dbExecuteTime: 1498812419992 = Fri Jun 30 18:46:59 AEST 2017 
- discriminator: 295 
- repeatString: null 
- description: Check For Durable Message Waiters for message 442381631502 
- blackedOut: false 
- blackoutCalendarId: 1 
- blackoutBehavior: BlackoutBehavior(2, EXECUTE_ONE_AFTER_BLACKOUT) 
- queueId: -101 
- execClassName: com.lombardisoftware.bpd.runtime.engine.message.DurableMessageCheckTask 
- arguments: <args msgId="442381631502" ucaId="4.b951d712-595a-4700-9845-d29cc60dff5e"> 
<output> 
<values> 
<value name="key" type="String"><![CDATA[0481112330]]></value> 
<value name="message" type="String"><![CDATA[I am who I am!]]></value> 
</values> 
</output> 
<correlation>&lt;cv cpi="2055.e27b3233-e57b-42ac-ad5c-ec000c2122c8" 
type="String"&gt;&lt;![CDATA[938912399]]&gt;&lt;/cv&gt;</correlation> 
<wait id="442381631501" /> 
</args> 
- inClosingTransaction: false 
- reExecuteCount: 0 
- keywords: List start 
- msg.id.442381631502 
List end 
```

**Usage 10#:** Event is received by IME, including IME name & parameter 
**Key words:** <font color="blue">BPD Event ID: / Event Type: 3 / Finished parsing event</font> 
**Comment:** Trace file when IME receives Message. 
**Sample:**
```
[6/30/17 18:47:00:117 AEST] 00002bd8 
BPDEngine فcom.lombardisoftware.bpd.runtime.engine.BPDEngine 
processNotificationRegardlessStatus processNotification(), treeNode = Step (IME) 
[6/30/17 18:47:00:117 AEST] 00002bd8 FlowObjectExe 1 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode doWork 
canExecutePreAssignments = true 
[6/30/17 18:47:00:117 AEST] 00002bd8 FlowObjectExe 1 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode doWork 
canExecuteAttachedEvents = true 
[6/30/17 18:47:00:117 AEST] 00002bd8 MessageEventW 1 
com.lombardisoftware.bpd.component.flowcomponent.event.worker.MessageEventWorkerHelper 
processIntermediateAction processIntermediateMessageAction(...) state is 1 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca ف Event actionType:1, actionSubType:0 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca ف BpmnId: 
BPDObjectIdImpl(bpdid:6bad0ab0745abd48:3dff7ae:15caa7a2583:-7fa8) 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 BPD Event ID: BpdEvent.0273b4d2-8b39- 
44b5-94cf-96864773361c 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 Name: IME 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 Event Type: 3 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 Action Type: 1 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 Action SubType: 0 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 Event ucaRef: Ref[/UCA.b951d712-595a- 
4700-9845-d29cc60dff5e] 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 SCA Service Identigier: null 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 SCA Service MessageObject: null 
[6/30/17 18:47:00:117 AEST] 00002bd8 wle_sca 1 
<<<<<<<<<<<<<<<<<<<<< Finished parsing event <<<<<<<<<<<<<<<<<<< 
[6/30/17 18:47:00:117 AEST] 00002bd8 MessageEventW 1 
com.lombardisoftware.bpd.component.flowcomponent.event.worker.MessageEventWorkerHelper 
assignOutputValues Assigning value of output parameter name = message, value = I am who I am! to 
tw.local.message 
[6/30/17 18:47:00:117 AEST] 00002bd8 MessageEventW 1 
com.lombardisoftware.bpd.component.flowcomponent.event.worker.MessageEventWorkerHelper 
assignOutputValues Assigning value of output parameter name = key, value = 0481112330 to 
tw.local.key 
```

**Usage  11#:** IME execution is done (must be POST instead of PRE) 
**Key words:** <font color="blue">fireEvent / Flow Object: Event IME (POST) / INTERMEDIATION_TYPE</font>
**Comment:** Trace file when IME completes successfully. 
**Sample:**
```
[6/30/17 18:47:00:133 AEST] 00002bd8 FlowObjectExe > 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode fireEvent ENTRY 
[6/30/17 18:47:00:133 AEST] 00002bd8 FlowObjectExe 1 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode fireEvent Flow Object: Event 
IME (POST) 
[6/30/17 18:47:00:133 AEST] 00002bd8 FlowObjectExe 1 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode fireEvent Event type: 
INTERMEDIATE_TYPE 
[6/30/17 18:47:00:133 AEST] 00002bd8 FlowObjectExe 1 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode fireEvent FlowObject IME has 1 
event action(s). 
[6/30/17 18:47:00:148 AEST] 00002bd8 FlowObjectExe < 
com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode fireEvent RETURN 
```

#### Reference

Collect troubleshooting data for UCA problems in IBM Business Process Manager 
http://www-01.ibm.com/support/docview.wss?uid=swg21660915 

What are the expected log entries in BPM when using a UCA to start a process https://developer.ibm.com/answers/questions/168562/what-are-the-expected-logentries-in-bpm-when-usin.html 

When the exception "CWLLG0203E:Undercover Agent job failed" occurs, what do the parameters mean in the exception stack 
https://developer.ibm.com/answers/questions/165834/an-exception-cwllg0203eoccured-while-running-an-u.html 

Common steps to resolving issues with undercover agents in IBM Business Process Manager 
http://www-01.ibm.com/support/docview.wss?uid=swg27041883 

#### Common Scenario: 

Here is how InvokeUCA triggers an IME.  
1.Make sure EM is running &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 1#) 
2.InvokeUCA starts correctly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 2#) 
3.JMS Message is triggered &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 3#) 
4.JMS Message is received by EM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 4#) 
5.UCA is scheduled &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 5#) 
6.UCA is executing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 6#) 
7.UCA is executed successfully &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 7#) 
8.Event is received by IME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 10#) 
9.IME execution is done &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Usage 11#) 

#### SQL to check BPM status in DB 

1.Get BPM configuration file TeamWorksConfiguration.running.xml: 
```
"profiles/$bpm_node/config/cells/$cell_name/nodes/$node_name/servers/$server_name/process-center(server)" 
```
 
2.Run the following queries: 
2.1) 
```
select EXECUTION_STATUS, count(*) cnt from lsw_bpd_instance group by EXECUTION_STATUS 
```
2.2) 
```
select count(*) from lsw_task 
```
2.3) 
```
select count(*) from lsw_epv_var_value 
```
2.4) 
```
select * from lsw_em_task 
```
2.4) do not run this query if 2.3 return big number, run it after cleanup the EPV var value history for this case. 
```
select * from ( 
select distinct epvVarVal.EPV_VAR_ID, epvVarVal.EPV_VAR_VALUE_ID, 
case 
when epvVarVal.reason is null and epvVarVal.value is null then 0 
when epvVarVal.reason is null and epvVarVal.value is not null then length(epvVarVal.value) 
when epvVarVal.reason is not null and epvVarVal.value is null then length(epvVarVal.reason) 
else length(epvVarVal.value) + length(epvVarVal.reason) end as lob_len, 
epvVarVal.EFFECTIVE_ON 
from lsw_epv_var_value epvVarVal 
order by lob_len desc 
) where rownum < 50
```
2.5) 
```
select task_status, count(*) cnt from lsw_em_task group by task_status 
```
2.6) 
```
select TASK_STATUS, count(*) as cnt from lsw_em_task group by TASK_STATUS order by cnt desc 
```
2.7) 
```
select TASK_EXECUTION_CLASS, count(*) as cnt from lsw_em_task group by TASK_EXECUTION_CLASS order by cnt desc 
```
2.8) 
```
select TASK_EXECUTION_CLASS, TASK_STATUS, count(*) as cnt from lsw_em_task group by TASK_EXECUTION_CLASS, TASK_STATUS order by cnt desc 
```
2.9) 
```
select count(*) from LSW_EM_TASK where task_id in (select task_id from lsw_em_task_keywords where keyword = 'retryLimitExceeded') 
```
2.10) 
```
select count(*) from lsw_favorite
```
2.11) 
```
select count(*) from lsw_usr_xref 
```
2.12) 
```
select count(*) from lsw_usr_grp_xref
```
2.13) 
```
select count(*) from lsw_usr_grp_mem_xref 
```
2.14) 
```
select count(*) from lsw_grp_grp_mem_exploded_xref 
```
2.15) 
```
select IS_ACTIVE, count(*) from lsw_snapshot group by IS_ACTIVE 
```

 
