
*Please note:*
This is a Draft document for "Feed 2.0". No ETA is provided at this point in time to deliver this component. We'll update this document once we have a date.

---

# Feed 2.0 Features

In context to deliver a greatly improved agent experience for Swarming & Assist scenarios with Skills- and Collaboration-Cases, the CSP team will deliver an alternative Case feed in the Agent workbench called *Feed 2.0*. Its coming with the following key features:

## Consolidated Case Feed
- merged case feed for the whole "case family" (parent and all its skills- and collab-cases)
- context sensitive highlighting of posts depending on the perspective:
    - child cases (skills- and collab-) are displayed in a different color and provide context what Mission and Team own them
    - on a child case, also the merged case feed for the whole "case family" is visibile
    - posts belonging to the other cases in the "Case family" than the one you currently look at are color-highlighted differently and display the Author, Case Number, Support Mission and the Mission Team (you'll be able to see what posts belong where easily)
- ad-hoc, all-at-once load and display of the entire feed
- whatsApp-like conversation pattern (your posts right-aligned, all others left-aligned)
- diplay of profile picture of the person who created the post
- highlighting of post visibility (internal-only, public) with a colored left/right border and textual on the post header

## Filtering & Sorting capabilities
- ad-hoc reverse sorting with one click
- ad-hoc live-search on the entire feed by a given input text
- support for any combination of the following filters
    - by Post author (agent and Client side)
    - by Support Mission
    - by Mission team
    - by Message Type
- full support for browser site search capabilities (since the entire feed is always there)

## Feed Enrichments (through virtual feed posts)
- visualization of key case-events on the feed
    - case create event
    - Task create / close event
    - Task went overdue event

## Preparation for Support of Tasks
- Case-associated Tasks will be displayed as vertical bars from the moment they have been created until they close
- mouse-hover to see what the task subject is
- visual indicator when a task went overdue
- tasks are loaded and visualized from the entire case family

## Misc
- easy way to refresh/reload the feed
- decent performance when loading the feed
- link to slack channel to provide feedback (#csp-feed-v2)
- link to DBA-Education documentation

---

# Screenshots and details

![image](https://media.github.ibm.com/user/19331/files/5be23200-7c96-11e9-8f5f-6e64308a0301)

- 1 - in addition to the normal "Feed" tab, CSP will provide an additional tab called "Feed 2.0". Clicking it will load and display the full feed of the whole "Case family" (inluding the parent and all child cases)
- 2 - your personal posts will show right aligned, posts from any other contributor are left aligned (like you know from common messengers). Only exception are Events which utilize the full width.
- 3 - every post comes with a little side border (left or right): blue borders mean IBM internal only, orange borders are public and visible to our clients (this is also displayed textual on the header of every post, Internal vs. Public)
- 4 - Case-attached Tasks are displayed as vertical bars on the right side next to the feed. These bars start right next to the "taskCreated" event post and they end with the "taskClosed" event post and exist for all posts that are made in beetween. With that the task aligns nicely to the time that passes and all posts that are made from its start to its end. Mouse-Hover over the task displays the task subject (which is 'Customer communication' at the moment for the task that CSP auto-creates when the "Follow-up" date is filled during Post)
- 5 - The feed now supports and displays event posts. These cover important events that happen over the lifecycle of a case with some additional detail, like you see here "caseCreated" and "taskCreated"
- 6 - Button to reverse order the feed 
- 7 - Button to open the filter bar (read on, more details below)
- 8 - Text filter, filters instantly as you type on the entire feed

![image](https://media.github.ibm.com/user/19331/files/fe59df80-7cad-11e9-8da7-3abadeca4e34)

- 9 - another event post thats showing the details on the caseCreated event for the new Skills case
- 10 - the post on top exists only on the Skills Case, its virtually pulled into the full "Case Family" feed. The header on Skills Case posts is coming with light-blue background color and the Skills Case number aswell as the owning Support Mission and Mission team is shown there (and the post visibility as usual). The header on Collab Cases come with a light-purple background to differentiate them.

Now lets look at the feed from the perspective of the Skills Case - you'll see the Feed provides the same amount of posts, however there are slight differences relative to the perspective you look at them:

![image](https://media.github.ibm.com/user/19331/files/70cebd80-7cb6-11e9-84e6-b07b84aecfcb)

- 11 - on the perspective of the skills case, the post shows up with a light-gray background, which means that the post really belongs here, to the actual case record that is currently looked at (light-gray always means *this*)
- 12 - the parent case feed posts now show up differently in a darker-gray background
- 13 - on this screenshot the filter bar is expanded (by clicking on the filter button) and the "Filter Selector" is shown there
- 14 - in this expample  one filter is applied, which is indicated with the light-blue badge holding the -1- on the filter button. If you click this button again, the filter bar will collapse, the badge turns gray, still shows the number of filters that are selected, however non of these now hidden filters is applied anymore. This way, its possible to easily turn off filtering and turn them on again. The "Filter Selector" dropdown on the filter bar contains a brief summary of the filters that are applied (in this example TextPosts only)

Lets have a closer look on the filtering capabilities on the "Filter Selector":

![image](https://media.github.ibm.com/user/19331/files/e2ad0400-7cc2-11e9-99cf-b01b0e0b2094)

- 15 - clicking on the "Filter Selector" opens a dropdown thats holding all the filter options
- 16 - the "Authors" section lists all users who ever made any contribution to the feed. Client contributors (who normally posted on the Community) are prefixed with "Client" 
- 17 - On the "Case Family" the full list of all cases that belong together (means the Parent and all its Skills- and Collab-Cases) are listed here. This allows to filter on a specific (and complex) case context. The Case is coming with the case number (Severity, case type), the Mission and Team it belongs to and its title.
- 18 - Filter by "Missions" allows to filter by one or multiple missions. E.g. in a multi-mission swarming scenario it is possible to filter on a specific (and complex) mission context. The mission is coming with its name and the mission alias in brackets. 
- 19 - Filter by "Mission team", allows to filter on various scenarios that where one or multiple teams are involved. The teams come with its Support mission and Team name
- 20 - On the "Message Types" section its possible to filter on specific types, e.g. to filter on events vs. Text Posts a.s.o

## Filtering operators
The selected options within a section (e.g. on Authors) stand in an OR relationship, whilst the sections stand in an AND relationship. As an example, if 2 authors are selected and 1 Mission the logic is : `(AuthorA OR AuthorB) AND MissionX`. The "Filter Selector" bar also display this logic as a summary. In addition to the filters on the "Filter Selector" you can combine these with the text filter.



