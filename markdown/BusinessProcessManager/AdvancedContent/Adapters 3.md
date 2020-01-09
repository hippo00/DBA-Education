Date:2019-10-21

## Overview

IBM Business Automation workflow (BAW) supplies a set of adapters that can be integrated with the Service Component Architecture (SCA) framework. These adapters are based on the Java Connector Architecture (JCA).  Adapters enable business applications to act as services by connecting them to diverse enterprise information systems (EISs), such as databases, enterprise resource planning systems, file systems, and email systems. 

## Prerequisites

The Connector Architecture enables Java EE components to interact with enterprise information systems (EISs) and EISs to interact with Java EE components. EIS software includes various types of systems: enterprise resource planning (ERP), mainframe transaction processing, and nonrelational databases, among others. Connector architecture simplifies the integration of diverse EISs. Each EIS requires only one implementation of the Connector architecture. Because an implementation adheres to the Connector specification, it is portable across all compliant Java EE servers. 

This tutorial will be useful for learning the basics of JCA. This is an elementary tutorial that introduces the concepts of WebSphere Adapter. 

J2EE Connector Architecture: 
https://www.oracle.com/technetwork/java/javaee/index-138715.html

## Component

#### EIS – Enterprise Information System
This term is used to describe the applications that form an enterprise's existing system for handling company-wide information. An enterprise information system offers a well-defined set of services that are exposed as local or remote interfaces or both. Enterprise Resource Planning (ERP) and Database are typical enterprise information systems. 

#### EMD – Enterprise Metadata Discovery
A specification that you can use to examine an EIS and get details of business object data structures and APIs. An EMD stores definitions as XML schemas by default,  and builds components that can access the EIS. 

#### BO - Business Object
In a development or production environment, a set of XML schema attributes that represents a business entity (such as an invoice) and the definition of actions that can be performed on those attributes (such as the create and update operations). 

#### Inbound
An event is generated on the EIS and the adapter responds to the event by sending a message to BAW. The WebSphere Adapters export support inbound communication. When the EIS sends an event to the adapter, a message is propagated from the WebSphere Adapters export.

#### Outbound
BAW uses the adapter to send a request to the EIS. The WebSphere Adapters import support outbound communication. When a message is propagated to the WebSphere Adapters import node, the adapter sends a request to the EIS. 

![image](https://media.github.ibm.com/user/228551/files/47af9480-f4c3-11e9-8216-d6c2b357ecc7)

#### WebSphere Technology Adapters, which integrate using file exchange and database records, include:  
* **WebSphere Adapter for Email** - enables the exchange of business objects with a variety of applications 
* **WebSphere Adapter for Enterprise Content Management** - create integrated processes that include the exchange of information with a CMIS server
* **WebSphere Adapter for Flat Files** - enables the communication with an application through the exchange of text files 
* **WebSphere Adapter for FTP** - extends ESB with business document exchange via FTP server 
* **WebSphere Adapter for IBM i** - enables bi-directional connectivity and exchange of information with IBM i applications
* **WebSphere Adapter for JDBC** - allows exchange of objects with applications built on any database supported by JDBC Driver  
* **WebSphere Adapter for Lotus® Domino®** - create modules that can exchange information with the Lotus Domino server

#### WebSphere Application Adapters, which integrate to Enterprise Application Suites, include:  
* **WebSphere Adapter for JD Edwards EnterpriseOne** - provides bidirectional, real-time integration between JD Edwards Enterprise One and OneWorld Xe
* **WebSphere Adapter for Oracle E-Business Suite** - supports real-time, bi-directional integration to all Oracle applications modules and other systems 
* **WebSphere Adapter for PeopleSoft Enterprise** - provides bi-directional, real-time integration between PeopleSoft and other applications 
* **WebSphere Adapter for SAP Software** - provides bi-directional, multi-threaded, real-time integration between SAP and other applications, using SAP's all interfaces capabilities 
* **WebSphere Adapter for Siebel Business Applications** - provides comprehensive bi-directional, real-time integration between Siebel and order management, ERP, e-business, and legacy systems

 **WebSphere Adapter Toolkit** enables you to develop custom JCA adapter to meet unique business requirements. 

## Troubleshooting

#### Questions to ask
* Is this an inbound module or outbound module? 
* Did you make any change at EIS end? 
* Is your network stable? 
* How many adapters are deployed in this system? 
* Did you try the latest Ifix of the adapter?
* If you make some change at EIS end, did you rerun the EMD to regenerate the artifact? 
* How is your adapter deployed? embedded or stand alone ? 

#### Data Collection

<p>1.To trace the problems that are specific to WebSphere Adapter n BPM, add and enable this trace string on the application server. Base trace: </p>

```
*=info:com.ibm.j2ca.*=all
```
2.Dump event recovery table( EP_TableName ) as well. This table is used for event persistence for the inbound module. 

#### Trace Analysis

All of the following information and examples were gathered from working adapters. You can search key words and locate information in the trace files. If your trace files do not match the correct examples, then this can assist in troubleshooting. 

**Usage 1#:** Activation Specification of adapters Start 
**Key words:** <font color="blue">J2CA0523I</font>
**Comment :**  During BAW server starts up, the Activation Specification of adapters is activated. You should see the sample information during server starting up. 
**Sample:** 
```
[11/29/18 22:02:48:668 CST] 0000003c ActivationSpe I   J2CA0523I: The Message Endpoint for ActivationSpec myFlatFile/mytest/erp/invoiceFF/inbound/myadapter_InboundExport_AS (com.ibm.j2ca.flatfile.FlatFileActivationSpecWithXid) and MDB Application myFlatFileApp#myFlatFile/mytest/erp/invoiceFF/inbound/myadapter_InboundExport#myFlatFile is activated. 
```

**Usage 2#:** Activation Specification of adapters Stop
**Key words:** <font color="blue">J2CA0524I</font> 
**Comment :** During BAW shutdown, the Activation Specification of adapters is deactivated. You should see the sample information during server shut down. 
**Sample:** 
```
[11/29/18 23:23:32:558 CST] 0000003c ActivationSpe I   J2CA0524I: The Message Endpoint for ActivationSpec myFlatFile/mytest/erp/invoiceFF/inbound/myadapter_InboundExport_AS (com.ibm.j2ca.flatfile.FlatFileActivationSpecWithXid) and MDB Application myFlatFileApp#myFlatFilemytest/erp/invoiceFF/inbound/myadapter_InboundExport#myFlatFile is deactivated.  
```

**Usage 3#:** Adapter configuration information in trace file 
**Key words:** <font color="blue">traceActicationSpec</font>
**Sample:** 
```
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      2 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) Entering method. 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) Endpoint activation called.  Tracing ActivationSpec contents 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) BiDiContextEIS =  
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) boNamespace = http://www.ibm.com/xmlns/prod/websphere/j2ca/sap 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) deliveryType = ORDERED 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) pollPeriod = 2000 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) pollQuantity = 10 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) retryConnectionOnStartup = false 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) retryInterval = 60000 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) retryLimit = 0 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) stopPollingOnError = false 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) filterFutureEvents = false 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) assuredOnceDelivery = true 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      1 com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) failedEventRetryLimit = 5 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      < com.ibm.j2ca.base.WBIResourceAdapter traceActicationSpec(ActivationSpec) Exiting method. 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties BEGIN trace SAPActivationSpec properties.
```

**Usage 4#:** SAP adapters Connection information 
**Key words:** <font color="blue">SAPActivationSpec</font>
**Sample:** 
```
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties BEGIN trace SAPActivationSpec properties 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties Trace SAP logon configuration values***** 
[3/22/11 13:44:57:390 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties UserName=SOWMYAS 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties Password=****** 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties Language=EN (English) 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties Client=100 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties ApplicationServerHost=saperp05.svl.ibm.com 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties SystemNumber=00 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties GatewayHost=saperp05.svl.ibm.com 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties GatewayService=sapgw00 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties LogonGroup=PMR 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties SAPSystemID=DYL 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties MessageServerHost=saperp05.svl.ibm.com 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties RFCTraceOn=false 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties RFCProgramID=SARMASERVER 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties IgnoreIDocPacketErrors=false 
[3/22/11 13:44:57:406 IST] 00000011 SAPRA001      C com.ibm.j2ca.sap.util.SAPUtil traceLoginProperties END trace SAPActivationSpec properties.
```

**Usage 5#:** SAP Adapter ALE Listener starting information 
**Key words:** <font color="blue">startAleEventListener</font>
**Sample:** 
```
[3/22/11 13:45:01:031 IST] 00000011 SAPRA001      I com.ibm.j2ca.sap.inbound.SAPEventListenerManager startAleEventListener Starting ALE Event Listener - 0 - Connection Parameters - gwhost - 9.30.204.151 | gwserv - sapgw01 | progid - SAASERVER | unicode - 1 |.  
```

**Usage 6#:** Adapter deployment 
**Key words:** <font color="blue">hasEmbeddedRAR</font>
**Comment :** this information would be reported during deployment, and it indicates whether the adapter is embedded or standalone. 
**Sample:** 
```
[16/11/16 9:50:43:763 JST] 000018a4 J2CBinding 3 com.ibm.ws.sca.binding.j2c.deploy.J2CGenerateDataBindingTask !hasEmbeddedRAR - standalone
```

**Usage 7#:** Adapter inbound module polling 
**Key words:** <font color="blue">pollForEvents(int)</font>
**Sample:**
```
[6/22/17 15:35:55:607 EDT] 00000052 FFRA001       2 com.ibm.j2ca.extension.eventmanagement.internal.EventManager pollForEvents(int) Entering method.  
[6/22/17 15:35:55:641 EDT] 00000052 FFRA001       < com.ibm.j2ca.extension.eventmanagement.internal.EventManager pollForEvents(int) Exiting method
```

**Usage 8#:** Adapter outbound module sends request 
**Key words:** <font color="blue">com.ibm.j2ca.base.WBIConnectionFactory getConnection()</font>
. 
**Sample:**
```
[11/29/11 23:21:54:667 CST] 000000c4 SAPRAResource 2 com.ibm.j2ca.base.WBIConnectionFactory getConnection() Entering method. 
[11/29/11 23:21:54:667 CST] 000000c4 SAPRAResource 2 com.ibm.j2ca.base.WBIManagedConnectionFactory matchManagedConnections Entering method. 
[11/29/11 23:21:54:667 CST] 000000c4 SAPRAResource 3 com.ibm.j2ca.base.WBIManagedConnectionFactory getPasswordCredential Using the default PasswordCredential 
[11/29/11 23:21:54:705 CST] 000000c4 SAPRAResource 3 com.ibm.j2ca.base.WBIManagedConnectionFactory matchManagedConnections The matched ManagedConnection is valid 
[11/29/11 23:21:54:705 CST] 000000c4 SAPRAResource < com.ibm.j2ca.base.WBIManagedConnectionFactory matchManagedConnections Exiting method.. 
```

#### Reference

Collect troubleshooting data for WebSphere Adapter problems in IBM Business Process Manager 
http://www-01.ibm.com/support/docview.wss?uid=swg21240322 

Deploying and configuring WebSphere Adapters in a clustered environment 
https://www.ibm.com/developerworks/websphere/library/techarticles/0909_jain/0909_jain.html 

Performance tuning the WebSphere JDBC Adapter inbound service 
https://www.ibm.com/developerworks/websphere/library/techarticles/1106_lu/1106_lu.html
