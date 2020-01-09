Date:2019-12-24

## Overview

IBM Process Federation Server (PFS) is a component of IBM Business Automation Workflow (BAW) that converges Process Portal components such as dashboards, tasks, processes, and launchable services from multiple individual BPM and BAW environments into a single Process Portal user interface. This Process Portal is referred to as the “federated Process Portal” and is an already existing Process Portal application from one of the federated BAW environments that is designated as the entry point to the federated content, including tasks, processes, and dashboards.

This section will help you conceptualize PFS at a high level and help you learn how to install, configure, and troubleshoot PFS.

## Prerequisites

[PFS Technical Overview](https://ibm.ent.box.com/file/106204549562)
[PFS Configuration Overview](https://ibm.ent.box.com/file/105923865516)
[PFS with Business Automation Workflow on Fyre](https://ibm.ent.box.com/file/554572004360)
[PFS Elasticsearch Introduction & Troubleshooting](https://ibm.ent.box.com/file/521554112588)

## Components

[Process Federation Server components overview](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/pfs_comp_ovw.html)
![图片 1](https://media.github.ibm.com/user/228551/files/07ce7000-2620-11ea-969a-0e2431294735)

1.WAS Liberty Server

The Process Federation Server is an instance of a WebSphere Liberty server. The WAS Liberty server is easily configurable via the server.xml file. Any configuration changes to PFS are made via the server.xml file. The configurable PFS-related settings contained in the WAS Liberty server.xml file are documented in the Knowledge Center.

[Process Federation Server server.xml configuration file](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/rpfs_server_xml.html)

2.Federated Process Portal

![图片 2](https://media.github.ibm.com/user/228551/files/42d0a380-2620-11ea-9029-d283deebd6f8)
![图片 3](https://media.github.ibm.com/user/228551/files/43693a00-2620-11ea-815a-42596d6fd1b3)

The federated Process Portal is the conglomerated UI that allows a user to access tasks, dashboards, services, and more from multiple federated Business Process Manager and/or Business Automation Workflow environments. One must configure a Process Portal to make use of the PFS REST services to display the federated content as well as make configuration changes for endpoint URLs for Process Portal and allowed origins. 

The federated Process Portal has some distinct features and behavior from non-federated Process Portal behavior. Saved searches in federated Process Portal are capable of returning a list of tasks from all federated environments. 

[Configuring Process Portal for a federated environment](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/responsiveportal_config.html)
[Federation considerations for Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cport_fedconsiderations.html)
[Federated systems and authorization for saved search](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cpfs_saved_search_auth.html)

3.Elasticsearch

Elasticsearch is a third-party open-source full-text search engine composed of searchable documents. The Elasticsearch provides a distributed index that contains data from the systems in the federated environments. The distributed index ensures that users have fast access to federated data, and relieves back-end systems from expensive queries. There is an indexing service for each federated system in the federated environment, and a common REST-based query service that provides data to users.  In other words, PFS makes use of Elasticsearch to allow users to search for tasks and other data in the federated Process Portal. The PFS server.xml file provides some configurable properties for the Elasticsearch service. 

Since Elasticsearch is a third-party resource built into the PFS product it can be difficult to troubleshoot when network configurations and non-PFS related problems occur. The version of Elasticsearch embedded in PFS is Elasticsearch 1.7, but Elasticsearch 6 can be configured to work with PFS remotely. 

[Elasticsearch 1.7 Reference & Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/index.html)
[Configuring the Elasticsearch service](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_elasticsearch.html)
[Process Federation Server Elasticsearch indexes](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/pfs_elsearch_index.html)
[IBM Open Source and Third Party Software Policy](https://www.ibm.com/support/pages/node/737271)

4.Process Federation Server database

The Process Federation Server requires setting up a new database. The most important tables in the PFS database are the PFS_SAVED_SEARCHES table and the PFS_BPD_CHANGE_LOG table. The PFS_SAVED_SEARCHES table stored saved search definitions. The PFS_BPD_CHANGE_LOG table is used by the indexers to keep the Elasticsearch index up-to-date with current task information. 

[Creating the Process Federation Server database](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/inst_fps_dbcreate.html)
[Configuring the Process Federation Server database](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_database.html)
[Maintaining Change Logs on Federated Systems](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/tadm_fps_changelogs.html)

5.Retrievers

The retrievers are used in PFS to call federated instances REST APIs on demand and return an aggregated result. Retrievers are used to gather data such as user group information, federated systems metadata, and launchable processes. 

6.Indexers

The indexers retrieve task data from the federated systems’ databases and index them in the Elasticsearch. Each federated system has an indexer. The indexers run as background processes to keep the Elasticsearch up-to-date.

[Enabling indexing on a federated system](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_enablingfed.html)

7.PFS REST Services

Process Federation Server provides a set of REST services federated features to the users through the federated Process Portal. These REST services include a Saved Search REST API to query the Elasticsearch to retrieve indexed tasks, a Launchable Entities REST API to query for the dashboards, processes, services, and more that should be displayed to the user (by using retrievers), a Systems Metadata REST API to retrieve metadata about the federated systems (by using retrievers), a Task List REST API to populate task lists in the federate Process Portal, and a secured Elasticsearch REST API that provides standard Elasticsearch REST API but is encapsulated with authentication. 

[The Process Federation Server REST APIs](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfps_restapis.html)
[Accessing the Process Federation Server REST APIs with Swagger](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/pfs_access_apis.html)

#### Installation

Customers must download the base installation from the Passport Advantage site but can download the latest cumulative fix from IBM Fix Central. Installation includes downloading the binaries and latest cumulative fix, installing the package, creating the PFS database, and creating the PFS server instance in the WAS Liberty server. 

Official documentation recommends to always use the latest IBM Process Federation Server version available. The requirement is to use a version of IBM Process Federation Server that is equal to, or more recent than, the most recent version of IBM Business Automation Workflow or IBM Business Process Manager that you plan to federate.

[Planning your federated environment](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cpln_fps.html)
[Installing and enabling IBM Process Federation Server](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/enabling_pfs.html)
[Installing IBM Process Federation Server on Business Automation Workflow](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/inst_cfg_fps.html)
[Creating the Process Federation Server database](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/inst_fps_dbcreate.html)
[Creating a process federation server](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_crtserver.html)

#### Configuration

![图片 1](https://media.github.ibm.com/user/228551/files/02742400-2626-11ea-9d47-20e83c57a283)

Federated environments accommodate various configuration scenarios. Our documentation provides high-level roadmaps for common paths for configuring Process Federation Server and federated environments. Our documentation provides a “Quick Start” path for basic configuration scenarios that are suitable for development and test systems in addition to a “Production” path for configuring and securing federated environment that are based on clustered topologies. 

The majority of the configuration steps deal with updating the PFS server.xml file. In the server.xml file you will configure the PFS database, a common user registry, SSO, the Elasticsearch service, and information about the federated systems. Configuration also requires making changes in the federated systems themselves to enable the indexers and retrievers so that PFS can aggregate data into the federated Process Portal user interface.

[Configuring Process Federation Server and federated environments](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_fpsfedenv.html)
[Roadmaps: Configuring PFS and federated environments](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_roadmap.html)
[The Process Federation Server server.xml file](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/rpfs_server_xml.html)
[Configuring and maintaining federated environments](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_fedenv.html) (database, user registry, SSO, Elasticsearch)
[Federating BPM & BAW systems](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cfg_fps_fedbpm.html)
[Configuring Process Portal for a federated environment](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/responsiveportal_config.html)
[Validating the Process Federation Server and federated environment configuration](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/tsec_fps_validation.html)

## Troubleshooting
 
Generally, most PFS related cases deal with configuration issues, saved search issues, or Elasticsearch problems. The most important data to collect from customers is the PFS server.xml file and the PFS server logs. It is also critical to understand which component of PFS the issue involves. Once you identify the component you can focus your data collection efforts and analysis to decrease time to resolution.

Our Knowledge Center documentation provides detailed information on how to enable trace logging in the PFS server which is done by updating the traceSpecification element in the PFS server.xml file. Various trace strings can be enabled to troubleshoot various components of Process Federation Server. 

[Logging and Tracing for Process Federation Server](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/ttro_fps_logtrace.html)

<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr>
    <th>Trace specification</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="background-color:white">com.ibm.bpm.federated.*=all</td>
    <td style="background-color:white">Traces all the Process Federation Server components.</td>
  </tr>
  <tr>
    <td style="background-color:white">com.ibm.bpm.federated.query.rest.*=all</td>
    <td style="background-color:white">Traces requests from the Process Federation Server REST APIs.</td>
  </tr>
  <tr>
    <td style="background-color:white">com.ibm.bpm.federated.indexer.bpd.*=all
 com.ibm.bpm.federated.indexer.bpel.*=all</td>
    <td style="background-color:white">Traces the indexing service on federated systems. You can enable tracing for BPD systems, BPEL systems, or both.</td>
  </tr>
 <tr>
    <td style="background-color:white">com.ibm.bpm.federated.retriever.bpd.*=all
 com.ibm.bpm.federated.retriever.bpel.*=all</td>
    <td style="background-color:white">Traces the retrieval service on federated systems. You can enable tracing for BPD systems, BPEL systems, or both.</td>
  </tr>
  <tr>
    <td style="background-color:white">com.ibm.bpm.elasticsearch.receiver.*=all</td>
    <td style="background-color:white">Traces the Elasticsearch indexing methods.</td>
  </tr>
  <tr>
    <td style="background-color:white">com.ibm.wbimonitor.partitioning.*=all</td>
    <td style="background-color:white">Traces the indexer partitioning service. The service coordinates the indexing services across cluster members.</td>
  </tr>
  <tr>
    <td style="background-color:white"><img src="https://media.github.ibm.com/user/228551/files/4cfb9d80-2632-11ea-9367-c98fe9ecba45" /> com.ibm.bpm.elasticsearch.client.*=all</td>
    <td style="background-color:white"> <img src="https://media.github.ibm.com/user/228551/files/4cfb9d80-2632-11ea-9367-c98fe9ecba45" />
Traces the remote Elasticsearch client.</td>
  </tr>
  <tr>
    <td style="background-color:white"> <img src="https://media.github.ibm.com/user/228551/files/4cfb9d80-2632-11ea-9367-c98fe9ecba45" />
com.ibm.bpm.query.rest.SAVED_SEARCH_PERFORMANCE_LOGGER=all</td>
    <td style="background-color:white"> <img src="https://media.github.ibm.com/user/228551/files/4cfb9d80-2632-11ea-9367-c98fe9ecba45" />
Traces performance of saved searches</td>
  </tr>
</table>

#### Data Collection

[Process Federation Server Mustgathers](https://www.ibm.com/support/pages/collect-troubleshooting-data-process-federation-server-problems-ibm-business-process-manager-bpm)

**General Data Collection**
In most cases you will need to capture the following items of information:

1.Detailed description of the topology of the customer’s federated environment

Understand the current topology of the impacted federated environment. How many federated systems are in the federated environment? What versions of BAW or BPM are federated? What is the version of PFS? Do they use IBM HTTP Servers between components? 

2.PFS server.xml 

By default, the configuration file is in the pfs_install_root/usr/servers/<server_name> directory of Process Federation Server. You can use this file to confirm if the customer missed any configuration steps or misconfigured any elements within the server.xml file. The server.xml can be used to get a detailed understanding of the topology of the federated environment.

[The Process Federation Server server.xml configuration file](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/rpfs_server_xml.html)

3.PFS server logs

The PFS logs are located in the pfs_install_root/usr/servers/<server_name>/logs directory. The logs directory will contain messages.log, console.log, and FFDC files. Trace.log files will be generated with trace logging enabled. 

The console.log files contain the redirected and standard output and standard error streams from the JVM process. The console output is intended for direct human consumption. 

The messages.log file contains all messages that are written or captured by the logging component. All messages that are written to this file contain additional information such as the message time stamp and the ID of the thread that write the message. This file does not contain messages that are written directly by the JVM process. 

The trace.log files contains all messages that are written or captured by the logging component and any additional trace. The file is created only if you enabled additional trace logging. 

[Logging and tracing for Process Federation Server](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/ttro_fps_logtrace.html)
[Logging and tracing for the WebSphere Application Server Liberty profile](https://www.ibm.com/support/knowledgecenter/SSD28V_liberty/com.ibm.websphere.wlp.core.doc/ae/rwlp_logging.html)

4.Browser Network Trace HAR file

Capturing and collecting the browser network trace is useful for seeing what REST API calls are made from the client. The trace will show request and response data. You can use the Fiddler tool to review the data. 

The you provide the following set of instructions to the customer to collect the HAR file:

&nbsp;&nbsp;&nbsp;&nbsp;a. Open the browser and press the F12 key to open the browser’s developer tools
&nbsp;&nbsp;&nbsp;&nbsp;b. Select the Network tab within the developer tools pane
&nbsp;&nbsp;&nbsp;&nbsp;c. Reproduce the issue or load the federated Process Portal page
&nbsp;&nbsp;&nbsp;&nbsp;d. Right click in the Network data and export the content as a HAR file
&nbsp;&nbsp;&nbsp;&nbsp;e. Upload the HAR file to the case

5.Browser Console Logs 

The browser developer tools might also contain useful error information in the console logs. For example, if there are CORS (cross origin resource sharing) errors due to a misconfiguration they will be detailed in the browser console logs. You can direct the customer to open the browser developer tools, select the Console tab, reproduce the issue, and export the contents of the console logs (or copy and paste into a text file) and upload the file to the case. 

**Collecting Data for Configuration Issues**

For newly configured federated environments you can have the customer run the PFS validation tool to identify which part of the configuration is failing. PFS server.xml and server logs will also be useful. 
[Validation the Process Federation Server and federated environment configuration](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/tsec_fps_validation.html)

**Collecting Data for Elasticsearch Issues**

For troubleshooting the Elasticsearch service you can have the customer install the elasticsearch-head utility tool. This is a plug-in that provides a GUI to get a visual representation of the health and status of the indices, shards, and overall cluster that comprises the Elasticsearch service. Alternatively, you can have customers make use of the Elasticsearch APIs such as cluster_stats to get a health status of the Elasticsearch cluster. 

The Elasticsearch is an open source third-party software built into the PFS product and as such can be difficult to troubleshoot. Generally, we can point the customer to documentation that may help them but ultimately will not be able to resolve defects or tuning-related issues specific to the Elasticsearch service.
[Elasticsearch-head Utility](https://mobz.github.io/elasticsearch-head/)
[Elasticsearch Cluster Health API](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/cluster-health.html)
[IBM Support Policy on handling Open Source and Third Party Software](https://www.ibm.com/support/pages/node/737271)





