Date:2019-12-27

## Overview

After having installed ODM, you must configure Rule Execution Server and Decision Center on a supported application server.

## Prerequisites 

Familiar with the application server and the database

ODM Detailed System Requirement 
https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements

## Component

The detailed steps could be a little different in different versions. Make sure you refer to the documentation of the correct version. 
* Configuring on Liberty profile
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.wlp/topics/odm_distrib_config_wlp.html

* Configuring on Websphere Application Server
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/odm_distrib_config_was.html

* Configuring on Tomcat
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.tom/topics/odm_distrib_config_tom.html

* Configuring on JBoss
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.jboss/topics/odm_distrib_config_jboss.html

* Configuring on Weblogic (deprecated in v8.10)
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.weblo/topics/odm_distrib_config_weblo.html

* Configuring on Java SE
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.javase/topics/odm_distrib_config_javase.html

## Troubleshooting
 
The ODM documentation provides general tips of troubleshooting different application servers.

Troubleshooting on the Liberty profile server: https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_support_troubleshoot_res_wlp.html

Troubleshooting on Websphere Application Server:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_support_troubleshoot_res_was.html

Troubleshooting on Tomcat:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_support_troubleshoot_res_tomcat.html

Troubleshooting on JBoss:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_support_troubleshoot_res_jboss.html

Troubleshooting on Weblogic:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_support_troubleshoot_res_weblo.html

#### Data Collection

1.Exact version of the ODM components used
2.The Application Server name and version
3.The JDK used
4.The database and database driver used 
5.The cluster topology 
6.All Application Server log files 

#### Common issues

1.I have setup a Rule Execution Server cluster, but the XUs on other nodes are not updated after I have deployed a new version of ruleapp. It seems the RES console fails to notify the other XUs.

**Answer:**
By default, the RES console relies on the JMX MBean to notify the XUs when there’s a ruleapp deployment.  This kind of problem is usually caused by the fact that the resAdmin user does not have sufficient privilege to access the MBeans.  Collect the server logs of the RES console server, usually you can find an error message similar to below:
```
ADMN0022E - access is denied for the get ruleset path operation on IlrDecisionService MBean because of insufficient or empty credentials.
```
To resolve the problem, you need to map the resAdmin user to the Administrators group of the Application Server, following the configuration documentation. Once done, confirm if you can see all the XUs from the Server Info tab in the RES console. 

Sometimes the RES console fails to notify the XUs due to version incompatibility. Make sure the RES console and XUs are of the same version. 

2.I have several RES instances using the same database, but they are not synchronized as they are not in a cluster. How can I force ruleapp update on all these instances?

**Answer:**
You can enable the TCP/IP management mode. 
By default, the RES console cannot manage XUs that handle the execution of Java SE or Java EE rule sessions if these XUs are not running in the same cluster or the same JVM as the RES console. You can change this behavior by configuring the XU to connect to a TCP/IP management server that is started by the RES management EAR file. 
Refer to:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_config_rescons_behavior.html

Note, when you set the protocol to tcpip, both the JMX protocol and the TCP/IP protocol are used. You cannot disable the default JMX management mode.

3.When Decision Center is deployed on Websphere Application Server behind a load balancer or a proxy server, I fail to open the Decision Center console because a wrong port number is directed. 

**Answer:**
Decision Center uses request.getServerPort() method to retrieve the port value and set to teamserver.server.port. However in WebSphere Application Server, the getServerPort() method returns the port number from the request URL first instead.
To resolve this issue, you must set the trusthostheaderport and the com.ibm.ws.webcontainer.extractHostHeaderPort custom property to true to return the port number from the request host header first. Refer to:
https://developer.ibm.com/answers/questions/167105/issue-with-decision-center-behind-proxy-server-or/

4."Transaction timed out after 601 seconds" error while performing long running operations in Decision Center

**Answer:**
The transaction time for DC is set to 600 seconds by default, and application servers also have container level transaction timeouts that are configuration. If a transactional operation takes longer than these timeouts to complete, the transaction is rolled back. 
You can increase the timeout value in the web.xml file of the DC EAR file by changing the value of the property ilog.rules.teamserver.transaction.timeout. Make sure you change the below value in both 
`jrules-teamserver-.ear\teamserver.war\WEB-INF\web.xml` and 
`jrules-teamserver-.ear\decisioncenter.war\WEB-INF\web.xml`
```
<context-param>
     <description>Modify the timeout value that is associated with transactions (in seconds)</description>
     <param-name>ilog.rules.teamserver.transaction.timeout</param-name>
     <param-value>600</param-value>
```
https://developer.ibm.com/answers/questions/178160/rule-team-serverdecision-center-is-timing-out-whil-1/

5.Decision Center is deployed behind an IHS reverse proxy. A long running operation (e.g., branch merge, ruleapp deployment) may fail due to error similar to “The server returned the HTTP error 500 with error text "Internal Server Error", although the operation seems to succeed on the server side. No error found in the server log. 

**Answer:**
This is mostly likely due to a timeout in the proxy server. There is a ServerIOTimeout parameter which is set by default to 900 seconds in WAS 8 and 9. 
This parameter can be changed via:
&nbsp;&nbsp;&nbsp;&nbsp;a. WAS console > Servers > Application Servers > <server> > Web server plug-in properties > Read/Write timeout
&nbsp;&nbsp;&nbsp;&nbsp;b. WAS console > Servers > Web servers > select your-webserver-name > click button "generate plugin" and "propagate plugin"

In order to perform time consuming operations for complex rule projects, you may have already increased the transaction timeout. In that case, make sure you have increase the proxy timeout value to a number greater than the transaction timeout value. 

If the problem persists after increasing the ServerIOTimeout value, we may need to collect below mustgather data and engage WASIHS:
&nbsp;&nbsp;&nbsp;&nbsp;a. set LogLevel debug in httpd.conf, by default LogLevel warn
&nbsp;&nbsp;&nbsp;&nbsp;b. append below lines in your virtualhost in httpd.conf
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LogFormat "%h %l %u %t \"%r\" %>s %b handler=%{RH}e JVM=%{WAS}e time=%T" latency
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CustomLog logs/latency_log latency
&nbsp;&nbsp;&nbsp;&nbsp;c. set LogLevel="Trace" in plugin-cfg.xml, by default LogLevel="Error"
&nbsp;&nbsp;&nbsp;&nbsp;d. restart IHS webserver

send us:
From IHS webserver:
&nbsp;&nbsp;&nbsp;&nbsp;a. httpd.conf, error_log, access_log, latency_log
&nbsp;&nbsp;&nbsp;&nbsp;b. plugin-cfg.xml, http_plugin.log

From WAS appserver:
&nbsp;&nbsp;&nbsp;&nbsp;a. everything from WAS_profile_name/logs/appserver_name
&nbsp;&nbsp;&nbsp;&nbsp;b. everything WAS_profile_name/logs/ffdc

6.Does ODM support Single Sign-On (SSO) authentication? How to configure DC/RES to support SSO?

**Answer:**
Both Decision Center and Rule Execution Server rely on the underlying Application Server to handle authentication and authorization. An SSO authentication is supported by ODM as long as it is supported by the Application Server. 
Refer to the documentation of the Application Server for detailed instructions of how to configure SSO authentication. 
