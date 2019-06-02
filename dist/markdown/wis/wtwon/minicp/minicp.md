
## Mini Case Prioritization User Interface
Mini Case Prioritization (MCP) is a widget that users will be able to look at cases 
they own while on the console at any time.

![image](https://media.github.ibm.com/user/10199/files/4d22abec-cbab-11e8-9101-90eaee356c1a)

In MCP,cases will be displayed in an accordion (1) where the cases are grouped by their status. 

Each status header will be suffixed with the number of cases in that status. 
Clicking on a header will expand or collapse the list of cases of that status. Inside each list, cases are ordered by their Watson score in descending order. 

If a user wants to look at more information about a case, they can click the ‘more’ link. Each card will have information of the following:
* Case Number (with a clickable link to open the case on the console)
* Subject
* Account name
* Support Mission
* Severity
* Locale

If any case data has been updated while using MCP, the refresh data button (2) will highlight blue. Upon clicking the button, the widget will reload the cases.

Users may filter their cases by support mission by using the dropdown (3). Upon initial load, the default filter is to show all their cases from all support missions they belong to.
Users may also filter their cases by 
doing a quick search using the search bar 
(4). Cases will filter down as users type into the search field. The fields that are 
being searched are all the fields of the case that the card shows (see above list).
