
This section describes how to close a Case in Salesforce

As there is no closure template currently available please ensure that you review the initial problem description in the case details view and update it if necessary. This will help to find this case in the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/globalSearch">Salesforce Global Search</a>.

Close Case with Status Cancelled should only be used for the condition that no service is provided therefore no survey will be sent from this case.

### Step 1: Update ARM 
* Review the Assets you attached to the Case so far
* Attach missing assests
* Make sure all Assets attached to the Case are rated properly

See <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/arm">Evaluate and Attach Knowledge</a> for more details

### Step 2: Update Related Cases 
* Review Skill Cases, ensure any outstanding actions are complete (ie: Complete Defect work etc)
* If a collaboration is open inform the team you have the Collaboration with about Case closure

### Step 3: *Best Practice* - Final Case Update
Update the Case with a final update that includes the following:
* Problem Description
* Action Taken (short summary of key actions)
* Resolution

### Step 4: Closing the Case

To close the Case go to the Details View
![image](https://media.github.ibm.com/user/70336/files/c8708596-ad3b-11e8-917d-487dc97158c8)
and click on 'Close Case'
![image](https://media.github.ibm.com/user/70336/files/631bfc62-ac45-11e8-9c2a-eb572592f1fa)

### Fill in the template and click on Save 
![image](https://media.github.ibm.com/user/70336/files/36abd1d6-ad3d-11e8-8853-81cf48403108)
The required fields are marked with a red line on the left 

## Details on the Fields

### Service Performed
This is only necessary if a Service engagement has been made during the lifecycle of the Case . 
In that case set it to YES otherwise it defaults to NO
![image](https://media.github.ibm.com/user/70336/files/c1d531a6-ad35-11e8-8630-adb1bb7618b1)

#### Cancellation 
Cancellation is only allowed when the Case meets the No Survey Criteria. 

Reference: [No Survey Process](https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/cancelCase)

![image](https://media.github.ibm.com/user/70336/files/e41b8b98-ad35-11e8-85c8-12b050e67544)

#### Status and Resolution Description
Select the appropriate reason for closure
* Closed by IBM
* Closed by Customer
* Cancelled
Then add a detailed description of the resolution provided
![image](https://media.github.ibm.com/user/70336/files/90bdc8de-ad36-11e8-9d9f-448aafce7491)

## Case closed by Customer
As Cases can be closed by Customer as well it is necessary to update the Case afterwards to make sure ARM assets are attached and voted properly and to add a Resolution to the Case. This can be done without reopening the Case.  The field for Resolution Description can be edited in the Details View by double clicking the little pen on the right

![image](https://media.github.ibm.com/user/19331/files/b0e2cb82-b033-11e8-9341-f8db732eaafa)

* If a Skill Case is open make sure the Skill Case is closed as well (this should no longer happen as all Child-Cases close with the parent)
* If a Collaboration with L3 for example is open make sure that the team you collaborated with is also informed of the Case having been closed.

To avoid missing any Case closed by customer it is recommended to create a view to monitor Cases closed by Customer  

A View to monitor Cases Closed by Client could look like 
![image](https://media.github.ibm.com/user/70336/files/7256e43a-ad3f-11e8-8929-1c7928355a2f)

Add at least the following fields (depending on the setup for your support mission):
* Closed Date/Time
* Last Modified Date/Time
* Work Item Id
* Work Item Status
* Related Case Type

### Case reopen 
* Customers can reopen a closed case within 30 days from the closure of the case.
* Support Agents can reopen a closed case within 90 days from the closure of the case

## Related Pages
* <a href="https://mediacenter.ibm.com/media/SF-Video-CloseCaseReopenCase/1_liflfsx7" target="_blank">Training Video: Salesforce - Close And Reopen The Case</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/cancelCase">No Survey (how to cancel a case and trigger the no-survey process)</a>
