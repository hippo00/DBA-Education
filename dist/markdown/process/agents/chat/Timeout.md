
# Chat Timeout

When a chat is routed to an agent the request will stay there for 40 seconds. 

   - If it is not accepted within 40 seconds, the request will be routed to another agent who is available for Live Agent Chat in Omni-Channel. 
   - If no other agent is available the chat will be ended and the client will be told "No agents are available."
   - If more then one agent is logged and everyone allows it to time out  the client will be told "No agents are available"
   - If the agent logs out of Omni-Channel while clients are waiting the client will be told "No agents are available"

Once a chat as been accepted and the agent is engaged the client must respond or update the chat within 15 minutes to keep the Chat active. Whether the next action belongs to the Agent or the client, so be sure to update the client within 15 minutes if the action belongs to you.

**Classic information is include after Lightning information**

## Chat _Request_ Timeout on the Agent Console

When the Chat Request is routed to the Agent they will see a timer counting how long the request has been assigned to them.  

![image](https://media.github.ibm.com/user/79767/files/3cb97580-6f1e-11e9-9f96-eb46a231589c)


If the Chat request is not accepted within the 40 seconds the client will either; be "bounced" to the next available agent, or told "No agents are available"


## Chat _Request_ Timeout on the Client Community

While the client waits for someone to accept the Chat they will be told "An agent is on the way." If there is more the one client waiting they will be advised of what position in line they are.

When a Chat is sent to an Agent and is waiting for the Agent to accept they will see:

![image](https://media.github.ibm.com/user/79767/files/2f998800-6f18-11e9-8a0b-d50077e77ad5) 

When the client is placed in Queue, they will be told at what position they are.

![image](https://media.github.ibm.com/user/79767/files/8eabcc80-6f19-11e9-831a-a19b5f2e5680)

Note: When no agent Accepts the chat or allows them to time out the client will be told "No agents are available" and to come back later.

![image](https://media.github.ibm.com/user/79767/files/9e76e100-6f18-11e9-8e5c-9d1fcf982862)


## Chat _Conversation_ Timeout on the Agent Console

During an active Live Chat conversation when the critical wait alert time is reached (agent does not respond within less than 2min) the tab turns to red:

![image](https://media.github.ibm.com/user/79767/files/30ade080-7010-11e9-91b2-221f51143a4c)


Chat will not timeout waiting for an agent to respond.

## Chat _conversation_ timeout on Customer Community

Once a chat has been accepted the client has 15 minutes to respond to an agent update.  If they stop responding to a conversation the chat will end on the Console with the update that the Chat was ended by the client. 

Reminder: 

   - If the next action belongs to you, be sure to update the client within 15 minutes to ensure the chat does not time out.
   - If you are waiting for the client to respond, best practice it to check in with the client to see if they still need assistance.  Recommended to check 3 or 4 times, at least 2 min apart.

### Chat conversation timeout warning in the community

If the client has not updated the chat in more the 14 min they will be asked if they are "Still There" and be asked to respond along with a count down warning.

![image](https://media.github.ibm.com/user/79767/files/ae92be80-6f20-11e9-9bee-831c1882b4a6)

The chat will time out and end after 15 minutes if customer does not answer.

![image](https://media.github.ibm.com/user/79767/files/bb1c1480-6f2a-11e9-9713-634ee0876e34)


## Classic

### Chat request timeout
When a chat is routed to an agent the request will stay there for 20 seconds. If it was not accepted within that time, the request will be routed to another agent who is available for Live Agent Chat in Omni-Channel. If no other agent is available the chat will be ended. 

**Please note:** this is not true for chat requests initiated from within a case. There will be no timeout, at least before 5min waiting time.

## Chat conversation timeout on customer side

The client will see a warning after 14 minutes:
![image](https://media.github.ibm.com/user/148692/files/f7e2fc2c-c565-11e8-90e4-4d64070010b7)

The chat will time out and end after 15 minutes if customer does not answer.

## Chat conversation timeout on agent side

When the critical wait alert time is reached (agent does not respond within less than 2min) the tab turns to red:
![image](https://media.github.ibm.com/user/148692/files/f4264ae0-c564-11e8-9953-7d37ab302b68)

A chat won't time out on agent side (at least not before 7:30min).


