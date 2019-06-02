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


