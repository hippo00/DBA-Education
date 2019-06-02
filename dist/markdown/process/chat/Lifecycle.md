The Chat Lifecycle can be seen in different stages

![image](https://media.github.ibm.com/user/70336/files/c6c40ec8-bb66-11e8-9590-dcb2c50f0d8d)

### Incoming
This is the short stage of the Chat after having been initiated by the Customer.
The Chat will automatically be routed to the next available Agent. If there is not Agent available for Chat the Customer is not able to open a Chat getting the message that there is no available Agent.

### Accept
In this stage the Agent accepts the incoming Chat and works with the Customer 

### Decline
This stage describes what happens when the Agent declines the Chat
There are different reasons for declining a Chat 
* Backlog full
* Skill Set Mismatch
In that Case the Chat is automatically routed to the next available Agent

### Problem Determination
This stage describes the phase when during the discussion in the Chat the Agent is going to find out more details about the problem of the Customer 

### Transfer
A Chat can be transferred to another Agent. 
A possible scenario for this is:
* Customer opens a Chat for an existing Case but not from within the Case
* Agent who accepts the Chat is not the Case owner
* Case owner is available - so the Chat should be transferred to the Case owner
A transfer can also be reasonable when the Agent that accepts the Chat is not SME for the 
topic the Customer is talking about

### Problem Resolution
This stage is reached whenever a solution for the problem discussed in the Chat is found.

### Open Case
To document the problem and solution provided in a chat and to further follow up with the Customer a Support Case can be directly opened by the Agent from out of the Chat.

### Close
A Chat can be actively closed by either the Agent or by the Customer.
The chat should only be actively closed by the Agent if the Customer has agreed to that and has no further questions.

### Timeout
After a specified of time when no further update is done by the party in charge (either the Agent or the Customer) a Chat will get a timeout and get inactive.
A chat can timeout due to different reasons
* No Agent is accepting the Chat (that should not happen at all)
* Client is no longer responding (takes about 5 minutes to timeout)
* Agent is not responding 
