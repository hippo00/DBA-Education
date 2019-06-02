Case views are lists of cases based on specific filter criteria. Some general CaseViews are available by default like

* My Open Cases
* My Closed Cases 
...

As an Agent I need more options to filter Cases. This chapter describes how to create customized CaseViews

* In the Salesforce Agent Console click Cases on the left Dropdown

![image](https://media.github.ibm.com/user/70336/files/146b723c-aac9-11e8-84db-45a91661c4cb)
* Select one of the existing CaseViews (e.g. 'MyOpenCases')

![image](https://media.github.ibm.com/user/70336/files/8373c0e4-aac9-11e8-980f-3a575073c4e3)
### Step 1: Enter View Name

-  Option 1: Clone

A copy of the selected View is created. This is helpful if you just want to modify an existing CaseView.
**Choose a new name before saving.**

![image](https://media.github.ibm.com/user/70336/files/969fa296-aac9-11e8-8f6a-c702f8dafed4)

- Option 2:  Create New View

A new blank CaseView is created.

![image](https://media.github.ibm.com/user/70336/files/ab25b106-aac9-11e8-80eb-f0156fcdc322)

### Step 2: Specify Filter Criteria
![image](https://media.github.ibm.com/user/70336/files/be028a56-aac9-11e8-92b8-e997132dce75)

#### The basic selection is Filter by Owner
* All Cases - selects from all existing Cases 
* My Cases - selects from Cases the Agents is Owner of
* Queue (select the Queue ) - selects from Cases of the selected Queue
* My Case Teams - selects from Cases of the Case team the Agent belongs to

For more detailed Selection additional Fields can be added to the Filter. The maximum number of Fields  is 10. 
#### Tipps: 
* Values can be separated by ',' - this is handled like a Boolean OR operator 
* Values like 'LAST 30 DAYS' are possible

###### Example 
![image](https://media.github.ibm.com/user/70336/files/4297c71a-aacd-11e8-9de7-e6934f879278)

#### Logic can be added as shown below using Boolean Operators
![image](https://media.github.ibm.com/user/70336/files/99c39e24-aacd-11e8-8a30-b4915bc67a2b)

### Step 3: Select Fields to Display

![image](https://media.github.ibm.com/user/70336/files/e3910540-aac9-11e8-9fce-0397daf21e72)

The maximum number of Fields is 15.

## Related Pages
* <a href="https://mediacenter.ibm.com/media/Salesforce+%E2%80%93+Creating+a+Case+View/1_bpjq09yq" target="_blank">Training Video: Salesforce – Creating A Case View</a>
The following links are incorrect and will be fixed soon!
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/a0a40bce-8da6-47a2-99f7-f3b4d94c1014/media/View%20for%20multiple%20skills.mp4">Video: How do I setup a case view for multiple skills?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/8847c80b-b76f-4114-979a-578ce25942f1/media/View%20for%20multiple%20queues.mp4">Video: How do I setup a case view for multiple queues?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/e43393ff-3db4-4804-a002-e78d99a4086e/media/View%20for%20a%20Particular%20Team.mp4">Video: How do I setup a case view for a particular team?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/c328a097-5b28-4457-b289-41f3abe7273b/media/Sev%201%20and%20Sev%202%20views.mp4">Video: How do I setup a Sev 1 case view?</a>
