Date:2019-11-25

## Overview

The RPA (Robotic Process Automation) Fundamentals Education is an overview of the different parts of RPA which is built on top of Automation Anywhere. This module teaches the basics of an IBM RPA install, how it differs from a normal AA install, and how to debug issues. 

## Troubleshooting

**IBM Install/Upgrade Scripts:**

When downloading either the installation package from Passport Advantage or an upgrade package from Fix Central, you will see the following files contained in the package:

* An installer or upgrade batch file 
* The setup folder where the AA installer executable is located along with the IBM license file
* A docs folder (only on more recent versions since ~11.0.0.3) containing all of the AA specific documentation that is normally provided with an AA download. This folder is included because normal IBM customers would not have access to those documents on the AA site
* The IBM scripts and localization files contained in the native and resources folders

PLEASE NOTE: Customer should only be running the install/upgrade .bat files when using IBM RPA. If a customer runs the AA installer, that will cause the install to be partially completed with all of the IBM customizations missing. If this happens, you need to perform a reinstall, but luckily if you point to the same databases/repository URL for the AA installer, then no data should be lost.

When the IBM install/upgrade.bat file is run, it will perform several validation checks (such as verifying if you have admin permissions, making sure the correct version of VC++ 2013 is installed, if there is an already installed copy of RPA, etc). After that is done, it will check the license and verify what type of install you want to perform (Express vs Enterprise or Bot Runner vs Bot Creator).

After the checks are completed and the installer knows the license option it will begin the install. At this point, the installer behavior will vary:
* If you are installing or upgrading a Client, it will always perform the client install silently
* If you are installing a Control Room, it will always bring up the AA installer in a GUI window
* If you are upgrading a Control Room, then it will bring up a GUI installer if you selected a Custom install during the initial installation, or it will perform a silent install if you selected an Express install during the initial install

Please note that while the AA installer is running, the cmd window for the IBM RPA install will also be open. This window should not be closed while the AA installer is running in the background, otherwise the IBM customizations will not be added and it will be a partial install.

After the AA installer is done, it is closed down and the IBMer installer will add the IBM RPA customizations. They consist primarily of the following:
* Apply the IBM specific license file that AA requires, automatically applies it, and then hides the AA licensing page
* Copy over the CR help pages
* Copy the IBM text license and SWIDTAG files over to the installation directory 
* Setups the IBM RPA License Metric Service to track the usage (as we are using that instead of the AA licenses)
* Creates an IBM specific uninstaller.bat in the installation directory and disable the AA uninstaller

**Troubleshooting files to collect:**

The installer logs out to the C:\ProgramData\IBM\RPA\logs directory by default and the version files are included in the `C:\ProgramData\IBM\RPA` directory. Always review the installer logs when there is an error on the IBM installer or if it looks like some of the IBM customizations are missing. 
For more in depth analysis, it is good to get a copy of the install/upgrade files to compare against, especially if you suspect there is a defect or one of the prereq checks is failing unexpectedly. 

**Example:** 
A good example if this is if the VC++ 2013 check fails, if you look at the installControlRoom.bat script you can see the specific registry entry it is searching for:
```
set vcinstalled=0
for /f "tokens=1 delims=" %%i in ('"reg query 2>nul HKLM\SOFTWARE\Classes\Installer\Dependencies\{ef6b00ec-13e1-4c25-9064-b2f383cb8412}"') do (
    set vcinstalled=%%i
)
```
That is a specific version of the VC++ 2013 we are searching for, and if you already have an installed copy it may be for the wrong version. Hence getting that registry ID from the installer is a useful way to check what you should be looking for in the registry to confirm if the right version is installed.

**IBM Uninstaller:** 

When installing IBM RPA, it should create an installer in the AA installation directory. If you need to perform an uninstall, you must use this uninstaller. 
The uninstall.bat file will perform the following:
* Remove the IBM RPA License Metric Service
* Remove the Help pages
* Silently uninstall AA by running the AA uninstaller
* Remove the IBM license files
* Cleanup the AA directories
* Delete the IBM RPA specific version file located in the C:\ProgramData\IBM\RPA\ directory

The normal AA uninstaller in the Windows Control Panel should be disabled, but if the customer is somehow able to run it, then the uninstall will be partial as it would miss all of the IBM specific customizations. In that case, if you wish to perform a reinstall, you would need to manually remove any leftover files, otherwise the IBM installer may detect that there is already an IBM RPA installer.


**Rollback/Reinstall steps and notes:**

Please see the AA Installer/Post Install Config page for details first, as for the most part IBM RPA installers do not have any special steps on top of the AA supported ones (outside of making sure you run the IBM installers instead of the AA ones).

The one exception is when trying to roll back to one of the IBM ifix versions. The way you would perform a rollback is to restore the older DB/repository files from before the upgrade and then perform a reinstall of the original version you upgraded from. However, if you originated from an ifix version, then there is no direct installation version. This is due to how IBM packages certain AA versions as only ifixes rather than full releases on Passport Advantage. In comparison, AA normally provides the installation files as well for all versions, hence this is an unusual case that would only appear for an IBM RPA install. 

In these use cases, we should consult with L3 when possible and try and get the rollback improved, but there is a possible workaround. In this case, modify the steps to use a blank database and repository directory. From there, install the most recent base version possible (for example, if you are trying to roll back to 11.0.0.7 ifix001, install 11.0.0.7) and then run the upgrade to the ifix level involved. After the upgrade is completed, then restore the older database and repository directory to get the older configuration back. 

That said this is an untested/theoretical approach, hence we should make sure to get L3 sign off in the future and hopefully at some point get a test case for the process if L3 approves of it.
