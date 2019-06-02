### Headlines
*  [Lightning is now in Production for Pilot teams only](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes24#lightning)
*  [Salesforce Knowledgebase technical articles migrating to Drupal Dec. 8-9](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes24#knowledgebase)


### Agent Console
## <a id=“lightning” name=“lightning”></a> Lightning Console will be accessible in Production for pilot teams only starting on December 4

For those who are participating in the Lightning Console production pilot, there will be an "Office Hours"  on December 5, 12:00pm - 1:00pm Eastern. Join the Webex any time during this hour to share your feedback, ask questions, and see demos of any functionality you may have questions about.
Access this <a href="https://ec.w3bmix.ibm.com/session.html?id=7778B1225C6E70DA852583550074BFE3&action=enroll" target="_blank">link</a>  to enroll to receive a calendar invite. 
Direct <a href="https://ibm.webex.com/meet/hpayton" target="_blank">link</a> to join.  

Telephone:
1-844-531-0958 United States Toll Free
+1-669-234-1178 United States Toll
Access code: 926 118 086
If your team would like to participate in the Lightning Console Production Pilot, please contact either <a href="mailto:hpayton@us.ibm.com" target="_blank">Holly Payton</a>   or <a href="mailto:seeligar@us.ibm.com" target="_blank">Ryan Seeliger.</a>  
Click <a href="https://mediacenter.ibm.com/media/t/0_8d429bv1" target="_blank">here</a> to see a navigational Video of the new Lightning Console.


**Additional Console Features:**

6261 - Live Agent Chat routed based on skill. 

*  Documentation is available in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/management/teamRouting" target="_blank">DBA-Education</a> (scroll mid-way down the page) explaining the process on how to setup a Product queue and adding engineers to that queue.

**Agent Console Defects Fixed:**

5667 - Prevent disabling of "Auto-assign" for the Support mission if child teams are set to "auto-assign"

5851 - Prevent Mission Teams on a Support Mission owned by an Omni Queue

5972 - Prevent reopening of the case by an agent after it has been archived. (90 days)

6663 - Combine create and attached defect into a single menu item, "Create/Attach Defect"

6165 - The Session Timer will now reflect the primary or secondary case tab selected


#### Watson in Support Updates
*  Simplified Chinese is now available in the Watson Language Translator.  
    *  This will be applicable to all Support Missions.  
    *  Details can be found in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Watsonlanguagetranslator" target="_blank">Watson Language Translator Update blog.</a>  

**These Watson in Support updates were deployed in Sprint 24.**  
*  Curated answers in Watson Support Search: 
    *  Not all the queries issued by customers into the Community portal come in the form of actual search queries but rather in the form of requests or commands (such as “open a ticket”) where  the customers are not looking for a document but an action.
    *  Curated answers can now provide a better response to these type of questions by differentiating whether the customer is looking for words in documents, asking questions, or issuing a command, and respond accordingly to the original intent of search result.
*  Case Prioritization Enhancements 
    *  The pipelines in the default Kanban view have been reordered based on general relevancy and importance to the analysts.
    *  Additional options added to Manage views (ability to delete, rename, shared views in one central place)
    *  Create FilterGroup component to allow for complex logic within Case Prioritization.
*  Case Prioritization Watson Score to include Account Priority   
    *  Account priority and entitlement will now be considered in the Watson score for case prioritization and will have a UI notation in the kanban card
*  Automation to provide Intent confusion Matrix to improve Chatbot effectiveness.  done
    *  New automation to help teams identify cases where they have multiple ARM categories that have similar synonyms which makes it hard for Watson assistant to determine which one is best.  
    *  Helps teams create most effective ARM structures and synonyms.
*  Case Routing and Ranking moved from private to public cloud
    *  Case Routing and Ranking has been moved from private to public cloud to optimize and remove limitations
Removes the limitation of Onboarding large Support Missions
    *  Aids setting up monitoring tools and thus helps to overcome system outages.
*  Translation of ECuRep updates:  
    *  When a Salesforce case is updated by the customer via ECuRep in one of the 5 supported non-english languages (French, German, Portuguese, spanish and Simplified Chinese), the update is now automatically translated into English
    *  This helps the English speaking support agent understand the customer's updates easily.
*  Support for New Case Access feature 
    *  If the user asks for case status in Chatbot or Support Search, only the cases the user has the authority to see will be shown determined by the user role assigned to the user.
*  Kenexa Assess automation: 
**This is targeted to launch on Dec. 6 at approximately 8:30PM Eastern time.**
    *  Kenexa Assess automation process will analyze all the incoming cases for the Kenexa Assess Support Un-entitled product that come through the email-to-case channel or web channel. 
    *  Customer's issue will be classified based on analysis of the case summary and description. 
    *  An appropriate action will be taken if the issue is identified as one of the 8 categories that are supported for the automation.
    *  Most of the categories of issues ranging from "reset my test request" to "login password issues" will result in the automation process sending the customer a template email response, updating the case status and closing the case (full deflection). 
    *  There are a few issue categories where additional automated steps will be executed. For example, for the "IBM Tests" category an email alert will be sent to an internal Kenexa Assess admin team so that they can help resolve the customer issue.


#### HW/Field Service
For Field Service support personnel, please note that the "hypercare" Slack channel is no longer officially active.  For non-urgent, "how to" questions, Salesforce users are encouraged to use the <a href="https://ibmsf.force.com/internal/s/login/?startURL=%2Finternal%2Fs%2F&ec=302" target="_blank">Salesforce internal forum.</a>   Folks outside the platform can also use the forum for Q&A in the <a href="https://w3-connections.ibm.com/forums/html/forum?id=048615cb-03df-4cbd-9d1d-c8f5800060fb&ps=25" target="_blank">TSS Hardware Support Community.</a>  


If you have a case-specific question or encounter an issue with the Salesforce Agent Console not working as expected (a UI defect, a workflow error, system connectivity issues, or other potential defects with Salesforce), please raise an internal Support Case following the steps listed <a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W4c2475046427_4f34_878d_38adb9665ea7/page/Support%20for%20defects%20within%20the%20Salesforce%20solution" target="_blank">here.</a>   


**The following enhancements were deployed in Sprint 24.**

#6329 - Scheduler UI layout improvements - Reduce errors and time-in-motion Phase 2
*  Improvements for the Service Appointment Details Popup in the Dispatcher Console have been made:
    *  New fields in the Work Order tab
    *  Parts "Need by date"
    *  Parts Delivery Address
*  The Work Order Status has also been added to the service appointment tooltip in the Gantt chart.


#6252 - Additional time required (quick action): Apply change and cap input to 2h #top10
*  The Additional time required field has been changed from a text field to a picklist.
*  A new list view, _Previous appointment duration was adjusted_, has been created for the Control Center.


#### Riker - Enhancements deployed in Sprint 24
*  Updates from Salesforce to RCMS are now batched every two minutes. Logic has been added to transmit data in the order it was applied in Salesforce.  
*  Any state code sent from RCMS for a country like New Zealand where state is not relevant, it will be ignored in the calculation of business hours.   
*  If a case is created against an existing entitlement that points to the default SLA process, RIKER will check to see if an valid SLA process now exists and will update the entitlement accordingly.


### Community
#4504 - User/Admin Mgmt. launched in Production on December 1.  
*  We've created two videos to help our clients understand how this change works. You may want to review them so you know what your clients are seeing.
   
   * <a href="https://mediacenter.ibm.com/media/t/1_l3actx79" target="_blank">Requesting access to your company's IBM Support account video</a>   
   
   * <a href="https://mediacenter.ibm.com/media/t/1_5vnr0qsu" target="_blank">Managing your IBM Customer Number (ICN) video</a>   
*  If clients ask you questions, you can share with them the Step-by-step Guide found here:
    
    <a href="https://www.ibm.com/mysupport/s/article/User-Administration" target="_blank">Step-by-Step Guide for users</a>  
    
    <a href="https://www.ibm.com/mysupport/s/article/Administrator-Management" target="_blank">Step-by-Step Guide for administrators  </a> 


**The following enhancements were launched in Sprint 24.**  

#6261 - Route a Chat to a product expert
*  Documentation is available in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/management/teamRouting" target="_blank">DBA-Education</a> (scroll mid-way down the page) explaining the process on how to setup a Product queue and adding engineers to that queue.  
*  Support leaders can now create a "Chat team" that would consist of engineers that are experts in a specific product.
*  When we know the product we look for members of the chat team  that are online, if no one is online or at capacity we route the chat to the support mission

#4903 - Show "Cases" link and "Open a case" button in blue navigation bar on ALL support site pages
*  Clicking either of these will prompt a login.
*  Clients have been telling us too many clicks to get to open a case
*  Sign in is now also located in the Profile section on top right, consistent with IBM.com

#4176 - Interested Parties (Add a team member) to a case improvement
*  Easier for clients to add and remove peers to cases
*  Implemented algorithm that looks at prior cases
*  Clients no longer have to scroll through dozens of names each time they want to open a case


### For Your Awareness:
*  If you are using Internet Explorer 9 or Internet Explorer 10 as your browser, please switch TODAY to a current browser version, as IE9 and IE10 are not supported by Salesforce or Microsoft.

*  Entitlement work continues in the background 
More information on the current plan for the Entitlement Policy is available in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/policyDocs" target="_blank">DBA-Education.</a>  Note that some sections reference future state actions.  

## <a id=“knowledgebase” name=“knowledgebase”></a> Salesforce Knowledgebase technical articles migrating to Drupal Dec. 8-9 
*  A new home for Salesforce Knowledge Base articles: Migrating technical content to Drupal in Support
    *  Important information and ACTION for Support Agents who create technical support articles in the Salesforce knowledgebase.
    *  During the weekend of December 8-9, the technical content in Salesforce (Salesforce Knowledgebase) will be migrating to Drupal. The primary driver of this effort is to have a centralized content management solution. 
    *  The majority of products in Salesforce have already created their content in Drupal.  However, this notice should be of particular importance to product teams previously in Parature, as their technical support articles are not currently featured in Drupal.  
    *  To help those teams prepare for this upcoming migration there are four short (5 minutes each) training videos available <a href="https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W9af4c38be7da_46ab_bf50_0c0564032c5c/page/Learning%20Resources" target="_blank">here.</a> More details about the migration can be found <a href="https://apps.na.collabserv.com/blogs/934eb090-c379-43a2-80b5-8df905197569/entry/Coming_soon_A_new_home_for_Salesforce_knowledgebase_articles?lang=en_us" target="_blank">here.</a>    
