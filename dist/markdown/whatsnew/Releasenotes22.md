## Headlines
* [User Admin Mgmt. is launching in Staging on Thursday, November 8 - TESTERS WANTED!](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes22#admintesters)
* [We are improving the experience of Question Quality Improvement (QQI) when clients are opening cases](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes22#qqi)


## Agent Console
<a href="https://funnel.w3ibm.mybluemix.net/#/open/6182" target="_blank">#6182</a> - All your case detail fields are moving around in Classic and will be organized into smaller more meaningful groups.
#### This is in staging and is targeted to deploy in production on November 13. This is a mid-cycle deployment due to the Thanksgiving Holiday in the US.
*  The layout will be easier to find things and will help familiarize you with how things will look in Lightning.     
*  Access the PDF showing BEFORE and AFTER screenshot <a href="https://ibm.box.com/s/rhfi3oetmrq12j2px94j700147n2gqwa" target="_blank">here.</a>


### Agent Console Defects Fixed
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/6089">#6089</a> - Post-to-Parent Case from a Skill Case was not triggering a customer notification. 
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5518">#5518</a> - Daily Backlog and Most Recent Assignment updated when using Re-Assignment
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/6040">#6040</a> - On classification correction revert the last assignment time in Agent Assignment Profile
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5974">5974</a> - Ability to disable a Support Skill in a Support Mission
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5932">5932</a> - Ensure Default Mission Team Has At Least 1 Member
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/6129">#6129</a> - The (Re)-Assignment Transfer UI should not refresh tab, clearing Post and Update Status unsaved content.
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/2319">#2319</a> - The Live Agent Omni Channel Accept/Decline popup includes the Product Name
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5230">#5230</a> - Assignment Agent Daily total will be reset to zero after the current time - last assigned case time is greater then the Shift Duration.  This is not a perfect solution but a substantial improvement over the current logic where the Daily total is not reset until the agent is assigned a new case on the following day.
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5988">#5988</a> - Skill Case will use the parent case severity on initial creation
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5947">#5947</a> - Removing Default MT Members removes agent from SM Default Queue
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5547">#5547</a> - Case owner is changed to Support Mission global queue when Auto Select Next Best Agent is chosen
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5946">#5946</a> - Added validation that a Support Skill can not be deleted if they are used in a Mission Team
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open/5887">#5887</a> - For Omni Channel enabled mission team, the Target Team Routing configuration displays ‘Omni’ and the Target Agent field is hidden


### ARM Updates
The extra ARM buttons (outlined in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/WhatsComing22">"Get Ready for Sprint 22"</a>  blog) designed for the Lightning console, have been delayed and are targeted to launch in Sprint 23 (if the Lightning console goes live in production in Sprint 23).


### Watson in Support
#### New Case Prioritization features
<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/1499">#1499</a> - Default view from CP2 is now the default view in CP3 which includes:
*  Default pipelines for all internal statuses for open cases.
*  The custom field `Mine` which filters on the current user and can be shared with other users.
*  The ability to hide empty pipelines.

<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/1508">#1508</a> - Un-saved changes are preserved when closing the browser or navigating away from Case Prioritization within the SalesForce console.

<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/1459">#1459</a> - The user is alerted of un-saved changes when loading a new view- Improved readability of field names in filter drop downs. 

<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/1456">#1456</a> - Visual indicator in Current view display to indicate if view is a shared view

<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/1384">#1384</a> - Pipeline order is consistently maintained when loading a view


<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/267">#267</a> - Case Prioritization will now consider Next Contact Date when calculating the Watson Score, so that the Support Agent knows whether the Case Priority is green (no need to take action yet) or red ( due date is here or passed).


<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/282">#282</a> Blueworks Live Automation - First Stage 
*  A new automation has been created for Blueworks Live Support Team that will help provide customer account information from their backend Blueworks Live Super User Administration Tool and show it for every Blueworks Live Salesforce case that gets created.
*  The automation will trigger for both Salesforce web cases and cases created via email-to-case.
*  Support Agents use this customer account information to help triage customer issues like account expirations or license renewal. This automation will improve their time to resolution (TTR) by preventing them from having to switch context from the Salesforce Service Console to their backend Tool.
*  Everything a Support Agent needs to perform the initial analysis, will be right there in the Salesforce case.
*  A training video featuring Blueworks Live Automation is available <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/automation/training" target="_blank">here.</a>


<a href="https://github.ibm.com/Watson-in-Support-Chatbot/chatbot/issues/1773">#1773</a>
This is a feature that enables internal product teams to run a validation step  through a slack channel command called "Wisbot" before deploying their Chatbot workspace in production to catch common errors teams make.


<a href="https://github.ibm.com/Watson-in-Support-Chatbot/chatbot/issues/1773">#1734</a> - Chatbot and Watson Support Search (WSS) has the ability to identify product name searches 
*  Chatbot or WSS can identify when user is looking for more information about a specific product, it will automatically return the user to the corresponding Community product page link.


### Field Service
#### The following Field Service Git issues are targeted to launch in Sprint 22.
<a href="https://funnel.w3ibm.mybluemix.net/#/open/5979">#5979</a> - Changes to customer preferred start/stop should update earliest start / due date
*  This Git issue is most relevant to the Control Center role.
*  The customer preferred start and stop time will now be updated in the Service Appointment as long as the appointment is not "In Progress" or "Complete". 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/5978">#5978</a> - Scheduler UI layout improvements - Reduce errors and time-in-motion
*  This Git issue is most relevant to the Dispatcher role.
*  Several improvements for the Service Appointment Details Popup in the Dispatcher Console have been made:
    *  New fields in the Work Order tab
    *  Product
    *  Customer preferred start date/time
    *  Customer preferred stop date/time
    *  Work Order create date
    *  Work Order owner
    *  Legacy Reference Number
    *  New fields in the Service Appointment tab
    *  Assigned resource
    *  In JeopardyRelated tab
 *  Related tab
    *  Added "Due Date" to the Service Appointment list view


<a href="https://funnel.w3ibm.mybluemix.net/#/open/5969">#5969</a> - The WO status is not updated on Part Requests real-time 
*  This Git issue is most relevant to the Control Center role.
*  The "Work Order Status" field on the Parts Request page will now reflect the proper status when the Work Order status is changed.


#### The launch date for Singapore has been postponed.  The new target date is TBD.



## Community
## <a id="admintesters" name="admintesters"></a> TESTERS WANTED FOR USER ADMIN
<a href="https://funnel.w3ibm.mybluemix.net/#/open/4504">#4504</a> - User Admin Mgmt. is launching in Staging on Thursday, November 8 - TESTERS WANTED!<a id="useradminmgmt" name="useradminmgmt"></a> 
*  This feature on the Support Community will allow administrators and users to manage and request access.
*  A dedicated Slack channel has been set up to post testers' feedback and any questions <a href="https://ibm-analytics.slack.com/messages/CC49AB1RR #csp-user-caller-mgmt">#csp-user-caller-mgmt</a> 
*  Testers are needed to go into staging and act in the capacity of one of the following roles: Support Agent, Salesforce Administrator or IBM Client. To assist the tester, we will post a test script to use for each role on the <a href="https://ibm-analytics.slack.com/messages/CC49AB1RR #csp-user-caller-mgmt">#csp-user-caller-mgmt</a> Slack channel
*  The feature is targeted for deployment to Production on 12/1.
  

* <a id="qqi" name="qqi"></a> Question Quality Improvement
<a href="https://funnel.w3ibm.mybluemix.net/#/open/6097">#6097</a> – Improve the experience of Question Quality Improvement when clients are opening cases.<a id="question" name="question"></a>
*  New visual indicators helping clients enter a better problem description
*  Indicator at bottom of Problem Description input will offer more detail on why IBM needs certain information about the problem.

![image](https://media.github.ibm.com/user/146797/files/a84a1592-e270-11e8-959c-c11ebd869c99)

<a href="https://funnel.w3ibm.mybluemix.net/#/open/3651">#3651</a> Live Agent Chat routing by product to utilize Mission Team Routing and Assignment
*  An issue was recently discovered with Mission Team Routing and Assignment for *chat* so we have reverted to the previous *  Support Mission association model for Chats.  Currently the target date for re-launching this is TBD.


### For your Awareness
*  We are reducing the number of deployments as we approach the end of the year. The following are the planned deployment dates for the remainder of 2018:
    *  November 6: Sprint 22 Release 
    *  November 13: Reorganizing Case Details Fields in Classic targeted for launch in Production 
    *  December 4: Sprint 23 Release


*  Entitlement
    *  The team is continuing to work on back-end support for entitlement.  As we deploy each phase of the entitlement infrastructure, changes may or may not be visible or actionable from the Agent Console. Agents will want to watch this space and the DBA-Education to understand when business processes or the agent/customer experience will change based on entitlement support.


*  Monthly "Ask Bob" sessions start on November 8!
    *  Here is your chance to ask Bob McDonald ANYTHING about IBM's Client Support transformation journey.  No prepared deck!  No set agenda!  Just 30 minutes of Ask Bob time.
    *  Already enrolled in the Thursday Client Support Transformation Weekly Meetings? - No action required, you already have this on your calendar.  
    *  If not, <a href="https://ec.w3bmix.ibm.com/event.html?id=B7C781E8048024DE852581DF00581C3C" target="_blank">link to enroll</a>
    *  Action:  Enroll and start thinking of what you would like to Ask Bob. 

