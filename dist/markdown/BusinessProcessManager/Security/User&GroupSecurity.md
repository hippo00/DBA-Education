Date：2019-12-16

## Overview

User and Group Security Fundamentals Education teaches the basics how to understand and resolve reported user and security issues and typical issues and solutions in IBM Business Process Manager (BPM) and IBM Business Automation Workflow (BAW). This module serves as the basis for in-depth education modules on user and group security related issues.

Unless specifically noted, references to BPM or BAW may refer to both BPM or BAW.

## Prerequisites

You should have a basic knowledge of:

[WAS Security](https://www.ibm.com/support/knowledgecenter/en/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/welc_security.html)
[Authenticating users](https://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tsec_authusers.html)
[Configuring Lightweight Directory Access Protocol (LDAP) user registries](https://www.ibm.com/support/knowledgecenter/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tsec_ldap.html)

## Component

1.Fine-grained authorization model that uses groups, roles, and teams in BPM.

**Groups**

Groups are collections of users.

BPM group management manages several types of BPM private groups. In this context, "private" means that the groups are not visible outside of the BPM environment, not available in LDAP, and not visible to WAS. Such groups cannot be used for Java Enterprise Edition or WebSphere Application Server (WAS) administrative role assignment.
 
The following list describes BPM private group types, we can check GROUP_TYPE value in the LSW_USR_GRP_XREF BPMDB database table to understand the group type:

&nbsp;&nbsp;&nbsp;&nbsp;a. 0- Security group: LDAP group or group created in WAS admin console (replicated from the user registry).
&nbsp;&nbsp;&nbsp;&nbsp;b. 1- Team: Team using standard members or participant group.
&nbsp;&nbsp;&nbsp;&nbsp;c. 2- Ad hoc group: Also known as a temporary group, for example team filter service or team retrieval service.
&nbsp;&nbsp;&nbsp;&nbsp;d. 3- Internal group: Group created by using Process Admin Console or an application programming interface. 
&nbsp;&nbsp;&nbsp;&nbsp;e. 4- Dynamic group: Dynamic groups are result of participant groups or task assignments using expressions.
 
The following diagram illustrates how BPM group management works with the federated repository to manage the various types of groups.
![图片 1](https://media.github.ibm.com/user/228551/files/2a94cf00-1ff7-11ea-93b8-b7cd3a38a7eb)

**Roles**

Roles are a logical application level construct that divides the user population into multiple classes of users. Different roles can be assigned different levels of security, and the security access of individuals, or groups of individuals, can be controlled by assigning them to specific roles. In IBM Business Process Manager, there are three types of roles.

&nbsp;&nbsp;&nbsp;&nbsp;a. WAS administrative roles. See [Administrative roles](https://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/rsec_adminroles.html).
&nbsp;&nbsp;&nbsp;&nbsp;b. BPM application Java EE roles. See [IBM Business Process Manager application J2EE roles](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/managing_j2ee_users.html).
&nbsp;&nbsp;&nbsp;&nbsp;c. BPM security roles that allow configuring system accounts. See [IBM BPM security roles](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.ref.doc/topics/managing_users_E.html).

**Teams**

Teams are used to define groups of users who can perform tasks. A team can either be defined as a static list of users and groups, or be defined dynamically by a service.

[Teams in BPM V8.5, Part 1: Modeling teams with IBM Process Designer](https://www.ibm.com/developerworks/bpm/library/techarticles/1402_dermler1/1402_dermler1.html)
[Teams in BPM V8.5, Part 2: Developing services for dynamic team resolution](https://www.ibm.com/developerworks/bpm/library/techarticles/1402_dermler2/1402_dermler2.html)
[Teams in BPM V8.5, Part 3: Managing teams](https://www.ibm.com/developerworks/bpm/library/techarticles/1402_dermler3/1402_dermler3.html)

**Users**

Users represent either people who work with IBM Business Process Manager or system users who administer IBM Business Process Manager. Users are authorized by adding them to roles or teams.

We can restrict inactive users from participating in runtime operations, see [Runtime user availability and lifecycle](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/user_lifecycle.html).

&nbsp;&nbsp;&nbsp;&nbsp;a. User Activation: A user can be activated in the IBM BPM database only if the user is available in a user registry.
&nbsp;&nbsp;&nbsp;&nbsp;b. User Deactivation: While users can be removed from the user registry, you cannot delete user entries from the IBM BPM database. Therefore, these inactive users are still available for task assignments and collaboration invitations. However, you can deactivate the inactive users by running the syncExistingUsers command. For more information, see [Synchronizing users](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/sync_users.html).
 
**User Registry**

BPM authorization relies on users and groups that are defined in the user registry. A user registry is an architectural layer that manages users and groups in WAS. LDAP servers are the most commonly used source of user and group data storage. Although BPM can utilize a stand-alone LDAP registry, you are recommended to use a federated repository configuration that can comprise multiple LDAP repositories.
 
BPM does not lock user accounts after a configurable number of failed authentication attempts. End user accounts are managed in a user repository (typically LDAP connected to Federated Repositories). The user repository is the system of record for the user accounts and therefore defines rules such as password lock policy.
 
The following diagram illustrates how WAS and applications access user and group data in the user registry.

![图片 2](https://media.github.ibm.com/user/228551/files/64b2a080-1ff8-11ea-8f6a-60878d70ec4c)

2.Administering BPM users and groups

&nbsp;&nbsp;&nbsp;&nbsp;a. [Creating and maintaining users and groups:](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/managing_users_A.html) You can create and manage users and groups in Process Admin Console.
&nbsp;&nbsp;&nbsp;&nbsp;b. [Synchronizing users and groups:](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/sync_users_and_groups.html) BPM implicitly synchronizes external users and groups between WAS user registry and BPM database in response to certain triggers. You can trigger synchronization explicitly by using administrative scripts or Process Admin Console.
&nbsp;&nbsp;&nbsp;&nbsp;c. [Administering dynamic groups:](https://www.ibm.com/support/knowledgecenter/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/admin_dynamic_groups.html) BPM refreshes dynamic groups either explicitly or implicitly.

## Troubleshooting
 
#### Data Collection

You might be having problems logging into certain parts of the BPM product (Process Portal, Process Admin console, Process Center console, Process Designer), or you are seeing issues with your LDAP configuration, or users are unable to view their tasks, then refer to this [Security Problems Must Gather Doc](https://www.ibm.com/support/pages/collect-troubleshooting-data-security-problems-ibm-business-process-manager-bpm) for data collection.
 
**Symptoms & Solutions**

**Symptom – Task is assigned to a group with no users.**

All tasks must be assigned to a user or group. The group needs to have at least one user. When a task is assigned to a group with no users, the following errors may occur.

FlowObjectExe E   CWLLG0326E: The BPD encountered an error.                                  
com.lombardisoftware.core. TeamWorksException: Cannot route task. The group contains no users.

**Solution** – Ad hoc group calculations

Finding how many groups are present.

group_type:
0 – LDAP group or group created in WAS admin console
1 – Team or participant group
2 – Ad hoc (also team filter service or team retrieval service)
3 – BPM internal groups like tw_authors, and user created ones
4 – Dynamic group

SELECT GROUP_TYPE, COUNT(GROUP_ID) AS "COUNT"
FROM LSW_USR_GRP_XREF
GROUP BY GROUP_TYPE
ORDER BY GROUP_TYPE;
 
--LIST AND COUNT MEMBERS IN GROUPS.
select count(mem.group_id) as "Number", grp.display_name, grp.group_type from lsw_usr_grp_xref grp
inner join lsw_usr_grp_mem_xref mem on grp.group_id = mem.group_id
group by mem.group_id, grp.display_name, grp.group_type
order by "Number" desc;
 
JR53280 corrects when an ad hoc group (team filter service) calculation does not complete properly.  By adding the configuration <enable-ad-hoc-group-monitoring> a second check is done to ensure the group is properly refreshed.  When a team filter service is created, the list of users entered creates a unique hash and unique new ad hoc group (team). This team will always be the same group_id number so long as the same user list is supplied every time. This defect corrects problems the group hash as calculated incorrectly.
 
**Symptom – Login to BPM Process Portal is slow.**

When a user logs into BPM Process Portal the time is longer than expected. The time from when a user types in their password to login to Portal, until Portal page rendering done is longer than expected.

**Solution**

There are multiple solutions for this type of symptom.
&nbsp;&nbsp;&nbsp;&nbsp;a. Reduce the number of calls BPM to LDAP server. This can be done with the setting of <group-member-cache-source>. This setting uses the available user and group relationships from the cached XREF tables.
&nbsp;&nbsp;&nbsp;&nbsp;b. Turn off dynamic group updates on login. The settings is <update-dynamic-groups-on-login> and is true by default.
&nbsp;&nbsp;&nbsp;&nbsp;c. Delete closed tasks. When calling Process Portal Work list or other queries, deleting closed tasks puts less strain on the database to the task and instance tables.
&nbsp;&nbsp;&nbsp;&nbsp;d. Perform database run statistics and re-indexing on the LSW_TASK and LSW_BPD_INSTANCE tables in the database. These should already be a part of the general database maintained on a BPM system.
 
**Symptom – Users and groups are visible in WAS admin console but invisible in BPM.**

**Solution**

1) WAS VMM cache (default is 20 minutes)
2) Wildcard card not supported by LDAP. Turn off wildcard searches with "wildcardProcessingOptimized" property.
 
**Symptom – How to update existing and future groups in BPM?**

**Solution**

There is a set of wsadmin commands which allow for synchronization of users and groups between BPM and WAS.  These are provided to reduce query stress on the BPM database and the federated repositories (often LDAP). See [Synchronizing users and groups](https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.6.0/com.ibm.wbpm.admin.doc/topics/sync_users_and_groups.html).
 
**Symptom – There is high CPU usage on BPM Database or LDAP server when BPM fetches groups**

**Solution**

The following 100Custom.xml settings reduce stress on the BPM and LDAP group lookups.
```
<group-member-cache-source>DB</group-member-cache-source>
<update-dynamic-groups-on-login>false</update-dynamic-groups-on-login>
<update-dynamic-groups-on-task-creation>false</update-dynamic-groups-on-task-creation>
<update-dynamic-groups-on-uadchange>false</update-dynamic-groups-on-uadchange>
```

**Symptom – You are not authorized to perform the 'finish/assign to user' action.**

**Solution**

1)CWTBG0549E: You are not authorized to perform the 'finish' action.
Possible reason: Implemented Since BPM 8.5.7, BPM now excludes potential task owner, task collaborator, and task team manager authorization roles from completing or finishing a task. This was done to match what is stated in the knowledge center. Introduced by APAR JR55960, this fix has flag to match previous versions behaviors.
http://www-01.ibm.com/support/docview.wss?uid=swg1JR55960
 
2)CWTBG0549E: You are not authorized to perform the 'assignto user: abc' action.
Possible reason: Even a user (user A) from the tw_admins group cannot reassign a task to a user (user B) if that user (user B) is not part of the ad hoc group. Proceed only by assigning to members of that group. Follow steps 1 and 2 from "Manually adding a user to a group." If group membership information is needed. Follow step 3 if you need to add that user to the group.
 
3)CWTBG0590E: You are not authorized to start or access this client-side human service.
If you receive this error when attempting to log in to the Process Portal, the issue could be due to not being part of the tw_allusers group. To verify, you can run the following query:

--Show users which are not in "tw_allusers" group.
SELECT * FROM LSW_USR_XREF
WHERE USER_ID NOT IN (
SELECT USER_ID
FROM LSW_USR_GRP_MEM_XREF
WHERE GROUP_ID=16)
ORDER BY USER_NAME;
 
If there are any more users that may experience this issue, this query should help in retrieving the users. After you have a list of users to add, go to Process Admin Console > User Management > Group Management > Group, to modify (tw_allusers) and add the users to the group. JR52746 was created to prevent users from being removed from the tw_allusers group. More information on why users may be accidently removed here:

[Why are users not member of the tw_allusers group anymore?](https://www.ibm.com/mysupport/s/question/0D50z000062kXRDCA2/why-are-users-not-member-of-the-twallusers-group-anymore?language=en_US)
[JR52746: INCONSISTENT SEARCH RESULTS FOR TASKS ASSIGNED TO USERS THAT ARE NOT IN THE USER REPOSITORY](http://www-01.ibm.com/support/docview.wss?uid=swg1JR52746)

**Symptom – Unable to add user to group or retrieve LDAP group in Process Admin Console.**

After Federating to LDAP, customer is unable to “Add Users” to groups using the “Group Management” screen of the BPM Process Admin Console. Customer is also unable to retrieve LDAP groups using the “Select Group to Modify” search box on that same screen.

**Solution**

1)[What is the BPM / WebSphere / LDAP integration golden rule?](https://www.ibm.com/mysupport/s/question/0D50z00005phh4uCAA/what-is-the-bpm-websphere-ldap-integration-golden-rule?language=en_US)

From WAS Admin Console's "Manage Users" and "Manage Groups" screens, you could see:
* an LDAP user
* that LDAP user's Groups in the "Groups" tab
* a LDAP group
* that LDAP group's Users in the "Members" tab

![图片 3](https://media.github.ibm.com/user/228551/files/549bc080-1ffa-11ea-9523-bee3fcddf07c)

2)[Where can I get the handy-dandy diagnostic JSPs to help troubleshoot my BPM LDAP integration?](https://www.ibm.com/mysupport/s/question/0D50z000062kuxvCAA/where-can-i-get-the-handydandy-diagnostic-jsps-to-help-troubleshoot-my-bpm-ldap-integration?language=zh_CN)

With JSPs placed on the Dmgr server’s filesystem, we observed:
* UR_getGroups.jsp errored with MaxResultsExceededException
* UR_getUsers.jsp errored with MaxResultsExceededException
* UR_getUserForm.jsp failed with used with wildcard pattern that “Add Users” would perform:  *SomeUser*

![图片 4](https://media.github.ibm.com/user/228551/files/c2e08300-1ffa-11ea-9ab2-8d58c715e3dd)

3)For “MaxResultsExceededException: CWWIM1018E” in SystemOut.log:

[Where are my LDAP groups in BPM Process Admin Console "Add Groups"?](https://www.ibm.com/mysupport/s/question/0D50z00005q4PzGCAU/where-are-my-ldap-groups-in-bpm-process-admin-console-add-groups?language=en_US)

**Important Note:** Keep BPM Servers Shutdown until tuning has been verified! Only use Dmgr! 
Iteratively raised maxSearchResults value in Dmgr’s wimconfig.xml (restarting Dmgr each time) to 100,000 and still got:

UR_getGroups.jsp errored with MaxResultsExceededException
UR_getUsers.jsp errored with MaxResultsExceededException

Eventually raised maxSearchResults to 1,000,000 to see how many results would be returned by JSPs. Dmgr crashed.

**Recommendation**

1)With over 100,000 Users and 100,000 Groups, the population would likely swamp BPM.

Best practice is to have triad of consultants determine the proper tuning:
* BPM Architect: to identify which Users and Groups need to participate in the BPM processes
* LDAP Admin: to identify where those Users and Groups reside in the LDAP
* WebSphere Admin: to work help construct suitable Search Bases and Search Filters for the Group and PersonAccount (User) Entity Types in WebSphere to accomplish tuning

Recommended Tuning Primer:
[Business Process Management Deployment Guide Using IBM Business Process Manager V8.5](http://www.redbooks.ibm.com/redbooks/pdfs/sg248175.pdf)
See Chapter 7, section 2, ESPECIALLY section 7.2.4 "Configuring LDAP filters".

2)Typical User Tuning.

LDAP was Microsoft Active Directory which supplies a “memberOf” attribute on every User’s record (unlike Sun/Oracle LDAP, or IDS/TDS) – allowing Users to be limited by including memberOf terms in the Person Account (User) Entity Type search filter.

Examples:
* Default:    (&(ObjectCategory=User)
* One Group specified:  (&(ObjectCategory=User)(memberOf=cn=SomeGroup,ou=someOU,dc=mycompany,dc=com))
* Two Groups specified:  (&(ObjectCategory=User)(|(memberOf=cn=SomeGroup,ou=someOU,dc=mycompany,dc=com)(memberOf=cn=AnotherGroup,ou=someOtherOU,dc=mycompany,dc=com)))

As you can see, if users live in many Groups, the filter could get quite long.

**NOTE:** User Tuning using “Search bases” is also sometimes possible.

3)Typical Group Tuning.

In WAS, it is common to tune groups by using name patterns in the “Search filter” and/or “Search bases” to specify where to look for the Groups.

Examples:
* Default:    (&(ObjectCategory=Group)
* One Group name pattern specified:  (&(ObjectCategory=Group)(cn=HR North America*)))
* Two Group name patterns specified: (&(ObjectCategory=Group)(|(cn=HR North America*)(cn=Finance*)))

**NOTE:** Wildcards and “short-name” are supported in this expression (the “memberOf” is not indexed to allow wildcards for User filters).

If many Groups are involved with BPM solution, this expression could get long and complicated, perhaps even taking a while to evaluate on the server.

#### Reference

1.[How to troubleshoot a BPM user authorization problem - Part I](https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/how_to_troubleshoot_a_bpm_user_authorization_problem_part1?lang=en)
2.[How to troubleshoot a BPM user authorization problem - Part II](https://www.ibm.com/developerworks/community/blogs/aimsupport/entry/how_to_troubleshoot_a_bpm_user_authorization_problem_part2?lang=en)
3.Recommended APARs

[JR58388: THE MEMBERSHIP OF A GROUP MIGHT NOT POPULATE PROPERLY UNDER A STRESS LOAD](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58388)
Being included in BPM 8.6.0.201712.

[JR58443: YOU SEE A NULLPOINTEREXCEPTION WHEN MULTIPLE THREADS TRY TO ACCESS THE INTERNAL GROUP MEMBERSHIP CACHE](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58443)
Being included in BPM 8.6.0.201712.

[JR58495: YOU CAN'T RETRIEVE IBM BPM INTERNAL GROUPS THAT HAVE LEADING OR TRAILING SPACES](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58495)
Being included in BPM 8.6.0.201712.

[JR58657: AN INTERNAL USER CACHE IS REBUILT FOR ALL USERS WHEN YOU CREATE A BRANCH, PROJECT, OR NAMED SNAPSHOT OR DEPLOY A SNAPSHOT](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58657)
Being included in BPM 8.6.0.201712.

[JR59038: RETRIEVING USER GROUPS BY USING THE JAVASCRIPT API MIGHT TAKE LONGER THAN EXPECTED](https://www-01.ibm.com/support/docview.wss?uid=swg1JR59038)
Being included in BPM 8.6.0.201803.
 
[JR58908: PROCESS ADMIN CONSOLE GROUP MANAGEMENT USER SEARCH DOESN'T SEARCH BY FULLNAME](https://www-01.ibm.com/support/docview.wss?uid=swg1JR58908)
Being included in BPM 8.6.0.201803.

[JR59228: YOU MIGHT EXPERIENCE MANY DB CALLS WHEN USING THE USER.ROLES() IBM BPM JAVASCRIPT API](https://www-01.ibm.com/support/docview.wss?uid=swg1JR59228)
Being included in BAW 18.0.0.1.
 
[JR59274: THE USER.ROLES JAVASCRIPT API CONTAINS DUPLICATES FOR NESTED INTERNAL GROUPS THAT CONTAIN THE SAME USER](https://www-01.ibm.com/support/docview.wss?uid=swg1JR59274)
Being included in BAW 18.0.0.1.

[JR59724: YOU NOTICE HANGING THREADS WHEN CONCURRENTLY UPDATING A USER ATTRIBUTE](http://www-01.ibm.com/support/docview.wss?uid=swg1JR59724)
Being included in BAW 18.0.0.2.

[JR60037: YOU MIGHT EXPERIENCE A LOCK SITUATION DURING A USER REPLICATION FROM PROCESS ADMIN CONSOLE](https://www-01.ibm.com/support/docview.wss?uid=swg1JR60037)
Being included in BAW 18.0.0.2.
 
[JR60074: THE DASHBOARDS TASK LIST CAUSES HUNG THREADS WHEN LOADING USER GROUPS](https://www-01.ibm.com/support/docview.wss?uid=swg1JR60074)
Being included in BAW 18.0.0.2.
 
[JR60108: USE OF THE MEMORY FOR THE GROUPMEMBERS CACHE IS TOO LARGE](https://www-01.ibm.com/support/docview.wss?uid=swg1JR60108)
Being included in BAW 18.0.0.2.
 
[JR60428: A TASK IS ASSIGNED TO AN EMPTY AD HOC GROUP](https://www-01.ibm.com/support/docview.wss?uid=swg1JR60428)
Being included in BAW 19.0.0.1.
