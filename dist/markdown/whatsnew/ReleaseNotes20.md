## <a id="highlights" name="Headlines"></a> Headlines
*  [Mission Team Routing & Assignment delayed - will deploy 6 AM Eastern Tuesday October 16.](/dba-support/DBA-Education/#/DBA-Education/whatsNew/ReleaseNotes20#Mission) A <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=34925" target="_blank">video</a> about Mission Team Routing and Assignment is now available.
*  [New Case Prioritization V3 features launched.](/dba-support/DBA-Education/#/DBA-Education/whatsNew/ReleaseNotes20#Prioritization) Details are shown in this <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/whatsNew/Caseprioritization " target="_blank">blog.</a> 
*  [Knowledge Bar launched in ARM](/dba-support/DBA-Education/#/DBA-Education/whatsNew/ReleaseNotes20#Knowledge) 

## Agent Console Updates


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5271&l=public " target="_blank">#5271</a>  Mission Team Routing & Assignment 
While the Sprint #20 deployment occurred on Thursday, Oct. 11 at 9:00 AM (Eastern TZ), the code for <a id="mission" name="mission"></a> Mission Team Routing & Assignment was deployed in a disabled state.  The Mission Team Routing & Assignment feature will be enabled on Tuesday 6 AM Eastern.
*  Process documentation can be found in the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/coreConcepts/oc2routing " target="_blank">DBA-Education.</a>
*  An overview and replay from the Oct. 4 Mission Team Routing & Assignment demo, presented by Craig Wolpert can be found <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea?tags=routing&lang=en_us " target="_blank">here.</a>
*  We have created a Slack channel to use if you have any questions - <a href="https://ibm-technical-support.slack.com/messages/CD88E797X/" target="_blank">#csp-mt-routing.</a>
*  Please take a few minutes to view this <a href="https://www.onlinedigitallearning.com/mod/page/view.php?id=34925" target="_blank">video</a> to prepare for Tuesday's launch.  It replaces the "Assigning Cases" and "Automatic Case Assignment" videos in the Manager's Training Module.


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5079&l=public " target="_blank">#5079</a> - What's new Pop-up screen in Console 
*  This will launch in staging in Sprint 20.
*  The feature will alert Support Agents to the latest Sprint Release information upon login.
When a Support Agent logs into the Salesforce Console after a Sprint has been deployed, they will see a small screen Pop-up featuring the top headlines of the Sprint with links to more information. 
*  The Pop-up will also be used to share important information and reminders.


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=4956&l=public " target="_blank">#4956</a> - New features in the upcoming Case Prioritization version 3 update<a id="CasePrioritization" name="CasePrioritization"></a>   
*  Improved performance in the Kanban view - Cases are now lazy loaded incrementally into the Kanban view.
*  User defined custom views can now be configured and saved. Configuration options include filtering on all Case fields and defining multiple columns in the Kanban view.
*  Custom views can also be shared with other users from within the Case Prioritization interface.
*  Additional information included in the Kanban view includes System Down indicators and the date of the last update.
*  Here is a link to a video featuring a demo of <a href="https://ibm.box.com/shared/static/rvn2oi67igeugvc41phcjt9cprd34lzb.mp4 " target="_blank">Case Prioritization v3.</a>  
*  Here is a link to a video featuring a demo of <a href="https://ibm.box.com/shared/static/ktgic5n3kynwpmi5lzi3voekdik5u1re.mp4 " target="_blank">Mini-Case Prioritization.</a> 
*  We continue to advise using a browser other than IE 11 for case prioritization and agent console search.  If you are using IE 11 and encounter display issues, please try another browser.

### <a href="https://github.ibm.com/Watson-in-Support/PM-rumor-mill/issues/282" target="_blank">#282</a> - Blueworks Live automation to integrate product specific customer account information into Salesforce cases 
#### This is in staging now and expected to launch very soon.
*  A new automation has been created for Blueworks Live Support Team that will help provide customer account information from their backend Blueworks Live Super User Administration Tool and show it for every Blueworks Live Salesforce case that gets created.
* The automation will trigger for both Salesforce web cases and cases created via email-to-case.
* The Support Agents use this customer account information to help triage customer issues like account expirations or license renewal, so this automation will improve their time to resolution (TTR) by preventing them from having to switch context from the Salesforce Service Console to their backend Tool.
* Everything a Support Agent needs to perform the initial analysis will be right there in the Salesforce case.

### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5136&l=public " target="_blank">#5136</a> - Create Task process for "Next Contact Date" field on case
*  This is the "FUP"- Follow Up date feature that existed in Retain, that our Agents have been requesting.
*  This is the date on which the Agent intends to contact the client (aka FUP - Follow Up date) 
*  The  documentation has been updated on the Salesforce DBA-Education under <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate" target="_blank">Case Update</a> 
page and also the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/monitoring" target="_blank">Monitoring</a> and the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">communication</a> sections.  


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=4227&l=public " target="_blank">#4227</a> - Changes to Escalated checkbox, and the additions of the Milestone Warning and Milestone Missed checkboxes 
#### This is targeted for Sprint 21.
*  Please note the Escalation Flag will be removed when a case is closed. 
*  That logic is part of the Salesforce platform and we are not able to modify the logic.  For this reason, we added the new milestone fields which are not cleared when the case is closed.
*  Details on these fields and associated logic have been added to the <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/fields" target="_blank">DBA-Education.</a> 


### ARM Updates 
### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=1748&l=public " target="_blank">#1748</a> - IBM Knowledge Bar 
The IBM Knowledge bar will allow users to do the following from a Watson Support Search result within a Case…<a id="KnowledgeBar" name="KnowledgeBar"></a> 
*  Attach the search result
    *  Attach and up vote the search result
    *  Attach and down vote the search result
    *  View/Add Comments in ARM about the search result
    *  View/Add Recommendations in ARM for the search result
    *  Copy search result URL to clipboard


## Community Updates
### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=3651&l=public " target="_blank">#3651</a> - Live Agent Chat routing by product to utilize Mission Team Routing and Assignment
#### This will now launch at the same time as Mission Team Routing and Assignment on Tuesday, October 16.
*  Support Missions now have the ability to build chat teams to route chats by product (skill)
*  Routing logic will be as follows: Client clicks on Chat with agent, logic will look for agent that has the skill (product) that is in context of where the client clicked the button, if that skilled agent is available, chat is routed to that agent, if that skilled agent is not available the request to chat goes into the support mission looking for other available agents


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=5355&l=public " target="_blank">#5355</a> - Creation of an FAQ section on the Support site
*  Based on client questions, we now have the capability to built a list of FAQ's
*  FAQ's will appear on the main menu bar
*  Can/will be changed as trends in questions change


### <a href="https://funnel.w3ibm.mybluemix.net/#/open?q=4504&l=public " target="_blank">#4504</a> - Update on User / Admin Management for Support Community  
#### The launch into staging is delayed. 
*  The targeted launch in production is tentatively targeted for Sprint 22. 
*  The Support Community will allow administrators to manage and request access.


## For your awareness 
### Are you taking advantage of our weekly Training Blitz sessions? 
#### Demo coming up:  Product Configuration
*  Tuesday, October 16, 10:00AM ET <a href="https://ec.w3bmix.ibm.com/session.html?id=E76134FBE6FA43478525832000693F37&action=join" target="_blank">Link to enroll</a>  / <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link</a> / Mtg. ID 925 715 625
*  Tuesday, October 16, 6:00PM ET <a href="https://ec.w3bmix.ibm.com/session.html?id=E2568D7B4A37376785258320006A78D8&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link</a> / Mtg. ID 926 513 528
*  Wednesday, October 17, 10:00AM ET <a href="https://ec.w3bmix.ibm.com/session.html?id=103F99DC3F966F9E85258320006ADD49&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ekettler" target="_blank">Direct link</a> / Mtg. ID 925 715 625
*  Wednesday, October 17, 6:00PT ET <a href="https://ec.w3bmix.ibm.com/session.html?id=72E2A97A2F1767CD85258320006BA43F&action=join" target="_blank">Link to enroll</a> / <a href="https://ibm.webex.com/meet/ecannady" target="_blank">Direct link</a>  / Mtg. ID 926 513 528

*  The Training Blitzes schedule, links to enroll, direct WebEx links and links to post-session recording are found <a href="https://ibm.box.com/s/vx6g47jiz0k7ypnnjhyd4q6wzomaqwwh" target="_blank">here.</a>  

#### The launch to Lightning is coming up soon!  Lightning will be the launching point for many of the user experience improvements.  An overview of Lightning was featured on this <a href="https://w3-connections.ibm.com/blogs/8f0aca92-2010-4a32-914d-77dafc06c9cf/entry/Exciting_improvements_Lightning_are_coming_to_the_Salesforce_Agent_Console?lang=en_us" target="_blank">blog.</a>   

