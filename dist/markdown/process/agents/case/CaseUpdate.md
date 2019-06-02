
This chapter describes the attributes that can be changed on the **Details View** of a Case. The majority of these fields are purely informational. The **Details View** is composed of the following UI elements:

## Case Header
The header is composed of the tab line and the actual header that is split into three areas holding a number of core attributes from the case:
![image](https://media.github.ibm.com/user/19331/files/4616dd94-b1c7-11e8-813d-e76a16836f3e)

--- 

## Related List Line
This line allows to either jump to a specific <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a> on the Case or to get a preview of this Related List:
![image](https://media.github.ibm.com/user/70336/files/969ec23a-b119-11e8-8c25-08ac33536a95)
* When hovering over the elements you can get a preview of the section 
* Clicking on the element scrolls down to the appropriate section

--- 

## Case Fields
**Please Note**: Not all Attributes of the Case can be changed by the Agent. If there is a lock symbol on the right of the line you cannot edit the field. If there is a little pen on the right of the line when you hover over it you can edit the field by double clicking the pen.
![image](https://media.github.ibm.com/user/19331/files/4bc85a0a-b1c8-11e8-93b2-41143cd1ba20)

Case Fields are grouped into a number of Sections:
 * [Case Detail](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#detail)
 * [Case Description](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#description)
 * [Defect Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#defect)
 * [Keyword Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#keyword)
 * [Watson Translations](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#translation)
 * [Mission Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#mission)
 * [Work Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#workorder)
 * [Linked Case Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#linked)
 * [Entitlement Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#entitlement)
 * [Must Gather](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#mustgather)
 * [Reopen Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#reopen)
 * [System Information](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate#system)


---

## <a id="detail" name="detail"></a>Case Detail

| Field Name                            | Description & Purpose                                                                          | on Case Layout | on Case Views | on Case Prioritization    |
|---------------------------------------|------------------------------------------------------------------------------------------------|----------------|---------------|---------------------------|
| Case Owner                            | Reference to Owner of the case, can be a user (a support agent) or a Queue                     | read/write     | read          | read on preview           |
| Account Name                          | Reference to Name of the Account (ICN) the case was created for                                | read/write     | read          | read on preview           |
| Blue Diamond Account                  | Boolean, indicates whether this account is a Blue Diamond Account                              | read           | read          | -                         |
| Contact Name                          | Reference to Name of the Contact, the person on client side to work with to solve the case     | read/write     | read          | read on preview           |
| Contact Phone                         | Phone number of the Contact, taken from the Contact Profile                                    | read           | read          | -                         |
| Contact Phone Extension               | (TBD)                                                                                          |                |               | -                         |
| Alternative Callback number           | A second Phone number of the Contact, is not taken from the Contact, specific to this Case     | read/write     | read          | -                         |
| Contact Email                         | eMail address of the Contact, taken from the Contact profile                                   | read           | read          | -                         |
| Case Number                           | The actual number of this case and a link to see the entire Case Hierarchy                     | read           | read          | read on board and preview |
| Alert Comments                        | (TBD)                                                                                          |                |               |                           |
| Account Priority                      | Special Programs Membership of the Account                                                     | read           | read          | -                         |
| Customer Impact Event (New!)          | Boolean, indicates that the Case covers a Customer Impact event                                | read/write     | read          | -                         |
| Case Record Type (New!)               | String, type of the Case record (Open Case, Skills Case?)                                      | read           | read          | -                         |
| Status                                | External, client facing Status field - the client will see this one on the Community Portal    | read/write     | read          | -                         |
| Internal Status                       | Internal, agent facing Status field - this field is driving the external status                | read/write     | read          | read, called "Status"     |
| Severity Level                        | Severity as number followed by a textual description of what the severity means                   | read/write     | read          | read on board and preview |
| Escalated (Updated!)                             | Boolean flag, indicating that this case was escalated by someone                               | read/write     | read          | -                         |
| Milestone Warning (New!)              | Boolean flag, populated 30mins before a milestone is vaolated on this case                     | read/write     | read          | -                         |
| Milestone Missed (New!)               | Boolean flag, indicates if the case ever had a milestone that was missed                       | read/write     | read          | -                         |
| Legacy                                | String holding the Legacy Ticket information                                                   | read           | read          | -                         |
| Reference Number                      | displays an optional reference number specified by the client to track the case            | read/write     | read          | -                         |
| Country                               | Captures the country of the Account the case is associated with, taken from the Account        | read           | read          | -                         |
| Willing to communicate in English     | Boolean flag, indicates whether the client is willing to communicate in English                | read           | read          | -                         |
| Ownership changes                     | Number of ownership changes this case has experienced so far. This field will soon be deprecated.                                  | read/write     | read          | -                         |
| Shift Duration (New!)                 | (TBD)                                                                                          | read/write     | read          | -                         |
| Next Contact Date (New!)              | Date on which the Agent intends to next contact the client (aka FUP date)             | read/write     | read          | -                         |



---

## <a id="description" name="description"></a>Case Description

| Field Name  | Description & Purpose                                                                                                                                              | on Case Layout | on Case Views | on Case Prioritization    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|---------------|---------------------------|
| Subject     | Title or subject line including a crisp overview what the case is about                                                                                            | read/write     | read          | read on board and preview |
| Description | Initial Problem description the client used to open the Case, can include several legacy forms and textual structure when a Case was migrated from a legacy system | read/write     | read          | read on preview           |

---

## <a id="defect" name="defect"></a>Defect Information

| Field Name         | Description & Purpose                                                                                                                                                                                                                                                                     | on Case Layout | on Case Views | on Case Prioritization |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|---------------|------------------------|
| Defect Information | This field represents a summary of the defects that are associated to the case. This field is a concatenation of potentially multiple defects into one string, including references to "Shadow" defect numbers on legacy or strategic development systems. e.g. DT000010 (APAR:IZ27289)   | read           | read          | -                      |
| Defect Count       | Calculated Number of Defect objects that are associated to this Case                                                                                                                                                                                                                      | read           | read          | -                      |
---

## <a id="keyword" name="keyword"></a>Keyword Information

| Field Name                            | Description & Purpose                                                                          | on Case Layout | on Case Views | on Case Prioritization    |
|---------------------------------------|------------------------------------------------------------------------------------------------|----------------|---------------|---------------------------|
| Add Keyword                           | not actually an attribute but a link to open the popup allowing selection of a predefined Keyword            | -              | -             | -                         |
| Keyword                               | the Keyword that is associated to this case                                   | read/write     | read          | -                         |


---

## <a id="translation" name="translation"></a>Watson Translations

| Field Name             | Description & Purpose                                                                                                                            | on Case Layout | on Case Views | on Case Prioritization |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------|---------------|------------------------|
| Translated Subject     | English translation of the Subject from the Case (which can be in non-english language)                                                          | read           | read          | -                      |
| Translated Description | English translation of the Description from the Case (which can be in non-english language)                                                      | read           | read          | -                      |
| Spoken Language        | Identified Language used on Subject and Description, if multiple languages have been used, this field holds the very first language Watson found | read           | read          | -                      |

---

## <a id="mission" name="mission"></a>Mission Information

| Field Name              | Description & Purpose                                                                          | on Case Layout | on Case Views | on Case Prioritization |
|-------------------------|------------------------------------------------------------------------------------------------|----------------|---------------|------------------------|
| Support Mission         | Support Mission that is associated to this Case                                                | read/write     | read          | -                      |
| Product                 | Product that is associated to this Case                                                        | read/write     | read          | -                      |
| Skill                   | Picklist, Product Skill that was identified (or manually set) that is needed to solve the case | read/write     | read          | -                      |
| Watson Skill Suggestion | Watson-based classification of the Skill (as a suggestion) that is needed to solve the case    | read           | read          | -                      |

---

## <a id="workorder" name="workorder"></a>Work Information

| Field Name                   | Description & Purpose                               | on Case Layout | on Case Views | on Case Prioritization |
|------------------------------|-----------------------------------------------------|----------------|---------------|------------------------|
| Work item Id                 | ID of the Work Order associated to this case        | read/write     | read          | -                      |
| Remote WorkItem status       | Status of the Remote Work Order                     | read/write     | read          | -                      |
| Last Modified Work Item Date | Date when the Work Order was modified the last time | read           | read          | -                      |

---

## <a id="linked" name="workorder"></a>Linked Case Information

| Field Name        | Description & Purpose                                                      | on Case Layout | on Case Views | on Case Prioritization |
|-------------------|----------------------------------------------------------------------------|----------------|---------------|------------------------|
| Parent Case       | Reference to the Parent case if this is a child (Skills- or Collab-) Case | read/write     | read          | -                      |
| Related Case      | TBD                                                                        | read           | read          | -                      |
| Related Case Type | TBD                                                                        | read           | read          | -                      |

---

## <a id="entitlement" name="entitlement"></a>Entitlement Information

| Field Name       | Description & Purpose                                                                                                | on Case Layout | on Case Views | on Case Prioritization |
|------------------|----------------------------------------------------------------------------------------------------------------------|----------------|---------------|------------------------|
| Entitlement Name | Name of the Entitlement that was used to entitle this Case                                                           | read/write     | read          | -                      |
| Business Hours   | Will represent the business hours for the Account once end-to-end entitlement is in place, currently always "Default" | read/write     | read          | -                      |

---

## <a id="mustgather" name="mustgather"></a>MustGather
This section displays the MustGather attributes that are specific to the Product the Case was opened against.

---
## "Next Contact Date" Task:

Field Name | Field Definition
-- | --
Subject | Description of the task. Defaulted to “Customer   Communication”
Type | The type of task. As of today, “Next Contact Date” is the   only option
Assigned To | The user assigned the task for “Next Contact Date.” This   will be assigned to the case owner. If the case is owned by a queue, it will   be assigned to the user that set the “Next Contact Date” on the case.
Priority | Indicates the priority level of the task. Defaulted to   “Normal.”
Name | The contact on the case that should be contacted on the   “Next Contact Date.” If there isn’t a contact on the case, this field will   not be populated when the task is created.
Due Date | The due date of the task. This is the date the “Next   Contact Date” is set to.
Status | Current status of the task. Status values include Open,   Cancelled, and Complete. Cancelling or completing a task moves it to the   “Activity History” list.
Related To | The case record the task is for.
Comments | Free text field that can be used to add any further   description or comments on the task.
Task Number | A read-only number field. This is searchable via   Salesforce UI.
Reminder | Indicates if a reminder is set. If desired, users can   change the reminder date/time after it is created.

---

## <a id="reopen" name="reopen"></a>Reopen Information

| Field Name           | Description & Purpose                                               | on Case Layout | on Case Views | on Case Prioritization |
|----------------------|---------------------------------------------------------------------|----------------|---------------|------------------------|
| Reopened             | Boolean flag, indicating that this Case was closed and subsequently reopened | read/write     | read          | -                      |
| Reason for Reopening | Text field holding the reason for Reopening the Case                  | read/write     | read          | -                      |

---

## <a id="system" name="system"></a>System Information

| Field Name                    | Description & Purpose                                                                                                       | on Case Layout | on Case Views | on Case Prioritization |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------|----------------|---------------|------------------------|
| Case Origin                   | Text field holding the name of the System the case was coming from                                                          | read/write     | read          | -                      |
| Created by                    | Reference to a User who opened the Case                                                                                     | read           | read          | -                      |
| Last Solution Given Date/Time | Timestamp when the last Solution was given. This field can be filled when selecting "Solution Given" during the Post Action | read/write     | read          | -                      |
| Last Modified By              | Reference to the User who modified the Case the last time including the timestamp when this happened                          | read           | read          | -                      |
| Date/Time Closed              | Timestamp when the Case was closed                                                                                          | read           | read          | -                      |

---

## Related Lists
In addition to the Field Sections, every Case comes with a number of <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a> that provide additional actions to update a Case:

* **Case Team** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseTeams">How to make changes on the CaseTeam</a>
* **Attached Assets** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/arm">How to work with Assets attached with ARM</a> 
* **Related Cases** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/related">How to work with related Cases</a>
* **Case Defects** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/defectManagement">How to work with and manage Defects</a>
* **Articles** - Attach and work with Articles related to the Case (TBD)
* **Diagnostics** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments">How to handle Diagnostic assets uploaded to ecurep</a> 
* **Case Milestones** - Overview of Case Milestones reached during the case lifecycle
* **Case History** - History of actions taken on the case
* **Live Chat Transcripts** Transcripts of the Chats that have been opened for this Case
* **Open Activities** - Overview of open Activities (Attention: this feature is currently baked into the platform)
* **Activity History** - History of Activities (Attention: this feature is currently baked into the platform)
* **Session Time** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/timeRecording">How to work with Time recorded for this Case</a>
* **Interested Parties** - <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/interestedParties">How to work with "Interested parties" added to the Case</a>


For more information on Case Fields and Process see <a href="/dba-support/DBA-Education/#/DBA-Education/process/case/fields">here</a> 
