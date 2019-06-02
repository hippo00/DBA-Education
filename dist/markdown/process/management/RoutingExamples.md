
This document comes with a number of examples and scenarios and is supposed to help Support Mission Leaders and Support Managwers to configure Routing in CSP.

* [Configure Mission Team](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#configure)
* [Assignment and Routing Options](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#options)
* [Priority](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#priority)
* [Example 1: Level 2 Skill Manual Pick Mission Team](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#example1)
* [Example 2: Level 3 Skill Manual Pick Mission Team](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#example2)
* [Example 3: Translation or Geo-Specific Manual Pick Mission Team](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#example3)
* [Example 4: Level 2 Skill Auto-Assignment Mission Team](/dba-support/DBA-Education/#/DBA-Education/process/management/routingExamples#example4)

---

## <a id="configure" name="configure"></a>Configure Mission Team

<a href="/dba-support/DBA-Education/#/DBA-Education/process/management/teamRouting">Configure Mission Teams</a> in the Support Mission, on the Teams tab. Use the drop-down to Edit Mission Team Details or Add Mission Team Member. Note that for the Mission Team to be assigned, it must be Active and have at least one Mission Team Member added.

![image](https://media.github.ibm.com/user/42891/files/20c145fe-c8a9-11e8-836d-b5cf14e07a79)

---

## <a id="options" name="options"></a>Assignment and Routing Options

If the Mission Team will be using Auto-assignment meaning that cases will be automatically assigned to an individual Agent as the Owner, you can optionally select Ignore Agent Capacity (Assignment) and/or Ignore Agent Online Status (Assignment).

- By default, cases will be auto-assigned to an individual Agent as the Owner only when they are not over Capacity on their current case load. If you wish for cases to be assigned an individual agent as the owner regardless of agent capacity, select Ignore Agent Capacity (Assignment).
- By default, cases will be auto-assigned to an individual Agent as the Owner only when the Agent is Available for Cases in the Omni-Channel. If cases should be assigned to an individual when they are not signed into the Omni-channel, select Ignore Agent Online Status (Assignment)

If the Mission Team should be assigned regardless of Agent Status, you can optionally select Ignore Agent Capacity (Routing) and/or Ignore Agent Online Status (Routing)

- By default, the Mission Team is assigned only when the Agents in the mission team have capacity and are online in the Omni-channel.
- Select Ignore Agent Capacity (Routing) to assign the Mission Team even when the Agents in the Mission Team do not have the Capacity.
- Select Ignore Agent Online Status (Routing) to assign the Mission Team even when the Agents in the Mission Team are not online Available for Cases in Omni-channel.
- For Manual Pick Mission Teams, we suggest checking both Ignore Agent Capacity (Routing) and Ignore Agent Online Status (Routing).

![image](https://media.github.ibm.com/user/42891/files/4547aeae-c8a9-11e8-9956-0b6f90ae784f)

---

## <a id="priority" name="priority"></a>Priority

The Priority of the Mission Teams is important - the first Team that matches the case will be assigned.

When assigning priority use the following:

- Give Level 3 Mission Teams the highest priority, so skill cases will go directly to Level 3 Support
- Give Account , AVP, or Premium Support Mission Teams next priority, so they will be assigned to Account specific teams.
- Give Translation or Geo-Specific Mission Teams next priority or assign certain skills to translation teams, so non-L3 cases will be sent for translation
- Give Product Teams next priority, to assign product SMEs
- Give Level 2 Mission Teams the lowest priority, so they will be assigned if no other teams match.

The Priority must be a unique value. As a Best Practice, put a gap of at least 10 between groups to allow for future changes.

![image](https://media.github.ibm.com/user/42891/files/9e8293bc-c8a9-11e8-9fab-50b043b71e70)

---

## <a id="example1" name="example1"></a>Example 1: Level 2 Skill Manual Pick Mission Team

The following configuration shows a Manual Pick Level 2 Mission Team. The Mission Team will be assigned when the Skill is set in the case.

Skill can be set:

- Automatically if the Support Mission is using Watson Skill Suggestions
- Manually with the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/reassignment">(Re)-Assignment</a> tab on the Case Feed 

Post Migration of an L2 Manual Pick Mission Team

- Set the Mission Team to Active
- Check Ignore Agent Capacity (Routing)
- Check Ignore Agent Online Status (Routing)
- Change Priority - the case will be assigned to the first priority team it matches, so set any L3 Mission Teams or Translation Teams as higher priority.
- Assign Users to the Mission Team if needed. Currently assigned users will be migrated from the routing rules. All Mission Teams must have at least one user assigned or cases cannot be transferred to that Mission Team.

A Support Skill NIT L2 was migrated and assigned to this Mission Team.

![image](https://media.github.ibm.com/user/42891/files/13f4fc7a-c8aa-11e8-9a6a-9ebafcf6dd42)
![image](https://media.github.ibm.com/user/42891/files/1f7f3f60-c8aa-11e8-9675-a5d4f11010e9)
![image](https://media.github.ibm.com/user/42891/files/2a193214-c8aa-11e8-8900-fa20d32a3d69)

---

## <a id="example2" name="example2"></a>Example 2: Level 3 Skill Manual Pick Mission Team

The following configuration shows a Manual Pick Level 3 Mission Team. The Mission Team will be assigned when a skill case is created to the Level 3 Skill

Post Migration of an L2 Manual Pick Mission Team

- Set the Mission Team to Active
- Check Ignore Agent Capacity (Routing)
- Check Ignore Agent Online Status (Routing)
- Change Priority - the case will be assigned to the first priority team it matches, so set any L3 Mission Teams or Translation Teams as higher priority.
- Assign Users to the Mission Team if needed. Currently assigned users will be migrated from the routing rules. All Mission Teams must have at least one user assigned or cases cannot be transferred to that Mission Team.

A Support Skill NIT L3 was migrated and assigned to this Mission Team.
![image](https://media.github.ibm.com/user/42891/files/4ef687f8-c8aa-11e8-9a6b-1f87d4e13028)
![image](https://media.github.ibm.com/user/42891/files/53e469ba-c8aa-11e8-88f7-02e7b754b8d7)
![image](https://media.github.ibm.com/user/42891/files/5872ec22-c8aa-11e8-80e2-673a734133b2) 

---

## <a id="example3" name="example3"></a>Example 3: Translation or Geo-Specific Manual Pick Mission Team

For translation, the Mission Team can be set to automatically assign the case to the Translation Mission Team when it is created based on Region, or a case can be sent for translation manually by changing the Mission Team. 

Post Migration of a Translation Manual Pick Mission Team

- Set the Mission Team to Active
- Configure Ignore Agent Capacity (Routing) - If the case should be reviewed and manually sent for translation by L2, leave Ignore Agent Capacity (Routing) unchecked. If the case should be automatically sent for translation when opened based on Region, check Ignore Agent Capacity (Routing).
- Check Ignore Agent Online Status (Routing) - If the case should be reviewed and manually sent for translation by L2, leave Ignore Agent Online Status (Routing) unchecked. If the case should be automatically sent for translation when opened based on Region, check Ignore Agent Online Status (Routing).
- Change Priority - the case will be assigned to the first priority team it matches, so set any L3 Mission Teams with highest priority, then Translation Teams, and then L2 teams.
- Assign skills - optionally if Watson Skill Stamping is used in the Support Mission, assign the L2 stamped skills 
- Assign Users to the Mission Team if needed. Currently assigned users will be migrated from the routing rules. All Mission Teams must have at least one user assigned or cases cannot be transferred to that Mission Team.

The following configuration shows a Manual Pick Translation Mission Team. When a case is created by a client in the matching Region or Country, the Mission Team will be assigned automatically. The Account Region LA was selected during migration.

![image](https://media.github.ibm.com/user/42891/files/8d86139e-c8aa-11e8-9303-933f0ca8c00e)
![image](https://media.github.ibm.com/user/42891/files/92614e1a-c8aa-11e8-9a43-4139fa0784a5)
![image](https://media.github.ibm.com/user/42891/files/9690baca-c8aa-11e8-9aac-80e58de3d5d5)

---

## <a id="example4" name="example4"></a>Example 4: Level 2 Skill Auto-Assignment Mission Team

The following configuration shows a Auto-Assignment Level 2 Mission Team. The Mission Team will be assigned when the Skill is set in the case.

Auto-assignment requires additional Support Mission configuration. See <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/caseAssignment">Case Assignment</a>

Skill can be set:

- Automatically if the Support Mission is using Watson Skill Suggestions
- Manually with the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/reassignment">(Re)-Assignment</a> tab on the Case Feed 

Post Migration of an L2 Auto-Assignment Mission Team

- Set the Support Mission Assignment Configuration
- Create an Agent Assignment Profile for Every Agent that will be automatically assigned
- Set the Mission Team to Active
- Check Ignore Agent Capacity (Assignment) if cases should be assigned to an agent when the agent's case capacity is exceeded
- Check Ignore Agent Online Status (Assignment) if cases should be assigned to an agent when the agent's is not online Available for Cases in Omni-Channel
- Check Ignore Agent Capacity (Routing) if the Mission Team should be assigned to the case when the team's agent capacity is exceeded
- Check Ignore Agent Capacity (Routing) if the Mission Team should be assigned to the case when the there are no agents online Available for Cases in Omni-Channel

A Support Skill Runtime was migrated and assigned to this Mission Team.

### Set the Support Mission Assignment Configuration Assignment Priority to Time Based or Capacity.

- Capacity routing compares the Agents assigned cases point value to the Max Daily Assigned Points and Max Open Backlog Points values. Once the Max Daily Assigned Points or Max Open Backlog Points is exceeded, no new cases will be assigned to that agent. If using Capacity, uncheck Ignore Agent Capacity (Assignment) and optionally uncheck Ignore Agent Capacity (Routing) in the Mission Team.
- Time Based routing will wait the Assignment Wait Time for the team to manually assign the case to an Owner. If the Assignment Wait Time is exceeded, the Owner will be automatically assigned based on the Mission Team.

![image](https://media.github.ibm.com/user/42891/files/faeef3c4-c8aa-11e8-829a-4366492d5249)

### Create an Agent Assignment Profile for Every Agent Case Owner

On Support Mission Details, go to Agent Assignment Profiles. Create New Agent Assignment Profile for every Agent that will own cases.
![image](https://media.github.ibm.com/user/42891/files/07aeddcc-c8ab-11e8-95ad-9106af38b4b7)

### Configure the Mission Team

Ensure the Assignment Method is set to Auto-Assign
![image](https://media.github.ibm.com/user/42891/files/17eda16e-c8ab-11e8-9214-cfdee767af43)
![image](https://media.github.ibm.com/user/42891/files/1db574dc-c8ab-11e8-8bf6-60f43e07d669)
![image](https://media.github.ibm.com/user/42891/files/2296d554-c8ab-11e8-9f83-06226fb75cc6)

---

## Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/teamRouting">Configure Teams and Routing</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/management/caseAssignment">Configure Auto-Assignment</a>






 