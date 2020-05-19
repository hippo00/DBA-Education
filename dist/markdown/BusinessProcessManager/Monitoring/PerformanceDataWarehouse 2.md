Date:2020-01-17

## Overview

The Business Performance Data Warehouses in your IBM® Business Automation Workflow configuration retrieve and store tracked performance data, which enables users in IBM Process Designer to create reports and also analyze processes using the Optimizer.

This document provides an overview of Performance Data Warehouse components and some troubleshooting tips

## Components

1.[Accessing the Performance Data Warehouse user interface](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/managing_performance_servers.html)

With this web interface, you can view different aspects of your Performance Data Warehouse:
![图片 1](https://media.github.ibm.com/user/228551/files/2879a500-3902-11ea-92e2-0ebb8434f160)

2.Administration of Performance Data Warehouse

The tracking data is not automatically removed, and you need to run a prune task on a regular basis in order to keep your system operational. There are two options to perform this task:
[Using the command line tool perfDWTool](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/using_perfsvr_commands.html) or using the [Process Admin Console Health Management Task Prune PDW](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/bpm_db_health_pdw_delete.html). See also the article [How to use the perfDWTool prune command?](https://pages.github.ibm.com/klaus-ulrich/dwanswers/pdw/how-to-use-the-perfDWTool-prune-command/) when using the command line tool.

3.[Enabling processes for tracking and reporting](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/tpd_designtracking.html)
This section describes all the details about enabling tracking data and what data can be captured

## Troubleshooting

The errors on the Performance Data Warehouse subsystem can be categorized into the following areas

1.System overload:
&nbsp;&nbsp;&nbsp;&nbsp;a.Too much tracking data on the database, which slows down the processing
&nbsp;&nbsp;&nbsp;&nbsp;b.High rate of generated tracking data
2.Performance Data Warehouse Database setup inconsistent


**1.a: Too much tracking data on the database, which slows down the processing**

**Symptoms:**
The system runs fine for quite some time and at one day, the overall performance slows down. The reason is, that there is more and more data stored on the database and all the SQL queries running slower over the time.
**Solution:** 
First, tune your database to speed up the SQL processing
Second, get rid of old tracking data using the purge command (see section above 2. Administration of Performance Data Warehouse)
If none of that helps to get your system back to normal processing, you might need to regenerate the Performance Data Warehouse database. See [How to clean up the Performance Data Warehouse database and the LSW_PERF_DATA_TRANSFER table for IBM Business Process Manager (BPM)](https://www.ibm.com/support/pages/how-clean-performance-data-warehouse-database-and-lswperfdatatransfer-table-ibm-business-process-manager-bpm) for further details on this topic.

**1.b: Too high rate of generated tracking data**

**Symptoms:** 
There is no current tracking data displayed in the performance dashboards and/or on the tracking database tables. Additional to that, there are many entries in the BPM database table LSW_PERF_DATA_TRANSFER. This is an indication, that your system cannot handle the load of your generated tracking data.
**Solution:**
1)Check if there is autotracking enabled. In most cases, autotracking is not used to track your business and you can disable autotracking in all your processes. See [Autotracking performance data for BPDs](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/cautotracking.html) and [Setting up autotracking](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/pg_gen_set_up_autotrak.html)
2)Reduce the generation of tracking data if possible

**2.Performance Data Warehouse Database setup inconsistent**

**Symptoms:**
You see errors listed under View Errors in the Performance Admin Console and you see PFS-0065 and/or PFS-0066 error code exceptions in the SystemOut.log of your server, which are related to tracking data processing.
**Solution:**
See article [How to resolve Business Performance Server Data Transfer Errors (PFS-0065)?](https://pages.github.ibm.com/klaus-ulrich/dwanswers/pdw/how-to-resolve-data-transfer-errors-PFS-0065/) ([external document](https://www.ibm.com/mysupport/s/question/0D50z00005phpFwCAI/how-to-resolve-business-performance-server-data-transfer-errors-pfs0065?language=zh_CN#answer-168166)) and [How to resolve Business Performance Server Data Transfer Errors (PFS-0066)?](https://pages.github.ibm.com/klaus-ulrich/dwanswers/pdw/how-to-resolve-data-transfer-errors-PFS-0066/) ([external document](https://www.ibm.com/mysupport/s/question/0D50z00005pgiEvCAI/how-to-resolve-business-performance-server-data-transfer-errors-pfs0066?language=en_US))

#### References

1.[IBM Business Automation Workflow V19.0.0.3 documentation](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.workflow.main.doc/kc-homepage-workflow.html)
2.[Collect troubleshooting data for Performance Data Warehouse problems in IBM Business Process Manager (BPM)](https://www.ibm.com/support/pages/collect-troubleshooting-data-performance-data-warehouse-problems-ibm-business-process-manager-bpm)
3.[Klaus's Developer Works Articles in a readable format](https://pages.github.ibm.com/klaus-ulrich/dwanswers/)

