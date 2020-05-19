Date:2020-01-15

## Overview
The BPD and Service Engines are responsible for the execution of the activities and objects our customers create. The BPD Engine works as a boardgame, controlling the workflow in collaboration with the Event Manager (that moves tokens). It is usually reserved to develop a business workflow. The Service Engine works in a similar fashion sans token creation. Its main purpose is to execute more specific technical problems (such as a human service, integrations, etc.).

The BPD engine runs instances on a single thread and can run multiple instances at a time. However, this means that the engine needs to make sure no other thread or process runs concurrently. To do this, the BPD engine puts a lock in the database. 

The Service Engine does not use a locking method to prevent concurrent actions but also runs on single threads. Services can but are not required to run in a Process/BPD.


Process and Service Components:

![图片 1](https://media.github.ibm.com/user/228551/files/ba62a000-3792-11ea-8446-4ea7dc3b34ff)

## Component

Required Reading:
1.https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/tcasecrtcaseprocess.html
2.https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/tcrtsrvflow.html
3.https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/loopdetect_in_99local.html

<p style="margin-top:1em;">&nbsp;</p>

## Troubleshooting

#### Data Collection

1.The BPD and Service Engine encompass lots of different parts of the product. Generally, it may be a safe bet to gather the entire WLE package along with database traces:
`*=info:org.springframework.jdbc.*=all:WAS.clientinfopluslogging=all:WLE.*=all`

If you need a lightweight trace, you can run the following:
`*=info:WLE.wle_engine_basic=ALL:WLE.wle_svcflow_basic= ALL: WLE.wle_scheduler=ALL`

2.When collecting database tables in regards to instances and tasks, gathering the following tables may be helpful:
&nbsp;&nbsp;&nbsp;&nbsp;LSW_BPD_INSTANCE
&nbsp;&nbsp;&nbsp;&nbsp;LSW_BPD_INSTANCE_DATA
&nbsp;&nbsp;&nbsp;&nbsp;LSW_TASK

If the customer is having a performance problem (for example, database locking issues), please collect the following information: 

## Data Analysis

The BPD Engine logging provides detail level of the process flow to understand the movement and execution of activity without the need for heavy traces. Highlighted in bold below are keywords that should be helpful in understanding the traces.

Beginning of the BPD Process. You might see additional messages for the “Start”. Note here it is tokenID at 0. 
```
 [12/23/19 15:28:28:954 PST] 000001d3 wle_engine_ba > com.lombardisoftware.bpd.runtime.engine.BPDEngine executeTreeNode ENTRY nodeName = Step (Start), state(node)=STATE_EXECUTE_START_EVENT_IMPLEMENTATION, state(worker)=NA, node = com.lombardisoftware.bpd.runtime.engine.StartEventExecutionTreeNode(flowObjectId=BPDObjectIdImpl(2415ca6f-be65-41f0-b08f-39c1e88102a0), flowObjectName =Start, token = BPDToken(bpdInstanceId=BpmnInstanceId(55), tokenId=0, locationId = BPDObjectIdImpl(2415ca6f-be65-41f0-b08f-39c1e88102a0)), counter = -1)
```

In this step of the Process, it begins a system task although not specifically mentioned (the title of the task gives it away).
```
[12/23/19 15:28:29:014 PST] 000001d3 wle_engine_ba > com.lombardisoftware.bpd.runtime.engine.BPDEngine executeTreeNode ENTRY nodeName = Step (My System Task), state(node)=NA, state(worker)=STATE_NOT_INITIALIZED, node = com.lombardisoftware.bpd.runtime.engine.FlowObjectExecutionTreeNode(flowObjectId=BPDObjectIdImpl(4dbe5842-e378-4695-80a1-32dcbfa12d38), flowObjectName =My System Task, token = BPDToken(bpdInstanceId=BpmnInstanceId(55), tokenId=10, locationId = BPDObjectIdImpl(4dbe5842-e378-4695-80a1-32dcbfa12d38)), counter = -1)

One Interesting thing about system tasks, is that it also saves the execution context of the Process. This can have a performance impact if multiple system tasks are sequential as the execution context is saved and it creates new tasks that needs to make a call out to the event manager and back for system lane tasks:
[12/23/19 15:28:29:014 PST] 000001d3 wle_engine_ba > com.lombardisoftware.bpd.runtime.engine.BPDInstanceDAO save ENTRY bpdInstanceId=BpmnInstanceId(55)
…
[12/23/19 15:28:29:014 PST] 000001d3 wle_engine_ba 3 com.lombardisoftware.bpd.runtime.engine.BPDInstanceDAO save bpdExecutionContext=<bpd-execution-context instanceId="BpmnInstanceId(55)">
[12/23/19 15:28:29:038 PST] 000001d3 wle_engine_ba > com.lombardisoftware.server.core.TaskCore createNewTasks ENTRY createNewTasks...
[12/23/19 15:28:29:068 PST] 000001d3 wle_engine_ba < com.lombardisoftware.server.core.TaskCore createNewTasks RETURN listOfCreatedTaskIds=[54]
```

The Service Engine has similar trace signatures that make it easy to understand what is happening. In the scenario above, it made a call out to a Service Flow which runs some JavaScript. Look for Keywords such as “wle_svcflow_b”, inputParameter”, and “doJob ENTRY Step”. “DoJob ENTRY Step” is helpful when attempting to understand the direction of the logic in the service.
```
[12/23/19 15:28:29:198 PST] 00000289 wle_svcflow_b > com.lombardisoftware.server.ejb.workflow.EJBWorkflowManagerBean doResumeWorkflowEngine ENTRY engineBehavior = ENGINE_BEHAVIOR_USE_TASK, taskId = 54, debug=0, this.execContext=null, this.rootContext=null
[12/23/19 15:28:29:267 PST] 00000289 wle_svcflow_b 3 com.lombardisoftware.server.ejb.workflow.EJBWorkflowManagerBean doResumeWorkflowEngine inputParameter {"name": "myServiceVariable", "value":10}
[12/23/19 15:28:29:268 PST] 00000289 wle_svcflow_b > com.lombardisoftware.component.twscript.worker.ScriptWorker doJob ENTRY Step (Run Some JavaScript) , componentName=Script
[12/23/19 15:28:29:270 PST] 00000289 wle_svcflow_b > com.lombardisoftware.component.exitpoint.worker.ExitPointWorker doJob ENTRY Step (End) , componentName=ExitPoint
```
