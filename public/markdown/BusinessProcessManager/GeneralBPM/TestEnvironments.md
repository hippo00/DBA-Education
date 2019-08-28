
## Summary
This section provides links and information about building and maintaining software testing environments for training and for case handling. For case handling, always use an IBM-approved environment and properly secure and maintain your environment to ensure security compliance.

## Contents

* Test Environments for New IBMers on Day 1
* Test Environments for Training
* Test Environments for Cases

---

## Test Environments for New IBMers on Day 1

Welcome to IBM! As a new IBMer, it may take time to setup your user accounts, so here are some quick ways to get started now. Find your product below, check the overview, and explore the test environment.

<p style="margin-top:1em;">&nbsp;</p>

### Business Process Manager (BPM) and Business Automation Workflow (BAW)

* BPM Overview: https://www.ibm.com/support/knowledgecenter/SSFTBX_8.5.7/com.ibm.wbpm.main.doc/topics/ibmbmp_overview.html

* BAW Overview: https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/overview.html

* Test Environment: *(Need local BAW vm due to w3 ID requirements)*

<p style="margin-top:1em;">&nbsp;</p>

### Operation Decision Manager (ODM)

* ODM Overview: https://www.ibm.com/products/operational-decision-manager

* ODM Test Environment *(Need local BAW vm due to w3 ID requirements)*


<p style="margin-top:1em;">&nbsp;</p>

### Blueworks Live (BWL)

* BWL Overview: https://www.ibm.com/products/blueworkslive

* Blueworks Live: :https://www.blueworkslive.com/sLogin.html


<p style="margin-top:1em;">&nbsp;</p>

### Robotic Process Automation (RPA)

* RPA Overview: https://www.ibm.com/automation/software/rpa

* RPA Test Environment *(Need local BAW vm due to w3 ID requirements)*

---

## Virtualization Basics

VMware Virtualization 101: https://yourlearning.ibm.com/#activity/URL-6LDY9BATAQC

Docker and Containers: https://yourlearning.ibm.com/#activity/URL-TE77BE4006052:BE387B81-043C-4B0D-8CAE-25E5F47E8F88


<p style="margin-top:1em;">&nbsp;</p>

For additional learning, search Your Learning: https://yourlearning.ibm.com/


<p style="margin-top:1em;">&nbsp;</p>

This is the end of the Day 1 section. To continue to the next sections, you may need to wait for your IBM w3 ID or wait for additional security access requests.

---

## Workstation Software

To access different remote servers and test environments, setup the necessary software on your laptop or workstation.

<p style="margin-top:1em;">&nbsp;</p>

### Apple MacOS

* Mac@IBM: In MacOS, open the Mac@IBM App Store.

* Microsoft Remote Desktop: Install from Apple App Store (Install official Microsoft app)

* SSH: In MacOS, open Terminal to use SSH to connect to remote hosts.

* VNC: Currently, there are no IBM officially supported VNC options.


<p style="margin-top:1em;">&nbsp;</p>

### Microsoft Windows

* PC@IBM: http://w3-01.ibm.com/download/standardsoftware/PC/lang_en/issiCatalogPC.html

* PuTTY: In PC@IBM, search for "PuTTY"

* Microsoft Remote Desktop (RDP): In Microsoft Windows, Start > type "mstsc" [Enter]

* VNC: Currently, there are no IBM officially supported VNC options.


<p style="margin-top:1em;">&nbsp;</p>

### Redhat Linux

* Linux@IBM: https://w3-connections.ibm.com/communities/service/html/communitystart?communityUuid=801cf8e1-364a-48ec-ac2d-aa091376fff6

* Software: You can use the Linux graphical user interface to install software or use the yum package manager in the terminal. The IBM Linux OpenClient has most of the software you will need pre-installed.

* SSH: Use the terminal.

* VNC: Currently, there are no IBM officially supported VNC options.

---

## Test Environments for Training

You can use the following resources to create test environments for learning or for case testing, but do not copy or import any client data into these enviornments. For handling cases with client information, use Salesforce and Castle systems.

### Blue Demos

* https://ibm.ent.box.com/v/DBADaL19-0GettingStarted

* https://bluedemos.com/search

### Fyre

(2019-08-28)

The onboarding process did change as announced in the #fyre-announcemnents Slack channel:
https://ibm-cloud.slack.com/archives/C0ZF8PWBY/p1566847241033700
 
Fyre onboarding: The process has now been streamlined.  The new process is:

1)  The new user requests onboarding at https://fyre.ibm.com and is quickly (almost immediate) onboarded and sent a welcome email describing the next steps to take.

2)  They go to https://fyre.ibm.com again which lands them in their account settings where they set their default password and request access to a resource group.

3) The respective group owners receive an email asking them to approve or reject access to the requested group.All Fyre onboard requests made in 2H2019 up to August 23rd have been onboarded and need to proceed to step 2.Any requests older than 2h2019 have been archived and those users can simply reapply as per the steps above.

### Ring Cloud

*(Can we deploy Klaus' Docker solution on Ring Cloud fyre.ibm.com?)*

For team members located in Beijing, you can use the Ring Cloud.

1. Ensure you have your IBM w3 ID.

2. Request access to the Beijing Lab firewall. (Need details.)

3. Authenticate to the Beijing Lab firewall.

4. Login to https://itaas.cn.ibm.com/

5. Contact your team lead or manager to request team resources in the Ring Cloud. Estimate a minimum of 4 CPU, 16GB RAM, 100GB disk per test server.

6. Create a virtual machine, Linux or Microsoft Windows.

7. Download installation software.

* 7a. Primary (Linux example) > mount -t nfs 9.111.141.56:/dba-share1 /mnt/dba-share1

* 7a. Primary (Windows example) C:\> net use s: \\9.111.141.56\dba-share1 /user:dba-share

* To get Windows credentials, run C:\> net view 9.111.141.56

* 7b. Alternate: https://w3-03.ibm.com/software/xl/download/ticket.wss, Example search, "IBM Business Process Manager 8.6 Windows" or search for the Assembly number.


<p style="margin-top:1em;">&nbsp;</p>

### Local workstation with Docker

If you are familiar with Docker, you can setup a local test environment. See the following gitHub repository for details.

https://github.ibm.com/klaus-ulrich/bpm


<p style="margin-top:1em;">&nbsp;</p>

### IBM Cloud (CIO internal)
https://console.w3ibm.bluemix.net/


<p style="margin-top:1em;">&nbsp;</p>

### IBM Cloud (Public)
https://console.ng.bluemix.net/

---

## Test Environments for Cases

Do not copy case information outside of the official case handling IBM systems, Salesforce for Support (Cognitive Support Platform) and Castle. These are special systems designed to comply with all security requirments.

Castle secure enviroment for support cases: https://castle1.fyre.ibm.com/

See the Castle website for onboarding and use details.

