Date:2020-01-16

## Overview

The RPA (Robotic Process Automation) Fundamentals Education is an overview of the different parts of RPA which is built on top of Automation Anywhere. This module teaches the basics of the AA Client and Control Room connectivity and how they interact. 

Please note that since the client is going to greatly change in A2019, this information may be out of date shortly

## Prerequisites

1.Please see the Autologin section for the Control Room initiated connections to the Client

## Component

1.Initial Connection to Control Room from Client
2.Handling Multiple Devices and Users
3.Token Refresh

## Troubleshooting

**Initial Connections to Control Room from Client**

When the AA Client is started up, it will have a login window that you need to fill out in order to [Connect from the Client](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/bot-creator/getting-started-with-aa/Connect-from-client.html). You will need to provide the following information to connect to the Control Room:
* The Control Room URL
* The authentication type

Based on the authentication type, you may need to also provide a user/password into the AA Client or a SSO page that pops up. Once that information is added, when you hit connect the Client will sent out a HTTP call to connect to the Control Room to log into it.

Please note if you are connecting via HTTPS, if the Control Room is using a self-signed certificate you need to make sure to import the certificate into Windows as well. Otherwise, you may be SSL errors during connection.

#### Data Collection and Analysis

The error messages thrown by the Client are not very descriptive and may point to many different potential causes from the [same error message](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-client/faqs/troubleshooting-information/client-login-errors.html). Thus, the general check list of what to look into is this:

1.Make sure the Control Room URL is accessible and can be logged in by the user in question from the Client system in a web browser
2.Verify that you are logging into the Control Room with a user that has Bot Runner or Bot Creator permissions allocated to them
3.Check on the SSL settings if HTTPS is being used
4.See if the user has logged on from other devices (see next section for further details)
5.Collect a Fiddler capture to see the server-side response
6.Check on the WebCR_UserManagement.log file from the server side if Fiddler indicates an error coming from the server or the AAClientService.log if Fiddler appears to show a client-side failure

Hence, the data you would want to look at would be the Fiddler capture, WebCR_UserManagement.log, and ClientService.log in particular.

**Handling Multiple Devices and Control Rooms**

There are limits to logging into the Control Room from different devices (ie, different machines with the AA Client installer) from the same user. This is due to the IBM RPA users being treated with as floating user licenses. The AA side documentation on the floating user licenses seems to have been lost when moving to their new support portal, so it is especially important to watch out for this type of issue.

The concept of a floating user license is that a particular user can log into multiple different clients. However, the user can only log into one at a time and the OS user needs to be identical between the different clients. Hence it is designed for an Active Directory style approach in particular and would be problematic to implement otherwise.

What happens is that when you log into the Control Room for the first time from a Client, the Control Room will put in an entry into the Control Room database’s DEVICES DB table with the following key data:
* OS user
* AA user ID
* Device Name
* IP Address
* Application Path

If you log onto a different device with the same user, the Control Room will check the DEVICES DB table. First, it will check if the AA user ID is already being used by another device. If it is already being used, it will then check to see if the OS user is identical or not. If it is not, the Control Room will fail the user login. If the OS user is identical, it will check to see if that other device is already logged in, or if the user is logged out. If the user is still logged into the other device, it will also fail the login.

This means that unless you are using active directory, chances are that you will only be able to log into a single client for a particular user. If there is a need to change out the device a user is logged into, a good workaround would be to delete the current user in the Control Room and recreate it. That would generate a new AA user ID and allow for a new client to be used. Please note that is more of a one off/workaround and should not be recommended for wide scale usage.

In addition, there are also issues if you try to connect to two different Control Rooms from the same Client. This will cause the client side to store two different session tokens and result in the user being [automatically logged out](https://www.ibm.com/mysupport/s/question/0D50z000062l4JTCAY/why-does-my-rpa-client-disconnect-from-the-rpa-control-room-after-5-minutes?language=en_US). Customer should not be using connecting to multiple Control Rooms from the same client, but you can work around the issue in a one-off scenario by deleting the UsersSessionData.dat from the client. An example of where this may be needed is if a customer reinstalls the Control Room, they could potentially make the client believe they are connecting to a second Control Room and encounter issues. A good way to tell if this is an issue is to check the  AAClientService log to see if there are more than one user sessions being stored:

2019-03-18 12:04:19,144 [50] DEBUG AAClientService - GetUserSession > Total number of user sessions in userSessionStore : **3**

#### Data Collection and Analysis

Getting the WebCR_UserManagement log from the Control Room along with the DEVICES and USERS DB tables from the CR DB is a good way to see if they are encountering an issue due to a user logging in from multiple systems. In addition, on the client side the AAClientService.log is generally the best log to look at for this type of issue.

**Token Refresh**

After the client has logged in, the client will constantly send refresh requests to the Control Room to update the authentication token. If the Control Room encounters a failure, then the Clients should start to time out after a while.

That said, there can be issues with the token refresh especially if there are third party authentication methods being used (such as Active Directory). In those cases, the token refresh will also need to connect to the AD system to verify the user login, hence a [delay in that can cause the token refresh to fail](https://www.ibm.com/mysupport/s/question/0D50z00005q4R42CAE/why-is-my-rpa-client-getting-logged-out-from-the-control-room?language=en_US&childToView=484651#answer-484651). You would see errors messages in both the Client logs and the WebCR_UserManagement logs if a token refresh fails.

A common symptom of this would be that the Client will only stay logged in for a few minutes to the Control Room before being logged out. That generally indicates a performance issue when refreshing the token, but to work around the issue you can edit the client side timeouts for the token refresh by editing the  C:\Program Files (x86)\IBM\RPAClient\Client\ AAClientService.exe.config file to edit the timeouts:
```
  <appSettings>
    <add key="AccessTokenRefreshTimeIntervalInSeconds" value="300"/>
    <add key="FailOverRetryCount" value="3"/>
    <add key="FailOverRetryTimeIntervalInSeconds" value="60"/>
    <add key="TimeBetweenRetry" value="3"/>
    <add key="RequestTimeOutInSecond" value="15"/>
  </appSettings>  
```
#### Data Collection and Analysis

As always, the WebCR_UserManagement log would show any issues refreshing the token on the Control Room end. For the Client end, the AAClientService.log would be something to look at, but you may need to enable debug logging to see all of the information. 

