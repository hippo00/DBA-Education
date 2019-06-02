# Requesting data from the client multiple times

Clients can get upset if we continually request that they enable logging and submit data. Be clear and explain WHY we need the data/log files. Client’s may feel their efforts and time are not valued or become upset which will result in a poor NPS score. Ensure them that we are trying to provide excellent customer service and clearly communicate WHAT files, WHAT we are expecting to see and WHY these files are important to helping resolve their issue.

#### Scenarios
For some cases, it is inevitable to request client log files on multiple occasions. Such reasons include:
  * Changing environmental variables
  * Different/incorrect traces strings enabled
  * More detailed trace needed
  * Incomplete capture of issue
  * Client skipped/forgot file request – a numerated list helps so you can point out that “item #5 (log file name) on the list wasn’t   received”

Despite the fact that log files are key investigation resources for Support, the client may not always understand that or become irritated/frustrated to Support’s repetitive request. In some cases this causes ProActives and/or CritSits which causes more work from more people and slows down resolving the client’s issue. Be sure to look at what they have already sent. Review what they have already sent. Don’t ask for duplicate files.

(1) Every time that we request log files tell the client exactly what we’re looking for in the data for, for example “_I am searching the logs for “Request Context Path” to find the request you sent to the server at X URL, and then I am searching for “sendAuditEvent 
SUCCESSFUL” to see whether the login was a success_”.

(2) If the client sends us log files that do not contain the data we’re looking for, then we should tell them which files we searched through, and ask them:

    a. If we missed something, or
  
    b. If it’s possible that the log rolled over, or
  
    c. That it’s the wrong log (possibly from the wrong server or wrong time frame)

(3) Conference with the client. If the client messes up a trace a second time, at that point setting-up a Webex to capture the traces with them is going to save both parties much time.

(4) If we’re in a situation where the client didn’t mess up the trace capture, and we need to request a more detailed trace, then I think we need to explain why we’re requesting the more detailed trace, for example “In the security trace we captured last time, we saw that the login failure was occurring because the POST parameter in the request was invalid. I’d like to capture another round of logs with this new trace specification that captures details from the ‘webcontainer’ so we can see whether the POST parameter is malformed or absent”.

Always remember that the client has to put in much effort and time to gather data, so asking again and again without details of WHY you need the files can frustrate them. Sometimes the client might be struggling with workload or other challenges that are preventing them from obtaining the proper log files. Ask the client if there any challenges in collecting the logs we have requested, and if so then provide suggestions/assistance if you can.

#### Reminder
Intermittent issues can be a bit more complicated when collecting trace logs since they are not easy to reproduce. At times, it is impossible for a client to enable tracing for long periods of time hence the difficulty to capture a complete set of logs, especially for Production environments. Depending on the situation, always be transparent with the client and provide a clear understanding what the Support engineer is expecting to find in the logs to minimize additional log captures.

#### Summary
(1) Make the client feel that their time and assistance in gathering the data is needed appreciated.

(2) Review all files/data received before asking for any additional files/data. Explain what you found or what is missing.

(3) The most effective way to collect client log files is to be transparent with them using the following tips:
  * Why we need them
  * Provide file location to help client find the logs
  * How the new round of logs will differ from the existing logs
  * What content was missing from the existing set of logs
  * Expectation of the new set of logs
  * How this will assist in resolving their issue
