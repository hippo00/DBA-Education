## Sprint 4 - 2019 Release Notes - Deployment to Production will occur on Tuesday, March 5

* [W3ID Planned Outage on March 9](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes40319#action)
* [Please check the Solution Provided checkbox](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Releasenotes40319#checkbox)


#### W3ID outage is planned for Saturday, March 9, 2019 11:00PM ET to Sunday March 10, 2019  4:00AM ET 


**<a id="action" name="action"></a>Action for Agents:** 
If you need to access CSP or other IBM systems including ECuRep, between the hours of 11:00PM ET on Saturday to 4:00AM ET on Sunday, please plan to login to CSP and any other systems you may need prior to 11:00PM ET.  Logging in prior to the W3ID outage start time will allow you to continue to use the Console and other IBM systems to which you need access. It is anticipated the W3ID outage will only be 2 hours, but the W3ID team has allocated 4 hours for this activity. 
To check status on this outage, the IBM W3ID Service Status page can be found <a href="https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/W89b23bf7ad80_4411_822f_2a6dc171c6b3/page/w3ID%20Service%20Status" target="_blank">here.</a>  

### Agent Console Updates


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7347" target="_blank">#7347</a> Queue assignment emails will be sent to the members that Support Mission’s global queue / Default Mission Team (since they are the same membership).

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7419" target="_blank">#7419</a> Support Managers are restricted from creating MustGather definitions that contain "Operating System" or "Product Version" in the name. The admin team can create the MustGather once approved.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7545" target="_blank">#7545</a> The Agent Description Field title has been changed to "Agent Description (internal)."

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6564" target="_blank">#6564</a> The re-assignment function has been improved.  
* This design allows an agent to change the product/mission, update skill for classification correction, update mission team and select target agent all in a single selector rather than in multiple ways.
* Documentation has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/reassignment" target="_blank">here.</a> 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7371" target="_blank">#7371</a> - The Customized Help Menu in the Lightning experience has been enabled.
* This will allow us to link directly from the SF platform to things like the DBA-Education, e-Learning, Transformation Support Page.
* New Drop Down Help List on the Console
* Screenshots are shown on this DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/general/support" target="_blank">here.</a> 
* We have provided direct links to help agents get to useful information fast.

**Solution Provided <a id="checkbox" name="checkbox"></a>Checkbox**
In August 2018, we announced the Solution Provided Checkbox. Currently, only 29% of people are checking the Solution Provided checkbox at the time the solution is given. IBM's TTR metrics are driven off of this checkbox and since it isn't being used, our TTR metrics are going in the wrong direction. Please consistently check this box when you have provided the client the solution. This information has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/solution" target="_blank">here.</a> 

#### Defects Fixed
<a href="https://funnel.w3ibm.mybluemix.net/#/open/7252" target="_blank">#7252</a> No longer able to create a Skill Case if a Case Team member on parent case is Inactive.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7354" target="_blank">#7354</a> Restored 'Log a Call' quick action in the console for hardware.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7425" target="_blank">#7425</a> Added printable view button to case layouts for lightning.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7399" target="_blank">#7399</a> Corrected intermittent issue with AE File Diag Object link not working.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7042" target="_blank">#7042</a> Workaround for agents on Lightning to change visibility on a public post to be internal has been implemented.
* This information has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">here.</a> 


<a href="https://funnel.w3ibm.mybluemix.net/#/open/7457" target="_blank">#7457</a> Replaced old defect buttons on E2C layout with "Add Defect" button.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7510" target="_blank">#7510</a> MPPC in Lightning Closes the tab if there was an error with the post



**HW/RTS/Control Center** 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7308" target="_blank">#7308</a> - User should not be able to create a Time Sheet Entry in the future
* User is now prevented from setting the start or end date of a time sheet entry in the future.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7047" target="_blank">#7047</a> - Long duration Time Sheet Entries - Need validation to tell user that time sheet entry is over x hours.
* Upon utilizing 'Create New Time Sheet' or 'Review and Submit Time Sheet', user will be presented with validation if either the duration of the Time Sheet Entry is over 10 hours or the date of the start time and the date of the end time are not the same. 
* The user will be notified and given the option to review and edit the Time Sheet Entry.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7209" target="_blank">#7209</a> - Added validation to prevent editing time sheet entry once status has been set to extracted.
* Once status is changed to 'Extracted', the Time Sheet Entry has been extracted for ledger processing and can no longer be edited.


#### Watson in Support 

##### Question Assistant

#301 - Change UI results mapping and remove/ modify checkmarks
* This will deploy to Production on March 5.
* The text shown in the QA display "Software Component/Hardware Part Number" has been replaced with the text "Component of Product."

##### Case Prioritization
* Emphasis of the current view name in the Case Prioritization header
* Case count included in MiniCP pipelines
* Redesign of filter sidebar layout, including: 
      
   * The ability to collapse filter groups; collapsing a child group will display an overview of its contents 
   * Zebra striping of nested filter groups 
   * Filter display is more horizontal 
   * Filter group actions moved to the filter group header in a drop down menu

* Ability to view individual pipelines as list view - each pipeline can be selected from the new list drop down in the head next to the Kanban view button; the "All Pipelines" selection combines all of the cases from all pipelines (edited). 

#### Content previously not shown in Sprint 4 blog, has been added below

*Chatbot:*

**Product Detection for LiveChat integration:**
As a Client engages LiveChat, Chatbot  now determines the product that they are asking about and the chat is routed to the right support mission Agent who is familiar with the product, based on skill-based routing, so that he/she can appropriately service the customer.

**Chatbot will be placed on Case Management page:**
An integrated chat experience has been provided with the ability to chat with Watson Chatbot and hand off to live agent at any point from the case management page for our external clients.

*Watson Support Search:*

**Support Search with Watson results sent to new tabs:**
The Support Search with Watson result list or individual search will now open in separate tabs, so that it can help make the search much more usable 

**Preserving the state of SSwW in the Agent Console:**
While searching with SSwW and switching to Cases or another view in the Agent Console, going back to SSwW ensures that previous search results are retained.

*Automation:*

**Handling multiple cases created  for the same automation request:**
If a customer submits two similar cases in a short period of time, the second request is not automated and left for an agent to handle. This is to ensure that if the automated response is incorrect, the case is not automated again.

**Handling of automation requests created for another user:**
If a customer is requesting help for another user, then NBA suggestions and or automation actions are bypassed.

### For your awareness

**New Training videos have been posted on the Demos and Learning DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/training" target="_blank">here.</a>**

* The "IBM Support Community: Open and Manage Cases" learning video for clients has been updated.
    * Link to share with clients is <a href="http://ibm.biz/SupportSG" target="_blank">http://ibm.biz/SupportSG</a> 
    * Link for IBMers is <a href="https://yourlearning.ibm.com/#activity/ITS-DL55515G" target="_blank">https://yourlearning.ibm.com/#activity/ITS-DL55515G</a>  

* Cognitive Support Platform: Review Common Manager Tasks.
    * Your Learning link: <a href="https://yourlearning.ibm.com/#activity/ITS-DL55513G" target="_blank">https://yourlearning.ibm.com/#activity/ITS-DL55513G</a>   
    * Skills Gateway link for Business Partners: <a href="http://ibm.biz/CSPMgrReview" target="_blank">http://ibm.biz/CSPMgrReview</a>  
