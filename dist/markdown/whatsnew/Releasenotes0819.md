## Sprint 8 - 2019 Release Notes

### Sprint 8 target deployment (Production): April 30


* W3ID Planned Outage on May 11
* [Forums deployed on the support site - Agents prepare to participant now!](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0819#forums)
* [Consolidated information included on Get Ready for Lightning Now!](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0819#lightning) 


**The W3ID outage which was postponed in March, is now planned for Saturday, May 11 from 11:00PM ET to Sunday, May 12   4:00AM ET**


**Action for Agents:** 
* If you need to access to CSP or other IBM systems between the hours of 11:00PM ET on Saturday to 4:00AM ET on Sunday, please plan to login to CSP and any other systems you may need prior to 11:00PM ET.  
* Logging in prior to the outage start time will allow you to continue to use the Console and other IBM systems to which you need access. It is anticipated the outage will only be 2 hours, but the W3ID team has allocated 4 hours for this activity. 
* To check status on this outage, the IBM W3ID Service Status page can be found <a href="https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/W89b23bf7ad80_4411_822f_2a6dc171c6b3/page/w3ID%20Service%20Status" target="_blank">here.</a>  
* Link to official notice can be found <a href="https://w3.ibm.com/help/#/outages/b02742e1-2467-4fbc-8261-86c402e86f27" target="_blank"> here.</a>   
* The Cognitive Support development team will be online to validate and will communicate via #csp-announcements channel if any issues.
* For urgent issues that arise during the outage, there is a help feature contained within the official notice shown in the bullet above.  Plus, urgent Salesforce issues can be reported through the link <a href="https://ibmsf.force.com/internal/s/login/?startURL=%2Finternal%2Fs%2F&ec=302" target="_blank">here.</a> 

## Agent Console Updates

#8020 Platform: Enable Lightning CDN to improve performance 
A Content Delivery Network (CDN) generally speeds up page load time, but it also changes the source domain that serves the files. 
* Additional information about CDN can be found <a href="https://releasenotes.docs.salesforce.com/en-us/winter19/release-notes/rn_lc_cdn.htm" target="_blank">here.</a>

#8232 Support Manager profile will now be able to create folders for Reports.
* Instructions have been added in the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/management/reporting" target="_blank">here.</a>

#8197 After logging out of Salesforce, users will be directed to Lightning when using the"Sign back in" button from the logout page.

#8058 Added X-File, CMVC, JUPiTR and ECA as Defect types remove code ref for portal

#7640 Three new fields were added to the product object for handling Divested and not yet Boarded Products.  The Community and Console will leverage these fields and display the data to Customers and Agents.  The data will be loaded by the ETL processes.  
* This feature allows us to have products available on our community that are supported somewhere else.  It's first focus will be in support of the HCL divestiture.  The products will stay on our community for some period of time and when customers come to IBM for support we will redirect them to HCL.  This will help during the transition period. The "Not Yet Boarded" allows us to have products on the community that haven't been boarded on the CSP platform.  When a user selects these we would redirect them to the legacy application for support, like SR.
  * Boarded - Checkbox for if the product is boarded on the platform. 
  * TargetURL - Text field for the target web page for the product to which clients should go.
  * TargetDescription - Text field for the description of the target web page.

#8211 Ensure Case Origin is always populated by setting appropriate defaults.
* "Case Origin" is a field on the case which must be set for the support mission to be assigned.  This was not happening for all Case Record types, for example Skills Case.  
* Logic was added to set defaults for all case types to allow cases to be routed to Support Mission.  
* This is important for Console internal logic and not used by Agents.

#8273 Added "Entitlement" and "Special Program" fields to "Escalation" and "Mission Team" email templates


**Defects:**

#8354 Added Reminder Date and Time fields to SCBN Tracking action

#8127 Error occurred when trying to create a new Contact from the Contacts tab in Lightning.  Had to work with the Gaia team and remove their lightning component override from the standard "New Contact" button


#7989 Fixed issue with posts not flowing back to remote systems when posted as "Internal" from Collaboration case

#8118 Members added to a Case Team should be able to see Work Orders & Related Objects

#8087 Removed the standard "Created By" column from the Session Timer list view for data privacy reasons.  Only the "Session Time creator display Name" will be shown.

#7781 Prevent the browser from hanging when posting some URL links.  In a few scenarios the entire URL might not be included as the link but the browser will never hang.

#7346 Quickly switching between post, then editing the case details and making an update caused an error message in Lightning.  We fixed this problem for an internal post without session timer runner.  We continue to work on a fix for public post and internal post when session timer is running.

#8203 Entitlement logic will run and update, even if the Entitlement is blank


## Watson in Support

*Case Prioritization enhancements* 

#2216 Relocate to display empty pipelines toggle

#2217 Update ranker and account priority display to use special programs

#2169 List View column resizing in Case Prioritization

#2262 Visual severity indicators in Kanban and list views

#2263 Modify CasePrioritization time literals to allow future checks

*Chatbot*

#2272 Dialog improvements to default Chatbot workspace

#2291 Chatbot is now available on the Case Open page

*Support Search with Watson*

#1261 Enable the use of double quotes in search bar 

#1266 Add modified date to Date section on left panel

#1210 Results in the agent console do not include the Salesforce case numbers 

#2199 Document header always on top to facilitate access to close document and original source

*Question Assistant (QA)*
* Created a new version of our QA Machine Learning model used in our evaluation process.
* Prepared additional Z and I data batches to run through evaluation process.

*Automation*
* Blueworks Live :
    * New automation scenario to fully deflect SPAM cases.
* Updates to the "request on behalf of another user" logic to reduce the number of false positives being identified by the automation process.
    * Kenexa Assess
* Fixed defect where the new Contact record creation was failing in some scenarios.

## ARM Updates
#8189 - Added asset title field to the “Title” field on ARM Case used object 
* User reported issue is necessary for reporting


## HW/RTS/Control Center
#7826 - Enable multiple contacts at the Work Order level
* A new related list, Work Order Contacts, is now available, showing First Name, Last Name, Phone, and E-mail for additional contacts.  You can add a contact by clicking the New button on the related list.
![image](https://media.github.ibm.com/user/146797/files/bb4d9600-6b5f-11e9-9e61-762b8488e1f9)

#8118 Members added to a Case Team should be able to see Work Orders & Related Objects

#6520 - Engineering Change (ECA) process not working for cost recovery
* Engineering changes are manufacturing faults or safety recalls that go outside the scope of regular product warranties, and are typically fix-on-contact (fits into 'breakfix' process) or proactive (fits into 'preventative maintenance' process).
* Additional information and description of "ECA" has been added to the Defect Management page in the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/defectManagement" target="_blank">here.</a> 


**HW/SSRs**

#7826 - Enable multiple contacts at the Work Order level
A new related list, Work Order Contacts, is now available on the FSL mobile app for SSR.  If additional contacts are added by RTS, you will see it here:
![image](https://media.github.ibm.com/user/146797/files/c73e5580-6b69-11e9-925e-e0b3df85bb07)

* Clicking on the contact will open the details of that contact, allowing you to copy the phone number or email.
![image](https://media.github.ibm.com/user/146797/files/3025cd80-6b6a-11e9-891e-5ad2f1fd0dcc)

**IBM Support Site Updates (/mysupport)**

#3618 - Deployment of <a id="forums" name="forums"></a>Forums on the support site
* Forums menu choice added to main menu
* Unauthenticated users can read and search all forum questions and answers
* Authenticated users can participate by asking a new questions or answering an existing question
* Instructions for Support Agents to configure their Forum stream can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/knowledge/forumsGetStarted  " target="_blank">here.</a>  
* Forum Best Practices for Support Agents can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/knowledge/forumBP " target="_blank">here.</a>

#7640 - Handling of divested or non-boarded products
* New flag added to the Product object 
* If Boarded is false, case creation must be disallowed.
* Have the ability to enter URLs to direct clients to the correct place to open a case IF the product is not boarded or has been divested

#8146 Expose Last Solution Given Date/Time to the customers 
* Expose on case list view options and case details, this will allow them to know if and when a solution has been provided for their case.
* Clients can expose this field by using the customize function on the Case Details page.

## For your awareness

**REMINDER:**   Join the #csp-announcements Slack channel to stay current with important news and updates.

**<a id="lightning" name="lightning"></a>Lightning is now the default!**
* Be sure to update your link to: <a href="" target="_blank">https://ibmsf.my.salesforce.com</a> .

To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a>  so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a> document has quick links to other training documents, links to training videos, Lightning Office Hours enrollment links and more!  Additional Lightning documents found on the DBA-Education include: 
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>, and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

**Take the Lightning training**
 * For **Agents**, the <a id="training" name="training"></a>training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>

**WANTED: <a id="videos" name="videos"></a>Videos of L2 support engineers using Lightning (creating, updating, closing, chatting)**
* Help us improve. We're interested in watching how you use CSP.
* The recording process is as simple as turning on screen recording while performing your usual tasks in Lightning.  
& Do not be concerned about GDPR as it relates to these videos. The vast majority will be used by IBM for IBM. A select few will be shared with Salesforce to improve their understanding of our issues, but all client sensitive information will be blocked prior to sharing the videos.
* Instructions on how to create a Webex recording have been posted in the "Misc. Links" section of the DBA-Education FAQ's in the Helpful Links section of the page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faqhere. " target="_blank">here.</a>  
* Please send to twaite@us.ibm.com
* Videos will not be used to measure/monitor/evaluate agents

**Reminder: Become familiar with the Business Continuity solution by taking the available Case Manager training**

* The Business Continuity solution is called Case Manager and the link to the training is <a href="https://yourlearning.ibm.com/#activity/URL-CB81D243B7C4" target="_blank">here.</a> 
* Documentation can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/businesscontinuity" target="_blank">here.</a> 

**DBA-Education Updates**
Over the past week, the DBA-Education has been updated with changes, corrections or additions.  We have listed the updated pages below. Remember to use the <a href="https://slack.com/app_redirect?channel=CCTFQ01BM" target="_blank">#csp-DBA-Education-feedback</a>  slack channel for any comments or questions you may have related to a specific DBA-Education page.  The Anonymous comments feature (call out icon at the top of each page) is another option.

NEW this week:
New Common CSP Slack channels list <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/helpful-links/slackchannels" target="_blank">here.</a>   
