Date:2019-12-20

## Overview

The IBM Operational Decision Manager (ODM) Classic Rule Engine (CRE) is deprecated in ODM v8.9. Since then the new rule projects in a decision service automatically use the Decision Engine (DE). We recommend that clients migrate their existing projects to use Decision Engine.

## Prerequisites

IBM Operational Decision Manager - Executing rulesets
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/executing_topics/con_executing_brules.html

## Acronyms

&nbsp;&nbsp;&nbsp;&nbsp;ARL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Advanced Rule Language
&nbsp;&nbsp;&nbsp;&nbsp;CRE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Classic Rule Engine
&nbsp;&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Decision Engine
&nbsp;&nbsp;&nbsp;&nbsp;DT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Decision Tables
&nbsp;&nbsp;&nbsp;&nbsp;IRL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	ILOG Rule Language
&nbsp;&nbsp;&nbsp;&nbsp;ODM&nbsp;&nbsp;&nbsp;&nbsp;	IBM Operational Decision Manager

## Components

1.The Decision Engine is designed to optimize the ruleset execution performance. The Decision Engine works in a similar way to the Classic Rule Engine, but there are differences in the compilation and loading of the rules.

Rule Designer and Decision Center compiles the rule by default to executable byte code, which almost eliminates the parsing time since ruleset parsing is replaced by directly loading the Java classes (see the 3rd column in the figure below).

However, for Decision Center, bytecode generation is activated when XOM management is enabled. If XOM is not available in Decision Center, rules are compiled to intermediate code which requires a final translation into executable byte code at runtime (see the 2nd column in the figure below).

Refer to [Decision Engine](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/executing_decision_topics/con_decision_engine.html)

![图片 1](https://media.github.ibm.com/user/228551/files/5e833380-231a-11ea-94c0-7f4f8b16c465)

2.Understand the limitation of Decision Engine before migration
Decision Engine does not support some of the features that are supported by the classic rule engine. Refer to [Limitations of decision engine](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/executing_decision_topics/con_decision_limitations.html)

3.Migrating from classic rule engine to decision engine
In Rule Designer, switch to use DE by changing the Rule Engine property of the rule project to Decision engine instead of Classic rule engine.
However, moving from CRE to DE is not just a simple switch. CRE relies on ILOG Rule Language (IRL), while DE relies on Advanced Rule Language (ARL).
When switching to DE in Rule Designer, a .b2xa file is created and to BOM to XOM mapping code is migrated to ARL. User defined IRL code is not automatically converted. Any code written in IRL will have to be re-written in ARL. Note, the mapping between API of CRE and of DE is not one-to-one. Refer to [Mapping between classic rule engine and decision engine API](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.run/executing_decision_topics/ref_de_api_migration.html)
For details, refer to documentation [Migrating from CRE to DE](https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.migrating/topics/tsk_cre_de.html) 

## Troubleshooting

#### Data Collection

When Rule Designer fails to compile a DE project, detailed error message can be found in the Problem view. If compilation failed due to an exception, in most cases the complete stack trace is available in the Error log view. You can activate this view by Window > Show View > Other…> General > Error log

When a client asks how to migrate certain IRL API to use ARL, request for the complete IRL code to better understand the requirement.

**Typical questions and issues**

**1.Question:** 
The same project compiles perfectly in CRE but fails in DE
**Answer:**
This can be expected, because DE compiles the rules to a further state than CRE does. As a result, compiling in DE is more restrictive than compiling in CRE. It is possible that certain errors that will happen in runtime is reported as warning or error during build time in DE.
Firstly, collect for the exact error message/stack trace to search in Watson support search and RTC. If no similar issue is found, ask client to provide a reproducible sample project.
Sometimes the client may not be skilled enough to build a reproducible sample project and may not want to send the real rule project. In that case you can try to create a small sample rule project based on the client’s code/description. If you cannot reproduce using the small sample, send the project and ask the client to modify your sample to recreate the problem.

**2.Question:**
I have migrated my project to use decision engine. But the ruleset loading/parsing time is not obviously improved.
**Answer:** 
It is possible that the bytecode generation is not enabled, and the rules are only compiled to intermediate code. You can quickly confirm by checking the content of the .dsar file. If the ruleset is compiled to executable byte code, a ruleset.jar file can be found at <ruleset_name>.dsar\RULES_ENGINE\default\jar\
If you deploy from Rule Designer, make sure the option “Optimize ruleset loading (Java bytecode generation)” is checked.
If you deploy from Decision Center, make sure the XOM management is enabled. If XOM is not available in Decision Center and you have to deploy ruleset of intermediate code, you can use the compiled archives cache to limit the bytecode generation to the first execution of a ruleset only. Refer to 
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dserver.rules.res.managing/topics/tsk_res_config_xu_cacacheprop.html
Note that the XOM management feature in Decision Center was introduced in v8.7.1.

**3.Question:**
We used to view the compiled IRL content of the ruleset archive from the RES console. But the IRL content is no longer available after having migrated to use decision engine.
**Answer:**
It is expected that DE does not generate IRL. But you can choose to generate ARL code by including debug information to the ruleset when required. 
In Rule Designer, select option Include debugging information for IBM customer support when exporting the ruleset. 
When you deploy from the Business console, you review your configuration and specify some settings in a configuration dialog. In this dialog, you can select a check box to include information for debugging purposes, which includes an ARL file in your deployed archive. This check box is available only if you applied the configuration parameter Include debug information for Decision Engine archives from the Enterprise console, and you set its value to true.
The generated ARL file can be found at <ruleset_name>.dsar\RULES_ENGINE\default\debug\ruleset.arl

**4.Question:**
The result of ruleset execution is different in DE.
**Answer:**
This could typically happen when the ruleset contains decision tables (DT) with overlapped conditions, while the execution order of DT rows could be different in CRE and in DE.
In DE, a decision table is considered one rule and execution order is always top to bottom. 
On the other hand, in CRE, a decision table is generated one rule per row and execution order can be different depending on the execution mode. 
Ideally, the correctness of the rule execution should not depend on the execution order of the rules. User may need to refine the design by removing the overlaps.

**5.Question:**
Do I have to migrate to Decision Engine when Classic Rule Engine is deprecated? 
**Answer:** 
Classic Rule Engine is deprecated in 8.9. This is a signal that it is time to consider switching to Decision Engine.
Since v8.9, the new rule projects in a decision service automatically use the Decision Engine, but classic rule engine is still supported, and it is still possible to use it in Decision Services. 
Migration to DE is not a simple task especially when the rule projects were originally developed with legacy JRules/ODM versions where a lot of custom IRL and CRE APIs are used. When migrating to a later version of ODM (8.9/8.10), you can first migrate the current code to use the later version, and then gradually migrate the projects to use Decision Service and/or Decision Engine.
