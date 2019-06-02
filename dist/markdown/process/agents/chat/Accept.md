
# Accept and Take a Chat

Clients can open the chat dialog from several pages on the Support Community; Main Support Page, Product Page, Case Management Page, Case Open Page, and Case Detail Page.

All chats will first go to the IBM Chatbot expect when started from the Case Detail Page. Chats started from the Case Detail Page will first get routed to the Case Owner if they are on line. If the owner is not online it will send to another member of the Chat Mission Team if one is set up. Otherwise it will go the the next available agent for the Support Mission.

**Classic process is include after Lightning information**

## When the Chat Arrives

If a chat request is routed to you, the Omni-Channel bar turns dark grey with a red indicator. Additionally you will hear an acoustic signal if your speakers are turned on. 

**Please note:** if you are not working in the Salesforce application and your speakers are muted you may miss an incoming chat request routed to you.

**New Chat Warning**

![image](https://media.github.ibm.com/user/79767/files/42133080-691e-11e9-8b12-2f7f320b0bd7)

**New Incoming Chat**

 1.Click the Omni-Channel tab
 
 2.A popup shows details about the incoming chat. Note: You have 40 seconds to accept  (see [Chat Timeout](https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/process/agents/chat/timeout)) 
 
 3.Click the Check mark to Accept the Chat

![image](https://media.github.ibm.com/user/79767/files/874e7400-6a7e-11e9-96cb-1e303799878f)


## View conversation with Watson Chatbot
**Overview of a Single Chat**

The implementation of Single Chat will create an interface which will start a chat interaction with the Watson Chatbot, a cognitive automated support assistant, which also has the ability to seamlessly pass the chat session over to a support agent in the same experience.

**Upon Acceptance of a chat transferred from Watson Chatbot**
Once a chat is accepted, you will notice that the transcript of the chat with Watson Chatbot will appear on the right of the screen, next to the current transcript.

![image](https://media.github.ibm.com/user/146797/files/be138580-3535-11e9-93b3-f7785d2bc3e0)

## Chat Started from Case Detail Page

When the Chat is started from the Case Detail Page, the agent will not see a Watson Chatbot conversation, however the Case Details will appear in the Related Sections.

![image](https://media.github.ibm.com/user/79767/files/2ccd8000-6f76-11e9-8832-a37ea48a9b7b)

# Classic

### When the chat arrives
If a chat request is routed to you, the Omni-Channel bar turns red. Additionally you will hear an acoustic signal if your speakers are turned on. 
Please note: if you are not working in the Salesforce application and your speakers are muted you may miss an incoming chat request routed to you.

![image](https://media.github.ibm.com/user/148692/files/6f85c8b6-bb40-11e8-8d0b-3f732eff2cf7)

When clicking the Omni-Channel bar, a popup shows details about the incoming chat. 
Customers can open the chat dialog either on the general product page or out of the case page ("Case Owner Chat Button").
Based on where the chat is initiated from a different pop up will be shown:

![image](https://media.github.ibm.com/user/148692/files/31ddc9d4-bd8c-11e8-8181-1864a8fd30a1)

If the chat was initiated from the case details page, the chat will be routed first to the owner of this case if available. Chat requests initiated from the general product page will be routed as defined in the Omni-Channel configuration for the Support Mission.

When you move your cursor over the "Accept" link, you can see a chat preview window. Here some more details are shown. If the chat was transferred by another agent, you would see the previous conversation between him/her and customer:

![image](https://media.github.ibm.com/user/148692/files/8f0bc786-bc2a-11e8-83bb-d02b7d85ad92)

### View conversation with Watson Chatbot
**Overview of a Single Chat**

The implementation of Single Chat will create an interface which will start a chat interaction with the Watson Chatbot, a cognitive automated support assistant, which also has the ability to seamlessly pass the chat session over to a support agent in the same experience.

This documentation will inform agents on how the new chat configuration will impact them in the Salesforce console.


**CLASSIC: Upon Acceptance of a chat transferred from Watson Chatbot**
* Agents must identify whether the “Watson Chatbot Transcript” field is populated. If this field is populated, click on the record to view the customer conversation with Watson.

![image](https://media.github.ibm.com/user/146797/files/7987ea00-3535-11e9-9eec-853c8e86fc25)
![image](https://media.github.ibm.com/user/146797/files/a805c500-3535-11e9-80c3-ab6d716efac2)



### Start conversation with customer
Click on the "Accept" link to begin the conversation. A separate tab will be opened in the Console.
The chat dialog will be displayed on the upper left corner. An initial greeting will be posted to customer automatically.

![image](https://media.github.ibm.com/user/148692/files/b0c01ff2-bc2b-11e8-9e5c-9ec96c5f1448)


