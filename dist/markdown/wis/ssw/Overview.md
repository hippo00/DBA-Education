## <a id="overview" name="overview"></a>Overview

**Support Search with Watson** is the Cognitive Support initiative focused on providing IBM Clients and IBM Support Agents with the ability to easily find documents that are useful for self-help and problem determination. Support Search with Watson provides search results to three audiences of users:
* Clients, in the context of the Community Portal
* IBM Support Agents, in the context of Salesforce for Support.
    * A video shown on the  <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/knowledge/services/search " target="_blank">Support Search</a> DBA-Education page within the Knowledge Strategy section, provides an overview of Support Search with Watson as seen from the Salesforce agent console and explains why a proper search is vital to help you find the relevant content you need to get work done.
* Other IBMers outside of Support, in related job roles of helping Clients, such as Technical Sales.

Support Search with Watson, in order to find and display results, must acquire content and index it. Support Search with Watson does not own content and must follow the rules of content's own visibility restrictions if it is decided to make this content available to any of the three audiences. 

Support Search with Watson has 3 layers: **Data Source**, **Transformation** and **User**. The Data Source layer stores all the original version of the documents are processed by Support Search with Watson. The Transformation layer is the place where we format and prepare the documents, so they can be consumed by Watson Discovery. We use Cloudant as a staging area to collect the documents and Watson Discovery as the central knowledge repository. In the User Layer there is a set of applications that enable different type of users to interact with the knowledge repositories.

<!--- ![image](https://media.github.ibm.com/user/17980/files/069ef3f0-b4e6-11e8-8def-12a16110c11c) --->

<!--- ![image](https://media.github.ibm.com/user/17980/files/0e36deb6-b4e6-11e8-9c2d-e43eb1e5c2ad) --->

<div style="width: 600px;"> <div style="position: relative; height: 0;overflow: hidden; height: 400px; max-width: 800px; min-width: 320px; border-width: 1px; border-style: solid; border-color: #d8d8d8;"> <div style="position: absolute;top: 0;left: 0;z-index: 10; width: 600px; height: 100%;background: url(https://app.mural.co/api/v4/murals/discoverysearch9954/1520273431016/thumbnail) no-repeat center center; background-size: cover;"> <div style="position: absolute;top: 0;left: 0;z-index: 20;width: 100%; height: 100%;background-color: white;-webkit-filter: opacity(.4);"> </div> <a href="https://app.mural.co/t/discoverysearch9954/m/discoverysearch9954/1520273431016/cd2bde63d746ed42e273bcd9f4d7e3d622a96254" target="_blank" rel="noopener noreferrer" style="transform: translate(-50%, -50%);top: 50%;left: 50%; position: absolute; z-index: 30; border: none; background: transparent;"> <img src="https://app.mural.co/static/images/btn-enter-mural.svg" alt="ENTER THE MURAL" width="233" height="50" style="width: 233px !important; height: 50px !important"> </a> </div> </div> <p style="margin-top: 10px;margin-bottom: 60px;line-height: 24px; font-size: 16px;font-family: Proxima Nova, sans-serif;font-weight: 400; color: #888888;"> </p></div>
