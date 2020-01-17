Date:2019-12-19

## Overview

Advanced Integration Services (AIS) are built in Integration Designer as services and are called from a Business Process. Advanced Integration Services is used to encapsulate business functionality in small components.

## Prerequisites

Service Component Architecture (SCA).
SCA is a set of specifications that describe a programming model for building applications and systems using a Service-Oriented Architecture (SOA). SCA extends and complements previous approaches to implementing services and builds on open standards such as Web services.
http://www.oasis-opencsa.org/sca

## Components

**Bindings**
At the core of a service-oriented architecture is the concept of a service, a unit of functionality accomplished by an interaction between computing devices. An export defines the external interface (or access point) of a module, so that Service Component Architecture (SCA) components within the module can provide their services to external clients. An import defines an interface to services outside a module, so the services can be called from within the module. You use protocol-specific bindings with imports and exports to specify the means of transporting the data into or out of the module.

**Exports**
External clients can invoke SCA components in an integration module over a variety of protocols (such as HTTP, JMS, MQ, and RMI/IIOP) with data in a variety of formats (such as XML, CSV, COBOL, and JavaBeans). Exports are components that receive these requests from external sources and then invoke IBM® Business Process Manager components using the SCA programming model.

**Imports**
An SCA component might want to invoke a non-SCA external service that expects data in a different format. An import is used by the SCA component to invoke the external service using the SCA programming model. The import then invokes the target service in the way that the service expects.

**Relationships**
A relationship is an association between two or more data entities, typically business objects. In IBM Business Process Manager Advanced, relationships can be used to transform data that is equivalent across business objects and other data but that is represented differently, or they can be used to draw associations across different objects found in different applications. They can be shared across applications, across solutions, and even across products.
The relationship service in IBM Business Process Manager Advanced provides the infrastructure and operations for managing relationships. Because it enables you to deal with business objects regardless of where they reside, it can provide a unified holistic view across all applications in an enterprise, and serve as a building block for BPM solutions. Because relationships are extensible and manageable, they can be used in complex integration solutions.

**Business objects**
The computer software industry developed several programming models and frameworks in which business objects provide a natural representation of the business data for application processing.

## Troubleshooting

#### Data Collection

To trace the problems that are specific to AIS in BPM, below trace string should be enabled on the application server. Base trace:
```
*=info: com.ibm.bpm.fds.*=all:ProcessApplicationLifecycle=all: com.ibm.bpm.fds.repo.util.ContributionHelper=off
```
**Trace Analysis**

All below information are gathered when bindings work correctly. You can search key words and locate the information in trace files.

**Usage 1#:** Below information is to tell the SCA invocation chains, including invocation style, from and to etc. Please notice if it is an async call, it may across different JVMs or
different threads so usually time stamp, transaction id, message id etc are also required
to identify the right thread id.
**Key words:** <font color="blue">Processing interaction (invokeAsync / invokeAsyncWithCallback / invokeResponse / onInvokeDeferredResponse)</font>
**Sample:**
```
[3/2/16 15:11:42:860 CST] 0000026e Core 1 com.ibm.ws.sca.internal.message.impl.MessageDispatcherImpl Processing interaction:[invokeAsyncWithCallback,operation1] => {BPCIVTApplication}ExtPTask.component
[2/17/16 5:20:11:477 EST] 00000119 Core 1 com.ibm.ws.sca.internal.message.impl.MessageDispatcherImpl Processing interaction:[invokeAsync,createMultistep] => {LOLORequestWorkflow}RequestWorkflow.component
```

**Usage 2#:** below information is used to see whether sync over async switch has been observed, which is antipattern and needs to be avoided.
**Key words:** <font color="blue">CWSCA2011W</font>
**Sample:**
```
[10/3/16 10:52:13:736 EST] 00001557 Core W CWSCA2011W: Service Component Architecture (SCA) is switching a synchronous call to an asynchronous call. The request will be sent in a new local transaction. The default timeout is 295000 milliseconds.  
```

**Usage 3#:** below information is used to see when the async response message is ready to receive and when it is received. Usually it’s used to observe the async response message out of SCA world
**Key words:** <font color="blue">receiveResponse() / Client-side - Received SIBusMessage</font>
**Sample:**
```
[10/18/16 10:39:44:129 EST] 0000014c Core > com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler receiveResponse() - Message: Entry >>
[10/18/16 10:39:44:144 EST] 0000014c Core < com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler createConnectionWithRetry() - Connection was successful Exit <<
...
[10/18/16 10:40:02:325 EST] 0000014c Core 3 com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler Client-side - Received SIBusMessage: { com.ibm.ws.sib.mfp.impl.JsJmsBytesMessageImpl@59325932 }
[10/18/16 10:40:02:348 EST] 0000014c Core < com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler receiveResponse() Exit <<. 
```

**Usage 4#:** If the SCA invocation is cross clusters/JVMs, used to match the handling threads. For example thread 0000184 on server1 called to thread 0000020e on server2,and returned.
**Key words:** <font color="blue">processMessageBytes / processMessage</font>
**Sample:**
```
[10/18/16 10:42:34:557 EST] 00000184 Core > com.ibm.ws.sca.internal.binding.handler.SCAImportBindingHandler processMessageBytes Entry >> { java.lang.Object[]@3cd23cd2 } length = 2
...
[10/18/16 10:42:34:560 EST] 0000020e Core > com.ibm.wsspi.sca.ejb.module.impl.ServiceSessionBean processMessageBytes Entry >> <?xml version="1.0" encoding="UTF-8"?>
...
[10/18/16 10:42:54:989 EST] 0000020e Core < com.ibm.wsspi.sca.ejb.module.impl.ServiceSessionBean processMessageBytes Exit <<
...
[10/18/16 10:42:55:009 EST] 00000184 Core < com.ibm.ws.sca.internal.binding.handler.SCAImportBindingHandler processMessage Exit <<
.. 
```

**Usage 5#:** SCA message content during the invocations
**Key words:** <font color="blue">com.ibm.ws.sca.internal.message.impl.MessageDispatcherImpl</font>
**Sample:**
```
[6/19/17 15:47:28:957 CDT] 00000fa9 Core 3
com.ibm.ws.sca.internal.message.impl.MessageDispatcherImpl
==============================================================================================
Header: {http://www.ibm.com/xmlns/prod/websphere/sca/headers/6.0.0}InteractionHeader {
com.ibm.ws.sca.internal.headers.impl.ManagedInteractionHeaderImpl@b9a56233 }
messageType = { com.ibm.wsspi.sca.headers.MessageType@97919891 }
name = exception
value = 2
literal = exception
interactionType = { com.ibm.wsspi.sca.headers.InteractionType@ba4af101 }
name = invokeResult
value = 1
literal = invokeResult
operationType = {
com.ibm.wsspi.sca.scdl.wsdl.impl.WSDLPortTypeImpl$WSDLOperationTypeImpl@7bdd9283 }
initializedWrappedStyle = false
eOperation = { com.ibm.ws.sca.internal.scdl.wsdl.managed.SDOWSDLEOperationImpl@d54b47f8 }
wrappedStyle = true
inputType = Type name:invoke_._type
URI:wsdl:http://GEM/AIS/Initialize_x0020_Process_x0020_AIS isDataType:false open:false sequenced:
false abstract:false baseTypes: [] properties: [initInput] aliasName:[]
outputType = Type name:invokeResponse_._type
URI:wsdl:http://GEM/AIS/Initialize_x0020_Process_x0020_AIS isDataType:false open:false sequenced:
false abstract:false baseTypes: [] properties: [gemTasks] aliasName:[]
exceptionTypes = [Type name:AISGenericFault URI:http://GIS isDataType:false open:false
sequenced: false abstract:false baseTypes: [] properties: [FaultCode, FaultString] aliasName:[]]
op = Operation: name=invoke
style=REQUEST_RESPONSE,1
Input: name=null
Message: name={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invokeMsg
Part: name=parameters
elementName={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invoke
Output: name=null
Message: name={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invokeResponseMsg
Part: name=parameters
elementName={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invokeResponse
Fault: name=aisError
Message: name={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invokeFault1Msg
Part: name=parameters
elementName={http://GEM/AIS/Initialize_x0020_Process_x0020_AIS}invokeFault1
Body: com.ibm.websphere.sca.ServiceBusinessException[aisError]: BusinessObject@eca5db0b | Name=
[{http://GIS}AISGenericFault] | XSTypeDefinition= [{http://GIS}AISGenericFault]] | Internal
Information =[ element {http://GIS}AISGenericFault (:
state:STATE_{STATE_NODES_REORDERED|ALLOW_FAST_ACCESS} [bitset=4194368] :) (: user
data:com.ibm.xml.sdo.model.mediator.FastAccessDataFactory$CopiedFastAccessData{Has original node!
COW Chain JVM Info={6484f805} | com.ibm.xml.sdo.model.mediator.CopiedFastAccessMediator@c17932d3}
:) | builtFirstNamespace=null | builtFirstAttribute=null | builtFirstChild=null | preceding=null |
following=null | parent=com.ibm.xml.xci.dp.cache.dom.DOMCachedDocument@87a62fcf |
CacheManager=com.ibm.xml.sdo.model.SDOCacheManager@51f3523b | JVM Object
info=com.ibm.ws.box.bomodel.impl.BusinessObjectImpl@eca5db0b
]
==============================================================================================. 
```

#### References

Synchronous-over-asynchronous invocation https://www.ibm.com/support/knowledgecenter/SSFPJS_8.5.6/com.ibm.wbpm.wid.bpel.doc/topics/csca_synchoverasynch.html

Asynchronous processing in WebSphere Process Server https://www.ibm.com/developerworks/websphere/library/techarticles/0904_fong/0904_fong.html

WebSphere Process Server invocation styles
https://www.ibm.com/developerworks/websphere/library/techarticles/0811_chacko/0811_chacko.html

