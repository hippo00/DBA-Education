
Case Classification happens when a new or reopened case is initiated, as described here. There is a step where the case is enriched by adding skill stamping and other Watson insights to the case. The following steps describe how this process is performed and included to the case.

 ## Case Skill stamping and Language Translation
 In this section, we will focus on the language translation and skill stamping insights which are added to the case as it is being created in Salesforce as described in the <a href="/dba-support/DBA-Education/#/DBA-Education/process/case/lifecycle">Case Lifecycle Overview</a>

<img src="https://media.github.ibm.com/user/19331/files/4e9e9ec6-a7b2-11e8-971e-55472cf21b1c" width="800">

**Figure 1**: Case skill stamping and language translation

* Once Salesforce determines Support Mission, it sends the information including Problem Description and Title to the Watson Case Insights process for skill stamping and language translation.
* Watson Case Insights service sends the problem description and title to the language translator to detect the given language and translate title and problem description to english
* Watson Language Translator, detects the source of the language. If it is not English, it searches for a supported language translation model. If it does not find one, it will label the skill value as Non-English-Text and return the information back to Salesforce. No other steps are performed and all Watson processes are not initiated. (Note: This is due to the fact that all our prediction engines have been trained using English language cases)
* If a language translation model has been found it will translate to English and send the translated text to the skill predictor. (Note: If the language is detected as English, it will continue to send to skill predictor without translating)
* The skill predictor will analyze the title and problem description and determine the best skill based on the training material provided by the Support Missions and return this skill value to the Watson Case Insight. (Note: it does not require both)
* The Watson Case Insight controller will then send back the skill for stamping

## Watson Case Insights added to Case

In this section, we will focus on the other case prediction insights which are added after the case has been created in Salesforce. This is done immediately after the above process is completed, so as to not delay the creation of the case. It is however completed prior to the assignment engine, as described in Case Assignment, initiates its process.

<img src="https://media.github.ibm.com/user/19331/files/017a940e-a7b9-11e8-8052-3744babceb12" width="800">

**Figure 2**: Watson Case Insights object case prediction update flow

As described in step 6 above, once the Watson Case Insights returns the predicted skill, it will then proceed to enrich the case further by then sending the title and problem description to the other Watson prediction engines.

* Watson Case Insights sends the title and problem description to the prediction engine controller.
  * The prediction engine controller then sends the title and problem description to all the prediction engines in parallel for processing. Each prediction engine will analyze the case and return their specifics results for
    * Difficulty: How difficult the case is to resolve.
    * TTR: The estimated Time To Resolution
    * Agent Affinity: The number of times the agents of the account have interacted with the customer account.
* The results from all the prediction engines are sent as they are completed to the Watson Case Insights controller.
* The Watson Case Insights controller updates the case as it receives the results from the prediction engines. The results are stored in the Watson Case insights object which is appended to the case.

The results from these prediction engines can serve to enrich the case so the information can be leveraged by other processes such as routing (<a href="/dba-support/DBA-Education/#/DBA-Education/process/case/lifecycle">Case Lifecycle Overview</a>) and assignment (Case Assignment).
