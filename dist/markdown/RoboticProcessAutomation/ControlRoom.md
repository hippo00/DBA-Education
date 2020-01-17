Date:2020-01-16

## Overview

This module teaches the basics about the architecture and features of the Control Room.

The Control Room is the central server component to which the RPA clients (bot runners and creators) connect. It consists of several processes that run as Windows services:
* Bot Insight EDC (Elastic Data Cloud)
* Bot Insight Elastic Search
* Bot Insight Query Engine
* Bot Insight Scheduler
* Bot Insight Service
* Bot Insight Service Discovery
* Bot Insight Visualization
* Control Room Caching
* Control Room Messaging
* Control Room Reverse Proxy
* Control Room Service
* Elastic Search Service
* Licensing

See 
* Enterprise Control Room overview
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architecture-implementation/control-room-overview.html
* Verifying Automation Anywhere Windows services
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/install/aa-windows-services.html
* Server and Client core components
https://ibm.ent.box.com/file/346292873550

In the following are listed major logical components of the Control Room.

#### Web UI

The major component is the browser-based user interface. Administrators can manage and monitor bots, users and licenses.

See  
* Using Enterprise Control Room
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/getting-started/using-control-room.html
* Training: Bot Deployment
https://ibm.ent.box.com/file/346299942248
* Training: Workload Management
 https://ibm.ent.box.com/file/346285390460
* Training: Credential Vault – Control Room
https://ibm.ent.box.com/file/346292924778 

#### Bot Insight

Bot Insight is the business intelligence component of RPA for creating reports and dashboards for bot execution. It is also used internally for the built-in monitoring dashboards of the Control Room UI. It is a whole sub-system that consists of a series of services and implemented with Zoomdata. 
Bot Insight uses an own database. PostgreSQL Server and Microsoft SQL Server database are possible options.
Customers need to buy an additional license for using the business intelligence component (apart from the internal dashboards).

See
* Using Bot Insight
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/bot-insight/user/bot-insight-overview.html
* Training: Bot Insight
https://ibm.ent.box.com/file/346303391668
* Zoomdata Product Overview
https://documentation.logianalytics.com/zoomdataltsactive/topics/overview/launch-zoomdata-overview.html

#### APIs

There are several public REST APIs available for the Control Room. A client needs to authenticate first with the Authentication API. The received authorization token needs to be used for calling the other APIs.

See
* Authentication API overview
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/control-room-api/api-authentication.html
* Enterprise Control Room APIs
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/control-room-api/control-room-apis.html


## Troubleshooting

#### Data Collection

Each sub component writes an own log file. Most messages are logged in the common WebCR.log, too.
The runtime log files are Located in:
% ProgramData%\AutomationAnywhere\Logs

See
* Logging in AA Client and Server
https://ibm.ent.box.com/file/346286355001

#### Data Analysis

Since AAE 11.3.4 there is a tool available for checking the Control Room’s health:
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/troubleshooting/control-room-diagnostic-utility.html

**Common Errors**

Error: Control Room Dashboard not showing anything
Solution: 
This type of issue can occur if some services are not started or started in the wrong order. This article describes how to recycle the Control Room services in the right order:
https://apeople.automationanywhere.com/s/article/Sequence-to-start-recycle-AAE-Version-11-x-Control-Room-BotInsight-services

Error: While Launching Control Room In The Browser It Shows HTTP Error 500
Solution:
There are various possible causes, why the Control Room web page does not launch. The following article explains possible solutions:
https://apeople.automationanywhere.com/s/article/While-Launching-Control-Room-In-The-Browser-It-Shows-HTTP-Error-500-V11-X

Known troubleshooting issues and solutions related to the Control Room are documented here:
https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/troubleshooting/troubleshoot-intro-control-room.html
