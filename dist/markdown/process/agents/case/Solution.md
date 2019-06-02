Version: March 6, 2019
Once a solution for the Problem in the Case is found this needs to be comunicated with the customer a well as documented on the Case

## Communicate Solution to the customer 

* Contact the customer to explain the solution found. Whenever possible call the customer on the phone to communicate the solution and try to get immediate feedback 
* Get confirmation by your Client Contact if the solution you've found solved the problem. If further testing is necessary, use the "Follow Up" date on the case to configure a date to follow up with the customer to confirm if the solution worked

## Document Solution on the Case

* **mandatory step:** Why? TTR (time to resolution) metrics are tied to checking this box.

To document that a solution has been provided check the "Solution Provided" box in the Post Component. This flag is used to calculate the "Time to Resolution" KPI.

* Open the 'Post and Update Status' 
![image](https://media.github.ibm.com/user/70336/files/37234754-ac46-11e8-84b6-0dc75807232e)

* Check the box for Solution Provided (more details on this flag, see below)
![image](https://media.github.ibm.com/user/19331/files/459d5584-b4db-11e8-90a0-6a9c46850d1f)


## When to Enter a Solution Provided

Solution Provided is flagged in a Case on the update when the action is performed. You do not need to flag it again unless a subsequent Solution is provided.  Examples include...

### Product Defect
Final solution provided for a problem directly attributed to an IBM software product defect. This includes code and documentation defects of the IBM product, i.e., Code and Doc Decfects.

- A solution (e.g., PTF, fix pack, other MDV), documented in a closed Defect and available for client installation/implementation, is recommended to the client.
- The  client reports a problem that is a rediscovery of a known problem and you supply the client with the solution, documented in a closed Defect and available for client installation/implementation, to fix the problem in their environment.
- A recommendation is made for client to apply an available MDV (Maintance Delivery Vehicle)  or upgrade as the proposed final fix for the reported problem (exact Defect is not known). 
	
	
### "Non-Product Defect"

Final solution provided for a problem not attributed to a software product defect.
- Problem may be in client application, or Non-IBM Hardware or Software.
- Problem may be a user error. 

Provided the client with:
- An answer to a question such as “how to” do something, “what if” something happens.
- Installation and/or planning assistance
- Information regarding a PSP bucket.
- The assessment that the issue was not a product defect and requires an enhancement request to resolve.

## Clearing the "Last Solution Given Date/Time" field
When a solution is rejected by the customer, agents can clear the "Last Solution Given Date/Time" field by using the Clear Solution action in the Quick Action drop down. This action will set the date field to null.

<img width="1080" alt="screen shot 2019-05-15 at 10 36 01 am" src="https://media.github.ibm.com/user/156294/files/93cd0080-76fd-11e9-82fa-4c99de502620">

## ARM documentation
To document the solution the appropriate <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/arm">updates in ARM need to be made</a>. Please select the documents you used to find the solution or <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/knowledge">create a new Knowledge Articles</a> whenever necessary

* Open Asset Reuse Manager from the Feed View of Salesforce
![image](https://media.github.ibm.com/user/70336/files/9db2a636-ac46-11e8-84b4-07ea06c12a94)
* Open ARM 
![image](https://media.github.ibm.com/user/70336/files/e05107d0-ac46-11e8-89dd-daf99baf4d1a)
* Categorize the Case correcty
*  Choose the used Assest
* Vote the Assets

## More Details on "Solution Provided" flag
This checkbox on MPPC will indicate when a solution has been provided to the client. The checkbox will update the underlying case object and flag the date and time to which the solution was provided on the Case. This field will be reportable in Salesforce Reporting and in CEDP at the support mission level. The data object used for reporting is **case.lastSgTS** and will be named to a friendlier name in CEDP. 

The "Solution Given" checkbox is updateable when the case status is changed or when text is written to the post section of the MPPC. The “Solution Given” can be updated on either "Public" or "Private" posts. This feature is only available on the parent case and is not available on a skills case.

### Expected Case Flow 
The Agent/Engineer will work the case and when a solution is identified, the post is made public to the client. The checkbox can be selected to indicate that a solution has been provided to the client. Once the post is made, the "Last Solution Given" date and time will be populated under the “System Information” section of the case layout. If the solution does not solve the client issue, then the agent/engineer can re-post back to the client by re-selecting the checkbox for a
subsequent update. Note the checkbox in the MPPC will have cleared itself after each case update. The "Last Solution Given" field will be updated with the date and time of the latest "Solution Given." All of the "Solution Given" updates are tracked in the case history. 

### Usage
* When posting to the parent case, the status can be changed and the "Solution Provided" checkbox can be selected. 
  ![image](https://media.github.ibm.com/user/19331/files/bb814284-b5b1-11e8-8ac1-a1b68ebb4766)
* Notice that the “Last Solution Given” date and time field is updated.
  ![image](https://media.github.ibm.com/user/19331/files/cab66540-b5b1-11e8-86b1-6b60c68ceac1)
* Additionally, the Case History also shows the "Solution Given" date and time. 
  ![image](https://media.github.ibm.com/user/19331/files/dd2030f8-b5b1-11e8-810a-9ee60603ef55)


## Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/knowledge">Create or Update Knowledge</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/arm">Evaluate and Attach Knowledge</a>
