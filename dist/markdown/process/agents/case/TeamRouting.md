### Overview

Cases are routed to support missions based on product. From there it is possible to identify a group group of eligible engineers, who could work and solve the case (aka team) based on isolation rules using criterias like skill, region, ... 

The possible target teams are put in a ranking order based on the matching criterias. If the best fitting target team has no available engineer the next best 

team is selected. For Sev1 cases a selection has to be done anyway for non-Sev1 cases routing to team is to be done as soon as the Business Hours of the customer

is started. From that team the assignment process picks an engineer to be the owner of the case.

### Roles
 * **Case Creator** - Customer or Engineer creating a new case
 * **System** - 	Salesforce System
 * **Watson Classification Service** - Watson Service used for automatic classifcation of the Case

### Flow

<a href="https://ibm.blueworkslive.com/scr/processes/13ebf9e4f6#bpmn" target="_blank">BlueWorks Live flow</a>
<img src="https://media.github.ibm.com/user/19331/files/d4847bde-a634-11e8-949b-e35042c46305" width="800">

### Documentation and Training Materials

### Changelog
 * **2018-05-03** : version 1.0 released, Michaela Trautwein-Ostner, Tine Offermanns, Thomas Reinecke