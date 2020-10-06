Date:2019-12-27

## Overview

The Business console comes with features for managing changes to decision services. Although decision services can be managed on Enterprise Console, we still recommend using Business Console for Decision Service management.

## Prerequisites

Knowledge about Business Console
Knowledge about Enterprise Console

## Component

1.There are two kinds of ways that you can use to manage Decision Service on Business Console:

&nbsp;&nbsp;&nbsp;&nbsp;a. Decision governance framework: In the Business console, business users can work with a ready-to-use approach to change management and governance, which is based on releases and change activities. This approach is called decision governance. 
The approach is specific for Decision Service, you can manage decision service and author rule artifacts on Business Console. You can get started from [this tutorial](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_dcenter_bu_tut_int.html).
&nbsp;&nbsp;&nbsp;&nbsp;b. Management based on branches: on Business console, you can manage Decision Service with branches. This method is more like the operations on Enterprise Console

**Note: These two kinds of management method are not related, which means the changes you did in the branches will not be seen in the releases and activities of governance framework. And the opposite is same.**

2.You can also manage Decision Service on Enterprise Console, but some features cannot be used. So, we do not recommend it.

3.Using governance with Decision Service: The decision governance framework is a methodology that provides you with tools to implement changes to your business rules in a structured, secure, and controlled way.

&nbsp;&nbsp;&nbsp;&nbsp;a. [Governance principles:](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_cmg_governance.html) The governance aspects of Decision Center are based on the states of releases and activities, and on the governance roles of participants who work on these releases and activities. 
&nbsp;&nbsp;&nbsp;&nbsp;b. [Managing changes with the decision governance framework:](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_cmg_basics.html) Releases and activities behave as branches and subbranches of your decision services, but with some special considerations.

4.Using branches to manage Decision Service: Decision Center enables branching so that you can manage the evolution of projects over time.

&nbsp;&nbsp;&nbsp;&nbsp;a. [Branches:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_crp_branches.html) When a branch is created, it contains an exact replica of every project element that is contained in its parent branch. You can then work on the subbranch without affecting the contents of the parent.
&nbsp;&nbsp;&nbsp;&nbsp;b. [Snapshots:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/snapshots/con_bc_snapshots.html) Snapshots capture the state of a branch at a specific moment in time.
&nbsp;&nbsp;&nbsp;&nbsp;c. [Merging branches:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_merging.html) In the Decision Center Business console, you can merge the content of branches, releases, and activities in a decision service.
&nbsp;&nbsp;&nbsp;&nbsp;d. [Deleting and recovering elements in branches:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_recyclebin.html) When you delete project elements from the current state of a branch, they are put in the recycle bin of that branch. You can restore those elements to your branch.
&nbsp;&nbsp;&nbsp;&nbsp;e. [Generating a project reports (new in 8.10.2):](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/projects/con_dc_bc_projreport.html) You can generate reports in HTML format based on decision services, projects, or queries. These reports show the content and properties of deployed project elements.

5.[Linked projects:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_ds_links.html) When a decision service is published to Decision Center, it can contain linked (or dependent) projects. And they can be check on BC in the release properties of a Decision Service.

6.[How to manage Decision Artifacts:](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/projects/con_bc_project.html) In the Decision Artifacts tab, you create and edit rule artifacts, such as action rules, decision tables, or ruleflows, which you can organize in folders. You can define decision operations, ruleset variables, and handle resources for your projects. For details please refer to Decision artifacts.

7.Deploying Decision Service from Business Console: In a decision service, you can deploy a set of rules to a production environment or to a non-production environment for testing or quality assessment. For details please check [this link](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/shared_cmg_topics/con_deploy_bc.html). 

8.Exporting or importing the current project: Users with administrator or configuration manager roles can export the working branch of the current project as a .zip file, and import the project previously exported back into Decision Center. For details please refer to [link](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/mng_changes/con_bc_import_export.html).

9.Setting up project dependency (New in 8.10.2): Administrators and configuration managers can set up project dependencies in the Business console to make a project available in different decision services or branches. Details refer to [this link](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/admin_bc/con_bc_share_projects.html). 

10.Manage Security for Decision Service, please take reference to [Security & user management](https://pages.github.ibm.com/hippo00.github.io/DBA-Education/#/OperationalDecisionManager/DecisionCenter/Security&usermanagement).

## Troubleshooting

#### Data Collection

1.Detail description of the problem.
2.Ask for screenshot or have WebEx with customer to see the issue.
3.If the issue can be reproduced, detailed steps to reproduce the issue.
4.All data mentioned in Collecting Data: reporting a problem with IBM Decision Center
5.Database dump if needed.

#### Typical steps to troubleshooting a Decision Service management problem
1.Collect all the information and logs. 
2.Check the logs and see if there are known issues.
3.Ask for the Decision Service.
4.Ask for the steps to reproduce the problem and try to reproduce the issue.
5.Engage SME or developers if needed.

#### Typical Issues or Questions
**1.Question:**
I made some changes in main branch, but there is no change in my Release. Why?
**Answer:**
As explained in previous part of this document, managing Decision Service with branches or governance framework is different options. And the changes will not affect each other. That means when you change something in one branch, it will not show in release; and in the opposite, when you change something in one activity, but it will not show the changes in any branches.

**2.Question:** 
Who can create Releases and activities?
**Answer:**
Anyone can create Releases and activities, for security concern, we need to investigate more on this.

**3.Question:** 
How to make sure the changes in one activity will not be overridden by others?
**Answer:**
If you create a change activity before an existing one is completed and merged, the same rule might be subject to change in both activities. To avoid such conflicts, a rule that is being edited in a change activity is locked until the activity is completed and merged.
The following image shows how different change activities merge back into the release when they are completed:
![图片 1](https://media.github.ibm.com/user/228551/files/6586f300-2965-11ea-97ad-7dfab6692241)

**4.Question:** 
Any tools or command that can be used to build and deploy Decision Service automatically? Are there any examples?
**Answer:** 
You can deploy a Decision Service on Business Console by many ways. For details please refer to the Component part in this document. 
&nbsp;&nbsp;&nbsp;&nbsp;a. [Using Ant task](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.deploy/topics/con_cmg_headless.html)
&nbsp;&nbsp;&nbsp;&nbsp;b. Using Decision Center REST API
&nbsp;&nbsp;&nbsp;&nbsp;c. Using Decision Center Java API
Here is a [sample](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.samples/topics/smp_dc_api.html) that you can take as reference to build and deploy Decision Service using API.

**5.Question:** 
How to deploy decision services using ant command? a detailed description on how can I successfully execute the ant command to deploy the decision service?
**Answer:**
Some parameters are needed for the ant command, please take this link for reference: https://developer.ibm.com/answers/questions/377495/how-to-deploy-decision-services-using-ant-command.html

**6.Question:**
What is the difference between snapshot and deployment snapshot?
**Answer:** 
Deployment snapshot is one kind of snapshot. The deployment configuration contains a setting to establish if a deployment snapshot is required when deploying. Deployment snapshots can be found in the list of snapshots. You can then redeploy from the deployment snapshot or from the report of the deployment. 

#### Reference
1.Fix list: https://www.ibm.com/support/pages/fix-list-ibm-operational-decision-manager

