The case lifecycle can be seen in six different stages:

<img src="https://media.github.ibm.com/user/19331/files/615c14f4-a608-11e8-9a9d-c3b890b5d4b7" width="800">

### New or Reopened
This is rather a short stage that exists only when the case was just created or reopened and no other logic was executed yet.

Entitlement information is related to this topic.  More information about Entitlement can be found on the Case Entitlement page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/case/entitlementhere." target="_blank">here.</a>

### Reopening a Case
Clients are able to request to have a case re-opened up to 30 days after the case was closed.  For Support Agents, they may re-open a case within 90 days after the case was originally closed.

### Routing & Assignment
On this stage we're trying to fulfill the Opel vision concept "bring the work to the right engineer on the most direct path". We use the following steps to accomplish this:

A case is coming in with a product associated to it
which we use to identify the owning Support Mission which we flag on the "Support Mission" attribute and put this SM entry Queue into the owner field. This step is also known as Support Mission routing. On the SM level, we have the full population of this mission as potential target engineers to receive the case, so we need to get more specific.
The Watson Classification runs and enriches the Case with additional attributes like Skill (that is required to solve a case).
When a Mission has Team routing configured, Salesforce identifies the appropriate target team and puts it into the "Mission team" attribute. The group of agents that could take the case is much smaller now and (depending on the rules that have been configured when setting up the teams) they all are supposed to be good matches to receive the case.
Depending on the assignment strategy that is configured for the team, agents can take the cases (manual pick strategy), Salesforce can automatically assign  (auto-assignment strategy) or a hybrid of both (manual pick for some time, then auto-assign to make sure we don't violate SLOs). On the Auto-Assignment strategy, different characteristics on the agent level are used (like availability in Omni, backlog, relative capacity) to calculate who of the agents in the target team is the next who receives the case.
This flow looks like this:

<img src="https://media.github.ibm.com/user/19331/files/851c8e0a-a608-11e8-93da-5d6f64de4634" width="800">

more details on the TecSpec for <a href="https://ibm.box.com/v/tecspec-routing-and-assignment" target="_blank">Routing and Assignment OC2</a>

### Problem Determination
This stage of the case lifecycle is the most work-intensive primarily on IBM side, often also on client side as it covers any step that needs to be taken on any actor side to **determine the problem and find its root cause**. Once the root cause is found, the lifecycle moves into the "Problem Resolution" stage. The essential activities for IBM are around working with the client contact to gather sufficient information to start determining the problem including questions how to handle client data and run reproductions. However we also consider several organizational aspects happening in this stage, which are topics like Case Prioritization & Backlog Management,  Coverage, Collaboration & Swarming, Translation a.s.o. 

### Problem Resolution
This lifecycle stage enters when we know what the problem is, herewith it covers any activity and process that any actor who's participating on the case can or has to do to apply the solution and herewith solve the problem. A solution can vary in its nature (workaround, defect, answer given) and who's actually supposed to implement it (client contact, AVP, Services, Field Service, Lab Service?). When the problem is confirmed to be a product Defect, Defect Management moves into the central aspect of Problem Resolution as a parallel workstream to the Case. The Problem resolution stage ends when the client confirms the problem he addressed in the case is solved.

### Wrap Up
This stage covers problem and solution summary, retro-perspective, case reviews, creation of Knowledge articles and any other activity IBM support is doing to learn from the problem and its solution. 

### Closed
This is the final stage of the case lifecycle, which assumes that any step needed to properly solve and wrap-up the case was performed. It still allows to add comments on the case and edit/update the problem solution summary


