Date:2020-01-17

## Overview

The RES Runtime is the Decision Server components used for the ruleset execution.
Its main component is the Execution Unit (XU) 
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_exec_xu.html

The XU handles the low-level aspects of ruleset execution and collaborates with the server to manage resources. It is a stand-alone deployable unit that is packaged as a resource adapter archive file (RAR) for all supported Java EE application servers. 

## Prerequisites

**Detailed System Requirements**
https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements

**Configuring the XU to connect to a TCP/IP management server**
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_xu_tcpip.html

**Deploying the XU Rar:**

On WAS Server:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/config_ds_res_was/tsk_was_deploy_xu.html

On Tomcat:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.javase/topics/odm_distrib_config_javase.html

On JBoss
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.jboss/config_ds_res_jboss/tsk_jboss_deploy_xu.html

On Java SE:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.config.javase/topics/odm_distrib_config_javase.html

## Troubleshooting

#### Data Collection

**Tuning the RES Logging Level.**

To investigate RES Runtime issues, we need to increase the Logging Level for the RES.
For details:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/trb_tuning_res_logginglevel.html Known issues

**Enabling ruleset execution monitoring**

When you need to investigate issues related to the ruleset execution, you can use the execution monitoring feature available in the Decision Warehouse.

To monitor the execution of a ruleset, add the monitoring.enabled ruleset property and set its value to true. 
If the ruleset contains tasks that use the sequential or Fastpath execution modes, add the property ruleset.sequential.trace.enabled and set its value to true. 
Optional: Add the ruleset.bom.enabled ruleset archive property and set it to false.
The analysis itself is done in the Decision Warehouse side. 

For details:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_exec_monitoring.html


**Pool Size**

Out Of Memory, or latency, due to incorrect Rule Execution Server pool size. 
When the XU execution is slow, or fails with some OutOfMemory, we need to  check the Pool Size for the XU Resource Adaptor.
The tuning for this pool size has to follow the following sizing recommendations: 
https://developer.ibm.com/answers/questions/28197/rule-execution-server-engine-pool-sizing/

**Execution Mode**

3 modes for ruleset execution are available:
RetePlus, Sequential, and FastPath
Depending on the customer application, the execution mode can affects both performance, and rule execution order. 
For instance RetePlus is not adapted to a huge number of rules. 
On the other hand, Sequential and FastPath do not support rules chaining. 
If the customer complains about rules execution order or about performance, it is recommended to double check that he has set the correct execution mode with regards to his application.
For details on what kind of Execution Mode is best for the customer application, please follow the table available here:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/optimizing_topics/tpc_opt_choose_execmode_criteria.html

**Issue:** 
**Getting a java.security.PrivilegedActionException: java.lang.reflect.InvocationTargetException**
Error shows up as:
```
Caused by: : java.security.PrivilegedActionException: java.lang.reflect.InvocationTargetException
        at ilog.rules.util.issue.IlrDefaultIssueHandler.throwException(IlrDefaultIssueHandler.java:70) [jrules-engine.jar:8.10.0.0.1]
        at com.ibm.rules.engine.load.NativeEngineLoader.loadEngineFromJarStream
```
**Solution:**
This issue occurs when the customer is using a sequential task with a huge number of rules.
A workaround is to change the execution mode. 
This is due to defect RS03340 that is now fixed in latest fix pack V8.10.2 (https://www.ibm.com/support/pages/ibm-operational-decision-manager-v8102-mod-pack)

**Issue:**
**XU Connection Lost**
In the log:
```
java.lang.NullPointerException
at ilog.rules.res.persistence.impl.jdbc.IlrDataSourceConnectionProvider.getConnection(IlrDataSourceConnectionProvider.java:136)
```
This occurs when executing rules in RES j2se if the datasource is not
resolved properly it might be null and break the error
management.

**Solution:**
This is known defect RS03096 and is fixed in recent fix packs.
For details: https://www-01.ibm.com/support/docview.wss?uid=swg1RS03096
