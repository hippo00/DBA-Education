Date:2019-12-24

## Overview

The IBM Operational Decision Manager (ODM) Test And Simulation features provide business users the capability to run tests and simulations from Decision Center or from Rule Designer.

Test scenarios are written in Microsoft Excel scenario files.

Testing and simulating rulesets
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.designer.test/topics/odm_dserver_rules_designer_test.html

## Prerequisites

Tutorial: “Configuring the BOM for Excel testing” https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.dserver.rules.tutorials/tut_designer_topics/tut_configexcel.html
This tutorial shows how to generate the Microsoft Excel simulation file and use it for the Test Feature

Tutorial: “Creating a simulation”
https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.tutorials/tutorials_topics/odm_bc_sim_tut_int.html
This tutorial shows you how to create a simulation for a decision service in the Decision Center Business console.

## Components

**Test feature:**
You write the scenario in a Microsoft Excel file, and run the test, or the simulation, against this Excel file from either rule Designer, or from the Decision Center Business Console.
In the above screen we can see the test in the Business Console.

![图片 1](https://media.github.ibm.com/user/228551/files/9a860380-264e-11ea-8223-46c39f630310)
The above “Main Scoring Test Suite” refers to a Microsoft Excel file with the data to be tested, and the results of the execution are display in the “Reports”

**Simulation Feature:**

The simulation feature is more complex than the test feature. It allows you to check how changes to rules or data affect the results of your business rule application before deployment.

The simulation brings together data, rules, and key performance indicators (KPIs). You select the data and rules for the simulation, and you define the KPIs by using metrics that take values from the rules.

The KPIs represent the results of the simulation. You define a simulation report by adding KPIs in a report template, and then defining their appearance. You can display KPIs as text, or in graphs to make their results easier to understand.

![图片 1](https://media.github.ibm.com/user/228551/files/cd2ffc00-264e-11ea-8f3a-677ab5358598)
A screen showing the simulations pane in the Business Console.
The simulation will bring together the Metrics, the KPIs and the Data, and will display the report according to the pre-defined Report Formats.

**Note:**
In prior versions, the testing was done using the Decision Validation Service (DVS), however, **DVS was deprecated in version 8.8**.
Clients still using DVS should migrate to the new testing and simulation features in the Decision Center Business console that are described in this document.
For details on the deprecated features:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.overview/shared_deprecation/con_deprecated_features.html


## Troubleshooting

**1.Having the correct scenario:**
Whatever the error, it is important to confirm that the scenario file is up-to-date.
Most errors showing up in this module occurs because the scenario file, and the current version of the rule project are not in phase.

**2.Client is unable to run several test suites simultaneously.**
When he run one test suite, it works fine.
However, when he has several clients calling at the same time the test suite, it sometimes fails. 
In the logs:
```
[5/23/19 18:32:00:767 CEST] 000000fd SystemOut     O 2019-05-23 18:32:00.767  WARN decisionmodel      --- [ Archive Thread] i.r.t.e.s.v.ReportMonitorThreadService   : Cannot find baseline from working baseline '%current_key' (brm.Branch:958:958) or its dependencies, for element 'lv1Report - 2019-05-23_06-31-54-595' (validation.TestReport:127:127)

ilog.rules.teamserver.model.IlrProjectEltBaselineNotFoundException: Cannot find baseline from working baseline '%current_key' (brm.Branch:958:958) or its dependencies, for element 'lv1Report - 2019-05-23_06-31-54-595' (validation.TestReport:127:127)
    at ilog.rules.teamserver.model.IlrSessionHelperEx.getBaselineFromProjectEltDetails(IlrSessionHelperEx.java:2748)
    at ilog.rules.teamserver.model.IlrSessionHelperEx.getBaselineFromProjectEltHandle(IlrSessionHelperEx.java:2759)
    at ilog.rules.teamserver.ejb.service.IlrSessionFacadeUtil.findInElementBranch(IlrSessionFacadeUtil.java:201)
    at ilog.rules.teamserver.ejb.service.IlrSessionFacadeImpl.getElementsFromAggregation(IlrSessionFacadeImpl.java:4489)
    at ilog.rules.teamserver.ejb.service.IlrSessionFacadeImpl.getElementsFromAggregation(IlrSessionFacadeImpl.java:4467)
    at ilog.rules.teamserver.ejb.service.IlrSessionFacadeImpl.getElementsFromAssociation(IlrSessionFacadeImpl.java:2474)
    at sun.reflect.GeneratedMethodAccessor80.invoke(Unknown Source)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:55)
    at java.lang.reflect.Method.invoke(Method.java:508)
    at ilog.rules.teamserver.transaction.IlrTransactionalInvocationHandler.invoke(IlrTransactionalInvocationHandler.java:108)
    at com.sun.proxy.$Proxy146.getElementsFromAssociation(Unknown Source)
```

**Solution:**
If the client needs the parallel execution of test suite, he needs to understand that this can affect the performance and the memory usage. 
Now, with recent versions such as with IF038 on 8.9.1 it is possible to allow for simultaneous execution of the test suite. 
However, this is costly so the maximum number of thread to use for this is controlled by a parameter, default being set to 1.:
Usage example: -Ddecisioncenter.testsuites.threadpool.size=8 
This is a global setting: can be set in the Enterprise Console Installation Settings wizard as decisioncenter.testsuites.threadpool.size 

**3.Test Suite execution hangs, and logs shows IlrBaselineNotFoundException**
```
[11/21/19 18:02:05:182 JST] 0000019a activity      I   elementCommitted
exception.ilog.rules.teamserver.model.IlrBaselineNotFoundException: GBRDR0027E:
The baseline with name 'brm_Branch_24_24_validation_TestSuite_44_44_INTERNAL_1482301243453' was not found in project 'RulesProject'
 at ilog.rules.teamserver.ejb.service.IlrTransactionContext.setBaseline(IlrTransactionContext.java:162)
 at ilog.rules.teamserver.ejb.service.IlrTransactionContext.initWorkingBaseline(IlrTransactionContext.java:85)
 at ilog.rules.teamserver.ejb.service.IlrTransactionContext.<init>(IlrTransactionContext.java:80)
 at ...
```
**Solution:** 
Check that the latest project has been deployed to Decision Center.
Redeploy the project and test again.


**4.Performance issue:**
Running Test Suite can sometime be long.
One of the common reason for this is having in the Scenario File some unordered test on huge list items.

**Solution:**
Check the scenario file in the “Expected Details” to see if there is no unordered list of objects.
If the client is having a huge list of objects, when generating the scenario file, he should select equals (ordered) if the list is known to be ordered


**5.Test suite execution fails with XU related errors.**
In the log
```
Error during test execution
   
ilog.rules.res.session.IlrSessionCreationException: An error occurred while the rule session was created:
com.ibm.rules.res.xu.internal.XUException: XU Client error
com.ibm.rules.res.xu.internal.LocalizedResourceException: GBRXU0001E: The interaction ruleEngine.loadUptodateRuleset has failed
javax.resource.ResourceException: com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
com.ibm.rules.res.xu.internal.XUException: GBRXU0436E: Ruleset parsing work failed.
java.lang.IncompatibleClassChangeError: org.objectweb.asm.ClassVisitor
Caused by: com.ibm.rules.res.xu.internal.XUException: XU Client error
Caused by: com.ibm.rules.res.xu.internal.LocalizedResourceException: GBRXU0001E: The interaction ruleEngine.loadUptodateRuleset has failed
Caused by: javax.resource.ResourceException: com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
Caused by: com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
Caused by: com.ibm.rules.res.xu.internal.XUException: GBRXU0436E: Ruleset parsing work failed.
Caused by: java.lang.IncompatibleClassChangeError: org.objectweb.asm.ClassVisitor

ilog.rules.res.session.IlrSessionCreationException: An error occurred while the rule session was created:
com.ibm.rules.res.xu.internal.XUException: XU Client error
com.ibm.rules.res.xu.internal.LocalizedResourceException: GBRXU0001E: The interaction ruleEngine.loadUptodateRuleset has failed
javax.resource.ResourceException: com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
com.ibm.rules.res.xu.internal.XUException: GBRXU0435E: Failed to create engine manager.
com.ibm.rules.res.xu.internal.XUException: GBRXU0436E: Ruleset parsing work failed.
java.lang.IncompatibleClassChangeError: org.objectweb.asm.ClassVisitor

    at ilog.rules.res.session.IlrPOJOSessionFactory.createStatefulSession(IlrPOJOSessionFactory.java:97)
    at ilog.rules.res.session.impl.IlrSessionFactoryBase.createStatefulSession(IlrSessionFactoryBase.java:158)
    at ilog.rules.res.console.jsf.bean.IlrRulesetTestBean.execute(IlrRulesetTestBean.java:142)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:60)
[…]
Caused by: com.ibm.rules.res.xu.internal.XUException: XU Client error
    at com.ibm.rules.res.xu.client.internal.XUSession.executeOperation(XUSession.java:170)
    at com.ibm.rules.res.xu.client.internal.XURuleEngineSession.executeRuleEngineOperation(XURuleEngineSession.java:60)
    at com.ibm.rules.res.xu.client.internal.XURuleEngineSession.loadUptodateRuleset(XURuleEngineSession.java:65)
    at ilog.rules.res.session.impl.IlrStatefulSessionBase.<init>(IlrStatefulSessionBase.java:95)
    at ilog.rules.res.session.impl.pojo.IlrStatefulSessionPOJO.<init>(IlrStatefulSessionPOJO.java:35)
    at ilog.rules.res.session.IlrPOJOSessionFactory.createStatefulSession(IlrPOJOSessionFactory.java:88)
    ... 44 more
Caused by: com.ibm.rules.res.xu.internal.LocalizedResourceException: GBRXU0001E: The interaction ruleEngine.loadUptodateRuleset has failed
    at ilog.rules.res.xu.cci.IlrXUInteraction.execute(IlrXUInteraction.java:268)
    at com.ibm.rules.res.xu.client.internal.XUSession.executeOperation(XUSession.java:156)
    ... 49 more
```

**Solution:**
Make sure you have checked the “Isolate the Resource Provider” for your XU RES as described in:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.zos.config/topics/tsk_ds_deploy_xu.html

