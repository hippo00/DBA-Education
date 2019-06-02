
Salesforce supports multiple <a href="/dba-support/DBA-Education/#/DBA-Education/coreConcepts/casetypes">Case Record Types</a> which form a Hierarchy of Cases:
![image](https://media.github.ibm.com/user/19331/files/925357e8-b080-11e8-8de6-2827b8761f60)

Cases with some relationship to the one that you look at are called **Related Cases** and they show up on the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related Lists</a> called **Related Cases**:
![image](https://media.github.ibm.com/user/19331/files/d0badadc-b081-11e8-9a8c-6d5c2aff7564)

This Related List currently supports the following Case Record Types:
* Skill Case - child case to be used for platform internal swarming (in- or inter-mission)
* Collab Case - child case to be used for platform external swarming (with L3 or Dev-Teams) 
* Parent Case - on one of the childs case, the Parent shows up on this list
* Linked Case - a second linked parent case that has some relationship 

## Fields displayed

* **Action** - allows to Edit or Close the related case
* **Case** - the usual case number
* **Related Case Type** - type of the related case (can be "Skill", "Collab", "Linked")
* **Support Mission** - the Mission this related case belongs to
* **Owner** - a clickable link to the Owner of the related Case
* **Estimated Completion Time** - time when this related case is expected to be completed
* **Skill** - displays the Skill associated to the Case 
* **Internal Status** - internal status of the related Case
* **Last Modified Date/Time** - timestamp when the related case was modified the last time

### Possible Actions on a Related Case

* **Edit** - opens the related case in a new tab and allows to edit it
* **Close** - opens the "Close Case" form and allows to close the related case
* **Post to Skill Case** - opens a popup and allows to post to the skills case
* **Change Status to 'Diagnostic File Uploaded'** - changes the status to the mentioned value
* **Change Status to 'SME needed'** - changes the status to the mentioned value
