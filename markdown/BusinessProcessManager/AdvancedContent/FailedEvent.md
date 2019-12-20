Date:2019-12-20

## Overview

The Recovery component in BPM provides a useful service that stores the information about the failed flows in the system and helps administrators to reinitiate them once the problems are resolved. Whenever there is a ServiceRuntimeException in the request process flow, the Recovery component comes into play. At that time, the transaction is rolled back until the last asynchronous point. The request data is wrapped inside a failed event and saved inside the common database. Along with the request data, the failed event also contains more information about when and where the failed event was created. If the failed flow needs to be re-initiated, this information helps to start processing again from the point where it failed earlier.

You can use the failed event manager to view, modify request data, and resubmit the failed events. This application runs on the application cluster and is accessed through the admin console. The failed event manager handles the following types of events:
1.Service Component Architecture (SCA) failed events.
2.Java Message Service (JMS) failed events.
3.WebSphere MQ failed events.
4.Business Process Choreographer (BPC) stopped, terminated, and failed events.
5.Business Flow Manager hold queue events.

## Components

1.SCA failed events

In the context of SCA, an event is a request or response that is received by an Advanced Integration service application. It can come from an external source (such as an inbound application adapter) or an external invocation to a web service. The event consists of a reference to the business logic it wants to operate and its data, stored in a Service Data Object (a business object). When an event is received, it is processed by the appropriate application business logic.

2.JMS failed events

In the context of JMS, a failed event is generated when a JMS data binding or function selector operation fails, or when an exception occurs in a downstream component and is thrown back to the JMS export or import. The Recovery service handles failed events from JMS data bindings and MQ JMS data bindings.

<p>3.MQ failed events</p>

In the context of WebSphere MQ, a failed event is generated when there is a problem (such as a data-handling exception) in the WebSphere MQ or WebSphere MQ JMS binding export or import used by an SCA module.

4.BPC failed events

In the context of Business Process Choreographer, exceptions can occur that, if not handled by the process logic, cause an activity to stop or the process instance to fail. A failed event is generated when a long-running Business Process Execution Language (BPEL) process fails and one of the following happens:
&nbsp;&nbsp;&nbsp;&nbsp;a. The process instance enters the Failed or Terminated state
&nbsp;&nbsp;&nbsp;&nbsp;b. An activity enters the Stopped state

5.Business Flow Manager hold queue events

You can use the failed event manager to manage navigation messages that are stored in the Business Flow Manager hold queue. A navigation message might be stored in the hold queue if:
&nbsp;&nbsp;&nbsp;&nbsp;a. An infrastructure, such as a database, is unavailable.
&nbsp;&nbsp;&nbsp;&nbsp;b. The message is damaged.

## Troubleshooting

#### Data Collection

To trace the failed event related problems, below trace string should be enabled on the application server:

`*=info:Recovery=all`

#### Data Analysis

In the collected traces, you should focus on the Recovery thread. The keyword processMessage presents the entry of the failed event recovery procedure.
```
[2/9/16 15:35:45:044 AEDT] 000001b6 Recovery >
com.ibm.wbiserver.manualrecovery.ejb.RecoveryMDBHandler processMessage ENTRY
com.ibm.ws.sib.mfp.impl.JsJmsBytesMessageImpl@b85880a8{SysMsgId=64C046590A6FB531_103002204}
[com.ibm.ws.sib.ra.inbound.impl.SibRaAbstractConsumerSession@110b0a2d
<delegate=com.ibm.ws.sib.comms.client.ConsumerSessionProxy@d406ded7>
<connectionClone=com.ibm.ws.sib.comms.client.MSSIXAResourceProvidingConnectionProxy@713a13e3>
<outOfScope=false>] com.ibm.ws.sib.comms.client.SuspendableXAResource@49758a8d
[2/9/16 15:35:45:044 AEDT] 000001b6 Recovery 3
com.ibm.wbiserver.manualrecovery.ejb.RecoveryMDBHandler processMessage A message was received on
queue sca/TransformISOProcess_v1_0_0
[2/9/16 15:35:45:045 AEDT] 000001b6 Recovery 3
com.ibm.wbiserver.manualrecovery.ejb.RecoveryMDBHandler processMessage Hand message over to SCA
MDB
```

#### References

1.MustGather document of failed event manager related problems
https://www.ibm.com/support/pages/collect-troubleshooting-data-service-component-architecture-sca-service-integration-bus-sib-or-failed-event-manager-related-problems-ibm-business-process-manager-bpm-advanced

2.Failed event manager
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/help_failedeventmanager/index.html

3.Managing failed flows using the Failed Event Manager API in WebSphere Process Server
https://www.ibm.com/developerworks/websphere/tutorials/1103_madgula/

4.How can I delete a large number of failed events
https://www.ibm.com/mysupport/s/question/0D50z000062kD0HCAU/how-can-i-delete-a-large-number-of-failed-events-at-once-in-websphere-process-server-wps-or-ibm-business-process-manager-bpm?language=en_US
