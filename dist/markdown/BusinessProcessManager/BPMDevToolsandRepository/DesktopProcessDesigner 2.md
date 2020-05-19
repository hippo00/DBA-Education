Date：2019-12-16

## Overview

Process Designer is the primary modeling and design tool in IBM® Business Automation Workflow. It is an editor that you access in a browser to model, implement, and inspect business processes.

The traditional desktop Process Designer (also known as heritage Process Designer) is deprecated.

Process applications that are developed in Process Designer can at any time be run on the Workflow Center server or saved to a snapshot and deployed on the Workflow Server.

All Process Designer projects are contained in process applications. Process applications can share assets that are in toolkits. You store process applications and associated artifacts in the Workflow Center repository.

## Prerequisites

Basic information:
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/proc_designer.html

Where to edit Process Designer artifacts:
https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.wle.editor.doc/topics/designer_overview.html

If you want to play around with WebPD you can use the Hiring Sample that comes with BAW and follow the steps in 
https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/modifying_packaged_sample.html

## Component

**Starting Web Process Designer:**
From Process Center or Workflow Center clicking ‘Open in Designer’ opens Web Process Designer by default
![图片 1](https://media.github.ibm.com/user/228551/files/f7dddd00-1fdc-11ea-98da-331cbb1f9899)

**Working with Web Process Designer**

![图片 2](https://media.github.ibm.com/user/228551/files/0d530700-1fdd-11ea-938f-75cf74173378)

Elements
1 Artifact selection (by groups)
2 Navigation Bar (dependent on selected artifact)
3 Area to edit details

**Creating and editing artifacts**
With the CreateNew Button you can directly select artifacts as shown below:

![图片 3](https://media.github.ibm.com/user/228551/files/34a9d400-1fdd-11ea-9c90-6e3fe8c42f1b)
Alternatively you can select artifacts by group (click on the + sign right of the group name):

**Process: Create a new process**

![图片 4](https://media.github.ibm.com/user/228551/files/b7329380-1fdd-11ea-9f56-3c5016909a28)

![图片 5](https://media.github.ibm.com/user/228551/files/be59a180-1fdd-11ea-8b12-ebd8ff204cdb)
Hover over the elements to see the description as shown above

The overview of the process looks like

![图片 6](https://media.github.ibm.com/user/228551/files/de896080-1fdd-11ea-89a4-713faed68651)

**User Interface**

Create and edit the User Interface
![图片 7](https://media.github.ibm.com/user/228551/files/0c6ea500-1fde-11ea-8aeb-3da95f7e269a)
Heritage Human Service (can only be edited in Eclipse based Web Process Designer)

**Service**

Create and edit one of the Service types shown below:
![图片 8](https://media.github.ibm.com/user/228551/files/63747a00-1fde-11ea-9146-d04291597cfa)

**Events**

Create and edit Events
![图片 9](https://media.github.ibm.com/user/228551/files/856dfc80-1fde-11ea-96d2-72f2c622eea5)

**Teams**

Assign teams to a process
![图片 10](https://media.github.ibm.com/user/228551/files/a6365200-1fde-11ea-9243-bb36a314abd8)

**Data**

Define Business Objects and EPVs
![图片 11](https://media.github.ibm.com/user/228551/files/69c12100-1ff3-11ea-999b-b209a52cbaa9)

**Performance**

Define and edit Tracking Groups
![图片 12](https://media.github.ibm.com/user/228551/files/89f0e000-1ff3-11ea-804c-689ee0fbf58d)

**Files**

Import external files
![图片 13](https://media.github.ibm.com/user/228551/files/a725ae80-1ff3-11ea-8429-f05eec0069f1)

**Integrating Toolkits**

Assets that need to be shared can be saved in Toolkits . You can work with toolkits dependencies like changing 
The version, adding new toolkits, etc.
![图片 14](https://media.github.ibm.com/user/228551/files/d89e7a00-1ff3-11ea-9420-6e77a5c37f19)

**Find references**

To see where an artifact is used click References   on the bottom of the WebPD window.

Referenced By: This list shows the artifacts in the current application or toolkit and their dependencies that use the library item or the artifacts across all toolkits, depending on the scope that you choose

Local scope shows where artifacts are used only in the current process application or toolkit and its dependencies. This is the default view. 

Global scope shows where artifacts are used across all the toolkits in the Workflow Center repository and is available only for library items in named snapshots of toolkits. 

![图片 15](https://media.github.ibm.com/user/228551/files/05529180-1ff4-11ea-930f-44feb639c92f)
The BusinessObject ‘PersonData’ for example is used in the artifacts shown above.

**Testing your application**

Use the Inspector to run or debug processes.

Use the Debug or Run Button for a User Interface to test it directly in Web Process Designer
![图片 16](https://media.github.ibm.com/user/228551/files/3fbc2e80-1ff4-11ea-8e49-2062a53591fa)
![图片 17](https://media.github.ibm.com/user/228551/files/3fbc2e80-1ff4-11ea-89e0-f3203e25d32e)

## Troubleshooting

#### Data Collection

General MustGather
https://www.ibm.com/support/pages/collect-troubleshooting-data-ibm-business-process-manager-products

Fiddler Trace
https://www.ibm.com/support/pages/collect-http-traffic-capture-fiddler-or-your-web-browser

For Performance or Memory issues collect the data as described in
https://www.ibm.com/support/pages/collect-troubleshooting-data-performance-problems-ibm-business-process-manager-bpm
and 
https://www.ibm.com/support/pages/collect-troubleshooting-data-hangs-crashes-and-out-memory-problems-ibm-business-process-manager-bpm

#### Data Analysis

Typical problems:

To analyze WebPD issues most of the time you will have to recreate the issue in Castle, and it is best is to have a simplified twx file from the customer.

As WebPD is running in a browser make sure to use the same browser as the customer – ask the customer for details about browser and version.

To debug Browser related issues use F12 in the browser or ask the customer for a Fiddler trace.

It can be helpful to have a recording of the problem.








