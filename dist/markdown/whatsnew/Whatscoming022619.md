## What's coming in Sprint 4
*  [Lightning Update](/dba-support/DBA-Education/#/DBA-Education/whatsNew/whatscoming022619#Lightning)
*  [Site Switch on Saturday, March 2 at 10:00PM ET - 15 min. Read-only mode](/dba-support/DBA-Education/#/DBA-Education/whatsNew/whatscoming022619#Site)

### <a id="Lightning" name="Lightning"></a>Lightning Announcement
* General Availability of the Lightning Console in Production has temporarily been put on hold.
* We have found a Salesforce defect related to chat. We have a workaround we can build, but ideally Salesforce will fix the underlying defect.  More information to come on timing.
* We are also cancelling the Lightning Office Hours series until further notice.

### Agent Console Updates

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7347" target="_blank">#7347</a> "Notify Queue Members" field on Support Mission now syncs with the "Send Email to Members" field on the Support Mission Global Queue. 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7419" target="_blank">#7419</a> Restrict Support Managers from creating MustGather definitions that contain "Operating System" or "Product Version" in the name.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7545" target="_blank">#7545</a> Change title for the Agent Description Field to "Agent Description (internal)"

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6564" target="_blank">#6564</a> Improve re-assignment function  
* This is will be launched in staging on February 26.
* This design allows an agent to change the product/mission, update skill for classification correction, update mission team and select target agent all in a single selector rather than in multiple ways.
* Documentation will be added to the DBA-Education soon.

**Defects Fixed**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7252" target="_blank">#7252</a> Not able to create a Skill Case if a Case Team member on parent case is Inactive

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7354" target="_blank">#7354</a> Restore 'Log a Call' action from Open Case Record Type

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7425" target="_blank">#7425</a> Add printable view button to case layouts for lightning

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6950" target="_blank">#6950</a> Add "Merge Contacts" button to Contacts related list on the Account object in lightning

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7399" target="_blank">#7399</a> AE File Diag Object link is not working.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7042" target="_blank">#7042</a> Workaround for agents on Lightning to change visibility on a public post to be internal.
* This information has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">here.</a> 

<a href="https://funnel.w3ibm.mybluemix.net/#/open/6333" target="_blank">#6333</a> Remove the "Parent Case Owner Email" field on Skill cases

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7457" target="_blank">#7457</a> Replace old defect buttons on E2C layout with "Add Defect" button


**HW/RTS/Control Center**

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7308" target="_blank">#7308</a> - User should not be able to create a Time Sheet Entry in the future
* User is now prevented from setting the end date of a time sheet entry in the future.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7047" target="_blank">#7047</a> - Long duration Time Sheet Entries - Need validation to tell user that time sheet entry is over x hours
* When reviewing time sheet entries, any entry over 10 hours will need to be corrected before the time sheet entry can be saved.

<a href="https://funnel.w3ibm.mybluemix.net/#/open/7209" target="_blank">#7209</a> - Add validation to prevent editing time sheet entry once status has been set to extracted
* A time sheet entry can no longer be edited once it has been sent to the ledger (status will be set to extracted at this point).


**Watson in Support**
**Question Assistant**
* #301 - Change UI results mapping and remove/ modify checkmarks
* This will deploy to staging on February 26.
* The text shown in the QA display "Software Component/Hardware Part Number" has been replaced with the text "Component of Product."

## For your awareness
* **Salesforce <a id="Site" name="Site"></a>Site Switch Saturday night - 10:00pm Eastern** 
Console and Community will be in read only mode for 15 minutes beginning Saturday March 2 at 10:00pm Eastern.  This is part of the Salesforce twice a year site switch events which move from primary to backup server.  The Cognitive Support development team will be online to validate and will communicate via <a href="https://slack.com/app_redirect?channel=C902QFMPG" target="_blank">#csp-announcements</a> channel if any issues.  
* Reminder: The name "Salesforce" should not be shared with clients.  Instead, please use the term "Support Community."
