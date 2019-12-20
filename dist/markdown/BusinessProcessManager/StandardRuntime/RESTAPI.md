Date:2019-12-20

## Overview

BPM REST APIs

## Prerequisites

https://www.youtube.com/watch?v=rtWH70_MMHM

## Components

Rest APIs:
1.https://www.ibm.com/support/knowledgecenter/en/SSV2LR/com.ibm.wbpm.bpc.doc/topics/tdev_testingrestapis.html
2.https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/cdev_restprogramming.html
3.https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/topics/process_rest_reference.html

## Troubleshooting

#### Data Collection
https://www.ibm.com/support/pages/collect-troubleshooting-data-bpm-rest-api-problems-ibm-business-process-manager-bpm

Isolate the thread with the problem thread using the PullThread tool in Archive Explorer (AE).

1.Identify the exception message or the log message you would like to investigate.
2.Use the PullThread tool in AE to filter out the thread from step 1.

#### Data Analysis

A working scenario for a REST call would look like something similar to the following. In the first log message, you will want to search for the “doFilter ENTRY” tag which will be the entry to the REST call:
```
[11/25/19 15:48:21:439 PST] 000005ac BPMCORSFilter > com.ibm.bpm.rest.filter.BPMCORSFilter doFilter ENTRY
[11/25/19 15:48:21:439 PST] 000005ac BPMCORSFilter 3   Processing requests with non-null Origin header. Header value=null
[11/25/19 15:48:21:439 PST] 000005ac BPMRestServle > com.ibm.bpm.rest.filter.BPMRestServletFilter doFilter ENTRY
```
In the next segment, you will see the URL that the REST call is making. In this example, we are running the Task Details REST API for task ID 55:
```
[11/25/19 15:48:21:439 PST] 000005ac BPMRestServle 3   Processing HTTP request: https://localhost:12319/rest/bpm/wle/v1/task/55
[11/25/19 15:48:21:440 PST] 000005ac BPMRestServle 3   Detail: REQUEST URL  = https://localhost:12319/rest/bpm/wle/v1/task/55
```
Upon first logging into the system or if the user does not have a valid http session, the REST API call makes a “initializeNewLogin” call to lock the user so that any updates to this users group membership can occur. In this example, the user is “deadmin”:
```
[11/25/19 15:48:21:445 PST] 000005ac SecurityCore  > com.lombardisoftware.server.ejb.security.SecurityCore initializeNewLogin ENTRY null false
[11/25/19 15:48:21:445 PST] 000005ac WebsphereDele < com.lombardisoftware.client.delegate.common.WebsphereDelegateHelper getCurrentUsername RETURN deadmin
[11/25/19 15:48:21:445 PST] 000005ac DBLockHelper  1 com.lombardisoftware.server.core.DBLockHelper createLock createLock deadmin user login lock
[11/25/19 15:48:21:447 PST] 000005ac clientinfoplu >  prepareStatement Entry
                                 com.ibm.ws.rsadapter.jdbc.WSJccSQLJPDQConnection@874151a9
                                 INSERT INTO LSW_LOCK (LOCK_ID, DESCRIPTION) VALUES (?,?)
[11/25/19 15:48:21:450 PST] 000005ac StatementCrea 3 org.springframework.jdbc.core.StatementCreatorUtils setParameterValueInternal Setting SQL statement parameter value: column index 1, parameter value [deadmin], value class [java.lang.String], SQL type unknown
[11/25/19 15:48:21:450 PST] 000005ac StatementCrea 3 org.springframework.jdbc.core.StatementCreatorUtils setParameterValueInternal Setting SQL statement parameter value: column index 2, parameter value [user login lock], value class [java.lang.String], SQL type unknown
[11/25/19 15:48:21:502 PST] 000005ac SecurityCore  < com.lombardisoftware.server.ejb.security.SecurityCore initializeNewLogin RETURN
```
Once the “InitializeNewLogin” method returns, group membership is complete. We can now check if the user is authorized to make the call. In certain cases, you may see authorization methods which will check if a user is authorized to make the REST API call. In this scenario, the user is authorized. You may see different methods for different APIs but you should see the AuthorizationAPICore class invoked:
```
[11/25/19 15:48:21:528 PST] 000005ac Authorization > com.lombardisoftware.server.ejb.api.AuthorizationAPICore canExecuteActionAndThrowsNotAuthorized ENTRY 110 55 false
[11/25/19 15:48:21:535 PST] 000005ac Authorization < com.lombardisoftware.server.ejb.api.AuthorizationAPICore canExecuteActionAndThrowsNotAuthorized RETURN canExecute: true
```
Finally, the REST API completes and logs a very helpful message which shows how long the call took on the server side. You may want to check for the “elapsed” keyword:
```
[11/25/19 15:48:23:881 PST] 000005ac LoggingUtils  1   The elapsed time for the following REST request was 2.37 seconds: https://localhost:12319/rest/bpm/wle/v1/task/55

The doFilter method returns
[11/25/19 15:48:23:881 PST] 000005ac BPMRestServle < com.ibm.bpm.rest.filter.BPMRestServletFilter doFilter RETURN

At the end of each REST API call, there is a summary of all database queries made:
[11/25/19 15:48:23:881 PST] 000005ac sql           3   ------------------------------------ Query summary for request GET --- /rest/bpm/wle/v1/task/55?parts=all
```
