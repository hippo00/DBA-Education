Since the implementation of the General Data Protection Regularion (GDPR) on 25 May 2018, Support cannot download customer files to reproduce locally. Client data can be accessed through Ecurep Archive Explorer, Ecurep Debug Systems, Reproduction Environments or Blue Diamond.

## Ecurep Archive Explorer
If the customer uploaded the files through the IBM Support Community or Ecurep, select AE Files on the Salesforce Case Details to launch Ecurep Archive Explorer or go directly to Archive Explorer
https://ecurep.mainz.de.ibm.com/ae5/login/login.html

![image](https://media.github.ibm.com/user/42891/files/0b108ea2-b834-11e8-977d-f1030914b9ae)

Work with Client Data in Archive Explorer through the right-click menu
- Open in Web Editor to view or search text files
- Unpack to unzip or untar files
- Extract to Split or Unterse a large file
- Run Tool to run a diagnostic tool against files
- View to run a Checksum, Tail or Top

<img width="795" alt="image" src="https://media.github.ibm.com/user/42891/files/8d9249ce-b834-11e8-824e-0aec4170e9f4">

See the [Archive Explorer Help Center](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wc6bdda728353_4989_8836_663dd156556e/page/Help%20Center) for more information on AE.

## Ecurep Debug Systems

Ecurep has many Debug Systems including Unix and Citrix (Windows) to view and run tools against Client Data. See [Ecurep Debug Systems](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W620a99f1a73e_4d3a_b250_40751df17b67/page/Debug%20Systems) for more information.

In Archive Explorer, find the path to access files on Ecurep Debug Systems with right-click menu Path to File.

<img width="795" alt="image" src="https://media.github.ibm.com/user/42891/files/c26de512-b835-11e8-98c5-b67c12ebf766">

The Unix path, Windows Path and Citrix Path is displayed. Copy the path to the Ecurep Debug System.

<img width="405" alt="image" src="https://media.github.ibm.com/user/42891/files/e5f92ece-b835-11e8-9ab1-0d3cd2cee0cf">


## Reproduction Environments
Each Business Unit or Department has configured different reproduction systems for testing. Transfer files from Ecurep Archive Explorer to a Reproduction Environment with right-click Transfer File to Host (FTP)
![image](https://media.github.ibm.com/user/42891/files/a0404946-b833-11e8-9bcd-78c9ab7dfb31)

Select the Destination Host for your Reproduction environment, Target Directory, User ID, Password and Binary Mode. Optionally, select to receive an email when the transfer completes.
<img width="547" alt="image" src="https://media.github.ibm.com/user/42891/files/b64a5806-b83a-11e8-8146-58710a50f6b4">


## Blue Diamond
Client data uploaded to Blue Diamond or Custom Blue Diamond is not available from Archive Explorer. Blue Diamond Client Data can be accessed through the [Citrix Blue Diamond Desktop](https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/Wf4b370477cd2_4f36_b1b4_447631a7f568/page/Access%20the%20Lab).

Blue Diamond issues requiring Client Data must be reproduced on Blue Diamond analysis machines

In Salesforce under Case Details, Blue Diamond accounts are designated with the Blue Diamond Account field.
<img width="448" alt="image" src="https://media.github.ibm.com/user/42891/files/b76b476c-b83b-11e8-9d90-ae962b459369">

To find the file path for Blue Diamond Client Data from Salesforce under Diagnostics, select the Details for the File.
<img width="1326" alt="image" src="https://media.github.ibm.com/user/42891/files/f20f9c56-b83b-11e8-8d32-5f9776df6dfb">

The Standard Blue Diamond or Custom Blue Diamond file path will be listed under Comments
<img width="765" alt="image" src="https://media.github.ibm.com/user/42891/files/3ec13fc8-b83c-11e8-9f48-17268374c638">

Transfer data to a [Standard Blue Diamond Analysis Machine](https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/Wf4b370477cd2_4f36_b1b4_447631a7f568/page/Transfer%20data%20to%20a%20PMR%20analysis%20machine) or access Client Data from [Custom Blue Diamond](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wfcdc0ecbf2e3_4a8d_9b9c_240032ee48e1/page/Custom%20Blue%20Diamond%20-%20Support%20Instructions).