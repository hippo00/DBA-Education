2019-11-4

## Overview

If the user's browser requests pass through a web server or load-balancing server before the request reaches the BPM server, you must configure the virtual host information that is used by BPM to generate URLs. Depending on the complexity of your topology and security setup, you might have to configure several different types of URLs.  BPM Endpoint configuration can fulfill this request. 

## Prerequisites (Optional)

Before reading this chapter, it’s recommended to understand the basic configuration of a BPM deployment environment and how we modify the DE configuration using BPM utility commands.   Also, understanding the BPM topology types and how BPM interact with other products within the over IT infrastructure is also essential. 

## Component

**1.When do you need to configure & change BPM endpoint?**

In a network deployment environment, you can configure a routing server (such as IBM HTTP Server, WebSphere Application Server proxy server, or other similar servers) as a proxy server for workload balancing and failover purposes. Instead of incoming HTTP requests going directly to an application server, they go to the proxy server, which then distributes the requests across multiple application servers that perform the work.

You do not have to use IBM HTTP Server for load balancing. Instead, you can use any other type of routing server; for example, WebSphere Application Server proxy server, any other web server, reverse proxy server, or network layer IP sprayer. 

**IBM BPM and WebSphere Application Server support the following major proxy servers:**
* Apache Server 2.2
* IBM HTTP Server
* IBM HTTP Server for i5/OS
* Lotus Domino
* Microsoft Internet Information Services
* NGINX 1.X
* NGINX Plus Release 9
* Oracle iPlanet Web Server 7

WebSphere Application Server 8.5.5.X Compatibility Report 
https://www.ibm.com/support/pages/websphere-application-server-detailed-system-requirements#8.5.5 

IBM BPM generates many different types of URLs for action links in the external browser client, internal communications, and connections to internal services. <font color="red">If your topology or security setup requires that IBM BPM must generate certain types of URLs differently</font>, there are various ways to configure them. 

It is important to identify the different entry points in your network, such as load balancers and web servers, for external and internal clients. For example, generally, the protocol, host name, and port number of the entry point server must be used in any generated links that are served to clients. Sometimes the endpoints can be defined as a static URL, but in more complex topologies it might be necessary to use a dynamic strategy, such as extracting the information from the header of the request. Below is a typical topology which requires the endpoint configuration. 
<img width="648" alt="1 copy" src="https://media.github.ibm.com/user/228551/files/888e8f80-fd86-11e9-946c-484b147be93d">

**Complete Procedure used to Configure BPM Endpoints**
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/tsec_thirdpartyauthentication_endpointservice.html 

** Endpoint configuration should be considered and configured by the unit of deployment environment. 

**2.Default BPM Endpoint Scenario**
**a. Default BPM Endpoint Scenario Keys**

* **EXTERNAL_CLIENT**
This generic scenario key is intended for non-relative URLs to be used by clients that are outside the data center, such as web browsers, to connect to the IBM BPM server. 

* **INTERNAL_CLIENT**
This generic scenario key is intended for non-relative URLs to be used by clients that are inside the data center, such IBM BPM calling itself. 

* **RELATIVE**
This generic scenario key is intended for relative URLs to facilitate access to browser-based web applications through various entry points in your topology. For example, some users might access IBM BPM through a reverse proxy whereas others might connect directly to the web server.

  - If all external or internal clients connect directly to the IBM BPM server, there is no need to change the default value.
  - If all external or internal clients use one entry point into your network, such as a web server, you can define the EXTERNAL_CLIENT or INTERNAL_CLIENT scenario to use a static virtual host object or a static URL.
  - If you have multiple entry points for external or internal clients, for example, a load balancer and a web server, using a single virtual host setting or a static URL is not appropriate, and you must define the EXTERNAL_CLIENT or INTERNAL_CLIENT scenario to use one or more dynamic strategies.

** These defaults are only used for a generated URL if the optional scenario that is specific to the URL type is not defined.

**b. Strategies of Endpoint Scenarios**

For each endpoint configuration scenario, BPM endpoint defines a list of strategies. 
The strategies are attempted in the order that is specified until one returns the required information. <font color="red">Each strategy uses a different approach to determine the transport protocol, host, and port that are used to generate URLs</font>, for example, by extracting them from a particular header in the request. The IBM BPM endpoint can also reference an IBM BPM virtual host that contains fixed values for the transport protocol, host name, port number of the virtual host, and any URL prefix.

Here’s a table which lists all strategies that are available for BPM and you could check the details. 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/rcfgep_strategies.html 

Here I would like to show you the default strategies BPM defines for our default scenarios. 
```
<bpmurl xmi:id="BPMURL_1531214146009" strategies="WCCMConfigStrategy, HttpProtocolHostStrategy" scenario="EXTERNAL_CLIENT"/>
<bpmurl xmi:id="BPMURL_1531214146025" scenario="INTERNAL_CLIENT"/>
<bpmurl xmi:id="BPMURL_1531214146026" strategies="RelativeUrlStrategy" scenario="RELATIVE"/>
```

**c. Changing Default Scenarios**

By using the command utilities setBPMVirtualHost, setBPMDefaultVirtualHost, and setBPMEndpoint. We could make changes on the default scenarios as needed. 

Detailed procedure for changing default scenarios. 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/tcfgep.html 

**3.Optional Scenario Keys**

Except for default scenario keys, client may need to configure optional scenarios for specific types of generated URLs.  Most of time, default scenarios are used if the optional scenarios are not defined.   However, if any of the optional scenarios get set up, it takes precedence over the default scenarios. 

For example, If we setup the optional scenarios AE_TO_PS with it’s strategies and URL, when PD is trying to connected to PC or PS, it no longer uses the EXTERNAL_CLIENT, but the one defined at AE_TO_PS. 

**Here is the list of optional scenario keys available**
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/rcfgep_optscnkey.html 

**Setting up Optional Scenarios for complex topologies**
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/tcfgep_createscn.html 

**Configuring endpoints for dynamic URLs** 
https://www.ibm.com/support/pages/node/1074580 

**4.Endpoint Lookup** 

When an endpoint lookup is required by a particular product feature, there is an optional and a default scenario associated with each specific lookup. When the lookup is performed, the following actions are taken in order until an endpoint URL value is returned.
* The optional scenario is checked.
* The default scenario is checked.
* The default virtual host for the deployment environment is checked.
* The CurrentJVMDefaultTransportStrategy is used.

By default, most lookups will use the CurrentJVMDefaultTransportStrategy if no changes have been made to the endpoint settings, which results in a URL pointing at the HTTPS port of the current JVM. For most cases, you can modify only the default scenarios or rely on the default behavior.

## Troubleshooting

#### Data Collection

**1.Logs & Trace**

For endpoint lookup 
Trace String: *=info: WLE.*=all:com.ibm.bpm.endpoint.*=all

For general BPM connectivity including endpoint
*=info: WLE.*=all:com.ibm.bpm.endpoint.*=all:org.apache.commons.httpclient.*=all


**2.Resetting endpoint service cache**

If client need to enable the endpoint trace above, sometimes it’s necessary to reset the endpoint service cache because the resulting traces do not contain the initial computation of the URLs.

Please use the following link to reset the cache before enabling the runtime trace
https://www.ibm.com/support/pages/resetting-endpoint-service-cache-ibm-business-process-manager-bpm 

**3.Configuration Files**

Suggested directory: bpm_root/profiles/dmgr_root/config/

#### Data Analysis

**Step 1: Understand the correct topology and expected behaviors**

Firstly, in order to diagnose an endpoint issue appropriately, we must identify the components and structure of client’s topology. Components to consider include such things as load balancers, external web servers, reverse proxies, firewalls, internal web servers, Process Server, and Process Centers.

Try to clarify the topology and expected behavior with client, we could use topology diagram to help on the complicated infrastructure.   The purpose of doing this is to come up with the expected configuration based on the behaviors they plan. 

For example, client wants all of their external coming request went through a load balancer first before reaching to BPM servers.  

**Step 2: Check the current configuration**

For simple topology, we could directly use the configuration files to locate the endpoint scenarios defined.  For complicated scenarios like dynamic strategy which requires computation of the URLs generated, the suggested endpoint trace should be applied. 

Both configuration file and the endpoint tracing should illustrate client’s current configuration very clear. 

For example, check client’s configuration (from cell-bpm.xml /dmgr_root/config/cells/cell_name/cell-bpm.xml) as below:
Key Objects:  **‘virtualHosts’，‘bpmurls’**
```
</deploymentTargets>
<virtualHosts xmi:id="BPMVirtualHostInfo_1497950269803" hostname="bpm-test" name="default_vh"/>
<bpmurls xmi:id="BPMURLS_1490594595948">
<bpmurl xmi:id="BPMURL_1490525105950" strategies="WebsphereProxyHeaderStrategy,XForwardedHeaderStrategy,HttpProtocolHostStrategy" scenario="EXTERNAL_CLIENT" url="https://bpm-test" virtualHost="BPMVirtualHostInfo_1497922464803"/>
```
Based on the given configuration above, we could see that 
   -	Client defined a default virtual host with host name ‘bpm-web’
   -	Client updated the default scenario EXTERNAL_CLIENT to use strategies WebsphereProxyHeaderStrategy, XForwardedHeaderStrategy, and HttpProtocolHostStrategy. 
   -	Client set the URL for scenario as https://bpm-test which makes the virtual host meaningless. 

The strategies WebsphereProxyHeaderStrategy and XForwardedHeaderStrategy use the different methods to compute the URLs needed for external clients.  Also, the URL defined overwrite the host name given, but client was intended to define host name rather than URL.   Therefore, the overall config doesn’t fit for client’s requirement which is use the load balancer as the single entry point.  Therefore, we will need to correct their current configuration. 

**Step 3: Correct the configuration** 

By checking the strategy list, we would recommend client to use the default strategy **WCCMConfigStrategy** to extract the protocol, host, and port from a defined virtual host. 

Therefore, client could use the command line setBPMVirtualHost to make sure it contains all of the information of the load balancer as below:

AdminTask.setBPMVirtualHost(['-de', deployment_env_name, '-name', 'default_vh', '-hostname', 'example .com', '-port', '9443'])

And then update the EXTERNAL_CLIENT scenario with the defined virtual host. 

AdminTask.setBPMEndpoint( [ '-de', deployment_env_name, '-scenario', scenario, '-virtualHost', 'default_vh' ] )

AdminTask.setBPMEndpoint( [ '-de', deployment_env_name, '-scenario', scenario, '-strategies', **WCCMConfigStrategy**' ] )

Also, client used the parameter URL while they set up the endpoint earlier, and it led to the fact virtualHost setting is ignored. For each scenario, if the url attribute is specified, that URL is returned before any of the strategies are attempted.   We should remind client of this mistake as well for their future configuration.  

## Reference (Optional)

Resetting the endpoint service cache in IBM Business Process Manager (BPM) 
https://www.ibm.com/support/pages/resetting-endpoint-service-cache-ibm-business-process-manager-bpm

clearBPMEndpointServiceCache command
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/rref_clearbpmendpointservicecache.html 

WebSphere Application Server 8.5.5.X Compatibility Report 
https://www.ibm.com/support/pages/websphere-application-server-detailed-system-requirements#8.5.5 

Business Process Management Deployment Guide Using IBM Business Process Manager V8.5
http://www.redbooks.ibm.com/abstracts/sg248175.html?Open&mhsrc=ibmsearch_a&mhq=bpm%20deployment%20guide%20redbook 

Strategies for identifying endpoint information
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/rcfgep_strategies.html 

Configuring endpoints for dynamic URLs 
https://www.ibm.com/support/pages/node/1074580 
