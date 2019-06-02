Managers can use the Salesforce Reporting features to create/manage and use operational Reports. Reports are created, edited and viewed using the Reports page. Manager or above access required to generate reports. Reports are stored/organized in folders. Folders can be shared with others – individual users, groups, roles etc.

![image](https://media.github.ibm.com/user/19331/files/f3004654-b676-11e8-9fb2-881cef1cfee4)

--- 

# Reports

Reports can be generated in a vast number of combinations using the report builder
  * Different fields
  * Different filters
  * Different date options, e.g. Case opened/closed date, Case last support response date, Contact created date, etc.
  * Different date range options for the date option chosen
  * Different formats

To create a new Report, Select **New Report** on the Reports page 

* Select the Report type in the Create New Report window that appears and click Create (the Report type drives the fields that can be chosen for a report)
  ![image](https://media.github.ibm.com/user/19331/files/3d7fccfe-b677-11e8-8e4a-527686e88fbf)
* the report builder launches with three panes
  ![image](https://media.github.ibm.com/user/19331/files/5aa5978c-b677-11e8-88f5-6f34d5cc2675)

--- 

## The Fields pane (indicated by 1)
* Fields are used to define report filters as well as report columns
* Fields are organized in folders based on Objects (Case, Account, etc.) that they belong to
* All fields pertaining to the selected report type are shown by default in the folders
* You can filter the fields shown in the folders by text, number or date type
  ![image](https://media.github.ibm.com/user/19331/files/a2e0367e-b677-11e8-9ae6-a4558f92804d)
* You can find the fields you are interested in using the quick find search box

--- 

## Filter pane (indicated by 2)
* Filters are used to limit the data in the report results
* Four filter types available to choose from
  ![image](https://media.github.ibm.com/user/19331/files/ce8614b0-b677-11e8-905f-392e0667e724)
* Field Filter - Allows filtering based on fields, to use it drag and drop fields into the filters pane to add them to the filters
* Filter Logic - Allows customizing field based filters. E.g. if you have defined more than one filters, you can add AND/OR logic between those filters
  ![image](https://media.github.ibm.com/user/19331/files/ee7023ce-b677-11e8-9ff9-c55175e321d0)
* Cross Filter - Allows creating filters using Case as an object and it’s properties. You can further classify the property you choose. E.g
  ![image](https://media.github.ibm.com/user/19331/files/feab3198-b677-11e8-8031-32e86f548d35)
* Row Limit – Allows limiting the number of results when a report is displayed in a tabular format, e.g. Show the newest 10 Cases of Acct_1
  ![image](https://media.github.ibm.com/user/19331/files/0db410ce-b678-11e8-881d-411c5c0a7d67)
* You can narrow down the report results by choosing what Cases to display using the Show option
  ![image](https://media.github.ibm.com/user/19331/files/229aad22-b678-11e8-8a6e-9a1614bc1733)
* You can filter on Date fields by specifying a predefined range (e.g. Show all Cases opened in the current calendar year) or by Defining a custom date range (e.g. Show all Cases opened from Nov. 01, 2017 to Nov. 15, 2017)
  ![image](https://media.github.ibm.com/user/19331/files/50814e94-b678-11e8-8377-98fdda1e2814)

--- 

## Preview pane (indicated by 3)
* Report preview is shown dynamically as you build/customize a report
* Preview shows the summary by default when creating a new Report
* Select Details from the Show drop-down menu to see the records
  ![image](https://media.github.ibm.com/user/19331/files/8ab92028-b678-11e8-8e9c-4de047311271)
* Note: Report type selected in the Create New Report dialog drives whether Details is selected or not. For the option chosen in this lab, Details is not selected
* Preview shows a small set of records when Details is selected
* You need to run the report to see the entire set of records
* You can double-click or drag and drop fields from the Fields pane into the Preview pane to add them to the report
* Double-clicking adds the field as the last column
* With drag and drop, you can add a field at the position you want
* Multiple fields can be selected to drag and drop into the Preview pane 
* You can drag and drop fields from the Preview pane into the Fields pane to remove them from the report
* Multiple fields can be selected to drag and drop into the Fields pane
* You can drag and drop report columns to reorder them
* Four report layout formats to choose from
  ![image](https://media.github.ibm.com/user/19331/files/a8e26d70-b678-11e8-8c92-a6f8fc703ce1)

--- 

### Tabular Format
Allows a row/column lay out without any grouping
![image](https://media.github.ibm.com/user/19331/files/c1f53e64-b678-11e8-8841-f12dc03e4410)

--- 


### Summary Format
Allows grouping of data in rows/columns (e.g. show all Cases per Product). If the Product Name field is included in the report, launch the drop-down menu on the Product Name column and select Group by this Field option
![image](https://media.github.ibm.com/user/19331/files/dcef7aae-b678-11e8-9b0f-c02feac050f9)

* You will see the results grouped by Product in this example (the Product Name column is no longer shown)
* If Product Name field is not included in the report, select Summary Format from the drop-down menu and drag and drop Product Name field from the Fields pane to the row that says ‘Drop a field here to create a grouping’
  ![image](https://media.github.ibm.com/user/19331/files/167c586e-b679-11e8-9dc3-913dba39cfd0)
* You will see the results grouped by Product 
  ![image](https://media.github.ibm.com/user/19331/files/2927a66c-b679-11e8-81eb-a07a453e2720)
* You can specify up to 3 levels of grouping, e.g. show all Cases per Product, per Case owner and per Status
  ![image](https://media.github.ibm.com/user/19331/files/39e7310c-b679-11e8-9938-153b2775c374)
* Explore various actions that you can perform on groups using the drop-down menu before the group name
  ![image](https://media.github.ibm.com/user/19331/files/471b202c-b679-11e8-80a4-57dbd74e59f0)
* Explore the Add Chart option to generate a chart from the summary report results
  ![image](https://media.github.ibm.com/user/19331/files/57f82624-b679-11e8-91d8-46a039ae57f0)

--- 

### Matrix format
Allows generating totals for both rows and columns of data. Convert the Summary format report created in the previous step to the Matrix format using the drop-down menu on the format label and selecting Matrix option
![image](https://media.github.ibm.com/user/19331/files/d248c212-b679-11e8-8771-aca49465432a)

* The 1st (top level) group becomes a row grouping
*	The 2nd group becomes a column grouping
*	The 3rd group becomes a sub-row grouping

![image](https://media.github.ibm.com/user/19331/files/e63214c2-b679-11e8-8d20-5acf38ab9354)

*	Row grouping can be switched to column grouping and vice-a-versa by simply using drag and drop method 

![image](https://media.github.ibm.com/user/19331/files/f5183584-b679-11e8-8984-98be0b513cc3)

* You can also drag and drop fields from the Fields pane to create row/column grouping

--- 

## Finalize your report
* Explore options in the Show drop-down menu as well as Add Chart functionality for all report formats
  ![image](https://media.github.ibm.com/user/19331/files/1504d028-b67a-11e8-941c-c9a5f0c95eb0)
* Add Chart functionality is available only for Summary, Matrix and Joined formats
* Save and run the Report
  ![image](https://media.github.ibm.com/user/19331/files/26fab2f2-b67a-11e8-814c-0e887eef1146)
* Export the report to csv or xls format
  ![image](https://media.github.ibm.com/user/19331/files/35803b12-b67a-11e8-8673-c41f5406f2c2)

--- 

## Subscribe to a Report
-	You can subscribe to a report to receive notification when a certain condition is met, e.g. if you have created a report for all open cases against a specific product for your account, you can subscribe to this report to receive notification when the number of cases exceeds 15
-	You can specify when to run the report to evaluate your condition 
-	You can specify what action to take when the condition is met

![image](https://media.github.ibm.com/user/19331/files/4f43c73a-b67a-11e8-8571-c221732b3d3b)

--- 
# Dashboards

* A dashboard sources it’s data from reports and shows this data as visual components such as charts, tables, metrics, gauges
* The same report can be used as a source for different visual components. 
* Multiple reports can be used in one dashboards
* You can clone an existing dashboard to create a new one or create a new one from scratch
* Select New Dashboard… on the Reports page
* The dashboard editor launches with two sections

![image](https://media.github.ibm.com/user/19331/files/bf1a2068-b67a-11e8-8020-b285753ddd16)

Section indicated by 1 contains two tabs:
* Components tab shows the visual components that can be used in the dashboard 
* Data Sources tab shows reports that can provide data to the dashboard

Section indicated by 2 contains resizable columns
* Drag and drop Vertical Bar Chart component from the Components tab onto the first column
*	Drag and drop Funnel Chart component onto the second column
  ![image](https://media.github.ibm.com/user/19331/files/e5b3bc7a-b67a-11e8-9de5-75d23e172542)
* Drag and drop a report from the Data Sources tab onto the Vertical bar chart component that you just added
  ![image](https://media.github.ibm.com/user/19331/files/f809cb6c-b67a-11e8-953e-8ed2f033b1ba)
* Repeat the same for the Funnel chart component. You need not wait for the Vertical bar chart to be refreshed with the data. You can perform these actions in a reverse order as well, i.e. you can drop a report first and then the component
*	The components are refreshed with the data from the source report and preview is shown as:
  ![image](https://media.github.ibm.com/user/19331/files/165e946c-b67b-11e8-921d-c2cd872b31cd)
*	You can edit the title, header and footer by clicking in the respective fields
*	Save and Run the dashboard

--- 

## Filters on Dashboards
You can add filters to the dashboard to see different combinations of data.
Example 1: Filter Cases with Internal Status with values New Case Opened or IBM is working or Client Requests a Callback
Example 2: Filter Cases with Internal Status with values Waiting on Client or Diagnostic File Needed

To create a filter
*	Select Add Filter option
![image](https://media.github.ibm.com/user/19331/files/2f79efb4-b67b-11e8-95df-7a4176a08a47)
*	In the Add Filter dialog, specify the details and select OK
  -	Select the filed Case -> Internal Status using the Field drop down menu
  -	Provide the display label if you want to change the default label 
  -	Provide filter options – operator, filter name and filter valuee (Each filter option becomes a separate filter)
  ![image](https://media.github.ibm.com/user/19331/files/6e5b5182-b67b-11e8-88aa-78c0852eebd7)
* The filter details appear above the dashboard columns as indicated by 1. The field used for filtering is shown in each column as indicated by 2.
  ![image](https://media.github.ibm.com/user/19331/files/7faaade8-b67b-11e8-83a2-2e80c7b4a630)
* Select IBM to respond filter and notice the dashboard data
  ![image](https://media.github.ibm.com/user/19331/files/8d1dba06-b67b-11e8-8e19-780d06fd4708)
* Now check Client to respond filter
* When a dashboard is refreshed, the source report is rerun. As a result, if the report takes long to run, the dashboard will be slow to refresh.
* Explore various Dashboard properties
  ![image](https://media.github.ibm.com/user/19331/files/9b289d0a-b67b-11e8-8014-29cb98784b1c)
*	Explore various predefined dashboards


