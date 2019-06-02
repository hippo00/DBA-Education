# Lightning Case Views

The Lightning console has numerous functions to create and work with views, this document focuses on Case views, but the concepts can apply to nearly any object in the platform such as work orders, assets, accounts and contacts.  

## Accessing Case views

Access Case views in Lightning by selecting Cases from the navigator:

![image](https://media.github.ibm.com/user/3590/files/3b58f300-402a-11e9-8cdd-20e5abb6075b)

You can also access a split view at any time you are viewing an object by opening the left pane of the UI panel. Use the expand button 

![image](https://media.github.ibm.com/user/3590/files/45056680-41a2-11e9-8863-5b42e183b101) to open the panel or collapse it. 

## Selecting Case views

By default, a single "pinned" Case view will always display when you select Cases. You can only have one pinned view. The default pinned view for all objects is "Recently Viewed" which shows all of the Cases you have viewed. You can change your pinned view to any other Case view you have access to and then that view will display whenever you access Cases from the navigator. You can only select one pinned view. 

> Migration Tip: In the Classic UI, selecting Cases from the navigator normally selects the last Case view you viewed. In Lightning UI, selecting Cases from the navigator always opens the pinned view (default Recently Viewed) and will not open the last view you had open. 

To switch Case views, use the switcher control:

![image](https://media.github.ibm.com/user/3590/files/68a5a100-402a-11e9-8318-85e3072e3ea4)

The switcher function will remember the last 10 Case views you accessed in a section labeled "RECENT LIST VIEWS." All other views you have access to are in the section labeled "ALL OTHER LISTS." Both of these case view sections are sorted alphabetically.  You can also find a Case view by typing it in the search area at the top of the switcher.

> Migration Tip: Please note that the sort order for some special characters has changed between Lightning and Classic so some views you are used to seeing at the top of the list may now be at the bottom.

## Creating a Case view

To create a Case view in Lightning, 

1) Click the list "View Controls" icon (a gear shaped icon in the upper right of the window) and select New:

![image](https://media.github.ibm.com/user/3590/files/d356dc80-402a-11e9-9583-2782a4b70906)

2) Name the view and click save. Note: you will see three options for sharing the view on this dialog, however most users are only able to create a personal view. The other options are disabled. If you want to create a view that is shared, please contact your Integration Leader or consider creating a view in <a href="/dba-support/DBA-Education/#/DBA-Education/wis/wtwon">Case Prioritization</a> which can be shared. 

3) Use the filter function to add filters to your view:

![image](https://media.github.ibm.com/user/3590/files/07ca9880-402b-11e9-8ae1-692f97a1119e)

4) You can filter by Case Owner:

![image](https://media.github.ibm.com/user/3590/files/d4d4d480-402b-11e9-8f11-73af3363f035)

5) Add additional filters by choosing a field and value to filter on:

![image](https://media.github.ibm.com/user/3590/files/2cbf0b80-402b-11e9-8944-d0df80848215)

Note that depending on the type of field you choose, different options may appear. For example Picklist fields allow you to select options: 

![image](https://media.github.ibm.com/user/3590/files/1b494100-419c-11e9-9e72-17e1dc3244d2)

6) All filters are assumed to be "AND" filters. Once more than one filter is added you can add filter logic to group filters or create "OR" conditions:

![image](https://media.github.ibm.com/user/3590/files/7ad40f00-402b-11e9-865d-b2714a215392)

You can add a maximum of 10 unique filter conditions to a view.

7) Once you have all the filters you want, click "Save". 

8) Note, you can click "Save As" here to create a new copy of an existing view.

![image](https://media.github.ibm.com/user/3590/files/e7b9e700-419a-11e9-8cbd-ca605fab2816)

Once you have saved a view you can edit it again by clicking the filter icon.

> Migration Tip: Some users have found that views created in Lightning Console may not appear if they switch back to the Classic UI.  

To select the columns to display:

1) Use the "List View Control" icon and select "Select Fields to display"

![image](https://media.github.ibm.com/user/3590/files/14032580-402c-11e9-879b-80db332c37f2)

2) Add or remove the fields you want to display, there is a limit of 15 fields that can be added to a view (however you will only see the limit once you attempt to save the view):

![image](https://media.github.ibm.com/user/3590/files/4876e180-402c-11e9-8496-cd5aa7ac7104)

3) Note: the first column in the view is automatically sorted, but you can change the sort order manually at any time. 

## Cloning a view

You can make a copy of a view that you do not have the ability to edit, by cloning the view. Use the "List View Controls" icon to select "Clone" to create a copy of a view. 

![image](https://media.github.ibm.com/user/3590/files/9a8d4380-41a1-11e9-83f1-c842045d8d26)

## Column display 

On each column you can decide how to handle long text strings. By default, column text is clipped (trimmed) to the width of the column, however, you can change that to wrap text for any column by clicking on the selector object for the column heading:

![image](https://media.github.ibm.com/user/3590/files/1933b200-419d-11e9-81ca-0fc2a2cf4e7a)

## Change the view format

Lightning supports three view formats:

* Table - the traditional views with columns and rows

* Kanban - a view with columns based on a single criteria and then showing "cards" for each record

* Split/Hybrid - a mini view that exists on the left side of the Console window

Note that you can change the view format on any views, including the ones you haven't created. 

Change the view by selecting the "Display" as icon:

![image](https://media.github.ibm.com/user/3590/files/9855a880-402c-11e9-8125-1f4a225bddf9)

Table view is the traditional list view.

Kanban views require a "Group By" field and optionally a "Summarize by field."

Note: Only certain fields can be used for grouping:

![image](https://media.github.ibm.com/user/3590/files/cfc45500-402c-11e9-894a-d872371c3b0f)

The most common fields would be status or internal fields. Note that <a href="/dba-support/DBA-Education/#/DBA-Education/wis/wtwon">Case Prioritization</a> also uses Kanban views and is much more customizable because you can hide empty columns and use multiple different values for the group by field. 

"Summarize by" only works on integer fields, so there are only limited options.

Depending on the field chosen for "Group By", multiple views may be displayed if different options are available, for example "Status" and "Internal Status" have different values for Case records and Skills Case records, so they are automatically separated:

![image](https://media.github.ibm.com/user/3590/files/26ca2a00-402d-11e9-96cf-45d97b556524)

Split view collapses the view into the left panel of the UI console. Using split view you can see your view along side a case or any other object. Note you can always collapse a split view by using the collapse bar: 

![image](https://media.github.ibm.com/user/3590/files/0ec7e700-41a2-11e9-9f99-9e95a97193b2)

## List view charts

In the lightning UI, you can add a chart to any list view. Click the "Chart" icon and select "New Chart".

![image](https://media.github.ibm.com/user/3590/files/abb54380-402d-11e9-9495-5487b9f99958)

This chart will be accessible at any time by clicking the "Chart" icon:

![image](https://media.github.ibm.com/user/3590/files/c4bdf480-402d-11e9-8013-f204bf86121e)

Use Settings at the bottom of a chart to change the type of display, edit the chart or create more charts for this Case View.
