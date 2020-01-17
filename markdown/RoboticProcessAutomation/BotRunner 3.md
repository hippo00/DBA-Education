Date:2019-12-12

## Overview

The Bot Runner is the IBM Robotic Process Automation (RPA) client that runs bots. After a bot is created using Bot Creator and is uploaded to Control Room, the bot can be deployed to Bot Runners to run at scale. Bot Runner contains desktop components and background services to provide capabilities to run bots.

![图片 1](https://media.github.ibm.com/user/228551/files/7af3f000-1cca-11ea-8941-993283df2516)

## Component

**Desktop Components**

1.Bot Player
It is a component invoked by an RPA client when a task is executed. The Bot Player must close after the task completes successfully on the RPA client machine.
![图片 2](https://media.github.ibm.com/user/228551/files/8fd08380-1cca-11ea-8718-eb23709016ed)

2.Reports
Bot Runner provides graphical reports that display the status of tasks and workflows, as well as the ROI over time. You can view the following types of reports:

&nbsp;&nbsp;&nbsp;&nbsp;a.	Task Run: Displays how many times a task has run successfully, and how many times it has failed during the period.
&nbsp;&nbsp;&nbsp;&nbsp;b.	Workflow Run: Displays how many times a workflow has run successfully and how many times it has failed during the period.
&nbsp;&nbsp;&nbsp;&nbsp;c.	Task Timeline: Displays task history in a graphical time line. Select a task and time line to view the number of times a task was run or modified during the period. It also shows whether the task was created or deleted during that time.
&nbsp;&nbsp;&nbsp;&nbsp;d.	Workflow Timeline: Displays workflow history in a graphical time line. You can select a workflow and a time line to see the number of times the workflow was run or modified during the time period. It also tells you whether the workflow was created or deleted during that time.
&nbsp;&nbsp;&nbsp;&nbsp;e.	ROI: Displays how much USD/Dollar Value has been saved by using Automation Anywhere during the time period.
&nbsp;&nbsp;&nbsp;&nbsp;f.	Visual Logs: Graphically displays tasks that have run by providing step-by-step SnapPoints for each action in a task.
![图片 3](https://media.github.ibm.com/user/228551/files/ab3b8e80-1cca-11ea-9288-09bef148e733)

3.Event Watcher
Bot Runner logs all events that occur in the application. Major events, such as a task run, task creation, and changes to task properties are logged. To view this logged data, Bot Runner provides System Logs. The System Logs show all client activities. These reports are very useful for monitoring and troubleshooting.
![图片 4](https://media.github.ibm.com/user/228551/files/c1e1e580-1cca-11ea-92e2-5bc8681158c4)

**Background Services**

1.Auto Login Service
Bots logging into the target machines to perform tasks, using the provided credentials.

2.Client Service
Managing communication between the Enterprise client and Enterprise Control Room.

3.Scheduler Service
Component that runs the bots per the specified schedule on the machine that is local relative to the bot tasks.

## Troubleshooting

#### Data Collection

1.Enable Debugging Logging

&nbsp;&nbsp;&nbsp;&nbsp;a. Open IBM RPA client application
&nbsp;&nbsp;&nbsp;&nbsp;b. Navigate to Tools > Options > Advanced Settings
&nbsp;&nbsp;&nbsp;&nbsp;c. Enable the debug level logs by checking "Enable Debugging Logging"
&nbsp;&nbsp;&nbsp;&nbsp;d. Run the bot to reproduce the symptom and note the time.

2.Export the services logs and application logs

&nbsp;&nbsp;&nbsp;&nbsp;a. Open IBM RPA client application
&nbsp;&nbsp;&nbsp;&nbsp;b. Navigate to Tools > Options > Advanced Settings
&nbsp;&nbsp;&nbsp;&nbsp;c. Click on "Export logs" button
&nbsp;&nbsp;&nbsp;&nbsp;d. Choose target folder and export logs
&nbsp;&nbsp;&nbsp;&nbsp;e. Zip up the generated AAE_Client_Logs_timestamp folder and send in the zip file.

<p>3.To change the Rolling backup of file and file size follow the below steps:</p>

Services Logs:
&nbsp;&nbsp;&nbsp;&nbsp;a. Navigate to Common Folder (Default common folder “C:\Users\Public\Documents\Automation Anywhere Client Files\v11\ConfigFiles\log4net-config.xml”)
&nbsp;&nbsp;&nbsp;&nbsp;b. Edit “log4net-config.xml”.
```
  <appendToFile value="true" />
    <rollingStyle value="Size" />
    <maxSizeRollBackups value="10" />
    <maximumFileSize value="1MB" />
    <staticLogFileName value="true" />
    <datePattern value="yyyyMMdd" />
    <layout type="log4net.Layout. PatternLayout">
      <conversionPattern value="%date{ISO8601} [%2thread] %-5level %logger - %message%newline" />
    </layout>
  </appender>
  ```
  
* maxSizeRollBackups – Number of Files to be generated. By Default, 10 number of files get generated for each log.
* maximumFileSize – File size of each log file, this value can be setup in “MB” depend upon the disk size availability.

Application Logs:
&nbsp;&nbsp;&nbsp;&nbsp;a. Navigate to Application path (Default application path “C:\Users\Administrator\Documents\Automation Anywhere Files”)
&nbsp;&nbsp;&nbsp;&nbsp;b. Edit “log4net-config.xml”.
```
  <appendToFile value="true" />
    <rollingStyle value="Size" />
    <maxSizeRollBackups value="10" />
    <maximumFileSize value="1MB" />
    <staticLogFileName value="true" />
    <datePattern value="yyyyMMdd" />
    <layout type="log4net.Layout. PatternLayout">
      <conversionPattern value="%date{ISO8601} [%2thread] %-5level %logger - %message%newline" />
    </layout>
  </appender>
```

* maxSizeRollBackups – Number of Files to be generated. By Default, 10 number of files get generated for each log.
* maximumFileSize – File size of each log file, this value can be setup in “MB” depend upon the disk size availability.

#### Data Analysis

The RPA client log data includes application logs and service logs. Application logs contain the execution logs of bot player. Service logs present logs of each background service.

* Application Logs Analysis
The major log files are AAPlayer.log and AAMain.log. The AAPlayer logs cover the task execution traces. The AAMain logs maintain the communication details between Control Room and RPA Client.

1.Key words:
**ExecuteTask > Start task execution**

Usage:
The log entry indicates the task execution is started. The subsequent log entry contains the task bot name.
```
Sample: 
2019-11-21 09:07:29,143 [ 6] INFO  AAPlayer - ExecuteTask > Start task execution...
2019-11-21 09:07:29,144 [ 6] INFO  AAPlayer - ExecuteTask > TaskFilePath : C:\Users\Administrator\AppData\Local\Temp\1b1ee251-c713-41c8-9364-91bcad31ecc4\Automation Anywhere\My Tasks\Sample Tasks\Files-Folders.atmx
```
2.Key words:
**TaskExecutor:ExecuteCommands**

Usage:
The log entries with this prefix present the task commands execution behavior.
```
Sample: 
2019-11-21 09:07:29,611 [ 6] INFO  AAPlayer - TaskExecutor:ExecuteCommands > Started Executing Commands
2019-11-21 09:07:29,612 [ 6] INFO  AAPlayer - TaskExecutor:ExecuteCommands > CommandGroup : OpenPrgFile, CommandName : OpenPrgFile, LineNo : 1, Task : C:\Users\Administrator\AppData\Local\Temp\1b1ee251-c713-41c8-9364-91bcad31ecc4\Automation Anywhere\My Tasks\Sample Tasks\Files-Folders.atmx
2019-11-21 09:07:29,969 [ 6] INFO  AAPlayer - TaskExecutor:ExecuteCommands > CommandGroup : Delay, CommandName : Delay, LineNo : 2, Task : C:\Users\Administrator\AppData\Local\Temp\1b1ee251-c713-41c8-9364-91bcad31ecc4\Automation Anywhere\My Tasks\Sample Tasks\Files-Folders.atmx
2019-11-21 09:08:02,139 [ 6] INFO  AAPlayer - TaskExecutor:ExecuterCommands > End Executing Commands
```
3.Key words:
**ExecuteTask > Task finished execution**

Usage:
The log entry indicates the task execution is finished.
```
Sample: 
2019-11-21 09:08:02,143 [ 6] INFO  AAPlayer - ExecuteTask > Task finished execution.
```

* Service Logs Analysis
The AAClientService.log file contains Client Service logs. The AAAutoLogin.log contains Auto Login Service logs. The AASchedulerService.log contains Scheduler Service logs. Refer to individual log file for the different service issue. The Application Event Viewer of Windows platform is also useful for troubleshooting background services issue. The following forum topic is an example.

https://www.ibm.com/mysupport/s/question/0D50z000062kotoCAA/my-client-service-of-rpa-stops-unexpectedly?language=en_US&utm_campaign=answers&utm_medium=email&utm_source=answers-new-question&utm_content=answers-answer-question

#### Reference

1.Bot Runner overview
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architecture-implementation/bot-runner-overview.html

2.Collecting troubleshooting data for IBM Robotic Process Automation (RPA)
https://www.ibm.com/support/pages/collecting-troubleshooting-data-ibm-robotic-process-automation-rpa
