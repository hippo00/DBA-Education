### Known Lightning Issues

**FYI, Lightning FAQ's, featuring Q&A captured from the Lighting Pilot Office Hours session, has been posted <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningfaq" target="_blank">here.</a>** 

**Issues with Workarounds**
1) On the console, if you see the "Related List Quick Links" UI look jumbled like this or you are recieving the error below then you need to "disable content blocking" on your web browser:**
![image](https://media.github.ibm.com/user/19331/files/3535dcc8-1919-11e9-8fdd-ad8eb48cddc3)

2) **Oops...**
**There was a problem with your authentication request. Please check the URL and try again.
2019-05-23T21:44:51Z
Error details
FBTSPS061E An unexpected error has occurred with a protocol module com.tivoli.am.fim.fedmgr2.protocol.AuthenticationServiceAuthEventDelegateProtocol.**

This issue can be resolved by also disabling content blocking on your browser (Firefox or Safari) as well as cross-site request blocking (Firefox)

------

**Firefox** tends to block the URL for Salesforce Lightning. To fix this, please click on the “Shield” icon in URL right when you are trying to get into the Lightning console, and allow cookies access for this URL

------
**Safari** you need to uncheck "prevent cross-site tracking" under the privacy tab of the preferences menu.

2) Make sure you are using https://ibmsf.my.salesforce.com to access the Cognitive Support Platform 

3) Ensure you are using a current browser. IBM as adopted a browswer independent strategy which allows employees to choose the browser they use daily. **Best performance** is seen with **Chrome** over Firefox. It is however the employees responsibility to keep those browsers at current versions. If you are not running a current browser version you are subject to unpredicatble results, security exposures and defects which have already been resolved by the browser vendor. Additinally, Saleforce and IBM only test with the last versions. 

4) Also, check out the new Tips and Tricks for Lightning <ahref="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank">here.</a>

5) This is a reminder that Salesforce and IBM’s Cognitive Support Platform test with the latest versions of modern browsers. We have observed that many agents are not running current browser version when connection to our SalesForce Org. As a result, agents running older versions will have unpredictable results, encounter defects fixed and are potentially open to security exposures. The majority of our users are using Chrome and Firefox. IBM has a **Browser independent strategy** now that allows IBM’rs to use the browser of their choice however, it is up to the individual user to keep this browser current. Please ensure you are running an updated browser. 


**Blockers**
1) ~~Changing owner from the left panel in the case causes a hang.~~  **Resolved**
2) ~~Milestone timer intermittantly freezes.~~   **Resolved**
3) ~~Live Agent Chat~~ - **Resolved** 


**Known Issues**

There are a number of issues in Lightning to which Salesforce has agreed to resolve. We will post release dates when these become available. In the meantime, this is the list of known issues we are working to address.

*  Making Public Posts Private and Private Post Public - Work around provided <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#visibility" target="_blank">here.</a>  Full Fix - **Winter 20', (Oct 12, 2019)**

*  Responsive Page Design (fields/elements/containers resize or hide based on display width or device type.) 

*  Allow users to change the size of panels in case layout **Spring 20', (Feb 15, 2020)**

*  Add an icon, label, and color code to the background of feed posts that are internal and private so that it is easier to see which posts are visible to the client and which are not.  **Winter 20', (Oct 12, 2019)**

*  Ability to expand or collapse all sections in the case details (left hand panel) 

*  Ability to change the direction of the case feed. (Start at top/bottom) 

*  Control where tabs open (in same browser session) for Main and Skill Cases related to top-level or sub tabs  **Summer 20', (June 15, 2020)**

*  Indicate via a highlight or indicator when changes are made in the case details 

*  Update the Feed Item component so we can include all posts at the bottom of the Post component 

*  ~~Automatic Refresh of case views~~ - **Resolved** in Tips and Tricks with SF Extras Widget <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips" target="_blank">here.</a> Full Fix - **Winter 20', (Oct 12, 2019)**

*  Add button to feed allowing jump to top or bottom of case feed 

*  Remove or allow modification of the +Follow button to free more space 

*  Hover-over missing on case subject in the Case List views - **Spring 20', (Feb 15, 2020)**

*  Hover-over of the related list pop-ups, control the location of the pop-ups  

*  ~~Topics - Unable to search for cases using topics in lightning~~ **Topics to be depricated please use Keywords**

*  Large posts, greater than 10K characters 

*  Add images to posts (screen shots) 

*  Ability to post Rich Text 

*  Feed: Only 8 lines of the post are shown - **Winter 20', (Oct 12, 2019)**

*  Drag and Drop (columns) missing from the case list view 

*  Ability to scroll down the feed using arrows 

* ~~Teams using Email-to-Case in Lightning:~~
    *  ~~There's a known issue which produces an error when including an attachment in a Case update.~~ **Resolved**

*  ~~Manual case timer - when adding time manually, the start time is now a picklist in 15 minute increments.~~  **Resolved this was an intentional change based on user feedback**

*  Unable to access a list of the items that you follow. (you can see updates from all of those items, but not a single list)

*  Unable to filter a case view by a single column. You can filter the entire view, but not based on a single column.

*  Unable to print/export a list view

*  Some timestamps in case feed are relative (e.g. 1 hour ago)

*  Some reports are not available in Lightning and must be opened "in classic" in the Lightning reports module.
  
*  Presence Indicator on Omni Channel - **Winter 20', (Oct 12, 2019)**

*  Omni Channel for disconnected state should remain . This should provide required UI to agents when sleep computer, loose network connection or open new tab - **Winter 20', (Oct 12, 2019)**

*  Add an icon, label, and color code to the background of feed posts that are internal and private so that it is easier to see which posts are visible to the client and which are not. **Winter 20', (Oct 12, 2019)**

Delivery Dates are Subject to Change. 

 <br>


 
 
