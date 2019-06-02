## 2019

### Salesforce tickets formatting issue
<a href='#sf-tickets-march-issue' id='sf-tickets-march-issue' class='anchor'>anchor</a>

On March 11, 2019, we found issues affecting the formatting of Salesforce tickets in Support Search with Watson (SSW). This was caused by a local setting configuration in the SDS repository, our source for Salesforce tickets. The SDS team is aware of this problem and working to resolve it. While this work is being done we have temporarily stopped the extraction of SF tickets from SDS, which means no new tickets or updates to tickets in Salesforce made after March 11 are being shown in SSW. Once the data is corrected in SDS we will reingest all the tickets from SDS. We still don’t have a definitive ETA for completing this work but early estimates indicate this will be completed by the end of March.

[Read our installation guide](#sf-tickets-march-issue)

### Sprint 5

- Support Search with Watson results sent to separate new tabs so you can keep browsing the results without replacing the content of your search view. 

### Sprint 2

- Ability to save preference by user to remember filters and facets 
- When searching with “Support Search with Watson”, then switching to cases (or other) view and back it starts from Scratch and no previous search results are retained. Same happens when clicking on a search result and returning with browser back button (as no X to close is available) we’re back to the welcome screen. Sending search result list or individual search hits to their own tabs helps make the search much more usable.
- Fixed Defect - Feedback for curated answers does not work.

### Sprint 1
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/721" target="_blank">721</a> Salesforce tickets in Support Search : Salesforce tickets available in the search interface of the Agent Console.
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1107" target="_blank">1107</a> Update Console experience for Lightning. 
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1106" target="_blank">1106</a> "X" to close screen should remain on top of the article as you scroll.
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1109" target="_blank">1109</a> Curated answers should disappear when filters are unchecked.

## 2018

### What's new in Sprint 24
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/743" target="_blank">743</a> Curated answers: When we identify that a customer was not issuing a keyword search but rather a question or a command, we provide a curated answer and not a Discovery search result.
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1076" target="_blank">1076</a> Add User Info for Stand Alone Support Search. 

### What's new in Sprint 22
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1051" target="_blank">1051</a> Fixed defect for corrupted click data if user edits the search but does not submit it in Support Search Web.
- <a href="https://github.ibm.com/Watson-in-Support-Search/ssw-planning/issues/1048" target="_blank">1048</a> Fixed defect to avoid displaying blank page in Support Search Web. 

### What's new in Sprint 21
-  <a href="https://ssw-ui.mybluemix.net/" target="_blank">Support Search Web application</a> that does not require Salesforce access (does not have access to PMRs for search).
- New schema for Support Search with Watson documents in Console for better performance.
- Hourly refreshes for Drupal internal documents.
- Return appropriate response in Console for edge-cases like timeout, no results, error.
- Defect fix for Console UI does not return results when result size is greater than 6 MB. 
- Defect fix for no results returned when sorted in Ascending order

### What's new in Sprint 20
- Fixed defect for HTML code that shows up in search results from Support Search with Watson.
- Fixed defect to clear out the Product Name facet in the Console once the filters change because in many cases the Product Name selections may not make sense with the new result set.
- Enriched SalesForce Knowledge Articles with ARM category data.

### What's new in Sprint 19
- Allow users to search technotes by technote id. 
- Added cache for queries such that when caching is enabled, the exact same queries sent to Support Search with Watson will return cached results without querying Watson Discovery. This will increase performance and also will reduce the query load against Watson Discovery.
- Enabled document type filter for Community Portal.
- New schema for Support Search with Watson documents in Community Portal for better performance.
- Updated crawler for extracting Salesforce Knowledge Articles to fix missing articles issue.


