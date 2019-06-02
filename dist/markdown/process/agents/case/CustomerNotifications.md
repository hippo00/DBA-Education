This document describes how Customers experience notifications that get created based on IBM Agent actions on Cases. 

Customers can control certain notifications now through their profile settings. The customer can opt in or out of receiving case notifications for the following use cases:
* Case Created notification
* Case Closed notification
* Agent Posts to Case (“Public" access type)
* Diagnostic File Uploaded to case and associated error messages (if applicable). Files uploaded through Blue Diamond will not respect the client’s settings on receiving Diagnostic file alerts. If uploaded through Blue Diamond, Blue Diamond will send a notification until Blue Diamond is fully integrated with the Salesforce email process.

One major change is that customers will get a notification for each agent post that is clientfacing ("Public" access type). This will be the default behavior, and customers can opt out of notifications for agent posts in their profile in the community. 

One notification that all customers will receive is an email alert when their case status is set to "Awaiting your feedback." Customers are not able to opt out of this notification. 

Agents can find a customer’s notification preferences by navigating to their contact record. Please note that agents should only change customer's notification settings with permission from the customer. The settings are found in a section called "Notification Settings" on the "Case Contact" page. Please see below screenshot:

![image](https://media.github.ibm.com/user/19331/files/be28a2a6-b666-11e8-810f-760d5cb853d4)

If the customer has a checkbox checked in the "Notification Settings" of their contact record, it means that they should receive a notification for that use case. For instance, if "Case opens"
checkbox is checked, the customer will receive a notification when they create a case from the community. If it is not checked, they will not receive a notification when they create a case from the community. There is help text included on each field to indicate the use case. To edit a customer’s notification preferences, with client approval, simply click "Edit" on the contact page and either check or uncheck the checkboxes in the "Notifications Settings" section

## Status Changes
A customer facing post on a case by an agent will no longer automatically change the status to "Awaiting your feedback". Instead, the agent will need to manually change the Internal Status
to "Waiting on Client", which will in turn update the Status to "Awaiting your feedback". The agent can update the Internal Status from the feed view with the "Post and Update Status" quick Action:

![image](https://media.github.ibm.com/user/19331/files/433b544a-b665-11e8-9e55-6daa64e81155)

This means that the "Awaiting your feedback" status is now set through a manual process instead of being set by a post by the agent to "Public". This means that the client will
only see that IBM is awaiting their feedback when the agent manually sets the internal status – it’s no longer controlled by an agent posting to "Public". 

Support Agents and Support Managers will no longer be able to change the Status field on case. Instead, they will use the “Update Status” quick action to update the internal status as
mentioned above. They can also update the internal status from the case Details page.

## External / Internal Status Mapping

| Internal Status                   | External Status        | Client Notification                                        |
|-----------------------------------|------------------------|------------------------------------------------------------|
| New Case Opened                   | New Case Case          | created notification sent to customer                      |
| Client has Replied                | Waiting for IBM        | N/A                                                        |
| Diagnostic File has been received | Waiting for IBM        | N/A (Ecurep handles Diagnostic notifications to customers) |
| IBM is Working                    | IBM is Working         | N/A                                                        |
| Waiting on Client                 | Awaiting your feedback | "Awaiting your feedback" notification sent to customer     |
| Translation Needed                | Waiting for IBM        | N/A                                                        |
| Client Requests a Callback        | Waiting for IBM        | N/A                                                        |
| Waiting on IBM software update    | IBM is Working         | N/A                                                        |

## eMail to Case (E2C)
Customer preferences on notifications do not apply to email to case, as the majority are unentitled and do not have a contact associated with the case. However, we are restricting agents from updating the status on E2C. They will also use the “Update Status” quick action we added. Additionally, sending an email as the agent will NOT automatically update the status to “Awaiting your feedback.” Just like normal cases, agents will need to update the internal status to “Waiting on client” in order for the status to change to “Awaiting your feedback.” 

## Skills Case
These are internal cases, so customer preferences for notifications do not affect these cases. However, the status will no longer be able to be updated and the “Update Status” quick action should be used to update the Internal Status. 

