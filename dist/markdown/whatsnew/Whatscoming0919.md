### What's coming up in Sprint 9 - 2019

* [Lightning Office Hours May 8 (NA/EMEA & AP sessions)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0919#office)
* [Consolidated information included on the Get ready for Lightning - NOW!](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0919#lightning)
* W3ID Planned Outage on May 11

**The W3ID outage which was postponed from March, is now planned for Saturday, May 11 from 11:00PM ET to Sunday, May 12   4:00AM ET** 

**Action for Agents:** 

* If you need to access to CSP or other IBM systems between the hours of 11:00PM ET on Saturday to 4:00AM ET on Sunday, please plan to login to CSP and any other systems you may need prior to 11:00PM ET.  Logging in prior to the outage start time will allow you to continue to use the Console and other IBM systems to which you need access. It is anticipated the outage will only be 2 hours, but the W3ID team has allocated 4 hours for this activity. 
* To check status on this outage, the IBM W3ID Service Status page can be found <a href="https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/W89b23bf7ad80_4411_822f_2a6dc171c6b3/page/w3ID%20Service%20Status" target="_blank">here.</a> 
* Link to official notice can be found <a href="https://w3.ibm.com/help/#/outages/b02742e1-2467-4fbc-8261-86c402e86f27" target="_blank">here.</a>  
* The Cognitive Support development team will be online to validate and will communicate via #csp-announcements channel if any issues.
* For urgent issues that arise during the outage, there is a help feature contained within the official notice shown in the bullet above.  

### Agent Console Updates

#8025 New Case Create Process 
* Due to IBM's need for additional processes during case create, cases internally created by support agents via the console UI will utilize a new case creation wizard.  
* From the Utility Bar, Agents will click on the 'Case Create' utility item to create a case.  From here agents will be guided through a series of steps to create a case.
* Cases created through this process will allow for automatic, synchronous processing for Mission Team Routing, Watson Skill and Language stamping, and Agent Assignment.
* The first version of this new process will available in staging in Sprint 9 - May 8th. It will stay in staging while we gather feedback, fix bugs, and improve the overall process. The Second iteration will be available in Staging in Sprint 10 - May 22. 
* A training video will be made available closer to the launch date.

![image](https://media.github.ibm.com/user/146797/files/4836a900-70a4-11e9-9f94-428029dc4fa7)


#3300 Enable Mission Team routing rules for system managed MustGather fields:
* IBM Z and other Systems products will be using MustGather fields to obtain additional information from clients. Base on the MustGather fields cases will be routed to the appropriate teams. 
* This applies for the following MustGather fields: Serial number, Product Area, Operating System, Product Version, and System down.


**Defects:**

#8079 Prevent duplicates when creating Case Defects for APAR 
* When adding a Defect for Legacy Type APAR to a case, agents will be prevented from saving if there's an existing Defect that represents the same Number. Agents will be prompted to associate the existing defect instead. 

#7418 Removed the ability to set the "Next Contact Date" field on Case to a past date when creating a Case or editing an existing Case.

#8170 Renamed the "Update Work Order" button on Work Order to "Update Work Order Status."

#5103 Removed CSPO & L0 Users ability to Delete Cases.

#8238 Prevented the 'Completion Date' field on Case Milestone from updating when RIKER (RCMS) user posts to the Case Feed.

**Watson in Support**

*Chatbot:*

#2313: Improve search results from Chatbot by going deeper into ARM categories tree after jump occurs

#2314: Chatbot can respond with image response


*Support Search with Watson:*

#1289: Filters and options have been separated out on different tabs thus making is easier to access and remove distractions from the filters and facets

#1279: New option has been added in the UI that enables users to select whether to use OR or AND as default criteria


*Automation*

#726 - Blueworks Live automation enhancement:  "Special Accounts" automation scenario has been updated for the RBS account to be a full deflection where a template response is sent out and the case is closed

#724 - Kenexa Assess automation enhancement: An improvement has been made to the "IBMTests" automation scenario that should reduce the number of false positives for that automation scenario.

**HW/RTS/Control Center Updates**

#8170 - rename "Update Work Order" button to "Update Work Order Status"
* The button on the desktop used for updating the work order status will now be labeled 'Update Work Order Status' in order to be consistent with the option to 'Update Work Order Status' in the Work Order Actions on mobile.

**New RTS course added to Module 5**
* The course is titled ""RTS steps to create a Work Order with Parts (Lightning)." 
* Please read the Training Updates section found at the bottom of this blog.

### IBM Support Site Updates (/mysupport) 


#8090 - Surveys will no longer pop-up from Product pages.
* For the most part these pages are not providing value to our clients
* There is an effort underway to work with Marketing to add support content on the Marketing pages - Right now this is a work in progress

#8349 - Add "view case detail" button to ALL support case email templates 

#8544 - Add Single Chat function to the forums page 

#8085 - Update to /mysupport Home Page
* The page will now include a link to  'The Insider" in addition to a link to the /mysupport Home page. 


**Defects Fixed**

#8344 - Eliminate duplicate serial numbers and suppress inactive serials in the serial number selector on case create

### For your awareness

REMINDER: Sign up for Lightning <a id="office" name="office"></a>Office Hours. 
* May 8 at 12:00PM for EMEA and NA, enroll in the this event <a href="https://ec.yourlearning.ibm.com/w3/enrollment/meeting/10024633" target="_blank">here. </a> 
* May 8 at  9:00PM for AP, enroll in the event <a href="https://ec.yourlearning.ibm.com/w3/enrollment/meeting/100246341 " target="_blank">here. </a> 
* ALL Lightning Office Hour recordings can be found on the Playlist <a href="https://sme.video.ibm.com/channel/23495615/playlist/449789  " target="_blank">here. </a>  
* Provide feedback in the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA" target="_blank">#csp-lightning</a>      Slack channel.

**Lightning is now the default!**

* Be sure to update your link to: <a href="https://ibmsf.my.salesforce.com" target="_blank">https://ibmsf.my.salesforce.com</a> Slack channel. 

To make your transition to the <a id="lightning" name="lightning"></a>Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a>  so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a> document has quick links to other training documents, links to training videos, Lightning Office Hours enrollment links and more!  Additional Lightning documents found on the DBA-Education include: 
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>, and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

**Take the Lightning training**
 * For **Agents**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a>    
 * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>
  
**We heard your feedback!  Request for Enhancement (RFE) Review & Improve - Status Update**
* Here is the latest update on our progress as of May 3, 2019.
* We've triaged 187 RFEs and updated in ideas with status as follows (47 -delivered, 3 - existing feature, 23- In Dev, 30 - not planned, 6 -partially delivered and 44 - reviewed and 34 - under consideration)
* We will continue to triage the high vote ideas to make sure that submitters and voters get feedback on the status.
* We are looking at how we effectively do the triage on a scaled, regular basis (focusing on high vote ideas) so that submitters and voters do not see this as a black hole.
* We will provide more updates on the progress and the process in upcoming weeks.

**DBA-Education Updates**

The following information is a partial list of some of the changes, corrections or additions that were made in the DBA-Education over the past week.  Remember to use the #csp-DBA-Education-feedback slack channel for any comments or questions you may have related to a specific DBA-Education page.  


* The Anonymous comments feature (call out icon at the top of each page) will now feature this note:
![image](https://media.github.ibm.com/user/146797/files/977eca00-700f-11e9-9555-fda9079aedee)

* Added OWD release description for Field Service Lightning <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/coreConcepts/need2know" target="_blank">here.</a> 
* The User Roles page was updated <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/usersroles" target="_blank">here.</a>  
* The Social Support Contacts page was updated with the names from Watson FSS, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/social/generalInfo/contacts" target="_blank">here.</a>  
* Procedure documents from the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/fieldservice/overview" target="_blank">Field Service Overview page</a> were moved to the three new pages: HW, RTS and Control Center.  These pages are a work in progress.
* Additional information was added to the Chatbot FAQ page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/chatbots/faq" target="_blank">here.</a> 

**Training Updates:**

* Training Module 5 has been updated with a new course titled "RTS steps to create a Work Order with Parts (Lightning)."  Module 5 can be found on the Demos & Learning DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/training" target="_blank">here.</a> 
* On May 15, the YourLearning link to the Course 4: Salesforce for Support Managers will be retired.
  * **Action for Support Managers:**  If you are currently registered for the course, you must complete it by May 15, otherwise, you will not be able to access it.
  * However, the CSP Refresher Course: Review Common Manager Tasks, contains the same information only better.  It features all Lightning screenshots and offers the user assessments and cheat sheets.  The Refresher Course will then move into the Course 4 spot and we will remove references to it on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/training" target="_blank">Demos & Learning page.</a> 
  * If you have any questions about this upcoming change, please contact <a href="https://w3.ibm.com/bluepages/profile.html?uid=246123897" target="_blank">Mea Coleman.</a> 
