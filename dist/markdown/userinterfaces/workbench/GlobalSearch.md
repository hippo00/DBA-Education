**Salesfore Global Search** is the default search capability of the Agent Console and allows to search for any record on the platform that the individual thats searching has access for. For an introduction to Global Search, please see this video:

<a href="http://salesforce.vidyard.com/watch/L6lwYMJUyH1n8sKr7KQDaA" target="_blank">
<img src="https://media.github.ibm.com/user/19331/files/3a58dd1a-b03a-11e8-9ac6-76b42bd31f45" width="640"/>
</a>

How does **Global Search** work ? From the moment you create a record in Salesforce, the search engine works to make your information easy to find. When you search, you get relevant results quickly. To use search, use the search input field on the top header bar and enter your search term(s):

![image](https://media.github.ibm.com/user/19331/files/a686c8a8-b03a-11e8-9481-d463b4f76269)

Hitting **Enter** will open the search results on a new Tab:

![image](https://media.github.ibm.com/user/19331/files/e27f125c-b03a-11e8-806d-10e3bcc45d1e)

In this screen, Salesforce presents you with a number of <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related Lists</a> for any entity that it could find records based on your individual object visibility. This means there could be records that are there but that **would not** show up, e.g. Cases you do not have access for. You can now click into any of the available links on these object and get to the corresponding object page.

Another important aspect to know is that **Global Search** by default does not query the Case Feed. If you want fulltext search through many cases including their feeds, read the [Case Feed Search](/dba-support/DBA-Education/#//DBA-Education/uis/workbench/globalSearch#casefeed) chapter

There is a number of additional capabilities you can use on this page:

## Filtering
On the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench/relatedlists">Related List</a> for **Cases**, click the "Show Filters" link. 
![image](https://media.github.ibm.com/user/19331/files/8bb2a7ca-b03c-11e8-9910-b6c84fe05fb4)

You can now define your additional filters and specify your resultset even further:
![image](https://media.github.ibm.com/user/19331/files/c014eba4-b03c-11e8-973a-b1b6f3b25d9d)

## <a id="casefeed" name="casefeed"></a>Case Feed Search

As mentioned, keep in mind that **Global Search** by default does not query the Case Feed. If you want fulltext search through many cases including their feeds, run a **Global Search** in the first place and on the result page, click the "Search Feeds" button:
![image](https://media.github.ibm.com/user/19331/files/5e65c7c4-b03d-11e8-8a81-da5ebcd62a7b)

**Global Search** will now execute your search query against all the feeds on all Objects:

![image](https://media.github.ibm.com/user/19331/files/c9657c4a-b03d-11e8-8cc3-7286028b4a61)

