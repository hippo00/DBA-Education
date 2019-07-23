# <center> BPM/BAW Installation Fundamentals Education </center>
&nbsp;
BPM/BAW (Business Process Manager/Business Automation Workflow) Fundamentals Education is an overview of BPM/BAW products. This module teaches the basics of installing and troubleshooting BPM/BAW. This module serves as the basis for in-depth education modules on BPM/BAW Installation. 
&nbsp;
### 1. IBM Installation Manager (IIM):
IBM Installation Manager is a tool that you can use to install and maintain your IBM software packages. Wizards guide you through the steps that you must take to install, modify, update, roll back, or uninstall your IBM products. 
IBM Installation Manager is used to install WAS/BPM binary files. 
&ensp;&ensp;&ensp;&ensp;a. How to reinstall Installation Manager without removing installed IBM product 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;http://www-01.ibm.com/support/docview.wss?uid=swg21290142 

&ensp;&ensp;&ensp;&ensp;b. What are the critical directories that you must back up in case of Installation Manager data loss or corruption?
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;http://www-01.ibm.com/support/docview.wss?uid=swg21665878

&ensp;&ensp;&ensp;&ensp;c. Installing packages by using Installation Manager command line tool (imcl) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www.ibm.com/support/knowledgecenter/en/SSDV2W_1.8.1/com.ibm.cic.commandline.doc/topics/t_imcl_install.html

&ensp;&ensp;&ensp;&ensp;d. IM log files &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; https://www.ibm.com/support/knowledgecenter/en/SSVJJU_6.4.0/com.ibm.IBMDS.doc_6.4/c_ig_ibmim_sds_log_files.html

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* the IM log is a xml file you will find it under IM_HOME/data/logs i.e 20180404_1014.xml
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* there are different tags available: 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Info = Green
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Warning = Yellow
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Error = Red

&ensp;&ensp;&ensp;&ensp;e. Using the imcl command to rollback:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/using_imcl_command_line_to_rollback_websphere_application_server_fix_packs?lang=en

&ensp;&ensp;&ensp;&ensp;f. KC link to Rolling back packages by using imcl commands:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www.ibm.com/support/knowledgecenter/en/SSDV2W_1.8.5/com.ibm.cic.commandline.doc/topics/t_imcl_rollingback.html
&nbsp;
### 2. BPM Installation
Each of the IBM Business Process Manager configurations has its own roadmap to guide through installing and configuring that version of the software

&ensp;&ensp;&ensp;&ensp;A. Installation directories for the product and profiles 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/rins_installation_paths.html

&ensp;&ensp;&ensp;&ensp;B. Deprecated and removed features 
Check in the KC for the <b> "Deprecated and removed features"</b> for the specific versions

&ensp;&ensp;&ensp;&ensp;C. BPM Software Requirements: 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Business Process Manager detailed system requirements 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;http://www-01.ibm.com/support/docview.wss?uid=swg27023005
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* IBM Business Process Manager Express detailed system requirements 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www-01.ibm.com/support/docview.wss?uid=swg27023008 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Java compatible matrix 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;http://www-01.ibm.com/support/docview.wss?uid=swg21639640 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* IBM Business Process Manager Tools & Add-Ons detailed system requirements
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www-01.ibm.com/support/docview.wss?uid=swg27023009

&ensp;&ensp;&ensp;&ensp;d. BAW software requirements
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* IBM Business Automation Workflow detailed system requirements
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www-01.ibm.com/support/docview.wss?uid=swg27051102 
&nbsp;
### 3. Troubleshoting the BPM / BAW Installation

&ensp;&ensp;&ensp;&ensp;a.  Installation and profile creation log files: 
&ensp;&ensp;&ensp;&ensp;https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/rins_logfiles.html

&ensp;&ensp;&ensp;&ensp;b. Mustgather installation / upgrade: 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. Ask for the mustgather as described in this technote
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;http://www-01.ibm.com/support/docview.wss?uid=swg21506937 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2. Ask for the versioninfo: 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Exporting a versioninfo from install_root/bin/ using
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* versionInfo -fixpacks -ifixes > versioninfo.txt 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;or
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* versionInfo -long > versioninfo.txt
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3. Check for the following points:
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Is configuration described in the problem description supported? 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Check the software requirement report
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Is there any errors in the problem description or logs? 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Search for the error in RTC or Prosol to check if this is a known issue 

&ensp;&ensp;&ensp;&ensp;c. important files to request/review
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* install_root/logs/* --> general installation log files (BPMConfig) 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Dmgr/properties/service/productDir/* --> configAction log files 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Dmgr/logs/* --> BPMProfileUpgrade, bootstrapProcessServerData, BPMConfig files 

&ensp;&ensp;&ensp;&ensp;d. Successfull Installation
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* When using IM Graphical mode 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Launch the Installation Manager GUI, and verify the installation by going to File > View Installed Packages.

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* When using imcl command 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;./imcl listInstalledPackages | imcl.exe listInstalledPackages 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;The output of this command will display a list indicating which packages this Installation Manager has installed. 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;For example: 

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* When the -log option was used during installation, you can verify that the resulting log file does not contain any errors. 

&ensp;&ensp;&ensp;&ensp;e. Rollback failed

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Most part of the time the problem is:

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. There is no installation history anymore. The customer has a new installation of IM and did not make     a backup of his data repository. 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2. The data repository is in other path, not in the same as the IM_HOME
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3. The data repository is corrupted (in this case only L3 can help) 

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Ask for the versioninfo: Exporting a versioninfo from install_root/bin/ 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;versionInfo -fixpacks -ifixes > versioninfo.txt

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Installation Manager (IM) Saved Files for Rollback:
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Files are saved in the IMShared directory. The default behavior is to save the files for rollback. To view or change this option: 

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Using Graphical mode:  File > Preferences > Files for RollBack > Check or Uncheck "Save Files for RollBack 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;* Using console mode:  imcl -c (from IM_HOME/eclipse/tools ) 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Select "P" 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Select "3" 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Select "1" to save or not to save files for rollback

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;Questions to ask to the customer 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;if can tell you the product installation History. 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;to see the possible rollback versions run the command imcl listInstalledPackages -verbose
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;to see the versions to which the customer can perform a rollback imcl listInstalledPackages –rollbackVersions 
&nbsp;
### 4. iFix Installation:

&ensp;&ensp;&ensp;&ensp;a. the instructions how to install a an ifix is always in the readme file 
&ensp;&ensp;&ensp;&ensp;b. check if the ifix has a prerequisite, if yes inform the customer
&ensp;&ensp;&ensp;&ensp;c. Technote explaining how to install an ifix:
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;https://www-01.ibm.com/support/docview.wss?uid=swg21417656


Exporting a versioninfo from install_root/bin/ checking it for the iFix number is sufficient: 
&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;versionInfo -fixpacks -ifixes > versioninfo.txt 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;or
&ensp;&ensp;&ensp;&ensp;*&ensp;&ensp;versionInfo -long > versioninfo.txt 

