

# Instructions to Set Up Case Mission Team

Please note: Mission Team Routing is available for all Support Mission's that are owned by a manual queue. If Support Mission is owned by a Omni routing queue, Mission Team routing will not be supported.

* Ensure Agents are members of Support Mission and have an Agent Assignment Profile configured

![image](https://media.github.ibm.com/user/129959/files/021dc644-b1d5-11e8-8322-e61b117f539a)
![image](https://media.github.ibm.com/user/129959/files/c854e3ee-b110-11e8-9d11-96987450c424)

* Use Support Skills related list in Support Mission details page to add Skills for use in Routing
![image](https://media.github.ibm.com/user/129959/files/dcb3edfe-b1e1-11e8-8ab5-51a9fc12ba17)

* Mission Teams will be configured in ‘Teams’ tab in the Support Mission details view

<img width="1217" alt="screenshot 2018-09-25 at 11 51 26 am" src="https://media.github.ibm.com/user/129959/files/6f52e10c-c0b9-11e8-9084-1100396f1dcd">

* Follow the correct naming procedure for every team: Support Mission Alias:Team Name, e.g. _DB2:My Team_

* Fill out Mission Team fields with desired criteria. Keep in mind, each field filled out is an AND criteria (a case will have to match all values to be routed to this team). Within each field, every value you enter is an OR criteria (a case will only have to match one of the values to be routed to this team). e.g. _Highlighted in red (Account Name, Entitlement Name, and Product Name) are all AND conditions. All the values within the Account Name (highlighted in blue) are connected by OR._

![image](https://media.github.ibm.com/user/19331/files/ee9bc7b4-ac7b-11e8-8f21-6a4cd5a278e3)

* Populate the Email field with your corresponding PagerDuty email to enable an email integration. This field can only hold one email address.

![image](https://media.github.ibm.com/user/19331/files/078fafba-ac7c-11e8-92b0-1e6e2d29b0eb)

* Use the following settings to determine if any Mission Teams will ignore the member's online status or backlog capacity during the stamping of this team or during the assigning of cases in this team.
![image](https://media.github.ibm.com/user/129959/files/b614994c-c0b8-11e8-96e6-372b5e7cc870)

* Add agents to members of Mission Teams
<img width="963" alt="screenshot 2018-10-09 at 12 02 40 pm" src="https://media.github.ibm.com/user/129959/files/53895e12-cbbb-11e8-8af2-842c024fc108">



* After 1-6 minutes the routing logic will run. In the Mision Information section of the case, the ‘Mission Team’ field will be populated. If this Mission Team uses Auto-Assign for the Assignment Strategy, the Assignment Engine will kick off and assign this case to the next best agent.

![image](https://media.github.ibm.com/user/19331/files/19df9fe0-ac7c-11e8-8d0b-e2f8aeae0bab)

Note: With this transfer from Routing Rules to OC2, ownership of cases will change from Routing Rule queues to the default Support Mission queue. Any cases in Routing Rule queue List Views will disappear from those List Views. List Views should instead be filtered by the Support Mission global queue or Mission Team.

### Related pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/coreConcepts/oc2routing">Core Concepts behind Routing and Assignment OC2</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/reassignment">Reassignment of a case including transfer, out of office, follow the sun, classification correction</a>

# Set Up the **Chat** Mission Team 
## Routing by Product

*Routing chat by product is an optional configuration to ensure that Chats are routed to specific Product SMEs. If no Product Chat teams are created following the steps in this section, chats will be routed to any support mission member who is Available for Live Agent as each chat comes in.*

*Note:* If no agents from this Chat team are online, then chats associated to this product will go to agents that are online and in the Support Mission (Default Queue).


### 1. Setting Up the Chat Queue
To set up chat routing by product, Support Mission Leads should begin by opening an internal help desk ticket to get a new chat queue created; from  https://ibmsf.force.com/internal/s/ using the Cases tab.

When opening the case please include the following information in the Open a Case form:

* Support Team = Salesforce in Support
* Subject = Creation of queue for chat product routing
* Description = For Support Mission _mission-name_  please create a queue for product _product-name_, product-ID _productID_.
* Submit

*Note:* Queue Names can be up to 40 Characters; when the queue is created it must start with "Chat", and include the Support Mission identifier, followed by followed by the product.  
(If your product name is longer then the remaining characters allowed, its recommend to include the commonly used abbreviation.)

Once the Helpdesk administrator has created the Chat Button, Routing and Queue; they’ll close the case and supply the name of the new queue which will be used by the Support Mission leader or Manager to create the Chat Team.  

Each Chat Queue will be directly related to the Product

### 2. Creating the Chat Team for the Product

A. Navigate to the Support Mission that the product being added is located in.

B. Scroll down to the ‘Assign Agents’ section of the record, and select the ‘Teams’ tab.

![image](https://media.github.ibm.com/user/79767/files/09c8fb00-5d3f-11e9-8e0c-3833a425aa63)

C. In the top right corner of the component, click on the ‘Create New Team’ button to create a Chat Channel Team for the Product.

![image](https://media.github.ibm.com/user/79767/files/19e0da80-5d3f-11e9-9992-307e3702354f)

D. Fill out the fields as noted:

    a. Mission Team Name: “Product” Chat Team
    b. Channel: Chat
    c. Priority: Next Available based on Support Mission (If 4 Teams already exist with Priorities 1-4, Priority will equal 5)
    d. Omni Queue: Locate and use the Queue provided by Helpdesk Admin
     
![image](https://media.github.ibm.com/user/79767/files/08eb9580-5d4e-11e9-9c77-71abc85bf8e9)

### 3. Adding Agents to the Chat Mission Team   

#### Add Agent to the Support Mission for the Product (if needed) 

If the Support Agent is not already a Member of the Support Mission for the Product please reference **[Mission Membership](https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/management/membership)**


#### Add Agents to the Chat Channel Team for the Product

1.Navigate to the Support Mission that the product being added is located in.

2.Scroll down to the ‘Assign Agents’ section of the record, and select the ‘Teams’ tab.
![image](https://media.github.ibm.com/user/79767/files/09c8fb00-5d3f-11e9-8e0c-3833a425aa63)

3.Locate the Chat Mission team you would like to add Agents

4.Open Action menu 

5.Select "Add Mission Team Member"

![image](https://media.github.ibm.com/user/79767/files/097b6a80-5fa0-11e9-93f3-58db7b2a6c19)

6.A popup will appear with all of the Support Mission Members that are not currently in this Chat Mission Team. Select the Agent that you would like to add.

![image](https://media.github.ibm.com/user/79767/files/9292a180-5fa0-11e9-85b2-7e6afc2b2076)

* Agents associated to this Chat Team will (if online for Live Agent) receive chats associated with this product first. If no agents from this Chat team are online then chats associated to this product will go to agents that are online and in the Support Mission (Default Queue).



## Case Views Setup
Configure CaseViews for Mission Teams

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

#### The basic selection is Filter by Owner
* All Cases - selects from all existing Cases 
* My Cases - selects from Cases the Agents is Owner of
* Queue (select the Queue ) - selects from Cases of the selected Queue
* My Case Teams - selects from Cases of the Case team the Agent belongs to

Define the Mission Teams you would like to view in the Filter By Additional Fields section. 
![image](https://media.github.ibm.com/user/129959/files/4b28360e-c584-11e8-9dfc-7553d9f6ba04)

#### Tips: 
* Add a line (see line 2 in screenshot above) setting Case Owner Display Name equal to your Support Mission's Global Queue to see unclaimed/unassigned cases in the list view
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
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/a0a40bce-8da6-47a2-99f7-f3b4d94c1014/media/View%20for%20multiple%20skills.mp4">Video: How do I setup a case view for multiple skills?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/8847c80b-b76f-4114-979a-578ce25942f1/media/View%20for%20multiple%20queues.mp4">Video: How do I setup a case view for multiple queues?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/e43393ff-3db4-4804-a002-e78d99a4086e/media/View%20for%20a%20Particular%20Team.mp4">Video: How do I setup a case view for a particular team?</a>
* <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/e2c35814-7226-46bb-bb35-9e6314366b28/attachment/c328a097-5b28-4457-b289-41f3abe7273b/media/Sev%201%20and%20Sev%202%20views.mp4">Video: How do I setup a Sev 1 case view?</a>

<br>
<br>
<br>
