# Frequently Asked Questions about Case Routing and Ranking

## Watson Skill Suggestion

* [How to get started with WATSON Skill Suggestion](/dba-support/DBA-Education/#/DBA-Education/wis/wtwon/Faq#getstarted)
* [Enable WATSON Skill Suggestion](/dba-support/DBA-Education/#/DBA-Education/wis/wtwon/Faq#enable)
* [How to train WATSON Skill Suggestion](/dba-support/DBA-Education/#/DBA-Education/wis/wtwon/Faq#train)
* [Creating a new skill depends on the scenario](/dba-support/DBA-Education/#/DBA-Education/wis/wtwon/Faq#train)

---

### <a id="getstarted" name="getstarted"></a>How to get started with WATSON Skill Suggestion?
Contact Persons: Christian Bernecker, Michael Core and Tracy Canada

#### When you start from RETAIN
1. We need a list of  all your COMPID'S so that we can grep the data from our data warehouse.

2. You have to define the skills (areas of knowledge) for your product that you want to use. For example: skill "Performance" covers all incoming cases that are related to performance problems like CPU, Heap, GC, JVM, Starvation, Hang Threads, etc.

3. You have to provide us a way how we pre-classify the data for you to train WATSON. That can happen with unique keywords, the RETAIN Keyword2 field or queue names.
 
#### When you start from Salesforce

1. Check the amount of available cases

2. You have to define the skills (areas of knowledge) for your product that you want to use. For example: skill "Performance" covers all incoming cases that are related to performance problems like CPU, Heap, GC, JVM, Starvation, Hang Threads, etc.

3. Divide cases by skills. You should have at least a minimum of 150 cases per skill. If not go to RETAIN section above. 

4. In case you team has already defined skills per cases we can use them to train WATSON otherwise let you team flag historical cases or provide us a list of unique keywords so taht we can preclassify the data for you.   

 
### <a id="enable" name="enable"></a>Enable WATSON Skill Suggestion

Enable WATSON Skill Suggestion in your Support Mission. IMPORTANT: Enable both checkboxes otherwise the system will not work. When you have enabled the "Review Mode" (right box) the system will not route the case to the skill queues. That mode is to verify if WATSON works in expected manner. If you disable these field WATSON will start to route the cases.
 

### <a id="train" name="train"></a>How to train WATSON Skill Suggestion?

This is a very easy task but very important so that WATSON can learn continuously from your feedback. 

When WATSON is enabled you will see the following 2 fields:

    Watson Skill Suggestion ()
    Skill (only filled when "Review" Mode is disabled)

The Skill Filed is important. Because in case that WATSON is not correct the SME's have to change the skill to the correct skill. Our system observes this field and checks if they are different. In case they are different WATSON will add these new case to his model for retraining. If the skill is correct the SME has nothing to do and WATSON will add these case automatically after a certain time. 

 ![image](https://media.github.ibm.com/user/10199/files/d728e18c-fa34-11e8-9644-7b1bbbcff259)

 
### <a id="depends" name="depends"></a>Creating a new skill depends on the scenario

1. If you want create a new skill that refers to a new component. Then you only have to create this skill on SF side and flag the new incoming cases with it. WATSON will recognize that there is a new skill and add them to the corpus. But be aware that the first case will be miss-routed because of to less data. The routing will get better over time.

2. You want to split off an existing Skill.  If you recognize that Skill AA inside Skill A will become a hot topic and your team decides that an own skill would be helpful for a better distribution. Create the new skill "Skill AA" and go back to the historical data flagged as "Skill A" and reflag the cases that belongs to the new skill "Skill AA". So WATSON will retrain the system. (Actually not implemented but we working together with SF on a Solution. So inform  us to ensure WATSON is aware of your skills)

3. Delete a skill    -> inform us there is currently no automatic solution

4. Rename a skill -> inform us there is currently no automatic solution
