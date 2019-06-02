# Special Handling

**The content on this page stems from the list of topics found on the "Communication in a Case" DBA-Education page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication" target="_blank">here.</a>** 


## Classic Model Today:

After the migration to the new model, we will be removing the Account Priority field on the case object. We will also be removing the Account Priority field on the account object, as both are being replaced with the new model. 
Special Handling will be read-only in the classic UI. When viewing a case in the classic console, a list of the applicable special handlings for that case will be displayed in a new section under the case timer, as below:
<img width="1297" alt="1111111" src="https://media.github.ibm.com/user/129959/files/13e16080-7641-11e9-83c5-51dd905dba84">

## Lightning Model Overview:

### Creating Special Handling:
Special Handling records will be creating during the migration process to the new model by the Salesforce Admin team. They will be created based on the current Account Priorities that exist in production today. Special Handling can be created after the migration, but only by administrators. 

After the initial migration, admins can create Special Handling through the following action in the Lightning Console:
<img width="1201" alt="2222" src="https://media.github.ibm.com/user/129959/files/1e9bf580-7641-11e9-91b6-4bb01ed123b3">

A key differentiator between Special Handling is whether they are Governed or not. This is defined by a Boolean field on the Special Handling object called, “Is Governed.” As detailed below, Support Managers will only be able to create Special Handling Memberships for Special Handling that are not Governed. Only certain users with a certain permission set will be able to create Special Handling Memberships for Governed Handling Programs. 

### Reporting:
When reporting on Special Handling or Special Handling Memberships, one should always use the “Is Governed” data point on the Special Handling object to determine if the Special Handling is governed and to determine if the memberships are for a Governed Special Handling Program. Reporting users should NOT use any fields on the Special Handling Memberships to determine if they are governed memberships – they should always refer to the parent Special Handling to determine whether or the memberships are for a Governed Handling Program. 

### Maintaining Special Handling:
Special Handling Records will be read-only for a support agents and managers. They will be able to view them from the Special Handling tab in the console, but will not be able to edit or create them at this time. To view them, agents and managers can click on the Special Handling navigational tab:
<img width="306" alt="7777" src="https://media.github.ibm.com/user/129959/files/50618c00-7642-11e9-8478-ebbaa0a271c3">

### Special Handling Memberships:
Special Handling Memberships are what link Special Handling to Accounts. During the migration to the new model, the Admin Team will create Special Handling Membership records to link Special Handling to the applicable accounts in production. Support Managers will have access to create Special Handling Program Membership for Special Handling programs that are not Governed. They can create them from the Account object like below:
<img width="1292" alt="888888" src="https://media.github.ibm.com/user/129959/files/62dbc580-7642-11e9-8788-da977f0af409">

Support Managers will create memberships from the New Open Special Handling Membership button, while the New Governed Special Handling Membership button will be reserved for users with a special permission set. When creating a membership, the following fields are required:
-Special Handling Membership Name
-Start Date
-End Date
-Handling Program

Once created, the Special Handling Membership record will look like below:
<img width="957" alt="5555555" src="https://media.github.ibm.com/user/129959/files/bc43f480-7642-11e9-8b8b-ce240d05bdc8">

Once created, products can be added to the Special Handling Membership by clicking the “Associate to a Product” button. Support Managers will be able to associated products, however, they can only do so for Special Handling Memberships that are related to a Special Handling that is not Governed. They will be prevented from adding products to a Special Handling Membership that is related to a Governed Handling Program. 

Special Handlings are now displayed on the case page in Lightning in its own component called “Special Handling:”	
<img width="1269" alt="33333" src="https://media.github.ibm.com/user/129959/files/265b9a00-7641-11e9-9343-dfce93f8601e">


Only relevant Special Handling will be shown. To be shown, the Special Handling must support the product the case is related to and must be affiliated with the account the case is related to. Additionally, only special Handlings are shown that are currently active as defined in the Start Date and End Date fields. 

If Special Handling Memberships do not have specific products associated with them, that means that the membership supports all products. For example, if a special handling membership is active and related to the account on the case but does not have any products defined, it will still show in the component on the case page since it supports all products in the system. 

The user can click through the various programs in the Special Handling card to see key details about those programs. Each program listed will display the Special Handling Membership Name, Description, and Start/End Date. If you want to drill down into a particular program membership, simply click the Special Handling Membership Name to be brought to the record detail page:

<img width="317" alt="444444" src="https://media.github.ibm.com/user/129959/files/61f66400-7641-11e9-80ee-4fd82aa9ed83">


Clicking the above link will take you here: 
<img width="957" alt="5555555" src="https://media.github.ibm.com/user/129959/files/bc43f480-7642-11e9-8b8b-ce240d05bdc8">


### List Views:
Whenever a case is created, the Special Handling Alias field on the case is populated with all the special handling aliases the case is valid for. The alias field is updated with Special Handling Memberships that fall within the range of start date and end date plus the supported products. 
Also, whenever a case page is refreshed, if any new Special Handling Memberships are added or any old ones that are not relevant, the Alias field on case is updated with the correct membership.

This field is important, as it can be used in Case list views to see cases that belong to Accounts affiliated with Special Handlings. To set up a list view, use the CONTAINS function in the filter criteria on the field “Special Handling Aliases.” 
<img width="1286" alt="666666" src="https://media.github.ibm.com/user/129959/files/76d2f780-7641-11e9-8991-0f3ad8b5edae">

### Skill Cases:
The Special Handling Memberships you see on a skills case should reflect the memberships on the parent case. When a skills case is created, the Special Handling Aliases field will be updated with the Aliases in the parent case so that the skill case can be seen in list views. Even if the product on the skill case is changed, the memberships displayed on the case will continue to reflect the parent case. 
