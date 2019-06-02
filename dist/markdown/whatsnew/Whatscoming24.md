## Headlines
*  [Watson Language Translator adds Simplified Chinese to the list of available languages.](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew24#language)
*  [Lightning will be available in production for pilot teams only (for now)](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew24#lightning)
*  [User/Admin Mgmt. will launch in Production on December 1](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew24#useradmin)


**A new home for Salesforce Knowledge Base articles: Migrating technical content to Drupal in Support**

Important information and ACTION for Support Agents who create technical support articles in the Salesforce knowledgebase.
During the weekend of December 8-9, the technical content in Salesforce (Salesforce Knowledgebase) will be migrating to Drupal. The primary driver of this effort is to have a centralized content management solution. 

The majority of products in Salesforce have already created their content in Drupal.  However, this notice should be of particular importance to product teams previously in Parature, as their technical support articles are not currently featured in Drupal.  

To help those teams prepare for this upcoming migration there are four short (5 minutes each) training videos available <a href="https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W9af4c38be7da_46ab_bf50_0c0564032c5c/page/Learning%20Resources" target="_blank"> here.</a>  More details about the migration can be found <a href="https://apps.na.collabserv.com/blogs/934eb090-c379-43a2-80b5-8df905197569/entry/Coming_soon_A_new_home_for_Salesforce_knowledgebase_articles?lang=en_us" target="_blank"> here.</a>  


### Agent Console Updates
**Coming on December 4...Lightning Console will be accessible in Production for pilot teams only** 
<a id="lightning" name="lightning"></a>Thank you to everyone who is continuing to use Lightning in Staging.  The feedback received is allowing us to understand, correct and improve. 

Three teams have agreed to pilot the Lightning Console in Production. On December 4, Lightning will go into production for the pilot teams to use. 

*  Pilot participants in Production will continue to provide the development team feedback on how usable Lightning is as we prepare for the broader launch of Lightning in Q1.  
*  We invite EVERYONE to use Lightning in staging and provide feedback via the <a href="https://ibm-technical-support.slack.com/messages/CDJ8X6TQA" target="_blank"> #csp-lightning slack channel.</a>  If you would like your team to be added to the pilot please talk to your Integration Lead.
*  Classic remains the default for everyone, in all environments.  
*  For All: To switch between Classic and Lightning in either Production or Staging, read the instructions in the Lightning vs. Classic DBA-Education page found <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank"> here.</a>  


**Entitlement work continues in the background** 
*  A patch will be implemented Wednesday, November 28, that may cause you to see a different entitlement name associated to the case, but nothing else will change.
*  With Sprint 24, you may see different entitlements based on AVP and End of Service product versions on the case 'entitlement information' section.  
*  At this time, there is no impact to support processes, such as SLA or Milestones.  
*  More information on the current plan for the Entitlement Policy is available on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/policyDocs" target="_blank"> Policy page</a> in the DBA-Education.  Note that some sections reference future state actions.  


**Field Service Updates**
For Field Service support personnel, please note that the "hypercare" Slack channel is no longer officially active.  Please use the proper support channels and reserve the use of Slack as a collaboration tool rather than an escalation method. 

For non-urgent, "how to" questions, Salesforce users are encouraged to use the <a href="https://ibmsf.force.com/internal/s/login/?startURL=%2Finternal%2Fs%2F&ec=302" target="_blank"> Salesforce internal forum.</a> Folks outside the platform can also use the <a href="https://w3-connections.ibm.com/forums/html/forum?id=048615cb-03df-4cbd-9d1d-c8f5800060fb&ps=25" target="_blank"> forum</a>  for Q&A in the TSS Hardware Support Community.


If you have a case-specific question or encounter an issue with the Salesforce Agent Console not working as expected (a UI defect, a workflow error, system connectivity issues, or other potential defects with Salesforce),  please raise an internal Support Case following the steps listed <a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W4c2475046427_4f34_878d_38adb9665ea7/page/Support%20for%20defects%20within%20the%20Salesforce%20solution" target="_blank"> here.</a> When you submit the Support Case, be sure to include contact name(s), example references, expected vs actual results, etc.  The support team (who are full time support personnel supporting Salesforce 24x5) will respond to your Salesforce Support Case and/or reach out to you to collaborate on the problem.  


#4936 - Implements Org Wide Defaults (OWD) controls for Service Delivery Manager (SDM) profile
SDMs will have visibility to Work Orders and associated objects (schedule appointments, cases, et al) for the countries they support.

<a href="https://funnel.w3ibm.mybluemix.net/#/closed/6051" target="_blank"> #6051</a>  - Country is needed in Parts Request list view
*  Adding country to this list view allows different parts ordering teams to see which part requests are for their corresponding country.

<a href="https://funnel.w3ibm.mybluemix.net/#/closed/6228" target="_blank"> #6228</a> - FSL Mobile list view - Parts pickup Service Appointments
*  Allows the technician to see a list of parts service appointments for the day.

<a href="https://funnel.w3ibm.mybluemix.net/#/closed/6219" target="_blank"> #6219</a> - Parts 'in hand' must be considered when optimizing/rescheduling #top10
*  If an SSR already has the parts picked up for a given work order then the scheduling optimizer will take this into account when appointments are rescheduled.


**Riker (HW) Updates** 
*  (Enhancement) - Updates from Salesforce to RCMS are now batched every two minutes. Logic has been added to transmit data in the order it was applied in Salesforce.  
*  (Enhancement) - Any state code sent from RCMS for a country like New Zealand where state is not relevant, it will be ignored in the calculation of business hours.   
*  (Enhancement) - If a case is created against an existing entitlement that points to the default SLA process, RIKER will check to see if an valid SLA process now exists and will update the entitlement accordingly.


**Watson in Support Updates**

**<a id="language" name="language"></a>Simplified Chinese is now available in the Watson Language Translator.**  
*  This will be applicable to all Support Missions.  
*  Details can be found in the Watson Language Translator Update <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Watsonlanguagetranslator" target="_blank">blog.</a> 


**These Watson in Support updates are targeted for Sprint 24**     
*  Curated answers in Watson Support Search:
    *  Not all the queries issued by customers into the Community portal come in the form of actual search queries but rather in the form of requests or commands (such as “open a ticket”) where  the customers are not looking for a document but an action.
    *  Curated answers can now provide a better response to these type of questions by differentiating whether the customer is looking for words in documents, asking questions, or issuing a command, and respond accordingly to the original intent of search result.

*  Kenexa Assess Automation
    *  Kenexa Assess automation process will analyze all the incoming cases for the Kenexa Assess Support Un-entitled product that come through the email-to-case channel or web channel. 
    *  Customer's issue will be classified based on analysis of the case summary and description. 
    *  An appropriate action will be taken if the issue is identified as one of the 8 categories that are supported for the automation.
    *  Most of the categories of issues ranging from "reset my test request" to "login password issues" will result in the automation process sending the customer a template email response, updating the case status and closing the case (full deflection). 
    *  There are a few issue categories where additional automated steps will be executed. For example, for the "IBM Tests" category an email alert will be sent to an internal Kenexa Assess admin team so that they can help resolve the customer issue.

*  Case Prioritization Watson Score to include Account Priority and Entitlement:
    *  Account priority and entitlement will now be considered in the Watson score for case prioritization and will have a UI notation in the Kanban card.
*  Case Routing and Ranking has been moved from private to public cloud to optimize and remove limitations.
    *  Removes the limitation of Onboarding large Support Missions
    *  Aids setting up monitoring tools and thus helps to overcome system outages.
*  Translation of ECuRep updates  
    *  When a Salesforce case is updated by the customer via ECuRep in one of the 5 supported non-english languages (French, German, Portuguese, Spanish and Simplified Chinese), the update is now automatically translated into English. This helps the English speaking support agent understand the customer's updates easily.


### Community Updates
**<a href="https://funnel.w3ibm.mybluemix.net/#/open/4504" target="_blank"> #4504</a> - <a id="useradmin" name="useradmin"></a>User/Admin Mgmt. Update**

**This is targeted to launch in Production on December 1.  This is an off-cycle community deployment.**

*  Thank you to everyone who helped test this in Staging.  The feedback has been enormously helpful. 
*  This feature on the Support Community will allow administrators and users to manage and request access.
*  We will be adding a section in the DBA-Education featuring documentation for User Admins, General Users and Support Agents.
*  We've created two videos to help our clients understand how this change works. You may want to review them so you know what your clients are seeing.
    * <a href="https://mediacenter.ibm.com/media/t/1_l3actx79" target="_blank">Requesting access to your company's IBM Support account</a> video
    *  <a href="https://mediacenter.ibm.com/media/t/1_5vnr0qsu" target="_blank">Managing your IBM Customer Number (ICN)</a> video
*  Note: Within the  "Requesting access to your company's IBM Support account" video, it mentions if one is requesting access to SaaS, the request is routed to an IBM agent and status updates will appear in their profile. This is how SaaS registration has worked since we migrated Parature. This has been a temporary workaround that will be re-visited in Q1 2019.
* If, after viewing the videos, you have a client who still has a question, please refer the client to the help link shown at the bottom of the Community's main landing page.

<a href="https://funnel.w3ibm.mybluemix.net/#/closed/6261" target="_blank"> #6261</a> - Route a Chat to a product expert

**This will be available starting 12/4**
*  When a client clicks "Chat with an agent" and the product is known, the logic will first try and route the chat to an expert with that product skill, and if no one is available it will route to the general support mission queue
*  Documentation will be placed in the DBA-Education explaining the process on how to setup a Product queue and adding engineers to that queue


<a href="https://funnel.w3ibm.mybluemix.net/#/closed/4903" target="_blank"> #4903</a> - Show "Cases" link and "Open a case" button in blue navigation bar on ALL support site pages
*  Clients have told us sometimes they can't find the "Sign in" button on the Support site.
*  The Cases and Open a case link will show up on ALL Support site pages regardless of a users authentication status.
*  If these buttons are clicked, it will take the client through the normal sign in process.
*  If the user is not registered, after sign-in, the self-registration process will start.  


<a href="https://funnel.w3ibm.mybluemix.net/#/closed/4176" target="_blank"> #4176</a> - Interested Parties (Add a team member) to a case improvement
*  Feedback from clients was they want an easier way to add peers to the cases they open.
*  This is the logic we will use to pre-populate a user's Interested Party list:
    *  Most recent up to 50 cases within the last 180 days (6 months)
    *  Top 12 individuals added to cases
    *  Most frequent is presented first
    *  If a returning user hasn't open a new case within this timeframe, use the last 1 - 12 people added to the last case they opened.
*  Through the UI on Case Open, users can still add/remove users from the pre-populated list.


### For your Awareness
**Entitlement work continues in the background**
*  A patch will be implemented Wednesday, November 28 that may cause you to see a different entitlement name associated to the case, but nothing else will change.
*  With Sprint 24, you may see different entitlements based on AVP and End of Service product versions on the case 'entitlement information' section.  
*  At this time, there is no impact to support processes, such as SLA or Milestones.  
*  More information on the current plan for the Entitlement Policy is available on the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/policyDocs" target="_blank"> Policy page</a> in the DBA-Education .  Note that some sections reference future state actions.  


**Monthly "Ask Bob" sessions** 
Here is your chance to ask Bob McDonald ANYTHING about IBM's Client Support transformation journey.  No prepared deck!  No set agenda!  Just 30 minutes of Ask Bob time.
*  Already enrolled in the Thursday Client Support Transformation Weekly Meetings? - No action required, you already have this on your calendar.  
*  If not, click to enroll <a href="https://ec.w3bmix.ibm.com/event.html?id=B7C781E8048024DE852581DF00581C3C" target="_blank">here.</a>
*  Action:  Enroll and start thinking of what you would like to Ask Bob. 

**Video updates**
*  <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=29085" target="_blank">End-to-End Demonstration: A Day in the Life of a Support Agent </a>
    *  This is a refreshed video that is included in course Module 2.
*  <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=33328" target="_blank">Searching for content in the Cognitive Support Platform</a>
    *  This is a refreshed video that now includes information about the new Knowledge bar.  
    *  This is part of Course Module 3. 
*  A link to the video "How to do Root Cause Analysis" has been added to the Salesforce DBA-Education. This video covers the basic theory and steps around Root Cause Analysis for support professionals.  The page can be found <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/praxis/issueUnclear/skills/videoHowToRCA" target="_blank">here.</a>
