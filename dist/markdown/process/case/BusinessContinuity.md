## Section purpose:  Describe the Business Continuity Solution

**As an agent, how do I do my work if I can’t get to the Agent Console?**

IBM Support has developed a Business Continuity solution for the Cognitive Support Platform that is intended to be a "keep the lights on" solution for allowing Agents to do rudimentary Case handling when Salesforce is unavailable.  It will allow a very limited set of functions and should not be expected to replace the full Agent Console nor other tools used in the Support process.

The solution consists of a near real-time replica of the Salesforce objects needed to support emergency case management, basic integration with supporting systems such as TPS and ECuRep, and a new user interface. This new Business Continuity user interface solution is called the Case Manager, in which to perform the work.

### Case Manager

**Accessing the Case Manager when Salesforce is down.**

This new Business Continuity solution, Case Manager, is hosted at <a href="http://ibm.biz/CaseManager" target="_blank">http://ibm.biz/CaseManager.</a>    
Be sure to either bookmark the link or copy it to an area outside of Salesforce for easy reference. A new training video is available <a href="https://yourlearning.ibm.com/#activity/URL-CB81D243B7C4 " target="_blank">here.</a>  

The Case Manager offers similar functionality to the existing <a href="http://ibm.biz/CaseViewer" target="_blank">Case Viewer</a> UI.  By default, Cases will be read-only, and Personal Information will be masked, unless your Salesforce user has authorization to view the full document.  

If authorized, Agents will be able to edit a case, or create a new one, if Salesforce is not available.  When Salesforce is up, any attempt to create or edit a case should display a banner at the top of the page indicating that the Salesforce Agent Console should be used:
![image](https://media.github.ibm.com/user/146797/files/588b5d54-2875-11e9-8136-19bd720e190a)

However, when Salesforce is down, agents will be able to view, create and edit cases.  The ‘My Cases’ filter should list all of the cases the agent currently owns, or cases may be found through searching by Case Number, Account, Contact, Product, or Support Mission.    

## Editing a Case:

The Case Manager will only allow editing of select fields:

*  Case Owner:  Will allow an agent to reassign to someone else on their team, if required.
*  Contact: Will allow the agent to look up an existing contact within the Account, if a change is required. 
*  Status:  Will allow the agent to update the status to one of the standard statuses.
*  Severity:  To allow changes to the severity of an issue.
*  Posts:  Free form text field to update the Feed with latest information on work done on the case.

Note:  When updating the Posts (Feed), the agent will need to save both the post, and then the Case document itself.  

## Creating a Case:

Similar to editing an existing case, when creating a case only the most critical fields will used:  **Account, Contact, Product, Internal Status, Severity, Subject and Description.**

For MVP, only existing Accounts, and Contacts associated with the selected Account will be allowed.

When saving the new case, a temporary Case Number will be assigned, with a similar taxonomy to a Salesforce-generated Case Number.  The temporary case number (CM999######) will be displayed in a dialog box and can be provided to a client, if needed.  The case will be saved in an outbound queue for synchronization back to Salesforce when it is back online.  At that point, the temporary case number will be recorded in the Salesforce cases’ “Legacy Case Number” field, and the official case number will be generated.  When the agent returns to the Agent Console, they will be able to search for the temporary case number in order to find the case. The newly generated ‘official’ Salesforce Case number should be sent to the client as soon as possible so the client will not continue to use the temporary one. 

In MVP, new cases created in Case Manager will only follow Support Mission routing based on the Product selected.

**Please be aware:  If the Salesforce Agent Console is inaccessible due to a W3ID authentication issue, you will also not be able to access the Case Manager UI . It relies on W3ID authentication as well.**

This page will evolve and update as more Business Continuity functions go-live in production.  The Business Continuity solution can be used for all products boarded to the platform unless otherwise noted in the DBA-Education.  

**Please post questions in the <a href="https://slack.com/app_redirect?channel=CGB5SAV3P" target="_blank">#csp-casemanager</a> Slack channel.**

