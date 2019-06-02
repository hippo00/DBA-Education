
Every support agent who spends time on whatever activity on a case is expected to record time against this case. The platform provides a number of options to do that. The session timer is used to log Support Agent time against cases in Salesforce. The timer can be run live while viewing a case or session time can be recorded manually, or edited, up to two weeks in the past. 

---

## Prep Work
An Agent’s profile must have the correct time zone set for their locale.
* Click on your Avatar Icon in the top right-hand corner of the Salesforce console
* Select 'My Settings'
  ![image](https://media.github.ibm.com/user/19331/files/fc4181c2-b5ec-11e8-80c8-7057bbda3e47)
* In the 'Settings' window click on 'Personal' on the left-hand side menu to expand the 'Personal' section and then click on 'Language & Time Zone':
  ![image](https://media.github.ibm.com/user/19331/files/0bf6fbec-b5ed-11e8-8e9c-d0d8410f0de6)
* Select the correct ‘Time Zone’ and ‘Locale’ for your location
  ![image](https://media.github.ibm.com/user/19331/files/1a367872-b5ed-11e8-8290-f5dd536dc9ca)
* Sync your OS clock with a trusted time server to ensure your OS system time is accurately set. An incorrectly set OS clock will cause failure reporting and adding time.

---

## Session Timer basics

There are two UI elements on the Agent console which allow agents to record time or inspect/change their personal existing time recording records, the **Session Time widget** and the **Session Time Related List**

* to find the *Case Session Time widget*, open a case, the widget will be on the right sidebar next to the case
![sessiontimer](https://media.github.ibm.com/user/80246/files/96c672d2-aba4-11e8-9d08-7cf35c4fd08e)
* this widget allows you to record time against the case (**Start Recording**, you'd use that when you just started to work the case) and to enter time you spent earlier on this case manually (**Enter Time Manually**)
* the **Current** field will show the timer (HH:MM:SS) for the current recording - if you stopped recording and come back to this case later, the **Current** field will again be at 00:00:00 as it represents only the current working session
* to see the overall time logged to the case, look at the **Total** field - it has the overall time recorded to this case from all agents who worked on it
* please be aware that multiple agents can be logging time to the case in parallel. The **Currently Recording** field will list all the support agent(s) who are currently recording time to this case

To record time, please use one of the following options:

---

## Option 1: Use the Case Session Timer widget

* to start time recording while working on the case, select the **Start Recording** button on the **Session Time widget**
* to stop recording, select the **Finished Recording** button
![autotimer](https://media.github.ibm.com/user/80246/files/509cde04-aba4-11e8-8931-be1038ece597)
* be aware that the case is managing an attribute called **Total Agents Recording**, which you or your teammates can display in case views to know if other agents currently work on this case. If you're used to **dispatch** (from Retain) you can use this as an alternative
![image](https://media.github.ibm.com/user/19331/files/81a35b58-ac3b-11e8-9fca-df599919f138)

**IMPORTANT**: Depending on an Agent’s web browser configuration an Agent could lose session time if the Agent closes the Salesforce Console web browser tab/window while
the session timer is running. If an Agent’s web browser is configured to delete its cache on shutdown the session time will be lost for a running session timer on browser shutdown. If an Agent’s web browser is not configured to delete its cache on shutdown the session time will be stored in the browser cache on browser shutdown and when the
Agent launches their browser and opens Salesforce Console again the session timer will continue to run. The session timer will not start from where it was on browser shutdown, the session time will be as if the timer was running in the background the whole time. For this reason Agents should also stop the session timer when logging out of Salesforce or shutting down their browser.

---

## Option 2: Manually add the time to a case using Case Session Timer
* on the time recording widget , select the **Enter Time Manually** button, the widget will now show the Date, Start Time, and During (HH:MM) to add the time spent on the case manually
![manutimer](https://media.github.ibm.com/user/80246/files/266535d6-aba5-11e8-8c4b-7e811f38a4ef)

## Option 3: Manually edit time using the Session Time Related List
* you can find this Related List on the Details tab of the Case - Support agents can edit his/her own session time there
* select Edit on the session time record you'd like to change:
![edittimer1](https://media.github.ibm.com/user/80246/files/6cc4d4fe-aba6-11e8-9a22-c04e8e27bba2)
* the Session Time record will be displayed on a new tab
![edittimer2](https://media.github.ibm.com/user/80246/files/aef23f74-aba6-11e8-8d52-d5bcab4dd4ad)
* Select **Edit** to make the change
![edittimer3](https://media.github.ibm.com/user/80246/files/f39789fe-aba6-11e8-9cbf-807aa2146f0a)
* now click **Save** to complete the session time record update

You could use the **New Session Time** button from this Related List, however we recommend to use the **Case Session Time widget** as a much more comfortable way to record time against a case

## Option 4: **Posting an update having not started the Case Session Timer widget or Manually Recording time - (The following is scheduled to be deployed on Tuesday, January 22, 2019)**
*  If you try to post an update to a Case without the **Case Session Timer widget** running or without manually recording time, a pop-up will appear when the **Post** button is clicked. (If the Case timer is running, the pop-up will not appear).
*  This pop-up requests you record time associated with the update you are posting.
*  There is also an option not to record time, for example if the post is used for a manager comment, but this selection should be avoided when possible.

The pop-up will look like the screenshot below (Subject to change) - 
![image](https://media.github.ibm.com/user/146797/files/3c3d5fda-13ee-11e9-92f7-e6f38fd12eb5)

---

## Clickable links in the session timer panel

* When an Agent has started the session timer in one case tab any other case tabs the Agent has open will refresh and the session timer panel in the other case tabs will report that the session timer is running against another case and the ‘Start Session Timer’ and ‘Enter Time Manually’ buttons will be disabled:
  ![DBA-Education_image_1](https://media.github.ibm.com/user/87023/files/cb9caac4-c271-11e8-9773-4918ae7965d5)
* The reason being that an Agent should not be able to start the session timer against multiple cases simultaneously as an Agent cannot actively work more than one case at a time. If an Agent wishes to view the case the session timer is currently running against they can click the case number link in the message and the focus will switch to that case:
  ![DBA-Education_image_2](https://media.github.ibm.com/user/87023/files/f6ab6548-c271-11e8-82d4-c7f504a752cf)
* If an Agent wishes to stop and log session time against the first case and start recording session time against the case they are currently viewing they can click the ‘Click to Continue’ link:
  ![DBA-Education_image_3](https://media.github.ibm.com/user/87023/files/219476c8-c272-11e8-8f19-f81848d28f9a)
* Clicking the ‘Click to Continue’ link will stop the session timer running against the first case and that session time will be logged. The session timer panel will then report that the time has been logged for the first case:
  ![DBA-Education_image_4](https://media.github.ibm.com/user/87023/files/8b09c202-c272-11e8-9b78-dcd71457c0fe)
* The session timer will then start against the case in focus:
  ![DBA-Education_image_5](https://media.github.ibm.com/user/87023/files/fc082b4c-c272-11e8-9dd5-74c56dee4bfe)

---

## Process for Time Recording

These are the potential roles involved into Time recording:

| Role | Description |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Case Owner | Support Agent who is listed on the "Owner" field of the case. Person who is responsible to drive Problem resolution from end to end. |
| Case Contributor | Another Support Agent, most likely a colleague to the Case Owner who is asked to provide a quick help on the case. This help should be in the area of minutes to a few hours where the overhead of a Skills Case seems to be to high. This Agent records time directly at the original parent Case |
| Swarm Member | Another Support Agent who is officially pulled into the Problem resolution of the Case via a Skills Case. This Agent records time on a Skills case (child to the original parent Case). |

Here is the process diagram for Time Recording:

![image](https://media.github.ibm.com/user/19331/files/89bf2998-ac59-11e8-81f0-4749f8103ceb)

## Related Pages
* <a href="https://ibm.ent.box.com/embed/s/l3vessw5fyyfbbrq0et1ah1za7ddphkk" target="_blank">Time Recording documentation (will be consolidated soon)</a>
* <a href="https://mediacenter.ibm.com/media/Salesforce+-+Manage+the+time+clock/1_eouxqc2f" target="_blank">Training Video: Salesforce - Managing The Session Timer</a>
* <a href="https://mediacenter.ibm.com/media/Salesforce+-+Milestones/1_uijwljls" target="_blank">Training Video: Salesforce - Milestones</a>

