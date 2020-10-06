Date:2019-12-26

## Overview

The IBM Operational Decision Manager (ODM) Rule Execution Server (RES) console provides a web-based graphical interface that you use for managing and monitoring RuleApps, ruleset archives, Java™ XOMs and libraries, and transparent decision services.

Introduction to the RES Console:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/tpc_rescons_overview_intro.html

**Acronyms**
Please refer to the Acronym List
https://pages.github.ibm.com/hippo00/DBA-Education/#/OperationalDecisionManager/GeneralODM/Acronymslist

## Prerequisites

**1.General Overview:**
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.overview/topics/odm_dserver_rules_overview.html
The RES console is used for administration and monitoring.

**2.System Requirements:**
https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=129684A045A711E9A023FC8C61764AD5&osPlatforms=AIX|Linux|Mac%20OS|Windows&duComponentIds=D002|S003|S006&mandatoryCapIds=30|1|13|25|26&optionalCapIds=341|47|9|1|121|8|15|223

**3.Cluster installation for RES Console: Ideal Topology on WAS**
When clients face cluster installation issues, it is always good to check if they are using a recommended topology. On WAS: https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/topics/con_topology.html

**4.Creating the Decision Server Database**
Before you can use the Decision Server after you have installed it, you need to set the Decision Server database. 
For details:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/shared_config_topics/con_res_db.html

## Components

To understand and get familiar on with how the RES Console works, following the tutorial is the best approach.
**1.Tutorial:**
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_res_topics/tut_res_tutorials.html

**2.Debugging a remote Rule Execution Server application:**
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_res_topics/tut_debugrmt.html

#### Data Collection

**1.Must Gather for IBM Rule Execution Server:**
https://www.ibm.com/support/pages/collecting-data-reporting-problem-ibm-rule-execution-server

**2.Setting the granularity of the logs:** https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.9.2/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_monitor_evnt_log_gran.html

**3.Performance Issues:**
https://www.ibm.com/community/automation/wp-content/uploads/sites/8/2019/02/ODM89xTuningGuideV2.0.pdf

**4.Viewing the Execution Unit (XU) execution traces (also known as XU Dump)**
It is usually useful when experiencing unexpected execution results to retrieve the execution log (the XU dump). The process is described here:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/tsk_rescons_res_xu_debug_trace.htm

## Troubleshooting

**When trying to troubleshoot issues on the RES console, it is important to get access to the RES console logs, as well as version details.**

When you open the RES console, you will see two tabs that are very useful for troubleshooting:
The **Server Info** tab, and the **Diagnostics** tab.

![图片 1](https://media.github.ibm.com/user/228551/files/25dbd200-27d2-11ea-8a87-bf337c0729c1)

In the Server-Info tab, you can change the log level as shown in the above screen dump.
Also, you can see the path to the log file.
Retrieving this log for analysis, and if needed, change the Log Level to “info” or “Debug” and reproducing the issue may help the investigation.
Also, you can see details, such as version, of the Execution Units (XUs) on this page.

![图片 1](https://media.github.ibm.com/user/228551/files/4015b000-27d2-11ea-870a-dccb3e51978e)

In the Diagnostics tab, you can run diagnostics to see the status of the server. This is very useful when facing some kind of connectivity issues, as some of the above diagnostics are likely to show up as warnings or as errors.

**Other troubleshooting tips**

**1.Increase the logging level for the RES Console when working on WAS Server**
Go to WAS admin console - Troubleshooting > Logs and Trace > <SERVER_NAME> > Diagnostic Trace > Change log detail levels > Runtime 
Set the following filter:
`*=info: com.ibm.rules.res.*=fine: ilog.rules.res.*=fine`

**2.General troubleshooting tips for RES console:**
A list of common issues with the RES console and how to deal with them:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/shared_config_websphere_topics/con_support_troubleshoot_res.html

**3.Class Loading issues:**
Symptoms: you get Error 500: java.lang.NoSuchMethodError when using the RES Console
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/shared_config_topics/tsk_trblsht_class_loader_order.html

**4.Migrating RES Console from earlier version of ODM:**
For most upgrades, first check the system requirements, then follow the instructions:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/odm_topics/tsk_runtime_odm.html

**5.Client wants to avoid an outage when upgrading:**
For newer versions (after 8.8.1) it is possible to avoid an outage when migrating, using the rolling update.
Now clients may need to do it step by step (8.8.1 to 8.9.2 then 8.9.2 to 8.10.1 for instance)
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/shared_rolling_upg_topics/con_upg_odm_vn_vn3.html
If a client is migrating from an earlier version, it is not possible to avoid an outage when upgrading.

**6.Unable to login to the RES console (security issue):**
In the logs:
```
[2/8/18 6:25:04:631 EST] 00000068 SecurityManag W   SECJ0314W: Current Java 2 Security policy reported a potential violation of Java 2 Security Permission. Refer to the InfoCenter for further information.
Permission:
      logs : Access denied ("java.io.FilePermission" "logs" "read")

Code:

     ilog.rules.res.console.util.LogManager  in  {file:/websoft/IBMWebAS/profiles/profileServer/installedApps/strodmcell88/jrules-res-management.ear/jrules-res-management.war/WEB-INF/lib/generic-jrules-res-management-8.8.1.1.jar}

Stack Trace:
java.security.AccessControlException: Access denied ("java.io.FilePermission" "logs" "read")
    at java.security.AccessController.throwACE(AccessController.java:100)
    at java.security.AccessController.checkPermission(AccessController.java:174)
```
**Resolution:**
If J2C security is enabled in the server then it is required that the application provides a security policy. The RES application needs the security role definition 

Modifying the file  jrules-res-management-WAS85.ear/META-INF/was.policy  as explained below should solve the problem. 

in the block  
`grant codeBase "file:jrules-res-management.war" {`

add the line:
`permission java.io.FilePermission "logs" "read";`

**7.Other Login Issues:**
When trying to access the RES Console, error such as the following one appear:

`CWWKS9104A: Authorization failed for user user1 while invoking res on /protected/home.jsf. The user is not granted access to any of the required roles: [resAdministrators, resDeployers, resMonitors].`

**Resolution:**
To allow the users to login to the RES console, you must map the users/groups to one of the three predefined RES security roles (resAdministrators, resDeployers and resMonitors). This is documented in: https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.icp/topics/con_default_users.html
