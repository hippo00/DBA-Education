
The Escalation Team can be configured on the Support Mission and is used for a number of events that cause attention of the Leadership team of the Mission. An Escalation team is essentially a list of eMail addresses which can represent **individual users**, **a group of people** (e.g. a slack channel with slack email address), or a **pager duty** email address.

## Configure the Escalation Team

* Navigate to your Support Mission to view/add/edit Escalation Team members
* Use the 'Add to Escalation Team' action to add a member
<img width="1273" alt="1111" src="https://media.github.ibm.com/user/129959/files/068fa900-7709-11e9-8160-7b17a32e72a6">

* Use the Escalation Team Members related list to view/edit current members
<img width="1299" alt="22222" src="https://media.github.ibm.com/user/129959/files/48b8ea80-7709-11e9-8619-e5cfd5b65771">

* To edit the details of an existing member select the Escalation record to bring up the record detail and select the 'Edit' button
  <img width="426" alt="3333" src="https://media.github.ibm.com/user/129959/files/53737f80-7709-11e9-8951-5e480cc197f0">
  <img width="1272" alt="4444" src="https://media.github.ibm.com/user/129959/files/89b0ff00-7709-11e9-8771-2c9ac5c45cba">



## Escalation notification

What conditions trigger escalation notification?

* A new Sev. 1 Case opened
* Severity of an existing Case changed to 1 (by customer or by support agent)
* 30 minutes before missing a Milestone of 2 hours
  * Sev 1: Milestone clock ticks 7x24
  * Sev 2/3/4: Milestone clock ticks M-F 8 AM – 5 PM EST only
* Auto-Case Assignment cannot assign a Case to anyone
  * No one available to accept a Case OR
  * Support agent declines to accept a Case
  * Applies to products that have enabled round-robin routing method of Case assignment
* Following activities on a Sev. 1 Case
  * A reply received from a customer
  * Diagnostic file/s received 
  * Case owner transfers the Case back to the mission

Please keep in mind that the trigger conditions are non-configurable at this time.

## Format of Escalation eMail

| Situation | eMail Example |
|-----------|---------------|
| New Severity 1 case is created or existing case is updated to Severity 1 | Reported: Severity 1 Case created or severity updated - {CaseNumber} for {Support_Mission} | 
| Customer adds new comment to Severity 1 case | Reported: Severity 1 Case updated by client - {CaseNumber} for {Support_Mission} |
| File is uploaded to Severity 1 case | Reported: Severity 1 Diagnostic file has been received - {CaseNumber} for {Support_Mission} |
| The Escalated checkbox is set to true, 90 or 120 Minute Milestone is missed. This can be a case of any Severity Level | Reported: {Severity Level} Case has been escalated - {CaseNumber} for {Support_Mission} |
| Severity 1 case is assigned to new owner that is a queue | Reported: Severity 1 Case reassigned to queue - {CaseNumber} for {Support_Mission} |
| Severity 1 case is set to "Client requests a callback" | Reported: Severity 1 Client requests a callback - {CaseNumber} for {Support_Mission} |

