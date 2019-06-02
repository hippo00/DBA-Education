## Case Prioritization
Each case in the support analyst’s backlog is assigned a Watson score and arranged in a Kanban view (as well as traditional view). This helps the analysts visualize better the higher priority cases and this helps them decide what to work on next.

![image](https://media.github.ibm.com/user/17980/files/9d639cd0-b51a-11e8-94ba-b67398b08d24)

## What is Watson Score?
Watson Score is the indicator of case priority on a scale of 0-10, where 10 is the highest possible score. The total score is calculated by combining five weighted breakdown scores:
   • Sentiment is based on case sentiment.
   • Severity is based on case severity, where severity level 1 has the highest possible score.
   • Age is based on the length of time the case has been open. The more time that has passed, the higher the Age score, although the rate that this score increases is reduced as it increases.
   • CLU is based on the length of time since the last update by the customer. The more time that has passed, the higher the CLU score. If the case is last updated by IBM, rather than the client, then the CLU score is 0.
   • Status is the base ranking score based on the case's internal status. Status is a significant contributor to the overall Watson Score.
   Breakdown scores are calculated based on weighting and rules assigned to each individual score, and those weights can be adjusted as needed.

## Related Pages
* <a href="https://app.mural.co/t/watsoninsupport2669/m/watsoninsupport2669/1518206634599/c720c74a186a815355aec0114e97fc0d070725fd" target="_blank">Mural with more details on design thinking behind Case Prioritization</a>
* <a href="https://app.mural.co/t/watsoninsupport2669/m/watsoninsupport2669/1522084340112/52daa6a963c72457a142d44615f946f9f91dbddc" target="_blank">Mural with more details on Case Prioritization Architecture</a>
* <a href="https://ibm.ent.box.com/s/qbcn27vc4yq8wpmem6hoihhb6lalg946" target="_blank">Design Documentation </a>
* Blogs featured on Client Support Transformation community
  * <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea/entry/Case_Prioritization_Feature_To_Be_Generally_Available_on_04_24?lang=en_us" target="_blank">Intro to Case Prioritization </a>
  * <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea/entry/Case_Prioritization_and_Kanban?lang=en_us" target="_blank">Case Prioritization and Kanban </a>
  * <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea/entry/Case_Prioritization_User_Story?lang=en_us" target="_blank">User Story from IBM Security </a>
  * <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea/entry/Case_Prioritization_User_Story_from_Db2?lang=en_us" target="_blank">User Story from DB2 </a>
  * <a href="https://w3-connections.ibm.com/blogs/77c516f7-fac8-42a7-8d4b-d8b168a807ea/entry/April_20_2018_at_10_13_03_AM?lang=en_us" target="_blank">Support Manager Perspective </a>
