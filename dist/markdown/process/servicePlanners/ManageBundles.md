
## Goal for Product Bundling

Traditional IBM product taxonomy leveraged by support involves a quad of:
* Product (PID) 
* Product version (VRM) 
* Component (CompID)
* Release 

As a key part of our simplification efforts with the migration to Salesforce, the taxonomy with which both clients and IBM interacts is being streamlined to a single Unified Taxonomy (UT) level, tentatively level 35. With this flattening of taxonomy, the notion of bundling multiple products into another is lost. This feature seeks to address this gap.

* **Prior to Salesforce:** Customer Support could have been based on selecting from hundreds of Comp ID’s, PID’s, version and releases.
* **Cognitive Support Platform:** Customer selects to open a case against one offering (e.g. Db2 Linux, UNIX and Windows)

## Bundles in Salesforce
There are two types of bundles in Salesforce will be supported
* **Bundle** - This is an offering that is a supported product but also has other products bundled in it.  The Customer can get support to either the Parent Product or the Children Products.
* **Grouping Bundles** - these are offerings identified by a part and PID that are really just a collection of products.  The top level Parent PID is not supported but it will grant the customer access to all the children of the bundle



## How to Create and Manage Bundles in ETL Administration tool (EAT)
Cognitive Support Platform bundles can be added and managed in the ETL Admin Tool (EAT). Here, you can create parent-child product relationships among Support Level Code (SLC). See below for instructions on how to add and manage bundles in EAT.


### Request access to the ETL Admin Tool
* Visit <a href="https://ibm.biz/bert-admin" target="_blank">https://ibm.biz/bert-admin</a>
* Select “dba-support ETL Admin Tool”
* Choose the role of “Service Planner”

---

## How to create a Bundle

Begin by logging into <a href="https://eat.w3ibm.mybluemix.net/" target="_blank">EAT</a> and use your w3 credentials

* Access the “Product” tab in the top navigation menu
* In Search By: pull down choose either Product Name or Product Code
  ![image](https://media.github.ibm.com/user/19331/files/93f2f91c-c18f-11e8-911e-6bce7493fb05)
  (Notice you toggle between Product View and Bundle View in the upper right hand corner)
* Enter your search criteria for the **Parent Product Name** or **Parent Product Code**. Click Search
* Access the Parent Product Record by clicking on the product name
  ![image](https://media.github.ibm.com/user/19331/files/c12b53a2-c18f-11e8-86ee-86e0a86690be)
* Click ADD BUNDLE  in the left navigation menu
  ![image](https://media.github.ibm.com/user/19331/files/df9dd350-c18f-11e8-80ca-6cefbe660cb8)
* In **Search by**: pull down choose either Product Name or Product Code
  ![image](https://media.github.ibm.com/user/19331/files/f6f37758-c18f-11e8-9d35-653a2bf56322)
* Enter your search criteria for the **Child Product Name** or **Child Product Code**. Click Search
* Click ADD next to the product under the Bundle column.  Once complete, EAT will return a “Success” message.  Note, the request to add the bundle will be reviewed and approved by EAT Administrators.  Likewise, if a bundle needs to be removed, it will need to be processed and approved by an Administrator
  ![image](https://media.github.ibm.com/user/19331/files/276c69b2-c190-11e8-94e8-c9ad33387383)
* To view bundles associated with a product, click on **VIEW BUNDLE** in the left navigation menus
  ![image](https://media.github.ibm.com/user/19331/files/3f9b2384-c190-11e8-9188-7724aa203b9b)

---

## How to check the bundle status 

* To view bundles associated with a product, click on “Bundle View” (upper right hand corner). 
  * Notice you toggle between Product View and Bundle View in the upper right hand corner
* In Search By: pulldown you can select: Product Name, Product Code or Status
* Bundle View by Product Name / Product Code
  * In Search By: pull down choose either Product Name or Product Code
  * Enter your search criteria for the Parent Product Name or Parent Product Code. Click Search
  * The resulting page will show the Parent and Child Product Name, Parent and Child SLC Code and its current status
* Bundle View by Status - In Search By: pull down choose from:
  * Not Approved
  * Approved
  * Create Pending Approval
  * Delete Pending Approval
  * All Pending Approval
  * Click Search
  The resulting page will show the Parent and Child Product Name, Parent and Child SLC Code and its current status

---
## Questions and Answers

* **Bundles have different products per version. How should I create a bundle when a product may be in only one VRM? e.g.**
  _VRM 1.0 – Product 1, Product 2, Product 3_
  _VRM 2.0 – Product 1, Product 2, Product 3, Product 4_
  _VRM 2.1 – Product 1, Product 2, Product 4, Product 5_
  The bundle should be created with a culmination of all products.  In this example, it would be product 1, 2, 3, 4, and 5

* **Does Parent SLC have to be visible in Salesforce?**
  No, the bundle data is used for entitlement and the parent PID may or may not be visible in Salesforce.

* **What is the process to add or remove a Parent SLC from Salesforce?**
  During the SLC setup processes, the Service planner has the option to hide or show the parent SLC in Salesforce. After the SLC setup is completion, the Service Planner can create a help desk request to change this setting. 

* **Can I add select multiple SLCs during bundle creation?**
  No

* **Can I copy / clone from an existing bundle that have similar child products ?**
  No



--- 

## Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/coreConcepts/taxonomy">Simplified Product Taxonomy</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/servicePlanners/ManageAliases">Create and Manage Aliases</a>