Date:2019-12-24

## Overview

This module teaches the basics of Business Process Choreographer (BPC) which consists of two components. The Business Flow Manager is responsible for running business processes, while human tasks run within the Human Task Manager. At the end of this module, you should be able to understand the architecture of BPC, the interaction of the different components and of course the troubleshooting of BPC related issues.

## Components

1.Business process choreographer overview
https://mediacenter.ibm.com/media/Business+process+choreographer+overview/0_xvgok8l9 This video gives a great overview about the architecture of BPC and the different components, so this is a good starting point for BPC education.

2.BPC and Human Task intro by Hari
https://ibm.ent.box.com/file/289981835809
This video is more a practical version of the first version. To be a bit more precise, the different components (Microflow, Macroflows, Integration Designer, BPCExplorer, etc.) are introduced based on example demonstrations by the presenter.

3.Business Process Choreographer Samples & Tutorials
https://publib.boulder.ibm.com/bpcsamp/v6r0/index.html These samples demonstrate and explain the features of Business Process Choreographer. They help you to develop your own business processes and human tasks. Documentation, the source code, and an enterprise application is provided for each sample. After you have configured your system, you can run the samples on your system.

4.TechShare March 13 BPC2 Serhad
http://ausgsa.ibm.com/projects/b/bpm_support/EducationSessions/BPM%20Runtime/TechShare/March%2013%20-%20BPC2%20-%20Serhad.wmv As already mentioned, the BPC contains Business Flow Manager and Human Task Manager. The core of these managers are the corresponding process and human task engines. For instance, the process engine ensures the execution and navigation of process instances. Consequently, if there is an execution or navigation error of process instances, the logs of the process engine must be analyzed. This video is a detailed presentation of the internals of the engine, e.g. how it executes process instances internally, and how it ensures the navigation. In addition, it also provides a best practice how to analyze engine related logs in case of an error, so this video also is included in the troubleshooting section.

5.BPC Security/ Staff assignment https://ibm.ent.box.com/file/195759870602
Process instances must have a security check to control access, for reading, for updating, and for accessing stored instance data. This document describes in detail how the security is configured in BPEL processes.

6.BPEL Fault Handling & Compensation https://ibm.ent.box.com/file/195759604403
Good error management is crucial for any application. This document describes error handling in different scenarios.

## Troubleshooting

1.BPC Database Internal https://ibm.ent.box.com/file/195759874952
This presentation shows the relevant internal structure of the BPC database and the most common problem source area and pitfalls.

2.BPEL Engine Internal https://ibm.ent.box.com/file/195760153795
This presentation goes into the internal details about the BPEL Engine and explains how to interpret traces to identify the navigation steps of a process instance and to identify the corresponding executed steps in the BPEL Source code (PI File from the IBM  Integration Design)

3.Business Process Fundamentals https://ibm.ent.box.com/file/195760155723
This document describes the general structure of the BPEL and indicates the most common pitfalls in development.

4.https://www.ibm.com/developerworks/websphere/library/techarticles/1005_fastovets/1005_fastovets.html Usually the root cause of performance issues is database related. This technical article is a troubleshooting guide for WebSphere Process Server deadlocks and timeouts. Nevertheless, you can also consider this article also as a part of BPC basic education section, because this article not only describes the troubleshooting approach but also describes in combination with BPC engine how deadlocks and timeouts occur. To say it in other words, after this article you will also understand the interaction between BPC and the navigation database much better.


#### Data Collection

1.Mustgather documentation https://www.ibm.com/support/pages/collect-troubleshooting-data-business-process-choreographer-problems-ibm-business-process-manager-bpm-or-websphere-process-server-wps 

2.Since BPC lives on the database, it is important to know what it is stored in it, at least as a summary view of the most important components. In the BPC Database Internal https://ibm.ent.box.com/file/195759874952 document, mentioned in the previous section, there are some very useful SQL statements to help collect such summaries. In case of problems with the BPC DB, always start by collecting the output of those statements.

3.Collecting WPS Trace https://ibm.ent.box.com/file/195760281037 
This document describe how to set the traces and the meaning of the different parameters

#### Data Analysis

1.https://ibm.ent.box.com/folder/23577123210 This video and the corresponding presentation deals with issues for weekend support. To be a bit more precise, it deals with upcoming issues which are must be considered as a System Down or at least a high number of end user are affected. The presenter gives an introduction to these possible issues and also advice how to fix them.

2.https://ibm.ent.box.com/folder/24098959730 The most difficult and urgent issues are performance related issue. This video and material deals with BPC performance analysis in general. It shows the possible bottlenecks of the BPC, e.g. database, runtime etc. After this video you should partly be able to narrow down the performance issue hopefully to one possible bottleneck.

3.http://ausgsa.ibm.com/projects/b/bpm_support/EducationSessions/BPM%20Runtime/TechShare/March%2013%20-%20BPC2%20-%20Serhad.wmv As already mentioned, the BPC contains Business Flow Manager and Human Task Manager. The core of these managers are the corresponding process and human task engines. For instance, the process engine ensures the execution and navigation of process instances. Consequently, if there is an execution or navigation error of process instances, the logs of the process engine must be analyzed. This video is a detailed presentation of the internals of the engine, e.g. how it executes process instances internally and how it ensures the navigation. In addition, it also provides a best practice how to analyze engine related logs in case of an error.

4.Reading of WPS Traces https://ibm.ent.box.com/file/195760193727
This document describes how to read collected traces.
