
Owner: Jin Shang
Date: 2019-09-10

## Overview
The mediation module is a new type of SCA component that can process or mediate service interactions. Inside a mediation module there can be one mediation flow component. Mediation flows contain the high-level mediation logic. Mediation flows consist of a sequence of processing steps for
   * **Routing** communications between services
   * **Converting** between different transport protocols
   * **Transforming** message formats between service requestor and provider
   * **Handling** business events from disparate sources

Mediation modules are deployed to Process Server as EAR format.
![image](https://media.github.ibm.com/user/172872/files/280f5180-d3d8-11e9-80ef-728569971169)

## Prerequisites
You should have a basic understanding of below technology.

1.Service Oriented Architecture
Service Oriented Architecture (SOA) is an approach to defining integration architectures based on the concept of a service. Applications collaborate by invoking each other services and services can be composed into larger sequences to implement business processes.

2.Service Component Architecture
Service Component Architecture (SCA) was developed to simplify the integration between business applications and the development of new services. SOA is an abstract way to interpret the services and his correlations, SCA is defined as the implementation of the SOA architecture. Its standards allow the creation of services and the integration between them.
![image](https://media.github.ibm.com/user/172872/files/5e4cd100-d3d8-11e9-8542-a56a40b33d0c)

3.Service Module
Service Module is the SCA unit of packaging and deployment.  Service Modules contain one or more Service Components which contain an implementation, and interfaces.
![image](https://media.github.ibm.com/user/172872/files/6dcc1a00-d3d8-11e9-977a-691c6a9f42c4)

4.Bindings
Bindings identify a specific type of invocation for a service consumer or provider. Bindings can be applied to mediation module imports or exports. Exports let a mediation module offer a service to consumers. Imports let a mediation module access external services (services that are outside the SCA module) in a transparent manner. For more details about Bindings, refer to below topic on BAW knowledge center.
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/help_sca/index.html


## Component
#### Technical Concepts
1.Mediation Primitives
Mediation Primitives are the smallest building blocks in mediation flow. They are wired and configured inside mediation flows. They let you change the format, content, or target of service requests; log messages; do database lookups; and so forth.

2.Service Message Objects
Messages can come from a variety of sources, so the payload has to be able to carry a number of different types of messages. Mediation primitives need to be able to operate on these messages, and service message objects (SMOs) represents the common representation that is needed.

#### Technical Articles
1.Getting Started with WebSphere Enterprise Service Bus
http://www.redbooks.ibm.com/abstracts/sg247212.html

2.Strategies for designing error handling in web service mediations
https://www.ibm.com/developerworks/websphere/library/techarticles/1108_toth/1108_toth.html

3.List of mediation primitives
https://www.ibm.com/developerworks/websphere/library/techarticles/1108_toth/1108_toth.html


## Troubleshooting
#### Data Collection

1.To trace the problems that are specific to the Mediation Flow Component and its primitives, below trace string should be enabled on application server:
```
*=info:com.ibm.ws.sibx.*=all:com.ibm.wsspi.sibx.*=all:com.ibm.websphere.sibx.*=all:com.ibm.ws.sib.processor.utils.UserTrace=all:com.ibm.wbiserver.transform.*=all:com.ibm.sr.client.*=all
```

2.Enable Runtime trace dynamically:
- Logon admin console. Under Troubleshooting > Log and Trace, pick the server where you want to change the settings.
- Click Change Log Detail Levels.
- Select the Runtime tab to dynamically set the tracing and enter the new trace string.
- Click OK to save the changes.
- Reproduce the issue and note the time the symptoms occurred.
- Insure the trace covers the time period noted in step four above.
- Zip up the profile's logs directory.
- Send us the zip of the logs directory noting any errors, exceptions, or symptoms.

3.Customer should also export their Project Interchange (PI) file. The associated PI file can be exported from IBM Integration Designer (IID) and is very useful to the support team. The file not only describes the application configuration, but it also permits the opportunity for the support team to recreate the problem. PI files have an extension of .zip, but do not need to be unarchived to import into IID.

To create a PI file, from within IID, complete the following steps:
* Select File > Export.
* Select Project Interchange and select the modules which are relevant to your project.
* Choose a file name for the Project Interchange file, and fill it in, in the field at the bottom.

After receiving the PI file, support engineer should import it into local workspace within IID:
* Select File > Import.
* Select Project Interchange and select the PI file.

#### Recreating Problem
After importing PI file in IID, using IID testing tools (Test Component):
1.First insure the test BPM server is started, and the module to test is deployed.
2.Bring up the test facility :

- Right click on the component to test within the Assembly Diagram
- Select “Test Component”

3.Enter test value(s) provided by the client into the corresponding field(s).
4.Click the continue button ![image](https://media.github.ibm.com/user/172872/files/ee8d1500-d3dc-11e9-8a86-4ba2c9d1ffbc) to start the test execution.

#### Trace Analyzing
1.All mediation codes are contained within ".**sibx**."
```
Example Exception #1:
com.ibm.ws.sca.uow.UOWRolledBackException: caused by: 
com.ibm.wsspi.sibx.mediation.flow.MediationRuntimeException: com.ibm.ws.sibx.scax.mediation.component.FlowBuildException: CWSXM1006E: Error whilst setting properties of mediation primitive MessageFilter1. In mediation component SampleModule in module SampleModule
...
Caused by: com.ibm.wsspi.sibx.mediation.flow.MediationRuntimeException: com.ibm.ws.sibx.scax.mediation.component.FlowBuildException: CWSXM1006E: Error whilst setting properties of mediation primitive MessageFilter1. In mediation component SampleModule in module SampleModule
```

2.Find the entry into the mediation flow. Example:
```
[8/28/19 20:52:39:840 IST] 000001a6 SIBXTraceUtil 1 
com.ibm.ws.sibx.scax.mediation.engine.utils.trace.SIBXTraceUtil startExecuteFlow 
StartExecuteFlow
Flow metadata   :
    Module      : SampleModule
    Port type   : http://SampleModule/SimpleInterface}SimpleInterface
    Operation   : operation1
    Interaction : Request
    Component   : com.ibm.ws.sca.internal.scdl.impl.ManagedComponentImpl@5d3bee83 (description: null) (displayName: SampleModule) (name: SampleModule)
Node name        : SimpleInterface_operation1_Input
Node display name: operation1 : SimpleInterface
Node type (class): null
Node properties  : null
Terminal name    : out [Display name : out]
Terminal type    : Output
Message          : ServiceMessageObject: ServiceMessageObject@e62af8cb (context=ContextType@3ba4ffb7, headers=HeadersType@2e17b83a, body=operation1RequestMsg@85bed9e3, ) 
```

3.Check the data value in SMO body. Example:
```
<p:smo xmlns:p="http://www.ibm.com/websphere/sibx/smo/v6.0.1">
  <context/>
  <headers>
    <SMOHeader>
      <MessageUUID>D8D23CEF-016C-4000-E000-10F40973C730</MessageUUID>
      <Version>
        <Version>7</Version>
        <Release>0</Release>
        <Modification>0</Modification>
      </Version>
      <MessageType>Request</MessageType>
    </SMOHeader>
  </headers>
  <body xmlns:ns0="wsdl.http://SampleModule/SimpleInterface" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:me="wsdl.http://SampleModule/SimpleInterface" xsi:type="me:operation1RequestMsg">
    <p:operation1 xmlns:p="http://SampleModule/SimpleInterface" xmlns:xci0="http://SampleModule/SimpleInterface">
      <input1>this is a test</input1>
    </p:operation1>
  </body>
</p:smo>
```

4.Trace provides detailed information for each step in mediation flow. The ‘Terminal type’ of the node tells the step in mediation flow. For example, below trace tells us the SMO data in request flow before input node Mapping which is an XSLT primitive.
```
ProcessMessage
Flow metadata   :
    Module      : SampleModule
    Port type   : http://SampleModule/SimpleInterface}SimpleInterface
    Operation   : operation1
    Interaction : Request
    Component   : com.ibm.ws.sca.internal.scdl.impl.ManagedComponentImpl@5d3bee83 (description: null) (displayName: SampleModule) (name: SampleModule)
Node name        : Mapping
Node display name: Mapping
Node type (class): com.ibm.ws.sibx.mediation.primitives.xslt.XSLTMediation
Node properties  : {sibxMayChangeMessage=true, sibxOnlyFireAtEnd=true, validateInput=false, sibxNoChangeOnFailure=true, SMOVersion=SMO61, associatedXSL=, implementationClass=com.ibm.ws.sibx.mediation.primitives.xslt.XSLTMediation, XMXMap=xslt/Mapping_req_1.map, root=/body, XSLTransform=xslt/Mapping_req_1.xsl}
Terminal name    : in [Display name : in]
Terminal type    : Input
Message          : ServiceMessageObject: ServiceMessageObject@e62af8cb (context=ContextType@3ba4ffb7, headers=HeadersType@2e17b83a, body=operation1RequestMsg@85bed9e3, ) 
```

And below trace shows the SMO data after the node named with Mapping.
```
ProcessMessage
Flow metadata   :
    Module      : SampleModule
    Port type   : http://SampleModule/SimpleInterface}SimpleInterface
    Operation   : operation1
    Interaction : Request
    Component   : com.ibm.ws.sca.internal.scdl.impl.ManagedComponentImpl@5d3bee83 (description: null) (displayName: SampleModule) (name: SampleModule)
Node name        : Mapping
Node display name: Mapping
Node type (class): com.ibm.ws.sibx.mediation.primitives.xslt.XSLTMediation
Node properties  : {sibxMayChangeMessage=true, sibxOnlyFireAtEnd=true, validateInput=false, sibxNoChangeOnFailure=true, SMOVersion=SMO61, associatedXSL=, implementationClass=com.ibm.ws.sibx.mediation.primitives.xslt.XSLTMediation, XMXMap=xslt/Mapping_req_1.map, root=/body, XSLTransform=xslt/Mapping_req_1.xsl}
Terminal name    : out [Display name : out]
Terminal type  : Output
Message         : ServiceMessageObject: ServiceMessageObject@e62af8cb (context=ContextType@3ba4ffb7, headers=HeadersType@2e17b83a, body=operation1RequestMsg@15c9de5, ) 
```

Some of the key elements given for each step in the flow include:
- Module:  Name of mediation module.
- Operation:  Name of operation being performed
- Interaction:  Either Request or Response
- Node Name:  Name of primitive (i.e. Custom Mediation1)
- Node Display Name:  Label given to node by client (i.e. RemoveTags)
- Terminal Name:   Name of terminal given by client 
- Terminal Type:   Type of terminal (Input, Output, etc)
- Message:  Displays current output of SMO.

Step through trace.log, starting at the ‘StartExecuteFlow’, following each primitive In and Out until the exception or the end of mediation flow.
```
StopExecuteFlow
Flow metadata   :
    Module      : SampleModule
    Port type   : http://SampleModule/SimpleInterface}SimpleInterface
    Operation   : operation1
    Interaction : Request
    Component   : com.ibm.ws.sca.internal.scdl.impl.ManagedComponentImpl@5d3bee83 (description: null) (displayName: SampleModule) (name: SampleModule)
```

