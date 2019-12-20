Date:2019-11-12

## Overview 

In IBM Business Process Manager (BPM), you can work with documents on an Enterprise Content Management (ECM) server in a business process. The ECM server where the documents are stored can be any of the following: 
* BPM document store 
* An external ECM server 

The BPM document store is a Content Management Interoperability Services (CMIS) embedded document repository that uses FileNet to store documents in BPM version 8.5.5.0 and later. BPM also provides capability to directly interact with an external ECM server such as IBM FileNet P8 to store the documents. You can create, edit, and work with documents on the ECM server using documents coach views or content integration in a service. 

The document store functionality is provided by the below enterprise applications: 
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <td style="background-color:white">IBM BPM CMIS SingleCluster</th>
  </tr>
  <tr>
    <td style="background-color:white">IBM BPM DocStoreAdmin SingleCluster</td>
  </tr>
  <tr>
    <td style="background-color:white">IBM BPM DoccumentStore SingleCluster</td>
  </tr>
</table>

## Prerequisites 

The IBM FileNet P8 platform offers enterprise-level capability to access and manage all forms of content. Below topic introduces the architecture overview of FileNet P8 platform. 
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov083.htm 

You should add the Content Management (SYSCM) toolkit to your dependencies, if it has not been added as you will need access to the ECM types. To add this toolkit dependency, select + beside TOOLKITS. In the Add dependency menu, select the Content Management toolkit version you require. 

## Terms and Key Points  

### Terms  

IBM Filenet P8 - An IBM propduct and group of products for enterprise content management  
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8toc.doc/welcome_p8.htm

FileNet P8 architecture  
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov083.htm

ECM (Enterprise Content Management)  
A component of Filenet P8. Also a general term or concept to describe an enterprise content and document management system.  

FileNet P8 baseline architecture  
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov154.htm  
  
CPE (Content Platform Engine) - A component of Filenet P8, a Java EE applicaiton server that provides content services and process services  
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov108.htm  
  
ICN (IBM Content Navigator) - A web client for viewing IBM content repositories.  
https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov143.htm  

IBM Case Manager - An IBM product for creating a case management system. IBM Case Manager requires Filenet P8 content and process services.  
Case Manager includes Case Manager Client and Case Manager Builder  
  
IBM Case Manager architecture overview  
https://www.ibm.com/support/knowledgecenter/SSCTJ4_5.2.0/com.ibm.casemgmt.installing.doc/acmpi003.htm  

### Key Points  
  
* IBM FileNet P8, IBM Content Manager Enterprise Edition, and IBM Content Manager OnDemand are 3 examples of IBM repositories.  
* An example of a third-party reposiotry is Documentum Content Server.  
* ECM is a general concept and also the name for a component of Filenet P8.  
* CPE has "business processes" or "workflows," so BAW and Filenet P8 have some overlapping functionality and terminology.  
* BAW has internal and external options for CPE and ICN.  
* CP4A has more integration, with Case Manager supporting BAW process applications.  


## Component 

1.Documents Coach Views 
To store a document, use one of the document coach views. The type of documents that you want to work with determines which of the following coach views you can use: 
* BPM Documents: BPM Document List view 
* External ECM documents: Document Explorer view or ECM Document List view 

From these views, you can retrieve a set of documents from an ECM server, display a selected document, and store documents. The way that you configure the document coach view determines how the view behaves in the process.  

How to create, update and view documents from BPM document store 
https://www.youtube.com/watch?v=VQhh__rwwDk 

2.Content Integration 
The heritage human service and integration service supply Content Integration node to integrate with BPM document store or an external ECM server. If you are working with an external ECM system rather than BPM document store, you should add the Enterprise Content Management Server in Process App Settings before configuring content integration node in service. Refer to below topic on knowledge center for details of content integration configuration. 

IBM Business Process Manager 8.6.0 - Integrating with an ECM system or an IBM BPM store 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/t_ecmbldintegrationsrv.html 

3.ACCE Console 
Use the ACCE Console (IBM Administration Console for Content Platform Engine) to administer objects, such as folders and documents, in the embedded document store that is available in BPM. 
<a style="pointer-events: none;" href="https://myserver.example.com:9443/acce">https://myserver.example.com:9443/acce</a>

![1](https://media.github.ibm.com/user/228551/files/05b3c480-053e-11ea-9c18-8c47ca45bd8f)

4.EmbeddedECMTechnicalUser 
The EmbeddedECMTechnicalUser role defaults to the deployment environment administrator, which is used by BPM to access ECM with administrator privileges. Check the authentication alias assigned to the EmbeddedECMTechnicalUser role in Servers > Deployment Environments > myDEname > Authentication aliases. Note the alias name that is used for the EmbeddedECMTechnicalUser role. 

![2](https://media.github.ibm.com/user/228551/files/22e89300-053e-11ea-8350-88eefb74bff5)

5.Content Engine Startup Context (Ping Page) 
You can verify that the embedded Content Platform Engine deployment by accessing the Content Platform Engine Startup Context (Ping Page) - <a style="pointer-events: none;" href="http://server:port/FileNet/Engine">http://server:port/FileNet/Engine</a>. For example: <a style="pointer-events: none;" href="http://localhost:9080/FileNet/Engine">http://localhost:9080/FileNet/Engine</a>. 

![3](https://media.github.ibm.com/user/228551/files/4d3a5080-053e-11ea-90cc-f72680b29da4)

To access the page, you should map the deployment environment administrator to the IBM_BPM_DocumentStore application in Integrated Solutions Console. 

![4](https://media.github.ibm.com/user/228551/files/6cd17900-053e-11ea-83a8-9dfc82cd2d4d)

## Troubleshooting 

#### Data Collection

<p>1.To trace the problems that are specific to ECM/document store issues, below trace string should be enabled on application server: </p>

```
*=info:WLE.*=all:com.ibm.bpm.embeddedecm.*=all:com.ibm.bpm.integration.*=all:com.ibm.bpm.auth.*=all:WAS.clientinfopluslogging=all:com.lombardisoftware.component.ecmconnector.*=all 
```
2.Collect below data after reproducing the issue. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)The entire server logs directory from the BPM node profile(s): 
```
"/$install_root/profiles/$bpm_node/logs/" 
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)For document store issue, collect the p8_server_error.log and p8_server_trace.log files in the FileNet directory from the BPM node profiles(s): 
```
"/$install_root/profiles/$bpm_node/FileNet/$bpm_server" 
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)BPM configuration file TeamWorksConfiguration.running.xml: 
```
"profiles/$bpm_node/config/cells/$cell_name/nodes/$node_name/servers/$server_name/process-center(server)" 
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4)The .twx file for the process application as well as the service name in question. 

3.Collect the outcome of the getDocumentStoreStatus command to obtain the status of the BPM document store and the IBM_BPM_DocumentStore application. Example: AdminTask.getDocumentStoreStatus('[-deName myDeName]’) 
Reference link: 

IBM Business Process Manager 8.6.0 - getDocumentStoreStatus command 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_getdocstorestatus.html 

#### Data Analysis 

The following trace snippets present the normal behavior of document store operations. Use the key word to review traces so that you can understand in which procedure the case error happens. 

**1.Key words:**  
<font color="blue">ECMConnection 
getEmbeddedECMConnection</font>

Usage: 
Establish connection with ECM server. 

Sample:  
```
[9/15/19 20:20:33:233 IST] 0001fe21 ECMConnection > com.ibm.bpm.integration.runtime.ECMConnection getEmbeddedECMConnection ENTRY 
[9/15/19 20:20:33:233 IST] 0001fe21 ECMConnection < com.ibm.bpm.integration.runtime.ECMConnection getEmbeddedECMConnection RETURN com.ibm.bpm.integration.runtime.ECMConnection@d8164bed  
```

**2.Key words:**
<font color="blue">DocumentStore 
mapECMPropertiesToLocalDocument</font>

Usage: 
Read ECM properties of document. 

Sample:  
```
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore > com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument ENTRY com.lombardisoftware.data.Document@dc3bc820 [PropertyImpl [objectTypeId=IBM_BPM_Document_ProcessInstanceId, values=[-1]], PropertyImpl [objectTypeId=IBM_BPM_Document_FileNameURL, values=[TextFile_1.log]], PropertyImpl [objectTypeId=IBM_BPM_Document_FileType, values=[FILE]], PropertyImpl [objectTypeId=IBM_BPM_Document_UserId, values=[9]], PropertyImpl [objectTypeId=IBM_BPM_Document_HideInPortal, values=[false]]] 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore 3 com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument Setting bpdInstanceId to -1 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore 3 com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument Setting fileName to TextFile_1.log 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore 3 com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument Setting fileType to FILE 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore 3 com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument Setting author to [UserInfo id=User.9 fullname=null username=null userState=null data=null lastLoginTime=null] 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore 3 com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument Setting hideInPortal to false 
[9/15/19 20:20:33:248 IST] 0001fe21 DocumentStore < com.ibm.bpm.integration.runtime.DocumentStoreUtils mapECMPropertiesToLocalDocument RETURN 
```

**3.Key word:** 
<font color="blue">BPMDocumentUt</font>

Usage: 
Indicates the document operation and the corresponding document ID in ECM server. 

Sample:   
```
[9/15/19 20:20:33:264 IST] 0001fe21 BPMDocumentUt > com.ibm.bpm.embeddedecm.documents.BPMDocumentUtils createDocument ENTRY 5 5 TestFile_1.log 9 -1 false null TextFile_1.log FILE {} true java.io.ByteArrayInputStream@76a5fd3e null TextFile_1.log false 
[9/15/19 20:20:33:530 IST] 0001fe21 BPMDocumentUt < com.ibm.bpm.embeddedecm.documents.BPMDocumentUtils createDocument RETURN CreateDocumentResult(id=idd_6067356D-0000-CE18-A9DB-CACB613E4437, versionSeriesId=idv_6067356D-0000-C313-9C12-3B9696B4A451, version=1) 
```

**4.Key word:** 
<font color="blue">ECMIntegratio 
getDocument</font>

Usage: 
Indicate the Get Document operation implementation procedure in Content Integration node. 

Sample:   
```
[9/15/19 21:16:36:020 IST] 00025136 ECMIntegratio > com.ibm.bpm.integration.runtime.ECMIntegrationServices getDocument ENTRY ExecutionStack(ExecutionJob(worker(com.lombardisoftware.component.ecmconnector.worker.ECMConnectorWorker@3d3138bc), processItemId = ProcessItem.b678352b-a338-4fc8-a460-95a0add79984, processTiming = N, saveExecutionContextBehaviour = EXECUTION_CONTEXT_DO_NOT_SAVE)), SymbolTable(SymbolTable(...)), sharedData = null EMBEDDED_ECM_SERVER {6067356D-0000-CE18-A9DB-CACB613E4437} 
[9/15/19 21:16:36:098 IST] 00025136 ECMIntegratio < com.ibm.bpm.integration.runtime.ECMIntegrationServices getDocument RETURN DocumentImpl [objectId=idd_6067356D-0000-CE18-A9DB-CACB613E4437, objectTypeId=IBM_BPM_Document, name=TestFile_1.log, checkinComment=null, contentFileName=TextFile_1.log, contentLength=5577, contentMimeType=application/octet-stream, createdBy=deadmin,… 
```

#### Reference

1.Collect troubleshooting data for BPM document store or ECM problems in IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW) 
https://www.ibm.com/support/pages/collect-troubleshooting-data-bpm-document-store-or-ecm-problems-ibm-business-process-manager-bpm-and-ibm-business-automation-workflow-baw 

2.Troubleshooting interactions with Enterprise Content Management systems 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/r_ecmtrouble.html 

3.Limitations in working with IBM BPM documents 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/tbpmdoclimits.html 

4.Limitations in administering the IBM BPM document store 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/tbpmconfiglimits.html 

5.Why am I unable to connect to the IBM BPM Document Store and my Event Manager is not starting correctly? 
https://developer.ibm.com/answers/questions/202074/why-is-am-i-unable-to-connect-to-the-ibm-bpm-docum/ 

6.How to recover if my BPM Event Manager won't start because Embedded ECM initialization fails? 
https://developer.ibm.com/answers/questions/260551/how-to-recover-if-my-bpm-event-manager-wont-start.html?sort=votes 

 
 

 

