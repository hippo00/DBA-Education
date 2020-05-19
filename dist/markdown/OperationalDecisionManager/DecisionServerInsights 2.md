Date:2019-12-27

## Introduction

Decision Server Insights is a scalable event processing system with rule-based temporal reasoning and analytics capabilities. It is built on top of WLP and WXS.

Events happen to real-world objects such as customers, patients, or trains, and these objects are modeled as entities. A Decision Server Insights solution can update the state of these entities as a result of an event and alert you to possible inefficiencies, opportunities, and threats in the real-world.

Decision Server Insights uses a four-step approach to help your business decide what actions to take at the right time:
* Sense what is happening.
* Build the context of your situation.
* Decide what to do when something happens that affects the situation.
* Act on the changed situation by doing something.

## Starting point

* Product tutorial
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.itoa.tutorial/topics/itoa_tut_intro.html
* More in depth training
ZB-403G Developing Solutions with Decision Server Insights:  https://yourlearning.ibm.com/#activity/ITS-ZB403G

## Working on Cases

DSI cases can be in difference areas, both KC and dwAnswers forum contain answers to some known issues and questions.
* if it can be reproduced either in Insight Designer or the sample server, you can ask for the user for the projects zip & solution archive file (.esa file) and reproduce in a Castle or BD machine.
* If it is something to do with the initial DSI cluster not working, it is probably due to the server configuration.  The detail instruction on server configuration is in KC.
      https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.itoa.config/topics/con_config_production_topol.html
      
Some common issues might occur:

1.Customer is migrating from 892 and their server configure is not using the 8.10 server template, as ODM 8.10 uses  a version of WXS, and its configuration element in WLP is changed, the customer should regenerate the servers using the template.

2.The WXS catalog server quorum is not configured properly. You can only set enableQuorum= true if there are at least 3 catalog servers.
* Grid not working after restart, please make sure the customer is following the recommended sequence and commands to start and stop the servers.  If DSI cluster is configured to use a database as the back store, also make sure either they run dataLoadManager properly so the grid is in ONLINE state.
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.itoa.admin/topics/tsk_restore_persistent_data.html
* Sometimes the question is more on WLP or WXS configuration, you should create a skill case to WAS team for help.
* If it is something more complex, you should open a collaboration item in SF, before that, please make sure you gathered the must gather info according to the below two guides.
  - DSI mustgathers for L2: 
 https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf0025e791108_45e3_87df_9a521822f4db/page/DSI%20must-gathers
  - DSI problem Specific must gathers for L2: 
 https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf0025e791108_45e3_87df_9a521822f4db/page/DSI%20problem%20specific%20must-gathers

