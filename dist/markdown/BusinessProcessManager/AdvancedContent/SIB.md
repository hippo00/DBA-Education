Date:2019-12-20

## Overview

A service integration bus is a group of one or more application servers or server clusters in a WebSphere® Application Server cell that cooperate to provide asynchronous messaging services. The application servers or server clusters in a bus are known as bus members. In the simplest case, a service integration bus consists of a single bus member, which is one application server.

Usually, a cell requires only one bus, but a cell can contain any number of buses. The server component that enables a bus to send and receive messages is a messaging engine.

A service integration bus provides the following capabilities:
1.Any application can exchange messages with any other application by using a destination to which one application sends, and from which the other application receives.
2.A message-producing application, that is, a producer, can produce messages for a destination regardless of which messaging engine the producer uses to connect to the bus.
3.A message-consuming application, that is, a consumer, can consume messages from a destination (whenever that destination is available) regardless of which messaging engine the consumer uses to connect to the bus.

## Components

1.Messaging Engine (ME)
Messaging Engines are the main messaging component in WebSphere Application Server. They perform exactly the same function as MQ queue managers but they are generally regarded as ‘light weight’. They host queues, topics and channels, just like MQ queue managers. Likewise, applications connect to messaging engines to send messages to queues or consume messages from queues.

![图片 1](https://media.github.ibm.com/user/228551/files/0ea36d00-2318-11ea-9223-b7fdb3d8910c)

2.Message Store
Every Messaging Engine has a Message Store, which is a place to store Persistent messages and other data about transactions, queues, etc. An instance of an ME will open its message store with an exclusive lock to prevent other instances of the same ME from trying to use it. Each messaging engine has one and only one message store, which can be either File store or Data store.

3.Bus Destination
A bus destination is a logical address to which applications can attach as message producers, message consumers, or both, in order to exchange messages. The types of bus destination include Queue destination, Topic space destination, Alias destination, Foreign destination.

4.Message Point
A message point is the physical representation, in an ME, of a destination defined on the bus. It is created when a bus destination is created. Two main types of message point are Queue point and Publication point.

## Troubleshooting
#### Data Collection

To trace the SIB related problems, below trace string should be enabled on application server:
`*=info:SIBMessageTrace*=all:SIBCommunications=all`

#### Data Analysis

1.The SibMessage thread operates SIB messages. Below trace indicates the connection to bus destination is established.
```
[10/30/19 14:31:12:667 IST] 00000304 SibMessage    I   [:] CWSIV0777I: A connection to messaging engine Node1.server1-BPM.ProcessServer.Bus for destination TestBinding.JMSExport1_RECEIVE_D_SIB on bus BPM.ProcessServer.Bus has been successfully created.
```
2.You should also focus on the UserTrace thread. The following trace snippet shows the producer sends message procedure.
```
[10/30/19 14:11:20:415 IST] 000002dc UserTrace     3   (com.ibm.ws.sib.processor.utils.UserTrace) [:] CWSJU0001I: A producer E4338E1F88541FB33AE1209F sent a message with ID ID:7108a7c35f2aa434846a582a110a134f0000000000000001 and correlation ID null to destination TestBinding.JMSImport1_SEND_D_SIB using transaction !AAABMwAAAAQAAAEzAAAABAAAATM=.
[10/30/19 14:11:20:415 IST] 000002dc UserTrace     3   (com.ibm.ws.sib.processor.utils.UserTrace) [:] CWSJU0004I: A message with ID ID:7108a7c35f2aa434846a582a110a134f0000000000000001, system message ID null and correlation ID null is put to queue TestBinding.JMSImport1_SEND_D_SIB
```
#### References

1.MustGather document of SIB related problems
https://www.ibm.com/support/pages/collect-troubleshooting-data-service-component-architecture-sca-service-integration-bus-sib-or-failed-event-manager-related-problems-ibm-business-process-manager-bpm-advanced

2.CWSIT0088E: There are currently no messaging engines
https://www.ibm.com/mysupport/s/question/0D50z000062kUPYCA2/cwsit0088e-there-are-currently-no-messaging-engines-in-bus-procsvrtestcellbus-running?language=en_US

