Salesforce for Support currently supports the following roles:
 * **Support Agent** - person that is part of the IBM Support org (or its partner orgs) with the need to see and work cases 
 * **Support Team Leader** - person that is leading a group of Support Agents, with an appropriate view on Cases, Reporting and Support Mission Control
 * **Support Manager** - Manager of a Support Department, same level of capabilities like Team Leader
 * **Support Mission Leader** - Manager of a Support Mission, same level of capabilities like Team Leader
 * **Support Upline** - support executive with unlimited access to Cases and Reporting. Support Upline is intended for and reserved for support executives. If your BluePages profile does not indicate that you reside within your organization's executive reporting chain, a request for this access will likely be rejected. Please review our implementation of IBM's Need2Know policy <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/coreConcepts/need2know" target="_blank">here.</a> For information on how to properly obtain access to data in your scope, go <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/access " target="_blank">here.</a> 
 * **Service Planner** - person to create and manage elements on the product taxonmy
 * **AVP** - Accelerated Value Program member, same level of capabilities like Support Manager
 * **Level 0** - person working for the Call Entry centers, taking call and opening Cases on behalf of IBMs clients (requires pre-approval by the IBM TSS organization)
 * **Situation Management** - person working as a resolver of critical situations with full access to Cases in Salesforce (requires pre-approval by the IBM CSPO organization)
 * **Platform Support** - person that is part of the Support Transformation Help Desk team (requires pre-approval by the IBM Support Transformation organization) 
 * **Field Support Agent** - person working in the field, dispatched on site to customer locations to satisfy hardware requests (requires pre-approval)
 * **Control Center - Dispatcher** - person who receives field service requests and manages the dispatch of field support agents and resources (requires pre-approval)

**To view your assigned role go to the <a href="https://w3-03.ibm.com/finance/access/accessView.wss" target="_blank">View Access</a> page on OneTeam.**

## Case Management

| Role Name                                                                                      | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|------------------------------------------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseAssignment">Receive</a>, <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/read">read</a>, <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate">update</a> and <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/closure">close</a> cases                                                             |       X       |          X          |        X        |            X           |        X       |        X        |  X  |    X    |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseUpdate">Update contact and account information on a case</a>                                               |       X       |          X          |        X        |            X           |        X       |        X        |  X  |    X    |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/search">Use "search" to find knowledge, historic cases on the platform and on legacy</a>                   |       X       |          X          |        X        |            X           |        X       |        X        |  X  |    X    |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseAssignment">Engineer on duty mode to perform work assignments, assign a case to the right support engineer</a> |       X       |          X          |        X        |            X           |        X       |        X        |  X  |    X    |           X          |

## Case Assignment
| Role Name                                                         | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|-------------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| Configure <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/skills">skills</a>, <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/teamRouting">team routing</a> and <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/caseAssignment">assignment rules</a>                                        |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| Add/change/delete asset categories           |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/membership">Add/change/delete virtual teams and assign team members and roles</a> |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |

## Support Mission Management

| Role Name                                                          | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|--------------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/membership">Add and remove users from Support Missions</a>                         |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/caseAssignment">Manage Assignment Configuration</a>                                    |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| Create Escalation Team members                                     |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/teamRouting">Create and configure routing rules</a>                                 |               | X                   | X               | X                      | X              | X               | X   |         | X                    |
| Create and configure <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/productConfig">product community pages</a> and <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/mustGathers">MustGather fields</a> |               | X                   | X               | X                      | X              | X               | X   |         | X                    |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/remoteRepository">Create and configure Remote Repositories</a>                           |               | X                   | X               | X                      | X              | X               | X   |         | X                    |

## Access

| Role Name                                                                                                                    | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/access">Access to all cases, accounts and contacts associated with the Support Missions, Case Teams and Account Teams they belong to</a> |       X       |          X          |        X        |            X           |        X       |        X        |  X  |    X    |           X          |
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/access">Access to all cases, accounts and contacts</a>                                                                                   |               |                     |                 |                        |        X       |                 |     |    X    |           X          |

## Product Management

| Role Name                                                                                                                               | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/case/productConfig">Add/change elements of the "product association" list - thats the list of products that is used to route cases into the Support Mission</a> |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |

## Reporting

| Role Name                                                  | Support Agent | Support Team Leader | Support Manager | Support Mission Leader | Support Upline | Service Planner | AVP | Level 0 | Situation Management |
|------------------------------------------------------------|---------------|---------------------|-----------------|------------------------|----------------|-----------------|-----|---------|----------------------|
| Pull personal reports                                      |               |          X          |        X        |            X           |        X       |        X        |  X  |         |           X          |
| View the list of cases for support missions they belong to | X             | X                   | X               | X                      | X              | X               | X   | X       | X                    |

