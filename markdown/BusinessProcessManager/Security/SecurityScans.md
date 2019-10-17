Date:2019-10-16

## Overview
Security Scan Fundamentals Education teaches the basics of how to understand and work on reported security scan result issues with IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW). This module serves as the basis for in-depth education modules on BPM/BAW security scan issues. 

## Component
IBM fully discloses all reported and fixed security vulnerabilities in software products, including BPM/BAW. See [IBM Security Vulnerability Management (PSIRT)](https://www.ibm.com/security/secure-engineering/process.html) . Typically, a security vulnerability is fixed on the latest fixpack of all supported releases, and a security bulletin will be published. Along with this publication comes a notification email to all subscribed customers and a blog entry in the [Product Security Incident Response (PSIRT) Blog](https://www.ibm.com/blogs/psirt/) . 

[Running Security AppScan software on IBM Business Process Manager (BPM) and WebSphere Lombardi Edition](https://www.ibm.com/mysupport/s/question/0D50z00005pgjkWCAQ/running-security-appscan-software-on-ibm-business-process-manager-bpm-and-websphere-lombardi-edition?language=en_US)

## Troubleshooting

#### General Guidelines
1.Suggest the following to clients in order to find any listing of known vulnerabilities:
* We strongly recommend clients to keep up to date with fixes for BPM/BAW itself, but also all supporting systems around BPM/BAW, such as WebSphere (WAS), the database, web servers, operating systems, etc. Blog [BPM Security – Keep up to date with security fixes](https://www.ibm.com/community/automation/docs/baw/best-practices-recommendations/security-topology-installation-configuration-migration/good-practice-resource-secure-ibm-bpm-environment/bpm-security-keep-date-security-fixes/) describes how to find and subscribe for IBM BPM security fix notifications.

2.Visit the IBM support portal to see published security bulletins prior to their subscription.
* BPM: https://www.ibm.com/mysupport/s/ibm-community-support-search-results?language=en_US&q=security+bulletins+business+process+manager&page=1&sort=0
* BAW: https://www.ibm.com/mysupport/s/ibm-community-support-search-results?language=en_US&q=security+bulletins+business+automation+workflow&page=1&sort=0 

3.Understand false positive URLs versus actual vulnerabilities.
* [Interpreting IBM Security AppScan findings for IBM Business Process Manager](https://www.ibm.com/support/pages/interpreting-ibm-security-appscan-findings-ibm-business-process-manager-1)
* [Interpreting IBM Security AppScan findings for IBM Business Automation Workflow](https://www.ibm.com/support/pages/interpreting-ibm-security-appscan-findings-ibm-business-automation-workflow)

4.Check [IHS Vulnerability reports](http://publib.boulder.ibm.com/httpserv/ihsdiag/vulnerabilities.html#improper-input-handling-of-the-http-host-header-improper-input). 

5.Check [Security-hardening properties](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.ebpm.doc/topics/rsec_harden_properties.html) in BPM Knowledge Center for BPM configuration settings to mitigate the following web application threats.
* Cross-site request forgery (CSRF)
* Network sniffing
* Clickjacking
* Uploading malicious documents

6.Search by CVEID or vulnerability key word in [IBM Product Security Incident Response (PSIRT) Blog](https://www.ibm.com/blogs/psirt/) . 

7.Search for similar issues by vulnerability key word in Watson Search and RTC. 

8.If no existing information can be found for the reported security vulnerability, then we can do the following: 
* Review security report details.
* Determine L2 pillar team ownership based on the correlative URL. 
* Data collection: 
   - Client’s understanding about the reported vulnerability. 
   - Detailed BPM version info by running the command from <BPM_install_root>/bin: versionInfo -fixpacks -ifixes > versioninfo.txt 
   - Client-side network data and server logs with issue recreated. 
      * Client-side network data: 
        + HAR file captured through Firefox & Google Chrome Developer tools (F12) Network tab. 
        + XML file captured through IE Developer Tools (F12) Network tab. 
      * Server logs:
        - install_root/profiles/profile_name/logs/server_name 
        - nstall_root/profiles/profile_name/logs/ffdc 
      * Required data for issue replication in lab: 
        - Sample TWX file without external dependency. 
        - Recreation steps. 
        - Any tooling used for the issue recreation. 
        - Web browser information (Is it happened with specific web browser or all web browsers?) 
        
 9.L2 to try issue replication in lab if possible. 
 
 10.Engage corresponding L3 team for comments. 
 
 #### Known Issue Reference
 1.Unrestricted File Upload 
 * We can restrict file types for upload and modify mime types for download, refer to APAR is [JR50092](http://www-01.ibm.com/support/docview.wss?uid=swg1JR50092). 
 
 2.Host Header Injection 
 * Host Header Injection can be configured in HTTP server (this exact sample is WAS code, which we cannot influence. It may be a good idea to also involve WAS SEC L3. 
 
 3.Clear Text Password Submission
 * The j_username and j_password are part of the JEE spec. The current WAS behavior is a widely accepted standard. Authentication schemes can be customized, including password-free authentication approaches. Refer to [Configuring third-party authentication products](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.imuc.doc/topics/tsec_thirdpartyauthentication.html). 
 
 4.Autocomplete Enabled 
 * This is current behavior for login pages. With User Management Service, autocomplete is turned off. Refer to [Installing and configuring the User Management Service.](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.main.doc/topics/enabling_ums.html) 
 * If we want to change this, it would be "next release" only. 
 
 5.Missing Security Headers 
 * See Security.StrictTransportSecurityHeaderValue in [Security-hardening properties](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.imuc.doc/topics/rsec_harden_properties.html).
 
 6.Options Method Enabled 
 * Options is enabled by intent as we support CORS for REST. Can be configured with  Security.AllowedHttpMethods mentioned in [Security-hardening properties](https://www.ibm.com/support/knowledgecenter/en/SS8JB4/com.ibm.wbpm.imuc.doc/topics/rsec_harden_properties.html). 
 
 7.Cookie Flag Missing 
 * Secure flag is enforced for HTTPS URLs in current releases, see APAR [JR58492](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58492). 
 
8.Input Limit Missing 
* Input elements must not be restricted in size when longer values are valid. BPM does not restrict the size of a user search string. 

9.Platform Version Disclosed 
* See com.ibm.ws.webcontainer.disablexPoweredBy in [Web container custom properties](https://www.ibm.com/support/knowledgecenter/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/rweb_custom_props.html). 
