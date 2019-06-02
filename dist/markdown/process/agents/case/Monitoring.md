**Please note:** This document describes the Platform capabilities AFTER Sprint 18. There are a number of features currently in progress that will be deployed on Sep, 07th to make Queue Monitoring like described here possible.

---

"Queue" Monitoring is the process when an on- or off-shift Support Agent is responsible to watch incoming **Case updates** of his/her particular scope and react upon them (we call the Queue-monitoring agent "QM" from now on). The scope can be the full load of one or even many Support Missions or just a subset of teams or skills inside a Support Mission. The goal here is to make sure that IBM Support does not miss critical incoming updates from our clients where the expectation is that IBM reacts in time. 

--- 

## Events of interest for Monitoring
There is a number of events that can happen on a case and IBM support has to monitor those, like... 
* **Severity** has been changed (by the client)
* **Needs Attention** flag gets checked (by a remote SSR)
* **Status** on a parent case has flipped to "Client has replied", "Diagnostic File has been received", "Client requested a Callback", the new Skills-Case attribute **Parent Case Status** accordingly is set to one of these values
* **Status** on a skills case flipped to "SME needed" or "Diagnostic File has been received", the new **Child Cases Statuses** attribute accordingly contains one or many of these values
* The **Case Feed** contains a written request for a callback (we dont yet analyze the intent in a client reply so this still needs to be a manual effort by the Queue-monitoring Agent)
* Client **uploaded diagnostic** information
* A **milestone** was reached or about to be reached

--- 

## Case Attributes needed for Monitoring

| Field Name            | Description of use for Monitoring                                                                                                                                  |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Case Record Type**             | Text field indicating which record type (Parent = "Open Case Record Type", Skill = "Skills Case") the case is                                                                                                                                    |
| **Severity Level Number Formula** | displays the Severity of the Case                                                                                                                                                                                                                |
| **Internal Status**               | represents the IBM internal status of the Case                                                                                                                                                                                                   |
| **Child Case Statuses**           | this field contains a concatenated and comma-separated list of all childs case statuses in a single string. This attribute can be used to see if any Child case from the whole case family is in a status that needs the QMs attention           |
| **Parent Case Status**            | this field is available on the Skills Case page layouts and contains the parent case status. This attribute can be used on the "Skilled Mission" to see if the Parent case is in a state that needs attention                                    |
| **Needs Attention**               | this Boolean flag is primarily intended to be used by the QM or by a Field SSR (or anybody else who temporarily covered) to indicate to the Owner, that the case was touched in the absence of the actual Owner and that the Owner is expected to review the Case. |
|  **Must Gather Values** |  includes an indication whether "System down" (must be pre-configured on the product associated to the Case) is set - may require using contains in a view query                                                                                                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                                                  |
--- 

## Roles involved in Monitoring

- **QM** - one or many agents acting as "Queue" monitors, aka Quarterbacks. Their primary role is to watch the queue (which gets automatically refreshed after Sprint 18 is deployed), look at incoming updates and either flag cases for action by the Coverage team OR flag cases for action by the Owner. QMs could also be part of the Coverage team. 
- **Coverage** - one or many agents on a Weekend duty that are expected to handle PD/PR for cases that need coverage over the weekend. The Coverage team gets their backlog from the QM
- **Owner** - the actual case owner, could be part of the Coverage team if working on weekend shift or is only available on the next regular Week shift starting monday morning.

--- 

## Flows for QM 
The QM has to differentiate between two major scenarios :

### Week-Duty scenario
Queue Monitoring happening during regular business hours on a normal work day. No Coverage team is required since the actual Case owning Agents will be working. An update for a Case is coming in and the QM inspects it - he/she has to decide:

#### Action Required right now
* The QM checked Owner availability and got positive confirmation that the owner takes care of the Case. The QM flags the case as **Needs Attention**=true (with that the Case leaves his Monitoring case view), flips the Status to "IBM is working" and leaves the Case with the Owner (the proper response duty is with the Owner)
* If the QM could not get a hold of the Owner, he/she is expected to execute a proper follow-up with the client - which includes Post and Status updates (definitely has to use "IBM is working" unless more requests to the clients are made). When this is done, the QM sets the **Needs Attention** flag to true to indicate to the Owner that the QM has touched the case + to get the Case out of the QM case view.

#### Action Required later
* The QM flags the case as **Needs Attention**=true (with that the Case leaves his Monitoring case view)  flips the Status to "IBM is working" and leaves the Case with the Owner (the proper response duty is with the Owner)

### Weekend-Duty scenario 
Queue Monitoring happening during weekend hours. Potentially a Coverage team is around and we assume the actual Case owning Agents are not working. An update for a Case is coming in and the QM inspects it - he/she has to decide:

#### Action Required right now
* The QM checked Coverage team availability and got positive confirmation that one coverage team member can take care of the Case. The QM flags the case as **Needs Attention**=true (with that the Case leaves his Monitoring case view) and leaves the Case with the Coverage team without any additional update on the case (the status stays intact and the proper response duty is with the Coverage team)
* If the QM could not get a hold of a Coverage team member, he/she is expected to execute a proper follow-up with the client - which includes Post and Status updates (definitely has to use "IBM is working" unless more requests to the clients are made). When this is done, the QM sets the **Needs Attention** flag to true to indicate to the Owner that the QM has touched the case + to get the Case out of the QM case view.

### Case View for the QM
`where internalStatus contains "SME needed, New Case Opened, Client requested callback, diagnostic file received, client replied" && closed == false && NeedsAttention==false (+ whatever additional mission- or team-based critera you need)`

--- 

## Flow for the Coverage Team member
The Coverage Team member monitors his/her queue for Cases that are flagged with Severity 1 (for 24x7 coverage), **Needs Attention**==true and Case Status values that require IBM to pick it up. Coverage is expected to execute a proper follow-up with the client - which includes Post and Status updates (definitely has to use "IBM is working" unless more requests to the clients are made). 

Review the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement">Backlog Management​ & Case Prioritization</a> process for more details there.

### Case View for the Coverage Team member
`where Severity==1 || (NeedsAttention == true && internalStatus contains "SME needed, New Case Opened, Client requested callback, diagnostic file received, client replied") (+ whatever additional mission- or team-based critera you need)`

--- 

## Flow for the Owner
The owner defines his/her normal case views and expose the **Needs Attention** field to indicate whether Q-Coverage has touched their case - these cases should be looked at with priority. He/she has to work the case within the normal obligations IBM has to deliver support service.

Review the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement">Backlog Management​ & Case Prioritization</a> process for more details there.

--- 

## MPPC changes:
We are going to expose **Needs Attention** on MPPC - when someone flips it to true we change the state (in the UI only) to "IBM is Working" / when someone flips it to false, we don't touch the state at all.

![image](https://media.github.ibm.com/user/19331/files/6d1c776c-b4ee-11e8-85b1-66471a1acbda)

## Case Views:

Task fields cannot be pulled into case views (this will change with Lightning). However, the "Next Contact Date" field is on the case record and can easily be pulled into case views.

![image](https://media.github.ibm.com/user/95587/files/62ee6bf4-bfea-11e8-935e-61a3190aa385)

Once selected, the column will be added to the list view that you modified:

![image](https://media.github.ibm.com/user/95587/files/7360f60a-bfea-11e8-8cd5-6ac908383025)

A great place to see all the Tasks you are assigned is the Home page in the console. By scrolling to the bottom, you can see a list of all your Tasks, their due dates, statuses, and the cases they are for.

![image](https://media.github.ibm.com/user/95587/files/96cf84bc-bfea-11e8-81e0-384a316419f4)

--- 

## Auto-Update of Case views
Beginning with Sprint __, the platform monitors changes on the following fields and auto updates the case views when any these attributes change.

* case owner
* product
* support mission name
* support mission topic
* mission team
* title
* severity
* total agents recording
* Defect Information
* Client Situation Number

---

## Related Pages
<a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement">Backlog Management​ & Case Prioritization</a>
