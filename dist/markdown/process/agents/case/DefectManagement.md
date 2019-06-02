The new **Defect** object is a first step to housing defects inside Salesforce. This is a preliminary step to establish the new defect object and allow users to store the id to existing defects in other systems (e.g. APARs). In this release we are only establishing the object and allow for population of the fields in the object. It is not viewable externally and so is just meant for internal storing of data at this first release. In future releases we will enhance this object to allow for storing all defect information in Salesforce, bridging to other repositories, search of the defects, ability to follow the progress of a defect and reporting.

## Creating a new Defect

On the Case page layout, there is a <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a> for Case Defects with a **Create New Defect** button:
![image](https://media.github.ibm.com/user/19331/files/f8929006-b101-11e8-9671-c5bb986a55bb)

Pressing the **Create New Defect** button will open a new tabw that will allow the user to enter a description, a problem summary, whether it is public or not, and legacy information if necessary.

**Warning:** you will need to enable popups for your browser(s) as it will open as a new window or new tab. 

![image](https://media.github.ibm.com/user/19331/files/734ad20e-b102-11e8-9289-d0b416bdfa37)

Note that you must provide a **Legacy Type** from the dropdown if you fill out the Legacy Number field to create the defect and link it to your case. If you dont want to link a legacy Defect against the Defect in Salesforce pick "None" here.

![image](https://media.github.ibm.com/user/146797/files/b566ad80-6b7d-11e9-938c-ab88f131f615)

**Engineering Change (ECA)** 
This information relates to issue #6520 featured in the Sprint 8 - 2019 Release Notes blog.
Engineering changes are manufacturing faults or safety recalls that go outside the scope of regular product warranties, and are typically fix-on-contact (fits into 'breakfix' process) or proactive (fits into 'preventative maintenance' process).

As such, cases continue to be created and entitled the same way as they are today. However, if during the course of problem determination it is identified that the reported symptom relates to a 'known manufacturing defect' (aka an "Engineering Change Announcement / ECA"), then beginning with Sprint 8 the RTS Support Agent can 'attach a defect' with a type of "ECA".

Once a defect is created (see example ECA number 123 below) it can be attached to multiple cases by looking up the existing/known defect (an entry only needs to be 'created' the first type an ECA announcement is defined & used). 
![image](https://media.github.ibm.com/user/146797/files/f19b0d80-6b7f-11e9-9818-4a8dc0616aaf)

**Attaching an "ECA" to the case will have the following effects:**

1. Brand / Service Planning analytics can differentiate activity related to 'normal lifecycle' (regular warranty/breakfix) versus activities related to Engineering Changes (case activity where specific ECA defects were attached)

2. Cost allocation rules can/will consider "ECA" attachments when allocating cost, as most cost of "Engineering change announcements" is allocated to different 'cost buckets' than standard warranty/maintenance.
 
3. At this time no other functional changes occur on-platform as a result of attaching an engineering change announcement (ECA). Any information related to that ECA (such as part numbers, recommended service activities) should be manually relayed by the support agent into the work order (for field/SSR instruction) or to the customer as appropriate.

Once the Defect is created it will appear in the Case Defect <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a>, as well as, two fields will be populated on the case details page **Defect Information** and **Defect Count**. **Defect Information** is the new name for the field **Defect (Legacy Defect)** and displays a combination of **DefectID**, **Legacy Type** and **Legacy Number** in the syntax : ```DefectID (LegacyType:LegacyNumber)```. The **DefectCount** attribute is a formula to calculate the number of associated Defects on a Case and it replaces two fields **Defect** and **Defect?**. 

![image](https://media.github.ibm.com/user/19331/files/d76e9334-b106-11e8-8189-34b596338af6)

## Attaching to an Existing Defect

For attaching an existing Defect, there is an **Attach to Existing Defect** button. Pressing this will bring up a screen where they can populate the defect lookup:

![image](https://media.github.ibm.com/user/19331/files/fe545056-b106-11e8-9c57-15307f4a7f7f)

Note that the **All Fields** radio button must be selected to search fields other than the name field. You can search for a specific Legacy Number, or any text in the problem or description fields as well. When the record is created linking the case to the defect, it will show in the related list:

![image](https://media.github.ibm.com/user/19331/files/15ddeb74-b107-11e8-81c9-dd3fb8fa53c4)

Clicking the link to the Defect will display the Defect record:

![image](https://media.github.ibm.com/user/19331/files/29583858-b107-11e8-96c0-8016b6031d51)

Here you can see the defect information, as well as all impacted cases. 

**Action required:** You will need to update your list views that used the previous **Defect** or **Defect?** fields to now use **DefectCount** and **Defect Information**.

![image](https://media.github.ibm.com/user/19331/files/661ea128-b107-11e8-8138-b1f646c36867)

