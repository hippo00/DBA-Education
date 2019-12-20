Date:2019-12-10

## Overview

IBM Business Monitor allows you to monitor your business activities in real-time.
This document provides an overview of IBM Business Monitor capabilities and limitations.

[IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.mon.doc/intro/intro.html):

<i>Business monitoring measures business performance, monitors real-time and completed processes, and reports on business operations. It provides information that helps you identify business problems, correct exceptions, and change processes to improve process efficiency and increase business competitiveness. IBM® Business Monitor is a comprehensive business activity monitoring (BAM) software that provides an up-to-date view of your business performance and also provides predictions so that you can take action before problems occur. Personalized business dashboards process business events and data, and calculate key performance indicators (KPIs) and metrics. IBM Business Monitor can collect events and data from a wide variety of sources.</i>

## Components

The current and last Business Monitor release is version 8.5.7 and is supported for all IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW) releases. 

Use IBM Business Monitor in your business environment to:
* Define actions to take when specified situations occur.
* Capture business-related data from business applications, based on the monitor model that you define and install.
* Extract the measurement variables from the data.
* Transform the variables into metric and KPI values.
* Display the measurement values on your dashboard. For example, you can display instance diagrams in context in any annotated Scalable Vector Graphics (SVG) diagrams. You can define elements to set colors, show and hide, associate metric and KPI values, and more.
* Provide business intelligence insight through dimensional analysis and reporting.
* Identify and notify you of operation failures for inspection and analysis.
* Monitor models describe how events should be processed and how information should be collected for use with dashboards. The IBM Business Monitor development toolkit provides technical users with an environment for creating and testing monitor models.

The IBM Business Monitor server receives and processes events from business applications, and it can subscribe to business events from various sources, including IBM Business Process Manager and other applications in the business environment.

You can use IBM Business Monitor to correlate events from IBM Business Process Manager and a broad range of IBM middleware for end-to-end monitoring, including the following products:
* IBM Operational Decision Manager
* IBM Integration Bus
* WebSphere® Enterprise Service Bus
* WebSphere DataPower® X150
* WebSphere Sensor Events
* WebSphere MQ File Transfer Edition
* Sterling Control Center
* CICS®
* IMS™
* IBM FileNet® P8

You can also monitor third-party environments, such as SAP, by using the IBM Adapters.
The events that the server receives reflect your business activity. Information processed from the events is stored in the Business Monitor database.

The monitor model can also be designed to provide end-to-end monitoring of your business transactions, even if those transactions are made up of discrete processes from different products.

You can configure the IBM Business Monitor server to detect special business situations and manage the resulting actions.

Further details can be found in [Monitoring events from various sources](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.mon.doc/intro/intro_monevents_var.html)

1.[Installing IBM Business Monitor](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.mon.imuc.doc/inst/intro.html)

IBM® Business Monitor can be installed in multiple topologies. You can install all components on a single server, or you can distribute the components across multiple systems. To achieve a highly available environment with failover support, you can install IBM Business Monitor into a clustered environment that uses the clustering mechanism of WebSphere® Application Server or Process Server.

2.[Developing monitor models](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.wid.tkit.doc/mme/developingmonitormodels.html)

The IBM® Business Monitor development environment provides the tools for creating monitor models that can be transformed into executable code for Business Monitor. The Integration Designer includes the Monitor Model editor and the Business Monitor test environment. You can also have a development environment with Rational® Application Developer by installing Integration Designer on your Rational Application Developer system. For information about installing Integration Designer on your Rational Application Developer system, see the "Installing to a unique package group" section of "Test environment".

3.[Administering your monitoring environment](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.mon.admin.doc/admin/intro.html)

After you install IBM® Business Monitor, you can use the WebSphere® Application Server administrative console to perform administrative tasks, based on your login information (access rights) for WebSphere Application Server.
To deploy Business Monitor models, you can use either the WebSphere Application Server administrative console or scripts.

## Troubleshooting
See the [Troubleshooting section in Knowledge Center](https://www.ibm.com/support/knowledgecenter/SS7NQD_8.5.7/com.ibm.wbpm.mon.trbl.doc/trbl/trouble_intro.html)

## Additional References:

* [IBM Business Monitor and WebSphere Business Monitor detailed system requirements](https://www.ibm.com/support/pages/ibm-business-monitor-and-websphere-business-monitor-detailed-system-requirements)
* [Cognos process BIBusTKServerMain failed to start](https://www.ibm.com/mysupport/s/question/0D50z00005pgiFgCAI/cognos-process-bibustkservermain-failed-to-start?language=zh_CN)
* [How to install a Cognos fix on a Monitor server?](https://www.ibm.com/mysupport/s/question/0D50z00005phhOkCAI/how-to-install-a-cognos-fix-on-a-monitor-server?language=en_US)
* [How do you use HTTP instead of HTTPS for the IBM Business Monitor event emitter REST interface?](https://developer.ibm.com/answers/questions/173595/how-do-you-use-http-instead-of-https-for-the-ibm-b.html)
* [Can I turn off PDW tracking data and still be able to get monitor based events?](https://www.ibm.com/mysupport/s/question/0D50z00005phq4B/can-i-turn-off-pdw-tracking-data-and-still-be-able-to-get-monitor-based-events?language=en_US)
* [Is it possible to call a web service, when a KPI alert is triggered?](https://www.ibm.com/mysupport/s/question/0D50z000062kHvsCAE/is-it-possible-to-call-a-web-service-when-a-kpi-alert-is-triggered?language=en_US)
* [How to configure Monitor to receive event from BPM?](https://www.ibm.com/mysupport/s/question/0D50z000062kTtYCAU/how-to-configure-monitor-to-receive-event-from-bpm?language=en_US)
* [CWMMV0801E: The size of this context is 53,119 which is larger than the maximum size of 30,720](https://developer.ibm.com/answers/questions/280525/cwmmv0801e-the-size-of-this-context-is-53119-which.html)
* [How to delete failed events for a Monitor model?](https://developer.ibm.com/answers/questions/240643/how-to-delete-failed-events-for-a-monitor-model.html)
* [How to generate a monitor model and integrate with a PS server?](https://www.ibm.com/mysupport/s/question/0D50z000062kHzkCAE/how-to-generate-a-monitor-model-and-integrate-with-a-ps-server?language=en_US#answer-172595)
* [How can I install and uninstall a monitor model version via wsadmin scripts?](https://developer.ibm.com/answers/questions/198579/how-can-i-install-and-uninstall-a-monitor-model-ve.html)
* [How to install Monitor 8.5.6 with Oracle 12c pluggable database?](https://developer.ibm.com/answers/questions/183252/how-to-install-monitor-856-with-oracle-12c-pluggab.html)
* [Monitor v8.5.6 installation on RHEL 6.6 failed](https://www.ibm.com/mysupport/s/question/0D50z00005pgkIECAY/monitor-v856-installation-on-rhel-66-failed?language=en_US)
* [What ports on BPM needs to be open when using Dynamic Event Framework (DEF) on Business Monitor?](https://www.ibm.com/mysupport/s/question/0D50z00005phlAvCAI/what-ports-on-bpm-needs-to-be-open-when-using-dynamic-event-framework-def-on-business-monitor?language=en_US)

Most of the articles were migrated to the new Support Forum and unfortunately are not very readable. You can use this link for better reading:
https://pages.github.ibm.com/klaus-ulrich/dwanswers/

**Run a Business Monitor Test Environment on docker**
This setup can be used on your local machine, on Fyre or on Castle.
https://github.ibm.com/klaus-ulrich/monitor/wiki

