Date:2019-12-17

## Overview

This section on IBM Operational Decision Manager (ODM) explains:
* How to set the Java Virtual Machine (JVM) properties to tune the general performance.
* How to diagnose memory problems.

## Prerequisites

1.Knowledge about Java Garbage Collection (GC) policies
2.Knowledge about Java memory settings

## Component

* Out of memory in Java heap
  - The JVM throws Java out of memory (Java OOM) error if it is not able get more memory in Java heap to allocate more Java objects. The JVM cannot allocate more Java objects if the Java heap is full of live objects and it is not able to expand the Java heap anymore.
In this situation, the JVM lets the application decide on what to do after throwing the java.lang.OutOfMemoryError. For example, the application may handle this error and decide to shut itself down in a safe way or decide to run, ignoring this error. If the application does not handle this error, then the thread that throws this error will exit, and you will not see this thread if you take a Java thread dump.
* Out of memory in native heap 
  - The JVM throws native out of memory (native OOM) if it is not able to get any more native memory. This usually happens when the process reaches the process size limitation on that OS or the machine runs out of RAM and swap space.
When this happens, the JVM handles the native OOM condition, logs a message saying that it ran out of native memory or unable to acquire memory and exits. If the JVM or any other loaded module (like libc or a third party module) does not handle this native OOM situation, then the OS will send a sigabort signal to the JVM which will make the JVM exit. Usually, the JVMs will generate a core file when it gets a sigabort signal.
* IBM GC policy
  - Garbage collection policies:
    - Part 1: https://www.ibm.com/developerworks/java/library/j-ibmjava2/
    - Part 2: https://www.ibm.com/developerworks/java/library/j-ibmjava3/
  - WAS GC policies:
    - Part 1: https://www.ibm.com/developerworks/websphere/techjournal/1106_bailey/1106_bailey.html
    - Part 2: https://www.ibm.com/developerworks/websphere/techjournal/1108_sciampacone/1108_sciampacone.html
* ODM JVM setting recommendation(Latest):

<table border="1px solid #ccc" cellspacing="0" cellpadding="0" width="400">
  <tr style="background-color:white">
    <td></td>
    <td>32-bit JVM</td>
    <td>64-bit JVM</td>
  </tr>
  <tr style="background-color:white">
    <td style="background-color:white">Initial Heap Size</td>
    <td>1.2GB</td>
    <td>4GB to 8GB</td>
  </tr>
  <tr style="background-color:white">
    <td style="background-color:white">Maximum heap size </td>
    <td>NA</td>
    <td>NA</td>
  </tr>
  <tr style="background-color:white">
    <td style="background-color:white">Generated JVM arguments</td>
    <td>-gencon GC</td>
    <td>-gencon GC</td>
  </tr>
</table>

## Troubleshooting

#### Data Collection

1.MustGather: Out of Memory errors with WebSphere Application Server ND & Liberty
&nbsp;&nbsp;&nbsp;&nbsp;a. On AIX, Linux, or Windows: https://www.ibm.com/support/pages/mustgather-out-memory-errors-websphere-application-server-aix-linux-or-windows
&nbsp;&nbsp;&nbsp;&nbsp;b. On Solaris: https://www.ibm.com/support/pages/mustgather-out-memory-errors-websphere-application-server-solaris-heap-leak

2.MustGather: Out of Memory errors with Oracle WebLogic:
&nbsp;&nbsp;&nbsp;&nbsp;a. The default location of WebLogic logs: [WebLogic_Home]/user_projects/domains/[your domain]/servers/AdminServer/logs
&nbsp;&nbsp;&nbsp;&nbsp;b. Enable verbose GC: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)For Java OOM:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**General:** -verbose:gc, -XX:+PrintGCDetails, and -XX:+PrintGCTimeStamps. Xloggc:could also be specified to redirect the GC detailed stats to an output file. It is important to understand that the overhead for basic GC is null except for some disk space consumed by the log file (See Java HotSpot VM Options for more details).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**For JRockit:** -Xverbose:gc,gcpause,memdbg(See JRockit Command-Line Options for more details).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)For native OOM: Change the -Xverbose:gc to -verbose for JRockit.
&nbsp;&nbsp;&nbsp;&nbsp;c. Collect heap dump and thread dump(For open JDK and Oracle JDK):
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Identify the process id of your application server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Using jstack -l pid to get the thread dump. E.g. jstack -l pid >> dump.log
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Using jmap command to get heap dump. E.g. jmap -dump:format=b,file=/path/to/the/dump.hprof pid

3.MustGather: Out of Memory errors with JBoss
&nbsp;&nbsp;&nbsp;&nbsp;a. The default location of JBoss logs: https://access.redhat.com/documentation/en-us/red_hat_jboss_data_virtualization/6.2/html/administration_and_configuration_guide/default_log_file_locations
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Enable verbose GC: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Enable basic GC info: -verbose:gc –Xloggc:logFileName
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)More detailed info is required:  –XX:+PrintGCDetails -XX:+PrintGCDateStamps -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=5 -XX:GCLogFileSize=3M -XX:-TraceClassUnloading
&nbsp;&nbsp;&nbsp;&nbsp;c. Collect heap dump and thread dump(For open JDK and Oracle JDK): Same as WebLogic collection method

4.MustGather: Out of Memory errors with Tomcat
&nbsp;&nbsp;&nbsp;&nbsp;a. The default location of Tomcat: /opt/bitnami/apache-tomcat/log
&nbsp;&nbsp;&nbsp;&nbsp;b. Enable verbose GC:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-XX:+PrintGCDetails 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-XX:+PrintGCApplicationStoppedTime 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-XX:+PrintGCApplicationConcurrentTime 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-XX:+PrintHeapAtGC 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Xloggc:logs/gc.log"
&nbsp;&nbsp;&nbsp;&nbsp;c. Collect heap dump and thread dump (For open JDK and Oracle JDK): Same as WebLogic collection method.

5.Related RES configuration, including following part: https://www.ibm.com/support/pages/collecting-data-reporting-problem-ibm-rule-execution-server
6.Related Decision Center configuration, specific to issues.

#### Data Analysis

1.Tools to analyze OOM
&nbsp;&nbsp;&nbsp;&nbsp;a. Run “Memory Analyzer [Report]” on the heap (.phd) dumps and system core dumps (.dmp).
&nbsp;&nbsp;&nbsp;&nbsp;b. Run “PaLern Modeling and Analysis Tool (PMAT) [Report]” and/or Garbage Collection and Memory Visualizer (GCMV) [Report’\]” on the verboseGCdata on ECuRep.
&nbsp;&nbsp;&nbsp;&nbsp;c. Run “Thread and Monitor Dump Analyzer (TMDA) [Report]” on javacore file(.txt). Although for OOM issues, thread dump is just for reference as it is almost a result of OOM.

2.How to troubleshoot OOM for Rule Execution Server (RES): 
&nbsp;&nbsp;&nbsp;&nbsp;a. Collect system log and all trace: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/trb_tuning_res_logginglevel.html
&nbsp;&nbsp;&nbsp;&nbsp;b. Collect XU dump: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/tsk_rescons_res_xu_debug_trace.htm
&nbsp;&nbsp;&nbsp;&nbsp;c. Collect heap dump, GC logs and run tools to analyze, try to find possible memory leak or possible known issues.

3.How to troubleshoot OOM for Decision Center (DC):
&nbsp;&nbsp;&nbsp;&nbsp;a. Check system logs, heap dumps and GC logs
&nbsp;&nbsp;&nbsp;&nbsp;b. Find timestamp when OOM happens (in System logs) and Run tools to analyze the heap dump, GC logs to see if there is suspect memory leak or know issues (Find in Support Search & RTC)
&nbsp;&nbsp;&nbsp;&nbsp;c. Tuning JVM:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Set proper heap size: Recommend 4G – 16G for each DC server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	User -gencon GC policy
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	If CPU cores > 6, limit the number of GC threads to 6
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Disable Java2Security 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Limit consumption of memory: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)disable the “Archive parsing flag” option (Project > Edit project options > Check the ruleset archive)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Use Automatic build to avoid a ruleset generation cost at “first ruleset generation”.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Set in the installation manager the configuration parameter teamserver.build.archive.storage to ‘file’, which is default.

**Typical Issues**
1.OOM issue when running simulation on RES:
&nbsp;&nbsp;&nbsp;&nbsp;a. **Symptom:** OOM error in the logs when running simulation with too many scenarios.
&nbsp;&nbsp;&nbsp;&nbsp;b. **Solution:** Tuning Decision Runner (https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/tsk_drunner_tuning.html)

2.OOM issue on ruleset parsing:
&nbsp;&nbsp;&nbsp;&nbsp;a. **Symptom:** In RES logs and XU dump, there are many rulesets are parsing and re-parsing again after some time.
&nbsp;&nbsp;&nbsp;&nbsp;b. **Solution:** 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Increase XU connection pool: https://www.ibm.com/support/pages/rule-execution-server-engine-pool-sizing
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Manage XU cache timeout policy: https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_xu_timeout.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Using Decision Engine Instead: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/executing_decision_topics/tsk_exec_decisionengine.html
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4)Increase heap size

3.OOM issue when using HTDS:
&nbsp;&nbsp;&nbsp;&nbsp;a. **Symptom:** There is memory leak in decision service (HTDS) REST API with JSON parameters
&nbsp;&nbsp;&nbsp;&nbsp;b. **Solution:** Managing memory consumption when you use the hosted transparent decision service (https://www.ibm.com/support/pages/managing-memory-consumption-when-you-use-hosted-transparent-decision-service)
Note: For above OOM issues on RES, please refer to the [RES Performance](https://pages.github.ibm.com/hippo00.github.io/DBA-Education/#/OperationalDecisionManager/Performance/RES%20Performance) document. 

4.OOM issue on DC:  https://pages.github.ibm.com/hippo00.github.io/DBA-Education/#/OperationalDecisionManager/Performance/Decision%20Center%20Performance

#### Reference

1.[Oracle Weblogic : Troubleshooting Out of Memory and Memory Leak Problems](https://middlewaretimes.blogspot.com/2014/03/oracle-weblogic-troubleshooting-out-of.html)
2.[How to Deal With Out Of Memory Errors on Tomcat](https://cwiki.apache.org/confluence/display/tomcat/OutOfMemory)
3.[Diagnosing Peformance issue on JBoss](https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html/performance_tuning_guide/diagnosing_performance_issues)
4.[Jstack utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr016.html)

