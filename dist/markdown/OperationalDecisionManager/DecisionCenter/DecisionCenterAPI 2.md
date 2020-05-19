Date:2019-12-27

## Overview

ODM provides Java APIs to manage rule projects in Decision Center, which allows users to implement back-end customizations or Java client application for Decision Center. 

Since v8.9.1, ODM also provides REST API to manage decision services in Decision Center, which allows users to easily implement a continuous deployment process.

## Prerequisites

Knowledge of Java and REST API

## Component

**1.Decision Center Java API**
You can use Java API to implement Decision Center back-end customizations. 
* can be used to manage both classic rule projects and decision services
* can be used to create packages and rules, search the repository, and to lock, unlock, and commit project elements
* Java API is not available in ODM on cloud

General guidance of using Decision Center Java API:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.custom/topics/tpc_custdc_usingapi.html

Reference of Javadocs:
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.ref.dc/html/api/html/overview-summary.html

**2.Decision Center REST API**
Starting from ODM v8.9.1, you can use the Decision Center REST API to build, test and deploy decision services. 
* can be used to manage decision services only
* can be used to easily set up and enforce a continuous deployment process by using the programming language of your choice

https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.ref.dc/topics/con_dc_rest_api.html

You can access a swagger user interface at http:// localhost:<port_number>/decisioncenter-api. This interface exposes a view of the available endpoints, their documentation, and a Try it out button to test each endpoint. You can use it as a Decision Center REST API test tool.

![图片 1](https://media.github.ibm.com/user/228551/files/3a9d9e80-2967-11ea-8ea6-825ae9934389)

Tutorial [Using the REST API tool](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_bc_api_tut_int.html) provides step-by-step instructions of how to build, test and deploy a decision service by using this REST API test tool. 

## Troubleshooting

#### Data Collection
If a client reports a problem or an unexpected behavior when using Decision Center API, request for

1.The exact version of ODM in use 
2.application log/server log, containing the complete stack trace
3.a reproducible sample or code snippet 

If the problem is related to Java API, try reproducing the issue by modifying a similar product sample. If the problem is related to REST API, try reproducing the issue by using the REST API tool. Refer to [Using the REST API tool](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_bc_api_tut_int.html)

Most API related questions are how-to questions. You can usually find a product sample that demonstrate how to achieve a similar requirement. 

* [Sample: Decision table management by using APIs](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_tsauth_dtables.html)
  - Located in < InstallDir >/teamserver/samples/servercopydecisiontable
  - This sample is a Java application that uses Decision Center API to create, copy or delete decision tables. 
  - It is a very good reference when a user wants to implement a Java application to manage decision tables in Decision Center. 
  - This sample also demonstrates how to use IlrDefaultSearchCriteria API to locate a rule artifact. 

* [Sample: Web authoring application](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_tsauth_webauth.html)
  - Located in < InstallDir >/teamserver/samples/servercomponents
  - This sample demonstrates how to build a web application using Decision Center web components. It is a good reference for users who wants to create their own custom web console to manage rules in the Decision Center repository
  - This sample also demonstrates how to use Java API to set or unset permissions on a project (utils/PermissionHelper.java), and to lock or unlock rule elements (utils/RTSHelper.java). 

* [Sample: Permission management](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_tsbrm_permissions_det.html) 
  - Located in < InstallDir >/teamserver/samples/permissiontuning
  - This sample demonstrates how to tune permission management by using a session controller. It is a good reference for users who wants to implement a custom session controller.

* [Sample: Remote connection for querying](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_tsbrm_remotequery.html)
  - Located in < InstallDir >/teamserver/samples/serverqueryexecute
  - This sample demonstrates how to run Decision Center client API. It is very helpful when a user wants to implement a client Java application to run queries against a remote Decision Center repository. 

* [Sample: Automated decision service test and deployment](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_dsdeploy.html)
  - Located in < InstallDir >/teamserver/samples/dsdeploy
  - This sample demonstrates how to test and deploy a decision service from Decision Center to Rule Execution Server or to a file by using the Decision Center API. It is a good reference for users who wants to implement Java application to automate deployment of decisions service.

* [Tutorial: Using the REST API tool](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_bc_api_tut_int.html)
  - This tutorial provides step-by-step instructions of using the REST API tool. It also demonstrates the how to use REST API to build, test, and deploy a decision service
  - When a user wants to find out which REST API can be used to achieve certain requirement. Check out the swagger user interface and test the REST API. Note, the Decision Center API has been improved in the latest releases. For example, the REST API for managing branches, releases of decision services is added in ODM v8.10.0. Make sure you check out the latest release and confirm if the specific feature is available in the product version used by the client. 

* [Sample: REST API in Java](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_dc_api.html)
  - Located in < InstallDir >/teamserver/samples/dcrestapi
  - This sample demonstrates how to use an HTTPClient in Java to call Decision Center REST API to build, test, and deploy a decision service. It is a good reference for clients who want to automate continuous deployment of decision service using REST API. 

Note, since classic rule project is deprecated in ODM v8.8.0, most Decision Center samples have been re-written to work with decision services and the Business Console. For sample code of managing classic rule projects, you need to refer to the samples in the older versions, for example, v8.7.1. 



