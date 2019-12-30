Date:2019-12-26

## Overview

Decision Model Services is a new feature introduced in IBM Operational Decision Manager (ODM) version 8.10. Traditionally, IT creates the decision model on which rules are authored by business users. Using Decision Model Services, business users can create both the decision model and the business logic directly in the Decision Center Business console.

## Prerequisites

Tutorial: Getting started with decision modeling https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_dc_mod_int.html

## Components

**1.Modeling Decisions in the Business Console**

https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/modeling/con_bc_modeling.html

In the Business Console, a business expert can:
* Create brand new decision services from scratch, or import an existing project that was created in [Decision Composer](https://decision-composer.ibm.com/)
* Model data, decision diagrams and logic iteratively
* Validate the decision model during development
* Test, simulate, manage, govern the decision model service just like regular decision services
* Deploy a decision model service to an execution environment using a deployment configuration

![图片 1](https://media.github.ibm.com/user/228551/files/d7780480-27cc-11ea-824b-f48f105542fa)

Decision modeling allows business expert to model decisions interactively:
* Start from top decision and build dependencies
* Create and change data model at any time
* Specify logic through tables and rules
* Try and validate decisions on the fly
* Keep restructuring and refining without any constraints

![图片 2](https://media.github.ibm.com/user/228551/files/d8109b00-27cc-11ea-9322-29b3107277f3)

**2.Decision Modeling Samples and Tutorials**

The sample server contains decision model services for different use cases. The same sample projects are also available in compressed files in <InstallDir>\teamserver\tutorials\decisionModel. You can import the projects into your own Decision Center repository
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.bu.bconsole/modeling/con_dc_mod_samples.html

**3.Decision Composer**

https://ibm.biz/DecisionComposer
Decision Composer is a free web tool that can be used to learn and try decision modeling on the cloud. Thanks to Decision Composer, users can author or run integrated decisions without any installation.  Decision Composer supports limited features of decision modeling (refer to below table), it is not for production. 

<table width="200px" border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr width="200px">
    <th></th>
    <th>Decision Composer</th>
    <th>ODM 8.10</th>
  </tr>
  <tr>
    <td>Decision models</td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>Rule flows</td>
    <td>✖️</td>
     <td>✔</td>
  </tr>
  <tr>
    <td>Business rule & decision table editing</td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>Business language</td>
    <td >Basic</td>
    <td>Advanced / Custom</td>
  </tr>
  <tr>
    <td>Collaboration</td>
    <td>Basic</td>
    <td>Advanced</td>
  </tr>
  <tr>
    <td>Governance</td>
    <td>✖️</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>Testing & Simulation</td>
    <td>✖️</td>
    <td>✔</td>
  </tr>
  <tr>
    <td >Role & permission management</td>
    <td >✖️</td>
    <td >✔</td>
  </tr>
  <tr>
    <td >Enterprise Integration & DevOps</td>
    <td >✖️</td>
    <td >✔</td>
  </tr>
  <tr>
    <td >Execution at scale</td>
    <td >✖️</td>
    <td >✔</td>
  </tr>
</table>

**FAQs**

<p>1.Do we fully support Decision Modeling Notation (DMN)? </p>

**Answer:** 
&nbsp;&nbsp;&nbsp;&nbsp;We support a subset of DMN (Decision dependency diagram, DTs, Rules, Hit policies), but we add the power of ODM to offer a consistent environment meant for strong production.

2.Does decision modeling work with other languages than English?

**Answer:** 
&nbsp;&nbsp;&nbsp;&nbsp;The web user interface is fully localized, but the action rule language currently supports English only. In other words, the decision model service is available only when the Decision Center database persistence is set to English locale.

3.Are there limitations to the size & complexity of decision models?

**Answer:** 
&nbsp;&nbsp;&nbsp;&nbsp;Yes. We recommend no more than 50 nodes in the diagram.

4.When to start with a decision model service vs. a regular decision service?

**Answer:**  
&nbsp;&nbsp;&nbsp;&nbsp;a. If you need a rather simple business object model
&nbsp;&nbsp;&nbsp;&nbsp;b. If you want to think about your decision
&nbsp;&nbsp;&nbsp;&nbsp;c. If you need a reasonably simple and isolated decision

5.Can I transform a decision model service into a regular decision service?

**Answer:** 
&nbsp;&nbsp;&nbsp;&nbsp;No. But you can deploy and consume it like any regular decision service.

6.I have already migrated to ODM 8.10.x. But I still cannot find the icon to create or import decision model service in the Business Console. Why?

**Answer:** 
&nbsp;&nbsp;&nbsp;&nbsp;This is because you did not migrate the Decision Center database schema. Since v8.6, the Decision Center database schema is fully compatible with version 8.10.x. But you have to migrate the database schema using the provided Ant task in order to use the new decision modeling feature. Refer to documentation of [Migrating the Decision Center database](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/dcbc_topics/tsk_odm_distrib_migrate_db.html).


#### Reference

ODM 8.10 skill transfer session, which introduces decision modeling
