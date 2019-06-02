## Question Assistant
The concept beghind **Question Assistent** (QQI) is very simple: The richer the question, the better the change at being able to answer it:
![image](https://media.github.ibm.com/user/19331/files/b3201014-b699-11e8-8d13-8ed99f74da21)


## Implementation

- Identified 8 generic key concepts that a problem description needs to contain
- Same concepts across all products
- Using trained annotators to parse problem description and look for these concepts
![image](https://media.github.ibm.com/user/17980/files/8313b99e-b65c-11e8-8db8-50a90498f663)
- Question Assistant is a headless service, there is No UI itself, it comes as a RESTful service
- Anything calling the Question Assistant service is a client of the service

## Salesforce and Question Assistant**

- Question Assistant feedback UI hooked to SF Case creation UI
- Question Assistant being used to tease a better problem description out of the customer
- Metrics
- You can not measure direct business value
- Logic says that any down stream tooling will benefit from the richer problem description

![image](https://media.github.ibm.com/user/17980/files/f972cd50-b65c-11e8-8cf5-ddd2ec897968)

