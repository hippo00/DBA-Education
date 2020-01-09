Date:2019-12-13

## Overview

This module teaches the basic version control features of the Control Room and how to integrate the Robotic Process Automation (RPA) Control Room with an external Version Control System.

**Internal version control of the Control Room**

By default the Control Room provides a simple central repository for development assets like bots, meta bots, scrips, documents and so forth. 

The development assets are stored in a default folder structure:
* My Docs
* My Exes
* My MetaBots
* My Pushed Tasks
* My Reports
* My Scripts
* My Tasks
* My Workflow

Additional folders or sub folders can be created.
The folders and the assets are stored locally on the RPA client in the directory: APPLICATION_PATH\Automation Anywhere 
Per default this is:
C:\Users\<USER>\Documents\Automation Anywhere Files\Automation Anywhere

On the server, data is stored in the directory:
C:\ProgramData\AutomationAnywhere\Server Files\Default\Automation Anywhere

Only the latest version of a file is stored on the server.

1.Uploading and Downloading Tasks to the Server
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/getting-started-with-aa/uploading-and-downloading-tasks-to-the-server.html
2.Comparing Files that Reside on the Client and Server
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/getting-started-with-aa/comparing-files-that-reside-on-the-client-and-server.html

**External Version Control System**

The Control Room can optionally be integrated with an external Version Control Systems (VCS). 
With an external VCS you gain additional features like a revision history, comparing/rolling back revisions and (exclusive) locking of files.

Most commonly used with RPA is Subversion (SVN). The suggested Subversion server implementation is VisualSVN Server. The Control Room uses the SVNKit to connect to an SVN server.

1.Supported VCS
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architecture-implementation/deployment-planning/requirements-version-control.html
2.Impact of enabling and disabling version control settings
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/administration/settings/bots-configure-version-control.html#BotsConfigVerCont__Impact
3.Enabling Version Control in Automation Anywhere
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/using-special-features/enabling-version-control-in-automation-anywhere.html
4.VisualSVN Server – Installation and configuration
https://www.visualsvn.com/server/getting-started/
5.Understanding VisualSVN Server Authentication options
https://www.visualsvn.com/support/topic/00039/
6.AAE - Integration With Version Control System - FAQs And Best Practices
https://support.automationanywhere.com/hc/en-us/articles/115001365447-AAE-Integration-with-Version-Control-System-FAQs-and-Best-Practices

## Troubleshooting

Potential problem areas:
* Configuration of external VCS
  - Network connectivity problems (e.g. firewall)
  - Authentication errors
  
#### Data Collection

Log output for Version Control is written to the file: 
WebCR_ServerRepository.log

Located in: 
% ProgramData%\AutomationAnywhere\Logs

Activate DEBUG logs for Version Control by modifying the log configuration:
C:\Program Files\Automation Anywhere\Enterprise\config\log4j2.xml

Change the following two loggers from (add level="DEBUG"):
```
        <logger name="com.automationanywhere.serverrepository" additivity="false">
            <AppenderRef ref="WebCR_ServerRepository"/>
        </logger>      
        <logger name="com.automationanywhere.alm" additivity="false">
            <AppenderRef ref="WebCR_ServerRepository"/>
        </logger>
```
To:
```
        <logger name="com.automationanywhere.serverrepository" level="DEBUG" additivity="false">
            <AppenderRef ref="WebCR_ServerRepository"/>
        </logger>
        <logger name="com.automationanywhere.alm" level="DEBUG" additivity="false">
            <AppenderRef ref="WebCR_ServerRepository"/>
        </logger>
```

#### Data Analysis

Authentication failure at login
```
2019-Jul-15 Mon 13:52:57.568 ERROR - com.automationanywhere.common.util.filter.ExceptionFilter - handleDetailedException(ExceptionFilter.java:104) -
      Exception handler com.automationanywhere.common.validation.DetailedException: Unable to connect to SVN repository
	at com.automationanywhere.common.exceptions.ExceptionHelper.buildDetailedException(ExceptionHelper.java:73) ~[kernel.jar:?]
	at com.automationanywhere.serverrepository.message.ServerRepositoryExceptionHelper.buildDetailedException(ServerRepositoryExceptionHelper.java:64) ~[kernel.jar:?]
	at com.automationanywhere.serverrepository.core.service.storage.impl.svn.AbstractSVNAdapterImpl.testSVNConnection(AbstractSVNAdapterImpl.java:92) ~[kernel.jar:?]
	at com.automationanywhere.serverrepository.core.service.impl.VCSSyncServiceImpl.testVCSConnection(VCSSyncServiceImpl.java:115) ~[kernel.jar:?]
...
Caused by: java.lang.IllegalArgumentException: svn: E170001: Negotiate authentication failed: 'No valid credentials provided'
	at com.automationanywhere.serverrepository.message.ServerRepositoryExceptionHelper.buildDetailedException(ServerRepositoryExceptionHelper.java:65) ~[kernel.jar:?]
	... 69 more
```

Solution:

Allow V11 Control Room To Use VisualSVN With Windows Authentication
https://apeople.automationanywhere.com/s/article/Allow-V11-Control-Room-to-Use-VisualSVN-With-Windows-Authentication

