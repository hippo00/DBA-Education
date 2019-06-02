## PagerDuty setup to receive escalation page-out
Support agents need to have the PagerDuty account and profile setup in order to receive escalation page-out. The PagerDuty license request should be submitted by support mission integration manager. Support managers can follow the information from <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/pagerDuty">Pager Duty config</a> on how to request license.

### Login to PagerDuty and set up user profile  
Go to <a href="https://ibm.pagerduty.com/sign_in" target="_blank">IBM PagerDuty</a> and click on 
<img width="326" alt="pagerduty-signin" src="https://media.github.ibm.com/user/80246/files/9a62481a-b6a5-11e8-9b65-05dc7758e4ad">
to login with IBM intranet ID.

If you are getting "Unable to find user [email] in PagerDuty account for ibm.pagerduty.com", contact your support mission integration manager for account request.

After login to ibm.pagerduty.com, click on the profile icon at the upper-right corner and select the My Profile from the drop-down
<img width="381" alt="myprofile" src="https://media.github.ibm.com/user/80246/files/311b8cde-b6a7-11e8-8972-6772cf7c9602">

### First section to update is **Contact Information**
<img width="608" alt="contactinfo" src="https://media.github.ibm.com/user/80246/files/20b2f2de-b6ab-11e8-9642-aad11060cbce">


* (a) Phone: phone number(s) can be used for voice call in Notification Rules
* (b) SMS: mobile device number(s) can be used for text messaging in Notification Rules
* (c) Email: email address to receive the full escalation email from Salesforce. Don't use personal accounts, such as Hotmail or Gmail, as notification method. More details in <a href="https://w3.ibm.com/help/#/article/pagerduty/pagerduty_security_guidelines?requestedTopicId=pagerduty_license_request" target="_blank">PagerDuty Security guideline</a>.
* You can click on the [test] button to see how the real notification will look like.

### Next section to update is **Notification Rules**
This is the area you can configure where and when to receive notification when an incident is assigned to you. The high-urgency incidents notification rules are critical as they are used for severity 1 escalation. Follow the steps to add the notification rules:

* Select Add Notification Rule
* Enter the number of minutes you would like to pass between the moment an incident is assigned to you and when PagerDuty sends the notification. The default is 0 minute (notify immediately).
* Select the contact method you would like to be notified on
* Click Save to update 

Here is an example:
![image](https://media.github.ibm.com/user/80246/files/9eb7437e-b6b0-11e8-90b8-19083d7eb2ac)


You're now all set to receive Notification & Alerts from Pagerduty.

### Response to PagerDuty alerts
PagerDuty will send out alert to the on-call support agent or manager with the 3 options:
* **Acknowledge**  
This option indicates you are taking ownership of the issue and will stop the notification from escalation. 
* **Escalate**
This option means this incident should be escalated to the next level of on-call person / schedule based on the escalation policy.
* **Resolve**
This option will change the PagerDuty incident to Resolved state. This indicates the issue is resolved or no longer needs attention and it will stop the notification from escalation.

The screenshots below show example of how the message and options are sent:
<img width="206" alt="sms" src="https://media.github.ibm.com/user/80246/files/bb2f7c4c-b75f-11e8-914a-afd4ce7452d7">
<img width="430" alt="phonecall" src="https://media.github.ibm.com/user/80246/files/c1b3ca6e-b75f-11e8-9b78-5752c4d236eb">
<img width="1322" alt="web" src="https://media.github.ibm.com/user/80246/files/c59a727c-b75f-11e8-9c1c-9e8d0472216a">


## Related Pages:
* <a href="/dba-support/DBA-Education/#/DBA-Education/integrationpagerduty">PagerDuty integration into the Salesforce Platform</a>
* <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=cf0ae704-f9a6-4aa7-905a-d7697cd815ca">Pager Duty FAQ</a> 
* <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=d891c8c0-3454-42ea-9c0a-cc2f4d2a042c">Pager Duty Deck</a> 