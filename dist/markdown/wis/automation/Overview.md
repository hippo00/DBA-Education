The ultimate goal for the Watson in Support Automation initiative is to help IBM Support Agents automate the repetitive tasks and handling of repetitive customer issues in order to give Support Agents more time to work on the difficult customer issues. This goal also benefits IBM customers by providing improved efficiency when it comes to handling issues they submit to IBM Support.

With this goal in mind, the Watson in Support team is focused on customer related automation. For example, when a customer sends an email to IBM Support with an issue about his or her account being locked. Or as another example, a customer interacts with our Chatbot and asks about increasing the software license count. 

The architecture to handle automations triggered has been set up from many different types of channels.
* Email
* Chatbots
* Web cases created through the IBM Community Portal
* IBM Service Console widgets
* Mobile apps

A central Bot Registry acts as a catalog and router for all the different automations (aka Bots) supported. When the Bot Registry is called through any of the supported channels, it will analyze the input parameters (customer info, support mission, product) and figure out if there are specific Bots to execute. If any suitable Bots are identified the Bot Registry will route the request to the appropriate set of Bots. Each of the individual Bots will then execute their automation processes which can be many different types of actions or processes.
* Integration with APIs of backend systems or databases
* Integration with Cloud or Watson services
* Robotic Process Automation (RPA), basically simulating human actions for applications
* Integration with Salesforce API and objects

![image](https://media.github.ibm.com/user/10199/files/4158a162-f7ad-11e8-837b-0dafb7dff0b6)
