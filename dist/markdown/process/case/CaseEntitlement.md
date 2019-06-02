## Section purpose:  describe in-production entitlement related functionality.
Please post questions or feedback via the anonymous feedback feature at the top of this page or the [#csp-DBA-Education-feedback](https://ibm-technical-support.slack.com/messages/CCTFQ01BM) Slack channel

[This page](https://ibm.box.com/s/gt9o7uqpm4cm4ebo8os69bzlroyl5a64) lists support contract types in production and describes support contract terminology and data sources.

If it's not mentioned on this page, it's not in production. This page will evolve and update as more entitlement functions go-live in production. Functions are for all products boarded to the platform unless otherwise noted.

* [Tiered Support](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#tiered)
* [Accelerated Value Program](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#avp)
* [Service Extensions](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#servext)
* [Premium Offering Management aka Precedence Logic](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#premium)
* [Machine Entitled Serials](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#serials)
* [Milestone Timer](/dba-support/DBA-Education/#/DBA-Education/process/case/entitlement#timer)

### <a id="tiered" name="tiered"></a> Tiered Support
MVP deployed Dec 12th for a new three tier support offering
- Tiered Support Enterprise (basic)
- Tiered Support Enhanced
- Tiered Support Premier

These entitlements are listed as "Special Bid"
![image](https://media.github.ibm.com/user/34666/files/a90a3f2e-ff95-11e8-80e5-50fd433e5823)

*Note*: only one product as of Dec 13 is part of this MVP which is Watson Supply Chain Insights, a SaaS cloud offering.
For more information, click to [read the announcement](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/9/897/ENUS218-339/index.html&request_locale=en)

### <a id="avp" name="avp"></a> Accelerated Value Program (AVP)
The Entitlement Name in the case will say Passport Advantage PA Premium Support if an AVP contract exists for the product and account of the case.

On March 19, we are implementing AVP entitlement contacts, after which only members of the Entitled Contact list (previously known as Named Callers), can edit/manage  these cases going forward. Some users may find their access reverts to read only where they previously had edit capability. If your clients have concerns they should work with you. Please communicate this to your clients as needed.
The entitled contacts are listed in the Contacts section of the case's entitlement details
![image](https://media.github.ibm.com/user/34666/files/19d1c880-4708-11e9-8080-5a4390eb4e8c)

Users not on the entitled contacts list for an AVP case will see the following if they click on the case in the community
![image](https://media.github.ibm.com/user/34666/files/e9008c00-4725-11e9-8cfd-64aff5b98c61)

As the AVP PIDs are enabled, Cases migrated over via the RETAIN bridge will need to be triaged on Salesforce.  They will show up in the respective Support Mission on a Salesforce product with "Accelerated Value Program" in the name.  It's important to know that these products are hidden from the Clients view.  These cases need to be triaged and the product should be changed to the product within that bundle that the customer is reporting the problem against.

For example, let's say we have the following bundle (might not be 100% accurate):
Accelerated Value Program for UrbanCode (SAJD5)   **Hidden from client view
UrbanCode Build (SAII2)
UrbanCode Deploy (SAIT2)
UrbanCode Release (SAIT0)
Triage as quickly as possible.

Using the example above, a PMR could be opened in RETAIN against the AVP PID "Accelerated Value Program for UrbanCode".  Let's say the client is reporting a problem with UrbanCode Deploy.  That PMR will be migrated over to Salesforce and the Case will be associated to the "Accelerated Value Program for UrbanCode (SAJD5) " product and will show up in the appropriate Support Mission for that product.  This case needs to be triaged in Salesforce and the product changed from the AVP product to the UrbanCode Deploy (SAIT2) product and the case can be worked just like any other case.

### <a id="servext" name="servext"></a> Service Extensions
Upon case create, system will check for an active service extension when no active support contract is found if product version selected by the client.  If the case's selected product version is listed under 'Product Version' and the (end of support) 'EOS and eligible for Service Extension' is checked as shown below, the system will check for a service extension contract and list the associated entitlement on the case.

![image](https://media.github.ibm.com/user/34666/files/f098ef3a-ff94-11e8-9429-30092f02df98)

*Functional dependencies:*
*1) client selects version upon case create*
*2) product version populated with EOS and eligible for Service Extension checked.  Service Planners maintain the EOS and eligibility checkbox.*

![image](https://media.github.ibm.com/user/34666/files/717ec89a-ff95-11e8-9054-4a9bea6dd165)

### <a id="premium" name="premium"></a> Premium Offering Management aka Precedence Logic
Upon case create, the system selects the right entitlement to apply based on the service contract premium hierarchy.  Many offerings have both Standard and Premium, the system will choose premium if both exist for the same product on the account.  For example Passport Advantage Premium is higher precedence than Passport Advantage Standard.

### <a id="serials" name="serials"></a> Machine Entitled Serials
Machine entitled serials have software sold with a machine or operating system

***From the Console:***

The Product detail page shows the "Is Serialized" flag to indicate that the customer has a Machine Entitled serial.

![image.png](https://zenhub.ibm.com/images/5952a9fd71aa2e2d58851b20/72dd2e96-a52c-46ab-b83d-759bd9ad93c7)

The EAT (ETL Administrator Tool) is used to set "Is Serialized" flag on a product by the service planners.

An Agent can see all the products that are serialized for a customer by going to the assets for the customer 
- From the "Account Information" section select the "Account Name"
- Select "Assets" from the "Related List Quick links"
- Under Serial number Column you will see the assets that are associated with the software

![image.png](https://zenhub.ibm.com/images/5952a9fd71aa2e2d58851b20/819d27da-5314-4ed4-b652-9bba1ee1ce5a)

***From the Community:***

When a customer is creating a case from the community a list of serial numbers will be listed in the "Serial Number" section. The corresponding "IBM Customer Number" is selected automatically based on the "Serial Number" selected by the customer

If the customer selects an "IBM Customer Number" and then a "Serial Number" that is not associated with the customer number selected,  the Salesforce community page re-selects the corresponding "IBM Customer Number" associated with the "Serial Number" selected.

![image.png](https://zenhub.ibm.com/images/5952a9fd71aa2e2d58851b20/5c25b9df-22b4-4d7a-b561-aab12b628f45)

### <a id="timer" name="timer"></a> Milestone Timer - Holidays and Business Hours
Click <a href="https://www-prd-trops.events.ibm.com/node/875828" target="_blank">here</a> to see the list of countries whose holidays are loaded to production. The milestone timer counts down if the case arrives within case's entitlement business hours. For example, if a case arrives at 7:30am Eastern time zone in the US but the entitlement business hours is 8am-5pm, the timer will begin counting down at 8am.
Case entitlement hours are derived from the case account sold-to location.  No matter where in the world you are, if you are working on a case the Milestone Timer will reflect the time zone of the account sold-to location.
Business hours includes entitlement process hours (9x5 or 24x7) and holidays.
The better address information the case contains the more accurate the business hours will be.  If all we have is the country, US for example, then we default the business hours to EST time zone.  If we have a state and a country, the business hours should reflect the timezone of that state and country.
* If the account sold-to location is blank, the timer will default to Eastern for US and Canada (GMT-5).
* If the address information is incomplete and the country has 2 or more time zones,  a default TZ is selected for that country.

![image.png](https://zenhub.ibm.com/images/583f0d9bfdfd5b9223bbbf7a/e74a445b-27e4-4fb4-b490-4363e0cffbc0)

