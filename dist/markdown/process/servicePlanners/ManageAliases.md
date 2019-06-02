This document is intended for individuals with Service Planning or Administration ETL Admin Tool (EAT) access.  

Request access to the ETL Admin Tool
*	Visit https://ibm.biz/bert-admin 
*	Select “dba-support ETL Admin Tool”
*	Choose the role of “Service Planner”

## How to view if a specific Alias exists 

Begin by logging into EAT: https://eat.w3ibm.mybluemix.net/ using your w3 credentials
* Access the **“Product”** tab in the top navigation menu
* Select **“Alias View”** tab in the top navigation menu
  ![image](https://media.github.ibm.com/user/19331/files/e081af28-cbc9-11e8-9e4e-1124edcd5aa0)
* Enter **Product Alias Name** (Alias Name) or **Product Source ID** (Source Id (SF External Key/Id). Click Search
  ![image](https://media.github.ibm.com/user/19331/files/03aacdb8-cbca-11e8-8e0e-90e13031eb9f)
* If Alias does not exist, move on to the next section for **How to Create an Alias**  
  ![image](https://media.github.ibm.com/user/19331/files/1cfb0f58-cbca-11e8-8d8a-a158016b6dd5)

---

## How to Create an Alias

Begin by logging into EAT: https://eat.w3ibm.mybluemix.net/ and use your w3 credentials
* Verify the Alias does not already exist.  See previous section **How to view is a specific Alias exist**.  If one does not exist, continue with the following steps
* Access the **“Product”** tab in the top navigation menu
* In **Search By**: pull down choose either Product Name or Product Code 
  ![image](https://media.github.ibm.com/user/19331/files/41f5d414-cbca-11e8-8f16-8ec24976641d)
* Enter your search criteria for **Product Name** or **Product Code**. Click Search
* Access the Product Record by clicking on the product name 
  ![image](https://media.github.ibm.com/user/19331/files/5db17988-cbca-11e8-8304-3822be6dd7f8)
* Click **ADD ALIAS** in the left navigation menu 
  ![image](https://media.github.ibm.com/user/19331/files/7d47fcc2-cbca-11e8-92fe-5a1bdbe16de8)
* Enter Alias Name, Source System.  Select Yes or No for Customer Viewable. Click Submit
  ![image](https://media.github.ibm.com/user/19331/files/8f71f600-cbca-11e8-9c28-02467bd16d04)

Source System - Available Selections for Source System are: 
![image](https://media.github.ibm.com/user/19331/files/a66ee732-cbca-11e8-88f9-7e12fdaad412)

Source System are all the inputs to Salesforce.  Service Planner, who manage product, should select **CAMDF**.  
Source System listing is dependent on access level.  

**Customer Viewable (Future feature)** –  When deployed, if this is set to YES, the customer will see the alias in the product list.  

---

## How to view an Alias for a product

Begin by logging into EAT: https://eat.w3ibm.mybluemix.net/ using your w3 credentials
* Access the **“Product”** tab in the top navigation menu
* In **Search By**: pull down choose either Product Name or Product Code 
  ![image](https://media.github.ibm.com/user/19331/files/da0ee3bc-cbca-11e8-9dd1-4032b081d28a)
* Enter your search criteria for Product Name or Product Code. Click Search
* Access the Product Record by clicking on the product name 
  ![image](https://media.github.ibm.com/user/19331/files/f6416a0a-cbca-11e8-9294-b1b69bc7e6d7)
* Click **VIEW ALIAS** in the left navigation menu 
  ![image](https://media.github.ibm.com/user/19331/files/0c4171b0-cbcb-11e8-9127-810facf904f0)
* Review the Product’s Alias
  ![image](https://media.github.ibm.com/user/19331/files/1f8fa228-cbcb-11e8-8c81-09935b1237b6)

**System - aka Source System:**
* Manual – Alias created prior to deployment of EAT feature
* CAMDF – Software Product default source

**Viewable** - Alias Viewable to customer in product selection

**Customer Viewable (Future feature)** –  When deployed, if this is set to YES, the customer will see the alias in the product list.  

**Push** – Must be clicked to Push changes to Support page.  Production site is updated within a few minutes.  

**Turn on View** -  Turn off View – Changes Viewable Setting

**In SF** – In salesforce, X – Not in Salesforce, check Mark – In Salesforce

### Sorting the Name Field

Click on Name header to sort the Alias Name in A->Z order. 
Click again and Names are listed in Z-> A order
![image](https://media.github.ibm.com/user/19331/files/716fd7c0-cbcb-11e8-8623-5a0d4c33be57)

---

## How Alias show up in Support Page

Begin with IBM Support: http://www.ibm.com/mysupport 
* Click on Products
* Enter Alias in search field
* Click on the resulting product, **Customer Viewable (Future feature)** –  When deployed, if this is set to YES, the customer will see the alias in the product list.  
  ![image](https://media.github.ibm.com/user/19331/files/8f3bde2a-cbcb-11e8-96ca-c6352eb8d806)
  ![image](https://media.github.ibm.com/user/19331/files/98d9147a-cbcb-11e8-9f03-d1dcb67831f0)

---

## Questions and Answers

* **The data in the In SF field is not accurate.  WebSphere Portal has many alias all mark with a X in the In SF field but the Alias works in SF.   When will the In SF field reflect Salesforce production?**
  Answer: As of 10/8/18, the In SF is accurate only if the alias was created through ETL Admin Tool (EAT).   Prior to adding the Alias feature in EAT, they were created manually in Salesforce and then added to EAT.   EAT Database Admins have been asked to populate these missing records for manually created Alias. 
  
*	**When will the Viewable Feature be deployed to production?**
  Answer: To date, “Include product alias Information on product page” (Github issue #4064) has no target date.  See: https://github.ibm.com/dba-support/dba-support-funnel/issues/4064

* **If I am a Hybrid Cloud Service planner, am I limited to making alias modifications to Hybrid Cloud only product?**
  Answer: No, there is no division level access restrictions in EAT 
  
* **When adding an Alias, Source System is a required field.   Will the Alias created be updated in the source system (ex: CAMDF) in addition to Salesforce?**
Answer: No, the alias name will not be sent to the selected source system.

* **Within Alias View -> In "Product Alias Name", what is the scope of this search?  For example, search on IFE produces multiple hits including Product  "Rational Team Concert".  Why?**
  Answer: Product Alias Name search will return hits for any Alias with the criteria entered.   In this example, one of Rational Team Concert's alias is " Lifecycle Query Engine"    ( ife from LIfecycle)

---

## Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/coreConcepts/taxonomy">Simplified Product Taxonomy</a>
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/servicePlanners/ManageBundles">Create and Manage Bundles</a>
