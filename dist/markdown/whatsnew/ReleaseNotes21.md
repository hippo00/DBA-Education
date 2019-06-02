## Headlines
* [Watson Language Translator adds Portuguese to English, French to English and German to English for Salesforce Cases. Details posted](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes21#translate)
* [Milestone Warning and Milestone Missed checkboxes are in production.](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes21#milestone)

## Agent Console Updates
### <a href="https://funnel.w3ibm.mybluemix.net/#/open/3651" target="_blank">#3651</a> - Live Agent Chat routing by product to utilize Mission Team Routing and Assignment
An issue was recently discovered with Mission Team Routing and Assignment for *chat* so we have reverted to the previous Support Mission association model for Chats. 
*  If you have set up a chat  mission team (Channel=Chat in the Mission Team Configuration), note that it will not work until we reinstate the feature.
*  Please do not set up any new chat-based mission teams until the feature has been redeployed.
Currently the number of Mission Teams that have set up a Chat Mission Team is minimal.
*  To review, routing logic for this is as follows: Client clicks on Chat with agent, logic will look for agent that has the skill (product) that is in context of where the client clicked the button, if that skilled agent is available, chat is routed to that agent, if that skilled agent is not available the request to chat goes into the support mission looking for other available agents

### The new Lightning Console environment will launch in staging this week. 
* We'll announce when it is in staging and all are welcome to get hands-on experience with the new UI.
* For an overview of the Lightning Console, click <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">here</a> to access the DBA-Education and learn more.
* Provide feedback via the <a href="https://ibm-technical-support.slack.com/messages/CDJ8X6TQA" target="_blank">#csp-lightning Slack Channel</a> rather than open a case.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5692" target="_blank">#5692</a> - OOO flag on Agent Assignment Profile
This was launched in Sprint 21.
*  An agent can use the Home page to mark as Out Of Office which prevents the agent from being assigned with auto-assignment.  This OOO status is also listed in the Agent Assignment Profile.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5079" target="_blank">#5079</a> - What's New popup 
This was launched in Sprint 21. 
*  This new feature will alert Agents to Sprint Release blogs, important 
informaton and reminders.
### <a id="milestone" name="milestone"></a><a href="https://funnel.w3ibm.mybluemix.net/#/open/4227" target="_blank">#4227</a> -Changes to Escalated checkbox, and the additions of the Milestone Warning and Milestone Missed checkboxes 
This was launched in Sprint 21.
*  The Escalated field is now agent settable from the Case Details page, and is no longer auto-tethered to milestone warnings/missed milestones.
*  Because the Salesforce logic on the built-in Escalated field caused the flag to be removed when a case was closed, we added two new milestone checkboxes to track missed milestones, Milestone Warning and Milestone Missed.  These are not cleared when the case is closed. 
*  Details on these fields and associated logic have been added to the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/fields " target="_blank">DBA-Education.</a> 

#### Console Defects Fixed
*  #5937 - Disable history tracking for certain fields like Interested Party Notifications and Notification action
*  #5508 - Improve the iNPS Language in the Survey
*  #5953 - Case Transfer UI: on Cancel don't display success message, just refresh
*  #5755 - Mission Team UI: Allow Assignment Method to be editable on the default Mission Team
*  #5957 - Keyword field should be editable for Skill Cases
*  #5752 - Give Support Managers ability to create Support Skills in Support Mission
*  #5885 - Mission Team UI: changing Assignment Methods should not remove Mission Team Members

### ARM Updates
*  Added history tracking section to the asset, category, and recommendation editors
*  This is from an RFE submitted by Harriett Johnson.
#### ARM Defects Fixed
*  #5822 - Reduced form spacing on asset/category/recommendation editors 
*  #5822 - Saving or closing the asset editor shows blank screen 
*  #5822 - Reduced form spacing on ARM tab 
### <a id="translate" name="translate"></a><a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Watsonlanguagetranslator" target="_blank">#1453</a> - Watson Language Translator adds French, Portuguese, and German for ALL Support Missions

This was launched in Sprint 21.
*  After the deployment of Spanish on August 16, the Watson Language Translation service will add Portuguese to English, French to English and German to English for Salesforce Cases.
*  Language translations for incoming Portuguese, French, German and Spanish case updates in Salesforce will be automatically detected and translated to English by the Watson Language Translator. 
*  This will be applicable to all Support Missions.

### Support Search Web site can be found <a href="https://ssw-ui.mybluemix.net/" target="_blank">here.</a>
*  Support Search Web is a new web site to search and browse public only IBM documents. This site follows the same design and functionality as Support Search with Watson in the Agent Console but is available to all IBM users (including all non-Salesforce users).

#### Support Search with Watson Console Enhancements
### <a href="https://funnel.w3ibm.mybluemix.net/#/open/967" target="_blank">#967</a> - Improved search results for internal documents (Technotes are now searchable by technote ids)
### <a href="https://funnel.w3ibm.mybluemix.net/#/open/1017" target="_blank">#1017</a> - Newly published Drupal documents will be available in Support Search within a couple of hours with hourly refreshes made to the Support search collection.
#### Watson Defect Fixed
#### <a href="https://funnel.w3ibm.mybluemix.net/#/open/988" target="_blank">#988</a> - Support Search on the Console can return search results that are greater than 6MB.


## Field Service Updates 
### New!  The Field Support Services content migrated from the CSP Wiki to the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/architecture/fieldservice" target="_blank">DBA-Education </a> 
*  This is Phase one of the migration, which was to create a bulleted list of docs with hotlinks to PDF documents.
*  Phase 2 will be replacing the .pdf files with anchored tags in the DBA-Education.  This will allow filtered search of all content.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5470" target="_blank">#5470</a> - New Parts added to Salesforce are not automatically added to the FSL price book  
*  Created a new work flow called "Assign Parts to the FSL Price Book."

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5351" target="_blank">#5351</a> - Updating the address on the Work Order should update the address on the Onsite Service Appointment 
This was launched in Sprint 21.
*  Automation created to update the Onsite Service Appointment whenever the Work Order address is updated.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5031" target="_blank">#5031</a> - Store the reason why a Service Appointment went to Schedule Exception  
*  Once a SA is generated automatically it will try to automatically calculate the Start and Due date based on some checking.

### Improvements added to the Field Service Lightning Mobile Application
This will be available on October 24.
### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5744" target="_blank">#5744</a> - Several quick actions have been consolidated into the “Work Order Action” category. 
*  Once the user has opened up the quick actions, they can click the “Work Order Action” in order to then select a specific action to complete that action: Acknowledge, Convert to Billable, Log a Call, Need Additional Time, Return to Service, or Update Work Order Status.

### #5254 - The quick actions available in the mobile app is a consolidated process that users will experience upon updating the work order status to “Work Order Complete, Closed”, “Work Order Failed, New WO Required”, or “Work Order Complete, New Work Order Required."
*  The user will be given the opportunity to select the work order status. After doing so, they will review any time sheet entries or parts consumed for that work order. 
*  Documentation on the <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=e4a9992d-ce1a-4a49-902e-8d3b55524e64" target="_blank">DBA-Education</a> page has been updated to reflect these improvements.

The process document<a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=0f0fe728-ea54-49ee-a95e-5eb9da980e8d" target="_blank"> "How to find an RCMS Call Number in Salesforce"</a>  was recently updated with new screenshots and the following Tip: If you don’t have the country code handy you may want to replace the country code by R* (e.g.  R*T29XX73). This will search all countries.


## Community Updates
### <a href="https://funnel.w3ibm.mybluemix.net/#/open/5758" target="_blank">#5758</a> - Case email notification update
*  If a client is getting only the base email on case update we now have a reminder at the top of the email that they can change their settings and get the title and last agent update in the email.
*  There will be a link in the email taking the client to the Community and to the correct location to make this update.
*  This will help promote this function and educate clients that it is available.  


## For your awareness 
#### Attention:  We have changed the name of our #sf4s-announcements Slack channel to #CSP-Announcements.  
*  The change should be seamless, you will only notice that one name has disappeared and replaced by #csp-announcements.  
*  This channel is used to convey important announcements via Slack.

#### Are you taking advantage of our weekly Training Blitz sessions? 
#### Demo coming up:  Lightning Console
*  Tuesday, October 30, 10:00AM ET <a href="https://ec.w3bmix.ibm.com/session.html?id=AAAFF7CB3BBF49968525832F0081E6EC&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link</a> / Mtg. ID 925 715 625
*  Tuesday, October 30, 6:00PM ET<a href="https://ec.w3bmix.ibm.com/session.html?id=138E10C5338590BD8525832F00824D6C&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link</a>  / Mtg. ID 926 513 528
*  Wednesday, October 31, 10:00AM ET <a href="https://ec.w3bmix.ibm.com/session.html?id=9F3162AF97EB9B648525832F0082B3C6&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link</a> / Mtg. ID 925 715 625
*  Wednesday, October 31, 6:00PT ET <a href="https://ec.w3bmix.ibm.com/session.html?id=E8AC7BD3D10A22D68525832F00832191&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link</a> / Mtg. ID 926 513 528
The Training Blitz schedule, links to enroll, direct WebEx links and links to post-session recording are found <a href="https://ibm.box.com/s/vx6g47jiz0k7ypnnjhyd4q6wzomaqwwh" target="_blank">here.</a>  

#### New!  Monthly "Ask Bob" sessions start on November 8!
*  Here is your chance to ask Bob McDonald ANYTHING about IBM's Client Support transformation journey.  No prepared deck!  No set agenda!  Just 30 minutes of Ask Bob time.
*  Already enrolled in the Thursday Client Support Transformation Weekly Meetings? - No action required, you already have this on your calendar.  
*  If not, <a href="https://ec.w3bmix.ibm.com/event.html?id=B7C781E8048024DE852581DF00581C3C" target="_blank">here</a> is the link to enroll.  
*  Action:  Enroll and start thinking of what you would like to Ask Bob. 

#### The public-facing video featuring Salesforce "Search" has been improved!  The link to this <a href="https://mediacenter.ibm.com/media/t/1_hjcvgybl" target="_blank">video</a> can be shared with our clients! 
