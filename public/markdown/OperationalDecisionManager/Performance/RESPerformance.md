Date:2019-12-18

## Overview

The IBM Operational Decision Manager Rule Execution Server (RES) is the runtime environment for running and monitoring decision services.  This document introduces the general performance tuning recommendations of the rule execution, and discusses about troubleshooting typical performance problems.

## RES Performance Tuning Recommendations

For support engineers, investigation of performance issues is limited to product defects and improper usage. Fine performance tuning is beyond the scope of standard support. We can always recommend professional services if the client wishes to pursue fine performance tuning. However, it is important that we can provide general guidance of rule execution performance tuning.
By tuning the Rule Execution Server you can decrease the amount of time and resources that are required for rule execution.

**1.Size the engine pool optimally in RES**
The XU maintains a pool of JCA connections. Each connection references a parsed ruleset instance, ready to be executed if invoked. You can configure the connection pool size through the application server when using Java EE, or in the ra.xml file when using Java SE. Set it to a value large enough so that the following conditions are met:
* Connections are available to support concurrent executions on all rulesets without causing eviction of a less requested ruleset.
* Ruleset parsing is not invoked for less frequently used rulesets.

The optimal pool size depends on the number of possible concurrent connections and the number of rulesets to execute. Take a measurement with the default size, and then increase it until you reach the memory limit. It’s never easy to calculate the correct size, because it depends on many things. The easiest way is to simulate the load and to try different values. For more information on sizing a pool, see https://www.ibm.com/support/pages/rule-execution-server-engine-pool-sizing

**2.Minimize the cost of ruleset parsing** 
Ruleset parsing occurs during the first invocation of a ruleset. When you deploy a new version of a ruleset, a parse is launched. Parsing can block the execution. The default behavior ensures that a ruleset can be executed based on its previous version, if a version exists in the cache.
You can change this default behavior by turning off the **asynchronousRulesetParsing** property. Turning this property off alters the behavior to execute the newly deployed ruleset version.
Note: asynchronousRulesetParsing is a global property of the execution unit, which affects all rulesets.
If a ruleset is used infrequently, it is removed from the connection pool. If a ruleset is called when it is no longer in the pool, it is parsed again.
 You can prevent the removal of a ruleset by setting the minimum time it stays in memory.
Set the value of the [ruleset.maxIdleTime](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_xu_timeout.html) property to 0, or to a number of seconds greater than 0. 

**3.Reduce the amount of trace messages written to the server logs**
On WebSphere Application Server and JBoss, the execution units are logged by the Java logger. On other application servers, the execution unit uses the logging service of the Java Connector Architecture (JCA).
The resource adaptor (ra.xml) traceLevel and traceAutoFlush properties control the XU logging with JCA. For the Java logger, you can change the log level through the Java logging options in the administration console.
The default trace level is Info. Set the trace level to Severe or Warning to reduce the amount of trace written to the server logs. This can significantly improve performance, especially in load testing and production environments.

**4.JVM Tuning** 
**Garbage Collector**
&nbsp;&nbsp;-&nbsp;	set the garbage collector policy to gencon
&nbsp;&nbsp;-&nbsp;	limit the number of threads for the garbage collector if you have more than 6 cores:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Xgcpolicy:gencon -Xgcthreads6

**Memory**
Additional memory can improve performance but the recommended starting heap size is:
* 1.2 GB per server for 32 bit systems, 4GB to 8GB per server for 64 bit systems (Classic Rule Engine)
* 1 GB per server (Decision Engine)

The Decision Engine use less memory than Classic Rule Engine. For existing Rule projects that want to use the new Decision Engine, we recommend making a new memory tuning, so it will reduce allocated memory on the server

**JIT configuration**
The JVM supplied with WAS 8.0.0.5+, generates more JIT code than previous versions, which can lead to longer warm-up times and lower throughput. The JIT can take time to compile a large ruleset using **Classic Rule Engine**. To resolve this performance issue, increase the cache or limit the inlining of ODM classes.
-Xjit:codeTotal=261072 -XcompilationThreads=1  ( Cache size and number of compilation threads)
-Xjit:{ilog/rules/engine/Sequential/generated/*}(disableInlining)  (Limit the inlining for one of the ODM packages)

Note: No particular JIT configuration is needed for Decision Engine. 

**Assertion configuration**
Decision Engine uses assertions. If you do not need assertions, disable assertions in the VM arguments could improve performance:
`-da or -da:com.ibm.rules.*`

**5.Optimize execution trace**
Writing traces during rules execution results in longer execution time.  You can reduce the trace size by applying filters or completely turn off execution traces.
If Decision Warehouse is used, you can optimize the execution trace by removing the BOM serialization and specifying monitoring.filters property. Refer to [Optimizing Decision Warehouse](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tpc_res_config_optim_dw_intro.html)
When invoking rulesets using rule sessions, execution traces can be sent to the response object even if DW is not used. You can disable execution trace by calling API sessionRequest.setTraceEnabled(false) or you can reduce the trace by applying filters, refer to [Setting up ruleset execution traces](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.developing/topics/con_exec_trace_setup.html)

**6.Optimize ruleset design** 
[Optimizing execution](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/optimizing_topics/tpc_optimizing_execution.html) 
Use Decision Engine
Classic rule engine is deprecated in v8.9. The decision engine is designed for concurrent execution and scalability and is much faster. Decision engine allows generating the Java Bytecode at ruleset build time, which almost eliminates the parsing time since ruleset parsing is replaced by directly loading the Java classes.
[Optimizing the decision engine](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/optimizing_topics/con_opt_decisionengine.html)
[Optimizing the classic rule engine](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/optimizing_topics/con_opt_classicengine.html)

**Choose the optimal engine execution mode**
Fastpath is optimal for applications with a large number of rules and a large number of objects. It is efficient in multi-threaded environments and is the optimal mode for decision tables. It might have a longer compilation, but it is faster at runtime.  
RetePlus is applicable for rule chaining applications. It can be useful in the case of many objects and a small number of rules. Performance is impacted as the number of rules increases. For better performance, limit the use of the “object state update” option.
Sequential is applicable for applications with a large number of rules and a small number of objects. It is efficient in multi-threaded environments. 
Starting from ODM v8.7, Fastpath is the default execution mode. For rule tasks migrated from older releases, Reteplus was the default mode. Consider switching the tasks to use Fastpath if inference is not needed. 
[Choosing an execution mode](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/optimizing_topics/tpc_opt_choose_execmode.html)

**Simply the ruleflows**
Keep ruleflows simple. Complex ruleflows reduce performance, especially with the classic rule engine. Avoid multiple layers of nested ruleflows, since deeper nesting of rules increases rule execution time. 
Reduce the use of dynamic selection in rule tasks. Use static lists of rules as much as possible.

**Reduce ruleset size**
To reduce the size of the ruleset, decrease the number and size of artifacts contained within the ruleset:
* Decrease the number of rules that are actually added to the ruleset from the rule project by using extractors.
* Limit the size of decision tables. 
* Reduce the Business Object Model (BOM) artifacts to the minimum needed, by removing any artifacts that are not used in rule construction. 
* Divide your business logic into multiple rule projects with dependencies. Split your BOM into the relevant rule projects. Find a sample project hierarchy in the below figure:
![图片 1](https://media.github.ibm.com/user/228551/files/53020200-218c-11ea-9ff2-69c8ac9903d0)

Refer to [Setting up a project hierarchy](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.dev/developing_topics/con_ds_dev_project_org.html)

## Troubleshooting
#### Data Collection

When a performance issue occurs in a RES server, it might be difficult to determine whether it is caused by the RES execution stack, the environment (application servers, networks, and client APIs such as REST), or the customer code calling the ruleset execution.

Collect as much as information to better understand the problem. Refer to
[Mustgather data of performance issue on Decision Server Execution Stack](https://www.ibm.com/support/pages/collecting-data-performance-issue-decision-server-execution-stack)

It is important to confirm the exact product version (of all related components) as there might be known performance issues which are already fixed in later releases. There are chances that the client is wrong, or may be using mixed versions, better confirm the product version from server logs and XU dumps. 

When rule session API is used, it is important to get the java code calling the rule session API. The piece of code will tell key information including
* Which rule session API is used (J2SE? POJO? EJB?) 
* How the session factory is created 
* If execution trace is enabled and filtered

High memory consumption is a common performance problem. If performance is not improved after increasing heap and restart, ask for JVM heap settings, XU dump, heap dump and etc. For details, refer to analysis of [Out Of Memory](https://pages.github.ibm.com/hippo00/DBA-Education/#/OperationalDecisionManager/Performance/OOM)

In case of high CPU usage or hung threads, ask for thread dump/javacores. Refer to analysis of  [Hung thread & high CPU](https://pages.github.ibm.com/hippo00/DBA-Education/#/OperationalDecisionManager/Performance/Hungthread&highCPU)

**Typical performance problems**

1.Slow response of ruleset request
**Symptom:**
Poor performance at ruleset execution is observed. The client may complain that the response time is several seconds or even longer than 1 minute, while the ruleset execution usually takes around 100ms. 
**Resolving the problem:**
Note: Ruleset execution time = Ruleset parsing time + Actual ruleset execution time
First confirm if the slow response time is only observed at the first execution after server restart, or if the execution slows down intermittently. In those cases, ruleset parsing time is most likely the culprit of long execution. You can confirm this by looking for the ruleset parsing messages in the “logs” page of the XU dump, such as:
`Ruleset /test_deployment/1.0/loan_validation_production/1.0 was parsed in 12 s`

You can reduce the ruleset parsing time by:
* Call IlrManagementSession.loadUptodateRuleset() to trigger ruleset parsing before first execution
* set ruleset.maxIdleTime property to keep the ruleset in the cache even when it is not invoked

On the other hand, if the slow response is always reproducible for a particular ruleset, you need to determine the actual ruleset execution time to rule out other factors affecting the performance, such as database lookups and network latency. You can find the actual ruleset execution time in the Statistics page of the XU dump, as shown in below figure:
![图片 2](https://media.github.ibm.com/user/228551/files/f81cda80-218c-11ea-80f8-ceb7b78ec8b3)
The same statistics is also available in the [Ruleset Statistics View](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/tpc_rescons_rulst_exec_statviews.html) of the RES console.

If the actual execution time is indeed very long, ask the client to send the Decision Service/rule projects as well as the depending XOM projects/jars in order to reproduce the problem. 

There are also cases that the execution of all the rulesets dramatically slow down during high production load. Intensive CPU usage is often observed in this situation. Refer to analysis of  [Hung thread & high CPU](https://pages.github.ibm.com/hippo00/DBA-Education/#/OperationalDecisionManager/Performance/Hungthread&highCPU)

Another common scenario is that the actual execution time is short, but the client application takes much longer time to receive the response. One possible factor is the time spent on generating and saving the execution trace. By default, Decision Warehouse captures all execution trace data, including some data that are less useful, such as the list of all the rules that the engine did not execute. The complete execution trace data can be huge for big and complex ruleset. 

You can ask the client to quickly disable the execution trace from the RES console by setting monitoring.filters=false. If the response time is significantly reduced after disabling the execution trace, suggest the client to completely disable the execution trace, or to reduce the traces written to the database. Refer to [Optimizing Decision Warehouse](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tpc_res_config_optim_dw_intro.html)

If the client complains about slow response and very frequent database access during rule executions, it is a good indication that Decision Warehouse is used. If an XU dump is already received, you can confirm the monitoring properties (as well as any other ruleset properties) form the “Caches” page in the XU dump, by clicking on “details” button of the particular ruleset. 

![图片 3](https://media.github.ibm.com/user/228551/files/4500b100-218d-11ea-9dc2-4189de102b42)

If the client invokes ruleset using rule session API, execution traces can be sent to the response object even when Decision Warehouse is not used. The full execution trace can be huge for a big and complex project, which may result in noticeable network latency. You can ask the client to disable the execution trace by calling API sessionRequest.setTraceEnabled(false) or to reduce the trace by applying filters, refer to [Setting up ruleset execution traces](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.developing/topics/con_exec_trace_setup.html)

2.Ruleset is parsed at each execution in J2SE 
**Symptom:**
When invoking a ruleset through J2SE session, the ruleset seems to be parsed at each execution and every subsequent execution is as slow as the first one. 
**Resolving the problem:**
This is expected if you create new instance of IlrJ2SESessionFactory for each client execution.
In the J2SE environment, a local J2SE provider (IlrJ2SERuleSessionProvider) is employed when Rule Execution Server is used inside the same JVM. Each provider has its own Execution Unit (XU).
We recommend that the provider be shared and reused across clients. Make sure you create an instance of IlrJ2SESessionFactory such that it is shared across clients and rule executions. For example, keep a static reference to the session factory or implement a singleton design pattern to hold a shared reference to the session factory.  Recreating the session factory at each execution increases the CPU and memory consumption because the session factory creates and destroys a XU pool each time and does not allow sharing engine and ruleset resources across clients.
You can find sample code in [J2SE session sample](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.samples/res_smp_topics/smp_res_javase.html)

3.Memory leak when using HTDS JSON
**Symptom:**  
When invoking HTDS with JSON payload, the system memory usage keeps growing after days of execution. Eventually the server may crash due to OutOfMemory error. 
**Resolving the problem:**
It is caused by APAR [RS03125](https://www-01.ibm.com/support/docview.wss?uid=swg1RS03125), that the XOM Classloaders are not released from memory and creates a memory leak. The problem only occurs when JSON payload is used. 
The library used to transform the json text into java objects creates a cache to convert classes. This cache hold reference to the XOM classloader and can lead to a memory leak if the cache is not flushed.  This APAR is already fixed in ODM v8.8.1.4, v8.8.9.2, v8.10.2. The fix is included to flush the cache so that the reference to XOM classloader can be removed. It does not impact current execution, if the classloader is used it will not be released.
The number of XOM that is created is related to the number of rulesets executed, the idle timeout for each ruleset, the size of the classloader and the size of the heap.
The com.ibm.rules.htds.resetJsonMapperXomClassloaderInstancesThreshold property define the number of XOM classloaders to be cached after the cache is flushed. The value "10" is recommended in most case.  There is no generic optimal number, it has to be large enough to benefit from the cache and small enough to trigger the action before the memory is full.     
Refer to [Managing memory consumption when using HTDS](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/trb_res_htds_mem_leak.html)

#### Reference 
1.[Improve performance of ODM, Part 1, Reduce Rule Execution Time](https://www.ibm.com/developerworks/bpm/bpmjournal/1503_siddiqui1/1503_siddiqui1.html) 
2.[Improve performance of ODM, Part 2, Reduce rule execution resource consumption](https://www.ibm.com/developerworks/bpm/library/techarticles/1505_siddiqui2/1505_siddiqui2.html)
3.[Improve performance of ODM, Part 3, Reduce response times for HTDS](https://www.ibm.com/developerworks/bpm/library/techarticles/1505_siddiqui3/1505_siddiqui3.html)





