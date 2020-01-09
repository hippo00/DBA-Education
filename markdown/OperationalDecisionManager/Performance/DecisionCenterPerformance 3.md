Date:2019-12-18

## Overview

The IBM Operational Decision Manager Decision Center (DC) is designed for business users. They can author, model, and manage decisions that are directly based on organizational knowledge and best practices, with limited or no dependence on the IT department. Decision Center includes Business Console, Enterprise Console and a rule repository. Decision Center makes heavy use of CPU, memory, and database resources, so to ensure scalability, the hardware architecture should be set up to support usage requirements. This section explains what performance issues may happen in this component and how to troubleshoot problems.

## Prerequisites

Basic features of Decision Center:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.1/com.ibm.odm.dcenter.overview/topics/odm_dcenter_overview.html

Enterprise Console & Business Console:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.1/com.ibm.odm.dcenter.admin/shared_config_topics/tpc_rts_opening.html

Administering Decision Center:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.1/com.ibm.odm.dcenter.admin/topics/odm_dcenter_admin.html

## Component

1.Enterprise Console: Enterprise Console is also called TeamServer, the classic Decision Center. You use the Decision Center Enterprise console to author, edit, organize, and search for business rules. 
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tpc_dc_intro.html

2.Business Console: Business Console is a new Decision Center Console. Business Console offers a collaborative and secure environment for business users and rule developers to author, manage, test, and deploy rules. We suggest using Business Console for decision services. 
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/intro/con_bc_intro.html

3.Administering the Decision Center database: Administering the Decision Center database includes tasks required to complete the configuration of Decision Center, archiving the database, and deleting projects.
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_dc_admin_db.html

## Troubleshooting

#### Data Collection

1.Collecting Data: reporting a problem with IBM Decision Center: https://www.ibm.com/support/pages/collecting-data-reporting-problem-ibm-decision-center
2.Collecting information about Decision Center(especially for Business Console): https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_dc_must_gather_info.html
3.CPU Utilization, disk I/O, network and memory and paging: Using operating system tools, such as **perfmon** for Windows or **iostat** or **vmstat** for Linux and UNIX.
4.For WebSphere Application Server: https://www.ibm.com/support/pages/mustgather-out-memory-errors-websphere-application-server-aix-linux-or-windows
5.For other application servers: Enable verbose GC, collect Java core files, heap dumps and system logs. 
6.For testing and simulation issues: Ask for a sample project which can reproduce the issue and the steps to reproduce the issue. Ask for the scenario input Microsoft Excel file to help reproduce the problem.
7.Related Decision Center configuration, specific to issues.

**Typical Issues – Symptoms and Diagnostic Steps**

* High memory or OOM:
  - **Symptoms:** OOM errors shows up in logs, GC frequently happens, and server crashes.
  - **Diagnostic steps:**
&nbsp;&nbsp;&nbsp;&nbsp;a. Check system logs, heap dumps and GC logs
&nbsp;&nbsp;&nbsp;&nbsp;b. Find timestamp when OOM happens (in System logs) and Run tools to analyze the heap dump, GC logs to see if there is suspect memory leak or known issues (Find in Support Search & RTC)
&nbsp;&nbsp;&nbsp;&nbsp;c. Tuning JVM:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Set proper heap size: Recommend 4G – 16G for each DC server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	User -gencon GC policy
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	If CPU cores > 6, limit the number of GC threads to 6
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Disable Java2Security 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Limit memory consumption: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Disable the “Archive parsing flag” option (Project > Edit project options > Check the ruleset archive)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Use automatic build to avoid a ruleset generation cost at “first ruleset generation”.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)In the installation manager, set the configuration parameter teamserver.build.archive.storage to ‘file’, which is the default.

* High CPU usage or hung thread:
  - **Symptoms:** High CPU utilization, slow DC response, server crashes.
  - **Diagnostic steps:**
a. Check system logs, java cores and GC logs
b. Run tools to check if there are blocked thread or known issues
c. Check if there is a shared vocabulary bottleneck: If there are many users accessing same projects and they are doing long running operations (ruleset generation, reporting and so on), then suggest changing to a Cluster topology.

* Build performance: 
  - **Symptoms:** When you try to extract or deploy a ruleApp, it will take long time to finish and you will see some hung thread errors or timeout errors in system logs
  - **Diagnostic steps:**
a. Check system logs and check the error stacks. See if there are thread hung with building or compiling. There also could be some deadlock error or timeout errors.
b. Disable “Archive parsing flag”
c. Disable “Rule analysis checks”.
d. At the project level: In EC, under the Project tab, select "Build automatically": https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tpc_dc_project_options.html

* Synchronization performance:
  - **Symptoms:** Synchronization for large rule projects takes a long time, especially on Business Console.
  - **Diagnostic steps:** From DC, if we want to improve the performance, we need to configure Business Console Stream and reduce the artifacts we need to follow during the synchronization.

* Browsing and search performance:
  - **Symptoms:** The search feature is enabled by default on Business Console, whether you use it or not, it will do re-indexing over and over again, and it will use some resources and make Decision Center Console respond slowly.
  - **Diagnostic steps:**
a. If the client does not want to use the search feature, they can disable it: Go to Administration > Settings on Business Console and set the search indexing period to 0.
b. Check the value of SolrEmbeddedDataDir and the number of indexations
c. Repackage of DecisionCenter.war (in the ear) 
d. Update the file preferences.properties in WEB-INF/classes 
e. Add the following properties:
&nbsp;&nbsp;&nbsp;&nbsp;decisioncenter.web.search.SearchProvider = SolrEmbedded
&nbsp;&nbsp;&nbsp;&nbsp;decisioncenter.web.search.SolrEmbeddedDataDir = /yourpath

* Authoring performance: 
  - **Symptoms:** When customer has large number of rules and many users to author different rules at same time, and the copy of rules or authoring of decision tables will be extremely slow.
  - **Diagnostic steps:**
a. Check if the client has a large number of rules, especially large number of decision tables, and check the rows of decision tables. (In EC, the row of each decision tables should be lower than 800, in BC the row of each decision tables should be lower than 5000. Please note this is just a suggested value.)
b. Check if the client enabled “automatic Build” on Project level
c. If the client needs the global setting for ‘automatic build’, change the internal Boolean flag build.elementOnCommit: 
```
Under the <InstallDir>\teamserver\applicationservers\WebSphere85\jrules-teamserver-WAS85.ear\teamserver.war\WEB-INF\lib\teamserver-model-8.X.X.X.jar\ilog\rules\teamserver\preferences.properties
build.elementOnCommit = false
build.path =
build.archive.storage = file
```

* Data source performance:
  - **Symptoms:** In the logs there are records that some SQLs cannot get a result or lots of timeout errors like following:
  
```
Caused by: com.ibm.websphere.ce.cm.ConnectionWaitTimeoutException: Connection not available, Timed out waiting for 180001     at com.ibm.ws.rsadapter.AdapterUtil.toSQLException(AdapterUtil.java:1684)     at com.ibm.ws.rsadapter.jdbc.WSJdbcDataSource.getConnection(WSJdbcDataSource.java:686)     at com.ibm.ws.rsadapter.jdbc.WSJdbcDataSource.getConnection(WSJdbcDataSource.java:636)     at com.ibm.wps.services.datastore.DomainDataStoreImpl.getConnectionInternal(DomainDataStoreImpl.java:185)     at com.ibm.wps.services.datastore.DomainDataStoreImpl.getConnection(DomainDataStoreImpl.java:128)
```

* Diagnostic steps:
a. Check custom properties:
-&nbsp;	 Additional properties → WebSphere Application Server -> data source properties
-&nbsp; Prepared statement cache size: 100 (Increase the size the prepared statement cache to 100 ).
-&nbsp;	 webSphereDefaultIsolationLevel property should be set to 2
-&nbsp;	 Use this data source in container managed persistence (CMP) must be unset
b. Tuning connection pool size: Depends on the number of concurrent users. A user is using 5 concurrent connections to the database
-&nbsp;	 1)Nb users < 5 you should have a pool size of 10
-&nbsp;	 2)5 < nb users < 10 you should have a pool size of 20
-&nbsp;	 3)10 < nb users < 20 you should have a pool size of 30
-&nbsp;	 4)Nb users > 20 the pool size should not be over 50.

* Test and simulation performance:
  - Symptoms: When customer runs Test & Simulation with too many scenarios, it will fail and there may be OOM error in RES log.
  -	Diagnostic steps: 
a. Check if the heap size is large enough
b. From RES console, change ruleset property ruleset.bom.enabled to false for the specific ruleset.

#### References
1.[ODM Performance Tuning Guide](http://www.redbooks.ibm.com/redpapers/pdfs/redp4899.pdf)
2.[ODM 8.9 Tuning Guide](https://www.ibm.com/community/automation/wp-content/uploads/sites/8/2019/02/ODM89xTuningGuideV2.0.pdf)
3.[Improving the performance of Decision Center](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.1/com.ibm.odm.dcenter.admin/topics/tpc_dc_admn_perf.html) 
