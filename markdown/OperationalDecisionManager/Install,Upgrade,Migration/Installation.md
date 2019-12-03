Date：2019-11-11

## Overview

This document introduces how to install Operational Decision Manager (ODM) and how to troubleshoot the problems that may happen during the installation.

To use ODM, you must install Decision Center, Decision Server and Rule Designer, and if you want to install Decision Insights, you must have an Advanced License.

## Prerequisites (Optional)

1.Installation Manager: The Installation Manager should be installed first.
2.System requirements: Please check IBM Operational Decision Manager detailed system requirements
https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements
3.License: You need to have an ODM license to install ODM. The license table is below
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/con_inst_licensing.html

Note: For other ODM versions, please check Knowledge Center (KC).

## Component

1.Install ODM locally
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_inst_single_workstation.html
2.Install ODM in multiple workstation
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/con_inst_silent.html
3.Install Designer with an existing Eclipse environment
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_inst_eclipse_ibmprod_intro.html
4.Install Liberty Developer Tools
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_inst_insights_wdt.html
5.Set up Ant
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_setting_up_ant.html

Note: For other ODM versions, please check Knowledge Center (KC).

## Troubleshooting

#### Data Collection

1.Version of Installation Manager installed
2.Components installed and version numbers
3.License type
4.Operating system
5.Installation Manager logs
https://www.ibm.com/support/pages/mustgather-ibm-installation-manager-troubleshooting-logs

#### Typical Problems

1.Compatibility problems
* Problem description example: Can I use Java 7/8 when upgrade to ODM 8.x.x? Upgrade path from current version to JBoss. 
* How to troubleshoot: Check the System Requirements carefully
  - Application Server Compatibility: For JBoss, only EAP version is supported.
  - Java Compatibility: IBM JDK is always recommended.
  
Refer to https://www.ibm.com/support/pages/ibm-operational-decision-manager-detailed-system-requirements

2.Fix list and fix pack download & installation:
* **Problem description example**: What the steps to install fix pack? Where can I get fixpack of ODM 8.X.X?
* **Solution**: Go to Fix Central and download the fixpack. Then install them by Readme.txt file of each fixpack. Customer may have problem about their IBM ID. Fix List link:
https://www.ibm.com/support/pages/fix-list-ibm-operational-decision-manager

3.Disk space problem
* **Problem description**: Available disk space at /opt is insufficient. Total required space is 1.92 GB. Total available space is 120.00 MB.
* **Solution**: Ensure there is enough space on disk.

4.Sample Server related
* **Problem Description**: How to find the installation part of Sample Server when install ODM? How to run Sample Server with WAS or Liberty? How to restore Sample Server?
* **Solution**:
  - Install Sample Server: When you install ODM, choose install Sample Server, a testing environment to use samples and tutorials will be installed. Along with all the sample projects.
  - Restore Sample Server: You can restore the sample server to its initial state, the link is:
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.samples/smp_console_topics/trb_smpserver_restoring.html

5.License Question:
* **Problem description**: How to check license of installed ODM? How to change ODM license without re-installation?
* **Solution**:
  - How to check the License of installed ODM Environment: Using ILMT Tools
https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/con_inst_ilmt_tagging.html
  - How to update the license type of installed ODM Env:
https://www.ibm.com/mysupport/s/question/0D50z00005pewI0CAI/ibm-license-metric-tool-reports-odm-decision-server-as-being-nonproduction?language=zh_CN

6.Problem with compressed product installation files:
* **Problem Description**: Cannot complete the install because one or more required items could not be found in software being installed。
* **Solution**: Ask customer to check that all compressed installation packages were uncompressed successfully. The best practice is asking customer to using 7-zip to unzip the installation files.

7.Privilege problem
* **Problem description**: Cannot install ODM as non-root/non-Administrator user
* **Solution**:
  - Make sure IM is installed as a non-Admin user: https://www.ibm.com/support/knowledgecenter/SSSH27_9.0.0/com.ibm.rational.clearcase.cc_ms_install.doc/topics/r_admin_nonadmin.htm;
  - Make sure the user has read/write permission to ODM installation directory and system temp folder;
  - Install ODM using IM as non-Admin user: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.10.x/com.ibm.odm.distrib.install/topics/tsk_inst_silent.html
  
8.Response File error during silent installation
* **Problem description**: Example:  ERROR [main]                                                   org.eclipse.equinox.log.internal.ExtendedLogReaderServiceFactory safeLogged 
* **Solution**: Ensure set correct parameters when installing ODM in silent mode: https://developer.ibm.com/answers/questions/424515/how-to-install-odm-890-in-silent-mode-in-command-l.html

## Reference (Optional)

1.Known limitations:
2.https://www.ibm.com/support/pages/operational-decision-manager-known-limitations


