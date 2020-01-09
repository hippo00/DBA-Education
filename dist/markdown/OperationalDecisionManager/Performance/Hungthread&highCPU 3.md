Date:2019-12-17

## Overview

This section describes how to diagnose IBM Operational Decision Manager (ODM) high CPU and hung thread issues.

## Prerequisites

Knowledge about Java Virtual Machines (JVM)
Knowledge about operating system commands

## Components

1.Rule Execution Server (RES): Rule Execution Server provides a reliable and scalable execution environment for your business rule application.
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_overview_intro.html

2.Execution Unit (XU): The Execution Unit is a resource adapter for Java™ EE Connector Architecture (JCA) 1.5. The XU handles the low-level aspects of ruleset execution and collaborates with the server to manage resources.
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_exec_xu.html

3.Decision Center (DC): With Decision Center, business users can author, model, and manage decisions that are directly based on organizational knowledge and best practices, with limited or no dependence on the IT department.
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.overview/topics/odm_dcenter_overview.html

## Troubleshooting

#### Data Collection

1.CPU Utilization, disk I/O, network and memory and paging: Using operating-system-specific tools such as **perfmon** for Windows, or **iostator vmstat** for Linux and UNIX
2.For WebSphere Application Server (WAS):
&nbsp;&nbsp;&nbsp;&nbsp;a. Linux: https://www.ibm.com/support/pages/mustgather-performance-hang-or-high-cpu-issues-websphere-application-server-linux
&nbsp;&nbsp;&nbsp;&nbsp;b. Windows: https://www.ibm.com/support/pages/mustgather-performance-hang-or-high-cpu-issues-windows
&nbsp;&nbsp;&nbsp;&nbsp;c. AIX: https://www.ibm.com/support/pages/mustgather-performance-hang-or-high-cpu-issues-websphere-application-server-aix
&nbsp;&nbsp;&nbsp;&nbsp;d. Solaris: https://www.ibm.com/support/pages/mustgather-performance-hang-or-high-cpu-issues-solaris
3.For other application servers
&nbsp;&nbsp;&nbsp;&nbsp;a. Collect application server logs 
&nbsp;&nbsp;&nbsp;&nbsp;b. Collect verboseGC log
&nbsp;&nbsp;&nbsp;&nbsp;c. Collect java core files
&nbsp;&nbsp;&nbsp;&nbsp;d. Collect heap dump if needed.
4.Collect traces: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/trb_tuning_res_logginglevel.html
5.Collect XU dumps: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/tsk_rescons_res_xu_debug_trace.html

#### Data Analysis

1.How to troubleshoot a typical CPU high and hung thread issue: https://ibm.ent.box.com/file/540528960107
2.If the issue happens in RES, we must do more work. 
&nbsp;&nbsp;&nbsp;&nbsp;a. We need to check XU dump: It is better if we can have XU dump before the issue happens, during the issue happens and after the issue happens.
&nbsp;&nbsp;&nbsp;&nbsp;b. We need to check XU connection pool size to see if the pool size needs to be adjusted.

![图片 1](https://media.github.ibm.com/user/228551/files/5fa82c80-209e-11ea-90ee-a72a7c116029)

&nbsp;&nbsp;&nbsp;&nbsp;c. Sometimes we need to know the method customer used to call rulesets. Then we can find more clues about how XU clients works.

**Typical Issues**

1.High CPU issue caused by infinite loop
&nbsp;&nbsp;&nbsp;&nbsp;**a. Symptom:** 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)We can see in the log the hung thread stack is repeating in thread dump reports. For example:
```
at 
com/ibm/rules/generated/ruleflow/ruleflows/subflows/ratings/USDC$003ePos
tProcessing$0020Part$00202/BodyExecEnv.executePopulateNoticeURLForCGLBod
y70(Bytecode PC:25(Compiled Code)) 
at 
com/ibm/rules/generated/ruleflow/ruleflows/subflows/ratings/USDC$003ePos
tProcessing$0020Part$00202/BodyExecEnv.$sMethod$4(Bytecode 
PC:127(Compiled Code)) 
at 
com/ibm/rules/generated/ruleflow/ruleflows/subflows/ratings/USDC$003ePos
tProcessing$0020Part$00202/BodyExecEnv.executeBodyMethodHook(Bytecode 
PC:127(Compiled Code)) 
at 
com/ibm/rules/engine/rete/runtime/state/AbstractBodyExecEnv.executeBody(
AbstractBodyExecEnv.java:82(Compiled Code)) 
at 
com/ibm/rules/engine/rete/runtime/state/AbstractNetworkState.executeRule
(AbstractNetworkState.java:204(Compiled Code)) 
at 
com/ibm/rules/engine/rete/runtime/AbstractReteEngine.executeOneRule(Abst
ractReteEngine.java:468(Compiled Code)) 
at 
com/ibm/rules/engine/rete/runtime/AbstractReteEngine.execute(AbstractRet
eEngine.java:443(Compiled Code)) 
at 
com/ibm/rules/engine/rete/runtime/AbstractReteEngine.execute(AbstractRet
eEngine.java:420(Compiled Code)) 
at 
com/ibm/rules/generated/ruleflow/ruleflows/subflows/ratings/USDC$003ePos
tProcessing$0020Part$00202/Task.run(Bytecode PC:156)
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Diagnose steps:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.Collect logs, traces and javacores;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.Collect heap dumps;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.Compare several reports of javacores, you will see some thread is always running, and it will use a lot of CPU in the report of CPU usage. Then you can find the stack trace similar to the stack trace above or the stack trace is about ODM classes.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.If the infinite loop is caused by the client's ruleflow, suggest this document:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/pages/rete-rules-executing-infinite-loop
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And then we can suggest to set the property **firinglimit** to avoid infinite loops.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.dev/orchestrating_topics/tpc_orch_rule_task_execprop.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.If the infinite loop is caused by ODM code, we need to engage developers to investigate further.
  
2.High CPU issue caused by JIT compilation threads:
&nbsp;&nbsp;&nbsp;&nbsp;a. Symptom: Following records can be seen
```
3XMTHREADINFO      "JIT Compilation Thread-3" J9VMThread:0x0000000000A32D00, omrthread_t:0x00007F3470115C68, java/lang/Thread:0x00000005806B9920, state:R, prio=10
3XMJAVALTHREAD            (java/lang/Thread getId:0xE, isDaemon:true)
3XMTHREADINFO1            (native thread ID:0x69, native priority:0xB, native policy:UNKNOWN, vmstate:CW, vm thread flags:0x00000081)
3XMTHREADINFO2            (native stack address range from:0x00007F344E22E000, to:0x00007F344E32F000, size:0x101000)
3XMCPUTIME              CPU usage total: 750.137131485 secs, current category="JIT"
3XMHEAPALLOC             Heap bytes allocated since last GC cycle=0 (0x0)
3XMTHREADINFO3           No Java callstack associated with this thread
3XMTHREADINFO3           Native callstack
```
b. Diagnose steps:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Check the logs and CPU profiling reports;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Check java cores and heap dumps and find out the most CPU consuming part
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Check the number of threads associated to JIT compiling, by default it is 4 which could take almost 100 % CPU on a small box of 2 cores.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4)Tuning JIT configuration:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;–The JVM supplied with WAS 8.0.0.5 and further versions generates more JIT code than previous versions, which can lead to longer warm-up times and lower throughput.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;–The JIT can take time to compile a large ruleset, but this behavior can be modified by increasing the cache or by limiting the in lining on ODM classes.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•-Xjit:codeTotal=261072 -XcompilationThreads=1                              Cache size and number compilation threads
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•-Xjit:{ilog/rules/engine/Sequential/generated/*}                              Limit the in lining for one of the ODM package

#### Reference

1.[Fix List for IBM Operational Decision Manager](https://www.ibm.com/support/pages/fix-list-ibm-operational-decision-manager)
2.Known APAR: [RS03132: POSSIBLE THREAD CONTENTION IN HTDS RESULTING IN HIGH CPU USAGE](https://www-01.ibm.com/support/docview.wss?uid=swg1RS03132)

