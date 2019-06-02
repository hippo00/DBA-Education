*  [Business Continuity solution to "keep the lights" on](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes30219#Continuity) 
*  [Entitlement update: Business hours logic is now available for US and Canada](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes30219#entitlement)  
*  [Coming soon - Lightning as option in Production for all](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes30219#Lightning)


**New Business <a id="continuity" name="continuity"></a>Continuity solution for the Cognitive Support Platform is a "keep the lights on" solution allowing Agents to do rudimentary Case handling when Salesforce is unavailable.**  

As an agent, how do I do my work if I can’t get to the Agent Console?   

This new Business Continuity solution, Case Manager, has been launched and will be hosted <a href="http://ibm.biz/CaseManager" target="_blank">here.</a>
Be sure to either bookmark the link or copy it to an area outside of Salesforce for easy reference. 
*  Documentation has been added to the DBA-Education  <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/businesscontinuity" target="_blank">here.</a>  
*  Training video is available <a href="https://mediacenter.ibm.com/media/t/1_m0w3f87t" target="_blank">here.</a>  


**<a id="entitlement" name="entitlement"></a>Entitlement update: Business hours logic is now available for US and Canada** 

The business hours logic has been loaded into the system for US and Canada. Business hours includes entitlement process hours (9x5 or 24x7) and holidays.
No matter where in the world you are, if you are working on a case for an account where the sold-to location is in the US or Canada the Milestone Timer will reflect the time zone of the account sold-to location and accurately represent the SLA for that account. 
*  If the sold-to location is blank, the timer will default to Eastern for US and Canada (GMT-5). 
*  We will let you know when other countries will be added. 
*  This info has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement" target="_blank">here.</a>  
![image](https://media.github.ibm.com/user/146797/files/9343f880-33a0-11e9-8050-a02d51d751d6)

## Agent Console
<a href="https://funnel.w3ibm.mybluemix.net/#/open/7212" target="_blank">#7212</a> Improved logic to handle a Support Mission Change for sev 1 Case to correctly send escalation email. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7172" target="_blank">#7172</a> Corrected Entitlement logic for AVP to only include Offering IDs of FC, PA, PX  Further defining entitlement for certain products. 
*  Current escalation emails are based on the default entitlement process, they are set to fire at 90 minutes and when a case has been escalated. Now we have eight new entitlement processes that can expire as early as 15 minutes.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7115" target="_blank">#7115</a> When hovering over the account, the pop-up fields now match in Lightning and Classic. This includes Account Name, Parent Account, Billing Address and Shipping Address.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7111" target="_blank">#7111</a> Include "Support Skill" instead of just "Skill Element" in Salesforce Escalation email to Pager Duty.  The template will always display the Support Skill that is populated on the case or it will show NA if no skill is populated.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7090" target="_blank">#7090</a> The entitlements related list is now available on the contact detail page in Lightning.  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7086" target="_blank">#7086</a> Only update internal status to "Diagnostic file has been received" once the Diagnostic is completely uploaded. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7018" target="_blank">#7018</a> Moved the "Reopen case" action from the Feed section to the highlights panel on the far left column in Lightning. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7304" target="_blank">#7304</a> Moved the ARM Action from the Feed section to the highlights panel on the far left column, for Internal Support Case type in Lightning  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6591" target="_blank">#6591</a> Include case information in task reminders 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/4288" target="_blank">#4288</a> Gave agents the ability to remove a defect from a case, if an Agent accidentally associated the wrong defect to a case.  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7356" target="_blank">#7356</a> After the Refresh of Dev, Int and Staging from Production, ".test" was added to all emails preventing Agents from receiving emails during testing.  This affects the Escalation Team, Mission Team and Account custom email.  Agents who want these emails must go to each environment and correct the email by removing ".test"

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7157" target="_blank">#7157</a> Update Escalation emails to work with all Entitlement process milestones, including 15 and 30 minute SLAs 
*  This is coming later this week.
*  Current escalation emails are based on the default entitlement process, they are set to fire at 90 minutes and when a case has been escalated. Now we have eight new entitlement processes that can expire as early as 15 minutes.

**Defects Fixed**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7329" target="_blank">#7329</a> Allow agents to deactivate hybrid must gather definitions  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7272" target="_blank">#7272</a> "Virus found" is a missing value for Diagnostic object in ECuRep  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7162" target="_blank">#7162</a> Corrected Duplicate Post when using MPPC and only Status is changed after a Post  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6138" target="_blank">#6138</a> Session Timer will stop running when the Case Tab is Closed in Lightning

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6250" target="_blank">#6250</a> Spinner stays on the screen after Case Owner change 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6091" target="_blank">#6091</a> UI Bug: Splitview handle disappears on expand.
*  When the Splitview is clicked and the section expands, the button to collapse it disappears. When the page is refreshed, the collapsing button returns. If it is collapsed and expanded after the refresh, the collapsing button remains.
This was fixed in Spring 19.

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
*  Updated Console experience for Lightning
*  Fixed Defect - Feedback for curated answers does not work.


**Chatbot**

IBM Clients using Chatbot can get handed off to a Live Agent in a streamlined way, if they are unable to get an answer from the Chatbot.

**ARM Updates**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7215" target="_blank">#7215</a> - Defect fixed - Selecting an asset after filtering a category does not retain filtering after reload.

## Community

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5753" target="_blank">#5753</a> - Improved client message when updating user profile on the IBM Support site (/mysupport)  Sentence fragment update to let client know the profile was updated.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6637" target="_blank">#6637</a> - When a user opens the "Support Access" option do not pre-select access levels if they have more than one account associated to their contact. This change is based on client feedback.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6630" target="_blank">#6630</a> - When an administrator receives an email informing them of an access request or a role change, we will direct them to Pending Requests so they can see them with no clicks.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6633" target="_blank">#6633</a> - When an administrator removes or changes a user's access the IBM Support site, there is a space for the administrator to enter a reason or explanation for the change.  The end user will be notified of the change in an email.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7188" target="_blank">#7188</a> - A user on the IBM Support site can now provide a reason for an access request or a role change. The administrator will be able to see this detail when viewing each request. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6745" target="_blank">#6745</a> - When opening a Case, clients have been asking to see the country listed next to the ICN. This helps them to choose the correct ICN. 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6321" target="_blank">#6321</a> - The email template for a user who has not modified their notification settings has been updated.  This will bring more attention to the settings; educating clients that "Title" and "last reply from engineer" can be included in the email.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7324" target="_blank">#7324</a> - When users create SaaS support access requests, we have a 'reason for access' optional field. Set this field on case creation so that agents can access this field and the reason provided by the user. Agents can now view this field. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7068" target="_blank">#7068</a> - Improvement in UI for Engineers when a client is auto approved or auto denied for registration. When users request for access are automatically denied, it shows their own name as the denier. It would be helpful if the name showed IBM or something more directly related. The approver's name will now show as '"IBM Support."

**Defects Fixed**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5426" target="_blank">#5426</a> - Fixed a defect for a mobile user when opening a case.  The screen view for "Warning" messages for mobile users is now centered and no longer blocks the view of action buttons.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/6323" target="_blank">#6323</a> - Fix for Japanese/Korean language menu translations.  They were not rendering properly and not translating.


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7155" target="_blank">#7155</a> - Labels / Translation fixed for German translated static content.  Some labels were too long and moved a button behind another one, making it un-clickable. This has now been fixed.


## For your Awareness
The much anticipated launch of the option to use <a id="lightning" name="lightning"></a>Lightning Console in production is now targeted for the last week of February.  Classic will remain the default, initially, with the ability to switch to Lightning on demand.  After approximately two-three weeks, Lightning will become the default.  (To be confirmed/announced as we approach that date). At a point in the future (to be announced), we will remove access to Classic and everyone will use Lightning.


The Lightning Refresher courses are now complete. We encourage Managers and Support Agents to take these refresher courses and prepare for the shift to Lightning. 
*  Cognitive Support Platform: Review Common Tasks (for Agents) 
    *  YourLearning link is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G" target="_blank">here.</a>  
    *  Skills Gateway link is <a href="http://ibm.biz/CSPReview" target="_blank">here.</a> here. 
*  Cognitive Support Platform: Review Common Manager Tasks 
    * YourLearning link is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> 
    * Skills Gateway link is <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>


We are reinstating our Lightning Office Hours. On Wednesday, February 27, there will be two Lightning Office Hours sessions.  The first at 12:00PM ET to accommodate our teams in NA and EMEA.  Our second session will be held at 9:00PM ET so that we may accommodate our teams in AP.  
The link to enroll in the NA/EMEA and the AP Lightning Office Hours is <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10001705" target="_blank">here.</a> 
