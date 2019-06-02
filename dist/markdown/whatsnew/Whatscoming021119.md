## What's coming in Sprint 2 & 3, 2019
*  Business Continuity solution to 'keep the lights' on     
*  Coming soon - Lightning as option in Production for all


### Sprint 2 and 3 Timing:
Sprint 2 deployment dates:
Staging: 2/12/19
Production: 2/19/19 (planned)
Sprint 3 targeted deployment dates:
Staging: 2/12/19
Production: 2/19/19 (planned)


*  Sprint 2 is primarily technical debt, with no agent or user visible updates.
*  Sprint 3 includes the agent/user-visible updates below: 




**New Business Continuity solution for the Cognitive Support Platform is a ‘keep the lights on’ solution allowing Agents to do rudimentary Case handling when Salesforce is unavailable.**  

**As an agent, how do I do my work if I can’t get to the Agent Console?**   
*  This is targeted for Production on February 19.
*  The solution consists of a near real-time replica of the critical Salesforce functions: Case creation and Case Editing to support emergency case management and basic integration with supporting systems such as TPS and ECuRep.   
*  Documentation will be added to the DBA-Education.  
*  Training video will be available on February 19.


## Agent Console Updates

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7212" target="_blank">#7212</a> Improved logic to handle a Support Mission Change for sev 1 Case to correctly send escalation email 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7172" target="_blank">#7172</a> Corrected Entitlement logic for AVP to only include Offering IDs of FC, PA,PX 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7115" target="_blank">#7115</a> Match Account compact layout in Lightning with Classic to include Account Name, Parent Account, Billing Address and Shipping Address

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7111" target="_blank">#7111</a> Include "Support Skill" instead of just Skill element in SF Escalation email to Pager Duty 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7090" target="_blank">#7090</a> Show the entitlements on the contact detail page in Lightning  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7086" target="_blank">#7086</a> Only update internal status to "Diagnostic file has been received" once the Diagnostic is completely uploaded 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7018" target="_blank">#7018</a> Move the Reopen case action from the Feed quick action to the highlights panel for Lightning  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6591" target="_blank">#6591</a> Include case information in task reminders 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/4288" target="_blank">#4288</a> Allow agents to remove case association to defects  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7356" target="_blank">#7356</a> After the Refresh of Dev, Int and Staging from Production, ".test" was added to all emails preventing Agents from receiving emails during testing.  This affects the Escalation Team, Mission Team and Account custom email.  Agents who want these emails must go to each environment and correct the email by removing ".test"


**Defects Fixed**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7329" target="_blank">#7329</a> Allow agents to deactivate hybrid must gather definitions  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7304" target="_blank">#7304</a> Move ARM Actions to highlights panel from Feed for Internal Support Case type on lightning  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7272" target="_blank">#7272</a> "Virus found" is a missing value for Diagnostic object in ECuRep  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7162" target="_blank">#7162</a> Corrected Duplicate Post when using MPPC and only Status is changed after a Post  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6138" target="_blank">#6138</a> Session Timer will stop running when the Case Tab is Closed in lightning 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6250" target="_blank">#6250</a> Spinner stays on the screen after Case Owner change.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6091" target="_blank">#6091</a> - Splitview handle disappears on expand
*  When the Splitview is clicked and the section expands, the button to collapse it disappears. When the page is refreshed, the collapsing button returns. If it is collapsed and expanded after the refresh, the collapsing button remains.
*  This was fixed in Spring 19.


### Hardware / Field Service / Control Center
A new slack channel has been set up to post important updates for our Field Services (FSL) organization.  Please join the #csp-fsl-announcements channel using this <a href="https://slack.com/app_redirect?channel=CG3KQU2FQ" target="_blank">link.</a> This is a one-way channel to receive updates but not for others to post responses or questions.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6384" target="_blank">#6384</a> - MVS: Utilize fixed resolution comments when SSR is resolving case on mobile
For Lenovo x86 work orders, resolution comments will now be a dropdown list instead of a freeform text field.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/5965" target="_blank">#5965</a> - "In Jeopardy" List View in Dispatcher Console should not display Completed Status Service Appointments
*  Provided some automation to turn off the "In Jeopardy" flag so that completed service appointments will no longer show up in this related list.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7114" target="_blank">#7114</a> - Update case feed with reason when Field Service sets needs attention flag
*  When the "needs attention" flag is set, the Control Center will see the reason why the flag was set in the case feed.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7025" target="_blank">#7025</a> - Part Pick up SA does not get created when "Parts Required to Complete the Work?" field is set to Yes
*  Fixed a problem where the Service Appointment wasn't created when Parts Required was set to Yes.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7125" target="_blank">#7125</a> - Phase 2: Finding the right resource for the HW case and/or work order
*  Prevented duplicate account routing rules from being created and allowed preferred resource rule to work when the "Direct to Field" flag was unchecked.


**Note to SSR's: SSR's need to download the latest FSL version (v5.2.0 or later) to fix a known issue related to a date/time selection whle creating resource absences or using any date/time related quick actions.**


### Watson in Support:

**Routing and Ranking**

Automated some of the processes/tasks when support missions provide the list of cases per skill. This increases the efficiency of the data scientists to work on on-boarding support missions. 


**Case Prioritization** 

*  Ability to resize the side bar in the grid view. Previously it was possible only in the Kanban view. 
*  Enabled type-ahead functionality in the filter drop down
*  Ability to share views by Support missions and Mission Teams
*  Show the name of the view when the left panel is collapsed (hidden)
*  Use date/time pickers for Date/time fields in filter/pipeline criteria
*  Added case owner alias to filters
*  Created new MiniCP3 (Case Prioritization widget at the bottom) for the lightning experience
*  User's Case Team cases included with all filterable cases.


**Support Search with Watson**

Support Search UI usability enhancements:
*  Ability to save preference by user to remember filters and facets 
When searching with "Support Search with Watson", then switching to cases (or other) view and back it starts from Scratch and no previous search results are retained. Same happens when clicking on a search result and returning with browser back button (as no X to close is available) we're back to the welcome screen. Sending search result list or individual search hits to their own tabs helps make the search much more usable.
*  Updated Console experience for Lightning
*  Fixed Defect - Feedback for curated answers does not work.


**Chatbot**

Hand off to Live Agent Chat by Chatbot. 
* IBM Clients using Chatbot can get handed off to a Live Agent in a streamlined way, if they are unable to get an answer from the Chatbot.


**ARM Updates**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7215" target="_blank">#7215</a> - Defect fixed - Selecting an asset after filtering a category does not retain filtering after reload.


## Community Updates
<a href="https://funnel.w3ibm.mybluemix.net/#/open/5753" target="_blank">#5753</a> - Improved client message when updating user profile on the IBM Support site (/mysupport) 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6637" target="_blank">#6637</a> - When a user opens the "Support Access" option do not pre-select access levels if they have more than one account associated to their contact. This change is based on client feedback.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6630" target="_blank">#6630</a> - When an administrator receives an email informing them of an access request or a role change, we will direct them to Pending Requests so they can see them with no clicks.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6633" target="_blank">#6633</a> - When an administrator removes or changes a user's access the IBM Support site, there is a space for the administrator to enter a reason or explanation for the change. The end user will be notified of the change in an email.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7188" target="_blank">#7188</a> - A user on the IBM Support site can now provide a reason for an access request or role change. The administrator will be able to see this detail when viewing each request. 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6745" target="_blank">#6745</a> - When opening a Case, clients have been asking to see the country listed next to the ICN. This helps them to choose the correct ICN. 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6321" target="_blank">#6321</a> - The email template for a user who has not modified their notification settings has been updated.  This will bring more attention to the settings; educating clients that "Title" and "last reply from engineer" can be included in the email.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7324" target="_blank">#7324</a> - When users create SaaS support access requests, we have a 'reason for access' optional field. Set this field on case creation so that agents can access this field and the reason provided by the user. Agents can now view this field.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7068" target="_blank">#7068</a> - Improvement in UI for Engineers when a client is auto approved or auto denied for registration. When users request for access are automatically denied, it shows their own name as the denier. It would be helpful if the name showed IBM or something more directly related. The approver name will now show as '"IBM Support."


**Defects Fixed**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5426" target="_blank">#5426</a> - Fixed a defect for a mobile user when opening a case. The screen view for "Warning" messages for mobile users is now centered and no longer blocks the view of action buttons.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6323" target="_blank">#6323</a> - Fix for Japanese/Korean language menu translations.  They were not rendering properly and not translating.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7155" target="_blank">#7155</a> - Labels / Translation fixed for German translated static content.  Some labels were too long and moved a button behind another one, making it un-clickable. This has now been fixed.




## For your awareness
The much anticipated launch of option to use Lightning Console in production is now targeted for the last week of February.  Classic will remain the default, initially, with the ability to switch to Lightning on demand. After approximately two weeks, sometime in March, we will make Lightning the default. This will be confirmed and announced as we approach that date.  We encourage everyone to start working as much as possible, *as soon as possible*  in Lightning to become familiar with the new UI.  At a point in the future (to be announced), we will remove access to Classic and everyone will use Lightning.  Please take advantage of the Lightning training videos and documentation available on the DBA-Education.  

Coming up, there will be two Lightning Office Hours sessions to accommodate NA/EMEA and AP. The date and link to enroll will be shared on the <a href="https://slack.com/app_redirect?channel=C902QFMPG" target="_blank">#csp-announcement </a> slack channel.

