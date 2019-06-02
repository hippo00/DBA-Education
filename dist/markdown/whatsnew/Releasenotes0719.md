### Sprint 7 - 2019 Release Notes

* [Lightning is now the Default for all! Please update your link: https://ibmsf.my.salesforce.com](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0719#default)
* [Complete the Lightning training and bring your questions to the Lightning Office Hours](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0719#training) 
* [WANTED: Videos of your Lightning use (creating, updating, closing, chatting)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0719#videos)
* [Planned (low impact) Maintenance for external IBM Support Site on Wednesday, April 17 at 10:00PM ET](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0719#maintenance)

**Sprint 7 production deployment :  Tuesday, April 16**


### Agent Console Updates

**#4625 Collab cases will use the parent case severity field.** 
* Any updates to the parent case severity are sent to the remote repository.


**#7936 Enabled the 'View Asset Hierarchy' button in Lightning.** 
* If you navigate to an Asset you can click this button to see all associated assets. 


**#5454 Added three user fields 'Org Code', 'Division', and 'Department' to the session timer record.** 
* When a user records a session time it will create a record and update these fields with the users information for CEDP  and Audits.


**#7519 Added 'Disable Partner User' button to Classic Contact Page Layout.**


**#8032 Changed the feed type on Home page to 'what I follow' for Lightning instead of Bookmarked.**


**#5289 Send the Salesforce Case Information to the remote Git repository whenever we link an existing Git issue.**


**#8018 Added a new checkbox field on Support Mission called 'Allow Selection of Empty Skill on Case'.** 
* When checked, in the ReAssignment UI the Support Skill field will not be required. If unchecked, the user should not be able to save the Case without selecting a Support Skill.


**#4289 Removed the ability for Support Agents and Support Managers to create or delete Assets. Service Planners will use EAT to make any changes.**
* In Sprint 7 we will be removing the ability to create and manage assets on the CSP platform.  Most of our asset data will flow down from upstream systems.  When there is a need to manually create and manage assets it will be done via the ETL Admin Tool (EAT) and performed by Service Planners.


**#7974 Created checkboxes on the Case Object for determining if the required Case data has been completed so that we can later trigger Mission Team Routing and Agent Assignment synchronously after a Case is created.** 
* This is a prerequisite for the Case Create process under design.


**#8046 Hide Watson Chat Transcript section in the Console Chat UI when no interaction occurs**


**#8050 Add 'Live Chat Transcript Events' related list to the Live Chat Transcript Lightning page.**


**#8048 Remove 'Live Chat Transcript Details' related list from the Live Chat Transcript lightning page, it's a duplicate to the Details section.**


**#8047 Have the 'Related' section expanded as default on Live Chat Transcript lightning page.**


**#7880  The "From Address" field in E2C interface no longer defaults to personal user address in Lightning (This is working fine in Classic)** 
* In Lightning, the "From address" field was defaulting to the incorrect email address. In some use Cases to the personal address of the Support Agent instead of the support address or the IBM "Do not reply" address).   

**Defect Fixes:**

#7935 Enabled a scroll bar for the list of Account Team Members on the Account Page.

#7873 Improved Target Agent picklist field to display more agent names without needing to scroll.  

#7701 Added Case Number to the Mission Team Notification Email

#7217 Enabled Re-Assignment for closed case to give Agents the ability to change the 'Support skill' and 'Mission Team' for their metrics.

#7999 Cases assigned the Default Entitlement should be assigned the Account's Business Hours not the Default Entitlement's Business Hours.

#8005 Community-created Cases sometimes run Entitlement logic twice when Product Version is present

#7697 When Cases get reopened, the previous Case resolution description gets removed 
 Resolution description now pre-populates with the current value on the case.


**Watson in Support**

*Chatbot :*
* Improved Watson assistant options response
* Improved learn from Cases to use a Whitelist to refine the answers 


*Case prioritization enhancements :*
* Time literals CasePrioritization.LAST_N_MINUTES:n and CasePrioritization:LAST_N_HOURS:n created for use against DATETIME fields
* Refresh button added to Mini Case Prioritization
* Added auto-refresh cool-down timer and tooltip detailing last and next refresh timeframe


*Support Search:*
* UI enhancement : The list of active filters are displayed under the search bar, clarifying the current filters , and giving users the ability to remove the filter without having to find them in the left panel. 
* Migrated all RTC content from Wellspring and other Wellspring content to Discovery


**HW/RTS/Control Center**

**#7537 Updated 'Direct to Field' custom field type** 
* The Direct to Field can no longer be edited.  This is an informational field only.
* This field has been changed from a checkbox to a Yes/No field.


**#7910 Prevent SA creation on CRU work orders**
* Service Appointments will no longer be created for CRU work orders.


**#7882 Added Alternative_Callback_Number__c field to the Work Order**
* New field for Alternative Callback Number will be exposed in the Work Order


**ARM Updates (Git #8070)**

* Defect: Categories with long titles truncated in Lightning console
* Display the original Support Mission name under Shared Category titles in the category tree


### IBM Support Site Updates (/mysupport)


**#7493 - The user intercept rate for the Medallia survey will be updated from 10% to 25%**
* Every 10 out of 100 clients are surveyed. After deploy 25 out of every 100 will be surveyed. These are for visitors that have not opted in or out in the last 90 days.
* Need to get more replies to make out results statistically valid
* Impacts the Case Management and Product Page Surveys.


**#3618 - Implement Forums on the support site**
* This is currently in Staging and is **now targeted to launch on April 30 (previously reported to be April 16).**
* Instructions for Support Agents to set up the app and monitor the Forum will be posted in the DBA-Education prior to launch.
* Re-vamp of YL training module expected this week.  
* New Main menu item will be displayed on ALL IBM Support site pages
* Instructions for clients will be published to the support site prior to launch
* We need help testing.
* Forums will use the IBM strategic search engine - Swiftype
* Dedicated Slack channel setup for feedback #csp_forums_mysupport


**Fixed Defects:**

#6838 For client Administrators, when editing a user's access page, the last column was getting cut off, especially for mobile users.

#7926 On the Profile page, the Cancel button should cancel all changes without the need for required fields to be re-completed
* Cancel button was not working correctly on IBM Support site (/mysupport) for user profile updates.

#7926 On the Profile page, the Cancel button should cancel all changes without the need for required fields to be re-completed
Cancel button was not working correctly on IBM Support site (/mysupport) for user profile updates.


### For your awareness


**Planned (low impact) <a id="maintenance" name="maintenance"></a>Maintenance for external IBM Support Site**
* When: Starts on Wed April 17 @ 10:00 PM Eastern   
* Duration: This will last for about 5 hours. 
* This is a minor maintenance where some functions on the support site page that have a dependency on content may not render properly or may not be available.
* Clients will still be able to sign in and manage/open cases.


**We heard your feedback!  Request for Enhancement (RFE) Review & Improve - Status Update**
* We have made a focused effort over the last 4 weeks to triage a number of RFEs/Ideas, especially given that Lightning is helping us achieve some of those RFEs/Ideas.
* We've triaged 108 RFEs and updated in Ideas with status as follows (34 -delivered, 11- In Dev, 16 - not planned, 6 -partially delivered and 29 - reviewed and 12 - under consideration).
* We will continue to triage the high vote ideas to make sure that submitters and voters get feedback on the status.
* We are looking at how we effectively do the triage on a scaled, regular basis (focusing on high vote ideas) so that submitters and voters do not see this as a black hole.
* We will provide more updates on the progress and the process in upcoming weeks.

**Lightning is now the <a id="default" name="default"></a>default!**
* Be sure to update your link to: <a href="" target="_blank">https://ibmsf.my.salesforce.com</a> .
* Net steps: Early May - We are planning to remove access to Classic altogether  (pending no new blockers are found)

To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a>  so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a> document has quick links to other training documents, links to training videos, Lightning Office Hours enrollment links and more!  Additional Lightning documents found on the DBA-Education include: 
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>, and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

**Take the Lightning training**
 * For **Agents**, the <a id="training" name="training"></a>training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>

**Sign up for Lightning Office Hours.** 
* April 17 at 12:00PM for EMEA and NA, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014684" target="_blank">here.</a> 
* April 17 at  9:00PM for AP, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10016903" target="_blank">here.</a>  
* Provide feedback in the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA" target="_blank">#csp-lightning</a> Slack channel.
All Lightning Office Hour session recordings can be found <a href="https://sme.video.ibm.com/channel/23495615/playlist/449789 Please bookmark this page." target="_blank">here.</a> Please bookmark this page.


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

* Added how to find Lightning information in DBA-Education from the Help topics on the Agent console. This was added to the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a>page.
* The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/coreConcepts/casetypes" target="_blank">Case Record Type page</a> was updated.  
* Removed an outdated Support Search with Watson page in favor of new information <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/search/console" target="_blank">here.</a>    
* The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/training" target="_blank">Demos & Learning page</a>  was updated to feature just the main link to share with clients about the IBM Support Community. 
* The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">FAQ page</a> was updated to show a reminder when communicating with clients to only use the term IBM Support Site and not to use "Salesforce." 
* The latest link to the PROD Agent Console site was updated on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">FAQ page.</a>  
