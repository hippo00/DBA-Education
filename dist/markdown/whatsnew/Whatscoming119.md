
# What's coming in Sprint 1 - 2019

*  15 minute Salesforce Maintenance Outage Planned for Sunday, January 20, has now been postponed.
*  Entitlement update: Business hours logic will be available for US, Canada and Japan in Sprint 1
*  Case Prioritization bi-weekly workshops are continuing.


**15 minute Salesforce Maintenance Outage Planned for Sunday, January 20, has been postponed.  We will post an update when a new date has been announced.**  
*  This will result in a short disruption of service between 12:00 AM and 12:15 AM US Eastern time.
*  Regular maintenance ensures the continued performance of our Salesforce instance.
*  During this time, the Service Console and IBM Support Community will be in read-only mode. If your clients experience a      Sev 1 issue during this time, please direct your US based customers to call 1-800-IBM-SERV. Contacts for global clients are available <a href="https://www.ibm.com/planetwide/index.html#region" target="_blank">here.</a>
*  Clients on the Community will see a yellow banner message on all pages stating that the Community will be in READ ONLY mode for 15 minutes.  This will appear shortly before the outage and be removed once we are back up.


**We anticipate the following enhancements will launch in Sprint #1 on Tuesday, January 22, 2019 (unless stated otherwise).
Please note these will remain "candidates" until the day of deployment; this list is subject to change.**


## Agent Console Updates
* Time recording Pop-up targeted for deployment in Sprint 1 
    *  If you try to post an update to a Case without the Case Session Timer widget running or without manually recording time, a pop-up will appear when the Post button is clicked. (If the Case timer is running, the pop-up will not appear).
    *  This pop-up requests you to start recording time associated with the update you are posting.
    *  There is also an option not to record time, for example if the post is used for a manager comment, but the selection should be avoided when possible.
    
    *  This will ensure that time is posted against all Cases. Currently, 30% of all Cases have no time associated to them.
    
    ![image](https://media.github.ibm.com/user/146797/files/c6142100-199b-11e9-8153-3766b52349f1)
    
*  Entitlement update: Business hours logic will be available for US, Canada and Japan in Sprint 1 
    *  Deployment is targeted for sometime between January 22 and February 5.
    *  The business hours logic will be loaded into the system for US, Canada and Japan, but evaluation of accuracy will continue.
    *  Business hours includes entitlement process hours (9x5 or 24x7) and holidays.
    *  No matter where in the world you are, if you are working on a case for an account where the sold-to location is in the US, Canada or Japan, the **Milestone Timer will reflect the time zone of the account sold-to location.**
    *  If the sold-to location is blank, the timer will default to Eastern for US and Canada (GMT-5).
    *  We will let you know when other countries will be added.
    * This info has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement" target="_blank">here.</a>
    
    ![image](https://media.github.ibm.com/user/146797/files/e3ac26f2-19a2-11e9-81cf-03359fddad37)
 
<a href="https://funnel.w3ibm.mybluemix.net/#/open/5910" target="_blank">#5910</a> - The Mission Team name will now be included in the Escalation Email notifications

### Watson in Support
*  Case Prioritization bi-weekly workshops are continuing. The next workshop will be January 28.
    *  One can register for the event <a href="https://ec.yourlearning.ibm.com/w3/meeting/10001487" target="_blank">here</a>  (this will also ensure they get notified on the upcoming sessions).
    *  The workshops will broadly cover: 
        *  Demos on what the development team is working on and what is coming out soon
        *  Share plans and changes being considered,
        *  Take feedback from the attendees on changes they would like to see. 
    *  The DBA-Education page has been updated with this information.

**Case Prioritization enhancements:**
*  Automatically refresh Case Prioritization views on a five minute interval set on a one hour period as long as the Case Prioritization tab is active. When the refresh period is up, the user must click the refresh button to start another one hour period immediately. The refresh button changes color when the refresh period has expired.
*  If the user manages to construct a bad query using the view builder in Case Prioritization, the user will be shown an error message instead of hanging with the loading spinner.
*  The view configuration sidebar can now be resized between a minimum and maximum width and can still be completely collapsed. The size set by the user is remembered between sessions in the browser.
*  Users are able to modify the order of pipelines from the view configuration sidebar.
*  The keywords field has been added as an available filter to use when building views.

**Targeted for Sprint 1: Kenexa Assess automation:** 8 common types of customer issues are detected automatically by analyzing the intent from the case description provided by the customer. When an issue is detected that matches one of those 8 types an email template response is sent directly to the customer that contains information to help troubleshoot or resolve the issue.

**12/20 deployed: Blueworks live stage 2 automation:** Specific types of customer issues are detected automatically and  next best action are suggested to Support Agents. This is accomplished by analyzing the intent from the case description provided by the customer and cross-reference that with the customer account information lookup from the Blueworks Live Super User admin tool.

**Salesforce cases searchable from Watson Support Search:** Both open cases in Salesforce and legacy cases are searchable from one single search interface in Salesforce, so that the Support Agents can effectively identify what are the most useful documents needed to resolve a customer problem. 
*  The Salesforce cases will be available in an incremental fashion from Watson Support search over next few days from production deployment on January 22.

### Hardware/Field Service/Control Center 
<a href="https://funnel.w3ibm.mybluemix.net/#/open/6918" target="_blank">#6918</a> - Work Order Status field will be read only

*  This is targeted to launch in Sprint 1.
*  The Work Order Status field will be read only, therefore Agents will be reminded to use the Update Work Order button for any updates of status for the Work Order.   

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6257" target="_blank">#6257</a> - Dispatcher Views (filters) in dispatch console improvements


## Community Updates
<a href="https://funnel.w3ibm.mybluemix.net/#/open/6845" target="_blank">#6845</a> - Improvements to administrator user interface
*  The Pending requests was made the default tab and included the number of open requests per administrator, in parenthesis.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5265" target="_blank">#5265</a> - Defect fixed for email to case feed comments showing older agent comment in email.
*  In certain cases an update to an email to case was taking the comment feed from the prior update and including that comment as the latest in the email.  This will be fixed with the Sprint 1 deploy.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7015" target="_blank">#7015</a> - Update to the Interested Parties method for auto population
*  With the Sprint 1 release, the logic by which interested parties is populated will change making it simpler for clients to understand and manage.
*  Currently there is an algorithm that aggregated cases, prior interested parties and a time period and populates the IPs on case open.
*  With this release we will just take the last case the client has opened, look at the people the case owner has added and use that list for the next case's interested parties list.
*  Clients can still add and remove people the same way they do today.  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/5394" target="_blank">#5394</a> - Client enhancement request - Download Case Feed (Case History) for entire case
*  New option on Actions menu on Case details page for clients to print the entire case feed.
*  Clicking Print case history will create a preview of ONLY the entire case feed or case history.  
*  Clients can read/view it in preview OR can decide to print it.  Below is a screen capture of the new menu item

![image](https://media.github.ibm.com/user/146797/files/b1b84f80-1a2f-11e9-9c5f-8f8d695d1c01)

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6634" target="_blank">#6634</a> - Cases/Open Case to show more information for users they need to upgrade/request access to see the case 
*  When a user is sent a link to the Case Management page OR a specific case by a colleague, many times they don't have access to that specific case OR may not be registered yet to use the Community.
*  In these cases the Community will show a user friendly message with steps on how a client can start the registration process.  

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6933" target="_blank">#6933</a> - Ability for clients to print a report of cases
*  Rather than just print the case list on the current page, we now have added a print icon on the Case Management page that will print all the cases that match the filters the client has chosen.  

![image](https://media.github.ibm.com/user/146797/files/ff6f143e-1a2f-11e9-8855-4538c4bf4b8d)

*  When the print icon is clicked, first a view of cases are displayed and then the client can decide whether to print.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6753" target="_blank">#6753</a> - Added new filter to Case Management page for products
*  Clients have asked for third filter to be added to the Case Management page to filter by product.
*  This will be a "sticky" setting for each person.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6823" target="_blank">#6823</a> - Display ICN along with account name in the dropdown in Admin table for 'USERS' tab

![image](https://media.github.ibm.com/user/146797/files/45e6ccfe-1a30-11e9-8491-7a3eeb32a7f5)

## For your awareness
*  See your colleagues’ feedback and tips on using Salesforce in this quick 3 minute video <a href="https://sme.video.ibm.com/channel/23495615/video/119420136" target="_blank">here.</a> 

*  Lightning Office Hours continues. 
    *  Dates: January 23 & 30
    *  Link to enroll in the series: <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10001705" target="_blank">here.</a>
    
*  The date to make Lightning available in production as the default, while still giving users the option to switch back to Classic, is now targeted for mid-February.
*  Salesforce Refresh to Staging Scheduled for January 25-28.  
    *  We are refreshing the Staging and Development environments on Salesforce.  During the refresh process, all data and configurations from the production environment will be copied to the non-production environments so that all environments are aligned, providing a better testing and training experience.
    *  All Contact email addresses will be modified to avoid sending any communications from the “Staging” environment. As part of the refresh process, the “Staging” domain name will be refreshed to “PreProd.” Short URLs will remain the same. Long URLs will be provided after the refresh.
    *  For questions, please contact miranda@ibm.com.
*  Salesforce Refresher course coming soon!  We will provide more information as it becomes available.
*  Business Continuity solution is coming early Q1
    *  It will enable engineers to continue to do their job in a limited fashion.
    *  Training on using the new UI will be made available.

