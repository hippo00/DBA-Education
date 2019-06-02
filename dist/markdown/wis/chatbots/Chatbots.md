Delivering a self-service option to our customers through a chatbot interface is one component of a quality support experience for our clients.  In this section, we will focus how the Chatbot aims to provide this critical function and how it also provides a warm handover to support agents if needed.  The Chatbot is the live connection to the client capable of resolving questions on cases, products or transitioning to an IBM Support agent either via case open or live agent session.

## Chatbot Technologies
The Watson in Support Chatbot is a combination of technologies balancing between Salesforce, Watson Assistant, Watson Discovery and the Asset Reuse Manager(A Salesforce Customization for IBM support)
 
![image](https://media.github.ibm.com/user/19331/files/47c4a970-b693-11e8-9b4a-54312c42fb1c)
Figure 1: Watson Chatbot technologies that make up the solution

* Watson Chatbot: Salesforce lighting Component UI handles client interaction
* Watson Discovery: Watson search technology which uses enhanced search techniques and metadata pulled from the Asset Reuse Manager objects in Salesforce
* Watson Assistant: Watson technology providing chat services/dialog
* Salesforce: APEX classes for access to case data and warm handoff to case/live agent

## Chatbot Flow
The Watson in Support Chatbot experience and flow accepts the user from the input, uses previously mentioned Watson technologies to identifies best answers to the customer question and returns the output back to the client with hyperlinks to useful information.

![image](https://media.github.ibm.com/user/19331/files/7108fe80-b693-11e8-94d5-e0af113d5a2c)
Figure 2: Watson Chatbot Experience Flow From Beginning To End

* Step 1: Client begins a “Chat with Expert” session from various Salesforce pages
* Step 2: Watson Assistant receives customer question and matches it to manually created question/answers
* Step 3: if no match to manual questions/answers, identify the best Asset Reuse Manager category to perform the search for an answer to the customer query
* Step 4: Watson Discovery is searched using the ARM category context to identify top set of possible answers
* Step 5: Using the Asset Reuse Manager votes, adjust answer ranking based on content usage(up/down votes).  
The results are then returned to the client.

## Warm Handoff to Support Agents
If the client requests a case open or to chat with a live agent, the Chatbot attempts a warm transfer by providing the context of the question asked by the customer, the information the client was already given and the best data collection document the client was asked to review so proper debug materials are available when the support agent gets involved.

![image](https://media.github.ibm.com/user/19331/files/9e481cc8-b693-11e8-9166-90634f8aead5)
Figure 3: Watson Chatbot warm handoff to case or live agent queue


## More information links:

More information regarding design, on boarding or reporting can be found at the <a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wc3d5a1051396_4ae3_8d58_225a3832d115/page/Welcome%20to%20Chatbot" target="_blank">
Chatbot Wiki</a>
