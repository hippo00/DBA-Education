### Table of contents

1. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#intro">Introduction</a>
2. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#filters">Filters and facets</a>
3. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#sorting">Sorting</a>
4. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#aqs">Advanced Query Syntax</a>
5. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#preferences">Preferences</a>
6. <a href="/dba-support/DBA-Education/#/DBA-Education/wis/search/console#related">Related pages</a>

---
### <a id="intro" name="intro"></a>Introduction

To search for content in Support Search with Watson simply type what you would like to find in the search bar. The search engine will find relevant documents based on your keywords. Here are some examples of queries you can try:

- If you want to find db2 installation problems involving memory errors you can type:
```db2 install memory error```
- If you want to find a technote and you know its id simply type its number, for example:
```0882582```
- If you want to find documents with a particular error message, enclose the message by double quotes, for example:
```"error calling subroutine"```

By default, the search engine will only retrieve documents that match all the keywords you provided but you can change this in the preferences tab. 

### <a id="filters" name="filters"></a>Filters and Facets

If you are interested in reducing the scope of your search you can filters. Here is a list of available filters:

*	**Doc Types**, to select type of documents, such as technotes or production documentation.
*	**Sources**, to select the source system from where the documents came, for example Drupal, or dwAnswers. For a list of our sources and the data we extract please check our [content page](https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/search/content)
* **Creation Date**, to specify a range of dates for the date the document was created
* **Modified Date**, to specify a range of dates for the date the document was modified

For example, if you want to search for content only in Support Tickets check the box next to the Document type Support Tickets. 

![image](https://media.github.ibm.com/user/36557/files/40957800-7641-11e9-9a10-0e0322a9bbac)

To apply the filters you have selected click the check button 

In addition to filters you can also use facets to further narrow down your results. Facets behave similarly to filters with one important distinction: the list of values of a facet is dynamic and changes depending on the results of your search. Currently, the only facet available is for product names but we plan to expand the facets in the future. 

*	Support Missions, to select the Support Missions associated to the documents. **Note:** Unlike Doc Types and Sources, not all documents have been associated with support missions, so by using this filter you may be filtering out some documents. 
* Product Name, to select the name of the Product associated to the document. **Note:** Product Names are not standard and they reflect the product name as it appears in the original source. 

![image](https://media.github.ibm.com/user/17980/files/6e4776f8-b4e6-11e8-85b5-359c76b28a18)

### <a id="sorting" name="sorting"></a>Sorting

You can also sort the result by using different criteria. To do this select the field you want to sort by and the type of sort and click apply. For example, to see the most recent articles sort by Modification Date and Descending order

![image](https://media.github.ibm.com/user/17980/files/7ffbaa7c-b4e6-11e8-9957-3dc20de06d6b)

### <a id="aqs" name="aqs"></a>Advanced Query Syntax

In addition to use Natural Language you can also use the Advanced Query Syntax language. This syntax allows you to specify the attribute of the document and the type of comparison you want to do. It also enables you to enter multiple conditions at once. To enable advanced query syntax go to the Preferences tab and check `Advanced query syntax`. 

The general syntax for this is the following:
`[attributeName operator] value [delimiter ...]`, where 

* `attributeName` is the name of a document attribute (optional, if omitted operation applies to all fields)
* `operator` is an operator to apply on that attribute (this is required if attribute is provided but not required is searching all fields)
* `value` is the value to be used in the comparion
* `delimiter` is either a comma (",") or a vertical bar ("|"). Commas represent AND boolean operators and vertical bars represent OR boolean operators

To learn more about the operators you can use see the following list. To learn more about the attributeNames you can use check the Data Schema of our documents

| the operator ... | specifies ... | for example this query ...  | will retrieve documents ... | Comments |
| ------------- |---------------| ------| ------| ------|
| :      | a simple match | `title:install` | whose title contain the term install and also variations of that word such as installation and installed | 			<ul><li>Simple matches are not case sensitive. For case sensitivity use exact matches.</li><li>If you want to match a list of terms then use parenthesis. Check the operator <em>(</em>&nbsp;<em>)</em>.</li><li>If you want to look for a ordered group of words see the double quotes operator ""</li></ul> |
|       |  | `install` | that include the word install in any attribute of the document | <ul>	<li>simple matches are the default operator applied when no attribute is specified.</li></ul> |
| "" | a phrase | `title:"DataStage Join fails"` | whose title contain the words "DataStage Join fails" in that order. Since this is a simple match variations of verbs and known nouns will also be included | |
|  |  | `"massive heap size"` | that include the words "massive heap size" in that order in any attribute of the document | <ul>	<li>since no attributes were provided, the phrase in this case is applied against all attributes</li></ul> |
| :: | an exact match | `title::"Join stage exits with a heap allocation error"`  | whose title is exactly "Join stage exits with a heap allocation error" |  |
| () | 	Nested group of terms |   |  | Use parenthesis with the operators \| and , to create a list of terms or conditions |
| \| | or  | ```title:(heap\|allocation\|error)```  | title contain one of the following: heap, allocation or error | Results that contain the terms multiple times or many of the terms will go to the top of the results |
|  |  | `	(heap\|allocation\|error)` | that contain one of the following: heap, allocation or error | OR is the default boolean operator so this search is equivalent to the search (heap allocation error) or the search heap allocation error |
| , | 	and | `	title:(heap,allocation,error)` | that contain all the terms: heap, allocation, and error in the title |  |
| :! | must not match | `title:(datastage,heap),title:!parallel` | whose title matches datastage and heap but do not include parallel | **Note:** If you want to exclude multiple terms they can't be listed in a nested group. You have to specify them individually. For example to exclude parallel and join use: `title:!parallel, title:!join` |
| ::! | 	must not match exactly | `title:(datastage,heap),title:!"DataStage Join fails"` | whose title matches datastage and heap but not match the phrase "DataStage Join fails" |  |
| * | wildcard for unknown characters | `title:(ibm,jr*)` | whose title contains  ibm and also any words starting with jr | **Note:** wildcards can only be used at this point with lowercase strings. The match is case insensitive but the syntax for the query must be specified with lower case. For example JR* won't work as a wildcard but jr* will. This is limitation of Watson Discovery. As soon as this changes we will update this documentation. |

#### Data Schema
The Data Schema describes the structure of the documents stored in Support Search. You can use these attributes when using Advanced Syntax. 

| Attribute | Description | Example |
| ------------- | --------------- | ------ |
| `title` | title of the document |   |
| `text` | extracted text from the content |   |
| `metadata.creationDate` | creation date YYYY-MM-DD or timestamp YYYY-MM-DDTHH:mm:ss.sssZ |   |
| `metadata.modificationDate` |  	modification date YYYY-MM-DD or timestamp YYYY-MM-DDTHH:mm:ss.sssZ |   |
| `metadata.source` |  	source name like "DCF" or "Knowledge Center" |   |
| `metadata.sourceUrl` | original source document URL |   |
| `metadata.canonicalUrl` | canonical URL calculated from parsing the source document URL |   |
| `metadata.sourceDocumentId` | source ID for document |   |
| `metadata.productId` | product ID for the document |   |
| `metadata.productName` | product name for the document |   |
| `metadata.gbt30` | GBT code for the document |   |
| `metadata.docType` | type of document like "Product Documentation", "Troubleshooting", etc.. |   |
| `meatadata.isPublic` | flag to determine if document is public or private |   |

#### Stopwords

When using advanced query syntax you should avoid using stopwords. These are vey common words that the search engine excludes in searches automatically. If you include a stopwords in a advanced query syntax you won't get any results. A full list of stopwords can be found in this <a href="https://watson-developer-cloud.github.io/doc-tutorial-downloads/discovery/custom_stopwords_en.txt">document</a>. 

### <a id="preferences" name="preferences"></a>Preferences

#### Use advance query syntax
Use this option to send queries using the advanced query syntax instead of natural language. 

#### Expand product alias
Product Aliases are nicknames for product. If you want to use product Alias in your searches make sure that this check is marked. This option will expand your aliases into the full product name. 

#### Match any keyword
Use this option to retrieve documents that match any of the keywords included in your search, instead of the default beahvior which is to retrieve only documents that match all the keywords

### <a id="related" name="related"></a>Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/search">Search for Agents</a>

