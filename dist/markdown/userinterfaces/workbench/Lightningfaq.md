### Q&A gathered from the Lighting Pilot Office Hours session on Tuesday, December 5, 2018

**All Lightning Office Hour session recordings can be found <a href="https://sme.video.ibm.com/channel/23495615/playlist/449789 Please bookmark this page." target="_blank">here.</a> Please bookmark this page.**

The link to the overview of Lightning video is posted <a href="https://mediacenter.ibm.com/media/t/0_8d429bv1" target="_blank">here</a>


**FYI, Known Lightning Issues information has been added to the DBA-Education <a href="https://pages.github.ibm.com/dba-support/DBA-Education/#/DBA-Education/uis/workbench/KnownLightningIssues" target="_blank">here.</a> 

**Q: On the console, if you see the "Related List Quick Links" UI look jumbled like this, then you need to "disable content blocking" on your web browser:**
![image](https://media.github.ibm.com/user/19331/files/3535dcc8-1919-11e9-8fdd-ad8eb48cddc3)

**Q.  How can I access Lightning on the console?** 

A.  Use the App launcher (visibility to this button depends on your role).  Also you may switch to Lightning using the avatar in upper right corner of page.


**Q.  Where did the Quick Action buttons go?**  

A. It is a drop-down button the left sidebar.  This location gives us lots more room to put things in the middle working area.


FYI, We're working to show feed in both locations, but unable to show the same experience at this time. This functionality is being explored.


FYI, The Summary section is new in the center section but this also appears on the left sidebar area.


**Q. How can I customize the view (change the order of the Quick Link buttons?**  

A. Go to Personal settings, display & layout, select cases, and choose up or down to change the order.


**Q. How can I see expanded entries in a Quick Action button without the detail disappearing?**

A.  Hover over entries to see expanded list within an Quick Link button.  It is best to start this action from bottom to top so it doesn't block the view of other Quick Action buttons.


FYI, Switch from feed to case details, all on the left.  Expand each and the field will remain.


**Q. How to change the view?**  

A.  Adjust the order of the columns by dragging & drop or go into View to do this.  


**Q.  When detailed case lists appear (by hovering over a Quick Link), how can I see the entries I'm most interested in, at the top of the list?**

A.   You can put AAA or * to bring those items to the top but do not use a dash, as it will put those entries at the bottom.


**Q. Is there a way to have a split view?  To avoid having a console in one browser and case view in another browser?  To have case views (such as a case her team is working on) beside the cases one is currently working on would allow for multi-tasking.**  

A. No, there is not a way to do this.  This is not a best practice.  


**Q. Can the columns be resized?**  

A.  No.  There's only so many layouts SF provides us.  The move to Lightning allows us to have more leverage with Salesforce to suggest more changes. We have surfaced this as an issue and have identified in the Known issues document. 


**Q.  Lazy Load expands posts but it peaks at 8 rows of data. You still need to individual expand every post of every feed, using the "Expand Feed" button.  It only partially expands. Can this be improved?**

A. This is the current design. We have this identified in the Known issues and SF will be providing us with a solution or workaround. 


**Q. The directional arrows on keyboard are not available in Lightning?**  

A. We are not sure why its not working.  The shift down or up was working but you have to click in an outside area.  Possibly due to Lazy Loading.  The team will check for accessibility. We have this identified in the Known issues and SF will be providing us with a solution or workaround. 


FYI, Remember to use the feedback area in the console to post questions, comments.


**Q. The Enter time manually feature, is that supposed to expand?**  

A. That would be nice, to expand the tile.  Our Design team will check if that is possible.


**Q. Why can't I see all the fields I'd like to on a page?**  

A.  Zooming in on a page pushes things off the ends of the page.  You can still scroll horizontally.  Screen size may also affect how well you can see things on the screen.  An 80% zoom rate was suggested.


FYI, Notification Bell in upper corner will show notifications, but this is expected to improve over time. 


**Q. How can I get the detail to wrap?**

A.  In the Personal Case view, you can select wrap text.  Click on the subject, then the dropdown box to choose the wrap feature. On the "My Test Cases" view,  there is a Display mode, to the right of gear button.  Select the dropdown and use Kanban view.


FYI, You can add Case View Favorites, using star icon at top right corner of page. Also, see the tips and Lightning Tips and Tricks for more information. 


**Q.  Can you switch the look of the view?**  

A.  Look at Quick Link list, go to personal settings and change to compact, to add padding but not change font.


**Q.  Case list view, select a record...go to far right, to see the pull down choices, can you move that to the left side of the screen?**

A.  Our Design team will look into this.  


**Q.  Can you Alter the order of App Navigation Items?**

A. Yes, and If you remove something by mistake, you can bring back the default view to restore all the app choices.  Open Cases, click on dropdown on the right side of the box, at the bottom of choices there is "Edit".  Choose "Reset Navigation in Default".


FYI, We disabled the feature global actions but it may come back in the future.  We had issues controlling the size.


**Q. Hover over case owner, you'll see change owner pop-up but otherwise it disappears.   Can you make this more visible?**  

A. It is best to use the widget to do this manually, but we prefer that people use the Change Owner option.


**Q.  Will the customization persist between Sprints?  Classic always reset it.**

A.  So far they seem to persist in our testing and we have done several staging deploys so far. 
or cases which we own?


### Questions/Topics surfaced during the Office Hours session on Friday, Dec. 7, 2018

The link to the Office Hours recording from Dec. 7, can be found <a href="https://sme.video.ibm.com/channel/23495615/video/118592113" target="_blank">here</a>   


~~FYI, there was an anomaly with the start session timer in classic. If you switched to Lightning, it doesn't recognize that you started the timer.  Just remember to start and stop the time within Lighting or if you are in Classic, start and stop the timer in Classic.~~  **Resolved**

FYI, scrolling up & down is always available in Lightning and is independent from the center area.  Quick Actions are now shown on left sidebar.  We moved them in order to provide you with more width to work in the center area.

**Q. Will there be a specific area for Lighting RFE's?**

A.  Not necessary to specify.


**Q.  Is it possible to get a "collapse all" on left column, just the main details part. There are certain fields open all the time will stay that way.**

A.   We have this identified in the Known issues and SF will be providing us with a solution or workaround. 


**Q Are Quick Links found anywhere else on the console?**

A. No


**Q.  Is there a way to change how the Quick Action options open up so they don't block the other link selections?  The mouse-overs get in the way.**    

A.  We are talking to Salesforce about this. Possibly slowing down the hover feature might help. These are RFE issues, we've trying to focus on defects and regression items.


**Q. Over in related links quick links, user is seeing 2 labels overwriting each other.  Every link is double labels.**

A.  A Browser refresh is an "F5".  A Workaround identified.  In the upper bar, green block mechanism, right click, give access to give it permissions.  This has been identified in DBA-Education too. 


**Q. Defect found - Kevin B.  While trying to do a post, and typing a code block, I forgot to add a closing bracket code. Salesforce said I have a mis-match, but when clearing the button, it erased the content I had just typed in which caused me to start over.**  

A . This needs fixing and will be addressed by the team. - **Resolved**


FYI, the Reverse order button is not available but we have a request for that.  We have this identified in the Known issues and SF will be providing us with a solution or workaround. 

**Q In classic, regarding the primary tabs, there's a dropdown to refresh that tabs, allowing me to shut all primary tabs down at the same time.  This appears to be missing within Lightning.**  

A.  Since all of the components in the page layout in lightning are independent they refresh independently. We have this identified in the Known issues and SF will be providing us with a solution or workaround. 


FYI, the feed widget within Salesforce, does not allow you to see previous posts when performing a post.  We want to deliver a consistent feel.  Right now the feed widget is not the same, we're working to make sure the widget is updated so you can see the same below the post.

**Q.  Case Prioritization widget in the Utility bar?**

A. ~~It will be coming back but has not been added as yet.~~ **Resolved**


FYI, Split view allows you to switch to another case easily.  

**Q.  But are we going to make it fit on the screen?**  

A.  We are asking Salesforce to adjust better.  There is also the ability to move those two bars and resize them. Salesforce has been informed but no completion date supplied yet.  
Best practice share: The user chooses the top 4 columns, he selects the case views most important to him.


FYI, Issues raised with Salesforce- Lack of Refresh of case view & Case Prioritization are features coming in the next Salesforce release (coming in January).  It will have automatic refresh in the case prioritization view.

**Q. Will we be able to see Case Prioritization in split view?**

A. No. 


**Q. When I Enter time manually, select date, it doesn't work properly, I can't scroll down to find this (using Firefox).  Should I report in the channel?**

A.  Yes, report in the channel please.  Ryan will check on this. **Resolved**


**Q.  Copy & Paste issue: in case view, I try to highlight the text, you need to keep the mouse button pressed down otherwise it doesn't keep the text highlighted so you can copy & paste it easily.**   

A.  Suggested workaround, right click to select all (in Firefox).  Other browsers do not have the same problem.


FYI, we have made changes to Omni-channel, when you change the status, updates appear.  We can't change the label in the utility bar tabs, but we can change a separate one but we were able to change the status on the Omni-channel.  It is confusing but that is a compromise we were able to make.  

**Q.  Kevin B:  within the personal case views, in Classic, we had letters of alphabet across the top, to help filter, but now this is not available in Lightning.**  

A.  We'll search for a workaround in Lightning. There is a better search capbility in lightning, you can also pin case views you use all of the time. See the Lightning Tips and Tricks.


**Q. I would like to see a direct link to RTC in the case summary.** 

A.  We had to come up with a common design to make the deployment, possibly make the change in the future but we need to take everyone into consideration.  Customizing the summary section yourself is something we've suggested to Salesforce.


**Q.  If you go to a parent case and select a related case from the sidebar area and hover over, it opens in a primary tab, but if you open it in the center section, it opens as a sub-tab.** 

Tip: Kevin goes to Last View and chooses to wrap the view to see this better.
A. To have all cases open in a primary tab is something being discussed with Salesforce. We have this as a knonw issue with SF. They will provide a fix/workaround for this. 


**Q.  The terms Clone vs Duplicate?** 

A.  These were too simliar, so we're only using the term duplicate.


**Q. I can't move a column to the left or right and I can't drag & drop.  Fields already displayed can I move them left or right?**   

A. No, but you can go to dropdown to select fields to display, you can change the order of fields.


FYI, List views, created with certain name may prevent you from saving the view because the name has already been created.

FYI, There's a keyboard shortcut to shutdown all the tabs.. (shift+w)

FYI, there is an Git issue pending for next Sprint (January) to use a popup a model if not using session timer, to remind you to record time and give you the option when you post. if you are using the session timer, you will not see.

**Q. When I move from classic and lightning, tabs do not follow or open in lighting.** 

A. No, this is because cache is used to know which tabs you have open. Open tabs don't follow, you should work in Lightning all the time and this will quickly not be an issue for you. 

**Q. How do we provide feedback.** 

A. Use the csp-lightning channel and if you need to switch back to the classic console, please tell us why. This is most important if you encounter a defect or missing feature (regression) that is preventing you from working. Once we GA the lighting console, we expect you to work full time there so we can quickly remove access to the classic environment. But if you need to switch back, please make sure you tell us in the modal some details.  








