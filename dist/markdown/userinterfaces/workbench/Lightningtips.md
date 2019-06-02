# Lightning UI Tips and Tricks

The Lighting user experience is a new paradigm for interacting with the agent console, you can use these tips and tricks to understand how to interact better with this interface. For the best experience with Lightning, please make sure to keep your browser level current. 

 * [Navigating around Lightning](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips#navigating)
 * [Tips and Tricks](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips#tips)
 * [Creating Multiple Tabs](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips#case-views)
 * [IBM Support Salesforce Browser plugin](/dba-support/DBA-Education/#/DBA-Education/uis/workbench/Lightningtips#plugin)

## <a id="navigating" name="navigating"></a>Get to know the pieces of the Lightning UI

### App Switcher
![image](https://media.github.ibm.com/user/3590/files/08bfc680-3e81-11e9-8fe5-5a4d324fa73a)
 
Used with switch between applications. For Support Agents and Managers, Lightning Support should be the only application you need to interact with.

### Navigator 
![image](https://media.github.ibm.com/user/3590/files/0c534d80-3e81-11e9-8d79-a6e521f973e9)

Used to switch between items inside an application.

### Global Search
![image](https://media.github.ibm.com/user/3590/files/11180180-3e81-11e9-8e52-5eb9e204cb99)

Searching across the Salesforce application.

### Favorites
![image](https://media.github.ibm.com/user/3590/files/43c1fa00-3e81-11e9-8d20-bc852d3792fc)

Used to bookmark specific records. 

### User Settings
![image](https://media.github.ibm.com/user/3590/files/4d4b6200-3e81-11e9-8108-8b5319ad65c7)

Access your agent console settings and switch to classic function.

### Footer Actions
![image](https://media.github.ibm.com/user/3590/files/51777f80-3e81-11e9-96cd-c0ff2f9ea398)

A custom toolbar that contains frequently used actions

## <a id="tips" name="tips"></a>Tips and Tricks

### Customizing your Navigator

You can edit the order of items in the navigator as well as add items.

To edit the navigator:
1.	Open the navigator and click edit
2.	Use the hamburger selector (3 horizontal lines) next to any item to reorder  
![image](https://media.github.ibm.com/user/3590/files/a3200a00-3e81-11e9-991a-9e2d9bdd34ae)

3.	Click Add More items button to see what other options you can add

### Searching effectively

Search is able to recognize common searches and suggest search results. For example, enter a case number in search and a direct link to that case should appear immediately (assuming you have access to that case): 
![image](https://media.github.ibm.com/user/3590/files/aadfae80-3e81-11e9-9b3d-753709415616)

 
This works with many similar objects such as accounts, contacts, support missions, etc.

You can limit the search from the search bar, by selecting the object type from the drop down: 
![image](https://media.github.ibm.com/user/3590/files/b0d58f80-3e81-11e9-9419-98ddc8c2182d)

 ### Managing favorites

To add any record to your favorites list, open the record and then click the “star” to add that record to your favorites list.

To edit your favorites:
1)	Click Edit Favorites
2)	Use the hamburger selector (3 horizontal lines) next to any item to reorder  
![image](https://media.github.ibm.com/user/3590/files/bb902480-3e81-11e9-96ce-d5558158f8a0)

3)	Click the pencil icon to edit the name of the favorite
4)	Click the x icon to remove the favorite

### Sharing Links

Sharing links in Lightning is much easier than classic. To share any record url, just copy the URL from your browser. 

### Pinning views

Most applications display a view. Each application will usually have a “pinned view”. You can change the pinned view by selecting another view form the list and then clicking the pin icon. Each application can only have one pinned view. 
![image](https://media.github.ibm.com/user/3590/files/dcf11080-3e81-11e9-8000-2e91b4dc07dd)

### Recent views

For all applications that display a view, the 10 mostly recently viewed views will be displayed under recent list views. 

### <a id="case-views" name="case-views"></a> Creating multiple case view tabs

A common requirement is to view multiple case views regularly. 

In order to create a second instance of a navigator application, you must first change the current view to any view other than your pinned view. (See pinning views above)
For example, if the cases view is pinned to Recently Viewed (the default) select any other view.

To create a new cases tab:
1)	Open the cases item from the navigator, change the view to any view other than the pinned view (remember you can only have one pinned view)
2)	Open the navigator again and then press CTRL (on Windows) or Command+Option (on Mac) while selecting the cases item from the navigator list
3)	A new cases tab will appear
4)	Repeat steps 1 and 2 to create as many case tabs as you want.

To provide a specific example of the above steps: Your pinned view is "My Open Cases"
1) Open the cases link (My Open Cases appears), change that to any other view
2) Press CTRL (on Windows) or Command+Option (on Mac) while selecting the cases item from the navigator list a new tab will appear with My Open Cases selected
3) In order to add another, you need to change the new tab to something other than My Open Cases (step 1) above then you can do step 2 again.

Note: Any cases opened from a cases tab will open as a subtab to that cases tab, while cases opened from the primary cases navigator item will open as primary tabs. You can move a tab to the top level by clicking on the tab and selecting Set as workspace tab: 
![image](https://media.github.ibm.com/user/3590/files/66eda900-3e83-11e9-9d34-fc840e75ccd9)

### Refreshing a view

In any view, you can press SHIFT + R to refresh just that view. This refresh will refresh the view that is currently displayed but will not refresh any other views and if you have any in progress items in another "TOP LEVEL" tab (such as a case post) those will not be affected. NOTE: If you refresh a view or a case that has SUBTABS, those subtabs will be refreshed with SHIFT + R and if you have an inprogress post in a subtab, the refresh will reset (clear) that post.

You can also click on the tab and select Refresh tab for the same effect: 
![image](https://media.github.ibm.com/user/3590/files/8ab0ef00-3e83-11e9-9a06-f6b9fe00bf5b)


### Pinning tabs

Once you have created a tab, you can pin the tab by selecting Pin Tab from the tab menu:  
![image](https://media.github.ibm.com/user/3590/files/f4c89480-3e81-11e9-9070-3bfa9f33e383)


Note: Once you pin a tab, the text of the tab disappears: 
![image](https://media.github.ibm.com/user/3590/files/fb570c00-3e81-11e9-899d-13a6e66cec8e)

You can select customize tab from the tab menu to choose a custom icon that appears. This is helpful if you have multiple tabs of the same type and would like to distinguish them, however, you can only choose icons from the default palette. 

You can unpin a pinned tab or close it from the tab menu.

### Closing Tabs

You can close any opened tabs by click the x on the tab.
You can close a pinned tab, by clicking the tab menu and selecting Close Tab
You can close all non-pinned tabs at once by pressing SHIFT + W in the application. A confirmation dialog will appear:
![image](https://media.github.ibm.com/user/3590/files/06aa3780-3e82-11e9-9e57-448348a9ddba)

### Footer toolbar functions

Numerous functions are available in the footer including:

* Mini CP: A mini version of case prioritization
* OmniChannel – the default omni channel object
* Status – a more visible omnichannel status indicator
* Out of office – Mark yourself out of office
* Request case access – to access a case outside of your support mission
* Add to account team – to access an account that is not currently associated to your support mission
* Request duty manager – to access every case, contact, and account in the system, maximum 30 day time frame
* Feedback – to provide feedback or submit an idea
* History – recent tabs you have used

## <a id="plugin" name="plugin"></a>IBM Support Salesforce browser plugin

A browser plugin has been developed that adds additional features to the Lightning console. To install this plugin for Firefox or Chrome access https://ibm.biz/IBMSFExtras-Download.
Please note that this plugin is supported by volunteers on a "best effort" basis and may not always be updated. If you have any questions about the plugin you can access the forum for the plugin at https://ibm.biz/IBMSFExtras. Note: When contacting the CSP helpdesk for support, they may ask that you try without the plugin in order to verify the problem is not with the plugin. 
