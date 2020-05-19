Date:2020-01-06

## Overview

IBM Business Automation Insights (BAI) is a platform-level component that provides visual insights to business owners and that feeds a data lake to infuse artificial intelligence into IBM Digital Business Automation.
This topic will cover the architecture, usage and troubleshooting of this component.

## Prerequisites

ICP for Automation Support Education – BAI is part of the ICP4Automation Cloud Pak and this set of material provides a basis for understanding the platform and technology involved.

## Component

1.Installation
&nbsp;&nbsp;&nbsp;&nbsp;a. [IBM Cloud Private (being deprecated) – Getting Started](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/tut_getting_started.html)
&nbsp;&nbsp;&nbsp;&nbsp;b. [Certified Kubernetes (i.e. OpenShift)](https://github.com/icp4a/cert-kubernetes/tree/19.0.2/BAI)
&nbsp;&nbsp;&nbsp;&nbsp;c. In 19.0.3, [Single Node Installation](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_sn_overview.html) is available

2.Emitters
&nbsp;&nbsp;&nbsp;&nbsp;a. BPMN
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Configuring](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_top_bpmn_emitter_install_config.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Troubleshooting](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/tsk_bai_bpmn_emitter_top_troubleshoot.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.Trace for WebSphere: `*=info: com.ibm.bpm.mon.oi.*=all: com.ibm.bpm.bui.emitter.*=all`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Uses DEF events
&nbsp;&nbsp;&nbsp;&nbsp;b. ODM
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Configuring](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_odm_emitter_install_config.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)[Troubleshooting ODM emitter](https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.distrib.troubleshooting/topics/tsk_odm_emitter.html)
&nbsp;&nbsp;&nbsp;&nbsp;c. Case
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Configuring](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_top_case_emitter_install_config.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Troubleshooting
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.Trace for WebSphere: com.ibm.dba.oi.*=finest:com.ibm.oi.icm.*=finest
&nbsp;&nbsp;&nbsp;&nbsp;d. Content
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)[Configuring](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_cntevmtr_config.html)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Troubleshooting
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.Log in to your Kafka broker server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.Go to your KAFKA_HOME/config directory
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Edit the log4j.properties file and set log4j.logger.kafka=DEBUG,kafkaAppender
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.Restart the Kafka broker server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.Collect the server.log in the KAFKA_HOME/logs directory

3.[Kafka](https://kafka.apache.org/quickstart)
&nbsp;&nbsp;&nbsp;&nbsp;a. Kafka is the messaging used by BAI.  It is a publish-subscribe messaging system.
&nbsp;&nbsp;&nbsp;&nbsp;b. [Quick Start with Confluent Apache Kafka](https://github.com/confluentinc/cp-helm-charts)
&nbsp;&nbsp;&nbsp;&nbsp;c. [Securing communications](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/tsk_bai_security_top_comms_from_emitters_to_kafka.html)

4.[Apache Flink](https://flink.apache.org/)
&nbsp;&nbsp;&nbsp;&nbsp;a. Flink is the event processing component of BAI.  It ingests and processes the content  from the emitters
&nbsp;&nbsp;&nbsp;&nbsp;b. Event emitters send raw events toward a Kafka topic, where they are consumed by a dedicated Flink job. These Flink jobs build the resulting time series events and summaries.

5.[Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
&nbsp;&nbsp;&nbsp;&nbsp;a. Elasticsearch is the indexed data used for the Kibana dashboards

6.[Kibana](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_dashboards.html)
&nbsp;&nbsp;&nbsp;&nbsp;a. Kibana dashboards provide visualizations of the data 

7.[Hadoop (HDFS)](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_top_data_lake.html)
&nbsp;&nbsp;&nbsp;&nbsp;a. Processing jobs can store data in a Hadoop Distributed File System (HDFS) data lake. In a typical installation of Business Automation Insights, you set up long term storage in a Hadoop distributed file system (HDFS) data lake for further downstream processing of your business data.
&nbsp;&nbsp;&nbsp;&nbsp;b. Because HDFS is long-term storage and intended as a historical archive and for machine learning processes, active summaries are not stored to HDFS but only exposed in Elasticsearch or in Kibana dashboards.
&nbsp;&nbsp;&nbsp;&nbsp;c. Developer edition does not support HDFS

## Troubleshooting

Questions to ask:
1.What is the status of the BAI pods?
&nbsp;&nbsp;&nbsp;&nbsp;a. `kubectl get pods --selector=release=<release-name>  -n <namespace-name>`
The output should resemble:
![图片 1](https://media.github.ibm.com/user/228551/files/e71c0680-3072-11ea-962e-8a6fbc38c8d8)

2.Collect logs for pods not in ready or completed state:
&nbsp;&nbsp;&nbsp;&nbsp;a. `kubectl describe <pod-name> -n <namespace-name>`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`kubectl logs <pod-name> -n <namespace-name>`

3.What emitters are being used (ex: BPMN, ODM, etc.)?

4.Can messages be put to the Kafka topic?  [See Send some messages](https://kafka.apache.org/quickstart#quickstart_send)

#### Data Collection

Collect the data outlined at the following document:  [Business Automation Insights MustGather](https://www.ibm.com/support/pages/mustgather-business-automation-insights-bai)
This document contains details for general data collection and specifics for the emitters and should be updated as new emitters are added.

#### Data Analysis

1.The first step to diagnosing any problem is to ensure all the pods are up and running.  If any pods are not running, focusing on that first should be priority.  Using the describe kubectl command can also produce information indicating the source of the failure, such as:

![图片 1](https://media.github.ibm.com/user/228551/files/6f021080-3073-11ea-9de3-7d74673e9566)

2.Analyze the event logs.  Using the command from the MustGather, the logs should look like:

![图片 1](https://media.github.ibm.com/user/228551/files/978a0a80-3073-11ea-80dd-4417983d8bdb)
The errors here may give you a guide on what sort of information to look into next

3.Emitter specific analysis.  This will vary from emitter to emitter.
&nbsp;&nbsp;&nbsp;&nbsp;a. BAW Emitter
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)The defconfig.xml file must be present  in the BAW Dmgrprofile at < BAW_Install_Root >/profiles/DmgrProfile/config/cells/< CellName >and should be synchronized (so identical) on all BAW nodes  configuration at < BAW_Install_Root >/profiles/Node1Profile/config/cells/< CellName >
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)The < defconfig: DefListenerConfig >  section should contain the three defPropertiesname="JMS_QUEUE_JNDI"  value="jms/monitorQueue“name="JMS_QUEUE_CF_JNDI" value="jms/monitorCF“name="JMS_AUTHENTICATION_ALIAS" value=“...“the values must match the JMS configuration
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)Analyze trace BAW trace files after setting trace mentioned in MustGather
  
4.More details on troubleshooting can be found at this document: [BAI Troubleshooting](https://ibm.ent.box.com/file/351595473564)
  
#### Reference

1.[Business Automation Insights MustGather](https://www.ibm.com/support/pages/mustgather-business-automation-insights-bai)
2.[Business Automation Insights Knowledge Center](https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.bai/topics/con_bai_overview_top.html)
3.[BAI on Certified Kubernetes](https://github.com/icp4a/cert-kubernetes/tree/19.0.2/BAI) – These contain the instructions to setup with OpenShift or other certified Kubernetes
4.[BAI Skills Transfers](https://ibm.ent.box.com/s/xz1aa8ucg61hofgbixi7iqq06zummwlh) – Contains both component specific and release specific skills transfers geared towards L2.

