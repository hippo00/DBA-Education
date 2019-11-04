2019-11-1

## Overview – Server Connections
In IBM Business Process Manager, there are several types of connections. Each connection type has its own specific behavior and settings.  This chapter will cover the basic behaviors behind these connections and how we could do to handle the issues with them. The main connection types are: 
* Process Server to Process Center
* Process Center to Process Server
* Process Designer to Process Center (Deprecated)
* Process Designer to online Process Server (Deprecated)
* Integration Designer to Process Center
* Integration Designer to the unit test environment

## Prerequisites (Optional)
It’s recommended for readers to have a basic grasp of BPM/WAS topology which contains PC, PS, PD, and IID.  Also, it would be helpful to understand the chapter ‘Endpoint Configuration’ to have better understanding of the scenarios mentioned at this article.   
** Most of the information covered at this chapter is applied for BPM 8.6.0 and later versions to BAW 19.0.0.2. 

## Component
#### 1.Connections Diagram
<img width="688" alt="1 copy" src="https://media.github.ibm.com/user/228551/files/e77bd800-fca4-11e9-8264-b7b7ad312cac">

#### 2.Connections between Process Server and Process Center

* **Behaviors**
<img width="847" alt="2 copy" src="https://media.github.ibm.com/user/228551/files/2742bf80-fca5-11e9-9c99-83ca56358621">
* **Settings**

**Key Tasks:**
* Update the host and port name of the Process Center connection details.
* Change Process Server from an offline server to a Process Center connected server (online server), and vice-versa.
* Change the Process Center connection URL. 
* Modify the security role mappings for ProcessCenterUser and BPMAuthor if necessary. 
* Configure SSL communication 
* Enable HTTP access temporarily (Not Recommended) 

** HEARTBEAT_DESIGNATED_DEPLOYMENT_ENDPOINT (Default value is INTERNAL_CLIENT):  Configures the URL that is used by Process Center to deploy applications to Process Server. The endpoint must resolve to the teamworks.war web module in the IBM_BPM_Teamworks application. 

**Procedure:**
Using wsadmin commands to customize the Workflow Server settings used to connect to Workflow Center 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/tconnect_to_pctr.html  

Using the administrative console to customize the Workflow Server used to connect to Workflow Center 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/tconnect_to_pctr2.html 

#### 3.Connections from Process Designer to Process Center (deprecated) 
* **Behaviors**
<img width="809" alt="3 copy" src="https://media.github.ibm.com/user/228551/files/3de91680-fca5-11e9-84ea-d5e6a2a71eff">
* **Settings**

Components of desktop Process Designer use multiple endpoints in communicating with Process Center. The initial connection is defined in the Process Designer eclipse.ini file as the value of the com.ibm.bpm.processcenter.url system property. The property value is set during Process Designer configuration based on the value of the <u>EXTERNAL endpoint for bpmrepo-services.war that is configured on the Process Center.</u>  

If the endpoint configuration of the bpmrepo-services.war file has changed, desktop Process Designer must be downloaded from the Process Center using a browser that is running on the machine where the Process Designer will be installed. Installing an interim fix also requires **Process Designer to be downloaded and installed again**. Developers should never update the connection information in the Process Designer eclipse.ini file. 

Problems with desktop Process Designer 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.wle.editor.doc/topics/starting_ae.html  
** As the HTTPS communication is used by default here, the default port for it should be WC_defaulthost_secure, please noted it is the port of cluster member (server) rather than dmgr. 

#### 4.Connections from Process Designer to online Process Server (deprecated)
* **Behaviors**
<img width="844" alt="4 copy" src="https://media.github.ibm.com/user/228551/files/5d803f00-fca5-11e9-93b8-2bd3300df2f2">
* **Settings**

Desktop Process Designer uses the Process Server settings that are stored in Process Center to initially connect to the online process servers by using HTTP connections.  

The URLs that desktop Process Designer uses in an HTTP connection are determined by the Process Server endpoint configuration, which is loaded after the initial connection. By default, desktop Process Designer uses the generic scenario <u>EXTERNAL_CLIENT for all URLs to access Process Server</u> 

If a different endpoint scenario is required, then you can use the following group of optional scenarios, which take precedence over the EXTERNAL_CLIENT:  (At PS Side)  
* AE_TO_PS
* PROCESS_CENTER
* AE_IMAGES_PREFIX
* AE_PORTAL_PREFIX
* AE_WEBAPI_PREFIX
* AE_SERVLET_PREFIX
* AE_BPM_REST_SERVICE_CR_PREFIX
* AE_SOCIALBUS_WEBAPP_PREFIX
* AE_REST_GATEWAY_CR_PREFIX

** Process Designer uses only HTTP calls because httpProtocolOnly is set to true.  
** ProviderID is the bootstrap address for EJB calls and is should be stored at PC side given by PS heartbeat. 

#### 5.Connections between Integration Designer to Process Center 
* **Behavior**
<img width="945" alt="5 copy" src="https://media.github.ibm.com/user/228551/files/7557c300-fca5-11e9-9d75-d14bab8a36e8">
* **Settings**

Accessing the Process Center repository 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wid.integ.doc/processcenter/topics/topenpc.html  

** The default port of ORB BOOTSTRAP_ADDRESS is listening the request from IID to PC. 
<img width="905" alt="6 copy" src="https://media.github.ibm.com/user/228551/files/8f91a100-fca5-11e9-8aae-cc8e8f0da624">
** If the port is not accessible, the Process Center may reside behind a firewall and Integration Designer may reside outside the firewall. 

#### 6.Connections between Integration Designer to the UTE
* **Behavior**
<img width="982" alt="7 copy" src="https://media.github.ibm.com/user/228551/files/915b6480-fca5-11e9-88c7-c6cff83f23f6">

If you have developed modules or mediation modules in Integration Designer, you can deploy the modules to a UTE server in the Servers view for the purpose of testing using the integration test client. 
* **Settings**

If you chose to install the Workflow Server test environment profile when you installed Integration Designer, then you will already have a default unit test environment (UTE) server that was automatically created. However, if you deleted the default server or if you are working with a standalone installation of Workflow Server, you will need to manually create a test environment server for testing your integration and mediation modules. 

Working with Unit Testing Environment(UTE)
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wid.admin.doc/deploy/topics/tworkuteserv.html 

## Troubleshooting
#### Data Collection

#### 1.Server Trace & Logs
Trace needed for different issues are various.  Generally, we would suggest to enable the connectivity trace if there is no obvious exception can be traced.  
```
Connectivity Trace String:  
*=info: WLE.*=all:com.ibm.bpm.endpoint.*=all:org.apache.commons.httpclient.*=all 

Security Trace String:  
*=info:com.ibm.ws.security.*=all:com.ibm.websphere.security.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all 

SSL Trace String: 
*=info:SSL=all 

HTTP Connection:  
*=info:com.ibm.ws.webcontainer*=all: HTTPChannel=all
```

If **IBM HTTP Server** is configured and involved in the issue, please follow the instruction provided to collect IHS trace.   If you just would like to have a quick glance, collect the access.log should be sufficient.  
https://www.ibm.com/support/pages/ihsdiag-utility-package-capturing-ibm-http-server-diagnostic-information 

#### 2.Configuration Files
* If there are no specific properties we would like to check, we would suggest collecting the entire directory from location:  dmgr_root/config/cells/

For PC PS Connectivity issue, here is a list of configuration files you may want to pay attention. Please make sure you check them at both PC and PS sides.  
install_root/profiles/dmgr_name/config/cells/cell_name/cell-bpm.xml install_root/profiles/dmgr_name/config/cells/cell_name/security.xml install_root/profiles/dmgr_name/config/cells/cell_name/clusters/cluster_name/cluster-bpm.xml   
(if you have more than one cluster, use the appTarget cluster here) 

* If there is any of the runtime configuration attributes is related to the issue, collect the specific configuration file and also request the runtime TWCR.xml file from the location below: 

Managed_Node_Profile_ROOT\config\cells\cell_name\nodes\node_name\servers\server_name\process-center(server)\config\TeamWorksConfiguration.running.xml 

#### 3.Fiddler & Network trace
Fiddler trace collection procedure: 
https://www.ibm.com/support/pages/how-perform-fiddler-trace-capture-network-traffic-1 
#### 4.Trace add on Eclipse client side
For desktop **Process Designer** issue, we have specific trace could add on PD eclipse side. Please follow the instruction below to complete the steps.  
https://www.ibm.com/support/pages/collect-troubleshooting-data-ibm-process-designer-problems-ibm-business-process-manager-bpm  

For **Integration Designer** issue, please use this link here to apply the trace. 
https://www.ibm.com/support/pages/collect-troubleshooting-data-ibm-integration-designer  
#### 5.Database Table
If the issue is about connection to Process Server, then the information comes from Process Server is essential.  
**Process Center: LSW_SERVER**  
**Process Server: LSW_SYSTEM** 

#### Data Analysis
For most of the connection issues, we will need to locate the problematic component from a complicated topology or architecture, and then to do more troubleshooting on the specific component.  That requires you to understand the topology or the involved severs and modules very clearly before data analysis part.  

**Step 1: Understand the topology and participant nodes/servers within the network.** 

As the very first step of the troubleshooting of a connection issue, you could request clients to explain the participant parties within this connection issue or provide their topology diagram if it’s quite complicated to describe.  

**Step 2: Use logs & trace to locate the problematic component.**  
For example, if client’s PS failed to connect to PC, and they saw the redirect code HTTP: 302 at the PS logs 
```
CWLLG0095W: The repository contact failed with a status of: 302 
OR 
CWLLG0095W: Unable to connect to Process Center. The contact failed with a status of: 302 
```
This could be caused by PS, PC or the other modules between them like IHS, web server, or Firewall.  
We could check the IHS and web browser of PC server first, if the logs of IHS (like access_timestamp.log) shows the request sent by PS has been sent but redirected for some reason. And there is no incoming request received by PC side.  We could basically confirm that the problem is at HTTP Server side.     
If the request passed through IHS successfully and got received by PC and redirected, then we should focus on the Process Center side.   It’s pretty straightforward.  

**Step 3: Common methods of analysis**  
Once we focus on a specific component of BPM, we will need to rely on the data we collect from clients.  
For example, to check the current connection configuration between PC and PS, we could check the file cluster-bpm.xml (dmgr_root/config/cells/cell_name/clusters/cluster_name/cluster-bpm.xml) at Process Server and you will see the following properties.  
Key properties: processCenterUrl and heartBeatInterval 
```
<bpdServer xmi:type="BPMConfiguration:BPMProcessServer" xmi:id="BPMProcessServer_1542579515612" useHTTPSURLPrefixes="true" httpProtocolOnly="true" processCenterUrl="http://ibmbpm:9080/ProcessCenter" heartBeatInterval="10" processCenterInternalUrl="http://ibmbpm:9080/ProcessCenterInternal"> 
```
These properties illustrated that the Process Center was configured with URL http://ibmbpm:9080/ProcessCenter for connection, and PC is supposed to receive the heartbeats sent by PS every 10 seconds.   
You could verify this by 1. Entering the URL specified at a browser on the machine of Process Server. 2. Check if PC actually receive the heartbeat every 10 seconds.  

In order to verify it at PC side, you could check the database table LSW_SERVER and let client to export the entire table to you.  
You may see the table export like this 
(Only key columns are extracted here)  
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <th style="text-align:center;";>SERVER_ID</th>
    <th style="text-align:center">NAME</th>
    <th style="text-align:center">ADDRESS</th>
    <th style="text-align:center">PROVIDER_URL</th>
    <th style="text-align:center">PORT</th>
    <th style="text-align:center">IS_OFFLINE</th>
    <th style="text-align:center">LAST_HEARTBEAT </th>
    <th style="text-align:center">USER_NAME </th>
  </tr>
  <tr>
    <td style="background-color:white">8ac8f93-a26d-4ead-ab85-c644bfbde68d</td>
    <td style="background-color:white">Prod_PS</td>
    <td style="background-color:white"><a href="https://bpmpsprod:9443/teamworks" target="_blank">https://bpmpsprod:9443/teamworks</a></td>
    <td style="background-color:white">corbaname:iiop:bpmpsprod:9810 </td>
    <td style="background-color:white">9443</td>
    <td style="text-align:center">F</td>
    <td style="background-color:white">2019-10-01-02.03.19.091000</td>
    <td style="background-color:white">bpmadmin</td>
  </tr>
</table>

We could tell that there is a connected Process Server named Prod_PS with address https://bpmpsprod:9443/teamworks . The latest heartbeat PC received from PS was at 10/01/2019 02:03:19.   If client reported this issue after this time stamp, for instance at 10/25/2019, it basically proved that this connection has been lost for more than 25 days. We will need to focus on the PS and all of the participant nodes/servers between PC and PS.  

If we could use the step 2 to exclude the possibilities of other participant servers like IHS and web servers, between two servers, we should think about authentication and authorization issues at this moment.  

To validate our presumptions, we will need to verify whether the username & password are mapped to the correct authentication alias and given to the expected security role.   As I mentioned at the diagram for PC PS connection, the authentication alias of the role ProcessCenterUser has to be existed at Process Center and configured at Process Server. The user name & password mapped to it have to be same at both sides.  

Check the file **cell-bpm.xml and security.xml** (dmgr_root/config/cells/cell_name/security.xml and cell-bpm.xml) to locate the ProcessCenteruser configured at PS. We could find out the following mapping: 
```
<authDataEntries xmi:id="JAASAuthData_1542562019436" alias="PROCCTR_USER_ALIAS_De" userId="bpmadmin" password="{xor}DhGS762Xc" description=""/> 
```
ProcessCenterUser -- PROCCTR_USER_ALIAS_De – bpmadmin 
To find the corresponding cell-bpm.xml and security.xml at PC side: 
```
<authDataEntries xmi:id="JAASAuthData_1541638326243" alias="CellAdminAlias" userId="bpmadmin" password="{xor}DDYyMz4zPnxtb25n" description="BPM Cell Administrator Alias"/>  
```
We could see that the user bpmadmin exists at Process Center side, but the encrypted password doesn’t look match with each other.   We could ask client if they modified their password recently or not to validate our findings.  

## Reference (Optional) 

Connections in Business Process Manager 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.imuc.doc/topics/c_overviewconnections.html  

Using wsadmin commands to customize the Workflow Server settings used to connect to Workflow Center 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/tconnect_to_pctr.html  

Using the administrative console to customize the Workflow Server used to connect to Workflow Center 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/tconnect_to_pctr2.html  

Working with Unit Testing Environment(UTE) 
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wid.admin.doc/deploy/topics/tworkuteserv.html  

Configuring SSL Communication 
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.imuc.bpmesb.doc/topics/tins_cnfg_ssl_nd.html  

 
