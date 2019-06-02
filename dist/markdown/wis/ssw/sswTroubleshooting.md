### Error: This query is taking too long to return any results. Simplify your query or add more filters to reduce the scope of the search. 

This error appears when the query takes more than 10 seconds to come back with results. To workaround this problem try the following:

- If you are using natural language and matching all keywords then add more keywords to your search
- If you are using natural language and matching any keyword then disable "Match any keyword" and submit again
- Filter documents by some Document Type
- If you are using advanced query syntax then remove wildcards 

### Error: This query contains a syntax error. Fix the syntax of your query and resubmit.

This error occurs when you are using the advanced query syntax and the search string contains an invalid syntax. Typical errors include: 
- Lack of boolean operators to connect conditions. Make sure that you are connecting your keywords with either commas (for the AND operator) or pipelines (for the OR operator). 
- Lack of parentheses to group conditions. If you are combining different type of boolean operators you must use parentheses to indicate the correct precedence. 
- Incorrect use of a reserved symbols. There are some reserved symbols that have special meaning in the eadvanced query syntax such as ```<= >= : ! ( ) [ ] , | ^ * ~ < >``` . Make sure that you are not using any of these reserved symbols incorrectly. 

To troubleshoot this problem start simplifying your query by removing conditions until it works, then add more conditions to your search until you find the one causing the problem. If is not obvious what the problem is please open a ticket or post the query in ssw-help channel. 

### Error: This query failed due to an unexpected error. A log has been created with this event for further evaluation by our team. 

This error occurs when Support Search with Watson fails for some unknown reason. When this happens an entry in our logs is saved for future analysis or troubleshooting . If you can consistently reproduce this error with a search please open a ticket to report this problem and provide additional details on how you can reproduce the issue. 
