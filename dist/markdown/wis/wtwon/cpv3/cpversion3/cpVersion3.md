## Demo video
<a href=" https://ibm.box.com/s/rvn2oi67igeugvc41phcjt9cprd34lzb" target="_blank"> Case Prioritization v3 demo </a>


## Documentation
* ### <a href=" https://ibm.box.com/s/phzr761lc4e4qqeacnb2chzssdbrrn1c" target="_blank"> Case Prioritization Cookbook</a>

* ### Views

#### Default View

![image](https://media.github.ibm.com/user/10199/files/9e9ab3b6-cbab-11e8-8c46-d326da0e7370)

The initial loading of the CPv3 interface displays the view and filter sidebar on the left and a single pipeline in 
the Kanban view that shows all of the cases for the user’s Support Missions.

On the top right corner of the CPv3 header are controls for refreshing the case data on the interface and 
toggling between Kanban and Grid views.

![image](https://media.github.ibm.com/user/10199/files/bea5e626-cbab-11e8-83a3-12f57a2ba843)

 #### Kanban View

Pipelines will only display in the Kanban view.

If there are multiple pipelines in the current view definition, each pipeline will appear as a column on the 
Kanban display. The pipeline’s header will display the count of currently loaded cases and the total number of 
cases for that pipeline along with the query defining that pipeline.

Cases in each pipeline are filtered by the collection of filters defined for the view plus the query defined for 
that pipeline.

Clicking on a pipeline’s header, will toggle the view between multiple pipelines and the selected pipeline only.

![image](https://media.github.ibm.com/user/10199/files/fae405c8-cbab-11e8-9632-8dedff1d88c5)

![image](https://media.github.ibm.com/user/10199/files/1f08aa1c-cbac-11e8-8713-1f79cb9bd91c)


#### Grid View
Pipelines are ignored in the grid view, and only the filters and ordering in the view definition are considered.

![image](https://media.github.ibm.com/user/10199/files/450a4bb2-cbac-11e8-9e02-053ee20b0b8c)

### Working with filters 
Each filter definition is applied to all of the defined pipelines as a base query of cases

![image](https://media.github.ibm.com/user/10199/files/77326d18-cbac-11e8-9265-422875a21d5e)

To add a filter:
* Click "Add filter"
* Select a field to filter on (all fields in the Case object are available for filtering)
* Select an operator
* Enter the text to query for
* Click "Done" to add the filter to the view

### Working with pipelines 
A pipeline is an additional filter definition that creates a column of cases from the collection of defined filters 
plus the pipeline definition. Pipelines apply to a single column in the Kanban view. Each pipeline added to the 
view will add a new column to the Kanban view.

![image](https://media.github.ibm.com/user/10199/files/a94d2860-cbac-11e8-9e40-3117dfea31a3)


To add a pipeline:
* Click "Add pipeline"
* Select a field for the pipeline to filter on
* Select an operator
* Enter the text to query for
* Click "Done" to add the pipeline to the view


### Working with views 
A view is a set of filters, pipelines, and order that is configurable by the user. Once you have a set of filters, 
pipelines, and order, you can save that as a view that be re-loaded from the `Views` dropdown.

![image](https://media.github.ibm.com/user/10199/files/d2b62bf2-cbac-11e8-9c76-3454c5b6a382)

To save the current view:
* Click "Save as"
* Provide a name for the view
* Click "Ok" 

The interface will indicate that the view has been successfully created, and you can find and load the new 
view from the `Views` drop down.

![image](https://media.github.ibm.com/user/10199/files/f3763670-cbac-11e8-84ea-14141b8e6013)

A user can share any view that they have created. To share a view:
* Verify that the view you want to share is loaded; the last loaded view is shown under `Current view`
* Click "Share"
* Select the users that you want to share the view with and add them to the righthand column
* Click "Save"

This view will now appear in the `Views` list for the users that were added.
