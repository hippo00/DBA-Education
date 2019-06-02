# Introduction to Lightning Experience
* The lightning experience is much more than a new UI. It is more of a foundation. In this first release we are utilizing the out of the box lightning console. Over time we will continue to refine and as before continue to add new features and functionality.
* This document attempts to describe the new Lightning layout and highlight the differences between Classic and Lightning relating to the Case screen where we handle Cases from taking ownership through to case closure.
* Where possible, the document highlights known issues, RFEs and plans to address these.
* More detailed information relating to other aspects of the UI such as Case Views, Case Prioritization, Reporting etc. is described in the DBA-Education.

### Main Case screen:

![01_main_annotated_1](https://media.github.ibm.com/user/41770/files/51d57300-4b2f-11e9-99f6-ad89ab4ebe47)

* The fixed 3 column layout doesn’t have the ability to resize or hide these columns. This is one of several Known Issues the Salesforce team are working to address. (See lightning known issues)

### Case Post/MPPC:

![02_DBA-Education_post_mppc](https://media.github.ibm.com/user/41770/files/a0830d00-4b2f-11e9-87da-1671e4f5b411)

## Table of Contents

### [Switching back to Classic](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#switch2classic)

## Left Sidebar
### [Case Details](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#casedetails)
### [Header](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#header)
### [Follow](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#follow)
### [Post](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#post)
### [Edit](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#edit)
### [Support Search With Watson](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#search)
### [ARM](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#arm)
### [Edit Contact](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#edit_contact)
### [Reassignment](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#reassignment)
### [Skill Case](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#skillcase)
### [Archive Explorer](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#archiveexplorer)
### [Collaboration](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#collaboration)
### [Add Defect](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#createdefect)
### [Feed Item Visiblity](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#feeditem)
### [Printable View](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#print)

##  Related List Quicklinks
### [Related List Quick Links](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#relatedlistquicklinks)
### [Case Details](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#casedetails)
### [Main Details](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#maindetails)
### [Inline Editing](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#inlineedit)
### [Split View](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#split)

## Central Section
### [Summary / Feed /Activity](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#summaryfeed)
### [Email Quick Action Tab](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#qat)
### [Skill Case](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#skillcase)

## Right Sidebar
### [Milestones](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#milestones)
### [Topics](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#topics)

## Menu Bar
### [Menu Bar](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#utility)
### [Mini CP](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#minicp)
### [Omni-Channel / Status - xxxx](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#omnistatus)
### [Feedback](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#feedback)
### [History](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/LightningvClassic#history)




## <a id="casedetails" name="casedetails"></a>Case Details Section

The Case details are pinned to the left side of the page so that they are always visible, and always accessible while working on the case.

## <a id="header" name="header"></a>Header

The Case Header contains the title of the case and buttons/pulldown list that let you quickly perform the most common actions that are performed on a case. Most of these options are seen in Classic as Quick Action options at the top of the Feed page or buttons in a number of Case Detail sections.

![03_quick_action](https://media.github.ibm.com/user/41770/files/a65f1800-4c2d-11e9-987f-8fc6fcc543d9)

> You may sometimes see Buttons disappear. If this happens the options will still be there but in the dropdown menu.

![04_post_in_dropdown](https://media.github.ibm.com/user/41770/files/a52deb00-4c2d-11e9-904f-bce2b56f3659)

> After making sure you have no unsaved changes in the UI you can try refreshing the browser (F5) to correct this problem.

Most Quick Action items have the same functionality in Lightning and Classic. The following items describe some exceptions and other useful information. Please note; all your favorite functions are still here. KYC, Environment, Upload Diagnostics, Edit Contact, Create Skills Cases, Reassignement. 


## <a id="follow" name="header"></a>Follow

Click follow to receive updates on the case if you are not the owner or a case team member.
> Followers are not visible in the Case as they are in Classic. This is a known issue and is being tracked with SF

<img width="460" alt="screen shot 2018-10-23 at 3 59 50 pm" src="https://media.github.ibm.com/user/26601/files/c8e8a4a2-d6dc-11e8-8954-da49413eae82">

## <a id="post" name="header"></a>Post

The Post button will open a tab to create a new post to the feed.  The quick actions that were above the feed are moving to the action buttons.  This allows us to provide a larger area for composing messages and allows the feed to be higher up on the page.

Click “Post” to open a sub-tab for this case to create a new Post.
![05_post_hover_case_number](https://media.github.ibm.com/user/41770/files/a5c68180-4c2d-11e9-8387-8258a9bcf58d)

Hover over a tab to see the full Case Number.

The initial display occupies a small area at the top of the screen. This will expand as content is entered.
The current maximum number of characters in a Post is approximately 9800.

> Post in Lightning has the same functionality as Post in Classic but it does not currently show Case Feed in the empty space below the Post panel. This is one of several Known Issues the Salesforce team are working to address.

## <a id="edit" name="header"></a>Edit

The Edit button will open a modal overlay in a fixed expanded layout. This modal window has the same edit capabilities as the Case Details sections in the left column. The extra space in this window makes it easier to perform updates.

![06_edit](https://media.github.ibm.com/user/41770/files/a52deb00-4c2d-11e9-8660-a391eacbc433)

## <a id="search" name="header"></a>Support Search with Watson

> The Sidebar version of Support Search seen in Classic has been replaced by the Support Search Quick Action option launched in a Case.

The functionality is the same. That is, you can still easily add discovered information to ARM but the Lightning implementation has the advantage of giving you more space to work in. 

Launch Support Search from the Quick Action dropdown menu:

![07_quick_action_support search](https://media.github.ibm.com/user/41770/files/a3fcbe00-4c2d-11e9-8db9-a808ef5131b3)

Use the Filter button to the right of the search field to toggle the Filter display on and off.

## <a id="arm" name="header"></a>ARM 

When ARM is launched from a Case in Lightning you’ll see more ARM options that bring the embedded version into line with ARM when launched from the Navigator.

ARM in Lightning includes its own Global Search option and the ability to upvote/attach assets to the Case.

![08_ouick_action_asset reuse manager](https://media.github.ibm.com/user/41770/files/a65f1800-4c2d-11e9-9a82-4e685e385b90)

## <a id="edit_contact" name="header"></a>Edit Contact
> Replaces the Classic Contact Info. Sidebar option.

![09_quick_action_edit contact](https://media.github.ibm.com/user/41770/files/a65f1800-4c2d-11e9-8554-b3388ccc9d23)

Functionality is unchanged.

## <a id="reassignment" name="header"></a>Reassignment
Functionality is unchanged
This opens in a seperate browswer tab

![image](https://media.github.ibm.com/user/41770/files/c0414d80-4d48-11e9-9220-d41218fead18)

## <a id="archiveexplorer" name="header"></a>Archive Explorer
> The Lightning Quick Action option replaces the Classic “Upload” option in the Case Details > Case Diagnostics section.

Functionality is unchanged
This opens in a seperate browswer tab

<img width="451" alt="screen shot 2018-10-23 at 3 58 02 pm" src="https://media.github.ibm.com/user/26601/files/8110c844-d6dc-11e8-9e48-de7ee5aa440d">

## <a id="collaboration" name="header"></a>Collaboration

<img width="1896" alt="screen shot 2018-10-23 at 3 49 45 pm" src="https://media.github.ibm.com/user/26601/files/7f335060-d6db-11e8-8bd2-1c3f6da872b5">

## <a id="createdefect" name="header"></a>Add Defect
> The Lightning Quick Action option replaces the Classic “Add Defect” option in the Case Details > Case Defects section.`

Functionality is unchanged.

<img width="1900" alt="screen shot 2018-10-23 at 3 50 10 pm" src="https://media.github.ibm.com/user/26601/files/7fbf3b52-d6db-11e8-8db5-f57634894815">

## <a id="feeditem" name="header"></a>Feed Item Visibility
> This option is exclusive to Lightning as an alternative to the missing Classic Feed “Make Public” and “Make Private” options.

If you need to change the visibility of a Case use this Quick Action dropdown menu option as described here:
https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#visibility
*This is a Temporary Workaround. This is on the list of know SF issues.

## <a id="print" name="header"></a>Printable View
> This option is exclusive to Lightning as an alternative to the missing “Printable View” button seen in Classic at the top of Case Feeds.

## <a id="relatedlistquicklinks" name="relatedlistquicklinks"></a>Related List Quick Links

> These are the same links seen at the top of the Case Details page in Classic.
Clicking the “Show All” link will expand the section to show all the Related List Links.
  
![10_related list quick links](https://media.github.ibm.com/user/41770/files/a7904500-4c2d-11e9-9acd-e5d0aceb5de8)

You can customise the order of these Quick Links by going to Settings, Display & Layout, select Cases, Customize Page and choose up or down to change the order.

Hover over a Related List Quick Link to show up to 10 items for a category. To display all items from the “hover over” display, click on “View All” at the end of the 10 items. 

![11_quick_link diagnostics](https://media.github.ibm.com/user/41770/files/a7904500-4c2d-11e9-9938-04f90d00f591)

You can also go straight to displaying all items in a table by clicking on the required Related List Quick Link.

![12_diagnostics_sub-tab](https://media.github.ibm.com/user/41770/files/a4955480-4c2d-11e9-97ba-fce48c2d1fff)

Selections and/or updates can be performed from the hover over display or the table in the sub-tab.


## <a id="casedetails" name="header"></a>Case Details

In the new design there is no longer a need to switch back and forth between the Feed and the Details view. The case details are always accessible on the left side of the UI. 

You can expand one, some, or all sections. These changes persist.  Other cases will have the same expanded\collapsed sections. 
> Requests have been made by users for Expand All & Collapse All options in Case Details. This is in the known issues

## <a id="maindetails" name="header"></a>Main Details

Look here for client contact information, account priority information, case status, severity, and more.  Each of the sections are independent from each other.  You can expand just one, a few key categories, or all of them.  Whatever sections you expand in the case details will be expanded the next time you view the case and those same categories will be expanded on the other cases you view, making it easy to quickly compare the same details section between different cases.

## <a id="inlineedit" name="header"></a>Inline Editing

Click the pencil icon next to a field in the Case Details to update then save changes.
eg. Updating Case Severity:

![13_inline_edit_sev](https://media.github.ibm.com/user/41770/files/a7904500-4c2d-11e9-99e2-45d975b18d01)

The “Edit” option described earlier displays the same Case Details sections in a fixed expanded layout. This modal window has the same edit capabilities as the left sidebar Case Details sections. The extra space in “Edit” window makes it easier to perform some updates.

## <a id="split" name="header"></a>Split View

The Split View bar is only visible on the extreme left of the screen when the option displayed in the Navigator is a valid Split View option such as Case Views, Accounts, Contacts, Support Missions.
Clicking the Split View bar displays a column containing a compressed view of the option displayed in the Navigator. This allows the user to view the selected information while still viewing the Case they are working on. 

If the Split View is showing a Case View, clicking on a Case Number will display the Case in a new Primary tab.
 
If a Split View is displayed and you use the Navigator to select an option that can’t be displayed in a Split View such as Home, Chatter, Case Prioritization, Support Search with Watson, the Split View column is removed. If you then use the Navigator to select an option that can be displayed in the Split View it is automatically displayed.

![14_split view](https://media.github.ibm.com/user/41770/files/a5c68180-4c2d-11e9-860a-6151d6124fa0)

## <a id="summaryfeed" name="header"></a>Summary / Feed /Activity

### Summary
This tab gives you a quick overview of what has been happening on the case. This information can be found in the case details, but they are all pulled together here. In future updates we are planning on adding fields where the Support Engineers can document things such as Client Concerns, Client Business Impact, Client Deadlines, Client Resolution Objectives, Actions Taken to resolve the problem, and Actions Planned. The goal is to have a place where people who are not actively working the case can go and quickly get up to speed on how the case is progressing.

![15_summary](https://media.github.ibm.com/user/41770/files/a52deb00-4c2d-11e9-8c4f-fb4480dcfb89)

### Feed
When accessing Case Feed not all data is loaded immediately. More data is loaded as you scroll down the page (Lazy Loading).
If you need to change the visibility of a Post, use the “Feed Item Visibility” the Quick Action dropdown menu option as described in “Changing Feed Item Visibility”:
https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#visibility

> Known Lightning Issues and RFEs exist to address a variety of Feed related regressions and issues. These are being worked by SF and IBM. See Known issues for details when avaialble. 

These include:

•	At the top of the feed on the right side next to the Refresh button is the “Expand All” button. Clicking this button will display up to 8 rows of data for all posts. Click Expand in specific posts to see the full post content.

•	You cannot navigate through the Case Feed using the keyboard. You need to use the scroll bar or a mouse wheel.

•	Reading a Case from the oldest post first to the newest post at the end of the feed.

### Activity
The Activity Timeline provides a list of all the tasks associated with the case that have been completed and which are still open and scheduled for a future due date.

<img width="934" alt="screen shot 2018-10-19 at 5 23 03 pm" src="https://media.github.ibm.com/user/26601/files/c0250fb6-d3c3-11e8-9b9d-d9cfc5f6228d">

Each task can be expanded to read a description about that task.

<img width="942" alt="screen shot 2018-10-19 at 5 31 15 pm" src="https://media.github.ibm.com/user/26601/files/d94d173a-d3c4-11e8-85dc-d782f9fcf4ce">

## <a id="skillcase" name="header"></a> Skill Case

In terms of functionality, Skill Cases in Lighting are the same as Classic.

When you open access a Skill Case in Classic from the Parent the Skill Case tab always opens as a sub-tab of the Parent.

The same happens in Lightning if you open the "Related Cases" sub-tab first from "Related List Quick Links" then select a Skill Case. Doing this results in a 4 column display where the left column shows the Case Details of the Parent and the 3 column Skill Case display including Skill Case Details is displayed in the sub-tab:

![16_skill_case_in_sub-tab](https://media.github.ibm.com/user/41770/files/a3fcbe00-4c2d-11e9-9479-004984ba33ca)

If you hover over the "Related List Quick Links > Related Cases" link in the Parent Case to display Related Cases and click on a Case it is displayed as a primary tab using the standard 3 column layout.

Skill Cases in Lightning have the same Summary / Feed / Activity options as the Parent Case but a reduced set of Quick Action / Quick Links / Case Details: 

![17_skill_case_buttons_links_details](https://media.github.ibm.com/user/41770/files/a3642780-4c2d-11e9-9c59-68feb20cd096)


## <a id="qat" name="header"></a> Email Quick Action Tab

The Email Quick Action on E2C cases in Lightning initially looks a little different and includes new features.

When a Case is first displayed the Email tab doesn’t show the usual email sender and recipient information:

![18_e2c_create new](https://media.github.ibm.com/user/41770/files/a3fcbe00-4c2d-11e9-85cf-3414e3091e92)

To start an email click anywhere in the “Create new…” field or click [Add]: 
![19_e2c_editor](https://media.github.ibm.com/user/41770/files/a6f7ae80-4c2d-11e9-8bda-7ecfeb5ab651)

1.	Quick Text (Add common notes, phrases, and messages to your email)
2.	Attach File
3.	Insert Merge Field (Add fields from the case such as [Case Owner] or [Case Number])
4.	Insert, Create, or Update Email Template
5.	Preview Email (View how the email is going to look before sending)
6.	Clear Email and Revert (Clears out all content in email) 

## <a id="milestones" name="header"></a> Milestones

This behave the same as it did in Classic.  It will provide reminders about approaching client response deadlines. 
** Remember ** To complete the milestone timer correctly, the support agent must make a public post to the client. This is the only accurate way to stop the milestone timer. 

<img width="460" alt="screen shot 2018-10-23 at 3 17 47 pm" src="https://media.github.ibm.com/user/26601/files/9b5479bc-d6d7-11e8-82ed-500a3c65da51">

<img width="461" alt="screen shot 2018-10-23 at 3 17 54 pm" src="https://media.github.ibm.com/user/26601/files/9b80fa0a-d6d7-11e8-9122-d6b741502d57">

## <a id="topics" name="header"></a> Topics

> Some Topics functionality is missing in Lightning as Salesforce no longer support Topics. Ie. Topics cannot be used as Filters in Case Views.
> When Topics functionality with keywords can be delivered, Topics will be deprecated.

## <a id="utility" name="header"></a> Utility Bar

![20_utility_bar](https://media.github.ibm.com/user/41770/files/a5c68180-4c2d-11e9-9f1a-48f053c4053a)

•	Click on a utility to display a fixed size frame anchored to the bottom left hand corner of the UI.

•	Click anywhere in the frame header to close it.

•	Some options have a "Pop-out" icon in the header to open a non-modal / resizable window.

•	The selected utility has a grey background in the Utility Bar. If it is open in a “Pop-out” you’ll also see a small diagonal arrow to the right of the label. This is especially useful if the “Pop-out” window is hidden.

## <a id="minicp" name="header"></a> Mini CP

Select the Case Prioritization View you want to display.
Mini CP displays the first pipeline. Use the Next/Previous Pipeline icon to move between pipelines.

![21_ub_mini cp](https://media.github.ibm.com/user/41770/files/a6f7ae80-4c2d-11e9-94d3-27a6873ac600)

## <a id="omnistatus" name="header"></a> Omni-Channel / Status - xxxx

The "Status" button shows your availability without needing to open Omni-Channel.
Use Omni-Channel to change your availability.
![22_ub_omi-channel](https://media.github.ibm.com/user/41770/files/a7904500-4c2d-11e9-96fe-6dd2d5e9c155)

**Out of Office** - Mark yourself out of office

**Request Case Access** - To access a case outside of your support mission

**Add to Account Team** - To access an account that is not currently associated to your support mission

**Request Duty Manager Access** To access every case, contact and account in the system (Max 30 Days)

> These 4 options were accessed from the Chatter Page in Classic.
The content and functionality of these utilities is the same as they are Classic.

## <a id="feedback" name="header"></a> Feedback

This window contains a link to give feedback in the Slack Feedback Channel #csp-survey-feedback and a link to open a new Idea/RFE in IBM Salesforce Help

## <a id="history" name="header"></a> History

This shows your recent activity. If applicable, this will include sub-tab activity. eg. Reassignment within a Case.
The ACTION icon lets you copy the link to the clipboard. This is the same link you see in the browser address bar.

![23_ub_history](https://media.github.ibm.com/user/41770/files/a3642780-4c2d-11e9-9074-4ec81c5fb985)

## <a id="switch2classic" name="header"></a> Switching back to Classic

There will be times when you’re first you’re going through the “learning curve” that you to switch back to using Classic. To do this click on your User image in the top right corner and select “Switch to Salesforce Classic”:

![24_switch_2_classic](https://media.github.ibm.com/user/41770/files/a52deb00-4c2d-11e9-9797-b645fbd7a3f0)

You are prompted to enter a reason for switching: 

![25_switch_reason](https://media.github.ibm.com/user/41770/files/a3fcbe00-4c2d-11e9-9f33-d35f432cc102)

Please include why you are switching back in the pop-up - Is it because of a defect in Lightning? Is it because you need functionality that only exists in Classic?  We’ve added a list of keywords in the pop-up description, please use them as well as descriptive text, if applicable.

It’s especially important you give feedback if you find something that you believe prevents you doing your job in Lightning.

After your hopefully brief return to Classic you can switch back to Lightning by clicking on your User image in the top right corner of the console.


