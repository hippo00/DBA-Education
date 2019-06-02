### What's coming in Sprint 8 - 2019

* [Lightning is now the Default for all! Please update your link: https://ibmsf.my.salesforce.com](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0819#default)
* [WANTED: Videos of your Lightning use (creating, updating, closing, chatting)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0819#video)
* [Consolidated information included on Get Ready for Lightning Now! <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">DBA-Education page </a>](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0819#lightning)


### Agent Console Updates
#8232:  Support Manager profile will now be able to create folders for Reports and Dashboards
* Instructions are featured in the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/reporting/reporting" target="_blank">here. </a> 

#8197 After logging out of Salesforce, users will be directed to Lightning when using the"Sign back in" button from the logout page.

#8058 Added X-File, CMVC, JUPiTR and ECA as Defect types

#7640 Three new fields were added to the product object for handling Divested and not yet Boarded Products
* Boarded - Checkbox for if the product is boarded on the platform. 
* TargetURL - Text field for the target web page for the product to which clients should go.
* TargetDescription - Text field for the description of the target web page.
* This feature allows us to have products available on our community that are supported somewhere else.  It's first focus will be in support of the HCL divestiture.  The products will stay on our Community for some period of time and when customers come to IBM for support we will redirect them to HCL.  This will help during the transition period.
The "Not Yet Boarded" allows us to have products on the community that haven't been boarded on the CSP platform.  When a user selects these we would redirect them to the legacy application for support, like SR.

#8211 Ensure Case Origin is always populated by setting appropriate defaults.

#8121 Change Name of Special Programs to Special Handling

#8273 Added "Entitlement" and "Special Handling (Previosly Special Programs)" fields to "Escalation" and "Mission Team" email templates

**Defects:**

#8354 Added Reminder Date and Time fields to SCBN Tracking action

#7923 Added New Draft Work Order quick action for Lightning

#8127 Error occurred when trying to create a new Contact from the Contacts tab in Lightning.  Had to work with the Gaia team and remove their lightning component override from the standard "New Contact" button

#7989 Fixed issue with posts not flowing back to remote systems when posted as "Internal" from Collab case

#8118 Members added to a Case Team should be able to see Work Orders & Related Objects

#8087 Removed the standard "Created By" column from the Session Timer list view for data privacy reasons
* Only the "Session Time creator display Name" will be shown.

#7781 Prevent the browser from hanging when posting some URL links.  
* In a few scenarios the entire URL might not be included as the link but the browser will never hang.

#7346 Quickly switching between post, then editing the case details and making an update caused an error message in Lightning

#8203 Entitlement logic will run and update, even if the Entitlement is blank



**Watson in Support**


*Case Prioritization enhancements:*

#2216 Relocate display empty pipelines toggle

#2217 Update ranker and account priority display to use special programs

#2169 List View column resizing in Case Prioritization

#2262 Visual severity indicators in Kanban and list views

#2263 Modify CasePrioritization time literals to allow future checks

*Chatbot:*

#2272 Dialog improvements to default Chatbot workspace

#2294 Lower  “Just Gather” scoring for cases with no category ID

#2291 Chatbot on case open page

*Support Search with Watson:*


#1261 Enable the use of double quotes in search bar 

#1266 Add modified date to Date section on left panel 

#1210 Results in agent console do not include the SF case numbers 

#2199 Document header always on top to facilitate access to close document and original source

*Question Assistant (QA)*

* Created a new version of our QA Machine Learning model used in our evaluation process.
* Prepared additional Z and I data batches to run through evaluation process.
* Tested deployment of the QA application to wis-common Kubernetes, the future production environment.
* Fixed minor UI defects with the QA interface in the Community Portal.

*Automation*

* Blueworks Live :
  * New automation scenario to fully deflect SPAM cases.
  * Updates to the "request on behalf of another user" logic to reduce the number of false positives being identified by the automation process.

*Kenexa Assess*
  
  * Fixed defect where the new Contact record creation was failing in some scenarios.



**ARM Updates**

#8189 - Added asset title field to the “Title” field on ARM Case used object 
* User reported issue is necessary for reporting



**HW/RTS/Control Center**

#7826 - Enable multiple contacts at the WO level
* A new related list, Work Order Contacts, is now available, showing First Name, Last Name, Phone, and E-mail for additional contacts.
* HW - Note issue # 8118 in the Defect section above.  This is targeted for Sprint 8.

### IBM Support Site Updates (/mysupport)

#3618 - Deployment of Forums on the support site
* Forums menu choice added to main menu
* Unauthenticated users can read and search all forum questions and answers
* Authenticated users can participate by asking a new questions or answering an existing question

#7640 - Handling of  divested or non-boarded products
* New flag added to the Product object 
* If Boarded is false, case creation must be disallowed.
* Have the ability to enter URLs to direct clients to the correct place to open a case IF the product is not boarded or has been divested

#8146 Expose Last Solution Given Date/Time to the customers 
* Expose on case list view options and case details, this will allow them to know if and when a solution has been provided for their case.
* Clients can expose this field by using the customize function on the Case Details page



### For your awareness

The Drupal in Support internal production server has a new URL as shown in this <a href="https://apps.na.collabserv.com/blogs/934eb090-c379-43a2-80b5-8df905197569/entry/Drupal_in_Support_hosts_content_on_supportcontent_ibm_com?lang=en_usannouncement" target="_blank"> announcement.</a> The link on the <a href="https://github.ibm.com/dba-support/DBA-Education/blob/master/public/markdown/process/agents/case/CreateKnowledge.md" target="_blank"> "Create or Update Knowledge"</a> DBA-Education page has been updated.  
 

**We heard your feedback!  Request for Enhancement (RFE) Review & Improve - Status Update**
* We have made a focused effort over the last 4 weeks to triage a number of RFEs/Ideas, especially given that Lightning is helping us achieve some of those RFEs/Ideas.
* We've triaged 150 RFEs and updated in Ideas with status as follows (43 -delivered, 18- In Dev, 21 - not planned, 6 -partially delivered and 35 - reviewed and 27 - under consideration).
* We will continue to triage the high vote ideas to make sure that submitters and voters get feedback on the status.
* We are looking at how we effectively do the triage on a scaled, regular basis (focusing on high vote ideas) so that submitters and voters do not see this as a black hole.
* We will provide more updates on the progress and the process in upcoming weeks.

**Lightning is now the <a id="default" name="default"></a>default!**
* Be sure to update your link to: <a href="" target="_blank">https://ibmsf.my.salesforce.com</a> .
* Net steps: Early May - We are planning to remove access to Classic altogether  (pending no new blockers are found)

To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a>  so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a> document has quick links to other training documents, links to training videos, Lightning Office Hours enrollment links and more!  

Additional Lightning documents found on the DBA-Education include: 
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>, and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

**Take the Lightning training**
 * For **Agents**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>
  
**WANTED: <a id="videos" name="videos"></a>Videos of L2 support engineers using Lightning (creating, updating, closing, chatting)**
* Help us improve. We're interested in watching how you use CSP.
* The recording process is as simple as turning on screen recording while performing your usual tasks in Lightning.  
& Do not be concerned about GDPR as it relates to these videos. The vast majority will be used by IBM for IBM. A select few will be shared with Salesforce to improve their understanding of our issues, but all client sensitive information will be blocked prior to sharing the videos.
* Instructions on how to create a Webex recording have been posted in the "Misc. Links" section of the DBA-Education FAQ's in the Helpful Links section of the page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faqhere. " target="_blank">here.</a>  
* Please send to twaite@us.ibm.com
* Videos will not be used to measure/monitor/evaluate agents

**The Cognitive Support Platform Sub-Community will be closing down soon.**  
* Each CSP Community page now points to the DBA-Education.  
* The Community is now restricted for members. 
* It will be closed on May 3.


**REMINDER:**   Join the #csp-announcements Slack channel to stay current with important news and updates.

**Business Continuity**
**Reminder: Become familiar with the Business Continuity solution by taking the available Case Manager training**
* The link to the training is <a href="https://yourlearning.ibm.com/#activity/URL-CB81D243B7C4" target="_blank">here.</a> 
* Documentation can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/businesscontinuity" target="_blank">here.</a> 


**DBA-Education Updates**
The following information is a partial list of some of the changes, corrections or additions that were made in the DBA-Education over the past week.  Remember to use the #csp-DBA-Education-feedback slack channel for any comments or questions you may have related to a specific DBA-Education page.  The Anonymous comments feature (call out icon at the top of each page) is another option.
* Several updates were made to the FAQ page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq " target="_blank">here.</a>  
* Updated the link to Drupal on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/knowledgeCreate " target="_blank">Update Knowledge page.</a>  
* Added the link to Lightning Office Hours playlist for recordings, on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningfaqLightning" target="_blank">FAQ page.</a> 
* The Forum Best Practices page was added the the Knowledge Strategy section <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/knowledge/forumBP" target="_blank">here.</a> 
* The Technical Support Forum page was added the the Knowledge Strategy section to help you get started using Technical Support Forums.  Find it <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/knowledge/forumsGetStarted " target="_blank"> here.</a>  



