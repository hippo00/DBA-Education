Date:2019-12-09

## Overview

This document covers the definition, usage and troubleshooting approaches of Human Services in IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW).

**What is a Human Service?**

A process in IBM BPM/BAW consists of some activities performed by a person (human) and the system (computer). 

There are several activity types available when modelling with IBM® Process Designer. See the reference section of this document for more details.

A "User Task" is the type of activity that is performed by a user (human). A "Human Service" can be selected or created in Process Designer to implement this activity.

There are two types of Human Services currently available:

&nbsp;&nbsp;&nbsp;&nbsp;a.Heritage Human Service (deprecated)
&nbsp;&nbsp;&nbsp;&nbsp;b.Client-Side Human Service 

## Prerequisites (Optional)

* Basic working knowledge of BPM/BAW IBM® Process Designer. 
* Basic understanding of building components of process applications
* Understanding of UI design and implementation concepts

## Components

&nbsp;&nbsp;&nbsp;&nbsp;a.Human Service basics
&nbsp;&nbsp;&nbsp;&nbsp;b.Comparison between Heritage Human Service (HHS) and Client-Side Human Service (CSHS)
&nbsp;&nbsp;&nbsp;&nbsp;c.Building / modelling Human Services

**1.Human Service basics**

A Human Service implements the interaction of the user with the process. It contains at least one “coach”. A coach creates a page in the user interface, which users can see in a web browser.

A Human Service also can include gateways and services that control the interaction with the user. These components are different in CSHS compared to HHS. The most basic components of a Human Service, regardless of their type, is a start node, a coach, and an end node.

For the details of available tools and components available for authoring Human Services see the reference section.
Note that there is another document that covers the details of “coaches” in this IBadges series.

**2.Comparison between Heritage Human Service (HHS) and Client-Side Human Service (CSHS)**

Both types of the services operate with similar concepts. However, construction and execution differences distinguish the two types of Human Services.

**Heritage Hman Service (HHS) (deprecated)**

With HHS, you use existing artifacts, such as coaches, heritage coaches, and stock controls, to create UI in BPM. You create and edit HHS in the Process Designer desktop editor, run them on the server, and use them to supply UI to web-based applications such as IBM Process Portal.

You can still update and expand Human Services that were created before BPM V8.5.5. To be able to edit an HHS in the Process Designer web editor, consider converting the HHS to a client-side Human Service. For more information, see Heritage Human Service to client-side Human Service conversion.

**Client-Side Human Service (CSHS)**

CSHS allows the developers to use web technology to improve human-service performance and provide support for case management and process management. You create and edit CSHS in the Process Designer web editor, run them on the client-side in the web browser, and use them to call the server for data when necessary.

***Notes:***

* Responsive Coaches toolkit, introduced in BPM 8.5.7, can only be used in CSHS.
* 8.5.7 BPM introduces a new type of BPMN service called Process.  Processes, unlike Cases, are available in all BPM Editions; So, in BPM 8.5.7 we have BPDs and Processes.  Processes similar to Cases can only use CSHSs.

**3.Building / modelling Human Services**

Using the Web Process Designer (Web PD), you can create both types of Human Services. After creating a process app, you can use the default ones offered in the product, or simply go to the left-hand side panel, click on the + sign by the User Interface and from the menu select either HHS or CSHS.

This will open a multi tab editor and “diagram” tab which allows the user to drag and drop available items to the editor from the right-side panel.

In the “overview” tab the basic information for the HS is available. Note that “Usage” in this tab is a useful option for problem determination where you can change the usage of the service for testing purposes.
“Variable” tab is for creating and editing the variables used in the service and related coaches / coachviews. 
“coach” tab is the coach editor. This will be covered in the coaches IBadges document.
 
**HHS:**

HHS are deprecated, however as of BAW 19002 the users are still able to edit them or create new ones to facilitate the migration of the HHS that were created in the desktop Process Designer in web Process Designer.  For information on how to build HHS see the reference section.
 
**CSHS:**

CSHS are created in web Process Designer by using a wizard that launches upon selecting “create” button in the implementation section of a Human Task.  The create wizard takes the user through necessary steps to build the CSHS. A few of the common artifacts to use in building a CSHS are:  

Script: when you want to add JavaScript code to run on the web browser in the for parsing variables, and running programmatic commands.

Service:  to call another service from within a CSHS. The called service adds an activity to the diagram, which calls another service that you can specify. 

Nested service: when you want to reuse a set of common steps in one or more other CSHS. 

*Note that CSHS are reusable. This means they can be broken into subflows that can be separately managed and reused in different contexts, you can define the reusable subflows as nested CSHS.

Event Handler: to add a subflow that is triggered by one of the following types of events. By default, the subflow is triggered by an error event.

Please review the important concepts in modelling CSHS in the reference section.

## Troubleshooting

 The first step of troubleshooting a Human Service is to have a clear understanding of the User Interface issue. 
Typically, HS-related issues can be categorized as : 
* Authoring time 
* Runtime

The authoring time issues should be covered in the Process Designer IBadges document.

Debugging the Runtime issues often starts with debugging the page on which the issue is surfaced.  This would usually involves debugging a coach or coach view first. And depending on the findings the issue might be related to the Human Service.

The common tools and techniques to debug HS issues and coaches are:

Process Designer debugger: This allows you to trace the flow of the service and the value of the variables; This helps narrowing down the issue on whether the issue is related to the coach or the service.

Gathering a network trace to check the state of the client(browser) calls to the server.

Gathering browser console logs to check if there are any client code errors and warnings (e.g. any errors in the java scripts).  

Gathering the server side logs to check for any exceptions related to coach or coachflow classes. 

There are several useful assets in ARM, under BPM->CoachUI->HumanServices to search for the symptoms and troubleshooting tips.

## Data Collection

Please refer to this must gather document:
 https://www.ibm.com/support/pages/collect-troubleshooting-data-coach-problems-ibm-business-process-manager-bpm
 
Note that this document covers both Human Service and coach debugging data collection.

## Data Analysis

* The network trace should be analyzed to check for coachflow/service/snapshotID-modelID call. This is the request to run the service flow on the server. The request & response should be checked to ensure it is getting all the way through the server and back. A call similar to : https://<hostInfo>/bpm/cf/script/coachflow/coachflowengine_main.js?build=<ProductBuidlDate> indicates the call to the coach flow service.  

* To trace the rest calls related coach flow service, use diagnostic trace :WLE.wle_bpmrest. In the logs “ServiceResource” lines should be searched for any obvious errors. An example of a successful rest call is : ServiceResour < com.ibm.bpm.rest.impl.coachflow.ServiceResource parseParams RETURN {"sampleText":"","throwError":false,}
 
* The configuration of  coachflow/service endpoint might need to be checked in the cases where environment set up or config might be the possibility of the root cause of HS execution. WEBPD_TO_COACHFLOW_RT configures the URLs that are used in the Process Designer web editor targeting the coach flow web archive WAR file (bpm.coachflow.war).
 
* In the browser console logs, errors related from com.ibm.bpm.coachflow.engine.* should be examined. 
 
* For performance related issues, along with the network trace, a more direct trace of the CSHS request will show some info about where the time is spent: com.ibm.bpm.rest.impl.coachflow.*=all ; 

## Reference

1.Activity types: https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/proc_implementing_activities.html

2.Building a HHS : https://www.ibm.com/support/knowledgecenter/SSFTN5_8.5.6/com.ibm.wbpm.wle.editor.doc/topics/building_human_service.html

3.Building a CSHS : https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/building_webhumsrvce.html

4.Comparison between CSHS and HHS : https://www.ibm.com/support/pages/what-advantage-and-disadvantage-using-client-side-human-service-vs-heritage-human-service

5.Converting HHS to CSHS : https://www.ibm.com/support/knowledgecenter/SSFTN5_8.5.5/com.ibm.wbpm.wle.editor.doc/topics/ccf_manualconversionhhstohs.html

6.Tools for building CSHS: https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/ccf_palette.html

7.Building HHS: https://www.ibm.com/support/knowledgecenter/SSFTN5_8.5.5/com.ibm.wbpm.wle.editor.doc/topics/building_human_service.html

8.Modeling a CSHS : https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/tcf_buildhs.html

