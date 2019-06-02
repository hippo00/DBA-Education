**Related Lists** are a UI capabilities on the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench">Agent Workbench</a> and on the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/portal">Community Portal</a> in Salesforce to display Relationships between object records on the platform. Standard and custom objects have relationships that define how records in one object relate to records in another object. For example, accounts can have a one-to-many relationship with contacts. These relationships commonly appear in the application as related lists. Only objects of the same record type can show up in the same related list (e.g. we can combine Skills-, Collab-, and Linked Cases into the "Related Cases" list)

* On each and every Object page (means you clicked into an object, e.g. into a Case), switch to the "Details" tab to see the related Lists. The page layout of this object defines which Related Lists are displayed. 
<img src="https://media.github.ibm.com/user/19331/files/5cebbc26-b0f8-11e8-89be-bad2332f6479" width="200">
* scroll down to see the related lists:
![image](https://media.github.ibm.com/user/19331/files/b1997538-b0f8-11e8-9f65-bc8e1191551a)
* **Related Lists** can come with specific **Actions** on the header (like "New Case") which can be used to generate new Objects of the record type or (if specific records from the list are selected below) can expose functions for the specific selection
* **Related Lists** usually expose the **Action** column at the very left, providing the **Edit** and **Close (Cls)** functions for the specific record
* they also display links on several attributes (like on "Case Number" or "Product Name" in the example from above) which are clickable and open these specific records in a new sub tab
