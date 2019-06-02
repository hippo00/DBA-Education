
When investigating a problem, IBM Support may need the customer to collect and provide problem documentation.  The customer follows clear instructions to collect the documentation, then provides it to IBM for analysis.  Some IBM products provide collectors which automatically collect, bundle, and upload documentation to the appropriate repository.  IBM Support will be notified when new documentation is uploaded for a case.  The mechanics of analyzing documentation vary across IBM products and engineers, and so are described here only generically.

We differentiate between the following scenarios for Attachment handling:
 * [Customer is uploading attachments](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#customer)
 * [Case notification of attachments](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#notifications)
 * [Agents view the Files that have been attached to a Case](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#notifications)
 * [Archive Explorer Integration](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#aex)
 * [How can Agents upload files to a Case ?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#upload)
 * [Agents make data available for download by Clients](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#fromibm)
 * [How to handle Blue Diamond attachments](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#bluediamond)
 * [How do I find archived cases in EcuRep?](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/attachments#archived)

---

## <a id="customer" name="customer"></a>Customer is uploading attachments

Customers upload attachments through the IBM Support Community, Ecurep, Blue Diamond or Custom Blue Diamond. If your Client contact needs help, you can share this Video on Opening and Managing a Case in IBM Support Community: https://mediacenter.ibm.com/media/t/1_47uqs38j

* When clients upload files from the Create a Case screen, they can drag and drop or choose files to upload.  These files will be received into EcuRep and the case "Diagnostics" section will be updated with links to the customer doc.
  ![image](https://media.github.ibm.com/user/19331/files/2fe01ec0-b50d-11e8-9b56-d2fbc734b694)

* Customers can also use this direct URL to upload data to a case : http://www.ecurep.ibm.com/app/upload_sf
  Please note that we need to use email ID ecurep@ecurep.ibm.com.   EcuRep will not update a case if you use ibmsecurity_support@ecurep.ibm.com.  As a work around to email issues, you can email the customer and put the case number in the subject line (TS0000xxxxx) and copy ecurep@ecurep.ibm.com.  The email is included in the Salesforce case.  This can mitigate issues where the customer says they are not getting updates  (and you can copy whoever else you want).


---

## <a id="notifications" name="notifications"></a>Case notification of attachments

When a customer uploads files, the case **Internal Status** is changed to **Diagnostic File has been Received** and the **Status** is set to **Waiting for IBM** (<a href="/dba-support/DBA-Education/#/DBA-Education/process/case/statusMapping">Chat Status Mapping</a>)

![image](https://media.github.ibm.com/user/42891/files/34d86c38-ad34-11e8-8b8d-df6763ab2492)

---

## <a id="view" name="view"></a>Agents view Files attached to a Case

Files uploaded display under the "Diagnostics" <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a> in the Case Details. Only the most recent files uploaded are displayed. Select Show more or Go to list to display more entries. 

![image](https://media.github.ibm.com/user/42891/files/a500401c-ad34-11e8-86f1-f76ef7a6734c)

---

## <a id="aex" name="aex"></a>Archive Explorer Integration

If the customer uploaded the files through the IBM Support Community or Ecurep, select AE Files to launch Ecurep Archive Explorer. Work with Archive explorer Files just like normal.

![image](https://media.github.ibm.com/user/19331/files/8d027046-b4de-11e8-839c-8137d314214e)

---
## <a id="upload" name="upload"></a>How can Agents upload files to a Case ?

* Go to the Details tab of a case and scroll down to the Related List called "Diagnostics". You will see two Buttons: **Upload** and **AE Files**:
  ![image](https://media.github.ibm.com/user/19331/files/16a19aca-b674-11e8-95af-c075e4fabd12)
* To upload a file to ECuRep, press the Upload button.
* The Upload UI will open in a Browser. Press **Click to Select Files** or Drag and Drop the files to be uploaded
  ![image](https://media.github.ibm.com/user/19331/files/40489464-b674-11e8-861d-4ccc312b4b30)
* Select or drop one or more files to the "Upload" widget. You will see the files listed
  ![image](https://media.github.ibm.com/user/19331/files/5d9ae0bc-b674-11e8-93a2-8d66ae35d11c)
* Press the "Upload" Button. The overall Progress will be displayed
  ![image](https://media.github.ibm.com/user/19331/files/73f79544-b674-11e8-96d4-443147e9b8e3)
* You can add more files at this point if desired. To the uploaded files, go back to the case details tab and verify the files appear in the Diagnostics Related List. You may have to refresh the Browser window to see the files listed.
  ![image](https://media.github.ibm.com/user/19331/files/a2c67e9e-b674-11e8-8bae-773a1a75b398)
* In the **Diagnostics** Related List, if you click on the file name, you will be taken to the **full** Archive Explorer view. Here you can work with all of the features of "Archive Explorer". If you only need to work with the Files, press the **AE Files** button, only the Archive Explorer Files View will be displayed in a separate window. Alternatively, you can view the AE Files on the Service Console "Feed View" by clicking on the **AE Files** tab. 


## <a id="fromibm" name="fromibm"></a>Agents make data available for download by Clients

Using the "FROMIBM" function, you can make data available for clients. To meet legal requirements, only a limited number of use cases is covered. Prior to publishing a file, a user needs to confirm that these requirements are met. At best, data is stored in a ticket directory in the ECuRep Datastore and the publishing process initiated from there. But it's also possible to store files in /ecurep/fromibm/ sub directories and publish them. By default a file is available for download for 7 days but this can be adjusted in the initial process or at any time later.

Data stored in a Case directory is made available for the client in the directory /fromibm/case/TSxyz on the FTP server. The directory /fromibm/case cannot be listed therefore you need to know the Case number to be able to access the Case data. This setup is similar to the /fromibm/private directory. If yo u enter a customer email during the fromibm upload process, the customer will get an email with a link to the upload directory. To upload a file to the ftp server, please follow these steps:

* Open <a href="https://ecurep.mainz.de.ibm.com/ae5/login/login.html" target="_blank">Archive Explorer</a>, You will be asked for your IBM Intranet ID and Password.
![image](https://media.github.ibm.com/user/19331/files/7f1daa96-b4fb-11e8-9da0-beade59ddd7b)

* Select the file you want to upload to ftp server from Ticket directory (PMR,RCMS,CROSS, Salesforce) or in a HW or SW directory:
![image](https://media.github.ibm.com/user/19331/files/b25fac6e-b4fc-11e8-8c39-b37904eb75e5)

* Right click on the file and select "Transfer" and "Publish for download":
![image](https://media.github.ibm.com/user/19331/files/d192fab4-b4fc-11e8-8750-d6d3910710f2)

* Here you have the possibility to select some additional files, you want to transfer too.
If you want to inform the customer about the uploaded file(s), please post an information on the Case Feed. You can determine a date, how long the files should be available on FTP server. The checkbox  I confirm that the files are conform to the rules above must be selected ! 
![image](https://media.github.ibm.com/user/19331/files/7e60b0f6-b4fd-11e8-957f-9195344f7a0c)

---

## <a id="bluediamond" name="bluediamond"></a>How to handle Blue Diamond attachments

* When the client creates a case, they are given a link to upload data to Blue Diamond.
  ![image](https://media.github.ibm.com/user/19331/files/6e91fa90-b50c-11e8-9320-e6ce237ef1c0)

* You can see if a Case is Blue Diamond in the details view - though we would prefer something a little more "colorful", and something in the Feed view?
  ![image](https://media.github.ibm.com/user/19331/files/dba77b78-b50c-11e8-9e42-d470bc93d0d5)

* The user account page is where the Blue Diamond indicator is set to show that they are Blue Diamond (you cannot edit this field):
  ![image](https://media.github.ibm.com/user/19331/files/f4b75796-b50c-11e8-9044-70990a8b6808)

* To find all the open Blue Diamond cases you can use the following view.  Note : You need to use "contains" = Yes for Blue Diamond (equals does not work).
  ![image](https://media.github.ibm.com/user/19331/files/06e7993a-b50d-11e8-822e-a79c0da7c319)

---

## <a id="archived" name="archived"></a>How do I find archived cases in EcuRep?

When recovering EcuRep data for Cases that have been closed in SalesForce, we use the same process that we did with PMRs to restore the data from Archive.  However, the restored data will appear in the original case folder in Archive Explorer and not in the Restored Tickets folder where restored PMR data shows.  

**Note:** When a case is closed, data remains on EcuRep for 7 days and then is moved to Archive for 180 days.  After 180 days the data is permanently removed.

* On Archive Explorer, click ECuRep Actions and Click Restore From Archive
  ![image](https://media.github.ibm.com/user/19331/files/8f162b72-b671-11e8-8be5-67ab9b5eb98d)

* Enter the Case Number in the Salesforce Data box:
  ![image](https://media.github.ibm.com/user/19331/files/ad9a4d3a-b671-11e8-9811-3698481e4f23)

* You'll get a summary of the Case that was found
  ![image](https://media.github.ibm.com/user/19331/files/dbc276ba-b671-11e8-8a13-316e49eb963a)

* Choose how long you want the data to be restored for and Click Restore, you'll receive an eMail from Ecurep once the restoration was completed
  ![image](https://media.github.ibm.com/user/19331/files/f510b23a-b671-11e8-8dd2-4ed81155d7a9)

* Files/Mail are viewable in the original Ticket folders and not in the restored tickets folder
  ![image](https://media.github.ibm.com/user/19331/files/14e4a60c-b672-11e8-8484-4288fb4a1f63)

* Restored files are found in the Restored Tickets folders
  ![image](https://media.github.ibm.com/user/19331/files/2461b430-b672-11e8-8196-66f81391e086)
