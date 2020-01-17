Date:2020-01-15

## Overview

Database performance is essential for overall BPM/BAW system performance. BPM Database Performance Fundamentals Education focuses on what you can learn from the BPMDB database in IBM BPM/BAW to prevent problems and troubleshoot issues. This module serves as the basis for in-depth education modules on BPM/BAW database performance related issue.


## Prerequisites

We should have a basic knowledge about BPM system performance, and how to monitor a BPM infrastructure.

[5 Things to Know About IBM BPM Performance Tuning](https://www.ibm.com/developerworks/community/blogs/5things/entry/5_things_to_know_about_ibm_bpm_performance_tuning?lang=en)
[BPM Monitoring overview](https://support.bp-3.com/hc/en-us/articles/201297396-BPM-Monitoring-overview)


## Component

IBM BPM/BAW uses a relational database not only for persisting the state of business processes and tasks, it also leverages the multi-user concurrency and transactional features of the database to guarantee integrity and consistency in a multi-user clustered BPM environment. A well-tuned database and database infrastructure is key to performance.

For every database system, there is set of best practices and recommendations available as books, product documentation, or on the web. Examples for best practices are monitoring the database periodically, keeping the optimizer statistics up to date, keeping track of changes, and so on. These best practices are also valid in the context of BPM/BAW. See Chapter 5, “Database configuration, tuning, and best practices” in **redbook** [IBM BPM V8.5 Performance Tuning and Best Practices](http://www.redbooks.ibm.com/abstracts/sg248216.html?Open) for a detailed description about this topic.

You can follow common database best practices here, that are important for a healthy and well performing BPM database.

1.Table spaces

Using table spaces allows for flexibly balancing the I/O load between different disk drives or other attached storage and to tune caching for large objects (LOBs).

2.Transaction log considerations
&nbsp;&nbsp;&nbsp;&nbsp;a. Place database log files on a fast disk subsystem.
&nbsp;&nbsp;&nbsp;&nbsp;b. Place database log files on a separate device from the table space containers.

3.Memory

The sensible approach is to provision enough memory to avoid most disk reads in steady state for many performance-critical workloads. Be careful to avoid virtual memory paging in the database machine. Care needs to be taken when multiple DBs are located on the same server. To avoid paging, the combined maximum memory settings should not exceed the physical memory in the machine.

4.Statistics

Statistics, which describe the shape of the data, are used to guide the selection of a low-cost data access strategy. Examples of statistics include the number of rows in a table and the number of distinct values in a certain column. Gathering statistics can be expensive, but fortunately, for many workloads, a set of representative statistics allows for good performance over a large span of time. Refreshing statistics periodically if the data population shifts dramatically might be necessary.

5.Tuning queries
&nbsp;&nbsp;&nbsp;&nbsp;a. Monitor top SQL statements
&nbsp;&nbsp;&nbsp;&nbsp;b. Add indexes as required
&nbsp;&nbsp;&nbsp;&nbsp;c. Optimization profiles

6.Delete completed process instances

Over time, completed process instances accumulate in the database of the servers. This accumulation can alter the performance characteristics of the solution being measured. Delete or archive completed process instances to ensure that the database size is controlled. Refer to [Managing persisted data](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/persisted_data.html) or [Housekeeping Fundamentals Education](https://pages.github.ibm.com/dba-support/DBA-Education/#/BusinessProcessManager/Performance/Housekeeping) including of this subject.

7.Data source configuration
&nbsp;&nbsp;&nbsp;&nbsp;a. Maximum Connections
&nbsp;&nbsp;&nbsp;&nbsp;b. Prepared statement cache size


## Troubleshooting

 <Guides to reverse engineer what areas of the data should be reviewed/investigated in order to resolve a problem related to the subject component>

In the Data Collection section you will find a short summary of data which will help to troubleshoot database performance problems (more detailed explanations can be found in the References for Db2 and Oracle. SQL Server was not published yet, but methods are similar to the other databases).

#### Data Collection

1.The data distribution in the database system is one central part. There have been a number of customer situations where a non-existing housekeeping led to a poor database performance. The commands shown here are database system specific (they collect data distribution information as well as information on collected statistics).
**Most of the statements apply to BPM Standard only except the first two statistics statements which also apply to Advanced and should be collected (further statements for Advanced exist but need to get in a sharable state)**
&nbsp;&nbsp;&nbsp;&nbsp;a. Db2: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://github.com/stephan-volz/database-scripts/blob/master/DB2_ProcessInstances_Tasks.txt
&nbsp;&nbsp;&nbsp;&nbsp;b. Oracle:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://github.com/stephan-volz/database-scripts/blob/master/Oracle_ProcessInstances_Tasks.txt
&nbsp;&nbsp;&nbsp;&nbsp;c. Microsoft SQL Server:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://github.com/stephan-volz/database-scripts/blob/master/SQLServer_ProcessInstances_Tasks.txt

2.Database system performance data: Normally it is not obvious if there is a bottleneck at the database at all. All supported database systems have corresponding monitoring tools in place which allow to identify main bottlenecks on the database system.
&nbsp;&nbsp;&nbsp;&nbsp;a. Db2:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Quickly executable without bigger performance impact on the database system are the Db2 in-memory monitoring views (the first one will run  for 5 minutes before the prompt returns!): **(You need to be connected to the database in question)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db2 "call monreport.dbsummary(300)"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db2 "call monreport.pkgcache(30)" 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)If a specific SQL statement is already identified a db2support output with the db2exfmt output of the statement in question will be required. Else the db2support output can only give system configuration information and also includes Db2 logs (db2diag.log especially).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)If there is an indication of lock contention enable a lock event monitor on the database side in combination with database tracing on the BPM side `(org.springframework.jdbc.*=all:WAS.clientinfopluslogging=all:com.ibm.bpm.rest.*=all additional BPM tracing can be required based on the scenario)`
&nbsp;&nbsp;&nbsp;&nbsp;b. Oracle:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)For performance problems on Oracle you want an AWR report (1 hour timeframe when the problem was observed). Most Oracle customers have the AWR report (extra payable)  feature, if not you can try a StatsPack report.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)If specific SQL statements are already being identified an explain output of the statement in question will be required.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Last but not least the alert.log might include some additional information if above does not give sufficient hints (DBAs will know where to find this file). It is also useful for functional issues.
&nbsp;&nbsp;&nbsp;&nbsp;c. Microsoft SQL Server:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)The best tool for debugging performance questions is the SQL Profiler which does also allow to enable a deadlock graph for lock contention questions. Corresponding trace can be imported on a local SQL Server installation
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)For a general overview there exists the option of a Management Data Warehouse

3.System monitoring (CPU, memory, I/O, network) data from BPM and database system (e.g. with nmon, nagios or other tools)

#### Data Analysis

1.Check for the last time statistics have been collected (empty fields can indicate that statistics have never been collected) several months earlier could be considered outdated. Check for large amounts of overflow records (mainly Db2) and verify that the ratio between active and completed instances does not exceed a reasonable amount (e.g. 1 to 2, similar numbers are possible and better) 

2.Specially check the Wait time for all kind of database system. With high workloads some wait time can not be avoided: In a Db2 in-memory report the ratio of the wait time to elapsed time over 10% should be further checked (a split down is given in the lower part of the output, the package cache view can give further insights on specific statements and long execution times). Oracle: In an one hour AWR report, wait times above 5000 secs  should be further checked (top at the AWR report). The AWR report is structured to address different views on the performance: General system performance, SQL statistics and segment statistics are three key sections which should be checked for a database performance issue. For more details on wait times check the references below.  

3.Depending on the situation you might observe long running SQL statements (> 1 sec), sometimes also execution times below 1 second can be a problem if the number of executions is large. Check the statements with the most execution/wait time in summary (a single long running statement executed once in an hour might be negligible). If locking is an issue (mostly seen for Db2) check the transactions participating (also check for lock escalations in the db2diag.log -> db2support output). 

4.Check the system monitoring data, sometimes database systems running on 100% CPU or slow disk I/O is a bottleneck which can impact the whole environment.


## Reference

1.https://www.ibm.com/developerworks/bpm/bpmjournal/1509_volz1-trs/1509_volz1.html
2.https://www.ibm.com/developerworks/bpm/bpmjournal/1509_volz2-trs/1509_volz2.html
3.https://www.ibm.com/developerworks/library/mw-1702-volz-trs/1702-volz.html
