**How do I report issues or request enhancements?**

If you are salesforce user please this this site to report issues or ideas https://ibmsf.force.com/internal/s/login/?startURL=%2Finternal%2Fs%2F&ec=302 . Alternatively, you can also list these from the Agent Console  https://ibmsf.my.salesforce.com/console and then go to Ideas > WiS:Category: Search. This view allows you to see ideas only for Search. Before you submit an idea please make sure it is not a duplicate and if the idea is already there, make sure you vote for it. 

If you are not a salesforce user and you use Wellspring or Support Search Web and you need to report an issue or submit an enhancement request please open a Smart Ticket here: 

https://watson-in-support.w3ibm.mybluemix.net/#/login

**Why I can't see Support Tickets in Support Search with Watson**
Anyone with access to the Agent Console can see Support tickets. Support ticket comprises legacy tickets (PMRs) and salesforce tickets. Legacy tickets in the Agent Console are available to everybody with a login to the Agent Console. Salesforce tickets are available only in search results but can to see the details of the ticket you have to have permissions to view the ticket. 

In Support Search with Watson standalone web (https://ssw-ui.mybluemix.net/) access to Support tickets is controlled by the legacy Wellspring User Bluegroup (https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W932e0fab0157_45bd_9660_13fc598167f7/page/SecurityInstructions). If you require to see legacy tickets in our standalone web version you have to request access to this user group. This is a temporary approach and we are working to simplify this so we don't have to depend on Bluegroups anymore. 

**Why I can't see the case owner's name in the tickets?**
Compliance with GDPR (General Data Protection Regulation) requires organizations to safeguard personal data. GDPR's principles dictate that personal data should only be used for the explicit purpose it was collected. This principle has far reaching implications and prevent us from making the full content of support tickets available to all support agents for the purpose of research. To comply with GDPR and also enable support agents to access relevant information stored in legacy tickets we have anonymized all personal data from our tickets. To learn more about GDPR and data retention policy please refer to IBM https://ibm.ent.box.com/notes/264665535595?v=SF-Data-Retention-Policy

**What is the difference between Watson Discovery and Support Search?**

Support Search is an umbrella initiative of Watson in Support and its goal is to provide internal customers the ability to find relevant technical information. Watson Discovery is an IBM product and is one of the technologies we use in Support Search with Watson to implement the services we provided. You can find more information about it here: https://www.ibm.com/watson/services/discovery/

**How much historical information will Support Search with Watson store?**

This may vary by source but in general, and whenever is reasonable and feasible, we will try to store in Support Search with Watson as much historical information as is available in the original sources. For legacy support tickets such as PMRs whave 10 years worth of cases.

**What information can I search in Support Search?**

Please refer to our list of data sources located here https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/wis/search/content

**Why do I get more results when I add more terms to my search?**

The default search strategy followed by Watson Discovery is to use the OR operator during the retrieval of documents. That means that a search with more terms will likely return more results (since there are higher odds that more documents include at least one of the search terms). However, even though the total number of results increases with more search terms the ranking used to identify the more relevant results becomes more specific with more search terms, and so documents with a greater number of matches to the all search terms will raise to the top of your results. 

We understand that seeing the total number of documents increasing is not a common behavior when compared to other search engines and this adds some confusion. We have communicated this sentiment to the Watson Discovery Product team and we are looking into alternatives to address this issue. If you don't want to use the default search strategy (that relies on the OR operator) you can use the Advanced Syntax and specify the AND operator (which is a comma). 

**What is the search tool replacement for Wellspring?**

Support Search with Watson (SSW) is the replacement for Wellspring. SSW is available in Salesforce Agent Console and in a new web interface <a href="https://ssw-ui.mybluemix.net/" target="_blank"> here</a>

More information about the migration of Wellspring to SSW may be found <a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W932e0fab0157_45bd_9660_13fc598167f7/page/WellSpring%20Migration%20FAQ" target="_blank"> here</a>  

**How do I onboard my team's knowledge repositories into Support Search?**

The onboarding process is managed by Salesforce for Support Rollout team. Please refer to this link to learn more about it: https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/1e1e98c9-5cc5-4353-adeb-cb97f41722b6/page/7e4fc06f-ca3d-46dd-8ca3-b4a976fffba0

