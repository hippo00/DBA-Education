### What's coming in Sprint 10 - 2019

**Sprint 10 target deployment (staging) 5/23/19**

**Sprint 10 target deployment (Production): 5/29/19** 


* [Lightning Office Hours May 22 agenda will include the topic: Entitlement (NA/EMEA session)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming1019#office)
* [Lightning Office Hours for AP will combine with CST Monthly AP Support Transformation call this week.](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming1019#ap)
* [Consolidated information included on Get Ready for Lightning Now! <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">DBA-Education page</a>](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming1019#lightning)


### Agent Console Updates

#8025 New process for creating cases in the console using a step by step screen flow. 
* Users will be able to search for, input, and derive all critical case information including Must Gathers, Watson Skill and Language stamping, and Case Details
* Within the flow, there is newly revamped synchronous Mission Team Routing and Assignment- no more waiting for routing and no more dependencies on batch jobs.
* This release is the first iteration of the Case Create Flow and will be launched for new cases from the Utility Bar and from the Live Chat Transcript page. The Case Create flow will also be utilized in the Duplicate Case quick action, and the Edit Primary Fields tab.

#8590 The Live Chat Transcript page will now utilize the new case create screen flow. 
* When an Agent needs to create a new case related to the chat record, Contact and Product from the chat will copy into the new case. 

#7064 The Duplicate Case quick action will now utilize the new case create screen flow, copying the Contact, Account, and Product from the original case into the new case. 
* This is only available for Open and Closed case record types.

#8321  A New tab called 'Edit Primary Fields' has been added to the case page which utilizes the new case create flow, and allows changes to the case's Contact, Account, and/or Product.  
* This also allows for re-entitlement and re-routing when necessary. 
* Documentation can be found in the DBA-Education:
  * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/create#utility" target="_blank">Creating a case from the Utility Bar </a>  
  * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/create#live" target="_blank">Creating a case from the Live Chat Transcript page </a>  
* Additional documentation and a training video are still in progress 


#3300 Enable Mission Team routing rules for system managed MustGather fields: 
* Team use MustGather fields to obtain additional information from clients. Base on the MustGather fields cases will be routed to the appropriate teams. 
* This applies to all system MustGather fields.  For example: Serial number, Product Area, Operating System, Product Version, and System down.


#7640 Handling Divested and Not Yet Boarded Products 
* If an agent selects a product that is not boarded while creating a case from the new Case Create flow or while using the Reassignment quick action, a warning message will display with a description and a link to the target web page for the product which the clients should go to for help.


#8412 A new field 'Parts Description' was added to the Entitlement page layout. 
This helps agents identify entitlement differences within a given offering.


**Defects:**

#7395 Updated the error message that displays when an agent tries to edit the Status field directly from the case details to say "Use the Post quick action..."


#8678 Removed the ability to set the Next Contact Date field to a past date.


#8646 Disabled the ability to File Transfer through Live Chat due to GDPR and Security risk.


#8383 Removed the ability for Agents to create Internal Support Cases from the console and instead are directing them to use the Internal Community. 


**Watson in Support**


*Case Prioritization Enhancement:*

#2352 Add the ability to change pipeline header colors

#2353 Add the ability to have multiple instances of case prioritization open


*Chatbot:*

#2350 Logging improvements for new Watson Assistant response types
Bug fixes to handle Watson service outages in chatbot:

#2364 Chatbot should gracefully handle the case when BlueMix or Watson Assistant is down

#2366 Chatbot server crashes during some types of Watson Services outage


*Support Search with Watson:*

#1275 Sub Document Type filter: The document type filter only shows 4 option. We are going to expand this filter so you can see more granular type of document. With this enhancement you will be able for example to select all PMRs, APARs or technotes by using a single filter.

#Bug 1336 Missing support missions : Due to the large number of support missions, in some cases, some support missions were not being displayed. We are changing the support mission to be a facet and to show content not in alphabetical order but in descending order by number of results.


*Automation:*

#763 Improvements have been implemented  for Blueworks Live to detect forwarded emails to help remove some false positives for the scenario when a customer is asking for help on another users behalf. 


*QA:*

#742 Implemented new services to monitor our Question Assistant Kubernetes cluster and alert the team if any issues are encountered with our application deployments to the cluster nodes. 

**Field Technician/SSR, RTS, Control Center Updates**
* A new page added to the Field Service section called: <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/fieldservice/taskbreakdown" target="_blank">Task Breakdown.</a> The chart will show how the tasks for the Field Technician/SSR, RTS and Control Center will change after the migration to Salesforce.

**ARM Updates**

#8329 New categories created under shared categories now propagate to all missions where the parent category is shared

**Defect:** 

#8574 Asset/Category edit history not cleared when closing the editor UI


### IBM Support Site Updates (/mysupport) 

#2469 IBM z - Premium Response option for SoftwareXcel clients to set on a per update basis.
* This will deploy in staging on May 23. 
* On case open, if client has proper entitlement, they will have the option to chose Premium Response
* On each case update from the case details page, if client has proper entitlement, they will have the option to chose Premium Response


#2866 IBM z - indicator on case about whether it's a "How to/Q&A" or a "Defect" type case
* This will deploy in staging on May 23. 
* If client has appropriate entitlement they are able to ask Q&A type questions specific to IBM Z products.
* Only Z Premium Entitled clients can select "How to/Q&A" successfully. Once selected, the "How to" type cases route to specific team


**Defects:**

#8092 Serial Number should only be editable for clients on initial entry 
* Serial Number Must Gather (For products that are "Serialized") should only be editable when a case is being created. 
* Clients should not be able to change the value they initially provided or add this information after the case has been created.


#8344 Need to eliminate duplicate serial numbers and suppress inactive serial numbers for case create on IBM Support Site 
* The serial number Must Gather appears to be pulling all serial number regardless of the status of the asset record resulting in duplicate values
* Now ONLY 1 serial number will appear on the serial number drop down if it appears across multiple assets/accounts

### For your awareness

* We heard your feedback!  Request for Enhancement (RFE) Review & Improve - Status Update
* We have made a focused effort over the last 6 weeks to triage a number of RFEs/Ideas, especially given that lightning is helping us achieve some of those RFEs/Ideas.
* We've triaged 208 RFEs and updated in ideas with status as follows (54 -delivered, 24- In Dev, 31- not planned, 6 -partially delivered and 50 - reviewed and 43 - under consideration)
* We will continue to triage the high vote ideas to make sure that submitters and voters get feedback on the status.
* We are looking at how we effectively do the triage on a scaled, regular basis (focusing on high vote ideas) so that submitters and voters do not see this as a black hole.
* We will provide more updates on the progress and the process in upcoming weeks.

**REMINDER: Sign up for Lightning <a id="office" name="office"></a>Office Hours**  
* May 22 at 12:00PM for EMEA and NA, enroll in the this event <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10026494" target="_blank">here. </a> 
* May 22 at  9:00PM for <a id="ap" name="ap"></a>AP  - We will combine with CST AP Monthly Support Transformation call.  Enroll in the event <a href="http://ibm.biz/Bdi68B" target="_blank">here. </a> 
* ALL Lightning Office Hour Playlist of recordings are found <a href="https://sme.video.ibm.com/channel/23495615/playlist/449789" target="_blank">here. </a> 
* Provide feedback in the <a href="https://slack.com/app_redirect?channel= CDJ8X6TQA" target="_blank">#csp-lightning Slack channel. </a> 


**Lightning is now the default!**
* Be sure to update your link to: <a href="https://ibmsf.my.salesforce.com." target="_blank">https://ibmsf.my.salesforce.com. </a> 
* Next steps: We are planning to remove access to Classic altogether sometime in May or June  (pending no new blockers are found).
To make your transition to the <a id="lightning" name="lightning"></a>Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a>  so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.  The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a> document has quick links to other training documents, links to training videos, <a id="lightning" name="lightning"></a>Lightning Office Hours enrollment links and more!  Additional Lightning documents found on the DBA-Education include: 
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>, <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>, and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

**Take the Lightning training**
 * For **Agents**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a>

**DBA-Education Updates**

The following information is a partial list of some of the changes, corrections or additions that were made in the DBA-Education over the past week.  Remember to use the <a href="https://slack.com/app_redirect?channel=%20CDJ8X6TQA" target="_blank">#csp-DBA-Education-feedback</a> slack channel for any comments or questions you may have related to a specific DBA-Education page.  

* Moved Special Handling information into a separate page. A link to the page appears on the  "Communications in a Case" page.  New page is <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">here.</a>  
* Added descriptive screenshot chart to the Lightning Comparison page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank"> here.</a>  
* Added link to the #csp-DBA-Education-feedback Slack channel to the FAQ page and the  <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/DBA-EducationHowto" target="_blank">DBA-Education Howto page.</a> 
* Added 2 links to <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/helpful-links/slackchannels" target="_blank">Slack channel list</a> to share helpful information from the Slack Help Center.
* Provided additional status detail in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0919" target="_blank">Sprint 9 Release Notes blog</a> about Git issue 8025 + additional Case Prioritization enhancements.
* The <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/servicePlanners/ManageSLCs" target="_blank">Create and Manage SLC page</a> has been updated to include a section on "Primary Goal for Salesforce Taxonomy."
* New page added to the Field Service section called: <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/fieldservice/taskbreakdown" target="_blank">Task Breakdown.</a> 



