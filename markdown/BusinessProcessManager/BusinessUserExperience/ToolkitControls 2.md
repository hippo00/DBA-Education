Date:2019-12-10

## Overview

Coaches are user interface (UI) screens for IBM Business Process Manager Human Services. They are web-based forms that provide data to users and collect input from the users. This is provided by the “views” or “controls” that are composed of various elements of the HTML page such as input or output text, buttons, tables, drop-down lists, etc.

This document introduces BPM coaches and their evolution from IBM Business Process Manager (BPM) (previously Lombardi) to the current IBM Business Automation Workflow (BAW). The references to Knowledge Center and BPM / BAW developer works are useful for the details on the topics discussed in this document.

Toolkits are also covered in this document as their usage is tightly coupled with coaches.

**Evolution of the coaches in BPM / BAW**

Coaches existed in the earlier versions of the product (WebSphere Lombardi Edition 7x). In the later versions of BPM (Version 8) the new generation coaches were introduced and “Lombardi” coaches were renamed to “Heritage Coaches”.  The new coaches were internally referred to as “New Gen” coaches.

There was only one type of Human Service available at the time; Hence both Coaches (or CoachNGs) and the Heritage Coaches could be used for this Human Service. 

In the later releases of the product, the new model for Human Service was introduced: “Client-Side Human Service” (CSHS) and the existing Human Services were renamed to “Heritage Human Service”.

The correct use of terminology and the distinction of coach and Human Service type is important in problem determination to define the statement of the problem correctly.

Pleases refer to “Difference between Coaches and Heritage Coaches” for more details on this topic.

**Toolkits**

Toolkits are reusable libraries of Process Designer artifacts; They include artifacts such as business objects, Integration Services, or business process definitions. A toolkit can be used for sharing between business process definitions. Toolkits are stored and managed within Process Center. In this document, we cover the UI related toolkits.

## Prerequisites

* Understand the basics of Human services
* Working knowledge of Process Designer and Process Center Repository
* Familiarity with UI development concepts
* Understand Toolkit sharing concepts

## Components

* Coaches in Process Designer and in runtime
Coaches build the web pages for the user interface. They are created and can be tested in Process Designer. The developer creates the layout of the page by authoring the Coach in Process Designer.
They are part of the Human Service flow. At run time, when the flow enters a Coach, the user sees the user interface that is defined for that Coach. The user interface consists of HTML code that is displayed in a web browser. The flow leaves the Coach when a boundary event occurs. A Coach can have multiple exit flows with each one associated with a different boundary event.

* Authoring Coaches and the use of toolkits
The elements that are used in multiple Coaches, can be assembled into reusable Coachviews. The Coachview and the required variable and business objects as well as all the necessary implementation can be saved in a toolkit. The artifacts in the toolkit, after sharing the toolkit, can be used by other Coaches with the same process app.
Each BPM version shipped with a set of default ("out-of-the-box") toolkits to help the application developers build Coaches fasters.
For example, in the earlier version of the product, Coaches (SYSC) toolkit provided Stock controls. Note that the application developers could create their own toolkits or download toolkits from development forums, third-party providers or business partners. For the list of older toolkits please refer to the URL in the reference section.
In the latest version of BAW, UI Toolkit is an out-of-the-box toolkit. Please see the reference section for more information and the list of views in this toolkit.
The layout of a Coach is composed in the editor. The elements (e.g. button, input text, table ) needs to be configured if associated with any data; Using Process Designer the application developers bind the variable to the Coach. The validation during the authoring might not be in place, so the issues caused by wrong binding might not surface until runtime.
 *Note: Both client-side Human Services and Heritage Human Services (deprecated) can have Coaches. A Heritage Coach has the technology and architecture of a Coach in BPM versions earlier than V8.0. To maintain compatibility with earlier Coaches, BAW supports Heritage Coaches only in Heritage Human Services.
Heritage Coaches are deprecated artifacts that can be created only in the desktop Process Designer. In Heritage Human Services that you bring in to the Process Designer, wherever possible, replace the deprecated Heritage Coaches with Coaches. No conversion is available in the Process Designer for Heritage Coaches.
In the Process Designer, minimal support is available for basic editing of Heritage Coaches in XML view only. You can display Heritage Coaches alongside Coaches in the Coaches view, but you can edit the XML Heritage Coach model only.
For the list of restrictions in working with deprecated Heritage Coaches in Process Designer please see the referenced URL in this document.

## Troubleshooting

**Performance:** Regardless of the root cause, the performance related problems often surface at the UI/Coach layer. These issues are reported frequently to support.
The classic approach to analyze performance issues:

1.Understand the scenario in detail and ask the customer for the expected results. ( e.g. performance benchmark info). 

2.Check if the issue is intermittent or not. If it is, what are the factors influencing the performance.

3.Check if the performance issue can be replicated using more than one browser. E.g. Chrome has been considered better performer browser compare to IE.

4.If the issue is related to the Coach, has the Coach gone through a warm start? E.g. the Coaches have been generated and cached already

5.Check the network trace to flag the long-running calls from/to server.

6.If the issue is related to the tables rendering , has the customer taken into account all the best practices to design high performing tables?

7.If any long-running call identified, check the server logs for the timeframe of the call.

8.Has the DB been tuned as advised by the Performance Redbook http://www.redbooks.ibm.com/redbooks/pdfs/sg248210.pdf

**General runtime errors / issues:** These issues are typically reproducible on development or QA env. To debug these issues the best approach is to review the process app to narrow down the area of the root cause. The BPM developers are usually the helpful source of information to point to the area of the code by explaining how the Coach / UI was intended to work using BPM / BAW out-of-the-box artifacts . Collecting  a network trace would be usually helpful to determine what additional information to be collected. 

**Use of external/third-party toolkits :** BPM support and development does not provide support for third-party toolkits. It is important to check the process app ( twx file ) to confirm that the artifacts used in the Coach are from the out-of-the-box toolkits. If the Coaches use non-IBM toolkits, the best approach would be to ask the customer if they can replicate the issue using an out-of-the-box toolkit. 

**Upgrade issues and toolkit dependencies:** PC can be in the lower version of BPM compare to PS. However, this set up might cause issues at times. The preferred set up is for both PC and PS be at the same level. This applies to the toolkits shipped with PC as well. 

**Authoring issues:** Problems related to the authoring the Coach In the editor (Process Designer ). Note that validation does not exist in places in editor, so paying attention to the visual clues as warning when working with Coach editor is important. Being able to examine the process app and opening the customer’s process app in the Process Designer usually helps flagging these issues. 

## Data Collection

1.MustGather : https://www.ibm.com/support/pages/collect-troubleshooting-data-Coach-problems-ibm-business-process-manager-bpm

2.Enabling JavaScript debugging for Coaches
https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.5.7/com.ibm.wbpm.wle.editor.doc/topics/t_enablingdebuggingforCoaches.html

## Data Analysis

<p>1.In the Fiddler trace look for the call containing:</p>

```
a.<host>/teamworks/process.lsw? check the response of this call ( in the raw or text )
b.<host>/teamworks/fauxRedirect.lsw same as above
c.<host>/teamworks/ajaxCoach for only HHS related information
```
2.Search ARM under Coach UI and its sub-categories for the problem determination techniques used on other cases. 

3.Go over the " Advanced performance considerations” in this Red Book http://www.redbooks.ibm.com/redbooks/pdfs/sg248210.pdf

4.Analysis of the corresponding server logs related to Coachng and Coachng Framework methods

## Reference

1.Difference between Coaches and Heritage Coaches https://www.ibm.com/support/knowledgecenter/SSFTDH_8.5.7/com.ibm.wbpm.wle.editor.doc/topics/clegacy_vs_view.html

2.Restrictions in working with Heritage Coaches in Process Designer : https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/ccoaches.html

3.IBM BPM UI Performance : https://developer.ibm.com/recipes/tutorials/ibm-bpm-ui-performance/

4.Building Coaches in BAW : https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/tbuildviewcoaches.html

5.Toolkits in earlier BPM versions: https://www.ibm.com/support/knowledgecenter/SSFTDH_8.5.7/com.ibm.wbpm.admin.doc/topics/managing_toolkits_A.html

6.UI toolkit in the latest BAW version : https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.ref.doc/topics/spk_ui_tkit_an_overview.html

