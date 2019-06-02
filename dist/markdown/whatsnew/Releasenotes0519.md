## Sprint 5 - 2019 Release Notes


* [Lightning will launch in Production on March 19, as an option (Classic will be default)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0519#lightning)
* [Milestone Timer will soon be working for more countries](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0519#milestone)
* [All Remote Repositories will now use Collaboration Cases instead of Agile Accelerator work items](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes0519#remote)


##### Sprint 5 Production target date: March 19

##### Oniqua successfully migrates to Salesforce
We would like to congratulate the Oniqua on-boarding team who helped us migrate their organization to Salesforce on March 11.  Oniqua was using a support tool called “Freshdesk.”  The migration consisted of 126 open cases and 3,994 closed cases.  Their 34 Support Agents now fully trained in the use our Salesforce instance. Welcome! 

### Agent Console Updates

**#6665 Account Priority - Strategic Solution** 

* This is targeted for Sprint 5.
* Account Priority is being migrated to the new Special Programs features.  
* Documentation has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#specialprogram" target="_blank">here.</a>  

**#7683 <a id="remote" name="remote"></a>All Remote Repository collaborations will now use Collaboration Cases instead of Agile Accelerator work items.** 

* When Support Agents need to collaborate with L3 development teams, they create a Collaboration Case using a bridge to the development teams' Remote Repository.  Although the ability to collaborate w/L3 teams on RTC, ICD, and JIRA existed previously (via Agile Accelerator off of skills cases )-a new collaboration-based implementation for these repository types is targeted for Production in Sprint 5.
* Github and ServiceNow collaborations have been using the collaboration object for several months in production; there is no change for these remote repositories.
* With the move to Collaboration Cases, we will remove the ability to create new collaborations off of Skill Cases - they can be created off of Parent cases only. 
* Once we've deployed 7683, new Collaboration Cases can only be created off of the Parent Case and not Skill Cases (Skill case collaborations were only added as a temporary workaround to an agile accelerator limitation).  We realize some users do like to create collaborations off of a skills case, but those lose visibility to the parent case. 
* Future L3 bridge enhancements will be made to Collaboration cases and will not apply to Skills cases. 
* In a future Sprint (Sprint 6 or 7) we expect to migrate existing Agile Accelerator workitems over to Collaboration Cases.  
* In a future Sprint, we also expect to cascade Severity level changes from the parent to the child collab case, so L3 teams have visibility to a parent case severity level update.
* With this deployment, there is no change for existing Github/Servicenow Collaboration Cases 
* L3-bridge related Slack channels for specific Collaboration Case questions, by repository type: #csp-git-bridge, #csp-icd-bridge, #csp-jira-bridge, #csp-rtc-bridge, and #csp-servnow-bridge


**#7709 Remove "Log a Call" quick action from the "Feed" tab on the Lightning Case Page Layout.** 

* This quick action is still available for the Classic Case Page Layout.  The "Log a Call" quick action button will be located along with the other quick actions buttons on the Lightning Case Page Layout in a future sprint. 


**#6961  Updating the Work Order Lightning Page UI to improve user experience.**


**#7708 Add 'Parent Case Owner' field to allow agents to track all Child Cases created for Cases they own; and will replace the 'Parent Case Owner Email' field.**


**#7543 In the case of ETL managed entitlements when the business hours are inactive, it will assign the default entitlement to avoid any errors.**


**#7343 Live Agent Chat - Increase Timeout setting from 20 seconds to 40 seconds before reassigning to reduce 'No Agent' drops.**


**#7741 Removed "Skill" Field on all Page Layouts. "Support Skill" is the correct field that should be displaying on all Page Layouts.**

##### Defects to be fixed in Sprint 5:

**#7688 Displaying the wrong Agent in the 'Target Agent' pick list field for the Case Re-Assignment Quick Action.**


**#7651 Changing the Support Skill from the Case Re-Assignment Quick action does not allow Auto-Select when Watson is disabled for the Support Mission.**


**#7437 When transferring a chat in Lightning all online Agents are displaying as ‘IBM Support' instead of the agent's name.**

##### Watson in Support 


**Chatbot:**
*Improve Dialog capabilities in product workspace by supporting new Watson Assistant features:* 
* IBM SMEs who build the Chatbot workspace will have the ability to create more complex dialogs in their curated answers for our external Clients by using Watson Assistant’s New “Options” response type.  

##### HW/RTS/Contol Center 


**#6918 Make WO status field read only to force users to use the Update Work Order button**

* The Work Order status field is no longer editable.  Please click the "Update Work Order" button to change the Work Order's status.

**#6214 Last appointment post-SA travel is not required**

* In the dispatcher view, the return travel to the SSR's home location will not be shown after the last service appointment.
#7496 Incorporate Long Duration Validations into WO Actions (Desktop/Mobile)
* When a user updates the Work Order status to Schedule Exception or closing the work order, validation will occur to make certain:
  * There are no time sheet entries which are over 10 hours in duration
  * Start and end dates do not occur on different days.


##### HW/SSRs

**#7496 Incorporate Long Duration Validations into WO Actions (Desktop/Mobile)**

* When a user updates the Work Order status to Schedule Exception or closing the work order, validation will occur to make certain:
  * There are no time sheet entries which are over 10 hours in duration
  * Start and end dates do not occur on different days.


##### ARM Updates

*Defects fixed:*

**#7721: Selecting a different category while creating/editing an asset, recommendation, or category will force close the editor without saving changes**

**#7568: ARM Global Search not finding assets within shared categories**

**#7520: ARM does not reopen to shared categories when opening the UI**


##### Entitlement

**AVP entitlements will be launched on March 19:** 
* The entitlement name for AVP contracts on the case is called Passport Advantage Premium. 
* AVP entitlements will drive SLAs - and thus milestone timers and case priority for AVP entitled cases
* Community will start to enforce entitled contacts.  Entitled contacts are contacts listed within the entitlement for an account's asset (and were previously referred to as "named callers").  Entitled contacts will be able to create and edit AVP entitled cases.  All others on the account will be read-only for that account's AVP cases.  


**<a id="milestone" name="milestone"></a>The Milestone Timer will soon be working for more countries as those countries' business hours are being loaded and finalized.**

* By Friday March 22, you should see the newly added countries reflect an accurate timer.
* A list of countries has been added to Drupal <a href="https://www-prd-trops.events.ibm.com/node/875828" target="_blank">here</a> 
* This link also appears on the Case Entitlement DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement" target="_blank">here.</a>     
* Countries will continue to be added until all are in place. Watch our blogs for updates.  

### Community Updates

**# 6323, 7638, 6697, 6698**

* Translations for all Admin and User management functions deployed to production
All Group 1 languages now supported


**# 7497 - Direct to agent now working in Lightning on Case Details page**

* If owning agent does not answer, chat is passed to online agent in that support mission
* Direct to agent now works in Classic and Lightning
* Deployed to production on March 18.


**# 6589 - Support for AVP on IBM Support site**

* While only authorized users can submit and manage AVP cases, other users associated to the account can view/read the cases
Community provides read-only ability to these entitled cases (eliminating the need for a read-only caller type). It needs to make clear to the user why these are read-only and to contact the appropriate Accelerated Value Leader (AVL) if create/update access is required.


### For your awareness

**<a id="lightning" name="lightning"></a>General Availability of the Lightning Console will be in Production on March 19.**  Classic will remain the default, with the ability to switch to Lightning on demand.  


**Why start using Lightning now?**
Change is hard. Everyone is comfortable with Classic (your eyes know where to look for information, your fingers know where to click to find exactly what you are looking for). You are competent in Classic and can work quickly.
 
This is the very reason why you should start using Lightning now. You have a few weeks to get competent and comfortable with Lightning, and it is important that you take the time now to learn the new UI before Classic goes away.
 
**Some benefits you'll find in Lightning are:**
* More screen space while posting updates to customers and more space in MPPC
* Easier to swap between commonly used Case views
* Improved tracking of recent activity in recent views
* Easy access to custom functions in the footer bar
* View creation / editing much easier
* Many reporting/dashboard improvements
 
Bookmark this URL <a href="https://ibmsf.my.salesforce.com/" target="_blank">https://ibmsf.my.salesforce.com/.</a> This will take you to the UI you were last viewing (Classic or Lightning), so you will not have to constantly switch manually.

**Work in Lightning as much as possible.** Don't wait until Classic goes away to start using it.  Work in Lightning everyday, even if only for a few hours. Set yourself a goal to be working in Lightning 100% by mid April. Share any issues or questions via the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA" target="_blank">#csp-lightning</a> slack channel. If you switch back to Classic, please include why you are switching back in the pop-up - Is it because of a defect in Lightning? Is it because you need functionality that only exists in Classic?  We've added a list of keywords in the pop-up description, please use them as well as descriptive text, if applicable.

* Roll out plan:
    
  * March 19 (End of Day) - Lightning available to all
  
  * April 9 - Lightning becomes the default (this gives users 3 weeks to practice in Lightning before it becomes the default)
  
  * Early May - We are targeting to remove Classic (pending no new blockers are found)

* To make your transition to the Lightning Console as easy as possible, please take a few minutes to review the DBA-Education information, specifically, review the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues</a> so that you are informed about the issues we have already uncovered and are working with Salesforce to fix.
    
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic " target="_blank">Lightning vs Classic</a> 
    
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">Lightning FAQs </a> 
    
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">Known Lightning Issues</a>  
   
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips " target="_blank">NEW! - Lighting Tips & Tricks </a> 
    
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningcaseviews" target="_blank">NEW! - Lightning Case Views</a> 
    
    * <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningreporting" target="_blank">NEW! - Lighting Reporting </a>  
    
* Take the Lightning training
    
  * For **Agents**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55512G " target="_blank">here.</a> The training found on *Skills Gateway* is <a href="http://ibm.biz/CSPReview " target="_blank">here.</a> 
     
     
  * For **Managers**, the training found on *Your Learning* is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">here.</a> The training found on *Skills Gateway* is found <a href="http://ibm.biz/CSPReviewMgr " target="_blank">here.</a> 


* Sign up for Lightning Office Hours. 
    
    * March 20, 27 and April 3 at 12:00PM for EMEA and NA, enroll in the series <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014684 " target="_blank">here.</a> 
    
    * March 20 at  9:00PM for AP, enroll in this session <a href="https://ec.yourlearning.ibm.com/w3/enrollment/event/10014711" target="_blank">here.</a> 
    
    * Provide feedback in the <a href="https://slack.com/app_redirect?channel=CDJ8X6TQA Slack Channel" target="_blank">#csp-lightning </a> Slack channel.


**WANTED: Videos of L2 support engineers using Lightning (creating, updating, closing, chatting)** 


* Help us improve. We're interested in anyone who finds aspects of the Lightning experience in need of improvement to send us a video. 
* The recording process is as simple as turning on screen recording while performing your usual tasks in Lightning.  
Videos (with proper obfuscation and NDA protection for sensitive data) will also be shared with Salesforce to improve their education.
* Instructions on how to create a Webex recording have been posted in the "Misc. Links" section of the DBA-Education FAQ's and Helpful Links page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">here.</a> Additional note: When you are the only person on your Webex, if the Webex pop-up comes up asking if you still want to continue, be sure to re-share your screen, otherwise the recording will continue with your voice only and not the screen you wish to share.
* Please send your video to twaite@us.ibm.com
* Videos will not being used to measure/monitor/evaluate agents


**Browser Currency:**


* Make sure your browser is running the most current version.
* IBM has a browser-independent strategy now that allows IBMers to use the browser of their choice, however, it is up to the individual to keep their browser current. Many agents are sighting issues that are a direct result of not running a current version of their browser. Running an older version will have unpredictable results, are open to security exposures and may encounter defects that have been fixed.  This has been noted in the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/faq" target="_blank">here.</a> 


**Reminder: Become familiar with the Business Continuity solution by taking the available training**

* The training video can be found <a href="https://mediacenter.ibm.com/media/t/1_m0w3f87t " target="_blank">here.</a> 
* Documentation can be found on the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/businesscontinuity" target="_blank">here.</a> 
* There is also a slack channel for discussions or questions: <a href="https://slack.com/app_redirect?channel=CGB5SAV3P " target="_blank">#csp-case-manager</a> 







