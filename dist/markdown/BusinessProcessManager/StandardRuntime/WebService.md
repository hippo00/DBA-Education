Owner: Jin Shang
Date: 2019-09-10

## Overview

Integration services enable outbound integration with web services so that processes can retrieve and update data that is stored on an external system. Web service component provides a way for an external system or application to call into BPM. You can use a web service binding in a SCA module to invoke existing web services and expose functionality within the module as a web service. This topic will talk about these Web Services related components in BPM.

## Prerequisites

Below tutorial will be useful for learning the basics of web services. This is an elementary tutorial that introduces the concepts of web services.

Web Services Tutorial
http://www.tutorialspoint.com/webservices/

## Component

#### Outbound Processing

Integration services enable outbound integration with web services so that processes can retrieve and update data that is stored on an external system. You can use an **External Service** or a **SOAP Connector** or a **Web Service Integration** step to enable the access to the web service.

1.External Service
You can create an external service by discovering a web service that is hosted on an external system, and use this external service in a service flow to invoke the web service. Refer to below topic on knowledge center for detailed introduction.
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/twebinvoke.html

2.SOAP Connector
SOAP connector is an embedded integration service, Call WebService via SOAP, is provided in the System Data Toolkit. This connector abstracts the complexity of the web service implementation and requires only minimal configuration. Refer to below topic on knowledge center for detailed introduction.
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/t_soapconncall.html

Below article including many screenshots to introduce how to the SOAP connector to call a web service.
https://www.ibm.com/support/pages/using-soap-connector-call-web-service-websphere-lombardi-edition

3.Web Service Integration
Use a Web Service Integration component to invoke a web service that is hosted externally. You can configure the WSDL properties, SOAP header information, authentication, signature and encryption properties for the web service integration. Refer to below topic on knowledge center for detailed introduction.
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/configuring_web_service_integration_step.html

#### Inbound Processing

**Web Service** component provides a way for an external system or application to call into BPM. You can create a web service component in BPM that you expose to exterior systems so that they can access functionality in an IBM BPM application. The web service component invokes an operation that calls a particular BPM service or service flow. Refer to below topic on knowledge center for detailed introduction.
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/creating_exposed_services.html

#### SCA Component

You can use a **Web Service Binding** in a SCA module to invoke existing web services and expose functionality within the module as a web service. A web service binding provides a specification for transmitting messages to and from a web service. You can use a web service import binding to call an external web service to an import. You can use a web service export binding to provide a service to external clients as a web service. Refer to below topic on knowledge center for detailed introduction.
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wid.integ.doc/access/topics/cwebbind.html

## Troubleshooting

#### Questions to ask

- Is the web service call in question an inbound (a client sending a request to BPM) or an outbound (BPM acting as a client consuming an external web service) call?
- Is there any Web Services security involved (SSL, WS-Security, etc)?
- Was this working in any prior versions of the product (or legacy products)? If so, which version/product was in working in?
- Was it ever working on this version itself?  If so, what has changed (could be backed web service, Business Object structure, authentication requirement, etc)?

#### Verifying Webservice

Add **?WSDL** to the end of web service URL. Paste the URL into a browser window and you should see something like the following screen shot.
![image](https://media.github.ibm.com/user/172872/files/b0742a80-d56f-11e9-81f2-becd7a8ba8ff)

#### Data Collection

1.To trace the problems that are specific to External Service/Web Service/SOAP Connector/Web Service Integration in BPM, below trace string should be enabled on application server:
1)Base trace:
*=info:WLE.*=all:com.ibm.ws.webservices.*=all:org.apache.*=all:com.ibm.ws.websvcs.*=all:com.ibm.ws.metadata.*=all
2)If you see IOException related to Webservice requests:
*=info:WLE.*=all:com.ibm.ws.webservices.*=all:org.apache.*=all:com.ibm.ws.websvcs.*=all:com.ibm.ws.metadata.*=all:HTTPChannel=all:GenericBNF=all:TCPChannel=all
3)If it’s performance related issue or it’s in a production environment, you can use this slighter trace setting:
*=info:WLE.wle_outbnd_ws=all:com.ibm.bpm.ws.jaxws.*=all

2.To trace the problems that are specific to Web Service Binding in BPM, below trace string should be enabled on application server:
*=info:SCA.*=all:com.ibm.ws.webservices.*=all:org.apache.*=all:com.ibm.ws.websvcs.*=all:com.ibm.ws.metadata.*=all

3.For Outbound web service issue, the following materials are required.
1)The WSDL of the actual Web Service (including any included/imported .xsd files)
2)A sample response from the Web Service
3)The project (see below point 5 for details)
4)Sample request SOAP message from BPM
5)TeamWorksConfiguration.running.xml file from profile configuration directory

4.For Inbound web service issue, the following materials are required.
1)The SOAP request from the web service client
2)The project (see below point 5 for details)
3)A sample response SOAP message from BPM (if relevant to problem description)
4)TeamWorksConfiguration.running.xml file from profile configuration directory

5.Project file
1)For issue of External Service/Web Service/SOAP Connector/Web Service Integration, request the .twx file for the process application as well as the service name in question.
2)For issue of Web Service Binding, request the Project Interchange file as well as which import or export component in the project is in question.

#### Recreating Problem

1.Download SoapUI from https://www.soapui.org/. Install the tool using the default configuration.

2.For outbound calls:
1)Create new SOAP project and specify WSDL URL in SoapUI.
![image](https://media.github.ibm.com/user/172872/files/09dc5980-d570-11e9-8506-87c2cf7d2283)
2)Generate SOAP mock service. This emulates the customer’s web service so we don’t need direct access to it.
![image](https://media.github.ibm.com/user/172872/files/1660b200-d570-11e9-9174-54243e423ad4)
3)In web service component in process application, modify the host and port information in WSDL URL to match the mock service. Test scenario to invoke the web service. This is a way to see what BPM actually sends in its request (SoapUI will print out requests received, including HTTP Headers if desired).

3.For inbound calls:
1)Create new SOAP project and specify WSDL URL in SoapUI.
2)Create request message to simulate the customer’s use case.
![image](https://media.github.ibm.com/user/172872/files/32645380-d570-11e9-9c8a-4d548d344db5)

4.For WSDL discover:
Obtain WSDL and all imported XSD files from customer. Specify to the local WSDL file in WSDL discover wizard.
![image](https://media.github.ibm.com/user/172872/files/40b26f80-d570-11e9-8f2d-6b9906da87d1)

#### Trace Analyzing

1.Key words:
**wle_outbnd_ws**
**request =**
**response =** 

Usage:
Print out the request and response SOAP messages invoked by the outbound web service components.

Sample: 
```
[9/5/19 09:30:42:558 GMT] 00008cb0 wle_outbnd_ws 1   request = <?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><ns0:iQueueUpdateData xmlns:ns0="http://hsbc.com/glt/bpm/services/webservice/iqueueupdatedata"><ns0:payload>&lt;cwtNotificationRequest xmlns='http://hsbc.uk/hbeu/e2e/sil/data/cwt'&gt;&#xD; 
&lt;dealId&gt;[Field3]&lt;/dealId&gt;&#xD; 
&lt;correlationId&gt;[Field2]&lt;/correlationId&gt;&#xD; 
&lt;router&gt;DATA_UPDATE&lt;/router&gt;&#xD; 
&lt;additionalFields&gt;&#xD; 
…

[9/5/19 09:30:42:875 GMT] 00008cb0 wle_outbnd_ws 1   response = <?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"><soapenv:Body><ns5:iQueueUpdateDataResponse xmlns:ns5="http://hsbc.com/glt/bpm/services/webservice/iqueueupdatedata"><ns5:resultCode>SUCCESS</ns5:resultCode></ns5:iQueueUpdateDataResponse></soapenv:Body></soapenv:Envelope> 

```

2.Key words:
**setInputParameters**
**getOutputParameters**

Usage:
Methods to set and get SOAP messages before and after the web service invocation.

Sample: 
```

[9/5/19 14:02:53:645 GMT] 00000793 wle_outbnd_ws 1 com.ibm.bpm.ws.jaxws.connector.SOAPConnector setInputParameters setInputParameters(), parameterValues = [{http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}retrieveNewApp=false, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}countryCode=HAS, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}snapshotVersion=HASE.Cards.V.0.0.0.72, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}wsdlVersion=wsdl002, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}entityId=HAS, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}entityCode=HAS, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}processStepInfo=null, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}requesterInfo=TWObject[(Active: Y), (Type: 1), (TWClassID: TWClass.848854a5-b044-4fb7-86a2-ac10bad5a84b), (Property names: ID, name), (MetaData: dirty=true, shared=false, key=null, version=null, rootVersionContextID=2064.cebe74fe-ef69-4e12-8c8d-6147a5fb95ea, className=WebUserInfo)], {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}applicationId=201607846081, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}type=0]

[9/5/19 14:02:54:292 GMT] 00000793 wle_outbnd_ws 1 com.ibm.bpm.ws.jaxws.connector.SOAPConnector getOutputParameters getOutputParameters(), outputParameterValues = {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}returnCode=SUCCESS, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}workItemId=2563, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}instanceId=41498, {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}requesterInfo=TWObject[(Active: Y), (Type: 1), (TWClassID: TWClass.848854a5-b044-4fb7-86a2-ac10bad5a84b), (Property names: ID, name, groups), (MetaData: dirty=true, shared=false, key=null, version=null, rootVersionContextID=2064.cebe74fe-ef69-4e12-8c8d-6147a5fb95ea, className=WebUserInfo)], {http://www.hsbc.com/gltc/bpm/rcs/integration/web/services/optimization/web/version/v100}applicationData=TWObject[(Active: Y), (Type: 1), (TWClassID: TWClass.ac644f76-4913-40df-adf8-4a535e7ddded), (Property names: applicationId, workItemId, currentStatus, smg3CallForSCL, requestedLoanAmount, recommendedLoanAmount, captureDateStr, annualInterestRate, aapsUpdated, mortgageUpdated, maxLTVProject, maxLTVCampaign, avaliableExposureProject, avaliableExposureCampaign, specialIndicator, documents, requiredDocuments, customers, scoringResults, verficationTasks, groupTotalApprovedWIP, totalUnapprovedWIPAppl, textAttrs, accountInfos, cardInfos, appCIFException, appHITException, appFraudException, appExceptionSummary, customerMiscellaneousReference, remarks, uuid, entityId), (MetaData: dirty=true, shared=false, key=null, version=null, rootVersionContextID=2064.cebe74fe-ef69-4e12-8c8d-6147a5fb95ea, className=WebApplicationData)]}

```

3.Key word:
**found cached WSAddress**

Usage:
Indicates whether WS address can be found in cache or need to read from WSDL file again, usually this is related to cache setting and performance. The WSDL is downloaded and cached in BPM on the first invocation, so it will be slower the first time. The cache can be adjusted in the configuration files to hold more or less cached WSDL files, but the more in the cache, the more memory will be consumed by the cache.

Sample:  
```

[9/5/19 09:30:42:584 GMT] 00008cb0 WSAddress     >  WSAddress.getAddress() with targetURL https://test-bpmcl:443/silws1/ws1/iqAdapter.wsdl Entry 
[9/5/19 09:30:42:584 GMT] 00008cb0 WSAddress     3   cacheKey = https://test-bpmcl:443/silws1/ws1/iqAdapter.wsdl 
[9/5/19 09:30:42:584 GMT] 00008cb0 WSAddress     3   Using key https://test-bpmcl:443/silws1/ws1/iqAdapter.wsdl, found cached WSAddress https://test-bpmcl:443/silws1/ws1/iqAdapter.wsdl, -644025203 
[9/5/19 09:30:42:584 GMT] 00008cb0 WSAddress     <  WSAddress.getAddress() wsAddr : https://test-bpmcl:443/silws1/ws1/iqAdapter.wsdl Exit 

```

4.Key word:
**SocketChannel**

Usage:
Indicates the status of socket channel connection.

Sample:  
```

[9/5/19 09:30:18:754 GMT] 0000000d WorkQueueMana 1   SocketChannel connect failed, local: /128.161.56.13:60994 remote: null
[9/5/19 09:30:18:754 GMT] 0000000d WorkQueueMana 3   SocketChannel.finishConnect Exception Caught: java.net.ConnectException: Connection refused
[9/5/19 09:30:40:336 GMT] 00008c37 NBAcceptChann 1   SocketChannel accepted, local: /128.161.56.13:9081 remote: /128.161.56.13:59229
[9/5/19 09:30:42:590 GMT] 00008cb0 WorkQueueMana 1   SocketChannel connected, local: /128.161.56.13:59456 remote: test-bpmcl/128.162.104.57:443

```

5.Key words:
**TCPBaseReques**
**Wrote**
**Read**

Usage:
Indicates TCP communication read and wrote bytes.

Sample:  
```

[9/5/19 09:30:42:591 GMT] 00008cb0 TCPBaseReques 1   Wrote 90(90) bytes, 90 requested on local: gbl12070.systems.uk.hsbc/128.161.56.13:59456 remote: test-bpmcl/128.162.104.57:443 
[9/5/19 09:30:42:591 GMT] 00008cb0 TCPBaseReques 3   write complete, at least minimum amount of data written 
[9/5/19 09:30:42:593 GMT] 00008cb0 TCPBaseReques 1   Read 86(86) bytes, 1 requested on local: gbl12070.systems.uk.hsbc/128.161.56.13:59456 remote: test-bpmcl/128.162.104.57:443 
[9/5/19 09:30:42:593 GMT] 00008cb0 TCPBaseReques 3   read complete, at least minimum amount of data read

```

#### Reference

Collect troubleshooting data for web services problems in IBM Business Process Manager
https://www.ibm.com/support/pages/collect-troubleshooting-data-web-services-problems-ibm-business-process-manager

Troubleshooting web services and outbound web service integrations
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/web_service_security_I.html

Troubleshooting XML schema messages for web service integrations
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/troubleshooting_xml4webservice.html

