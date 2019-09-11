Owner: @Enrico Monteleone

# Backup, High Availability (HA), and Disaster Recovery (DR)

## Business Automation Workflow (BAW) / Business Process Manager (BPM)

### Strategy

Backup and recovery planning depends on business requirements. When planning a production environment, all stakeholders should be involved in the planning process to create a system that will meet business requirements with respect to data loss tolerance and time to recovery, balanced with costs.

### Tools

Many IBM and third-party tools exist for backup and recovery for every component in the production environment. All stakeholders, including networking, systems, storage, database and application teams must work together to create a complete plan that ensures a stable environment and minimizes risk against unplanned outages by using the best set of hardware and software to manage, maintain and test backup, high-availability, and recovery systems.

### Backup

Backing up data

https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.admin.doc/topics/cadm_recovery_backup.html

Backing up databases

https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.imuc.doc/topics/tins_backup_databases.html

#### Troubleshooting Backups

### High-Availability (HA)

Considerations for HADR setup and configuration

https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.imuc.doc/topics/chadr_considerations.html

Business Automation Workflow Workflow with DB2 HADR for Production

https://www.ibm.com/support/knowledgecenter/SS8JB4/com.ibm.wbpm.cloud.vap.doc/topics/rbpm_priclovsp_predfconfig.html

#### Troubleshooting HA


### Disaster Recovery (DR)

#### Troubleshooting DR


## WebSphere (WAS)

Since IBM Business Process Manager (BPM) runs on WebSphere Application Server (WAS), you may also need to consider WAS HA and DR, especially if other non-BPM application are hosted on WAS. Clients often must work with their WAS and infrastructure teams to ensure an overall and comlete HA and DR configuration.

WebSphere Application Server
https://www.ibm.com/support/knowledgecenter/SSAW57/mapfiles/product_welcome_wasnd.html

## Database

Since IBM Business Process Manager supports IBM Db2, Microsoft SQL Server and Oracle databases, you also must consider the database HA and DR strategy and configuration. Clients often must work with their database administrators (DBAs) to ensure an overall and comlete database HA and DR configuration.

IBM Db2

IBM Db2 Version 11.1 Knowledge Center
https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.welcome.doc/doc/welcome.html

Db2 - Troubleshooting HADR
https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.admin.trb.doc/doc/c0060652.html

Microsoft SQL Server


Oracle


