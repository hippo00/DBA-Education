# What's new in Sprint #18 (deployed Sept 11)

## Headlines
* **Console :** we introduced major usability improvements on the Console, new fields and processes that will help to monitor Case Views and manage Cases
* **Field Service :** Launch of Field Service in ANZ succesful
* **Community :** Combination of Chatbot and LiveChat UIs on the Community + more administrative functions
* **Good to Know :** We went live with our new DBA-Education and we've started Training Blitz 

---

## Console Updates

In Sprint 18, the Agent Console will contain many small improvements where fields were added to Cases to handle requirements such as "Next Contact Date," "Needs Attention," "Milestone Missed" and "Customer Impact Event. 

### General Changes
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5038" target="_blank">#5038</a> - Customer Impact Event checkbox
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5038" target="_blank">#5038</a> - Rename "Client Situation number" to "Critical Situation Number"
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5038" target="_blank">#5038</a> - Rename "Reference number" to "Client Reference Number" 
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4227" target="_blank">#4227</a> - The Escalated checkbox has been re-purposed to track management related escalations and is not connected to any milestone logic. (Delayed until later this week - product will be patched)
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4227" target="_blank">#4227</a> - "Missed Milestone" is a checkbox, not agent editable, which is set when the initial milestone is missed. (Delayed until later this week - product will be patched)
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/699" target="_blank">#699</a> - "Next Contact" field allows an agent to set a follow up date, set from MPPC
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5083" target="_blank">#5083</a> - "Needs Attention" field can be set from MPPC to alert another agent or management of an issue
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5086" target="_blank">#5086</a> - The main case contains a ChildCaseStatuses field which concatenates all Skill or Collab case statuses
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5086" target="_blank">#5086</a> - Every Skill or Collab case will display the ParentCaseStatus field
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5121" target="_blank">#5121</a> - Mission Keywords can be registered on Support Mission and then added by an Agent on a case. This is a single select picklist which will be improved to multi-select.
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5117" target="_blank">#5117</a> - "Willing to work in English" field was added to the closed case page layout
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5052" target="_blank">#5052</a> - Filter options for Case Global Search have been added to allow improved control to agents
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4908" target="_blank">#4908</a> - Add notification to skills case owner when Customer updates a parent case
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4761" target="_blank">#4761</a> - Agents can edit the Resolution Description Field and Post to case, after the case is closed

### ARM Updates

* Added pagination to Asset tables to improve load time
  ![image](https://media.github.ibm.com/user/19331/files/89b3241c-ba6f-11e8-9a01-4e5a1d9032d5)
* Clicking the Show button from Global Search results will now scroll to/highlight the asset in the category view
* Fix: Long asset/recommendation titles without spaces do not wrap properly
* Fix: Changing a category status to Cancelled/Expired while viewing it causes a browser hang
* Fix: Unable to find all categories using the category filter
* Fix: Cannot add an asset back to a category where it was previously indexed and removed
* Fix: Long delay clicking a category after clicking a previous category with 100s/1000s of assets

---

## Hardware / Field Service Updates

### General Changes
* Launch on September 8 is a success!  Read the announcement <a href="http://ibm.biz/BdYKUh" target="_blank">here</a>
* The Salesforce Field Service & HW Resource Wiki page with links to procedures and helpful information can be found <a href="http://ibm.biz/BdYSsR" target="_blank">here</a> 
* Salesforce has created a new icon for the Field Service Mobile App.  Documentation for installing the Field Service Mobile App, can be found <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=359c043f-069f-4c8f-bae6-d7ff9fc86a8c" target="_blank">here</a> 

### Reminder
Special considerations for non-hardware teams when interacting with hardware teams inside Salesforce:
* In this first phase, the Client experience will not change at all; they will continue to open support issues in legacy tools that are then migrated to Salesforce via a behind-the-scenes bridge (referred to as the "Riker bridge").
* Corresponding field service entitlement information will not be available within Salesforce for this first Day 1/ANZ rollout phase. 
* Therefore, it is important for software teams when interacting with hardware, to continue to use existing business processes to engage hardware skills.  Agents should reference the appropriate CRFs and originate cases or tickets in RETAIN/RCMS legacy systems. 
* Implementation of hardware entitlement is planned for Phase 2 / Day 2 encompassing the next-in-line geo. 

---

## Community Updates

### General Changes
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4685" target="_blank">#4685</a> - Call out new functions and features on the page where it exists
  - Point out new functions and features on the page where it exists. 
  - Display a tooltip (as shown in the image below) next to the new functionality. 
  - Once the user dismisses the tooltip, it must never be displayed to the user again.
  - Currently targeted for 10/25 - Sprint 19.
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4504" target="_blank">#4504</a> - Update on User / Admin Management for Support Community
  - The Support Community will allow administrators to manage and request access.
  - This is planned to be available in staging on 9/14.
  - Currently target for release on 10/9 Sprint 20.
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4309" target="_blank">#4309</a> - Single Chat button for Watson and Live Agent Chat
  - Two separate Chat buttons combined to one creating a single seamless experience for clients to engage IBM
  - Where applicable Watson Chat will start and when it can't help will pass the client on to an IBM Engineer.  
  - Currently target for release on 11/6 - Sprint 22

### Defects fixed
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5017" target="_blank">#5017</a> - Reopening case from the Support Community
  - When a case is reopened from the support site the status is changing but the case in the Console still shows the closed case layout and the agents have to use the Console reopen button before being able to communicate with the client.
  - Fixed in this Sprint
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5072" target="_blank">#5072</a> - Product search issue on open case function
  - Search is REALLY slow with each character type when using "ibm" in the search
  - Fixed in this Sprint
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5013" target="_blank">#5013</a> - Language change does not affect all components on the page when switching back and forth
  - When switching the language back and forth on the Profile page, not all elements of the screen are translated properly.
  - Fixed in this Sprint

---

### For your Awareness

* Our first Salesforce Training Blitz Demo web session was held on Tuesday, September 11. The recording of this session and any future sessions can be found in <a href="https://ibm.box.com/s/69gnlc5d9l8oyv3wz6702cczfu3mw916" target="_blank">this Box folder</a>. We will be using Event Central to schedule future Training Blitz sessions. The link to enroll and receive a calendar invite, will be posted in our communication channels. Here is the <a href="https://ec.w3bmix.ibm.com/session.html?id=BB892DA8781DD83A8525830500807010&action=join" target="_blank">Event Central link</a> to enroll to receive a meeting invite and Think40 credit for the September 12 6:00PM ET Demo session
* We are moving our process and how-to/FAQ documents from the Cognitive Support Platform (CSP) wiki to the new **DBA-Education**, located <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education" target="_blank">here</a>. Use the search function in the DBA-Education to find a topic of interest. Some important notes:
  - This is a work in progress. Some topics in the DBA-Education are empty because we’re still working to get everything populated.
  - If you see empty topics in some areas, clear your browser cache to see if new information has been added.

<br>
<br>
<br>
