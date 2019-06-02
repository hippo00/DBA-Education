
### Sprint 9 - 2019 Release Notes

**Sprint 9 target deployment (Production): May 14**


* [Lightning Office Hours May 22 (NA/EMEA & AP sessions)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0919#office)
* [Consolidated information included on the Get ready for Lightning - NOW!](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0919#lightning)


### Agent Console Updates

#8025 This brings a new process for creating cases in the console through a step-by-step screen flow. 
* Users will be able to search for and gather all critical case information including Must Gathers, Watson Skill and Language stamping as well as access the newly revamped synchronous Mission Team Routing and Assignment- no more waiting for routing!  
* This release is the first iteration of the Case Create Flow and will be launched for new cases from the utility bar and with a replacement of the Duplicate Case button.
* Available in staging now and will be available in prod for Sprint 10.

#8150 Added the ability to Clear the "Last Solution Given Date/Time" field.  
* When a solution is rejected by the customer, agents can clear the Last Solution Give Date/Time field by navigating to the new quick action called 'Clear - Solution Date', located in the quick action drop down on the far left panel of a case.

#8170 Renamed the "Update Work Order" button on Work Order to "Update Work Order Status."

#5103 Removed the ability for CSPO & L0 Users to Delete Cases.

#8121 Changed name from Special Programs to Special Handling
* The DBA-Education page is currently being updated to include new screenshots <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication " target="_blank">here.</a> 


**Console Defects:**


#7418 Removed the ability to set the "Next Contact Date" field on Case to a past date when creating a Case or editing an existing Case.

#8079 Prevent duplicates when creating Case Defects for APAR 
* When adding a Defect for Legacy Type APAR to a case, agents will be prevented from saving if there's an existing Defect that represents the same Number. Agents will be prompted to associate to the existing defect instead. 

#8238 The 'Completion Date' field on Case Milestone should only be updated when the first response is from an agent or customer. Prevent a post from the RIKER (RCMS) user from updating the 'Completion Date' field.

**Watson in Support**

*Case Prioritization*

There were a number of enhancements and fixes deployed this week.  They are listed below but for additional details and a demo, a recording is available.  The link <a href="https://ec.yourlearning.ibm.com/w3/playback/10005032" target="_blank">here</a> goes to the Playlist from all Case Prioritization Workshops.  The May 13 recording features all the Case Prioritization enhancements and fixes listed below.


#2269: Watson-in-Support-Routing/case-routing-ranking Button to disable auto-refresh in Case Prioritization

#2270: Ability to mark cases in the list view as read in Case Prioritization

#2271: Ranker - elevate Watson score if severity increases

#2215 Investigate possibility of “I’m following” flag in Case Prioritization

#2280 Include Parent Case as a filterable and linkable field in Case Prioritization

#2290 Interpret anchor tags in Case Prioritization

#2291 Add custom fields to available sortBy options (kanban only)

*Case Prioritization Fixes*

#2084 Kanban card display field modifications not shown in Mini CP cards

#2187 Custom fields dialog remembering previously entered text

#2191 Case Prio in Staging “Order By” filters don’t work in a list view.

#2225 Mini CP - Refresh takes you back to the first pipeline in the view

*Chatbot:*

#2313: Improve search results from Chatbot by going deeper into ARM categories tree after jump occurs

#2314: Chatbot can respond with image response


*Support Search with Watson UI enhancements:*

#1289: Filters and options have been separated out on different tabs thus making is easier to access and remove distractions from the filters and facets

#1279: New option has been added in the UI that enables users to select whether to use OR or AND as default criteria


*Automation*

#726:Blueworks Live automation enhancement:  "Special Accounts" automation scenario has been updated for the RBS account to be a full deflection where a template response is sent out and the case is closed

#724:Kenexa Assess automation enhancement: An improvement has been made to the "IBMTests" automation scenario that should reduce the number of false positives for that automation scenario.


**HW/RTS/Control Center Updates**

#8170 - rename "Update Work Order" button to "Update Work Order Status"
* The button on the desktop used for updating the work order status will now be labeled 'Update Work Order Status' in order to be consistent with the option to 'Update Work Order Status' in the Work Order Actions on mobile.


### IBM Support Site Updates (/mysupport) 

#8090 - Surveys will no longer pop-up from Product pages.
* For the most part these pages are not providing value to our clients
* There is an effort underway to work with Marketing to add support content on the Marketing pages - Right now this is a work in progress

#8349 - Add "view case detail" button to ALL support case email templates 

#8544 - Add Single Chat function to the forums page 

#8085 - Update to /mysupport Home Page
* The page will now include a link to  'The Insider" in addition to a link to the /mysupport Home page. 

**Defect**
#8344 - Eliminate duplicate serial numbers and suppress inactive serials in the serial number selector on case create
This is now targeted to be fixed in **Sprint 10.**

### For your awareness

REMINDER: Sign up for Lightning <a id="office" name="office"></a>Office Hours.  
* May 22 at 12:00PM for EMEA and NA, enroll in the this event <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10026494" target="_blank">here. </a> 
* May 22 at  9:00PM for AP, enroll in the event <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10026499" target="_blank">here. </a> 
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

The following information is a partial list of some of the changes, corrections or additions that were made in the DBA-Education over the past week.  Remember to use the #csp-DBA-Education-feedback slack channel for any comments or questions you may have related to a specific DBA-Education page.  

* Case Creation Deviations link was added to the TecSpecs page here.  https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/tecSpecs
* A duplicate of this page: https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/reporting/reporting was removed from the Support Management section.
