## What's coming up in Sprint 5

* [Lightning will launch in Production on March 19](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0519#lightning)
* [Milestone Timer will soon be working for more countries](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0519#milestone)
* [All Remote Repositories will now use Collaboration Cases instead of Agile Accelerator work items](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatscoming0519#remote)

Sprint 5 Staging date; March 12

Sprint 5 Production target date: March 19


### Agent Console Updates

**#6665 Account Priority - Strategic Solution** 
* This is targeted for Sprint 5.
* Account Priority is being migrated to the new Special Programs features.  All existing plans will be migrated.
* Documentation will be added to the DBA-Education soon.
* AVP will continue to be listed as a special program for now -- that is, the AVP special program data will be migrated as part of Account Priority migration. 

**#7683 All <a id="remote" name="remote"></a>Remote Repositories will now use Collaboration Cases instead of Agile Accelerator work items.** 
* When Support Agents need to collaborate with L3 development teams, they create a Collaboration Case using a bridge to the development teams’ Remote Repository.  
* This new feature for RTC, ICD and JIRA remote repositories is **targeted for Production in Sprint 5.**
* Github and ServiceNow collaborations have been using the collaboration object for several months in production; there is no change for these remote repositories.
* With the move to Collaboration Cases, we will remove the ability to create collaborations off of Skill Cases. Future L3 bridge enhancements will be made to Collaboration cases and will not apply to Skills cases. Collaboration Cases can only be created off of the Parent Case and not Skill Cases (Skill case collaborations were only added as a temporary workaround to an agile accelerator limitation).  We realize some users do like to create collaborations off of a skills case, but these lose visibility to the parent case.
* In the next Sprint 6, we expect to migrate existing Agile Accelerator work items over to Collaboration Cases.  In addition, we expect to cascade Severity level changes from the parent to the child collab case in a future sprint, so L3 teams have visibility to a parent case severity level update.
* There is no change for existing Collaboration Cases.
* Slack channels for specific Collaboration Case questions: #csp-git-bridge, #csp-icd-bridge, #csp-jira-bridge, #csp-rtc-bridge, #csp-servnow-bridge

**#7709 Remove "Log a Call" from the "Feed" tab of Lightning Case Page Layout**

**#6961  Updating the Work Order - Lightning Page UI to improve user experience.**

**#7708 'Parent Case Owner' field will allow agents to track all Child Cases created for Cases they own and will replace the 'Parent Case Owner Email' field.**

**#7543 In the case of ETL managed entitlements when the business hours are inactive it will assign the default entitlement to avoid any errors.**

**#7343 Live Agent Chat - Increase Timeout setting from 20 seconds to 40 seconds before reassigning to reduce 'No Agent' drops.**

**#7741 Remove "Skill Field" on all Page Layouts** 

**#5397 Account Priority : UIs** 


**Defects to be fixed in Sprint 5:**

**#7688 Displaying the wrong Agent in the 'Target Agent' pick list field for the Case Re-Assignment Quick Action.**

**#7651 Changing the Support Skill from the Case Re-Assignment Quick action does not allow Auto-Select when Watson is disabled for the Support Mission.**

**#7437 When transferring a chat in Lightning all online Agents are displaying as ‘IBM Support' instead of the agent's name.**


#### Watson in Support 

We missed telling you about some new Watson features launched in Sprint 4. We have included the information below and have also added it into the Sprint 4 Release Notes blog <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes40319" target="_blank">here.</a> 

**Sprint 4:** 

##### Chatbot:

*Product Detection for LiveChat integration:*

* As a Client engages LiveChat, chatbot  now determines the product that they are asking about and the chat is routed  to the right support mission who is familiar with the product based on skill-based routing, so that he/she can appropriately service the customer.
* Chatbot will be placed on Case Management page:

  An integrated chat experience has been provided with the ability to chat with Watson Chatbot and hand off to live agent at any point from the case management page for our external clients.

##### Support Search with Watson:

*Support Search with Watson results sent to new tabs:*

* The Support Search with Watson result list or individual search will now open in separate tabs, so that it can help make the search much more usable. 
* Preserving the state of SSwW in the Agent Console:
* While searching with SSwW and switching to Cases or another view in the Agent Console, going back to SSwW ensures that previous search results are retained.

##### Automation:

*Handling multiple cases created  for the same automation request:*

* If a customer submits two similar cases in a short period of time, the second request is not automated and left for an agent to handle. This is to ensure that if the automated response is incorrect, the case is not automated again.

    * Handling of automation requests created for another user:
If a customer is requesting help for another user, then NBA suggestions and or automation actions are bypassed.


#### Sprint 5:

##### Chatbot:

*Improve Dialog capabilities in product workspace by supporting new Watson Assistant features:* 

* IBM SMEs who build the Chatbot workspace will have the ability to create more complex dialogs in their curated answers for our external Clients by using Watson Assistant’s New “Options” response type.

##### Case prioritization enhancements:
    
    * Tooltip displayed for abbreviated custom field labels in cards
    * Custom filter for Parent.OwnerId in Case Prioritization
    * Custom field config added to implicit feedback
    * Retrofit WCI insight field for storing breakdown data
    * Mini CP in Lightning to have a 'Display empty pipelines' toggle
    * Allow sidebar resize up to full screen
    * Watson score breakdown displayed


#### HW/RTS/Contol Center 
				
* #6918 Make WO status field read only to force users to use the Update Work Order button
    * The Work Order status field is no longer editable.  Please click the "Update Work Order" button to change the Work Order's status.

* #6214 Last appointment post-SA travel is not required
    * In the dispatcher view, the return travel to the SSR's home location will not be shown after the last service appointment.

* #7496 Incorporate Long Duration Validations into WO Actions (Desktop/Mobile)
    * When a user updates the Work Order status to Schedule Exception or closing the work order, validation will occur to make certain:
     * There are no time sheet entries which are over 10 hours in duration
     * Start and end dates do not occur on different days.

HW/SSRs
* #7496 Incorporate Long Duration Validations into WO Actions (Desktop/Mobile)
    * When a user updates the Work Order status to Schedule Exception or closing the work order, validation will occur to make certain:
     * There are no time sheet entries which are over 10 hours in duration
     * Start and end dates do not occur on different days.

* #6255 Notify SSRs of the work they need to do (stop notifying them of tentatively scheduled appointments) 
    * SSRs will be notified if a Service Appointment is only once it is dispatched to them.


#### ARM Updates

**Defects will be resolved in Sprint 5**

#7721: Selecting a different category while creating/editing an asset, recommendation, or category will force close the editor without saving changes

#7568: ARM Global Search not finding assets within shared categories

#7520: ARM does not reopen to shared categories when opening the UI


#### Entitlement

**AVP entitlements will be live next week, meaning:** 

* The entitlement name for AVP contracts on the case is called Passport Advantage Premium.
* Drive SLAs - and thus milestone timers and case priority for AVP entitled cases
* Community will start to enforce entitled contacts.  Entitled contacts are contacts listed within the entitlement for an account's asset.  Entitled contacts will be able to create and edit AVP entitled cases.  All others on the account will be read-only for that account's AVP cases.
* AVP products are hidden from the Client's view but cases migrated from RETAIN may see "AVP …” or "Accelerated Value Program …”  in the product name until the support team assigns the case to a specific product. 


**The <a id="milestone" name="milestone"></a>Milestone Timer will soon be working for more countries as those countries' business hours are being loaded and finalized.**

* By Friday March 22, you should see the countries reflect an accurate timer
* A list of countries has been added to Drupal <a href="https://www-prd-trops.events.ibm.com/node/875828" target="_blank">here</a>  The link will also be added on the Case Entitlement DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement" target="_blank">here</a>   
* Countries will continue to be added until all are in place. Watch our blogs for updates.  

### For your awareness

**<a id="lightning" name="lightning"></a>General Availability of the Lightning Console will be in Production on March 19.  Classic will remain the default, with the ability to switch to Lightning on demand.**  

* Work in Lightning as much as possible. Don't wait until Classic goes away to start using it.  If you switch back to Classic, please include why you are switching back in the pop-up - Is it because of a defect in Lightning? Is it because there is functionality only in Classic? 
* Roll out plan:
    * March 19 (End of Day) - Lightning available to all
    * April 9 - Lightning becomes the default (this gives users 3 weeks to practice in Lightning before it becomes the default)
    * Early May - We are targeting to remove Classic (pending no new blockers are found)
* To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information. 
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic " target="_blank">Lightning vs Classic</a> 
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs </a> 
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues</a>  
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips " target="_blank">NEW! - Lighting Tips & Tricks </a> 
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">NEW! - Lightning Case Views</a>  
    
* Take the Lightning training
    * For Agents, the training is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> (Your Learning) and <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> (Skills Gateway).    
        
    * For Managers the training is <a href=" https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> (Your Learning) or in <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a> (Skills Gateway).

* Sign up for Lightning Office Hours. 
    * March 20, 27 and April 3 at 12:00PM for EMEA and NA, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014684 " target="_blank">here.</a> 
    * March 20 at  9:00PM for AP, enroll in this session <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014711" target="_blank">here.</a> 
    * Provide feedback in the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA Slack Channel" target="_blank">#csp-lightning </a> Slack channel.


**WANTED: Videos of L2 support engineers using Lightning (creating, updating, closing, chatting)** 

* Help us improve. We're interested in anyone who finds aspects of the Lightning experience in need of improvement to send us a video. 
* The recording process is as simple as turning on screen recording while performing your usual tasks in Lightning.  
Videos (with proper obfuscation and NDA protection for sensitive data) will also be shared with Salesforce to improve their education.
* Instructions on how to create a Webex recording have been posted in the "Misc. Links" section of the DBA-Education FAQ's and Helpful Links page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">here.</a> Additional note: When you are the only person on your Webex, if the Webex pop-up comes up asking if you still want to continue, be sure to re-share your screen, otherwise the recording will continue with your voice only and not the screen you wish to share.
* Please send your video to twaite@us.ibm.com
* Videos will not being used to measure/monitor/evaluate agents

**Browser Currency:**

* Make sure your browser is running the most current version.
* IBM has a browser-independent strategy now that allows IBMers to use the browser of their choice, however, it is up to the individual to keep their browser current. Many agents are sighting issues that are a direct result of not running a current version of their browser. Running an older version will have unpredictable results, are open to security exposures and may encounter defects that have been fixed.  This has been noted in the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">here.</a> 

**Reminder: Become familiar with the Business Continuity solution by taking the available training**
The link to enroll is <a href="https://mediacenter.ibm.com/media/t/1_m0w3f87t " target="_blank">here.</a> Documentation can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/businesscontinuity" target="_blank">here.</a> 


