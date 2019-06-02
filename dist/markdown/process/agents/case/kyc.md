## Using the KYC Feature to View Customer SmartCare Data (_KYC=Know Your Customer_)

From the (Classic) Feed View in a case record, you can choose the **KYC Dashboard** Quick Action button, (step 5 in figure below), to view any available SmartCare customer data directly in the console frame. KYC data includes things like Redzone information, client NPS data, cases by product (SLC), and so forth.

![kyccallouts](https://media.github.ibm.com/user/21034/files/b2883ca2-dde1-11e8-8968-c5428623b271)

#### In Lightning, the Feed View in a case record, is presented as follows:
![image](https://media.github.ibm.com/user/146797/files/0a90ae80-5541-11e9-8f7f-631f34e1cfad)
-----
## KYC FAQs


**Why am I seeing this error message: “_Usage: expecting length of 7 for cust_num argument instead received…_”?** 

A: This means that the customer does not have a valid IBM Customer Number in Salesforce, which typically means that the case is opened by partners or internal IBMers.

**Why can’t I see the KYC Dashboard option in my Case view?** 
 
 A: KYC Dashboard is only available to be launched from a case record.


**Is the KYC Dashboard impacted by Org Wide Default?**  
 
 A: Yes, on the Case details level, but you will still be able to see the Summary view of the Cases.


**Is the KYC Dashboard configurable?**  
 
 A: Not at this time.


**Do IPP partners have access to SmartCare?**  
 
 A: Not currently.


**Do Support Professionals need a Medallia Manager role to see surveys for other teams?**  
 
 A: No, not required.  You should be able to see surveys for all products for a particular client by product family or individual product missions.  
 

**Will surveys from Medallia Waves other than Support be visible through the KYC dashboard for a client?**
 A: No, only support related NPS will be shown through the dashboard  
 


**Will the KYC dashboard be available in the Lightning UI?**  
 
 A: Yes. This topic will be updated to reflect the Lighting steps for viewing the KYC dashboard.


