## IBM Support is in the process of moving from a number of legacy call management systems to the Cognitive Support Platform

* Part of this overall transformation is to improve the client experience when raising a Support Case and enable the client to easily select a product they want support on. 
* The data that is captured in the Support Case helps identify Clients using different products and this data assists Product/Offering Management teams to survey them.

## What is a Support Level Code (SLC) & how does it relate to a PID?

* Support moved away from the use of Product Identifiers (PIDs) & Component IDs (Comp IDs) that were historically connected to a support case and are now using a new product descriptor & code called a Support Level Code (SLC).  
* A single SLC is a collection of one or more PIDs/Offerings and is for internal use only.  
* A SLC is assigned to a Customer Facing Name (CFN), which corrolates to the product name in Salesforce. 

## Why do I need a default PID?

* The lack of PIDs in the support data created some downstream issues for the Medallia survey program.  The Offering Surveys that are using the 'Common Data Sources' methodology rely on support case data to connect client contact data to product usage.  The Offering Surveys are all generated at the PID level.  Therefore, it was necessary to designate a 'default PID' for each SLC, in order to maintain the linkage between support cases and Offerings.  This default PID will be the designated PID used in Offering surveys that use Common Data Sources.  For example, if there are 20 PIDs that fall under a single SLC, only one of these PIDs will be designated as the default.  Only that one PID will be used for all associated Offering surveys.  Additionally, if there is 1 PID that falls under a single SLC, that PID is the default PID. 
* Additionally, having a default PID also will allow accurate reporting in the NPS 360 view in Medallia, as it provides a linkage to the Unified Taxonomy.

## What is a Child PID?

* A single SLC is mapped to more than one PID, one PID must be designated as the default PID, all others are designated as Child PID(s) of the SLC. There is no limit to the number of PIDs mapped to a single SLC.

## What SLC or CFN is my PID mapped to in Salesforce?

* Check the <a href="https://w3-connections.ibm.com/wikis/form/api/wiki/385f62b0-d1a0-44bb-8918-0c71a482cab7/page/702fc4c9-e4f2-4533-9b08-be3785befa69/attachment/8655db38-374c-43bd-a122-14242864bd62/media/How%20to%20Use%20Swagger%20v1.pptx" target="_blank">"How to use Swagger"</a> document to find this information.
* Check the <a href="https://ibm.ent.box.com/v/sf-enabled-products" target="_blank">Salesforce Enabled Product Daily report</a>

If a change is required to the SLC to default PID mapping, please work with Service Planning. 

## What is the serialized Parameter?

* A machine entitled CFN requires a serial number when a case is created.  If a CFN/SLC has the Serialize parameter enabled (yes), then, during case creation, the “serialized” product’s mustgather will prompt for the customer’s serial number.

## Primary Goal for Salesforce Taxonomy

Simply, the goal is to improve the customer experience by reducing the quantity of offerings a customer can choose from by utilizing the Unified Taxonomy hierarchy to group Products into supported offerings that the customer will understand.

* Allows for flexibility to get to the level that of granularity that a customer can understand. Examples:
* Portfolio -  Db2 Linux, UNIX and Windows (Groups 59+ plus PID’s)
* Offering -  Cloud Brokerage Managed Service – Planning (1 PID)

<a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/servicePlanners/ManageAliases" target="_blank">Alias feature</a> in Salesforce will assist customer ability to locate their product in the Salesforce community.   An alias is used to map CFN’s previous name, acronym (ex. WAS for WebSphere Application Server) or  Child PID product names to an SLC.   

## How to submit a SLC creation, change or retire request?

All SLC creation, default PID mapping and change requests should be submitted by the Service Planner via an <a href="https://ibmsf.force.com/internal" target="_blank">internal case</a> with the following information:

* All IBM PID(s) to be added, modified or removed for CFN:
  * Default PID:
  * IBM Legal Name:
  * Customer facing Name (CFN):
  * Support Mission:
  * Business Unit Name:
  * Business Unit Number:
  * Serialized: Yes/No   (Yes = Product serial number prompted needed to create a case)
  * GA Date:
  * Retirement Date (if applicable):
  * If retiring SLC, Service Planner must state they validated each PID is End Of Life (EOL) by performing an entitlement check for renewal and active support extension.
  * SLC (modification/retirement request)
  * Optional:   Add an At (@) Mention for your Drupal and Chatbot contact for any creation or name change request

Note:  For any modification to an existing mapping, include both existing and new SLC and default PIDs information.

If a change is required to the SLC's default PID mapping, please work with Service Planning.

### Useful Sources of Contacts for Service Planners, Implementation Leads and Offering Managers:

* <a href="https://w3-connections.ibm.com/wikis/home?lang=en-ca#!/wiki/Wa88c47bacdb2_4fb9_a18f_61559a5313b7/page/Software%20Service%20Planning%20Tech%20Council" target="_blank">SW Service Planning Council (Service Planners)</a>
* <a href="http://lex.boulder.ibm.com/esprit/espritwe.nsf/w3all/ESPRIT+SW+Planning+Contacts" target="_blank">Customer Service & Support Planning (CSSP) Contact Matrix</a>
* <a href="https://apps.na.collabserv.com/communities/service/html/communityview?communityUuid=d6811811-d173-4cf1-8d57-7935fcd5645d#fullpageWidgetId=Wb00121801e62_4c7a_92b7_012934a23560&file=ea7f1af6-fcbf-4a22-876b-da07317d4b0f" target="_blank">Offering Management Contacts by Unified Taxonomy/Products</a>
* <a href="https://ibm.ent.box.com/folder/24011168854" target="_blank">Implementation Leads for NPS</a>
* HW Service Planners lead: <a href="https://w3.ibm.com/bluepages/profile.html?uid=ZZ00A3644" target="_blank">Ivo Simeonov, Bulgaria</a>
