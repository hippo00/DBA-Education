Date：2019-12-18

## Overview

The IBM Operational Decision Manager (ODM) Decision Warehouse (DW) is a Rule Execution Server (RES) console tool for monitoring ruleset execution. It stores execution traces in a database. The execution trace contains information about how a decision was made. It records the rule flow, the path of rule flow tasks, and the rules that were executed. These details are intended to help users, an auditor for example, understand what happened during the execution process. Users can access Decision Warehouse in the Rule Execution Server console.

Acronyms:
ODM	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBM Operational Decision Manager
DW	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decision Warehouse
RES	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rule Execution Server

## Prerequisites

Overview of Decision Warehouse:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_dw_overview.html

## Components

**1.Create Decision Warehouse Database**
Decision Warehouse is not mandatory. Users only choose to create DW database schema when they need to store execution traces for monitoring and audit purposes. 
You can create the DW database schema by one of the following methods:
&nbsp;&nbsp;&nbsp;&nbsp;a. Run the Installation Settings wizard from the Rule Execution Server console
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or 
&nbsp;&nbsp;&nbsp;&nbsp;b. Execute trace_<DatabaseName>.sql  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(located in <odm_installdir>\executionserver\databases)

**2.Enable Execution Trace**
Execution trace is disabled by default. 
Before deploying a ruleset in Rule Designer or Decision Center, you can add the following ruleset properties to enable tracing:

&nbsp;&nbsp;&nbsp;&nbsp;monitoring.enabled = true
&nbsp;&nbsp;&nbsp;&nbsp;ruleset.sequential.trace.enabled=true

After a ruleset already has been deployed to the RES, you can add above ruleset properties in the RES console, or enable tracing in the monitoring options panel of the ruleset view:

![图片 1](https://media.github.ibm.com/user/228551/files/6ea7e100-2169-11ea-8f10-c86feb32e7de)
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_exec_monitoring.html

**3.Add multiple datasources**
You can add dedicated datasource to Decision Warehouse
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tpc_res_config_dw_add_dsrc_intro.html
**4.Optimize Decision Warehouse**
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tpc_res_config_optim_dw_intro.html

## Troubleshooting
 
#### Data Collection and Analysis

A typical issue when using Decision Warehouse is when no execution traces are logged in the database. First check if tracing is enabled for the current ruleset from the ruleset view in the RES console.

![图片 2](https://media.github.ibm.com/user/228551/files/b890c700-2169-11ea-9800-1936d3656744)
If the client provides the ruleapp archive, you can verify the related ruleset properties in the ruleapp.jar\META-INF\archive.xml file:
```
<ruleset-property>
        <ruleset-property-name>monitoring.enabled</ruleset-property-name>
        <ruleset-property-value>true</ruleset-property-value>
      </ruleset-property>
      <ruleset-property>
        <ruleset-property-name>ruleset.sequential.trace.enabled</ruleset-property-name>
        <ruleset-property-value>true</ruleset-property-value>
      </ruleset-property>
```
In the archive.xml file you can also check the filtering properties:
```
      <ruleset-property>
        <ruleset-property-name>monitoring.filters</ruleset-property-name>
        <ruleset-property-value>INFO_TOTAL_RULES_FIRED=true,INFO_EXECUTION_DATE=true,INFO_TOTAL_TASKS_EXECUTED=true,INFO_TOTAL_RULES_NOT_FIRED=true,INFO_EXECUTION_DURATION=true,INFO_EXECUTION_EVENTS=true,INFO_RULESET_PROPERTIES=true,INFO_EXECUTION_OUTPUT=true,INFO_TOTAL_TASKS_NOT_EXECUTED=true</ruleset-property-value>
      </ruleset-property>
```
It is also useful to collect the RES server logs. There could be DW related errors in the log if problem occurred when persisting the traces into the database. You can find similar message like below:
execution     E   An error occurred when the process tried to save the trace.
Usually there is also a complete stack trace about database errors. 

**Typical Issues**

**Issue#1**
No execution trace is logged in Decision Warehouse
**Symptom**
Decision Warehouse database schema is properly created, but nothing is logged in the database. Searching in Decision Warehouse tab does not return anything. 
**Resolving the Problem**
First check if the ruleset execution monitoring is activated for the ruleset. Make sure below ruleset properties are set to true: 
monitoring.enabled = true
ruleset.sequential.trace.enabled=true
If the problem persists, ask client to provide:
&nbsp;&nbsp;&nbsp;&nbsp;a. A screenshot of Monitoring Options part of the ruleset view or the ruleapp archive. 
&nbsp;&nbsp;&nbsp;&nbsp;b. The RES server logs
&nbsp;&nbsp;&nbsp;&nbsp;c. Activate log “com.ibm.rules.res.persistence.sql=all” if nothing is found in the server log.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will log SQL requests sent to RES DB including requests related to Decision Warehouse. Search for keyword ”EXECUTION_TRACE“ to locate the SQL queries reading or writing to DW database. 

**Issue#2**
Decision Warehouse database grows fast
**Symptom**
The Execution_Traces table keeps growing and fill up the database space quickly
**Resolving the Problem**
1.Manually remove the outdated execution traces by using “Clear Decisions" from Decision Warehouse tab of the RES console
2.Reduce the size of execution trace by 
&nbsp;&nbsp;&nbsp;&nbsp;a. applying filters to reduce the data logged in the database. Refer to:
&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_ruleset_filters.html  
&nbsp;&nbsp;&nbsp;&nbsp;b. removing BOM serialization in case of large amount of input and output data
&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_rem_bom_serial.html
3.Use REST API to remove execution traces periodically. Refer to:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.ref.res/html/restapi/html/ecmapi_decisiontraces_delete.html

**Issue#3**
Decision Warehouse database space is not reclaimed after removing execution traces
**Symptom**
User has removed all execution traces from Decision Warehouse when the database space is used up. Searching in RES console returns 0 results which confirms the data is indeed deleted.  But the size of database space remains the same. 
**Resolving the Problem**
This typically happens on DB2 when the tablespace is not automatically reclaimed after deleting table rows which contains CLOB data. User has to run a DB2 REORG to reclaim the spaces. Refer to DB2 documentation for details:
https://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.perf.doc/doc/c0005406.html
https://www.ibm.com/support/pages/how-reclaim-space-after-dropping-indexes-or-rows-db2-table

Refer client to DB2 support if they need further help about table REORG. 

**Issue#4**
Decision Warehouse missing to capture decisions
**Symptom**
When executing rulesets using webservice, only the very first execution is captured. All the subsequent request is not traced while errors like below is found in the server log:
```
com.ibm.websphere.ce.cm.DuplicateKeyException: The statement was aborted because it would have caused a duplicate key value in a unique or primary key constraint or unique index identified by 'EID_UNQ' defined on 'EXECUTION_TRACES'.
or
com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (ODMS2.EID_UNQ) violated or WARNING: An error occurred when executing the SQL query. java.sql.SQLIntegrityConstraintViolationException: The statement was aborted because it would have caused a duplicate key value in a unique or primary key constraint or unique index identified by 'EID_UNQ' defined on 'EXECUTION_TRACES'
```
**Resolving the Problem**
ODM when monitoring, maps each execution to a sequence that the caller can manage the DecisionID. It's in the header column DecisionID of a REST call
```
XML:  <par:DecisionID>string</par:DecisionID>
JSON:   "__DecisionID__": "string"
or in the WSDL
< xsd:element form="qualified" maxOccurs="1" minOccurs="0" name="DecisionID" type="xsd:string"/>
This DecisionID field is mapped into the database as EXECUTION_ID, that same column that supports a constraint:
CONSTRAINT EID_UNQ UNIQUE (EXECUTION_ID)
```
This constraint prevents user from running the same request with the same ID twice. An easy solution is to define this ID as a timestamp to ensure each time it run with a new unique ID. 
DW will also automatically generate a unique DecisionID is this ID is left as blank.  However, setting DecisionID in the request could optimize the response time

