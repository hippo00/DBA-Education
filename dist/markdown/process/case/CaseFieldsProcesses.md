**NOTE:** This document is Work in Progress


This document describes the Case Fields, their meaning, datatypes and the actual processes they are related with.

## <a id="detail" name="detail"></a>Case Detail

| Attribute                                                                           | Brief Description                                                                              | 
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [Case Owner](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#owner)                 | Reference to Owner of the case, can be a user (a support agent) or a Queue                     |
| [Account Name](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#account)             | Reference to Name of the Account (ICN) the case was created for                                |
| [Blue Diamond Account](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#bluediamond) | Boolean, indicates whether this account is a Blue Diamond Account                              |
| [Contact Name](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#contactname)         | Reference to Name of the Contact, the person on client side to work with to solve the case     |
| [Contact Phone](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#contactphone)       | Phone number of the Contact, taken from the Contact Profile                                    |
| [Contact Phone Extension](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#contactphoneext) | Extension of the Contacts Phone number, taken from Contact Profile                      |
| [Alternative Callback number](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#altcallback) | A second Phone number of the Contact, is not taken from the Contact, specific to this Case     |
| Contact Email                         | eMail address of the Contact, taken from the Contact profile                                   |
| Asset                                 | (TBD)                                                                                          |
| Case Number                           | The actual number of this case and a link to see the entire Case Hierarchy                     |
| Alert Comments                        | (TBD)                                                                                          |
| Account Priority                      | Special Programs Membership of the Account                                                     |
| Critical Situation Number             | Number of the Critical Situation                                                               |
| Customer Impact Event (New!)          | Boolean, indicates that the Case covers a Customer Impact event                                |
| Needs Attention (New!)                | Boolean, indicates that the Case needs to be looked at by the Owner or Coverage team           |
| Status                                | External, client facing Status field - the client will see this one on the Community Portal    |
| Internal Status                       | Internal, agent facing Status field - this field is driving the external status                |
| Severity Level                        | Severity as number followed by a textual description what the severity means                   |
| [Escalated](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#escalated) | Agent controlled flag that is triggering Like an escalation email to the escalation team members of the Support Mission |
| [Milestone Warning (New!)](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#mwarning) | Indicates whether there is a Milestone Warning on this Case |
| [Milestone Missed (New!)](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#mmissed) | Indicates whether any Milestone on the Case was ever missed during the entire Case Lifecycle |
| Legacy                                | String holding the Legacy Ticket information                                                   |
| Client Reference Number               | captures the client's defined reference number used by the client to track the case            |
| Country                               | Captures the country of the Account the case is associated with, taken from the Account        |
| Willing to communicate in English     | Boolean flag, indicates whether the client is Willing to communicate in English                |
| Ownership changes                     | Number of ownership changes this Case has experienced so far                                   |
| Next Contact Date (New!)              | Date on which the Agent intents to contact the client the next time (aka FUP date)             |

---
## <a id="owner" name="owner"></a>Case Owner

---
## <a id="account" name="account"></a>Account Name

---
## <a id="bluediamond" name="bluediamond"></a>Blue Diamond Account

---
## <a id="contactname" name="contactname"></a>Contact Name

---
## <a id="contactphone" name="contactphone"></a>Contact Phone

---
## <a id="contactphoneext" name="contactphoneext"></a>Contact Phone Extension

---
## <a id="altcallback" name="altcallback"></a>Alternative Callback number

---
## <a id="contactemail" name="contactemail"></a>Contact Email

---
## <a id="asset" name="asset"></a>Asset

---
## <a id="alertcomments" name="alertcomments"></a>Alert Comments

---
## <a id="accountprio" name="accountprio"></a>Account Priority

---
## <a id="critsit" name="critsit"></a>Critical Situation Number

---
## <a id="impactevent" name="impactevent"></a>Customer Impact Event

---
## <a id="attention" name="attention"></a>Needs Attention

---
## <a id="status" name="status"></a>Status

---
## <a id="istatus" name="istatus"></a>Internal Status

---
## <a id="sevlevel" name="sevlevel"></a>Severity Level

---
## <a id="escalated" name="escalated"></a>Escalated

| Characteristic         |                                        |
|------------------------|----------------------------------------|
| Data Type              | Boolean                                |
| Client Visible         | no                                     |
| On Case Page Layout    | yes, read-write                         |
| On Case View Layout    | yes ([how to use it on case views](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#filterLogicBoolean)) |
| Related Processes      | [Escalation Team](/dba-support/DBA-Education/#/DBA-Education/process/management/escalationTeam), [Page-out, Notification & Alerting](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/pageout) |

### Description
Beginning with Sprint 19, this field will no longer be checked by automated processes – it will be updated by users through the UI only. When checked, the red arrow will still continue to appear next the case number. When unchecked, the red arrow will still continue to disappear. 

![image](https://media.github.ibm.com/user/129959/files/311b96de-bb4d-11e8-867e-4181d1d4aad0) 

Like before, checking the Escalated checkbox will send an escalation email to the escalation team members on the support mission the case is associated with.

---
## <a id="mwarning" name="mwarning"></a>Milestone Warning

| Characteristic         |                                        |
|------------------------|----------------------------------------|
| Data Type              | Boolean                                |
| Client Visible         | no                                     |
| On Case Page Layout    | yes, read-only                         |
| On Case View Layout    | yes ([how to use it on case views](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#filterLogicBoolean)) |
| Related Processes      | tbd |

### Description
This new checkbox field will be populated by an automated process 30 minutes before the milestone target date is reached. This is not updateable by users and will be locked down. Once checked, the Milestone Warning field will remain checked. It will be positioned under the Escalated checkbox in order to keep escalation-related fields near each other. The escalation email alert that fires 30 minutes before a milestone is breached will continue to be sent out. Please note that these email alerts are sent in batches from Salesforce, and there could be a slight delay depending on when in the batch the Milestone Warning field becomes checked. Although the Milestone Missed checkbox will become checked 90 minutes into a Milestone, the email alert sent to the Escalation Teams are only for Severity 1 cases. 

Please note: Posting an *external* post on the case will stop the milestone timer

![image](https://media.github.ibm.com/user/129959/files/7080c6e0-bb4e-11e8-86a5-681edcbf0500)

---
## <a id="mmissed" name="mmissed"></a>Milestone Missed

| Characteristic         |                                        |
|------------------------|----------------------------------------|
| Data Type              | Boolean                                |
| Client Visible         | no                                     |
| On Case Page Layout    | yes, read-only                         |
| On Case View Layout    | yes ([how to use it on case views](/dba-support/DBA-Education/#/DBA-Education/process/case/fields#filterLogicBoolean)) |
| Related Processes      | tbd |

### Description
This new checkbox field will be populated by an automated process when the Milestone on the case is missed (i.e. violated). This is not updateable by users and will be locked down. Once checked, the Milestone Missed field will remain checked. It will be positioned under the Escalated checkbox in order to keep escalation-related fields near each other. No alert is sent when Milestone Missed is checked. 

![image](https://media.github.ibm.com/user/129959/files/a39b59f0-bb4e-11e8-8af9-58b52635a7a9)                     

---
## <a id="legacy" name="legacy"></a>Legacy

---
## <a id="reference" name="reference"></a>Client Reference Number  

---
## <a id="country" name="country"></a>Country 

---
## <a id="english" name="english"></a>Willing to communicate in English 

---
## <a id="ochanges" name="ochanges"></a>Ownership changes

---
## <a id="nextContact" name="nextContact"></a>Next Contact Date

--- 
# Filter Syntax on Case Views

## <a id="filterLogicBoolean" name="filterLogicBoolean"></a>Filter on a **Boolean** attribute

... please make an example + screenshot here

## <a id="filterLogicText" name="filterLogicText"></a>Filter on a **Text** attribute

## <a id="filterLogicDate" name="filterLogicDate"></a>Filter on a **Date** attribute

## <a id="filterLogicNumber" name="filterLogicNumber"></a>Filter on a **Number** attribute
