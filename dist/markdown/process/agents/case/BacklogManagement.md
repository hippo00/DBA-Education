
This chapter describes how Agents can manage their **personal backlog** of Cases during their daily work. This Article is supposed to answer questions like:
 * [How do I organize my backlog to know "What to work on next" ?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement#wtwon)
 * [How do I know which cases need my immediate attention where I am the owner ?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement#owner)
 * [On Coverage, how do I know which cases need attention from somebody in the mission ?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement#coverage)
 * [How do I get interrupted to do this while doing other things ?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/backlogManagement#interrupted)

---

## <a id="wtwon" name="wtwon"></a>How do I organize my backlog to know "What to work on next" ?
This feature is called <a href="/dba-support/DBA-Education/#/DBA-Education/wis/wtwon">Case Prioritization</a> and it provides an overview of Cases of a certain configurable scope (My Cases, my Teams Cases, my Mission Cases), rendered in a Kanban Board or Table view. Cases are classified by Watson and categorized by the so called **Watson Score** for a better ranking. The **Watson Score** is a number between 0 and 10 and classifies how important a Case is (higher is better) so that I as an Agent know in what Order I should work my backlog. To use <a href="/dba-support/DBA-Education/#/DBA-Education/wis/wtwon">Case Prioritization</a> follow these steps:

* In the Salesforce Agent Console click **Case Prioritization** on the top left Dropdown

![image](https://media.github.ibm.com/user/70336/files/9e0de772-aad3-11e8-83b1-15fbb75e430c)

* The Case Prioritization component opens, cases are categorized and rated by urgency

![image](https://media.github.ibm.com/user/70336/files/b12271a0-aad5-11e8-9519-9c2029c7b42c)

Keep in mind that <a href="/dba-support/DBA-Education/#/DBA-Education/wis/wtwon">Case Prioritization</a> also provides a Table View of the prioritizes Cases:

![image](https://media.github.ibm.com/user/19331/files/e5cb952e-b4f0-11e8-8341-bf418ccd7294)

As an alternative, Agents can use classical Case Views and define the view they want to have there in a very fine-granular way. Use the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseViews">Case Views Howto</a> to create Case Views. Keep in mind that Classic Case Views **do not** support sorting by multiple attributes at this time. 

![image](https://media.github.ibm.com/user/19331/files/f310fee4-b4f1-11e8-8247-7c6a5eac75bc)

The recommendet Case attributes to build up Case Views representing your Cases are:

| Field Name            | Description of use for Backlog Management                                                                                                                          |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Case Number**             | Number of the Case               |      
| **Subject**             | Subject (brief summary) of the Problem handled in the case           |   
| **Region**             | Region attribute to indicate where the Account the case was opened against is located at          |   
| **Case Age**             | Age to indicate how old the Case is         |            
| **Case Record Type**             | Text field indicating which record type (Parent = "Open Case Record Type", Skill = "Skills Case") the case is                                                                                                                                    |
| **Severity Level Number Formula** | displays the Severity of the Case                                                                                                                                                                                                                |
| **Internal Status**               | represents the IBM internal status of the Case                                                                                                                                                                                                   |
| **Child Case Statuses**           | this field contains a concatenated and comma-separated list of all childs case statuses in a single string. This attribute can be used to see if any Child case from the whole case family is in a status that needs the QMs attention           |
| **Parent Case Status**            | this field is available on the Skills Case page layouts and contains the parent case status. This attribute can be used on the "Skilled Mission" to see if the Parent case is in a state that needs attention                                    |
| **Needs Attention**               | this Boolean flag is primarily intended to be used by the QM or by a Field SSR (or anybody else who temporarily covered) to indicate to the Owner, that the case was touched in the absence of the actual Owner and that the Owner is expected to review the Case. |
|  **MustGather System Down flag** |  indicates whether "System down" (must be pre-configured on the product associated to the Case) is set                                    | **Last Modified Date/Time** | Timestamp when the case was last modified |
| **Last Customer Comment** | Timestamp when your client contact posted the last time to the case |
| **Last Support Post** | Timestamp when Support posted the last time to the case |

---

## <a id="owner" name="owner"></a>How do I know which cases need my immediate attention where I am the owner ?

On **Case Views** or **Case Prioritization**, the critical indicators are the fields: 
* **Internal Status** 
* **Severity** 
* **Needs Attention** 
* **Child Case Statuses** (when you own or cover the parent case) 
* **Parent Case Status** (when you own or cover the Skills case). 

On the Status attributes, inspect the <a href="/dba-support/DBA-Education/#/DBA-Education/process/case/statusMapping">Case Status Mapping</a> documentation for more details.

### Example - filter for all your Cases that require your attention
`My Cases where (NeedsAttention == true || internalStatus contains "SME needed, New Case Opened, Client requested callback, diagnostic file received, client replied")`

---

## <a id="coverage" name="coverage"></a>On Coverage, how do I know which cases need attention from somebody in the mission ?

As someone who covers for Cases he/she is not the actual Case owner, use the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseViews">Case Views Howto</a> and expose the fields mentioned above to create your **Coverage View**. The most significant attribute in this role is **Needs Attention**, as the Q-Monitoring agents check this flag on cases that needs Coverage (see <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/monitoring">Queue Monitoring process</a>. On a normal working day or weekend coverage shift, any case that shows up on your **Coverage view** needs your attention and coverage.

### Example - filter for all Coverage Cases on your mission
`All Cases where SupportMission=abc && (Severity==1 || (NeedsAttention == true && internalStatus contains "SME needed, New Case Opened, Client requested callback, diagnostic file received, client replied")`

---

## <a id="interrupted" name="interrupted"></a>How do I get interrupted to do this while doing other things ?

Beginning with Sprint 18, the platform monitors changes on the following fields and auto updates the <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/caseViews">Case Views</a> when any these attributes change.

* case owner
* product
* support mission name
* support mission topic
* mission team
* title
* severity
* total agents recording
* Defect Information
* Client Situation Number

The Agent Workbench on Salesforce Classic doesnt not yet have an option to indicate changes on cases whenever an auto-refresh happened, in form of a audio/visual signal. Please review your Case Views regulary to see the latest updates that happened.