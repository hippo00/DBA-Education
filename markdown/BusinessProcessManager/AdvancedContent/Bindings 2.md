Date:2019-12-19

## Overview

At the core of a service-oriented architecture is the concept of a service, a unit of functionality accomplished by an interaction between computing devices. An export defines the external interface (or access point) of a module, so that Service Component Architecture (SCA) components within the module can provide their services to external clients. An import defines an interface to services outside a module, so the services can be called from within the module. You use protocol-specific bindings with imports and exports to specify the means of transporting the data into or out of the module.

## Prerequisites

Web Service Basics
This is an elementary tutorial that introduces the concepts of web services.
http://www.tutorialspoint.com/webservices/

JMS (Java Message Service) is an API that provides the facility to create, send and read messages. It provides loosely coupled, reliable and asynchronous communication.
https://docs.oracle.com/javaee/6/tutorial/doc/bncdr.html

Hypertext Transfer Protocol (HTTP) is an application-level protocol for distributed, collaborative, hypermedia information systems. It is a generic, stateless, protocol which can be used for many tasks beyond its use for hypertext, such as name servers and distributed object management systems, through extension of its request methods, error codes and headers. A feature of HTTP is the typing and negotiation of data representation, allowing systems to be built independently of the data being transferred. 
https://www.w3.org/Protocols/rfc2616/rfc2616.html

IBM MQ (Message Queue) can transport any type of data as messages, enabling businesses to build flexible, reusable architectures such as service-oriented architecture (SOA) environments. It works with a broad range of computing platforms, applications, web services and communications protocols for security-rich message delivery.
https://www.ibm.com/support/knowledgecenter/en/SSFKSJ/com.ibm.mq.helphome.doc/product_welcome_wmq.htm

Enterprise Java Beans (EJB) is a development architecture for building highly scalable and robust enterprise level applications to be deployed on J2EE compliant application servers such as JBOSS, Web Logic, etc.
https://www.tutorialspoint.com/ejb/index.htm

## Components

**Exports**
External clients can invoke SCA components in an integration module over a variety of protocols (such as HTTP, JMS, MQ, and RMI/IIOP) with data in a variety of formats (such as XML, CSV, COBOL, and JavaBeans). Exports are components that receive these requests from external sources and then invoke IBM® Business Process Manager components using the SCA programming model.

**Imports**
An SCA component might want to invoke a non-SCA external service that expects data in a different format. An import is used by the SCA component to invoke the external service using the SCA programming model. The import then invokes the target service in the way that the service expects.

**List of bindings**
* Web service binding
A web service binding lets you access an external service using interoperable SOAP messages and qualities of service. You can also use web service binding to include attachments as part of the SOAP message.
The web service binding can use a transport protocol of either SOAP/HTTP (SOAP over HTTP) or SOAP/JMS (SOAP over JMS). Regardless of the transport (HTTP or JMS) used to convey the SOAP messages, web service binding always handles request/response interactions synchronously.

* HTTP binding
The HTTP binding lets you access an external service using the HTTP protocol, where non-SOAP messages are used, or where direct HTTP access is required. This binding is used when you are working with web services that are based on the HTTP model (that is, services that use well-known HTTP interface operations such as GET, PUT, DELETE, and so on). 

* Enterprise JavaBeans (EJB) binding
The EJB binding lets SCA components interact with services provided by Java™ EE business logic running on a Java EE server.

* EIS binding
The EIS (enterprise information system) binding, when used with a JCA resource adapter, lets you access services on an enterprise information system or make your services available to the EIS.

* JMS binding 
Java Message Service (JMS), generic JMS, and WebSphere® MQ JMS (MQ JMS) bindings are used for interactions with messaging systems, where asynchronous communication through message queues is critical for reliability.
An export with one of the JMS bindings watches a queue for the arrival of a message and asynchronously sends the response, if any, to the reply queue. An import with one of the JMS bindings builds and sends a message to a JMS queue and watches a queue for the arrival of the response, if any.
  - JMS 
The JMS binding lets you access the WebSphere-embedded JMS provider.
  - Generic JMS
The generic JMS binding lets you access a non-IBM vendor messaging system.
  - MQ JMS
The MQ JMS binding lets you access the JMS subset of a WebSphere MQ messaging system. You would use this binding when the JMS subset of functions is sufficient for your application.

* MQ binding
The WebSphere MQ binding lets you communicate with MQ native applications, bringing them into the service oriented architecture framework and providing access to MQ-specific header information. You would use this binding when you need to use MQ native functions.

## Troubleshooting

Data Collection

<p>1.To trace the problems that are specific to Web service binding in BPM, below trace string should be enabled on application server. Base trace:</p>

```
*=info:SCA.*=all:com.ibm.ws.webservices.*=all:org.apache.*=all:com.ibm.ws.websvcs.*=all:com.ibm.ws.metadata.*=all
```

<p>2.To trace the problems that are specific to HTTP binding in BPM, below trace string should be enabled on application server. Base trace:</p>

```
  SCA.Binding.HTTPBinding=all:SCA.Binding.HTTP=all
```

<p>3.To trace the problems that are specific to MQ/JMS binding  in BPM, below trace string should be enabled on application server. Base trace:</p>

```
  *=info:SCA.*=all:com.ibm.mq.*=all:com.ibm.ejs.jms.*=all
```

**Trace Analysis**

All information below is gathered when bindings work correctly. You can search key words and locate the information in trace files.

**Usage 1#:** MQ/JMS Import sends request
**Key words:** <font color="blue">emitExitEvent</font>
Comment :  Please pay attention to the attribute “destination” and make sure the request was sent to correct destination
**Sample:**
```
[12/3/18 15:57:56:714 IST] 00000668 MQ 3 com.ibm.ws.sca.internal.mq.handler.EventHelper firing emitExitEvent { java.lang.Object[]@cf31c08f } length = 2
= EventData [bindingProtocol=JMS, bType=Import, export=null, importb=com.ibm.ws.sca.internal.scdl.impl.ManagedImportImpl@cf744925 (description: null) (displayName: gtRefund) (name: gtRefund), opName=getRefundData, jType=MQNative,
destination=queue:///ONLRFN.RQSTQ?mdReadEnabled=true&putAsyncAllowed=1&messageBody=1&readAheadAllowed=1&targetClient=1&destDescription=PremiumRefund%2FgtRefund_MQ_SEND_D&mdWriteEnabled=true,
replyDestination=queue:///ONLRFN.RSPNQ?mdReadEnabled=true&putAsyncAllowed=1&messageBody=1&readAheadAllowed=1&targetClient=1&destDescription=PremiumRefund%2FgtRefund_MQ_RECEIVE_D&mdWriteEnabled=true,
callbackDestination=queue://PremiumRefund.gtRefund_MQ_CALLBACK_D?busName=BPM.DEV.Bus, direction=REQUEST, databinding=org.reliance.connector.GetRefundBinding, msgID=ID:414d512053415656494f4e2e4c4120203897ef5b201b3e30,
correlationID=ID:414d512053415656494f4e2e4c4120203897ef5b201b3e30, expiry=null, e=null]
```
**Usage 2#:** MQ/JMS Import receives response message
**Key words:** <font color="blue">getCallbackMessage</font>
Comment : Please pay attention to the attribute “destination” and make sure the response was received from correct destination. Please compare and make sure the request and response messages have same destination.
**Sample:**
```
[12/3/18 15:57:57:404 IST] 000001b2 MQ > com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl getCallbackMessage Entry >> { java.lang.Object[]@29746da9 } length = 2
= callbackID='CALLBACKMESSAGE_ID:414d512053415656494f4e2e4c4120203897ef5b201b3e30'
= ID:414d512053415656494f4e2e4c4120203897ef5b201b3e30
[12/3/18 15:57:57:404 IST] 000001b2 MQ 3 com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl Variable WBI_MQ_IMPORT_WAIT not set, using default
[12/3/18 15:57:57:404 IST] 000001b2 MQ 3 com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl Creating message consumer on callback destination queue://PremiumRefund.gtRefund_MQ_CALLBACK_D?busName=BPM.DEV.Buswith message
selector: callbackID='CALLBACKMESSAGE_ID:414d512053415656494f4e2e4c4120203897ef5b201b3e30'
[12/3/18 15:57:57:420 IST] 000001b2 MQ < com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl getCallbackMessage Exit << { com.ibm.ws.sib.api.jms.impl.JmsObjectMessageImpl@9280c042 } 
```
**Usage 3#:** MQ Import received the response message, matched the call-back message with correct callback message ID, and put the message on SIB.
**Key words:** <font color="blue">onMessage / getCallbackMessage / sendResponse</font>
**Sample:**
```
[18/10/16 10:29:40:454 EST] 000000ab MQ >com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl onMessage Entry >>
[18/10/16 10:29:40:454 EST] 000000ab MQ >com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl getCallbackMessage Entry >> {
java.lang.Object[]@69986998 } length = 2
[0] = callbackID='CALLBACKMESSAGE_ID:414d51204d514954535030332020202083d304588c9f0120'
[1] = ID:414d51204d514954535030332020202083d304588c9f0120
[18/10/16 10:29:40:731 EST] 000000ab MQ <com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl getCallbackMessage Exit <<
[18/10/16 10:29:45:485 EST] 000000ab Core >com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler sendResponse() - CorrelationID: Entry >>
_kzEAwJTBEeatRoKOCCcpEA
[18/10/16 10:29:45:519 EST] 000000ab Core <com.ibm.ws.sca.internal.async.sib.SIBAsyncHandler sendResponse() Exit <<
[18/10/16 10:29:45:529 EST] 000000ab MQ <com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl
com.ibm.wsspi.sca.mq.inbound.MQResponseListenerImpl.onMessage Exit <<. 
```
**Usage 4#:** HTTP import sends request
**Key words:** <font color="blue">CWSCA6024I/CWSCA6012I/CWSCA6023I/CWSCA6013I</font>
**Sample:**
```
[3/02/14 13:33:00:416 EST] 00000035 HTTPBinding I CWSCA6024I: The HTTP import binding has started processing the com.ibm.ws.sca.internal.message.impl.ManagedMessageImpl@7422f370(anyAttribute: null) Service Component Architecture (SCA) message.
[3/02/14 13:33:00:521 EST] 00000035 HTTPBinding I CWSCA6012I: The HTTP import binding is sending the request message with the following settings:
[3/02/14 13:33:00:576 EST] 00000035 HTTPBinding I CWSCA6013I: The HTTP import binding has sent the request message and is preparing to parse the response.
[3/02/14 13:33:00:688 EST] 00000035 HTTPBinding I CWSCA6023I: The HTTP import binding has completed the processing of the com.ibm.ws.sca.internal.message.impl.ManagedMessageImpl@7422f370(anyAttribute: null) Service Component Architecture (SCA) message.. 
```
**Usage 5#:** HTTP export receives response
**Key words:** <font color="blue">CWSCA6047I/CWSCA6046I</font>
**Sample:**
```
[9/18/15 10:30:24:630 IST] 00001a7e HTTPBinding I CWSCA6047I: The HTTP export binding has started processing the com.ibm.ws.webcontainer.srt.SRTServletRequest@3100998 request message.
[9/18/15 10:30:31:832 IST] 00001a7e HTTPBinding I CWSCA6046I: The HTTP export binding has completed the processing of the com.ibm.ws.webcontainer.srt.SRTServletRequest@3100998 request message. 
```
**Usage 6#:** Display the SSL setting information for secure web service call
**Key words:** <font color="blue">SetupSSLConfi</font>
**Sample:**
```
[5/27/16 15:22:38:006 CDT] 000001a7 SetupSSLConfi 3 Effective SSL configuration:
com.ibm.ssl.clientAuthenticationSupported = false
com.ibm.ssl.changed = 1
com.ibm.ssl.contextProvider = IBMJSSE2
com.ibm.ssl.trustStoreProvider = IBMJCE
com.ibm.ssl.protocol = SSL_TLS
com.ibm.ssl.keyStoreReadOnly = false
com.ibm.ssl.alias = NodeDefaultSSLSettings
com.ibm.ssl.keyStoreCreateCMSStash = false
com.ibm.ssl.securityLevel = HIGH
com.ibm.ssl.trustStoreName = CellDefaultTrustStore
com.ibm.ssl.configURLLoadedFrom = security.xml hostname = localhost
com.ibm.ssl.trustStorePassword = ******
com.ibm.ssl.keyStoreUseForAcceleration = false
com.ibm.ssl.trustManager = IbmPKIX|IBMJSSE2 soReuseAddr = 1
com.ibm.ssl.validationEnabled = false
com.ibm.ssl.trustStoreInitializeAtStartup = false
com.ibm.ssl.keyManager = IbmX509|IBMJSSE2
com.ibm.ssl.keyStoreFileBased = true endPointName = IPC_CONNECTOR_ADDRESS
com.ibm.ssl.keyStoreType = PKCS12
com.ibm.ssl.trustStoreFileBased = true
com.ibm.ssl.trustStoreCreateCMSStash = false
com.ibm.ssl.trustStoreScope = (cell):WPSDevCell01
com.ibm.ssl.trustStore = /usr/celeriti/WPS/profiles/DL90269WPSNode01/config/cells/WPSDevCell01/trust.p12
com.ibm.ssl.keyStoreProvider = IBMJCE
com.ibm.ssl.daysBeforeExpireWarning = 60
com.ibm.ssl.clientAuthentication = false
com.ibm.ssl.keyStore = /usr/celeriti/WPS/profiles/DL90269WPSNode01/config/cells/WPSDevCell01/nodes/DL90269WPSNode01/key.p12 port = 9634
com.ibm.ssl.trustStoreUseForAcceleration = false
com.ibm.ssl.trustStoreReadOnly = false
com.ibm.ssl.keyStoreScope = (cell):WPSDevCell01:(node):DL90269WPSNode01
com.ibm.ssl.tokenEnabled = false
newConnectionBufferSize = 8192
com.ibm.ssl.keyStoreName = NodeDefaultKeyStore
com.ibm.ssl.keyStorePassword = ******
com.ibm.ssl.keyStoreInitializeAtStartup = false
inactivityTimeout = 300
com.ibm.ssl.trustStoreType = PKCS12 
```

#### References

Configuring SCA HTTP binding to enable real-life scenarios 
https://www.ibm.com/developerworks/websphere/library/techarticles/0803_kharlamov/0803_kharlamov.html

Overview of MQ binding (Chinese)
https://www.ibm.com/developerworks/cn/websphere/library/techarticles/1101_gaozt_mqbinding/1101_gaozt_mqbinding.html

