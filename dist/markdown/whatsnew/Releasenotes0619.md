### Sprint 6 - 2019 Release Notes

* [Lightning will be the Default on April 9](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0619#default)
* [Complete the Lightning training & attend our Lightning Office Hours sessions](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0619#training)
* [WANTED: Videos of your Lightning use (creating, updating, closing, chatting).](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0619#videos)

FYI: Going forward, **deployment to Staging will occur on Wednesdays.**  Deployment to Production will remain on Tuesdays. Our corresponding blogs will be published on the day before the deployments.


### Agent Console Updates

**#7143 Added Serial Number management to Asset and Entitlement**
* In Sprint 6, serial numbers have been added to assets, clients will now have the ability to add their machines' serial number to their Cases in the IBM Support site.  Currently in the console, Agents can view the serial number but they can not add it to Case.
* This only relates to Products that have the new “Is Serialized” flag enabled.

**#7112 Added the ability for Support Managers to Subscribe to Dashboards**

**#5963 Added a checkbox field on the Mission Team object called 'Send Notification Email to Mission Team'; when checked and the Mission Team routes, it will notify all Mission Team Members.  Defaults to unchecked.**

**#2343 Restrict what fields a Salesforce Support user can change in their profile.**
* OneTeam will use BluePages records to build a user profiles in Salesforce
* Users should not be allowed to modify these profile fields in Salesforce directly. 
* They should change their information in BluePages and the ETL OneTeam integration will update Salesforce. 

**#7732 Added 'Log a Call' quick action to the Lightning Case Detail Page, located with the other quick action buttons on the far left column.** 

**#6894 When a Support Task is marked completed, the 'Successful Completed Date/Time' field located in the Task Details will get stamped with the current date and time.** 
* This field can also be used on Task list views for tracking completion date. 

**Defects:**

#7891 Remove access to standard Salesforce Service Console lightning app, instead IBM's 'Lightning Support' App should be default app when switching from classic to lightning.

#7875 Restore the update status quick action on Collaboration Cases in Lightning to match the functionality in Classic.
#7713: Fixed the issue where “Last Solution Given” field didn’t update correctly unless Status was changed
#7778 Fixed incorrectly spelled field 'PMR Open Date'
#6791 New Collaboration action should open as a sub-tab, after submitting the action window should close and the Collaboration Case should open replacing the action sub-tab. 
#7714 When Support Skill field is changed, set Mission Team and Agent field to Auto-Select.

#### HW/RTS/Control Center

**#4936 Org Wide Defaults implementation for Field Service Lightning**
**Impact:** 
* RTS - Field Objects will be visible to those members of the Support Mission
Control Center - no change
* Field: SSRs will be notified when the service appointment is dispatched versus when it gets scheduled. Field Service Objects will be visible to Work Order Owner

**#6039 Capture reason when manual assigning Service Appointment**
* The dispatcher will have to use the "Assign Reschedule Reason" quick action before manually rescheduling a service appointment.
* If the dispatcher does not, an error message will be added to their notifications and the appointment will not be able to be rescheduled.

**#6314 Prevent Control Center users from altering a Service Appointment during automation processing.**
* The Service appointment's status will be changed to "Scheduling In Progress" when scheduling automation occurs.
* During this time, users will not be able to alter the service appointment.

**#7007 Disable Service Appointment creation for Draft WOs** 
* Service Appointments can no longer be created for Draft Work Orders.

**HW/SSR**

**#6255 Notify SSRs of dispatched (but not tentatively scheduled) work SSRs will be notified of a Service Appointment only once it is dispatched to them.**



**Watson in Support**
* Previous issue involving Support Search with Watson has been resolved
* All new cases and updates to cases in Salesforce are now being shown in Support Search with Watson.
* Announcement has been updated <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/search/whatsNew/announcements" target="_blank">here.</a>  

 
*Automation*
    
* Blueworks Live - Set up email capabilities to send out template responses for the "special account" automation scenario. 
* Minor fixes implemented: improved handling of "customers requesting help on behalf of another client" and improved some of the automatic case post messages.
* Kenexa Assess - Implemented basic email signature detection to parse for first name and last name values to associate to contact records.

*Support Search:*

* Added historic PMRs from April 2009 to present in Production
* Added dynamic filters to create date

*Chatbot:*
    
* Chatbot  will now be available on main support page and FAQ pages
* Enabled Chatbot SMEs with instructions to create a debug assistant within product workspace
* Updated Chatbot button name from “Chat with IBM” to to “Chat with Support”

*Case Prioritization enhancements:*
    
   * Tooltip displayed for abbreviated custom field labels in cards
   * Custom filter for Parent.OwnerId in Case Prioritization
   * Custom field config added to implicit feedback
   * Retrofit WCI insight field for storing breakdown data
   * Mini CP in Lightning to have a 'Display empty pipelines' toggle
   * Allow sidebar resize up to full screen
   * Watson score breakdown displayed

*Question Assistant*

* Hardware Support Improvements:
    * Machine Learning model retaining for improved accuracy. To be used for evaluating QA performance of h/w ticket content
    * Creation of a new error code dictionary for SystemZ and SystemI with some preliminary analysis . Error codes one of the existing annotator targets and this dictionary will improve the accuracy for this annotator
    
### IBM Support Site Updates (/mysupport)

**#7143/7504  Machine entitled software - Serial number Must Gather for support site**
* If a "Serialized" product is selected,  the Serial Number mustgather field will display on Case Create
Example below:

![image](https://media.github.ibm.com/user/146797/files/f9dcb780-4fd9-11e9-83a2-daaaaae2da14)

**#6538 - Implementation of Product Area for operating Systems Products**
* Some operating system products will require a Product Area must gather
* Once enabled (by an Admin), the new Product Area field will appear for clients on Case Create.

Example below:
![image](https://media.github.ibm.com/user/146797/files/37414500-4fda-11e9-8ecb-3a660d4070e8)

![image](https://media.github.ibm.com/user/146797/files/4e803280-4fda-11e9-9b9e-4eb5bcdca712)

   * If picked by client, Product Area will appear ahead of all other Must Gather fields, right after Product
* This field will not be required
* If a client searches for a valid Product Area in the product field, both product and Product Area fields are populated


**#3618 - Implement Forums on the support site**
* This is currently in Staging and targeted to launch on **April 16**.
* New Main menu item will be displayed on ALL IBM Support site pages

![image](https://media.github.ibm.com/user/146797/files/84251b80-4fda-11e9-9084-46db3422a626)

* Instructions for IBM Engineers will be posted in the DBA-Education prior to launch
* Instructions for clients will be published to the support site prior to launch
* We need help in testing after this function gets moved to Staging
* Forums will use the IBM strategic search engine - Swiftype
* Dedicated Slack channel setup for feedback <a href="https://slack.com/app_redirect?channel=CGQPT1RA7" target="_blank">#csp_forums_mysupport</a> 

### For your awareness

The <a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W94ca60546862_4245_b023_958e309364f2" target="_blank">Cognitive Support Platform Community </a> will be closing down soon.  Each CSP Community page now points to the DBA-Education.  The Community will be restricted for members starting **April 12**. It will be closed on **May 3**.

**REMINDER:** Join the <a href="https://slack.com/app_redirect?channel=C902QFMPG" target="_blank"> #csp-announcements</a> Slack channel to stay current with important news and updates.

**Lightning Roll out plan:**

* Lightning becomes the <a id="default" name="default"></a>default on April 9 
* Early May - We are targeting to remove Classic (pending no new blockers are found)

To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues </a> so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.

* <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs Classic </a> 
* <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs</a>
<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank"> Known Lightning Issues</a>
* <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank"> Lighting Tips & Tricks </a>
* <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">Lightning Case Views </a>
* <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">Lighting Reporting  </a>
* NEW - <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightninggetready" target="_blank">Get ready for Lightning - NOW!</a>
* Coming soon: <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcomparison" target="_blank">Lightning Comparisons page. </a>

* You can easily find these DBA-Education pages on the Agent Console by clicking the question mark in the upper right corner

![image](https://media.github.ibm.com/user/146797/files/30680180-4fdd-11e9-9f4b-c5a520570a5b)

![image](https://media.github.ibm.com/user/146797/files/483f8580-4fdd-11e9-8e92-0bcdeefc4c71)

![image](https://media.github.ibm.com/user/146797/files/62796380-4fdd-11e9-89f6-a3f6e339da69)

**Take the Lightning training**
 * For **Agents**, the <a name="training"></a>training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a> 


 **Sign up for Lightning Office Hours.** 
* April 3, 10, 17 at 12:00PM for EMEA and NA, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014684" target="_blank">here.</a> 
* April 3 at  9:00PM for AP, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10016903" target="_blank">here.</a>  
* Provide feedback in the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA" target="_blank">#csp-lightning</a> Slack channel.


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
The following information are some of changes, corrections or additions that were made in the DBA-Education over the past week.  Remember to use the #csp-DBA-Education-feedback slack channel for any comments or questions you may have related to a specific DBA-Education page.  The Anonymous comments feature (call out icon at the top of each page) is another option.

* Case Closure information was updated on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/closure" target="_blank">Positive Case Closure </a> page.
* Scenario #3 information was updated on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">Case Communications </a> page.
* Information about Quick Action buttons was updated on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">Lightning vs. Classic </a> page.



