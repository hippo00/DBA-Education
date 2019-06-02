
Collaboration Cases (short **CollabCase**) are vehicles to perform Swarming with individuals outside of the Salesforce Platform, e.g. L3 or Development. A CollabCase gets bridge into a ticket on the Development System Side and their status aswell as the feeds get bi-directional synchrinized with the goal to keep the Support Agent in the Platform and the Development member in their tooling without the need to swivel-chair.

## Collaborations: what are they, why are they used?
* From the Salesforce console, a Support Agent selects a “New Collaboration” Quickaction tab in order to work with a colleague in Development over a communications bridge.  This colleague does not need to have a Salesforce license (and probably wouldn’t have a license)
* Collaborations are available to all bridge users (currently available in RTC, ICD, and Jira; expected next with ServiceNow and Github…)
* Common data elements from the Salesforce Case are sent over bridge
* Reverse Bridge communication differences (from the remote repository back to Salesforce): RTCv6 uses a plugin, RTCv5 uses email; ICD uses a webservice call; Jira & Github use webhooks

## Configure Remote Repository for a Support Mission

The following information is needed to create a "Remote Repository" record for each RTC workitem type.

* Remote Repository: name of this remote repository
* Adapter Type: (RTC, Jira, etc)
* ProjectURL: URL of the RTC instance. ex: igartc03.swg.usma.ibm.com
* RTC Server Type: (Example: jazz OR ccm)
* Project Area Name (Example:  IBM Support Portal)
* Project Area Name & Server Type: get your url that you use to access
  RTC, eg. https://igartc03.swg.usma.ibm.com/jazz/web/projects/IBM%20Support%20Portal the part after project will have the project name, the part before web will have server type  plus this gives us server 
* Project Area ID: (Example: _PJPNZrZKEeGQZNU0I76oH) 
  To get the project area id, click the Manage This Project Area link, then copy the URL:  e.g. https://igartc03.swg.usma.ibm.com/jazz/admin#action=com.ibm.team.process.editProjectArea&itemId=_ZvidtrZKEeGQZNU0I76oHAthe Project Area ID is the itemId= (note the underscore is important)
* Port Number (Example: 443)
* Support Mission:  name of your Support Mission used in Salesforce.  Your Support Mission administrator will be responsible for updating Salesforce with the above data.
* Filed Against:  ID of the “Filed Against” value you would like to populate (note:  ID is not a text value)

![image](https://media.github.ibm.com/user/19331/files/8c584f08-b682-11e8-8ab4-38288af9ad49)


... more Content coming shortly