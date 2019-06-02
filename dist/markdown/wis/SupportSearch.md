
* [Overview](/dba-support/DBA-Education/#/DBA-Education/wis/search#overview)
* [List of Data Sources](/dba-support/DBA-Education/#/DBA-Education/wis/search#datasources)
* [Support Search in Community](/dba-support/DBA-Education/#/DBA-Education/wis/search#community)
* [Support Search in Agent Console](/dba-support/DBA-Education/#/DBA-Education/wis/search#console)
* [Support Search Web](/dba-support/DBA-Education/#/DBA-Education/wis/search#web)
* [Support Search API](/dba-support/DBA-Education/#/DBA-Education/wis/search#api)
* [Support Search ETL](/dba-support/DBA-Education/#/DBA-Education/wis/search#etl)
* [Using Support Search with Watson](/dba-support/DBA-Education/#/DBA-Education/wis/search#usage)
* [Advanced Query Syntax](/dba-support/DBA-Education/#/DBA-Education/wis/search#querylanguage)
* [Metrics](/dba-support/DBA-Education/#/DBA-Education/wis/search#metrics)
* [Related Pages](/dba-support/DBA-Education/#/DBA-Education/wis/search#related)

---
## <a id="overview" name="overview"></a>Overview

**Support Search with Watson** is the Cognitive Support initiative focused on providing IBM Clients and IBM Support Agents with the ability to easily find documents that are useful for self-help and problem determination. Support Search with Watson provides search results to three audiences of users:
* Clients, in the context of the Community Portal
* IBM Support Agents, in the context of Salesforce for Support.
* Other IBMers outside of Support, in related job roles of helping Clients, such as Technical Sales.

Support Search with Watson, in order to find and display results, must acquire content and index it. Support Search with Watson does not own content and must follow the rules of content's own visibility restrictions if it is decided to make this content available to any of the three audiences. 

Support Search with Watson has 3 layers: **Data Source**, **Transformation** and **User**. The Data Source layer stores all the original version of the documents are processed by Support Search with Watson. The Transformation layer is the place where we format and prepare the documents, so they can be consumed by Watson Discovery. We use Cloudant as a staging area to collect the documents and Watson Discovery as the central knowledge repository. In the User Layer there is a set of applications that enable different type of users to interact with the knowledge repositories.

<!--- ![image](https://media.github.ibm.com/user/17980/files/069ef3f0-b4e6-11e8-8def-12a16110c11c) --->

<!--- ![image](https://media.github.ibm.com/user/17980/files/0e36deb6-b4e6-11e8-9c2d-e43eb1e5c2ad) --->

<div style="width: 600px;"> <div style="position: relative; height: 0;overflow: hidden; height: 400px; max-width: 800px; min-width: 320px; border-width: 1px; border-style: solid; border-color: #d8d8d8;"> <div style="position: absolute;top: 0;left: 0;z-index: 10; width: 600px; height: 100%;background: url(https://app.mural.co/api/v4/murals/discoverysearch9954/1520273431016/thumbnail) no-repeat center center; background-size: cover;"> <div style="position: absolute;top: 0;left: 0;z-index: 20;width: 100%; height: 100%;background-color: white;-webkit-filter: opacity(.4);"> </div> <a href="https://app.mural.co/t/discoverysearch9954/m/discoverysearch9954/1520273431016/cd2bde63d746ed42e273bcd9f4d7e3d622a96254" target="_blank" rel="noopener noreferrer" style="transform: translate(-50%, -50%);top: 50%;left: 50%; position: absolute; z-index: 30; border: none; background: transparent;"> <img src="https://app.mural.co/static/images/btn-enter-mural.svg" alt="ENTER THE MURAL" width="233" height="50" style="width: 233px !important; height: 50px !important"> </a> </div> </div> <p style="margin-top: 10px;margin-bottom: 60px;line-height: 24px; font-size: 16px;font-family: Proxima Nova, sans-serif;font-weight: 400; color: #888888;"> </p></div>

---
## <a id="datasources" name="datasources"></a>List of Data Sources
We currently extract information from the following sources:
*	Knowledge Center, the IBM repository for all product documentation, all public content for the products included in the Rollout Schedule is ingested
*	Parature, legacy support system that has been sunset and migrated to Salesforce
*	Wellspring, legacy support search engine for Software products, only PMRs are ingested
*	DCF, the platform for publishing technotes and APARs that has been replaced by Drupal. All new content is coming from Drupal.
*	Drupal, the new platform for publishing technical documentation, all published (both external and internal) documents are ingested
*	dwAnswers, user forum focused on answering technical questions related to IBM products
*	dwBlogs, blogs from developerWorks
*	Salesforce, the new support platform for managing customer issues, Salesforce Articles are ingested
*	Zendesk, standalone site for the Zendesk product, all articles from Zendesk site are ingested
*	Redbooks for P Series are sent to Support Search with Watson by Watson4TSS

---
## <a id="community" name="community"></a>Support Search in Community
Community is the new IBM Support Portal. It is used by external customers to interact with the support organization. The search tool in Community is powered by Support Search.

---
## <a id="console" name="console"></a>Support Search in Agent Console
The Agent Console, also known as the Support Console, is the internal tool used by support agents to manage customer tickets. To learn more about how you can use Support Search with Watson in the Agent Console please visit Support Search Console 

---
## <a id="web" name="web"></a>Support Search Web
Support Search Web is the internal search tool available to all IBMers with approved access. It can be used to access Support Search outside of the Agent Console. The Support Search Web is currently in Development and not available yet. 

---
## <a id="api" name="api"></a>Support Search API
The Support Search API is the interface that allows other applications to interact with the Support Search repositories. The API is a wrapper to the Watson Discovery API and it encapsulates the authentication process for internal use. To learn more about the API please refer to https://ssw-api.mybluemix.net/

---
## <a id="etl" name="etl"></a>Support Search ETL
The SSW-ETL is the tool to extract, transforms and ingest documents into the Support Search repositories. 

---
## <a id="usage" name="usage"></a>Using Support Search with Watson
To start using simply type a search of what you would like to find in the search bar. For example type "datastage heap". 

The Agent Console has several options for filters and facets. Once you submit results you will be presented with a set of results you can filter if you need to narrow down the scope of your search. Note that next to each filter you will see the number of documents associated with that category. 
Currently, there are 3 type of filters:
*	Doc Types, which enables you to select type of documents, such as technotes or production documentation.
*	Sources, which enables you to select the source system where the documents came from, for example DCF, or dwAnswers. For a list of our sources and the data we extract please check our Data Sources - Support Search page
*	Support Missions, which enables you to select the Support Missions associated to the documents. Unlike Doc Types and Sources, not all documents have been associated with support missions, so by using this filter you may be filtering out some documents. 

For example, if you want to only see Technotes check the box next to Technote. 

![image](https://media.github.ibm.com/user/17980/files/4e73ea5a-b4e6-11e8-9ea5-e1cc4e0e151e)

To apply the filters you have selected click the check button 

In addition to filters you can also use facets to further narrow down your results. Facets behave similarly to filters with one important distinction: the list of values of a facet is dynamic and changes depending on the results of your search. Currently, the only facet available is for product names but we plan to expand the facets in the future. 

![image](https://media.github.ibm.com/user/17980/files/6e4776f8-b4e6-11e8-85b5-359c76b28a18)

You can also sort the result by using different criteria. To do this select the field you want to sort by and the type of sort and click apply. For example, to see the most recent articles sort by Modification Date and Descending order

![image](https://media.github.ibm.com/user/17980/files/7ffbaa7c-b4e6-11e8-9957-3dc20de06d6b)

---
## <a id="querylanguage" name="querylanguage"></a>Advanced Query Syntax
In addition to use Natural Language you can also use the Advanced Query Syntax language. This syntax allows you to specify the attribute of the document and the type of comparison you want to do. It also enables you to enter multiple conditions at once. The general syntax for this is the following:
`[attributeName operator] value [delimiter ...]`, where 

* attributeName is the name of a document attribute (optional, if omitted operation applies to all fields)
* operator is an operator to apply on that attribute (this is required if attribute is provided but not required is searching all fields)
* value is the value to be used in the comparion
* expression delimiter is either a comma (",") or a vertical bar ("|"). Commas represent AND boolean operators and vertical bars represent OR boolean operators

In addition to use Natural Language you can also use the Advanced Query Syntax language. This syntax allows you to specify the attribute of the document and the type of comparison you want to do. It also enables you to enter multiple conditions at once. The general syntax for this is the following:

[attributeName operator] value [delimiter ...]

where 

attributeName is the name of a document attribute (optional, if omitted operation applies to all fields)
operator is an operator to apply on that attribute (this is required if attribute is provided but not required is searching all fields)
value is the value to be used in the comparion
expression delimiter is either a comma (",") or a vertical bar ("|"). Commas represent AND boolean operators and vertical bars represent OR boolean operators
To learn more about the operators you can use see the following list. To learn more about the attributeNames you can use check the Data Schema of our documents

| the operator ... | specifies ... | for example this query ...  | will retrieve documents ... | Comments |
| ------------- |---------------| ------| ------| ------|
| :      | a simple match | `title:install` | whose title contain the term install and also variations of that word such as installation and installed | 			<ul><li>Simple matches are not case sensitive. For case sensitivity use exact matches.</li><li>If you want to match a list of terms then use parenthesis. Check the operator <em>(</em>&nbsp;<em>)</em>.</li><li>If you want to look for a ordered group of words see the double quotes operator ""</li></ul> |
|       |  | `install` | that include the word install in any attribute of the document | <ul>	<li>simple matches are the default operator applied when no attribute is specified.</li></ul> |
| "" | a phrase | `title:"DataStage Join fails"` | whose title contain the words "DataStage Join fails" in that order. Since this is a simple match variations of verbs and known nouns will also be included | |
|  |  | `"massive heap size"` | that include the words "massive heap size" in that order in any attribute of the document | <ul>	<li>since no attributes were provided, the phrase in this case is applied against all attributes</li></ul> |
| :: | an exact match | `title::"Join stage exits with a heap allocation error"`  | whose title is exactly "Join stage exits with a heap allocation error" |  |
| () | 	Nested group of terms | ``  |  | Use parenthesis with the operators \| and , to create a list of terms or conditions |
| \| | or  | `title:(heap\|allocation\|error)`  | title contain one of the following: heap, allocation or error | Results that contain the terms multiple times or many of the terms will go to the top of the results |
|  |  | `	(heap\|allocation\|error)` | that contain one of the following: heap, allocation or error | OR is the default boolean operator so this search is equivalent to the search (heap allocation error) or the search heap allocation error |
| , | 	and | `	title:(heap,allocation,error)` | that contain all the terms: heap, allocation, and error in the title |  |
| :! | must not match | `title:(datastage,heap),title:!parallel` | whose title matches datastage and heap but do not include parallel | **Note:** If you want to exclude multiple terms they can't be listed in a nested group. You have to specify them individually. For example to exclude parallel and join use: `title:!parallel, title:!join` |
| ::! | 	must not match exactly | `title:(datastage,heap),title:!"DataStage Join fails"` | whose title matches datastage and heap but not match the phrase "DataStage Join fails" |  |
| * | wildcard for unknown characters | `title:(ibm,jr*)` | whose title contains  ibm and also any words starting with jr | **Note:** wildcards can only be used at this point with lowercase strings. The match is case insensitive but the syntax for the query must be specified with lower case. For example JR* won't work as a wildcard but jr* will. This is limitation of Watson Discovery. As soon as this changes we will update this documentation. |

## <a id="metrics" name="metrics"></a>Metrics

<iframe src="https://dataplatform.cloud.ibm.com/dashboards/3336a06c-9b5c-465a-8172-bfd5c14c8b4a/view/7e39e72363831de161d4f6e407cd7d042f63765bb4bb830784827b490a342497a83a1197c82919538f150160fbef4458c9" width="1000" heigth="1500" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>

## <a id="related" name="related"></a>Related Pages
* <a href="/dba-support/DBA-Education/#/DBA-Education/process/agents/case/search">Search for Agents</a>
