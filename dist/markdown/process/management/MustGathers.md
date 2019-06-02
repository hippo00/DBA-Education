
This document describes how Support Managers or Support Mission Leaders can configure the **Salesforce Product Pages** and Product-specific **MustGathers**

* [Step 1: Update the Welcome Message](/dba-support/DBA-Education/#/DBA-Education/process/management/mustGathers#welcome)
* [Step 2: Create Resource URLs](/dba-support/DBA-Education/#/DBA-Education/process/management/mustGathers#urls)
* [Step 3: Create Manage URLs](/dba-support/DBA-Education/#/DBA-Education/process/management/mustGathers#manage)
* [Step 4: Configure Mustgather](/dba-support/DBA-Education/#/DBA-Education/process/management/mustGathers#configure)



---

## <a id="welcome" name="welcome"></a>Step 1: Update the Welcome Message

Open the Support Mission and go to the Details tab. Go down to the Products and select a product. In the Product, go to the Community Configurations section.

![image](https://media.github.ibm.com/user/40285/files/befb5106-ca3e-11e8-8bae-e75900d161e0)

- Click New Community Configuration
- Select the Product Message record type

![image](https://media.github.ibm.com/user/40285/files/d50bdeac-ca3e-11e8-9c2f-2b467a8f5264)

You should update the "**Welcome to your new support experience!**" section of your page to include a proper **Community Links Name** (e.g. "Welcome to YOUR_PRODUCT_NAME") and a Product description (on the "Message" field").

- **Community Links Name:** Welcome to YOUR_PRODUCT_NAME Support
- **Select the product**
- **Add a message about the product or support**, eg. "look at the IBM Private Cloud SF page: https://www.ibm.com/mysupport/s/topic/0TO500000001o0fGAA/ibm-cloud-private?productId=01t50000004X1PWAA0"
- Check the Show in Community box to publish the welcome message
  ![image](https://media.github.ibm.com/user/40285/files/f904e7fe-ca3e-11e8-9468-8b9edbfa687f)
- Repeat for each product under your Support Mission

---

## <a id="urls" name="urls"></a>Step 2: Create Resource URLs**

There are two types of URLs that can be added, **Resource URLs** and **Managed URLs**. First, configure the resource URLs. Up to 5 URLs can be added.

- Open the Support Mission and go to the Details tab. Go down to the Products and select a product
- In the Product, go to the Community Configurations section
- Click New Community Configuration
- Select the Link record type
- **Create Documentation link** to the product Knowledge Center or central Documentation
- Community link name: YOUR_PRODUCT_NAME Documentation
- Select Product, example URL: https://www.ibm.com/support/knowledgecenter/en/SSSHTQ/landingpage/NetcoolOMNIbus.html
- Click Show in Community to publish
  ![image](https://media.github.ibm.com/user/40285/files/27bebfa2-ca3f-11e8-9ce5-8f4268551385)
- **Create Social Media link:** For example, post a link to the main product Social Media channel on Twitter https://twitter.com/IBM_CTS
- Community link name: IBM Cloud Technical Support on Twitter
- Select Product, example URL: https://twitter.com/IBM_CTS
- Click Show in Community to publish
  ![image](https://media.github.ibm.com/user/40285/files/67193eac-ca3f-11e8-8c88-c3483d021a58)
- **Create Technote or DWAnswers link:** For example, post a link to the main product tag in DWAnswers https://developer.ibm.com/answers/topics/omnibus/
- Community link name: Get Answers on dWAnswers Forum
- Select Product, example URL: https://developer.ibm.com/answers/topics/omnibus/
- Click Show in Community to publish
  ![image](https://media.github.ibm.com/user/40285/files/70e434f0-ca3f-11e8-874c-872726dde1d5)
- **Create Training link:** For example, post a link to the Support TV playlist
- Community link name: YOUR_PRODUCT_NAME How To Videos on YouTube
- Select Product, example URL: https://www.youtube.com/watch?v=_tGECbSIAaM&list=PL_4RxtD-BL5s5IJMC-gmDU6Z1EUlZDqGJ
- Click Show in Community to publish
  ![image](https://media.github.ibm.com/user/40285/files/a8e02954-ca3f-11e8-9b44-31022326aa4d)
- **Create Mustgather link:**
- Community link name: Collecting Data: Read First for Netcool Omnibus
- Select Product, example URL: http://www-01.ibm.com/support/docview.wss?uid=swg27010615
- Click Show in Community to publish
  ![image](https://media.github.ibm.com/user/40285/files/07d2403c-ca45-11e8-954c-c06a6e1a504b)

If there are multiple products in the support mission, repeat these steps to create 5 resource links for Documentation, Social Media, Technote or DWAnswers, Videos and Mustgather. There should now be 6 Community Configurations under each product in the Support Mission.

![image](https://media.github.ibm.com/user/40285/files/2a7d3f6a-ca45-11e8-90a3-319001fb4331)

---

## <a id="manage" name="manage"></a>Step 3: Create Manage URLs
There are three Manage links that can be added in the Salesforce Community Configuration. Note, this is a different section than Community Configurations.

- Open the Support Mission and go to the Details tab. Go down to the Products and select a product. In the Product, go to the Community Configuration section just under Product Information.
  ![image](https://media.github.ibm.com/user/40285/files/75d5128a-ca45-11e8-9706-10c95a786762)
- Double-click the pencil icon next to My Notification URL, Support Handbook URL and Download Fixes URL. Below are example URLs.
  My Notifications URL: https://www.ibm.com/systems/support/myview/subscription/css.wss/
  Support Handbook URL: https://www.ibm.com/support/customercare/sas/f/handbook/home.html
- Download URL. There are Several Options for the Download URL:
  - (Recommended) Fix Central Product specific link. For Example, https://www.ibm.com/support/fixcentral/options?selectionBean.selectedTab=find&selection=ibm%2fTivoli%3bibm%2fTivoli%2fTivoli+Netcool+OMNIbus
  -  Fixes by version or Recommended fixed, Feature Packs by version, Latest Fix Pack
  -  Link to a Fixes Landing page (either a DCF or Social Media) link that will display multiple download links to Fixes by version or Recommended fixed, Feature Packs by version, Latest Fix Pack. etc....
  -  Fix Central Generic Link https://www.ibm.com/support/fixcentral
- Once Modified, Save the Product for these changes to take effect.
  ![image](https://media.github.ibm.com/user/40285/files/c505fcc0-ca45-11e8-9ca8-d6fac467703c)
- To view your product support page, go to:
  - https://www.ibm.com/mysupport/s/recordlist/Product2/Recent
  - Select your product from the list.
- You should see the configured Welcome message, 3 Manage URLs and 5 Resource URLs –
  ![image](https://media.github.ibm.com/user/40285/files/f32fea0c-ca45-11e8-8a3d-1c2bf04458fb)

---

## <a id="configure" name="configure"></a>Step 4: Configure Mustgather
Salesforce Mustgather definitions are the optional questions the customer will be presented with when they open a new case via the Salesforce portal. Mustgather is not the Collecting Data technotes. Only the Support Mission Lead or Manager can configure the MustGather. Use the following template to submit a request to the Support Mission Lead to create/update a MustGather field for a product. 

<a href="https://apps.na.collabserv.com/files/app/file/3ae2d22a-3cc7-4e22-90b8-5561b4933241" target="_blank">Salesforce-MustGatherQuestions</a>

Two default Mustgather are automatically created for Product Version and Operating System, but they are blank picklists initially and are not visible on the portal. They need to be configured with possible values before customers can use them.

Open the Support Mission and go to the Details tab. Go down to the Products and select a product. In the Product, go to the MustGather definitions section.

![image](https://media.github.ibm.com/user/40285/files/0320224c-ca46-11e8-8609-267b9e432ffa)

Edit each MustGather Definition. Edit Product Version.

![image](https://media.github.ibm.com/user/40285/files/1013caa8-ca46-11e8-9153-c341a11112bc)

Populate the Picklist Values with all possible product version values that are supported.
Check the Visible on Portal checkbox.

![image](https://media.github.ibm.com/user/40285/files/239dce5c-ca46-11e8-9709-1696b55c80bf)

All other fields such as Required Category, Type and Display Order cannot be changed.
Edit the Operating System Mustgather.

![image](https://media.github.ibm.com/user/40285/files/3245533a-ca46-11e8-8a8c-13417f15c56f)

You can create additional Mustgather Standard definitions. Under MustGather Definitions, click on New Mustgather Definition. For example, I created a Mustgather definition for the product component.

![image](https://media.github.ibm.com/user/40285/files/40a3f300-ca46-11e8-9d4e-1a8fe85368c4)

When the customer goes to open a case via www.ibm.com/mysupport, they will be prompted to optionally include these values.

![image](https://media.github.ibm.com/user/40285/files/4cb08dac-ca46-11e8-8dd7-5ed38800d481)

Within Salesforce, these values will be displayed under Must Gather in each Case details –
![image](https://media.github.ibm.com/user/40285/files/99a4f4b2-ca47-11e8-8100-b41f7694033d)

---

## Related Pages
* <a href="https://mediacenter.ibm.com/media/t/1_1sun1g1l">Salesforce MustGather Feature training video for Agents and Managers</a>
