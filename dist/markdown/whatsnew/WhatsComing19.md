## What's coming up in Sprint #19 and beyond? - September 25

### Big (good!) changes will be coming to Mission Team Routing & Assignment ("formerly called Routing & Assignment OC2")  in October. 
We'll be providing detailed information prior to pushing the update to production.  Several of your team members have already been engaged in testing the new routing and assignment and the migration logistics are being finalized this week.  Next week's Training Blitz will also cover aspects of the new routing and assignment model. This is especially relevant for Support Mission Leads and Support Managers.

A high level view of how this will work, can be found in the DBA-Education.
Schedule for training blitzes <a href="https://ibm.box.com/s/vx6g47jiz0k7ypnnjhyd4q6wzomaqwwh" target="_blank">here</a> 

### Direct Links to Event Central to enroll and receive a meeting invite:

Tues. September 25 AM   <a href="https://ec.w3bmix.ibm.com/session.html?id=298849DFD7BAC1278525830D0074F164&action=join" target="_blank">Demo</a>
 
Tues. September 25 PM  <a href="https://ec.w3bmix.ibm.com/session.html?id=CA972EB59D2FF6828525830D0075E8EA&action=join " target="_blank">Demo</a> 

Wed. September 26 AM   <a href="https://ec.w3bmix.ibm.com/session.html?id=90EB975C4DC663A18525830D0079873B&action=join" target="_blank">Q&A</a> 

Wed. September 26 PM   <a href="https://ec.w3bmix.ibm.com/session.html?id=857F16C13C5558C18525830D007D0FBB&action=join" target="_blank">Q&A</a> 

Craig Wolpert will also cover Mission Team Routing & Assignment on the October 4 Transformation Thursday call. We hope that all Support Mission Leaders and Managers can attend - - this is a great opportunity to get your questions answered. Click to enroll. <a href="https://ibm.biz/BdYeai" target="_blank">ENROLL</a> 

## Agent Console Updates
### Multi-select Mission Keywords and keyword field is editable - 5121 
-  This feature is currently in staging. Please inform @Wolpert, Craig R (Craig)​ of any potential issues.
-  This is targeted to be in production in Sprint 19. 
-  Documentation regarding the use of the Keyword functionality has been added to the DBA-Education.  

### Changes to Escalated checkbox, and the additions of the Milestone Warning and Milestone Missed checkboxes - 4227
-  These are all currently in Staging. 
-  Please note the Escalation Flag will be removed when a case is closed. 
-  The details of these fields and associated logic have been added to the DBA-Education. 

### New features in the upcoming Case Prioritization version 3 update - 4956
-  Improved performance in the Kanban view - Cases are now lazy loaded incrementally into the Kanban view.
-  User defined custom views can now be configured and saved. Configuration options include filtering on all Case fields and defining mulitple columns in the Kanban view.
-  Custom views can also be shared with other users from within the Case Prioritization interface
-  Additional information included in the Kanban view includes System Down indicators and the date of the last update.

### Defects Fixed - These are all currently in staging
-  Session Timer improvements: Cap at 16 hours, - 4976 
-  Display over 100 hrs, make it easier to stop a running timer on another case  - 5015
-  Add shortcut to stop current timer and start on another case instead of only displaying an error - 4977
-  Needs Attention should always be visible on MPPC - 5197
-  MPPC adds an extra line to the post when ever there is a line break - 5222
-  Need to be able to see Need Attention and Work Orders on Closed Case Layout - 5174

### ARM Updates (Targeted for Sprint 19)
-  Allow users to select and up/down vote assets from the Global Search pop-up - 5126
-  Categories can be shared across Support Missions.
-  IBM Knowledge Bar - 1748
- - The IBM Knowledge Bar integrates ARM and KCS functions directly on the Watson Support Search result pages. To save the user from having to switch to other views to perform those functions.

## Community Updates
### Implementation of Watson Language Translator (WLT) for Search results page(s) - 4465
-  Moving away from n.fluent to WLT
-  Provide clients a better machine translation for the dynamically rendered content

### Improve representation of code break in HTML email notifications - 4796
-  When posting a code break from the service console, the resulting HTML email notification, while using the monospace, does not create the same clear indication of a code break that currently appears in both the community and console feed.
-  Fixed this so code breaks look better in the emails to clients

![image](https://media.github.ibm.com/user/116072/files/34609aaa-c184-11e8-8911-40a50a44716a)

### "Open a case" button should allow the user to open the page in a new window - 4841
- By utilizing the right click button, the "Open a Case" function can now be opened in a new window, leaving the page the client was on, open in the last tab.
- This capability was a client request.

### "Cancel" button on the "Case Open" page - 4775
- Clients are asking for a "Cancel" button on the case open
- If button is clicked and any data has been entered a message will appear asking clients if they want to cancel the case open and warning them they will lose the information they have entered.
- As part of this function if the client clicks other tabs in the browser or menu items the same warning message will pop up asking the client if they are sure they want to move away from the case open process.

### Live Agent Chat routing by product to utilize OC2 Routing - 3651 (Sprint 20)
### User (A.K.A Caller) administration - 4504 (Sprint 20)
### Update on User / Admin Management for Support Community - 4504  (Sprint 20)
- The  Support Community will allow administrators to manage and request access.
- This is currently in staging.

## For your awareness
The public-facing video <a href="https://mediacenter.ibm.com/media/t/1_dnpmr6oi" target="_blank">IBM Support Community/Forums</a> has been improved!  The link to this video can be shared with our clients!  

The training video <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=28128" target="_blank">RTS steps to create a Work Order with Parts</a> has been updated.  This is currently part of YourLearning Module 5 that was set up specifically for Hardware and Field Services.  Click here to see the Module and links to related training videos. 

Check out the Watson Chatbot - <a href="https://w3-connections.ibm.com/blogs/8f0aca92-2010-4a32-914d-77dafc06c9cf/entry/Watson_Chatbot_JustGather_Service?lang=en_usJust Gather" target="_blank">Watson Chatbot JustGather Service</a> blog!  After a Chat and before a case is about to be opened from the Chatbot dialog, the service offers the recommended chat dialog document that includes the collected information that the support analyst will need to debug the problem. This feature saves time for both the client and the support analyst by helping gather the information needed proactively. 

The new Salesforce DBA-Education for internal use, was announced on this September 17 <a href="https://w3-connections.ibm.com/blogs/8f0aca92-2010-4a32-914d-77dafc06c9cf/entry/Cognitive_Support_Platform_User_Documentation_consolidation_in_the_DBA-Education?lang=en_us" target="_blank">blog</a>. The DBA-Education consolidates information to make high-quality, definitive content, easily retrievable and easily maintained.  Please be sure to <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Educationbookmark" target="_blank">bookmark</a> this link and utilize the search field to find the info you seek.


