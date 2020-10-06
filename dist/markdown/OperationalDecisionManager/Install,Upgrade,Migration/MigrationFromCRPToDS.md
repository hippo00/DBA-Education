Date:2019-12-27

## Overview

If your classic rule projects meet the prerequisites and use the migration wizard to migrate them to decision services in Rule Designer. You can also use Ant tasks to migrate your projects.

## Prerequisites

* Knowledge about Rule Designer

## Component

1.Classic rule projects: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/basics/con_dc_projects.html

2.Decision Service: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_ds_decisionservices.html

3.Classic Rule Projects vs. Decision Service:

&nbsp;&nbsp;&nbsp;&nbsp;a. Project items:
<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <th>Classic Rule Projects</th>
    <th>Decision Service</th>
  </tr>
  <tr>
    <td style="background-color:white">Source folder(rules)</td>
    <td style="background-color:white">Source folder(rules)</td>
  </tr>
 <tr>
    <td style="background-color:white">BOM folder(bom)</td>
    <td style="background-color:white">BOM folder(bom)</td>
  </tr>
  <tr>
    <td style="background-color:white">Query folder(queries)</td>
    <td style="background-color:white">Deployment folder(deployment)</td>
  </tr>
  <tr>
    <td style="background-color:white">Resource folder(resources)</td>
    <td style="background-color:white">Query folder(queries)</td>
  </tr>
  <tr>
    <td style="background-color:white">Template folder(templates)</td>
    <td style="background-color:white">Resource folder(resources)</td>
  </tr>
  <tr>
    <td style="background-color:white"></td>
    <td style="background-color:white">Template folder(templates)</td>
  </tr>
  <tr>
    <td style="background-color:white"></td>
    <td style="background-color:white">Reports folder(reports)</td>
  </tr>
</table>

&nbsp;&nbsp;&nbsp;&nbsp;b. Deployment method:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)**For Classic Rule Projects**: In Rule Designer, use RuleApp Project to deploy; In Enterprise Console, you can create RuleApp and then deploy the ruleApp. Details please refer to [Deploying a RuleApp from a RuleApp project](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.deploying/topics/tsk_res_deploy_rlapp_to_multires.html) and [Configure Deployment](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.econsole/topics/tpc_dc_config_deploy.html).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)**For Decision Service**: In Rule Designer and Business Console, we use operations and deployment configuration to deploy Decision Service to RES, details you can refer to [Deploying decision services](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.deploying/deploying_ds_topics/con_res_deploy_ds_intro.html) and [Deploying decision services from Decision Center](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.icp/topics/tsk_deploying.html).

&nbsp;&nbsp;&nbsp;&nbsp;c. Setting up a project hierarchy: You can create a hierarchy by establishing dependencies between projects. Use rule project hierarchies to separate and share the rules and the BOM among different projects, especially when your application becomes more complex. Using different rule projects allows for easier maintainability, lets you test different parts of the logic independently, and organize for various decision points. You can then set up the projects to refer to one another.

For Classic Rule Projects and Decision Service, the project hierarchy is a bit different. With Decision Service, when you create a decision service, you create a main rule project that serves as the top-level project of the rule project hierarchy. With Classic Rule Project, you can create different types of projects in the Classic Rule Project section. Then, you create dependencies between projects. For details please refer to [Setting up a project hierarchy](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.dev/developing_topics/con_ds_dev_project_org.html).

&nbsp;&nbsp;&nbsp;&nbsp;d. Using Decision Center API: For Classic Rule Project, users can only use Java API to manage rule projects on Decision Center, but for Decision Service, users can use both Java API and REST API to manage it. And due to the deployment difference between Classic Rule Project and Decision Service, the Java API for Classic Rule Project and Decision Service is different, for details please refer to [Decision Center API](https://pages.github.ibm.com/hippo00.github.io/DBA-Education/#/OperationalDecisionManager/DecisionCenter/Decision%20Center%20API).

4.Ant tools: We need to set up ant first to use ant task migrating projects.  https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_setting_up_ant.html

5.Migrating classic rule projects to decision services: A decision service is the recommended unit of rule management, since it allows for complex decisions that involve several rule projects to be grouped as one entity. 

&nbsp;&nbsp;&nbsp;&nbsp;a. Classic rule project needs to meet following requirements:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)In each rule project, the variables of the ruleset parameters have a verbalization value.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)There is no cyclic project reference between rule projects. For example, if project A refers to project B and project B refers to project C, check that project C does not refer to project A.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)If your rule projects refer to other rule projects, the referenced projects are open.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4)When you migrate a decision service, everything in the referenced main classic rule project is migrated.

&nbsp;&nbsp;&nbsp;&nbsp;b. Limitations: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)Any rule project that you migrate can no longer be used in a classic rule project structure.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)You cannot migrate a rule project contained in a decision service back to a classic rule project.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)You cannot use RuleApp projects to deploy a decision service. You must create and use deployment configurations.

&nbsp;&nbsp;&nbsp;&nbsp;c. Detailed steps please refer to [this link](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/odm_topics/tsk_migrate_projects_to_ds.html).

6.Migrating classic rule projects to decision services with Ant tasks: You can use an Ant task to migrate classic rule projects to decision services directly on Business Console. You can choose to migrate to a simple decision service, or a governed decision service. For details please see following link: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/con_admin_migrate_proj_to_ds_ant.html

## Troubleshooting
#### Data Collection
1.The logs of Rule Designer: You can collect it in <work_space>/. metadata, it is better to get whole folder.
2.The logs of Decision Center if you use Ant tasks to migrate: The location depends on Application Servers you are using, take Liberty for example, the location is: <WLP_HOME>/usr/servers/<server_name>/logs. It is better to get whole folder.
3.ODM version and java version
4.Detailed problem description, the screenshot. And if needed, having a WebEx with customer to see the issue
5.If possible, ask for the rule project to reproduce the issue.

#### Typical steps to diagnose the migration 
1.Ask for all helpful information mentioned in Data Collection part.
2.Check if there are any errors in the logs. Using Waston support searching tools to check if there are similar issues or known issues.
3.Engage developers if needed. 

#### Typical issues
**1.Question:**
Should I migrate to Decision Engine first or migrate to Decision Service first?
**Answer:**
Classic Rule Project is deprecated in 8.8, so it is better for users to migrate to Decision Service. But the answer to these questions depends customer’s environment.
Classic Rule Project is also supported in latest version, so for customers who still have large number Classic Rule Project in their environment, we suggest them to migrate to Decision Engine first, which can help them improve the execution performance. And then move Classic Rule Projects to Decision Services step by step. 
But for new projects or for the customer who has few Classic Rule Projects, we recommend them to use Decision Service instead, as in this way they can use the new features like Test and Simulation. And it is more convenient for them to manage the rule projects on Business Console.

**2.Question:**
What kind of JDK should I use for Decision Service?
**Answer:** 
We always recommend users to use IBM JDK in their environment to avoid unpredictable problems. So, when you see some strange errors, check the if the JDK is IBM JDK first.

**3.Question:** 
How can I see Classic Rule Project on Business Console?
**Answer:**
Customer can set the property decisioncenter.web.core.EnableClassicRuleProjectSupport to true in preference.properties file, please see [this link](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.admin/topics/tsk_dcbc_view_crp.html) for reference.
**But please note, users can view the Classic Rule Projects on Business Console, but they cannot deploy or manage it on Business Console.**

#### Reference
1.Known APARs:
&nbsp;&nbsp;&nbsp;&nbsp;a. [RS02430: CANNOT EXPORT PROJECT ONCE IT'S BEEN MIGRATED TO A DECISION SERVICE](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02430)
&nbsp;&nbsp;&nbsp;&nbsp;b. [RS02811](https://www-01.ibm.com/support/docview.wss?uid=swg1RS02811&)
&nbsp;&nbsp;&nbsp;&nbsp;c. [RS03440: MIGRATE CLASSIC TO DECISION SERVICE MISSES IMPORT STATEMENTS.](https://www-01.ibm.com/support/docview.wss?uid=swg1RS03440&)

