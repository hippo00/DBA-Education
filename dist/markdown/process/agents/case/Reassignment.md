(Re-)assignment is the process when a Case needs to find a new Owner who’s driving problem determination and resolution. 

Please keep in mind, that the **(Re-)assignment** feature can change a case's Product, Support Mission, Support Skill, Mission Team, and/or Target Agent assigned.

(Re)-Assignment is the process of reclassifying one, or many, key components determining which agent will be handling a case. 
There are multiple reasons why the (Re)-Assignment of a case may become necessary, such as…
* 	Change Product/ Support Mission
* 	Classification Correction
* 	Transfer

Only active Mission Teams that have members will be displayed in the ‘Target Team’ drop down.

## Change Product/ Support Mission
If a case is opened with an incorrect Product/Support Mission or the Product/Support Mission on a case needs to be changed upon further analysis:

**Best Practice:**
- Confirm with Team/Support Mission prior to transfer that it is the correct handoff.

* 	Click the (Re)-Assignment quick action, once opened, click inside the Product or Support Mission field.
* 	A pop-up box will appear where you can type in the name of the Product you are searching for. The search functionality is iterative and places a wildcard in front and behind the search text. Also, because this is a quick action, you cannot add a new Product inside the (Re)Assignment.
![image](https://media.github.ibm.com/user/129959/files/47b4dd00-3a79-11e9-866d-de5fe50fbf2a)
* Changing the Support Mission will reveal the target Support Mission's Support Skills, Mission Teams, and Agents- these fields will default to auto select unless manually changed after selecting a new Support Mission. To also change the Mission Team and/or Support Skill follow directions for Transfer and Classification Correction.

**Please note:** At the moment, when changing the Support Mission and leaving the Support Skill field set to Auto Select, any SM that does not have Watson Skill Suggestion Enabled will return a Bad Request message in the Support Skill field on the case.  
![image](https://media.github.ibm.com/user/129959/files/f6d52800-3e6e-11e9-934c-f96e691e2b68)


## Transfer: A new Case owner needs to be assigned to this Case

Use the Re-Assignment quick action to change the Case owner and/or the Mission Team. Some scenarios that require you to transfer include; issue needs to be sent to another Mission Team (Target Team), one of your team member is already working with the client or is familiar with the reported issue, you have other backlog commitments, you have non-Case work commitments, scheduling commitments, etc. 

**Best Practice:** 
- Update the Case with internal Post to summarize any work that has already be complete if any and why the Case needs to be Transferred. 
- Confirm with new Team prior to transfer that it is the correct Mission Team and agent.
- You may need to speak to your Team Lead or Manager before transferring to discuss reason you are not able to work the Case at this time.

* Confirm you have the desired Product and Support Mission. If you need to send a case to an Agent/Mission Team that is outside your Support Mission, change the Support Mission/Product first.
* **Mission Team**: Confirm the target Mission Team is correctly set based on your team or issue being addressed on the Case.
* The Routing Configuration for the Mission Teams' are visible next to the name. 

![image](https://media.github.ibm.com/user/129959/files/813b1780-3a7c-11e9-8a68-4871b9e477db)

* If the Mission Team says  “Manual Pick”  next to it, select the **Target Agent** from available Support Engineers if you know who will be taking over the Case, if unknown leave blank and allow for the teams Manual Assignment process to start.

![image](https://media.github.ibm.com/user/79767/files/1ca66b40-edaf-11e8-80eb-9e739c807f6c)

 * When the Mission Team says “Auto-Assignment” next to it, select the **Target Agent** from available Support Engineers if you know who will be taking over the Case, if unknown leave at “Auto-select next best Agent” to allow routing to assign to the agent.
 
![image](https://media.github.ibm.com/user/129959/files/7c2a9800-3a7d-11e9-91d6-7acf2b7a0440)

* When the Mission Team says "Omni" next to it, you will not be able to select a specific agent since this mission team is using Omni-Channel Routing.
![image](https://media.github.ibm.com/user/129959/files/ee02e180-3a7d-11e9-83cd-daa0c711bac6)

* Select **Apply** to make changes.

**Please Note**: Transferring a case to another agent within your Mission Team, outside your Mission Team, or outside your Support Mission may cause you to lose access to view that case. Please make all considerations necessary before transferring a case.
Add yourself to the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseTeams">Case Team</a>  prior to transfer in order to ensure access.



## **Classification Correction**

Your team may require that Cases are classified by Support Skill. This classification can be done either manually or by Watson Skill Classification. 

**Classification Correction**_ should be used for:
- Initial Support Skill Classification (previously blank)
- Correcting incorrectly stamped Support Skill

When you review the Case and Support Skill is either blank or incorrect you can correct it and trigger a Re-Routing and Re-Assignment of the Case or just change the Support Skill and not re-run the Assignment logic.

* Confirm you have the desired Product and Support Mission. If you need to change to a Support Skill that is outside your Support Mission, change the Support Mission/Product first. 
* **Support Skill:** Select the desired Support Skill for this case
* A checkbox will appear if you only change the Support Skill to a different value. Use the "change Skill only, do not trigger re-assignment" checkbox to only update the Support Skill Classification and not update the Owner or Support Mission Team Assigned.

![image](https://media.github.ibm.com/user/129959/files/b301ad80-3a7f-11e9-8810-419de146761c)
* To re-trigger Routing and Assignment logic to consider the updated classification, leave this checkbox unchecked, and select Auto-Select for the Mission Team and Target Agent field.

* Select **Apply** to make changes.

**Please note:** At the moment, when changing the Support Mission and leaving the Support Skill field set to Auto Select, any SM that does not have Watson Skill Suggestion Enabled will return a Bad Request message in the Support Skill field on the case.  
![image](https://media.github.ibm.com/user/129959/files/f6d52800-3e6e-11e9-934c-f96e691e2b68)

---

## Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/wrongProduct">Wrong product on Case process</a> 
* <a href="https://ibm.box.com/v/tecspec-routing-and-assignment" target="_blank">TecSpec : Routing and Assignment OC2</a>


