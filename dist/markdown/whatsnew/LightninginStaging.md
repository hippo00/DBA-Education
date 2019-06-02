## The Lightning Console is now in Staging!
The Lightning experience is much more than a new UI; it is a foundation. In this first release we are utilizing the out-of-the-box Lightning Console. Over time we will continue to add new features and improve the functionality. With this foundation, we will be able to provide you the functionality you have been asking for - functionality which the Classic Console does not support.


*  All are welcome to start getting hands-on experience with the new UI.
*  For detailed information about the Lightning Console, click <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic" target="_blank">here</a> to access the DBA-Education. This site will be updated as changes are made.  
*  Classic remains the default in staging. To switch from Classic to Lightning, click either of the “Switch to Lightning Experience” links. 

![image](https://media.github.ibm.com/user/146797/files/d08b5b7c-d863-11e8-89ba-14d491caff98)
*  To switch back to Classic from Lightning, click the “Switch to Salesforce Classic” link. Any changes you have saved to your Cases while in Lightning will be there when you view the Case in Classic.
![image](https://media.github.ibm.com/user/146797/files/d79b299c-d863-11e8-8702-289d954507a0)
*  Please provide feedback via the <a href="https://ibm-analytics.slack.com/messages/CDJ8X6TQA" target="_blank">#csp-lightning Slack Channel</a>, rather than opening an internal Support Case. Your feedback will quickly help the development team fine-tune the Lightning Console for production.
*  We are aware of some current functionality that needs further development. Below is a list of these items (we do not want you to think we overlooked these):
    *  Migration to Lightning has been focused on the pages for our various Case types (Web, Email-to-Case, etc.). Changes will be made to related pages like the Support Mission and Contact at a later date, so please focus feedback on the Case pages only at this time. 
    *  The Article Management & Ideas tabs will not be supported     
    *  The KYC Dashboard is currently unavailable. 
    *  The Knowledge widget is currently unavailable.    
    *  Buttons on all related lists are currently unavailable. That includes ‘Upload’ on the Diagnostic related list, and the ‘Up Vote’ and ‘Down Vote’ on Attached Asset related list.    
    *  On the Case Defects related list there was a ‘Create New Defect’ and ‘Attach to Existing Defect’ button, now there is a ‘New’ button that allows you to attach existing defects. Agents should instead use the action buttons on the far left panel of the Case page for ‘Create a Defect’ and ‘Attach Existing Defect’.      
    *  When creating a Duplicate Case, a new tab does not automatically open. However, a message will display on the screen with the Case number, you can click it to open the duplicate Case in a new tab.   
    *  When a Case is closed via the Lightning Console, the Case status will be "editable" until the Case is reopened. We're currently working on a way to prevent this behavior on closed Cases.
    *  Closed Collaboration Cases with a closed Parent Case are able to be reopened without opening the Parent Case. 

### ARM Button Issues related to Lightning
In Salesforce Classic console, users will now see 3 extra buttons on their Attached Assets related list that only work with Lightning console....
![image](https://media.github.ibm.com/user/146797/files/8ccba476-dc34-11e8-8e40-bca38a9a40e8)
Users should continue to use the original buttons with icons to perform ARM actions in the Salesforce Classic.  If they do happen to click the last three, they will be presented with an error message directing them back to the other buttons...

![image](https://media.github.ibm.com/user/146797/files/9122a5a6-dc34-11e8-8feb-f848fb694843)

Clicking these three buttons will trigger a page refresh leading to data loss if someone has a post for example that has not yet been added to the Case.  We are working with the Salesforce team to identify alternatives or to find a way to hide these buttons from the Salesforce Classic console.

## Additional Lightning Communications
*  "Exciting improvements (Lightning!) are coming to the Salesforce Agent Console" blog posted<a href="https://w3-connections.ibm.com/blogs/8f0aca92-2010-4a32-914d-77dafc06c9cf/entry/Exciting_improvements_Lightning_are_coming_to_the_Salesforce_Agent_Console?lang=en_us" target="_blank"> here</a>  
*  Recording of the October 18 Client Support Transformation Weekly Call which featured a high level view of Lightning can be found <a href="https://sme.video.ibm.com/channel/23495615" target="_blank"> here.</a> 
