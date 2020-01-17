Date:2020-01-03

## Overview

ODM provides REST API to manage RES instances locally or remotely. By using the REST API for resource management, developers can provide interaction with a remote RES instance through cross-platform access or by JavaScript clients. No client library or complex configuration is necessary.

## Prerequisites

Knowledge of using REST API

## Component

**1.Managing resources by using the REST API**
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/con_res_restapi_rsrcmng_intro.html

**2.Reference of RES REST APIs**
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.ref.res/html/restapi/html/index.html

**3.The REST API test tool**
There is an interactive test tool in the RES console, that you can use to learn about the RES REST APIs and test the requests.

![图片 1](https://media.github.ibm.com/user/228551/files/7e2b5900-2dfc-11ea-8f31-9b560ea77e14)
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.console/topics/con_rescons_restapi_rsrcmngt_test_tool.html

**4.The legacy JMX API**
Traditionally users use JMX MBean accessor API to manage ruleapps in RES. JMX API is not available in ODM on Cloud, and it is deprecated in ODM 8.10. 
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_rlapp_mbean_using.html

## Troubleshooting

#### Data Collection
If a client reports a problem or an unexpected behavior when using RES REST API, request for

1.The exact version of ODM in use 
2.The request and the response message
3.application log/server log, containing the complete stack trace (if there’s any)
4.whether the problem can be reproduced using the REST API test tool in RES console

If the same REST API command succeeds in Test tool, the problem is mostly likely due to an authentication issue. 

Most REST API related questions are how-to questions. Check out the [reference of REST API](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.ref.res/html/restapi/html/index.html) and test the API using the REST API test tool in RES console. 

You can usually find a product sample that demonstrate how to achieve a similar requirement. 
* [Sample: Simple Execution](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.samples/res_smp_topics/smp_res_javaee.html)
  - Located in < InstallDir >/executionserver/samples/j2eerulesession
  - This sample demonstrates how to run a ruleset in RES by using the REST API in a web application in Java Script and JQuery

* [Sample: Ruleset execution](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.samples/res_smp_topics/smp_res_rsexe_det.html)
  - Located in < InstallDir >/executionserver/samples/rulesetexecution
  - This sample demonstrates how to call a decision service in a web application by using the REST API in Java.

* [Sample: Ruleset management and execution](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.samples/res_smp_topics/smp_res_rest_api.html)
  - Located in < InstallDir >/executionserver/samples/restapi
  - This sample demonstrates how to use the RES REST API to manage and run decision services in the RES database in a J2SE application.
  - This sample shows how to use REST API in java to manage rulesets and resources in the RES database, to deploy a ruleapp archive, and to execute a ruleset. It also demonstrates the use of the response in JSON. 
  - This sample uses HTTPClient in Java. But it is also useful for users who wants to understand the usage of RES REST APIs and use another programming language. 

* [Sample: Execution trace](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.samples/res_smp_topics/smp_res_tracedisplay.html)
  - Located in < InstallDir >/executionserver/samples/tracedisplay
  - This sample demonstrates how to get information from the execution trace of a ruleset by using the REST API in Java

Note, the RES samples have been re-written since the likes of EJB session APIs and JMX Mbean APIs were deprecated. If client has old applications using legacy APIs, refer to samples in the older versions prior to v8.8. 

