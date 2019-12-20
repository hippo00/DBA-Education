Date：2019-12-12

## Overview 

Bot Creator is one of the components in IBM Robotic Process Automation (RPA) with the Automation Anywhere product. The othehaor two components are Control Room (CR) and Bot Runner. Bot Creator is a desktop application that used to create bots, upload, and download bots to and from the Control Room.  Bot Creator contains user interface components and background services. Developers use Bot Creator to create bots. Once created, bots are uploaded to the Control Room for execution. Bots also can be downloaded from Control Room for further processing or modification. 

There are three types of bots that can be created to automate processes, namely Task Bot, Meta Bot, and IQ Bot. Task Bot is the most used bots for automation. Meta Bots are highly reusable, create it once, and use it everywhere bots. Meta Bots are the building blocks that perform visual captures that include GUI automation which is used for front end automation. It is designed in such a way that anytime if there is any change or update in the application, then it can be done by making minimal edits to the bots. IQ Bots provide the option to use highly advanced cognitive technology for automation. 

## Prerequisites 

In order to use Bot Creator, you should you have some understanding of Control Room and how RPA clients connect to the Control Room. Please refer to the following links for more details: 

https://www.ibm.com/support/knowledgecenter/de/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/overview_rpa.html 
https://www.ibm.com/support/knowledgecenter/de/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/getting_started_rpa_controlroom.html 

**Useful Bot Creator reference** 

The following lists all the resources that will help you understand the RPA client Bot Creator: 

1.Getting Started with Automation Anywhere  
https://support.automationanywhere.com/hc/en-us/sections/206558028-Getting-Started-with-AA 

2.Installing RPA client 
https://www.ibm.com/support/knowledgecenter/de/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/install_rpa_client.html 

3.Uninstalling RPA client 
https://www.ibm.com/support/knowledgecenter/de/SSMGNY_11.0.0/com.ibm.wbpm.rpa.main.doc/topics/uninstall_rpa.html 

4.Working with Automation Tasks 
https://support.automationanywhere.com/hc/en-us/sections/206558148-Working-with-Automation-Tasks 

5.Commands that can be used in Automation Tasks 
https://support.automationanywhere.com/hc/en-us/sections/206558088-Commands 

6.Types of variables and how they work in Automation Tasks 
https://support.automationanywhere.com/hc/en-us/sections/206558128-Using-Variables 

7.Customizing Automation Client 
https://support.automationanywhere.com/hc/en-us/sections/206558108-Customizing-an-Automation-Client 

8.Special Features 
https://support.automationanywhere.com/hc/en-us/sections/206558048-Using-Special-Features 

## Troubleshooting 

Listed below are some common Bot Creator issues and how to resolve them: 

1.Client login errors.  
- The following link has several recommendations to address client login errors
https://support.automationanywhere.com/hc/en-us/articles/231697387-Client-Login-Errors 

2.Bot creator user is not able to login to CR from a new client machine 
- The user is already registered to log in from a different machine. In order to register the user to login from the new machine, you can delete and recreate the user in CR. Or remove the user bot creator license from this user and reapply it. 

3."Your session has expired. Login into your control room to renew your session"  
- Bot creators will disconnect from client if there is no activity in the client for over 8 hours. 

4.Nothing happens when trying to open the Repository 
- Check if the RPA client is supported for the existing Control Room version – refer to this link for compatibility matrix -
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/release-notes/cr-client-compatibity-matrix.html 

5.Unable to log in to Bot Creator  
- On the client machine, check to make sure that Automation Anywhere Enterprise Client Service is running 

6.Scheduling Tasks to run 
- https://support.automationanywhere.com/hc/en-us/articles/230202468-Scheduling-Tasks-to-Run 

## Data Collection 

When troubleshooting issues related to bot creators, the following details would help: 

1.RPA client version - (C:\ProgramData\IBM\RPA\client-version.txt) 
2.Control Room version - C:\ProgramData\IBM\RPA\server-version.txt 
3.Errors observed when running the bots  
4.A copy of the problem task file (.atmx file) 
5.Screenshot of the error seen on the screen 
6.Client request logs – the logs are located at <Client_App_Path>\LogFiles 
7.Windows Event Viewer logs 
8.Audit Log details from Control Room 
