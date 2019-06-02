# Pagerduty
PagerDuty is a key tool in helping IBM teams modernize their IT landscape. IBM Support teams can use PagerDuty to integrate with Salesforce for case escalation. Support team manager can follow the procedure below to complete the setup.
 
### PagerDuty Account
Every support agents and managers who will be in call-out rotation need to have a PagerDuty account. For a new support team, _support manager_ can follow the information from <a href="https://w3.ibm.com/help/#/article/pagerduty/pagerduty_license_request" target="_blank">PagerDuty license</a> to submit the license request.  

Once the account request is processed, PagerDuty will send invitation email for users to join. After join PagerDuty, users should follow the information to login to ibm.pagerduty.com to <a href="https://support.pagerduty.com/docs/configuring-a-user-profile#section-user-profiles" target="_blank">setup profile</a> with Contact Information (time zone, phone number, SMS) and Notification Rules.

### PagerDuty team
Support agents and manager in the same Support Mission are in the same PagerDuty team. One support agent or manager can be in more than one Support mission, therefore can be in more than one PagerDuty team.

### PagerDuty team-based Roles
Other than the manager who submit the PagerDuty account request, all users will have the base role of _Observers_ when first join. The request manager will have the PagerDuty **Manager** role and can grant other users in the team to have the Manger role for configuration setup or change. All other users in the team that will receive escalation call-out should have the **Responder** role. Follow the information from <a href="https://w3.ibm.com/help/#/article/pagerduty/pagerduty_tasks_newteams" target="_blank">Team-based Roles </a> to make the changes.

### PagerDuty Schedules
PagerDuty provides the feature to have multiple team Schedules to respond to different situation. Follow this document <a href="https://support.pagerduty.com/docs/first-schedule"> Create an On-Call Schedule</a> to define (a)Users:: specifying who respond to incidents; (b) Rotation Shift Type: specifying when these users rotate shifts; (c) Effective Date for Change: Specifying when the shift rotation starts. Each schedule can have multiple layers for teams from different time zone. Managers can also make schedule override to change the call-out schedule for certain duration. This is an example of 2-layer schedule with override:
<img width="989" alt="schedule" src="https://media.github.ibm.com/user/80246/files/929654e4-b36e-11e8-8fe4-b8ea598e68e4">

### PagerDuty Escalation Policy
Escalation policy defines to whom an incident is assigned immediately after it is triggered, and how much time you want to give the first responder to take action, and also when and to whom you want the incident escalated if it is not acted upon. The responder can be individual(s), or Schedule(s).  This is an example with multiple layers of escalation:
<img width="589" alt="escalation" src="https://media.github.ibm.com/user/80246/files/5bcc0678-b370-11e8-933a-2a22811aafe0">

### PagerDuty Services and Integrations
PagerDuty Services can monitor Event API or emails to trigger the defined Escalation Policies. Each Service has one Escalation Policy defined. We can define the eMail Integration in PagerDuty Services to handle the Salesforce escalation emails. There can be multiple Services in a PagerDuty team to handle different type of escalation.  Follow these steps to <a href="https://w3.ibm.com/help/#/article/pagerduty/pagerduty_services2">set up Services</a>.  This is an example of email integration:
 
<img width="549" alt="service1" src="https://media.github.ibm.com/user/80246/files/579313fc-b376-11e8-8b94-99f4b9895450">

For Support Mission wide incidents, the Integration Email should be added to Support Mission "Escalation Team" to receive case alerts. 
In the email Integration, we can define Email Filters by the email subject, sender, and email body. This is an example to accept Integration for email body with "Severity: Severity 1"

<img width="638" alt="integration" src="https://media.github.ibm.com/user/80246/files/2a14f89e-b378-11e8-96ff-a7dbcd112be0">

### PagerDuty Contacts and Support
Follow the information from  <a href="https://w3.ibm.com/help/#/article/pagerduty/pagerduty_contacts_support"> Help@IBM PagerDuty</a> page for additional contacts and support. 

--- 

## Related Pages:
* <a href="/dba-support/DBA-Education/#/DBA-Education/integrationpagerduty">PagerDuty integration into the Salesforce Platform</a>
* <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=cf0ae704-f9a6-4aa7-905a-d7697cd815ca">Pager Duty FAQ</a> 
* <a href="https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=8f0aca92-2010-4a32-914d-77dafc06c9cf#fullpageWidgetId=Wab3fd136e45b_4e42_b8fe_5d1f6bc71bb8&file=d891c8c0-3454-42ea-9c0a-cc2f4d2a042c">Pager Duty Deck</a> 
