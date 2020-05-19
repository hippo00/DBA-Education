
## Summary
This section provides links and information about building and maintaining software testing environments for training and for case handling. For case handling, always use an IBM-approved environment and properly secure and maintain your environment to ensure security compliance.

Please send feedback to <a href="mailto:enricom@cn.ibm.com?subject=IBadges%20-%20Test%20Environments">enricom@cn.ibm.com</a>.

## Contents
* <a href="#day1">Test Environments for New IBMers on Day 1</a>
* <a href="#virtualization">Virtualization Basics</a>
* <a href="#workstation">Workstation Software</a>
* <a href="#cases">Test Environments for Cases - Use Castle</a>
* <a href="#training">Test Environments for Training (everything else)</a>

---

<a name="day1"></a>
## Test Environments for New IBMers on Day 1

Welcome to IBM! As a new IBMer, it may take time to setup your user accounts, so here are some quick ways to get started now. Find your product below, check the overview, and explore the test environment. Work with your team lead or onboarding buddy to assist with setup and access.

<p style="margin-top:1em;">&nbsp;</p>

### Business Process Manager (BPM) and Business Automation Workflow (BAW)

* BPM Overview: https://www.ibm.com/support/knowledgecenter/SSFTBX_8.5.7/com.ibm.wbpm.main.doc/topics/ibmbmp_overview.html

* BAW Overview: https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.workflow.main.doc/topics/overview.html

* Test Environment: *(Need local BAW virtual machine due to w3 ID requirements)*

<p style="margin-top:1em;">&nbsp;</p>

### Operation Decision Manager (ODM)

* ODM Overview: https://www.ibm.com/products/operational-decision-manager

* ODM Test Environment *(Need local BAW virtual machine due to w3 ID requirements)*


<p style="margin-top:1em;">&nbsp;</p>

### Blueworks Live (BWL)

* BWL Overview: https://www.ibm.com/products/blueworkslive

* Blueworks Live: :https://www.blueworkslive.com/sLogin.html


<p style="margin-top:1em;">&nbsp;</p>

### Robotic Process Automation (RPA)

* RPA Overview: https://www.ibm.com/automation/software/rpa

* RPA Test Environment *(Need local BAW virtual machine due to w3 ID requirements)*

<p style="margin-top:1em;">&nbsp;</p>

This is the end of the Day 1 section. To continue to the next sections, you may need to wait for your IBM w3 ID or wait for additional security access requests.

---

<a name="virtualization"></a>
## Virtualization Basics

VMware Virtualization 101: https://yourlearning.ibm.com/#activity/URL-6LDY9BATAQC

Docker and Containers: https://yourlearning.ibm.com/#activity/URL-TE77BE4006052:BE387B81-043C-4B0D-8CAE-25E5F47E8F88

Red Hat OpenShift 101: https://yourlearning.ibm.com/#activity/URL-1FC0F699E132

<p style="margin-top:1em;">&nbsp;</p>

For additional learning, search Your Learning: https://yourlearning.ibm.com/

---

<a name="workstation"></a>
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

<a name="cases"></a>
## Test Environments for Cases

Do not copy case information outside of the official case handling IBM systems, Salesforce for Support (Cognitive Support Platform) and Castle. These are special systems designed to comply with all security requirments.

Castle secure enviroment for support cases: https://castle1.fyre.ibm.com/

See the Castle website for onboarding and use details.

---

<a name="training"></a>
## Test Environments for Training - No Client Data Here!

You can use the following resources to create test environments for learning or for case testing, but do not copy or import any client data into these enviornments. For handling cases with client information, use Salesforce and Castle systems.

### Docker images for BAW 19.0.0.3 (2019-12-19, Klaus)  
You can use to quickly create a BAW test server on Castle and Fyre or on your local machine (Mac and Linux currently working).  
  
Please have a look at https://github.ibm.com/klaus-ulrich/bpm#bpm-and-baw-on-docker-for-castle-and-fyre for all the details needed to get started with this approach.  
  
The wiki space https://github.ibm.com/klaus-ulrich/bpm/wiki has some additional infos and links to previous presentations with recordings.  
  
If anything is not working as described/expected, feel free to open a github issue on https://github.ibm.com/klaus-ulrich/bpm/issues  
  
I have installed a BAW 19.0.0.3 test environment on Fyre, which is connected to a BAI environment running on OpenShift. You can use/access this environment as a playground. 
  
Please have a look at https://github.ibm.com/klaus-ulrich/openshift/wiki/BAW-and-BAI-Test-Server for further details.  


### BAI on OpenShift (2019-09, Klaus)

https://github.ibm.com/klaus-ulrich/openshift

<p style="margin-top:1em;">&nbsp;</p>


### Install a private Docker Registry with a Web admin interface (2019-09, Klaus)

https://github.ibm.com/klaus-ulrich/registry

<p style="margin-top:1em;">&nbsp;</p>


### Local workstation with Docker (2019-09, Klaus)

https://github.ibm.com/klaus-ulrich/bpm

<p style="margin-top:1em;">&nbsp;</p>


### Fyre (2019-09)

Fyre.ibm.com (currently at capacity, but you can submit your request for onboarding.)  
https://fyre.ibm.com/

Fyre Help  
Fyre can be used by a developer to deploy individual VMs (we call them "Embers") or sets of VMs (which we call "Stacks"). Fyre can also deploy clusters of baremetal systems on various types of hardware.  
https://fyre.ibm.com/help  

Slack: #fyre-announcements


<p style="margin-top:1em;">&nbsp;</p>


### Ring Cloud + Minishift (2019-09)

If you want a small Openshift test environment, then you can try Minishift. Although not efficient, it is possible to install Minishift on top of a virtual machine in the Ring Cloud, so you do not need to install any extra software on your laptop.

<a href="https://docs.okd.io/latest/minishift/index.html" target="_blank">Minishift Home</a>

Genral Instructions:

1. Create a <a href="https://itaas.cn.ibm.com/" target="_blank">Ring Cloud</a> virtual machine.

2. Submit a <a href="https://oneticket.rtp.raleigh.ibm.com/OneTicket/frontend/mainpage/index.html#!/login" target="_blank">OneTicket</a> request to enable VT/VX on the virtual machine. Requires virtual machine to be shutdown.

3. <a href="https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html#setting-up-virtualbox-driver" target="_blank">Install Virtual Box</a>.

4. <a href="https://docs.okd.io/latest/minishift/getting-started/installing.html" target="_blank"></a>
<a href="" target="_blank">Install Minishift</a>.

<p style="margin-top:1em;">&nbsp;</p>


### Ring Cloud (2019-09)

For team members located in Beijing, you can use the Ring Cloud.

Step 1) Ensure you have your IBM w3 ID.

Step 2) Login to https://itaas.cn.ibm.com/

Step 3) Contact your team lead or manager to request team resources in the Ring Cloud. Estimate a minimum of 4 CPU, 16GB RAM, 100GB disk per test server.

Step 4) Create a virtual machine, Linux or Microsoft Windows.

Step 5) Download your desired IBM product installation software.

Step 5a) Primary (Linux example) > mount -t nfs 9.111.141.56:/dba-share1 /mnt/dba-share1

Step 5a) Primary (Windows example) C:\> net use s: \\9.111.141.56\dba-share1 /user:dba-share<br>
To get Windows credentials for \\9.111.141.56\dba-share1, run C:\> net view 9.111.141.56

Step 5b) Alternate: https://w3-03.ibm.com/software/xl/download/ticket.wss, Example search, "IBM Business Process Manager 8.6 Windows" or search for the Assembly number.

<p style="margin-top:1em;">&nbsp;</p>


### Blue Demos (2019-09)

* https://ibm.ent.box.com/v/DBADaL19-0GettingStarted

* https://bluedemos.com/search

<p style="margin-top:1em;">&nbsp;</p>

### IBM Cloud (CIO internal) (2019-09)
https://console.w3ibm.bluemix.net/


<p style="margin-top:1em;">&nbsp;</p>

### IBM Cloud (Public) (2019-09)
https://console.ng.bluemix.net/

---
