# <center> BPM/BAW Installation Fundamentals Education </center>
&nbsp;
BPM/BAW (Business Process Manager/Business Automation Workflow) Fundamentals Education is an overview of BPM/BAW products. This module teaches the basics of installing and troubleshooting BPM/BAW. This module serves as the basis for in-depth education modules on BPM/BAW Installation. 
&nbsp;
### 1. IBM Installation Manager (IIM):
IBM Installation Manager is a tool that you can use to install and maintain your IBM software packages. Wizards guide you through the steps that you must take to install, modify, update, roll back, or uninstall your IBM products. 
IBM Installation Manager is used to install WAS/BPM binary files. 
&ensp;&ensp;&ensp;&ensp;A. How to reinstall Installation Manager without removing installed IBM product 
      http://www-01.ibm.com/support/docview.wss?uid=swg21290142 

   2. What are the critical directories that you must back up in case of Installation Manager data loss or corruption?
      http://www-01.ibm.com/support/docview.wss?uid=swg21665878

   3. Installing packages by using Installation Manager command line tool (imcl) 
      https://www.ibm.com/support/knowledgecenter/en/SSDV2W_1.8.1/com.ibm.cic.commandline.doc/topics/t_imcl_install.html

   4. IM log files 
        https://www.ibm.com/support/knowledgecenter/en/SSVJJU_6.4.0/com.ibm.IBMDS.doc_6.4/c_ig_ibmim_sds_log_files.html

        * the IM log is a xml file you will find it under IM_HOME/data/logs i.e 20180404_1014.xml
        * there are different tags available: 
            * Info = Green
            * Warning = Yellow
            * Error = Red

   5. Using the imcl command to rollback:
      https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/using_imcl_command_line_to_rollback_websphere_application_server_fix_packs?lang=en

   6. KC link to Rolling back packages by using imcl commands:
      https://www.ibm.com/support/knowledgecenter/en/SSDV2W_1.8.5/com.ibm.cic.commandline.doc/topics/t_imcl_rollingback.html
&nbsp;
### 2. BPM Installation
Each of the IBM Business Process Manager configurations has its own roadmap to guide through installing and configuring that version of the software

1. Installation directories for the product and profiles 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.imuc.doc/topics/rins_installation_paths.html

2. Deprecated and removed features 
Check in the KC for the <b> "Deprecated and removed features"</b> for the specific versions

3. BPM Software Requirements: 
    * Business Process Manager detailed system requirements 
    http://www-01.ibm.com/support/docview.wss?uid=swg27023005
    * IBM Business Process Manager Express detailed system requirements 
    https://www-01.ibm.com/support/docview.wss?uid=swg27023008 
    * Java compatible matrix 
    http://www-01.ibm.com/support/docview.wss?uid=swg21639640 
    * IBM Business Process Manager Tools & Add-Ons detailed system requirements
    https://www-01.ibm.com/support/docview.wss?uid=swg27023009

4. BAW software requirements
    * IBM Business Automation Workflow detailed system requirements
    https://www-01.ibm.com/support/docview.wss?uid=swg27051102 
&nbsp;
### 3. Troubleshoting the BPM / BAW Installation

1.  Installation and profile creation log files: 
https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/rins_logfiles.html

2. Mustgather installation / upgrade: 
    1. Ask for the mustgather as described in this technote
    http://www-01.ibm.com/support/docview.wss?uid=swg21506937 
    2. Ask for the versioninfo: 
       Exporting a versioninfo from install_root/bin/ using
        * versionInfo -fixpacks -ifixes > versioninfo.txt 
        or
        * versionInfo -long > versioninfo.txt
    3. Check for the following points:
        * Is configuration described in the problem description supported? 
            Check the software requirement report
        * Is there any errors in the problem description or logs? 
            Search for the error in RTC or Prosol to check if this is a known issue 

3. important files to request/review
    * install_root/logs/* --> general installation log files (BPMConfig) 
    * Dmgr/properties/service/productDir/* --> configAction log files 
    * Dmgr/logs/* --> BPMProfileUpgrade, bootstrapProcessServerData, BPMConfig files 

4. Successfull Installation
    * When using IM Graphical mode 
      Launch the Installation Manager GUI, and verify the installation by going to File > View Installed Packages.

    * When using imcl command 
      ./imcl listInstalledPackages | imcl.exe listInstalledPackages 
      The output of this command will display a list indicating which packages this Installation Manager has installed. 
      For example: 

    * When the -log option was used during installation, you can verify that the resulting log file does not contain any errors. 

5. Rollback failed

    Most part of the time the problem is:

    1. There is no installation history anymore. The customer has a new installation of IM and did not make     a backup of his data repository. 
    2. The data repository is in other path, not in the same as the IM_HOME
    3. The data repository is corrupted (in this case only L3 can help) 

    * Ask for the versioninfo: Exporting a versioninfo from install_root/bin/ 
        versionInfo -fixpacks -ifixes > versioninfo.txt

    * Installation Manager (IM) Saved Files for Rollback:
        Files are saved in the IMShared directory. The default behavior is to save the files for rollback. To view or change this option: 

        * Using Graphical mode:  File > Preferences > Files for RollBack > Check or Uncheck "Save Files for RollBack 
        * Using console mode:  imcl -c (from IM_HOME/eclipse/tools ) 
        Select "P" 
        Select "3" 
        Select "1" to save or not to save files for rollback

    * Questions to ask to the customer 
        * if can tell you the product installation History. 
        * to see the possible rollback versions run the command imcl listInstalledPackages -verbose
        * to see the versions to which the customer can perform a rollback imcl listInstalledPackages –rollbackVersions 
&nbsp;
### 4. iFix Installation:

1. the instructions how to install a an ifix is always in the readme file 
2. check if the ifix has a prerequisite, if yes inform the customer
3. Technote explaining how to install an ifix:
    https://www-01.ibm.com/support/docview.wss?uid=swg21417656


Exporting a versioninfo from install_root/bin/ checking it for the iFix number is sufficient: 
   * versionInfo -fixpacks -ifixes > versioninfo.txt 
     or
   * versionInfo -long > versioninfo.txt 

