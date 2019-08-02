## IBM Business Automation Workflow Product Overview

IBM Business Automation Workflow is software that combines **IBM Business Process Manager (BPM)** and **IBM Case Manager** capabilities in a single integrated workflow solution. It unites information process, and users to provide a 360-degree view of work to help drive more successful business outcomes.

Workflow applications coordinate work between tasks performed by humans and automated tasks to improve daily business operations. Workflow applications have four main components:

- An authoring environment to create and configure the application.
- Frameworks or models for sequencing and delegating work. With Business Automation Workflow, the models can be either structured processes or unstructured cases. You can choose your model based on the pattern of your workflow and not be limited to a case or a process.
- A user experience for interacting with the application. To provide consistent user experiences, standardized workflows can be reused across the organization.
- Administrative tools for optimizing how the application runs, deploying new versions and managing security.

### See how Business Automation Workflow improves the productivity of a new account opening workflow:
https://www.youtube.com/watch?v=LhSFN57J_Ks

<p style="margin-top:1em;">&nbsp;</p>

## IBM Business Automation Workflow Product Architecture:

![image](https://media.github.ibm.com/user/172872/files/76314c80-b44b-11e9-95f6-124e5702c5d4)

### IBM BPM Architecture

<img width="415" alt="image" src="https://media.github.ibm.com/user/77004/files/61ed4100-b3b2-11e9-939a-cdbf3d1b43ff">

### IBM BPM Key Components

**[Authoring tools](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/cbpm_ae.html)**
IBM Process Designer is the primary authoring tool for business processes; use it to efficiently model and test business processes in all editions of the product. An Business Automation Workflow Advanced deployment environment also includes IBM Integration Designer for building services that are self-contained, or that start other existing services (for example, web services, enterprise resource applications, or applications running in CICS and IMS).

**[The Workflow Center repository](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/cbpm_processcenter.html)**
The Workflow Center (aka Process Center) includes a repository for all processes, services, and other assets created in the Process Designer and Integration Designer.

**[Workflow Server and runtime environments](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/cbpm_ps.html)**
Workflow Server (aka Process Server) provides a single runtime environment that can support a range of business processes, service orchestration, and integration capabilities.

**[Business process administration tools](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/cbpm_admintools.html)**
You can use a set of administration tools to accomplish tasks ranging from installing and managing snapshots to administering processes and working with the resources in your IT environment, including of Workflow Center Console (aka Process Center Console), Process Admin Console, Business Performance Admin Console, WAS administrative console, etc.

**[Process Portal](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/processportal_overview.html)**
Process Portal is the user interface that is provided with all editions of Business Automation Workflow for participating in processes. It can be configured for a single Business Automation Workflow system or federated environments that include IBM Process Federation Server. From Process Portal, users can launch processes, dashboards, and startable services, and work on their tasks.

<p style="margin-top:1em;">&nbsp;</p>

## Hands-on Sample Workflow
IBM Workflow Center includes a complete Hiring Sample process application that you can view and run in IBM Process Designer.

The instructions for recreating the sample for yourself are in the Hiring tutorial for Process Designer. See [Hiring tutorial](https://developer.ibm.com/bpm/docs/tutorials/hiring-tutorial/).

[Instructions for running the Hiring Sample process application:](https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/working_with_the_shipped_sample.html)
1. **Hiring Sample Overview:** The Hiring Sample is included with Workflow Center. The sample introduces the features of Process Designer by showing you how to run a sample process.
2. **Managing access to the Hiring Sample process application (for administrators):** Administrators must provide access to the Hiring Sample process application so that users can view and run the process.
3. **Verifying access to the Hiring Sample process application:** If the Hiring Sample process application is not already available in the IBM Workflow Center Console, you must import it.
4. **Opening the Hiring Sample process application:** To begin running the process in IBM Process Desinger.
5. **Changing the Hiring Sample:** Using the Hiring Sample process application to learn the product. Do not use it as a starting point for your own application because changing this process application might cause errors later.
6. **Playing back the Standard HR Open New Position process:** Run the Standard HR Open New Position process in the Inspector view in IBM Process Designer to see the process run step by step.

<p style="margin-top:1em;">&nbsp;</p>

## Recommended Badges

<table border="1px solid #ccc" cellspacing="0" cellpadding="0">
  <tr font-weight: 700; >
    <th width="20%" style="text-align:center;";></th>
    <th style="text-align:center">Business Process Manager</th>
    <th style="text-align:center">Business Automation Workflow</th>
  </tr>
  <tr>
    <td style="background-color:white; text-align:center" >Basic</td>
    <td><center><a href="https://www-03.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=5bf38a9f-066b-4a46-bca0-67a26e5f7344" target="_blank"><img align="middle" src="https://raw.github.ibm.com/dba-support/Picture-Store/master/badge/1564642892239.jpg?token=AAN8x6O6k1vr8nj1acoc1uHj59UaJnOhks5dS9oowA%3D%3D" title="IBM Business Process Manager Introduction" /><br/>IBM Business Process Manager Introduction </a><center></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" style="background-color:white; text-align:center">Intermediate</td>
    <td style="background-color:white"><center><a href="https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=f72abfbd-791f-4d40-89f1-db3bf6c6c490" target="_blank"><img align="middle" src="https://raw.github.ibm.com/dba-support/Picture-Store/master/badge/1564642926808.jpg?token=AAN8x4QggDIwsZTbNn32ApRtCGhCEtlvks5dS9-GwA%3D%3D" title="IBM Business Process Manager Advanced V8.6 Developer" /><br/>IBM Business Process Manager Advanced V8.6 Developer </a><center></td>
    <td style="background-color:white"><center><a href="https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=e88a39cb-cb86-4deb-8692-0b2ba5c1eea0" target="_blank"><img align="middle" src="https://raw.github.ibm.com/dba-support/Picture-Store/master/badge/1564642955446.jpg?token=AAN8x-UVWYYa8_V9v1ws-r4TX_-3pjCtks5dS-CmwA%3D%3D" title="IBM Certified Business Analyst - Blueworks Live and Business Automation Workflow v18" /><br/>IBM Certified Business Analyst - Blueworks Live and Business Automation Workflow v18 </a><center></td>
  </tr>
  <tr>
    <td style="background-color:white"><center><a href="https://www-03.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=fe01c26f-5104-4d0b-89eb-7ee4f1bdeb7d" target="_blank"><img align="middle" src="https://raw.github.ibm.com/dba-support/Picture-Store/master/badge/1564642943006.jpg?token=AAN8x2qANw20_VxXZfTdpIhkFbXODYIEks5dS-HPwA%3D%3D" title="IBM Certified Application Developer using Process Designer - Business Process Manager V8.6" /><br/>IBM Certified Application Developer using Process Designer - Business Process Manager V8.6 </a><center></td>
    <td style="background-color:white"><center><a href="https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=03891df7-04e1-40b9-ba24-813cd8b2909e" target="_blank"><img align="middle" src="https://raw.github.ibm.com/dba-support/Picture-Store/master/badge/1564642970562.jpg?token=AAN8xzJdDqPdu2DB-Rpptfb2UMODDLByks5dS-JjwA%3D%3D" title="IBM Business Automation Workflow V19 Developer" /><br/>IBM Business Automation Workflow V19 Developer</a><center></td>
  </tr>
</table>
