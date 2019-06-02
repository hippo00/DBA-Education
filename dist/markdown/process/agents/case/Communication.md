* [Latest News](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#latest)
* [Notifications](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#notifications)
* [@Mention](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#mention)
* [Post Visibility](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#visibility)
* [Updating Statuses](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#status)
* [Limitations](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#limit)
* [Post on Skills Cases](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#skillscases)
* [Code Blocks](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#code)
* [Next Contact Date](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#nextct)
* [Updating and Closing Tasks](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#taskupdate)
* [Due Dates and Reminders](/dba-support/DBA-Education/#/DBA-Education/process/agents/case/communication#duedate)
* Special Handling - This information has been moved to a separate page <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/case/specialhandling" target="_blank">here.</a>



## <a id="latest" name="latest"></a>Latest News 

We’re adding a new Post and Update Status button that will replace the previous separate Post and "Update Status" buttons, as the new Post functionality supports both posting and updating the status in one place. It also provides a way to post code blocks in posts. Agents will no longer be able to update the Internal Status from the case details view. Instead, agents will solely use the consolidated "Post and Update Status" function to update the Internal Status on a case.

## <a id="notifications" name="notifications"></a>Notifications
The way in which customers are notified on status changes and posts is not changing with the new post and update status component. Notifications are still based on the client’s notification settings in their profiles. 

One note worth mentioning is that with this new post functionality, agents are able to both update the status and post to the customer in a public post. If an agent updates the internal status to "Waiting on client" and makes a customer facing post in the same action, the customer will only receive one notification instead of two. This way, clients are not notified twice for the same update. The email alert will let the customer know that a post and status update has occurred. 

Note: When an existing Post is edited the client will not get an "updated" email notification.  
Best Practice: Since the client may have already received an email with the original post information if the change is significant you should create a new post noting the edit so they get notified that the previous update has been changed.

## <a id="mention" name="mention"></a>@Mention
Agents will still be able to @ mention with the new Post and Update Status Button. However, there are a few notable differences. When you type @ in the post, a window will pop
up for you to search the name of the user you want to mention. **It is critical that you click on the window before you start typing the name**, otherwise your text will continue to populate in the background. Once you have selected the user(s) you want to mention click add.

![image](https://media.github.ibm.com/user/19331/files/0f903b68-b5c2-11e8-8c91-807f9e68a253)

The user will display like the following image when added.

![image](https://media.github.ibm.com/user/19331/files/21ce25ce-b5c2-11e8-9514-4dd79d834238)

**Warning**: make sure you hold the 'shift' and '@' key to trigger the pop-up window. Releasing the shift key early will result in an @ symbol but will not trigger the pop-up window. If this occurs, delete the @ symbol and hold the 'shift' and '@' key to trigger the pop-up window. 

![image](https://media.github.ibm.com/user/19331/files/39882fe8-b5c2-11e8-8b1f-06c28a818bcf)

Additionally, if you @ mention someone who does not have access to the case the name will go grey in the feed. If you hover over the name it will warn you that this person does not have access to the case, will not be notified and will not see your post.

![image](https://media.github.ibm.com/user/19331/files/49838910-b5c2-11e8-8209-29e5bf4ed796)

## <a id="visibility" name="visibility"></a>Post Visibility
Like the previous post functionality, you can make posts that are internal (IBM only) or external (customer facing – “All with Access”). This is done by toggling the button under the Post field, as seen in the following screenshots:

### Internal Only
![image](https://media.github.ibm.com/user/19331/files/5fc1eae6-b5c2-11e8-9d20-5fe10a577184)

### All With Access
![image](https://media.github.ibm.com/user/19331/files/6e8229e2-b5c2-11e8-962d-887358549943)

By default, posts are set to Internal Only, and the switch returns to Internal Only after each post. Something to note, if the toggle button is set to Internal only and you @ mention a user, only Internal users will display in the dialog. To @ mention a customer you need to toggle to All with access for their user to display in the dialog.

### Changing Feed Item Visibility
Note: When changing the visibility of a feed item to public from private, the customer will receive an email alert that there is a new post to their case (assuming they've opted in for those types of notifications)

Scenario 1: You want to change the visibility of one of your 10 most recent posts
In the highlights panel, select ‘Feed Item Visibility’ in the quick actions dropdown menu.
![image](https://media.github.ibm.com/user/129959/files/d6d4de64-199e-11e9-862f-1f6b5e18986b)

The 10 most recent posts will be displayed. Use the ‘Set Visibility’ dropdown to select the desired visibility of a post, select the post you wish to change, and click ‘Next.’
![image](https://media.github.ibm.com/user/129959/files/016132aa-199e-11e9-8c61-312e720e71e5)

A success screen is shown, and your post visibility has been changed.
![image](https://media.github.ibm.com/user/129959/files/182c10e0-199e-11e9-96ba-9a3569714189)

Scenario 2: You want to change the visibility of a post that is not one of your 10 most recent
In the highlights panel, select ‘Feed Item Visibility’ in the quick actions dropdown menu.
![image](https://media.github.ibm.com/user/129959/files/d6d4de64-199e-11e9-862f-1f6b5e18986b)

At the bottom of the screen, locate the ‘Don’t See your Comment?’ dropdown, and select ‘I need to see all MY comments on this case.’ Click Next. All comments on the case will be displayed.
![image](https://media.github.ibm.com/user/129959/files/469cdff4-199e-11e9-9271-1838f1b0da23)

Use the ‘Set Visibility’ dropdown to select the desired visibility of a post, select the post you wish to change, and click ‘Next.’
![image](https://media.github.ibm.com/user/129959/files/5e207654-199e-11e9-999a-a582026454af)

A success screen is shown, and your post visibility has been changed.

Scenario 3: You know the 15 or 18 digit Id of the comment of which you would like to change the visibility

To find the Id of a post, click on the timestamp of the post of which you would like to obtain the Id.
![image](https://media.github.ibm.com/user/129959/files/ead54100-5162-11e9-8906-d810dc9a6095)

When the post is displayed, the Id will be populated in the URL, directly after “/lightning/” as displayed below.
![image](https://media.github.ibm.com/user/129959/files/456e9d00-5163-11e9-8da3-5e1e426c3c27)

In the highlights panel, select ‘Feed Item Visibility’ in the quick actions dropdown menu.
![image](https://media.github.ibm.com/user/129959/files/d6d4de64-199e-11e9-862f-1f6b5e18986b)

At the bottom of the screen, locate the ‘Don’t See your Comment?’ dropdown, and select ‘I have the Feed Id and need to update visibility.’ Click Next.
![image](https://media.github.ibm.com/user/129959/files/88894efc-199e-11e9-8364-4475cab2535a)

Use the ‘Specific Case Comment Visibility’ dropdown to select the desired visibility of a post, enter the 15 or 18 digit Id, and click ‘Next.’ A success message will display and post visibility is updated.
![image](https://media.github.ibm.com/user/129959/files/9397ce4a-199e-11e9-8b82-58a9a7c90120)




## <a id="status" name="status"></a>Updating Statuses
To update the status of your case, choose a new Internal Status from the Select Internal Status drop-down box. This will apply the appropriate update to the external Status field when you post the communication. Note that you can change the status of a case without putting anything in the post field.

![image](https://media.github.ibm.com/user/19331/files/8960aab8-b5c2-11e8-8209-9f200cc06076)

## <a id="limit" name="limit"></a>Limitations
Salesforce has a limit of 10,000 characters in a single post. We have added UI to inform the agent when the limit is reached. Salesforce adds hidden character which might reduce the number of characters an agent can add. You will see a red border, a red message at the bottom of the edit window and the Post button is disabled.

![image](https://media.github.ibm.com/user/19331/files/a1745690-b5c2-11e8-9ad5-6b56eb2d5c03)

## <a id="skillscases" name="skillscases"></a>Post on Skills Cases
The new post functionality is available on Skills case. A user can post to three different "Access Types".

![image](https://media.github.ibm.com/user/19331/files/b39859f2-b5c2-11e8-89aa-de37a64de0b6)

### Skill
When selecting this access type, the post will go to the skills case only. This is an internal post and is not seen by the customer.

### Internal
When selecting this access type, the post will go the skills case and the parent case. This is an internal post and is not seen by the customer.

### Public
When selecting this access type, the post will go to the skills case and the parent case. This is an externally facing post that will be seen by the customer on the parent case. If the customer on the parent case is opted in to receive notifications when an agent posts to case, they will receive a notification for this post.

## <a id="code" name="code"></a>Code Blocks
Posts now support Code Blocks. Simply type three backticks - ``` - and begin typing your code, closing with three more backticks. This feature is best used for log snippets, code text blocks, html, xml, fixed space monospace snippets. Please note, posts that include a code block cannot be edited.

![image](https://media.github.ibm.com/user/19331/files/91696f44-aa17-11e8-9300-ade5b5a274f7)
this would show up in a fixed sized font on the case feed. 
![image](https://media.github.ibm.com/user/19331/files/afd50434-aa17-11e8-8988-88f16104d182)

## <a id="nextct" name="nextct"></a>Next Contact Date

Now that agents can set a "Next Contact Date" on cases, by using the MPPC, we are implementing a process for agents to track and manage contacting the customer when the "Next Contact Date" arrives. For reference here is the "Next Contact Date' that can be set on the MPPC, which is also displayed on the case details page.

![image](https://media.github.ibm.com/user/95587/files/65dc2850-bfe1-11e8-86ee-7f886b5c6e6f)

To track and remind agents to follow up on their cases where a "Next Contact Date" is set, we will be using Tasks. A Task will be automatically created when an agent selects a "Next Contact Date" on the MPPC, or when they set or change the "Next Contact Date" on the case details page. When the Task is created, the Task will appear in the feed view, like below: Please note that the icon shows the task is visable externally, but please be assured we have masked all tasks from the client community view. 

![image](https://media.github.ibm.com/user/95587/files/be2ff1ac-bfe2-11e8-8e2a-be3830f5e915)

The Task will also appear on the "Open Activities" related list on the case details page, like below. As you can see, there is a separate related list on the case details page for closed an cancelled Tasks called "Activity History." When a Task is closed, either by setting the status to "Cancelled" or "Complete," the Task no longer appears in the "Open Activities" and will then be displayed in "Activity History."

![image](https://media.github.ibm.com/user/95587/files/fd7afc62-bfe2-11e8-9143-c83f8f129118)

## <a id="taskupdate" name="taskupdate"></a>Updating and Closing Tasks

Agents can also post to the Task from the details view of the Task. Please note these comments will always be internal and will never be seen by the customer. Please see below screenshot of the Task details view:

![image](https://media.github.ibm.com/user/95587/files/37d6455a-bfe4-11e8-9a34-75d8f777c9f3)

If agents need to change any of the fields, they can click on the "Edit" button to make changes. Please note that by default the task assigned to the person who created the task. When the agent has completed the Task (i.e. contacting the customer on the next contact date), they can close the Task by changing the Stats field to "Complete," as seen below:

![image](https://media.github.ibm.com/user/95587/files/53f21ffc-bfe4-11e8-9a28-679eb33034e6)

Users can also click on the "Close" button on the "Open Activities" related list on the case details view to close the Task, as seen below:

![image](https://media.github.ibm.com/user/95587/files/69c48ef0-bfe4-11e8-962d-3c30428478c3)

## <a id="duedate" name="duedate"></a>Due Dates and Reminders

The due date for the Task will be set to the "Next Contact Date" set on the case. If the "Next Contact Date" is changed before the Task due date has been reached, the system will automatically create a new Task with the new "Next Contact Date" as the due date. When the new Task is created, the previous Next Contact Date task will be deleted by the system and no longer accessible. You may receive an error message that the task is deleted if you try to access the deleted task. Please use the newly created task the platform has created for you.

Reminders to complete "Next Contact Date" Tasks help remind the agents to complete their work, and are customizable at the user level. As a default, a reminder will be created when a Task is created for the "Next Contact Date," and a popup reminder will display at 8pm the night before the Task is due. If the agent doesn't log on until the next day (when the Task is due), the popup window reminder will appear they login. Please see below screenshot of the reminder popup window:

![image](https://media.github.ibm.com/user/95587/files/e055517c-bfe8-11e8-9931-de4c483b9092)

While the Task functionality for "Next Contact Date" leverages default reminder settings, users can navigate to their personal settings to customize reminder settings. You can enable sounds for reminders, set default reminder times, and even opt out of reminders completely by disabling them:

![image](https://media.github.ibm.com/user/95587/files/00496b3a-bfe9-11e8-9efa-f045eed8aeda)

There are not email alerts configured for Tasks. The reminders will be through the popup window functionality. One outlier is when another user assigns someone else a Task. If this occurs, and the user has opted in to receive email alerts when a Task is assigned to them through their personal settings, they'll receive a notification about the Task assignment. These are standard notification sent by Salesforce, and can be easily disabled through the Task reminder settings described above. We suggest ignoring the assignment emails or disabling them, as the link provided does not take users back to the service console.

If a case is transferred to a new owner, the agent will need to also update the "Assigned To" on the Task to the new owner. The "Assigned To" on the Task is not updated based on ownership changes on the case. 

