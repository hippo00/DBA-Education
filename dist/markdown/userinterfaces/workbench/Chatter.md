## Introduction to Chatter

Chatter is a Salesforce real-time collaboration application that lets your users work together, talk to each other, and share information. Chatter connects, engages, and motivates users to work efficiently across the organization, regardless of role or location. Chatter lets users collaborate on sales opportunities, service cases, campaigns, and projects with embedded apps and custom actions.

Use Chatter in your favorite browser (1) or on your phone or other mobile device (2). The Salesforce mobile app offers a rich and powerful mobile interface for collaboration on the go.
Chatter and the Salesforce app

![image](https://media.github.ibm.com/user/40285/files/22c527dc-c3e3-11e8-9592-fbec06b0986b)

Chatter helps you learn more about your coworkers and gives you an easy way to get in touch with them. In Chatter, everyone has a profile page with a photo and work-related information. Easily discover which teams your coworkers are on, who their managers are, where they’re located, and how to contact them.

One of the most useful communication tools in Chatter is following. You can follow people, groups, topics, files, and records, like opportunities and accounts. When you follow people, you see their posts, comments, and likes in your What I Follow feed. People can follow each other independent of their teams, which helps collaboration across functional borders. When you follow files, topics, and records, you are notified when they change. You can follow a maximum combined total of 500 people, topics, and records.

![image](https://media.github.ibm.com/user/40285/files/cdd07a94-c3e5-11e8-9d88-66df0f7ae141)

All Chatter users can configure their own email notification settings and control the number of notifications they receive.

At Salesforce, departments and functional teams have Chatter groups. Typically, groups are organized around a common goal or interest—from product-related groups in sales and marketing, to internal training, human resources, and facilities. The group feed provides a central point of communication for all group members. In the feed, group members can talk to each other, raising the visibility of information and creating a record that members can visit again and again.

Chatter’s advanced search engine lets people find files, people, groups, teams, work records, and other information. Over time, Chatter becomes your company's memory. It’s searchable and accessible anywhere, anytime. It connects people across departments and geographies.

Wait! Did we mention that Chatter’s fun? It gets people talking and makes them feel connected, powerful, and recognized.

## Introduction to Profiles
Everyone in your organization has a Chatter profile that they can customize with a photo, their contact information, and a personal overview.

Initially, a profile page is a blank canvas. Encourage your users to personalize their profiles. For example, have them add a realistic profile picture and some information about themselves. It helps people to recognize each other, connect, and collaborate.

![image](https://media.github.ibm.com/user/40285/files/bbe684ec-c3e3-11e8-8b1c-bc6efba6a309)

Click someone’s name anywhere in Salesforce to see their profile page. The Feed tab (1) shows the user’s personal feed. The user goes here to see posts from the people, topics, files, and records they have followed. The Overview tab (1) shows information about that user (Skills and About Me). It also shows files the user owns, groups the user belongs to, who the user is following, and who’s following the user. The Recognition tab shows the badges, like the Thanks badge, the user received from others.
![image](https://media.github.ibm.com/user/40285/files/15151fdc-c3e5-11e8-84af-ff625ec70398)

The Contact section (3) is where users go to update their profile picture, contact information, and About Me content. Users can also update About Me on the Overview tab.
Here’s how to update a profile picture and contact information.

* Click **Your Name** | **My Profile** at the top of any page in Salesforce.
* Hover over your profile picture (2) and click **Add Photo** (if you are changing your photo, this option becomes **Update**).
* Navigate to and select a picture. Optionally, select whether to share your picture on publicly accessible pages, then click **Save** to upload the picture.
* Click Edit icon in the Contact section (3).
* On the Contact tab, add your mobile phone number. On the About tab, enter something about yourself in the About Me section.
* When finished, click **Save All**.

Now, switch to the Feed tab and post an update on your profile page.

![image](https://media.github.ibm.com/user/40285/files/7955df34-c3e7-11e8-815f-6e808af9ce4e)

Enter an update in the text box, and click **Share**.

You’ve just used the Chatter publisher. It’s the piece of the Chatter UI that you use to post content to a feed. The Chatter publisher appears not only on your profile page, but also on the Home tab, Chatter tab, and group and record detail pages. Users can post updates, attach a file or a link, publish a poll, or ask a question. The **More** menu can provide even more options, like posting a special thank you badge to thank a coworker for an assist.

## Introduction to Groups
Chatter groups make collaboration easier, take project management to another level, and provide a great way for teams to keep up. Groups are the main collaboration space in Chatter. Groups are where people organize around a shared interest, purpose, or goal. People use groups to share information, post updates, and ask questions.

Salesforce provides various group types for different purposes and audiences.

- **Public groups** are visible and open to all employees. Anyone in the company can join a public group and post, comment, and add files to it.
- **Private groups** are open only to group members. People must request to join a private group. Only group members can post, comment, and add files. Nonmembers can see the group’s picture and description, but they can’t see the group feed or files.
- **Unlisted groups** are invitation-only and don’t appear in list views and search results. An unlisted group is hidden from everyone except group members. Only the group’s owner or manager can invite people to join an unlisted group.
- **Groups with customers** are private or unlisted groups that allow external users, like customers, to be members. The group owner or manager must invite external users to join. You can apply the **Allow Customers** option only to private and unlisted groups.
- **Broadcast only groups** allow only group owners and managers to create posts. Group members can comment on them. You can apply the **Broadcast Only** option to private, unlisted, and public groups.

### Group Examples

When you set up Chatter for your company, seed it with groups around common interests and functional teams. Examples of functional teams include product-related groups in research and development or sales and marketing, an internal training team, human resources, and facilities. Here are some groups that have been successful at other companies. Remember, groups can be either public for every employee or private for select people.

**All Company (public)**
Add all employees to this group to discuss company-wide topics and make announcements.

**My Team (private)**
Add team members to this group to discuss projects you’re working on, give feedback, and share presentations, spreadsheets, and documents.

**Competitive (public)**
Connect customer-facing employees with competitive and product experts in your company to crowdsource answers and beat the competition.

**Product Feedback (public)**
Gather product feedback from your sales and customer service teams to share directly with R&D and engineering.

**Marketing (private)**
Share concepts for creative campaigns, provide event details, and brainstorm marketing ideas with the whole team.

**Sales (public)**
Create a place for sales employees to get feedback on deals and share stories, best practices, and tips for winning.

**Customer Meetings**
Create groups where all the key players on a deal can collaborate more easily on presentations, agendas, and products. For example, start a group for a customer visit called “Acme July Meeting” and invite sales, technical specialists, marketing, support, and engineering to align everyone.

**Evangelize Policy (broadcast)**
Provide a forum for broadcasting division, department, or team policies and inviting feedback from members.

### Create Groups

Let’s create a couple of groups that are useful for most organizations. Let’s create a public group then a private group with customers. We also want to allow records to be associated with each group.

Unlisted groups and group records are disabled by default. We enable them under Setup on the Chatter Settings page before we create our groups.

* From Setup, enter Chatter Settings in the Quick Find box.
* Click **Chatter Settings** then Edit. 
  ![image](https://media.github.ibm.com/user/40285/files/0f8e991c-c3ea-11e8-9e0e-849cbfa86352)
* Select Allow Records in Groups (1) and Enable Unlisted Groups (2), then click **Save**.

### Create a Public Group

Let’s create a public group named Volunteer Central, where employees can find information and ask questions about volunteer events.

* Open the Chatter tab and click **Groups** on the left, or click the **Groups** tab. This action takes you to the Groups list view.
* Click **New Group**.
 ![image](https://media.github.ibm.com/user/40285/files/a41d4c6c-c3eb-11e8-9940-b2fa406c9ee7)
* Name your group (1) and describe what the group is all about (2). The group access is set to public by default (3), so you don’t have to make any changes here.
* Click **Save**.

That’s it! You’ve created your first group. 
![image](https://media.github.ibm.com/user/40285/files/e701db7e-c3eb-11e8-9116-2cc00daf2b4e)

Next, finish setting up the group. Upload a picture, and add group members.

- Hover over the group picture, click **Add Photo**, then click **Choose File**. Select an image file from your local machine. Depending on the type of group, try to find an interesting or fun image that represents the group or helps people identify with the group.
- Click **Add Members** (1) to seed the group with a few initial members. Ideally, you want to add subject matter experts and influential people in your company. These experts can start collaborating in the group before you send out invitations to others. Also consider promoting one or more members to be group managers. As group managers, they can add more people, update the description, and help you manage the group.


### Create a Private Group with Customers

Private Chatter groups are a great way for product teams to collaborate and share confidential information. Private groups can also have external members. For example, create a private group to collaborate with customers or subject matter experts outside the company.

You create a private group the same way you create a public group, but you assign different access levels.

* Open the Chatter tab and click **Groups** on the left, or click the **Groups** tab. Now you’re in the Groups list view.
* Click **New Group**.
* Add a group name and description.
* In the Group Access section, select **Private** and **Allow Customers**.
* Click **Save.**
* Confirm that you want to create a private group that allows customer members, meaning you’re allowing people outside of your company to join the group.

Private groups that allow customer members have a visual reminder on the group picture—an orange Private With Customers banner. People outside the company who join the group are listed in the Members section under CUSTOMERS (1).
![image](https://media.github.ibm.com/user/40285/files/a3377cb8-c3ec-11e8-80c4-ee6de4f01633)


### New private group

Follow Users, Groups, and Records
Following is a way to keep track of the people and records that interest you. When users follow people and records, they see updates from those people and records in their What I Follow feed. For example, when users join a group, they see updates that are posted to that group in their What I Follow feed.

When you turn on Chatter for your company, it sets up some “following” relationships automatically. For example, if your company has less than 16 Chatter users, all users automatically follow each other and up to 25 most recently used records. If your company has 16 users or more, they automatically follow up to 25 of their most recently used records. They also automatically follow up to 25 users in the company, including:   

- Their manager
- Users who report to their manager
- Their subordinates
- Teammates on their account teams
- Teammates on their opportunity teams

People can change which records and people they follow.
![image](https://media.github.ibm.com/user/40285/files/cb116fa0-c3ec-11e8-842a-d7544176ecf3)

For example, to follow or unfollow a person, hover over their name anywhere in the application and click Chatter follow icon to follow or Chatter unfollow icon to stop following.

Everything comes together on the Chatter tab, where different views and filters let your users choose the updates they see in their feeds. 
![image](https://media.github.ibm.com/user/40285/files/16ea8d4e-c3ed-11e8-8a52-c90bda6536a8)

The feed views (1) show

- Updates from people, groups, and records that your users follow (What I Follow)
- Updates that are relevant to or that mention your users (To Me)
- Updates your users bookmarked (Bookmarked)
- Feed items your users muted (Muted)
- All updates in your company (All Company)

The feed filters (2) give users a way to narrow down the updates and sort them by post date or most recent activity (3).

### Who Sees What?

In your Chatter organization, context is key. Encourage your users to always consider the context of a post.

- Who is the audience? The target audience determines where to post an item.
- What is the relevance for followers?
- How can users engage people who may not otherwise see the post? For example, users can add topics via #hashtags, or @mention someone in a comment.

This table explains where a post appears and who can see it. 

![image](https://media.github.ibm.com/user/40285/files/c420e21a-c3ed-11e8-8f57-4174f006bf4a)
![image](https://media.github.ibm.com/user/40285/files/f82a94a2-c3ed-11e8-838f-4a7940177c47)


## Enable Chatter Email Notifications

When you turn on email notifications for Chatter, users automatically receive emails about new posts, comments, and other changes.

Users can keep the default notifications you set up, or they can configure their own email settings. Users control whether they want to receive emails, the changes they want to be notified about, and how often they’re notified. It’s important to teach your users how they can control the amount of email they receive. Too many email notifications are a pain point for many Chatter users and a common barrier to adoption.

You enable email notifications for all users in Setup, on the Chatter Email Settings page.

* In the Setup Quick Find box, enter Email Settings, then click **Email Settings**. 
  ![image](https://media.github.ibm.com/user/40285/files/1a77e406-c3ee-11e8-973b-089f2161ca6a)
* Select
  - Allow Emails to turn on Chatter email notifications for all users.
  - Allow Email Replies to allow users to reply to email notifications about messages and comments via email instead of navigating to the comment or message in Chatter.
  - Allow Posts via Email to allow users to post to groups using email.
  - Allow Attachments via Email to allow users to include attachments in posts to groups using email.
  - Show mobile app download badges to add App Store and Google Play badges for the Salesforce for Android or iOS to all Chatter email notifications from your internal org. Use badges to help increase user adoption of the Salesforce mobile app.
  ![image](https://media.github.ibm.com/user/40285/files/65486c76-c3ee-11e8-84cd-cbfea20e277d)
* Click Save.


## Configure Chatter Email Notifications

Your users can control whether they receive Chatter notification emails and how many they receive. Users set up Chatter notifications on their Email Notifications page.

To navigate to the Email Notifications page, users click the down arrow next to their name at the top of any Salesforce page and select **My Settings**. Under **My Settings**, they expand the **Chatter** node and click **Email Notifications**.  
![image](https://media.github.ibm.com/user/40285/files/a2249962-c3ee-11e8-972b-3129ee3eff3e)

To receive Chatter mail, **Receive emails** must be selected. The following sections describe configuration settings you can suggest to your users to avoid Chatter email overload.
Email Me When Someone

Strongly advise your users to be selective about their personal email settings. Encourage them to enable notifications that help them stay on top of important discussions without overwhelming them with too much email. 
![image](https://media.github.ibm.com/user/40285/files/e51b9914-c3ee-11e8-8cfe-958b8c10dd8c)
![image](https://media.github.ibm.com/user/40285/files/181f3ee2-c3ef-11e8-9436-0e0ca9475ddb)


### Set Frequency for Personal Digest

Email digests conveniently summarize recent activity in Chatter so your users don’t miss important discussions. They can choose to receive personal or group digests on a daily or weekly basis, and some digest settings are customizable. Personal digests include the updates users see in their own Chatter feed. For example, users see updates about the people, records, and files they follow and the groups they belong to. Group digests include the updates they see in a particular group’s Chatter feed.
![image](https://media.github.ibm.com/user/40285/files/4b0d053c-c3ef-11e8-8dfb-075fd8be7e3d)


### Set Default Frequency for Groups I Join

When your users change the default frequency of notifications for groups they join, it doesn’t affect the groups they already belong to.
![image](https://media.github.ibm.com/user/40285/files/6cf84f62-c3ef-11e8-8286-558623ddca41)


### Share Updates and Upload Content

Chatter helps people share information and collaborate with others inside and outside a Salesforce organization.

A Chatter feed combines the Chatter publisher and the feed. The publisher appears on the Home and Chatter tabs, the user profile page, and group and record pages. Your users can use the publisher to write a post (1), ask a question (2), and create a poll (3). They can also perform other actions that you make available to them on the **More** menu (4). 

![image](https://media.github.ibm.com/user/40285/files/9ab8ca30-c3ef-11e8-8b7d-2645f5ffb967)

Depending on how you set up Chatter for your organization, everyone with access to a post can comment on it, like it, and share it (1). They can also edit, bookmark, add topics to, and mute it (2). People can delete their own posts, but they can’t delete other people’s posts nor posts that Salesforce generates automatically. For example, they can’t delete record updates, such as a post about a changed field on an account. 

![image](https://media.github.ibm.com/user/40285/files/c6fa5668-c3ef-11e8-9348-a00f95816b89)

![image](https://media.github.ibm.com/user/40285/files/d6d85616-c3ef-11e8-83ce-76f1c806e060)

Let’s post to a group and attach a file.

* Navigate to one of the groups you created earlier.
* On the publisher, click **File**.
* Click **Upload a file from your computer**, then click **Choose File**, and browse to a file to upload.
* Click **Open**.
* Enter some information about the file in the publisher, then click **Share**.

The file is uploaded to the group, and group members can click the link in the post to open the file. The file also appears under **Group Files** on the right side of the page.

## Chatter Feeds

When your users follow people and records, they see posts, comments, and updates about them in their Chatter feeds. Chatter feeds appear on profile and group pages, the Home tab, topic pages, and on record pages. Typically, people see feed updates for:

- Posts, comments, and files on Chatter groups they're a member of
-  Shared files and links
-  Tasks and events
-  Record field changes

People can view a particular feed (1) and filter (2) and sort (3) a feed. 
![image](https://media.github.ibm.com/user/40285/files/4761a9aa-c3f0-11e8-93ca-11f3c14d4459)


## Categorize Posts with Topics

Topics give users a way to add searchable terms to their feed posts. Topics are great for adding to an ongoing discussion that is independent of a particular group. For example, your users can add the topic #newtech to many different posts in many different feeds. When any user searches for #newtech, their search results include all posts marked with that topic from all feeds the user has access to.

There are several ways for users to add topics. The fastest way is to use a hashtag (#). For example, when a user posts “I’m going to attend #Dreamforce this year,” “Dreamforce” is automatically added as a topic. Users can click a topic to see all other content that was tagged with that topic. They can also search for a topic and find all posts they can access that include that topic. Your users can also add topics to their own and other’s posts at any time directly in the feed (1, 2).
![image](https://media.github.ibm.com/user/40285/files/67c080cc-c3f0-11e8-8a5d-6381cf6f4a3d)

Besides clicking or searching for a topic, users can click Topics (3) to navigate to the topics list. The topics list shows the topics that people are talking about in your organization. All topic names appear in this list, including topics used solely in private groups or on records. 
![image](https://media.github.ibm.com/user/40285/files/9714ec00-c3f0-11e8-8c49-7d4676770b75)

Apart from adding topics to posts, users can also add topics to any objects you allow. Adding topics to objects is one of the most powerful ways to crowdsource your company's key themes and issues. Once you set it up, your employees can add topics to object records. Doing so can give your business insight into the voice of your customer. Because topics can cross objects, they can provide connections across people, conversations, and records.

### Enable and Configure Topics for Objects

You can enable topics for accounts, assets, campaigns, cases, contacts, contracts, files, leads, opportunities, orders, solutions, custom objects, and English articles. For each object type, you specify which fields to use for topic suggestions.

**Let’s enable topics for contacts.**

* From Setup, enter Topics for Objects in the Quick Find box, then select **Topics for Objects**.
* Select **Contact**.
* Select Enable Topics, then select the fields you want to use for topic suggestions. For example, select **Name** and **Account Name**. From a combination of the selected fields, up to three suggestions are made from the first 2,000 characters.
![image](https://media.github.ibm.com/user/40285/files/f77b9fe4-c3f0-11e8-8790-e4100fd339cc)
* Click Save.

Now, users with access to contacts and appropriate topics permissions can:

- See topic assignments and suggestions on records of that object type
- Add and remove topics from records of that object type
- Use topics on records of that object type to filter their list views
- Click any topic assigned to a record to go directly to the Topic page in Chatter. On the Topic page, you can find other records on the topic, people who are knowledgeable about the topic, and other related information.

## Related Pages
Chatter Training: https://mediacenter.ibm.com/media/Salesforce+-+Chatter+Feed/1_6koxkfzm