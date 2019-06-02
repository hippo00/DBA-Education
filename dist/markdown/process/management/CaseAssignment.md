This document explains how to configure Auto-Assignment in OC2 for a Support Mission as an alternative to Omni-Channel or Manual Assignment. These assignment techniques can be combined in the same Support Mission but extra review is necessary to prevent conflicting assignment logic or processes.

### Auto Assignment Settings
Auto assignment is off by default. Once enabled the Support Mission Lead can define the limits of points, minutes to wait until next assignment and the points for each severity.

![image](https://media.github.ibm.com/user/19331/files/c03ea52a-c252-11e8-98ad-91c377e490a7)

### Auto Assignment Logic
The logic behind assignment is based on tracking an Agent’s Open Backlog Utilization Percent for a shift, Daily Backlog Utilization Percent and the Agent’s Most Recent Assignment. The Utilization Percentages are calculated by dividing the Agent’s Current Points by their Max points. Once either limit is exceeded then the assignment logic will not assign to the agent until Current Open Backlog Points is below the maximum or a new shift begins. As cases are closed or transferred the points associated with the severity are deducted from the Agent's Current Open Backlog Points. Case points are never deducted from Current Daily Assigned Points. The daily limit prevents agents from being assigned too many cases in a shift. Once limits are exceeded, manual intervention is currently needed to either: increase the daily or total maximum, or manually assign cases to agents. Once Current Daily Assigned Points limit is exceeded, even transferring or closing cases will not enable assignment for that agent until the next shift.

### Assignment Priority
Next best agent is determined by a Time or Capacity-based assignment logic. This is configured on the Support Mission details page. 
* 1) Capacity: this logic first looks at Backlog Percentage, then Daily Backlog Percentage, and then Most Recent Assignment
* 2) Time-Based: this logic looks at Most Recent Assignment first, then Backlog Percentage, and then Daily Backlog Percentage


### Assignment Wait Time
The “Assignment Wait time” sets the time in minutes that a new case coming into the queue remains untouched by the assignment logic. With that a soft combination of a case pull and push model can be realized. For example, if the “Assignment Wait time” is set to 30mins: Agents can self-assign/manually pick the case during this time. After spending 30 minutes unassigned in the queue, it will be assigned automatically.

### Omni-Channel Online Status Icon
When an agent goes online in Omni-channel the Online Status column on the Agent Assignment Profile related list will display a blue, person Icon. This means they are available to have cases assigned to them via Auto Assignment and/or Omni-channel routing. The Online Status Icon will return to a gray, person icon when the agent is set to Offline, Away, or Busy in the Omni-channel widget. Set agents as Out of Office directly on the Agent Assignment Profile to disable an agent from Auto-Assignment. When an agent is marked as OOO the person icon will show red and the agent will not be assigned any cases from the Auto Assignment engine regardless of Mission Team configuration. The icons are not updated automatically with agents’ status, a manual refresh must be performed.

![image](https://media.github.ibm.com/user/129959/files/bfe7022c-d614-11e8-8107-0365aeb6aac6)


### Instructions to Set Up Auto Assignment

* Ensure that the Support Mission owner is a queue and Agents are members of Support Mission.
  ![image](https://media.github.ibm.com/user/19331/files/b0f871bc-c253-11e8-99e3-515cb057d7bf)

* Populate values in the Assignment Configuration section on the Support Mission details page
  ![image](https://media.github.ibm.com/user/19331/files/c03ea52a-c252-11e8-98ad-91c377e490a7)

* Agents can be added to the Agent Assignment Profile list from the quick action ‘New Agent Assignment Profile’ on the Support Mission feed view. Only Agents listed will be used by the new Assignment logic.
  ![image](https://media.github.ibm.com/user/19331/files/28c88a74-c254-11e8-95cb-cadcd15ea8c4)

* When a Case is routed to a Mission Team that is enabled for Auto-Assign, the Case will only be assigned to agents in that Mission Team who also have Agent Assignment Profiles.
  ![image](https://media.github.ibm.com/user/19331/files/6a76b78e-c254-11e8-96d6-85dc758a6877)

* When an agent is online in Omni-Channel he/she is available to have a case assigned:
  ![image](https://media.github.ibm.com/user/19331/files/abc1b144-c254-11e8-91b8-1cb28f7b44a9)

* Every 5 minutes, the Auto Assign job will run and process any Support Missions and all Mission Teams with Assignment Engine enabled. The availability logic will also take in consideration the Assignment points each agent has left for the day. The defaults of these points are configured for each case severity at the main Support Mission Level. Severity Point values express how much effort is tied to a case of the specific severity in average.
  ![image](https://media.github.ibm.com/user/19331/files/ed7f73dc-c254-11e8-9150-d21d9fc41730)

* After Auto Assignment runs, the Agents get their respective Assignment points, the Case Ownership is changed to the proper agent and the Agent Assignment Profile is updated. 
  ![image](https://media.github.ibm.com/user/19331/files/18586898-c255-11e8-8ae1-4bc5025d4a63)

* Agents will be assigned new Cases from the job until they reach the limit for Daily or Maximum Backlog Points, while online and after the time delay for Next Assignment Time.

### Assignment Logic Details for "Capacity":
The order for agent assignment is determined as follows: 
* 1) Agent’s are first sorted by Agent’s Backlog Percentage in ascending order, meaning agents who have the lowest Backlog Percentage will be higher priority for the next case assignment
* 2) Then by Agent’s with lowest Daily Backlog Percentage in ascending order
* 3) In the even of a tie on Backlog Percentage and Daily Backlog Percentage, Most Recent Assignment would then be used for assignment

### Assignment Logic Details for "Time-Based":
* 1) Agent’s are first sorted by Agent’s Most Recent Assignment, meaning agents who have the longest time since their last Assignment will be higher priority for the next case assignment
* 2) Then by Agent’s with lowest Backlog Percentage in ascending order
* 3) In the even of a tie on Most Recent Assignment and Backlog Percentage, Daily Backlog Percentage would then be used for assignment

Once this list of agents has been sorted, we will use the following criteria to determine an agent’s eligibility to receive a case: 
* a) The agent assignment profile current open backlog points has NOT exceeded the agent assignment profile max open backlog points.
* b) If the agent's assignment profile max open backlog points is 0, use the support mission max open backlog points.
* c) The agent assignment profile current daily assigned points has NOT exceeded the agent assignment profile max daily assigned points.
* d) If the agent assignment profile max daily assigned points is 0, use the support mission max daily assigned points.
* e) If the case is designated as ‘Severity 1’ then agent will ONLY be eligible to receive the case if the ‘Can Work Sev 1s’ checkbox is checked on the agent’s assignment profile.
* f) The agent must be a member of the queue that owns the case.
* g) The agent's Most Recent Assignment Time added to the support mission's Next Assignment Time in Minutes has exceeded the current time. 

Entering a ‘-1’ into the Current Open Backlog Points field will recalculate the agent’s total open cases and update the field. This recalculation looks at any cases in the support mission that were assigned to an agent manually or by the Assignment Engine. This means it omits Omni-Channel routed cases.

Omni-Channel routed cases are not reflected in an agent’s Daily or Backlog points. Since Omni-Channel routed cases do not follow the rules of the Assignment Engine, they do not obey the Max points set in an Agents Assignment profile.


