Date:2019-12-24

## Overview

The IBM Operational Decision Manager (ODM) Decision Center provides a security feature to control access to branches of decision services and enable permissions on the different rule artifacts.

You use the Decision Center Business Console, Enterprise Console or Ant tasks to manage users and groups. From ODM 8.7 to the latest ODM version, the user management on Business Console changed a lot. Many features were added to the Business Console.

## Prerequisites

Knowledge about how to configure users and groups on different application servers.
Knowledge about Ant usage.

## Components

1.Decision Center groups of users

This feature is based on Decision Center groups. Any user who signs in to the Business or Enterprise console must be a member of a group that is mapped to one of the predefined Decision Center roles. The predefined roles determine which features users can access in the consoles:

![图片 1](https://media.github.ibm.com/user/228551/files/c2249e00-2645-11ea-9418-28f6e63dec9b)

The rtsInstaller role is only used for the initial installation of Decision Center, so for Decision Center end users, there are three roles:

![图片 1](https://media.github.ibm.com/user/228551/files/d8caf500-2645-11ea-9d45-d2296a840fc7)
In the above diagram:
* The bottom of the diagram shows the groups and users present in your user registry.
* The middle of the diagram shows that all users must be members of one or more Decision Center groups. You create these Decision Center groups manually or by importing them from an LDAP.
* The top part of the diagram shows how you map each Decision Center group to one of the predefined roles.

2.Configure user access to Decision Center

&nbsp;&nbsp;&nbsp;&nbsp;a. For WebSphere Liberty: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.wlp/config_dc_liberty/tpc_wlp_config_dc_security.html
&nbsp;&nbsp;&nbsp;&nbsp;b. For WebSphere Application Server: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.was/config_dc_websphere/tpc_was_config_console_security.html
&nbsp;&nbsp;&nbsp;&nbsp;c. For WebLogic (Deprecated): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.weblo/config_dc_weblogic/tpc_wlogic_config_dc_security.html
&nbsp;&nbsp;&nbsp;&nbsp;d. For JBoss: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.jboss/config_dc_jboss/tpc_jboss_config_security.html
&nbsp;&nbsp;&nbsp;&nbsp;e. For Tomcat: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.config.tom/config_dc_tomcat/tpc_tcat_config_dc_security.html 

3.Managing users and groups from the Business console: 

&nbsp;&nbsp;&nbsp;&nbsp;a. Declare users in Decision Center database: The users and groups can be added in configuration files of application server, but you need to declare the users and groups under Administrator tab, then the users and groups can be used to set branch security or rule artifact permission. Otherwise all users and groups cannot be seen on Business Console.
&nbsp;&nbsp;&nbsp;&nbsp;b. Here is a sample about how to set up groups on Business Console manually: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/shared_dcsample_topics/tpc_starting_rts_sample_server.html
&nbsp;&nbsp;&nbsp;&nbsp;c. When you are working with LDAP directories, you first establish the same LDAP connection used by the application server to authenticate access to Decision Center (see [Establishing an LDAP connection in the Business console](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_admin_users_bc_ldap.html#establishinganldapconnection)).
&nbsp;&nbsp;&nbsp;&nbsp;d. After the connection to LDAP is established, depending on your configuration, you access the Business console in one of three modes (Manual import, automatic import, semi-automatic import). Each mode provides specific options to import users and groups from LDAP directories. For details you can check [Importing users and groups from LDAP directories](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_admin_users_bc_sync.html)

4.Managing users and groups from the Enterprise Console: 

&nbsp;&nbsp;&nbsp;&nbsp;a. Set up groups: On Enterprise Console, click Configure -> Installation Setting Wizard, choose Setup Groups and declare groups here.
&nbsp;&nbsp;&nbsp;&nbsp;b. Set branch security for classic rule project: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tsk_config_security_setting.html
&nbsp;&nbsp;&nbsp;&nbsp;c. Set group permissions: You can set user permissions to control who can create, update, view, and delete project elements. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tpc_dc_config_secu_perms.html
&nbsp;&nbsp;&nbsp;&nbsp;d. Creating one or several new roles (Means adding roles in ODM 8.7.1): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.securing/topics/tsk_security_ds_roles.html

5.Managing users and groups using Ant tasks: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_admin_manage_users_bc.html

6.Enforce projects Security for decision service on BC: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/admin_bc/tsk_bc_security.html

7.Set rule artifact access on Decision Center:
https://ibm.ent.box.com/file/573582242301

8.Security in Governance Framework:

&nbsp;&nbsp;&nbsp;&nbsp;a. Roles: Release owner, Activity owner, approver, author (for change activity), tester (for validate activity)
&nbsp;&nbsp;&nbsp;&nbsp;b. Role permissions: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_cmg_governance.html

## Troubleshooting

#### Data Collection

1.Collecting information about Decision Center: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/con_dc_must_gather_info.html
2.Open the traces and collect the trace.log
3.User, group settings
4.Screenshots about the error message 

**Steps to diagnose security problems in Decision Center**

1.Collect application server logs and security settings on client side.
2.Ask if client did some configuration change before the issue happened.
3.Ask client to try with rtsAdmin user who has the highest permission.
4.Check the settings and do WebEx with client to check security configuration if needed.
5.Try to reproduce client’s issue on our side.
6.Engage developers or WAS support if needed.

**Typical Issues**

1.User belongs to rtsAdministrator cannot open Installation Setting Wizard.
&nbsp;&nbsp;&nbsp;&nbsp;a. Symptom: No Installation Setting Wizard under Administration part

![图片 1](https://media.github.ibm.com/user/228551/files/66a6e000-2646-11ea-9ddc-70cb486d6589)

&nbsp;&nbsp;&nbsp;&nbsp;b. Solution: Add rtsAdmin to rtsInstaller role
2.Cache issues happens sometimes when multiple users login Business Console
&nbsp;&nbsp;&nbsp;&nbsp;a. Symptom: When user goes to view or edit the rule in the business console it has the appearance that the branch does not have access to the BOM
&nbsp;&nbsp;&nbsp;&nbsp;b. Solution: Clear browser cache 

3.Group permissions not taken into account in Business Console with some application servers
&nbsp;&nbsp;&nbsp;&nbsp;a. Symptom: Sometimes group permission is not enforced although properly defined in the business console. As been seen with Liberty Profile and WebSphere Application Server.
&nbsp;&nbsp;&nbsp;&nbsp;b. Solution: Defect 109354

4.How to properly set up Decision Center to allow creation of New Projects from Rule Designer？
&nbsp;&nbsp;&nbsp;&nbsp;a. Symptom: GBRDR0067E: You must have at least one of these groups: rtsAdministrator, rtsInstaller
&nbsp;&nbsp;&nbsp;&nbsp;b. Solution: https://developer.ibm.com/answers/questions/372332/how-to-properly-set-up-decision-center-to-allow-cr.html

References
1.[Securing Operational Decision Manager](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.securing/topics/odm_distrib_secure.html)
2.Typical APARS related to user & groups issues: 
&nbsp;&nbsp;&nbsp;&nbsp;a. [RS03115: INTERMITTENT SECURITY ERRORS IN DECISION CENTER BUSINESS CONSOLE](https://www-01.ibm.com/support/docview.wss?uid=swg1RS03115)
&nbsp;&nbsp;&nbsp;&nbsp;b. [RS02746: PROJECT SECURITY DIALOG CAN SHOW INCORRECT INHERITED STATUS FOR NON-MAIN PROJECTS](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02746)
&nbsp;&nbsp;&nbsp;&nbsp;c. [RS02496: PROBLEM DEPLOYING DECISION SERVICE WITH BRANCH SECURITY ENABLED](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02496)
&nbsp;&nbsp;&nbsp;&nbsp;d. [RS02416](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02416)
&nbsp;&nbsp;&nbsp;&nbsp;e. [RS02011: NPE WHEN NAVIGATING BACK VIA BREAD CRUMB WHEN SECURITY IS ENFORCED](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02011)
&nbsp;&nbsp;&nbsp;&nbsp;f. [RS02088: Cannot publish changes for non admin users when security is enforced regardless of the permissions](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02088)


