## Headlines
*  Start testing Lightning in staging! Provide feedback via <a href="https://ibm-analytics.slack.com/messages/CDJ8X6TQA" target="_blank">#csp-lightning slack channel.</a>
* Coming up in Sprint 22: We are Reorganizing the Case Details into smaller more meaningful groups.

#### Reminder:  Lightning is in now staging
*  The Classic Salesforce Console view remains the default.
*  Click <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">here</a> to see how to switch from Classic to Lightning and Lightning to Classic (scroll to the very bottom of that page).
*  Click <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">here</a> to learn more about the Lightning Console and see the comparison between the views.
*  All are welcome to test and provide feedback via the <a href="https://ibm-analytics.slack.com/messages/CDJ8X6TQA" target="_blank"> #csp-lightning slack channel</a> 
*  Note: We're using your feedback in staging to iterate on the experience prior to releasing to production.  What is currently in staging will evolve.


## <a id="contribution" name="agentconsoleupdates"></a>Agent Console Updates
<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=6182" target="_blank">#6182</a> - Reorganize the Case Details into smaller more meaningful groups.
#### This feature is being given closer evaluation and will not launch in Sprint 22.
*  The main details section of Case Details page in the Classic console, has a large and wide variety of items that could be grouped into smaller related groups.  
*  Case Details also has items that are not used by Support Agents which may cause confusion.
*  The item choices were re-evaluated and organized into smaller, relevant groups.

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5932" target="_blank">#5932</a> - Ensure Default Mission Team Has At Least 1 Member 
*  This has been launched in Production.

#### Agent Console Defects Fixed
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=6089" target="_blank">#6089</a> - Post-to-Parent Case from a Skill Case was not triggering a customer notification. 
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5518" target="_blank">#5518</a> - Daily Backlog and Most Recent Assignment updated when using Re-Assignment
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=6040" target="_blank">#6040</a> - On classification correction revert the last assignment time in Agent Assignment Profile
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5974" target="_blank">#5974</a> - Ability to disable a Support Skill in a Support Mission
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5932" target="_blank">#5932</a> - Ensure Default Mission Team Has At Least 1 Member
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5615" target="_blank">#5615</a> - Clear Mission Team Field When Case is Duplicated
*  <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=6129" target="_blank">#6129</a> - The (Re)-Assignment Transfer UI should not refresh tab, clearing Post and Update Status unsaved content.


### Watson in Support
<a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/282" target="_blank">#282</a> Blueworks Live Automation - First Stage 
*  A new automation has been created for Blueworks Live Support Team that will help provide customer account information from their backend Blueworks Live Super User Administration Tool and show it for every Blueworks Live Salesforce case that gets created.
*  The automation will trigger for both Salesforce web cases and cases created via email-to-case.
* Support Agents use this customer account information to help triage customer issues like account expirations or license renewal. This automation will improve their time to resolution (TTR) by preventing them from having to switch context from the Salesforce Service Console to their backend Tool.
* Everything a Support Agent needs to perform the initial analysis, will be right there in the Salesforce case.
* A training video featuring Blueworks Live Automation is available  <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/automation/training" target="_blank">here.</a>


<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=1773" target="_blank">#1773</a> - This is a feature that enables internal product teams to run a validation step  through a slack channel command called "Wisbot" before deploying their Chatbot workspace in production to catch common errors teams make.

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=1734" target="_blank">#1734</a> - Chatbot and Watson Support Search (WSS) has the ability to identify product name searches 
Chatbot or WSS can identify when user is looking for more information about a specific product, it will automatically return the user to the corresponding Community product page link.


#### Watson in Support Defects Fixed
#1051 - Fixed defect for corrupted click data if user edits the search but does not submit it in Support Search Web.
#1048 - Fixed defect to avoid displaying blank page in Support Search Web.

### Field Service
The launch date for Singapore has been postponed.  The new target date is TBD.

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5979" target="_blank">#5979</a>  - Changes to customer preferred start/stop should update earliest start / due date 
*  This is targeted to launch in Sprint 22.

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5978" target="_blank">#5978</a>  - Scheduler UI layout improvements - Reduce errors and time-in-motion
*  This is targeted to launch in Sprint 22.
*  Several improvements for the Service Appointment Details Popup in the Dispatcher Console have been made:
    *  New fields in the Work Order tab
      *  Product
      * Customer preferred start date/time
      * Customer preferred stop date/time
      * Work Order create date
      * Work Order owner
      * Legacy Reference NumberNew fields in the Service Appointment tab
      * Assigned resource
      * In JeopardyRelated tab
*  Related tab
    * Added "Due Date" to the Service Appointment list view
  

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5969" target="_blank">#5969</a>  - The WO status is not updated on Part Requests real-time  

*  The "Work Order Status" field on the Parts Request page will now reflect the proper status when the Work Order status is changed.

## Community

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=3651" target="_blank">#3651</a> Live Agent Chat routing by product to utilize Mission Team Routing and Assignment
An issue was recently discovered with Mission Team Routing and Assignment for *chat* so we have reverted to the previous Support Mission association model for Chats. Currently the target date for re-launching this is TBD

*  If you have set up a chat  mission team (Channel=Chat in the Mission Team Configuration), note that it will not work until we reinstate the feature.
*  Please do not set up any new chat-based mission teams until the feature has been redeployed.
*  To review, routing logic for this is as follows: Client clicks on Chat with agent, logic will look for agent that has the skill (product) that is in context of where the client clicked the button, if that skilled agent is available, chat is routed to that agent, if that skilled agent is not available the request to chat goes into the support mission looking for other available agents

<a href="https://funnel.w3ibm.mybluemix.net/#/open?q=6097" target="_blank">#6097</a> – Improve the experience of Question Quality Improvement when clients are opening cases.
*  The new visual indicators help clients enter a better problem description.
*  The indicator at the bottom of the Problem Description input will offer more detail to explain why IBM needs certain information about the problem.
![image](https://media.github.ibm.com/user/146797/files/ac98dd22-e0e0-11e8-94b1-5b874415d65b)

## For your awareness
*  Time changes are happening in various regions this weekend. If you encounter an error with your Salesforce Session Timer, make sure your Salesforce time matches your computer time.

*  Entitlement
    *  The team is continuing to work on back-end support for entitlement.  As we deploy each phase of the entitlement infrastructure, changes may or may not be visible or actionable from the Agent Console.  Agents will want to watch this space and the DBA-Education to understand when business processes or the agent/customer experience will change based on entitlement support.

*  Training Blitz sessions ended this week
The Training Blitz link to post-session recordings are found <a href="https://ibm.box.com/s/vx6g47jiz0k7ypnnjhyd4q6wzomaqwwh
" target="_blank">here.</a>  

*  New!  Monthly "Ask Bob" sessions start on November 8!
    *  Here is your chance to ask Bob McDonald ANYTHING about IBM's Client Support transformation journey.  No prepared deck!  No set agenda!  Just 30 minutes of Ask Bob time.
    *  Already enrolled in the Thursday Client Support Transformation Weekly Meetings? - No action required, you already have this on your calendar.  
    *  If not, here is the <a href="https://ec.w3bmix.ibm.com/event.html?id=B7C781E8048024DE852581DF00581C3C" target="_blank">link to enroll</a> and start thinking of what you would like to Ask Bob. 

