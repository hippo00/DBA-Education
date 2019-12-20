Date:2019-12-20

## Overview

JavaScript APIs

## Prerequisites

JavaScript Tutorial: (Focus on syntax instead of HTML, e.g. Variables, Data Types, Operators, Functions, etc.)
https://www.w3schools.com/js/default.asp

[JVM log syntax](https://www.ibjm.com/support/knowledgecenter/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/rtrb_readmsglogs.html)
(Note: “>” and “<” are additional events for entry and exit/return respectively.)

## Components

JavaScript API programming guide:
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/tdev_jsapi_javascriptapi_programming.html

JavaScript API namespace limitation: (BPD namespace is used by Processes and BPDs, Service namespace is used by Service Flows and Services, Scripts in client-side human services are limited to a subset.)
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/topics/cref_javascriptapi_namespaces.html

JavaScript API reference:
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/ae/doc/JSAPI.html

JavaScript API reference examples:
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/rdev_jsapi_samples.html

BPM/BAW implements the Mozilla Rhino JavaScript engine. The following script will give you the version on your test system:
```
var Context = org.mozilla.javascript.Context;
  currentContext = Context.getCurrentContext(),
   rhinoVersion = currentContext.getImplementationVersion();
log.info(rhinoVersion);
```

## Troubleshooting

#### Data Collection

Collect the data as mentioned in the JavaScript Mustgather:
https://www.ibm.com/support/pages/collect-troubleshooting-data-javascript-problems-ibm-business-process-manager-bpm-and-ibm-business-automation-workflow-baw

Isolate the thread with the problem thread using the PullThread tool in Archive Explorer (AE).

1.Identify the exception message or the log message you would like to investigate.
2.Use the PullThread tool in AE to filter out the thread from step 1.

#### Data Analysis

**JavaScript block in a BPD/Process:**

If the script is running in the context of a BPD/Process, you will see an entry point with the script name and instance ID by the “doWork” keyword. This is helpful in isolating the right instance ID:
```
[11/25/19 16:37:38:322 PST] 00009d1b BPDActivityWo > com.lombardisoftware.bpd.component.flowcomponent.activity.worker.BPDActivityWorker doWork ENTRY BPD InstanceId = BpmnInstanceId(54), flowObject Name = MyScript, flowObjectId = BPDObjectIdImpl(0e47135c-a8d5-4821-9f0a-7b7ea9c6eb46), model = com.lombardisoftware.bpd.component.flowcomponent.activity.model.BPDActivityImpl@96437b95,state = 0
```
You will see the following tags “executeJSScript” for certain JavaScript blocks. In this case, the name of the script is called “myScript”:
```
[11/25/19 16:37:38:322 PST] 00009d1b BPDActivityWo > com.lombardisoftware.bpd.component.flowcomponent.activity.worker.BPDActivityWorker executeImplementation ENTRY activity name = myScript
[11/25/19 16:37:38:322 PST] 00009d1b BPDExecutionT > com.lombardisoftware.bpd.runtime.engine.BPDExecutionTreeNode executeJSScript ENTRY script = 
var myVal = 5;
tw.local.myPrivateVariable = myVal;
tw.local.myPrivateComplexVariable = new tw.object.Complex_Object;
tw.local.myPrivateComplexVariable.someInteger = tw.local.myPrivateVariable;
log.info("tw.local.myPrivateComplexVariable.someInteger = " + tw.local.myPrivateComplexVariable.someInteger);, errorMessageLocation = TWScript
```
Finally, the “doWork” code should complete:
```
[11/25/19 16:37:38:384 PST] 00009d1b BPDActivityWo < com.lombardisoftware.bpd.component.flowcomponent.activity.worker.BPDActivityWorker doWork RETURN BPD InstanceId = BpmnInstanceId(54), flowObject Name = myScript, flowObjectId = BPDObjectIdImpl(0e47135c-a8d5-4821-9f0a-7b7ea9c6eb46), result: com.lombardisoftware.bpd.runtime.engine.workresult.FlowObjectCompletedWorkResult@3938b1b4
```
**JavaScript block in a Service:**

When JavaScript is running in the context of the service engine, you can look for the execution of a script, such as the following line here, when running in a service. You will see “wle_svcflow_b” and the “doJob” keywords as shown:
```
[11/22/19 15:51:50:685 PST] 000005ac wle_svcflow_b > com.lombardisoftware.component.twscript.worker.ScriptWorker doJob ENTRY Step (Script Task) , componentName=Script
```
This line is pretty helpful as it not only tells you the JavaScript code running in the script, but the GUID for the script that you should be able to match up with their application (twx file):
```
[11/22/19 15:51:50:685 PST] 000005ac JavaScriptRun 1 com.lombardisoftware.core.script.js.JavaScriptRunner execute Executing script Script Evaluation: Component.Script.b4492c3b-77de-43ed-938f-8d5b9c396554 [
var myVal = 5;
tw.local.myPrivateVariable = myVal;
tw.local.myPrivateComplexVariable = new tw.object.Complex_Object;
tw.local.myPrivateComplexVariable.someInteger = tw.local.myPrivateVariable;
log.info("tw.local.myPrivateComplexVariable.someInteger = " + tw.local.myPrivateComplexVariable.someInteger);
```
Finally, the exit point of the script should finish:
```
[11/22/19 15:51:50:701 PST] 000005ac wle_svcflow_b < com.lombardisoftware.component.twscript.worker.ScriptWorker doJob RETURN EndState(id = Out, displayName = Out)
```

#### References

[BAW Exception Codes](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG.html)

**Warnings:**
[CWLLG0399W](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0399W.html)
[CWLLG0408W](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0408W.html)
[CWLLG0410W](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0410W.html)

**Errors:**
[CWLLG0402E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0402E.html)
[CWLLG0406E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0406E.html)
[CWLLG0411E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0411E.html)
[CWLLG0434E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG0434E.html)
[CWLLG2039E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG2039E.html)
[CWLLG2040E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG2040E.html)
[CWLLG2041E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG2041E.html)
[CWLLG2185E](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.ref.doc/CWLLG2185E.html)

