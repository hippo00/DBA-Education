## Sprint 1 - 2019 Release Notes

*  Entitlement update: Business hours logic will be available for US and Canada in Sprint 1
*  Case Prioritization bi-weekly workshops are continuing.

### Agent Console

* <a href="https://funnel.w3ibm.mybluemix.net/#/open/6732" target="_blank">#6732</a> - Time recording Pop-up was deployed in Sprint 1 
    *  If you try to post an update to a Case without the Case Session Timer widget running or without manually recording time, a pop-up will appear when the Post button is clicked. (If the Case timer is running, the pop-up will not appear).
    *  This pop-up requests you to start recording time associated with the update you are posting.
    *  There is also an option not to record time, for example if the post is used for a manager comment, but the selection should be avoided when possible.

*  Entitlement update: Business hours logic will be available for US and Canada in Sprint 1 
    *  Deployment is targeted for sometime between January 22 and February 5.
    *  The business hours logic will be loaded into the system for US and Canada. But evaluation of accuracy will continue.
    *  Business hours includes entitlement process hours (9x5 or 24x7) and holidays.
    *  No matter where in the world you are, if you are working on a case for an account where the sold-to location is in the US or Canada the **Milestone Timer will reflect the time zone of the account sold-to location.**
    *  If the sold-to location is blank, the timer will default to Eastern for US and Canada (GMT-5).
    *  We will let you know when other countries will be added.
    
    * This info has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement" target="_blank">here.</a>
    
    ![image](https://media.github.ibm.com/user/146797/files/efca5202-1efb-11e9-9375-4fa9bcd38505)
   

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6956" target="_blank">#6956</a> - Skip Support Mission for Routing when default the Mission Team field is empty. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7080" target="_blank">#7080</a> - Interested parties will receive email notification on case updates from ECuRep file publish post all access.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5055" target="_blank">#5055</a> - Support Mission Alias exposed as a Case Attribute for filtering in List views.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7023" target="_blank">#7023</a> - Add Translated Description, Translated Subject, and Spoken Language to Case Summary as quick action buttons for Lightning. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5265" target="_blank">#5265</a> - Case Notifications are showing previous comments for certain case type. This issue has been fixed.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6929" target="_blank">#6929</a> - Cases that were re-opened but the Reopened Flag is not set. 
*  The Reopened Flag will now appear when Cases are reopened.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6267" target="_blank">#6267</a> - The Re-assignment Action includes each agents online status and number of cases they have assigned. This allows the lead performing to assignment to understand capacity.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5903" target="_blank">#5903</a> - No email is triggered to the escalation team when the Internal status is set to "Clients Requests a Call back" and the case is in Queue. This issue has been fixed.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5910" target="_blank">#5910</a> - Update the Escalation Email template with Mission Team fields. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/4802" target="_blank">#4802</a> - MustGather Values for Product Version, Operating System and System Down can be created as required. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6974" target="_blank">#6974</a> - Disable the Products tab until Agents are added to the Support Mission.   

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5910" target="_blank">#5910</a> - The Mission Team name will now be included in the Escalation Email notifications.

### Watson in Support
*  Case Prioritization bi-weekly workshops are continuing.  The next workshop will be Monday, January 28.
*  One can register for the event <a href="https://ec.yourlearning.ibm.com/w3/meeting/10001487" target="_blank">here.</a> (this will also ensure they get notified on the upcoming sessions)
*  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Caseprioritization" target="_blank">DBA-Education page</a> has been updated with this information.

**Case Prioritization enhancements:**
*  Automatically refresh Case Prioritization views on a five minute interval set on a one hour period as long as the Case Prioritization tab is active. When the refresh period is up, the user must click the refresh button to start another one hour period immediately. The refresh button changes color when the refresh period has expired.
*  If the user manages to construct a bad query using the view builder in Case Prioritization, the user will be shown an error message instead of hanging with the loading spinner.
*  The view configuration sidebar can now be resized between a minimum and maximum width and can still be completely collapsed. The size set by the user is remembered between sessions in the browser.
*  Users are able to modify the order of pipelines from the view configuration sidebar.
*  The keywords field has been added as an available filter to use when building views.

#### Deployed in Sprint 1
*  Kenexa Assess automation: 8 common types of customer issues are detected automatically by analyzing the intent from the case description provided by the customer. 

*  Blueworks live stage 2 automation: Specific types of customer issues are detected automatically and next best action are suggested to Support Agents. 

*  Salesforce cases searchable from Watson Support Search 
    *  Both open cases in Salesforce and legacy cases are searchable from one single search interface in Salesforce, so that the Support Agents can effectively identify what are the most useful documents needed to resolve a customer problem. 
    *  The Salesforce cases will be available in an incremental fashion from Watson Support search over next few days from production deployment on January 22.
    *  The Support Search with Watson Bi-weekly User meeting is now available.  The link to enroll in the series can be found <a href="https://ec.yourlearning.ibm.com/w3/meeting/10001487" target="_blank">here.</a> 

### Hardware/Field Service/Control Center 
<a href="https://funnel.w3ibm.mybluemix.net/#/open/6918" target="_blank">#6918</a> - Work Order Status field will be read only; therefore Agents will be reminded to use the Update Work Order button for any updates of status for the Work Order. 

* This issue will not be deployed in Sprint 1 as previously stated in the What's coming in Sprint 1 blog.  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7042" target="_blank">#7042</a> Changing the visibility of Chatter posts in Lightning (Classic already supported this feature out of the box).

* This issue will not be deployed in Sprint 1 as previously stated in the What's coming in Sprint 1 blog.  

## Community Updates

**As previously posted in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming119" target="_blank">What's coming in Sprint 1 - 2019 blog,</a> the following entries have been deployed.**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6845" target="_blank">#6845</a> - Improvements to administrator user interface

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5265" target="_blank">#5265</a> - Defect fixed for email to case feed comments showing older agent comment in email.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7015" target="_blank">#7015</a> - Update to the Interested Parties method for auto population. The logic by which interested parties is populated will change, making it simpler for clients to understand and manage.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5394" target="_blank">#5394</a> - Client enhancement request - Download Case Feed (Case History) for entire case

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6634" target="_blank">#6634</a> - Cases/Open Case to show more information for users they need to upgrade/request access to see the case 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6933" target="_blank">#6933</a> - Ability for clients to print a report of cases

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6753" target="_blank">#6753</a> - Added new filter to Case Management page for products

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6823" target="_blank">#6823</a> - Display ICN along with account name in the dropdown in Admin table for 'USERS' tab

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5717" target="_blank">#5717</a> SCBN - File download capability
*  Clients now have the capability to download a file that was previously uploaded.  
*  **This function applies to ONLY cases that are in the SCBN Support Mission.** 

## For your awareness
 
*  The date to make Lightning available in production as the default, while still giving users the option to switch back to Classic, is currently under review.  We will communicate an update when the date is identified.  The January 30 Lightning Office Hours session has been cancelled. 
*  Salesforce Refresh to Staging Scheduled for January 25-28.  
    *  We are refreshing the Staging and Development environments on Salesforce.  During the refresh process, all data and configurations from the production environment will be copied to the non-production environments so that all environments are aligned, providing a better testing and training experience.
    *  All Contact email addresses will be modified to avoid sending any communications from the “Staging” environment. As part of the refresh process, the “Staging” domain name will be refreshed to “PreProd.” Short URLs will remain the same. Long URLs will be provided after the refresh.
    *  For questions, please contact miranda@ibm.com.
*  Salesforce Refresher course coming soon!  We will provide more information as it becomes available.
*  Business Continuity solution is coming early Q1. More details will be shared soon.
    *  It will enable engineers to continue to do their job in a limited fashion.
    *  Training on using the new UI will be made available. 
*  New Training video released: Time Recording on Salesforce Case, posted <a href="https://mediacenter.ibm.com/media/t/0_o6v678u8
" target="_blank">here.</a> 
