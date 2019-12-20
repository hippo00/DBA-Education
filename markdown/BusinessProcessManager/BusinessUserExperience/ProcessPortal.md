Date:2019-12-20

## Overview

This section discusses the Process Portal component of IBM Business Automation Workflow. Process Portal is the user interface between BAW and the business users.

Process Portal an out of the box process application which is accessible from Process Designer. By default, all users have access to the Process Portal.

The main purpose of the user interface (UI) is to be the interactive area where users work on and complete tasks assigned to their team. Process Portal provides a variety of tools to help users complete their tasks such as saved searches which allow users to create customized lists of tasks, dashboards where users a manage their tasks and tasks of those assigned to their teams, and social features so that users can collaborate when they need help.

## Prerequisites

1.[Process Portal Primer](https://ibm.ent.box.com/folder/51605677950) (Box folder with video and PowerPoint)
2.[IBM Redbook “Deliver Modern UI for IBM BPM with the Coach Framework and Other Approaches”](http://www.redbooks.ibm.com/redbooks/pdfs/sg248355.pdf), Chapter 5 – Process Portal

## Components

**1.Process Portal Layout**
&nbsp;&nbsp;&nbsp;&nbsp;a. Main menu: Left hand side menu displaying:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User profile
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboards
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saved searches
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Startable services
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Launchable processes
&nbsp;&nbsp;&nbsp;&nbsp;b. Context menu: Right hand side menu displaying:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Social features
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Process instance stream
&nbsp;&nbsp;&nbsp;&nbsp;c. Central (content) area: Main content of Process Portal displaying dashboards and coaches

![图片 1](https://media.github.ibm.com/user/228551/files/61255f00-2301-11ea-952f-e7865e6f4ba3)

**2.Process Portal Features**
&nbsp;&nbsp;&nbsp;&nbsp;a. Dashboards
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Dashboards in Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.widget.doc/topics/cport_dashboards_new.html) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Process Portal Dashboards: Authorization Overview](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/cadm_dashboard_authorization.html)
![图片 2](https://media.github.ibm.com/user/228551/files/929e2a80-2301-11ea-99d8-d164903ff72e)![图片 3](https://media.github.ibm.com/user/228551/files/9336c100-2301-11ea-9f62-4db6823cec7a)

&nbsp;&nbsp;&nbsp;&nbsp;b. Saved Searches
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Saved Searches in Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.widget.doc/topics/cport_savedsearches.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Administering Searches](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/cadm_portal_search.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)[Tuning Saved Searches](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/ctuneprocportal.html)
![图片 4](https://media.github.ibm.com/user/228551/files/06d8ce00-2302-11ea-832b-06934e762e92)![图片 5](https://media.github.ibm.com/user/228551/files/07716480-2302-11ea-99de-2bfcf7024a65)

&nbsp;&nbsp;&nbsp;&nbsp;c. User Preferences
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[User Profile Preferences in Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.widget.doc/topics/tresport_preferences.html)
![图片 6](https://media.github.ibm.com/user/228551/files/37b90300-2302-11ea-82e0-476e83078690)
![图片 7](https://media.github.ibm.com/user/228551/files/38ea3000-2302-11ea-8051-cdae8e89020d)

&nbsp;&nbsp;&nbsp;&nbsp;d. Notifications
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Notifications that you can expect in Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.widget.doc/topics/cresport_notifications.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Enabling Email for Process Portal Notifications](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.wle.widget.doc/topics/cresport_notifications.html)
![图片 8](https://media.github.ibm.com/user/228551/files/95504e00-2308-11ea-8452-058dfa7a6805)
![图片 9](https://media.github.ibm.com/user/228551/files/95504e00-2308-11ea-8116-234053bab71f)

&nbsp;&nbsp;&nbsp;&nbsp;e. Social features
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Process Portal Social Features](http://www.redbooks.ibm.com/redbooks/pdfs/sg248355.pdf) (section 5.1.9 - Social features)
![图片 1](https://media.github.ibm.com/user/228551/files/d9435300-2308-11ea-9921-15a4fa953578)

&nbsp;&nbsp;&nbsp;&nbsp;f. Process Portal Search Index: [Process Portal Search Index Comprehensive](https://www.ibm.com/support/pages/node/1074028)

3.Modifying the Process Portal User Experience
&nbsp;&nbsp;&nbsp;&nbsp;a. Settings
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Process Portal mashup custom properties](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/ref_portal_customprops_mashups.html)
&nbsp;&nbsp;&nbsp;&nbsp;b. Customization
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Customizing Process Portal](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/cresportal_customoverview.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Customizing Themes](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.admin.doc/topics/tadm_resportal_custom_theme.html)

## Troubleshooting

#### Data Collection

[Process Portal Mustgathers](http://www-01.ibm.com/support/docview.wss?uid=swg21656267)
https://www-01.ibm.com/support/docview.wss?uid=swg21656267

**1.Screen captures**
Screen captures or a web session with the customer will help to quickly identify the component of Process Portal and the symptoms users are experiencing. 

**2.Network trace HAR file**
The Fiddler tool can be used to capture a SAZ file browser network trace, but it is easier for customers to utilize their browser’s developer tools to capture a HAR file via the Network tab. IE11, Firefox, and Chrome all generate HAR file types which can be imported into Fiddler for analysis. 

The network trace is extremely useful in analyzing most Process Portal issues (i.e. performance problems, UI display problems, unexpectedly missing dashboards or saved searches or tasks, erroneous notifications, etc.). You can review the overall elapsed time it takes to complete each REST API call that is used to populate the data in Process Portal, Request and Response data, and headers/cookies. 

The following steps can be provided to the customer to capture a HAR file: 
&nbsp;&nbsp;&nbsp;&nbsp;a. Open the browser and press the F12 key to open the browser’s developer tools
&nbsp;&nbsp;&nbsp;&nbsp;b. Select the Network tab
&nbsp;&nbsp;&nbsp;&nbsp;c. Reproduce the issue
&nbsp;&nbsp;&nbsp;&nbsp;d. Right click the content in the Network tab
&nbsp;&nbsp;&nbsp;&nbsp;e. Select the option to export the content as a HAR file
&nbsp;&nbsp;&nbsp;&nbsp;f. Upload the HAR file to the case

**3.Browser Console logs**
The browser console logs are useful to collect errors and information when UI content is not displaying as expected. 

**4.Business Automation Workflow server logs & FFDC files**
The server logs will provide details about non-UI related errors such as authorization checks failing, long running REST API calls, authentication failures, etc. Search error messages against RTC, Salesforce, and internet search engines to find related IBM content, APARs, or cases to get more information about the errors. 

**5.TeamworksConfiguration.running.xml file**
The TWCR file contains the configuration properties that might be important to review in order to see if customers have made any modifications that might impact the issues they have or if there’s opportunity to alleviate an issue by recommending a configuration change to the customer. 

#### Data Analysis

Using the Network trace data to review REST API calls...

**/rest/bpm/wle/v1/searches/actions**
Retrieves the saved search action roles for the current user. The roles indicate whether the user is allowed to create shared saved searches and whether the user is allowed to administer other users' shared saved searches.
REST interface for BPD-related resources - Saved Search Definition User Actions Resource - GET Method

**/rest/bpm/wle/v1/user/current?includeInternalMemberships=false&includeEditableUserPreferences=true&parts=all**
Retrieves information about a user that has been defined to the IBM Business Automation Workflow installation. Response used for authorization to determine what dashboards, services, tasks, etc. the user can view in the UI.
REST interface for BPD-related resources - User Resource - GET Method

**/rest/bpm/wle/v1/searches/tasks/meta/businessDataFields**
Retrieves the list of business data variables that can be used to search for tasks and process instances in Process Portal. 
 REST interface for BPD-related resources - Search Definition MetaData By Type Resource - GET Method

**/rest/bpm/wle/v1/exposed**
Retrieves the items (dashboards, saved searches, processes, startable services, etc.) that populate the Dashboards list and the Launch List. Performance of this call is heavily impacted by the number of snapshots in the environment. 
REST interface for BPD-related resources - Exposed Items Resource - GET Method

**/rest/bpm/wle/v1/tasks?calcStats=true**
Executes a saved search to retrieve the tasks to populate the task list in Process Portal. Saved searches query the database directly. The out of the box saved search used by the Work dashboard is named “IBM.DEFAULTALLTASKSLIST_75”. 
REST interface for BPD-related resources - Search Execution Resource - GET Method





