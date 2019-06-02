## <a id="highlights" name="highlights"></a> Highlights
* [A “Cancel” button on the “Case Open” page has been added](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew19#cancel)
* [Multi-select Mission Keywords and keyword field is now editable](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew19#mission)
* [Session Timer improvements have been added](/dba-support/DBA-Education/#/DBA-Education/whatsNew/Whatsnew19#sessiontimer)

---

## <a id="agentconsole" name="agentconsole"></a>Agent Console

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/3629" target="_blank">#3629</a> - Mission Team Routing & Assignment ("formerly called Routing & Assignment OC2") is currently in staging and targeted for production in Sprint 20
* A high level view of how this will work can be found in the DBA-Education.
* A demo was featured on the September 25 Training Blitz. The recording can be found <a href="https://ibmsf.my.salesforce.com/sfc/p/50000000c9MW/a/0z000000XtNN/ESzRenP9YOtQG2mMn94HHi7KLXkAleXv41r58BRiLzE" target="_blank">here</a>
@Craig Wolpert will also cover Mission Team Routing & Assignment on the October 4 Transformation Thursday call. We hope that all Support Mission Leaders and Managers can attend - - this is a great opportunity to get your questions answered. Click here <a href="https://ibm.biz/BdYeai" target="_blank">here</a> to enroll.

### <a id="mission" name="mission"></a><a href="https://funnel.w3ibm.mybluemix.net/#/open/5121" target="_blank">#5121</a> - Multi-select Mission Keywords and keyword field is now editable
* Documentation on this topic has been added to the DBA-Education for <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/keywords">Managers</a> and for <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/keywords">Agents</a>

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/4227" target="_blank">#4227</a> - Changes to Escalated checkbox, and the additions of the Milestone Warning and Milestone Missed checkboxes
* This was deployed, we ran into issues and backed out and this is being addressed.  Once this is resolved, we will update this blog. 
* Please note the Escalation Flag will be removed when a case is closed. 
* That logic is part of the Salesforce platform and we are not able to modify the logic.  For this reason, we added the new milestone fields which are not cleared when the case is closed.
* Details on these fields and associated logic have been added to the DBA-Education. 

### <a id="sessiontimer" name="sessiontimer"></a>Session Timer improvements
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4976" target="_blank">#5038</a> - Cap at 16 hours
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4976" target="_blank">#5015</a> - Display over 100 hrs
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/4976" target="_blank">#4977</a> - Add shortcut to stop current timer and start on another case instead of only displaying an error


### New features in the upcoming Case Prioritization version 3 update - 4956.  
* This is now targeted for Sprint 20. 
* Improved performance in the Kanban view - Cases are now lazy loaded incrementally into the Kanban view.
* User defined custom views can now be configured and saved. Configuration options include filtering on all Case fields and defining multiple columns in the Kanban view.
* Custom views can also be shared with other users from within the Case Prioritization interface.
* Additional information included in the Kanban view includes System Down indicators and the date of the last update.

### Console Defects Fixed

* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5197" target="_blank">#5197</a> - "Needs Attention" should always be visible on MPPC
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5222" target="_blank">#5222</a> - MPPC adds an extra line to the post when ever there is a line break
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5174" target="_blank">#5174</a> - Need to be able to see Need Attention and Work Orders on Closed Case Layout

### ARM Updates 
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/5126" target="_blank">#5126</a> - Allow users to select and up/down vote assets from the Global Search pop-up
* Share categories across Support Missions
* <a href="https://funnel.w3ibm.mybluemix.net/#/open/1748" target="_blank">#1748</a> - IBM Knowledge Bar, is now targeted for Sprint 20.

---

## Community Updates

###  <a href="https://funnel.w3ibm.mybluemix.net/#/open/4465" target="_blank">#4465</a> Implementation of Watson Language Translator (WLT) for Search results page(s)  
* Moving away from n.fluent to WLT
* Provide clients a better machine translation for the dynamically rendered content.

### Improve representation of code break in HTML email notifications - 4796
* When posting a code break from the service console, the resulting HTML email notification, while using the monospace, does not create the same clear indication of a code break that currently appears in both the community and console feed.
* Fixed this so code breaks look better in the emails to clients

### <a id="cancel" name="cancel"></a><a href="https://funnel.w3ibm.mybluemix.net/#/open/4841" target="_blank">#4841</a> - “A Cancel” button on the “Case Open” page has been added
* By utilizing the right click button, the "Open a Case" function can now be opened in a new window, leaving the page the client was on, open in the last tab.
* This capability was a client request.
* Clients are asking for a "Cancel" button on the case open.
* If button is clicked and any data has been entered a message will appear asking clients if they want to cancel the case open and warning them they will lose the information they have entered.
* As part of this function, if the client clicks other tabs in the browser or menu items the same warning message will pop up asking the client if they are sure they want to move away from the case open process.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open/3651" target="_blank">#3651</a> Live Agent Chat routing by product to utilize OC2 Routing (Sprint 20)
### User (A.K.A Caller) administration - 4504 (Sprint 20)

### Update on User / Admin Management for Support Community - 4504 
* The move to staging has been delayed.
* The targeted launch in production is now postponed to a later sprint.
* The Support Community will allow administrators to manage and request access.

---

## For your awareness 
### Are you taking advantage of our weekly Training Blitz sessions? 
Demos coming up on **Support Mission Setup and Maintenance**:

| Date                                      |                |                      | Meeting ID |
|-------------------------------------------|----------------|----------------------|------------|
| Tuesday, October 2 at 10:00AM ET Demo | <a href="https://ec.w3bmix.ibm.com/session.html?id=6ED02668A90A42A78525830F005A288D&action=join" target="_blank">Link to enroll</a> | <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link to WebEx</a> | 925 715 625 |
| Tuesday, October 2 at 6:00PM ET Demo  | <a href="https://ec.w3bmix.ibm.com/session.html?id=7EA467D74732DAA48525830F005ADF66&action=join" target="_blank">Link to enroll</a> | <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link to WebEx</a> | 926 513 528 |
| Wednesday, October 3 at 10:00AM ET Q&A | <a href="https://ec.w3bmix.ibm.com/session.html?id=442EB653D43D43488525830F005C6DE3&action=join" target="_blank">Link to enroll</a> | <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link to WebEx</a>  | 925 715 625 |
| Wednesday, October 3 at 6:00PM ET Q&A | <a href="https://ec.w3bmix.ibm.com/session.html?id=7EA467D74732DAA48525830F005ADF66&action=join" target="_blank">Link to enroll</a> | <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link to WebEx</a> | 926 513 528 |

The Training Blitzes schedule, links to enroll, direct WebEx links and links to post-session recording are found : <a href="https://ibm.box.com/s/vx6g47jiz0k7ypnnjhyd4q6wzomaqwwh" target="_blank">here.</a>

### Updates on Salesforce training videos
* <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=29073" target="_blank">Module 2 - "Creating a case view and creating a defect view"</a>
* <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=33328" target="_blank">Module 3 - "Searching for content in the Cognitive Support Platform"</a>

The new Salesforce DBA-Education for internal use, was announced on this September 17 blog <a href="https://w3-connections.ibm.com/blogs/8f0aca92-2010-4a32-914d-77dafc06c9cf/entry/Cognitive_Support_Platform_User_Documentation_consolidation_in_the_DBA-Education?lang=en_us" target="_blank">blog</a>. Please be sure to bookmark the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education" target="_blank">DBA-Education link</a>: https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education and utilize the search field to find the info you seek.






