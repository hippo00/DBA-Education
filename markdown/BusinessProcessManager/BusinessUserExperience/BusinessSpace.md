Date:2019-12-10

## Overview

Business Space provides a browser-based graphical user interface that lets users interact with content from products in the IBM® Business Process Manager portfolio. It provides a customizable and collaborative environment for monitoring, reviewing, and administering common business processes, such as human task flows, mediations and modeling.

Business Space includes the concept of spaces, templates, pages and widgets. A space is a collection of pages based on a template, and a page is a canvas that contains a number of widgets. Widgets are the pluggable user interface components that you use to define the functionality of your business spaces. IBM Business Process Manager ships with a number of built-in templates and widgets.

Business Space provides administrative capabilities to control and manage the applications installed on the system using these capabilities.

## Components

**Space**
Most users can [open dashboard spaces](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.widget.ic.doc/topics/bs_open.html) using a web browser. If you are a programmer-level user, you can also open spaces using IBM® Integration Designer.

**Template**
The template combines IBM® Business Process Manager widgets and Business Monitor widgets with standard Business Space widgets to create an ideal interface for participating, monitoring and reporting on specific business situations.

When you create a space using the template, you are prompted to enter a name for it. The space that is created contains seven named pages, each page with one or more widgets in place that are ready to be configured. The title of each page created by the template indicates the type of information you find there. 

For example, the Operational page contains the Diagrams, KPIs, and Alerts widgets, which are ideal for displaying business operations information. The Diagrams widget might display a business process flow, the KPIs widget might display real-time performance data, and the Alerts widget might display notifications that warn you when certain performance expectations are off target. Each page is described in the "Page information" section. 

You can customize the space by changing the page names, adding widgets to pages, removing existing widgets, and by adding new pages. 

To create a space using the [Business Monitoring template](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.widget.ic.doc/topics/bs_template.html), complete the following steps:

**Procedure**

1.	Log in to the Business space and then click **Actions > Create Space**. The Create Space window opens.
2.	In the **Space name** field, type a name for the space, such as My Business Monitoring Space, and then add a brief description in the **Space description** field. 
3.	Select **Create a new space using a template**, choose **Business Monitoring**, and then click **Save**.

**Results**

You are now ready to customize the widgets on each page.

**Widget**

Widgets are the pluggable user interface components that you use to define the functionality of your spaces. Widgets communicate with other widgets by publishing and handling events.

By itself, a widget typically has limited or specific capabilities. However, you can combine widgets to interact with each other to perform related tasks. Combined widgets are called a mashup. For example, you can have a widget that displays news items from an RSS feed and another widget that you can use to create tasks that you assign to someone. If you combine the two widgets onto one page, you have created a mashup in which you can see a news event and react to it by assigning someone to investigate whether the event might affect your business.

## Troubleshooting

#### Data Collection

**1.Log files + Trace**
Firstly you need to [collect troubleshooting data for WebSphere Business Space in the IBM Business Process Manager (BPM) products](https://www.ibm.com/support/pages/node/197835).

**2.Enable Trace on a runtime Server**
a. Start the WebSphere Application Server (WAS) administrative console.
b. Click Troubleshooting > Logs and Trace in the console navigation tree, then click server > Diagnostic Trace. 
c. Select the Runtime tab.
d. Change the existing trace state by changing the trace specification to the desired state
e. Configure the trace output if a change from the existing one is desired.
&nbsp;&nbsp;&nbsp;&nbsp;Click Apply.
f. You may also need to increase the trace file size and number if the logs are rolling too fast. 20MB is a good starting point for the file size and you shouldn't increase it over 50MB. 

**3.Reproduce the issue and Collect the trace**

The trace should be enabled on any involved application cluster members. 

**Note:** When providing the logs ensure the full logs directory including all servers and FFDCs on the node are included.
a. Set the needed trace string on the related app cluster members.
b. Recreate the issue. 
c. Take note of the time you trigger the issue and provide this with the logs. 
d. Turn off each of the enabled trace strings.
e. Compress the profile_root/logs directory from each node profile. 
f. The directory contains the logs, trace, and ffdc files for each server.
**Note:** If you have logs/trace going to custom locations then provide those locations in addition.

#### Data Analysis

The detailed analysis of data may depend on the case by case. 

1.BMWSD0429E with SQLException

The most common issue is that sometimes users are not getting a login prompt or the page is blank when trying to login to Business Space. When you go to check server's SystemOut.log, you can find error BMWSD0429E with SQLException. 

**Answer:** Below 2 articles provide the debug tips which can help you accelerate problem investigation, check your configuration, find possible root cause and solve the issue quickly instead of reading many technotes and product documentation pages about the possible configuration checking. They show you several solution cases based on a variety of possible root causes.

&nbsp;&nbsp;&nbsp;&nbsp;a. [Some general tips to help debug business space login issue with BMWSD0429E error - part 1](https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/debug_business_space_login_issue_with_bmwsd0429e_error_part1?lang=en) 
&nbsp;&nbsp;&nbsp;&nbsp;b. [Some general tips to help debug business space login issue with BMWSD0429E error - part 2](https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/debug_business_space_login_issue_with_bmwsd0429e_error_part1?lang=en)

2.When I log into Business Space powered by WebSphere, I do not see the Home space. Instead, I see a message stating that "No pages currently exist." Also, I am unable to create any spaces or pages because the list of templates in the Create Space window is empty. Why does this happen and how do I resolve this problem?

**Answer:** There are two common causes: 

* The Business Space database was not created using the UTF-8 codepage. If you manually create the Business Space database, you must set the encoding to the UTF-8 universal character set. See [Configuring Business Space database tables](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.imuc.doc/inst/inst_bsp_dll.html).
* The predefined spaces and templates did not persist into the database during the first server startup. See [The Business Space welcome space and predefined space templates are not available if they failed to be persisted into the database during first server startup](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.imuc.doc/inst/inst_bsp_dll.html)

3.When I try to log into Business Space powered by WebSphere, I see a "JSPG0036E: Failed to find resource /resources/bootstrap/bootstrap.jsp" error. Why does this happen and how do I resolve this problem?

**Answer:** There are two common causes: 

* Business Space has not been installed on all nodes. Business Space must be installed on all WebSphere Application Server nodes for the cluster where Business Space is deployed. 
* The Business Space profile upgrade failed. There are several reasons why a profile upgrade might fail:
    - A profile upgrade might fail when Business Space applications are also mapped to a web server. Remove the mapping while you are upgrading the profile, and then add the mapping again afterward.
    - A profile upgrade might fail if all Business Space EAR files are not installed (including BSpaceWebformsEnabler.ear) .
    - A profile upgrade might fail if the upgrade command is run against a node in a clustered server. Run the upgrade command for clusters against the deployment manager profile. See sample instructions in [Profile upgrade instructions for IBM Business Monitor Version 8.5.7](https://www.ibm.com/support/pages/upgrading-profiles-ibm-business-monitor-version-855-or-856-ibm-business-monitor-version-85-refresh-pack-7#de).
    - A profile upgrade might fail in a non-clustered network deployment environment if the deployment manager profile and the node profile (where Business Space is deployed) are created from separate WebSphere Application Server installations. To resolve, see [Profile upgrade fails for Business Space in a non-clustered network deployment environment](https://www.ibm.com/support/pages/profile-upgrade-fails-business-space-non-clustered-network-deployment-environment).

4.When I try to augment the deployment manager profile for the cell with the dmgr.bspace profile template as documented, augmentation fails with a log entry indicating that dmgr.bspace is not a valid profile template. Why does this happen and how do I resolve this problem?

**Answer:** See [Cannot augment the Deployment Manager profile with the dmgr.bspace profile template](https://www.ibm.com/support/pages/cannot-augment-deployment-manager-profile-dmgrbspace-profile-template).

5.When I try to log in to Business Space in IBM Business Monitor. I receive an error that is similar to the following error:
```
BMWMB0039E: Fail to load page. The error message is: Error -
BMWMF0001E: Node must not be null. Please contact Lotus Mashups administrator
```
Why does this happen and how do I resolve this problem?

**Answer:** See [Cannot log into Business Space](http://www.ibm.com/support/docview.wss?uid=swg21511784).

6.After installing or upgrading the Business Space, the Business space does not load and I see an error such as "dojo is not defined" in the browser. Why does this happen and how do I resolve this problem?

**Answer:** See [Business Space is unable to load with a "dojo is not defined" error](https://www.ibm.com/support/pages/business-space-unable-load-dojo-not-defined-error).

7.Installing Business Space failed or it installed only partially. How do I remove Business Space and then reinstall it?

**Answer:** See [Removing Business Space from a profile](http://www.ibm.com/support/docview.wss?uid=swg21515316).

8.When I try to connect to the WebDAV using Microsoft Windows 7 or Windows 2008, I get the following error message:
```
The folder you entered does not appear to be valid. Please choose another. 
Why does this happen and how do I resolve this problem?
```
**Answer:** See [Cannot connect to Business Space WebDAV](http://www.ibm.com/support/docview.wss?uid=swg21590077) and [Recommended WebDAV clients for accessing BPM](https://www.ibm.com/software/reports/compatibility/clarity/softwareReqsForProduct.html).

9.When I try to open the Business Space log in page, the page is not displayed, and an error message (with exception stack trace) similar to the following error is displayed instead:
```
HTTP Error Code:   404
Error Message:JSPG0036E: Failed to find resource /bootstrap/login.jsp
Root Cause:java.io.FileNotFoundException: JSPG0036E: Failed to find resource /bootstrap/login.jsp
at com.ibm.ws.jsp.webcontainerext.AbstractJSPExtensionProcessor.findWrapper (AbstractJSPExtensionProcessor.java:395)
at com.ibm.ws.jsp.webcontainerext.AbstractJSPExtensionProcessor.handleRequest(AbstractJSPExtensionProcessor.java:349)
```
Also, no BPMProfileUpgrade log is present in the directory <profile_root>/logs (at least one such file should be generated during Fix Pack installation), where <profile_root> is the root directory of any managed profile. Why does this happen and how do I resolve this problem?

**Answer:** See [Business Space applications are not updated in single node network deployment environment after applying V7.0 Fix Pack 4](http://www.ibm.com/support/docview.wss?uid=swg21509061).

10.Can we get same customized business space for all users by business monitor ? How?
**Answer:** You need to [perform “Add to View for All authenticated Users”](https://www.ibm.com/mysupport/s/question/0D50z00005pgiE5CAI/can-we-get-same-customized-business-space-for-all-users-by-business-monitor-how?language=en_US).

11.Customer is able to access Business Space directly, but cannot access Business Space using load balancer.
**Answer:** <u>Load balancer configuration</u> needs to be checking.

12.Why do I see "TypeError:var is undefined" style errors when quickly switching between tabs in Business Space?
**Answer:** It may be ignored. [Some possible explanations](https://www.ibm.com/mysupport/s/question/0D50z000062kofFCAQ/why-do-i-see-typeerrorvar-is-undefined-style-errors-when-quickly-switching-between-tabs-in-business-space?language=en_US) can be referred. 

13.I am trying to log in to Business Space Monitor widgets page and it seems to be cycling and trying to load the page but the page never loads. We see this error in the logs: BMWFR0035W: The theme null specified for page with ID <> was not found, using the default theme. Why does this happen and how do I resolve this problem?
**Answer:** See [Why isn't my Business Space page loading?](https://www.ibm.com/mysupport/s/question/0D50z00005phvjrCAA/why-isnt-my-business-space-page-loading?language=en_US)

14.How can I improve browser performance in Business Space?
**Answer:** See [Tuning Business Space using the multipart feature](https://www.ibm.com/support/pages/tuning-business-space-using-multipart-feature).

15.How to debug, when only one of the user is not able to login into business space
**Answer:** See [How to debug, when only one of the user is not able to login into business space](https://www.ibm.com/mysupport/s/question/0D50z00005phtpKCAQ/how-to-debug-when-only-one-of-the-user-is-not-able-to-login-into-business-space?language=en_US).

16.I am not able to restrict users to a Business Space. Either no one can create a Business Space, or everyone can create a Business Space. Why does this happen and how do I resolve this problem?
**Answer:** See [Setting up Lockeddown mode in Business Space](https://www.ibm.com/support/pages/setting-lockeddown-mode-business-space)

17.If a federated repository has been configured and the LDAP does not use the standard user ID attribute "uid", the user can log in to Business Space but will receive an empty page. Why does this happen and how do I resolve this problem?
**Answer:** See [Business Space displays an empty page after login](https://www.ibm.com/support/pages/business-space-displays-empty-page-after-login).

18.Can I disable the default behavior of redirecting Business Space from HTTP to HTTPS when administrative and application security are enabled?
**Answer:** See [Disabling HTTP to HTTPS redirection for Business Space](https://www.ibm.com/support/pages/disabling-http-https-redirection-business-space).

19.User may get the following error when trying to configure the Business Monitoring Instances Widget in Business Space: "An error has occurred loading the models Unable to load /rest/bpm/monitor/models status:404"
**Answer:** See [Error when trying to configure a Business Monitoring Instances Widget in Business Space](https://www.ibm.com/support/pages/error-when-trying-configure-business-monitoring-instances-widget-business-space).

20.How do I update Business Space to use a different database schema?
**Answer:** See [Updating the Business Space database schema](https://developer.ibm.com/answers/questions/28960/updating-the-business-space-database-schema/).

#### Reference

1.Collect troubleshooting data for WebSphere Business Space in the IBM Business Process Manager (BPM)
https://www.ibm.com/support/pages/node/197835

2.Configuring Business Space
The Business Space component is supported with the following database products:
* DB2® Universal
* DB2 for z/OS® 
* Microsoft SQL Server
* Oracle 11g 

To find out which databases are supported with your product, check the supported databases for the product.

If you install IBM Business Monitor and create a stand-alone server profile, the Business Space component is installed and configured automatically.

If you have a stand-alone server environment, Representational State Transfer (REST) service endpoints are configured and enabled automatically. 

For other environments, use the REST services administrative console page to configure the REST services. If you want IBM Business Monitor widgets to be available, you must configure the REST service endpoints for those widgets.

If you are using deployment manager and custom profiles, you can use the administrative console to [configure the Business Space component](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.admin.config.doc/admin/help_dash_bizspace_config.html). 

After your original setup work on the Profile Management Tool or the administrative console, you must also configure the Business Space database. 

No matter what tool you used to configure the Business Space component, you must make sure that the configuration works with the security for your IBM Business Monitor environment.

3.Opening a space from a browser
To open a space from a browser, use the URL provided by your administrator. See the following table for the default URLs. Port numbers will vary depending on the components installed

Table 1.URLs
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr>
    <th style="text-align:center">Secured environment?*</th>
    <th style="text-align:center">URL before V7.0</th>
    <th style="text-align:center">Resolves to this URL in V7.0 and later</th>
  </tr>
  <tr rowspan="2">
    <td style="background-color:white;text-align:center">No</td>
    <td><a href="http://host_name:9080/BusinessSpace" target="_blank">http://host_name:9080/BusinessSpace</a></td>
    <td><a href="http://host_name:9080/mum/enabler" target="_blank">http://host_name:9080/mum/enabler</a></td>
  </tr>
   <tr>
    <td style="background-color:white;text-align:center">Yes</td>
    <td style="background-color:white;"><a href="https://host_name:9443/BusinessSpace" target="_blank">https://host_name:9443/BusinessSpace</a></td>
    <td style="background-color:white;"><a href="https://host_name:9443/mum/enabler" target="_blank">https://host_name:9443/mum/enabler</a></td>
  </tr>
</table>
A secured environment means that WebSphere® Application Server security has been enabled.

4.Opening Business Space from Integration Designer

To open a space using Integration Designer:

Generally, only programmer-level users open spaces using the test server of the Business Monitoring perspective provided in Integration Designer. The Monitor Model editor, which is a default installation option, creates the Business Monitoring perspective in the Integration Designer environment.

&nbsp;&nbsp;&nbsp;&nbsp;a. From the Business Monitoring perspective of Integration Designer, click the Servers tab to open the **Servers** view.
&nbsp;&nbsp;&nbsp;&nbsp;b. If IBM Business Monitor server is not started, right-click it and select Start to **start** it.
&nbsp;&nbsp;&nbsp;&nbsp;c. When the server is running, right-click it and select **Launch > Business Space**.

5.View mode and edit mode

When working with Business Space dashboards, you will be using [view mode or edit mode](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.widget.ic.doc/topics/modes.html).

Note: To add a widget to a page, you must first click Edit Page, which opens the widget palette. It is at this point that is considered edit mode. In general, you can customize visual properties as well as configure widgets for specific business process models when using edit mode.

6.[IBM BPM Server widgets for Heritage Process Portal spaces](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/reference/listofwidgets.html)
7.[Human Task Management Widgets](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.bspace.help.widg.wpsesb.doc/topics/cbsp_taskwidgets.html)

These widgets provide business users and managers with out-of-the-box capabilities to work with processes and tasks. They can easily be combined with other widgets to compose powerful spaces. 

8.[A number of widgets that are included in IBM® Business Monitor](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.widget.ic.doc/reference/listofwidgets.html)
9.[Widget wiring](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.mon.widget.ic.doc/reference/listofwidgets.html)

Widgets communicate with each other using wires. A wire is a link between a source widget and a target widget.

Each widget has a list of events that it can send and a list of events that it can receive.
