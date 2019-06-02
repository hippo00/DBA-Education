
This document describes the Case **Status** / **Internal Status** mapping and the **Usage** of the status codes. Please be aware that every Case record type comes with two status codes, the actual **Status** that is client-facing visible on the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/portal">Community Portal</a>, and the **Internal Status** that is just for IBM internal purpose and is (together with the Status) visible on the <a href="/dba-support/DBA-Education/#/DBA-Education/uis/workbench">Agent Workbench</a>. IBM Support Agents only set the **Internal Status**, the **Status** gets auto-selected based on the following mapping tables:

## Parent Case

Status | Internal Status | Usage
-----|-----|-----
**New Case** | New Case Opened | This is the default status for any new Case.  Indicates that no work has been started on this Case
**Waiting on IBM** | Client Has Replied | When a client updates a Case via the Community, the case moves into this Status.  Support should review the reply
**Waiting on IBM** | Diagnostic File has been received | When new data is received on EcuRep from the client.  This includes files or e-mails on EcuRep
**IBM is working** | IBM is working | When the Case Owner is working/progressing the case, and no feedback/response is needed by a 3rd party.
**Awaiting your feedback** | Waiting on Client | When IBM provides a response to the Client and needs their feedback to progress the case
**Waiting on IBM** | Translation Needed | **Please Note:** Currently not in use
**IBM is working** | Waiting on IBM Software Update | When IBM has identified the issue, and is keeping the Case open while waiting for a Fix to be provided to the client

## Skill Case

Status | Internal Status | Usage 
-----|-----|-----
**New Case** | SME is Needed | Indicates that no work has been started on this Skills Case. **Please Note:** Currently not actively used, this is not the default Status when a new Skills Case was just created.
**SME Needed** | SME is Needed | Indicates that the Skills Case was not yet assigned and a SME is needed to take ownership of the Skills Case
**IBM is working** | SME is Working | The Skills Case owner flips the Case to this status when he/she has started to work on the Skills Case
**IBM is working** | SME Work Complete | The Skills Case owner flips the Case to this status when he/she has finished 
**Waiting for IBM** | Diagnostic File has been received | Indicate to the Skills Case owner that a previously requested diagnostic file from the client has been received and that the Skills Case owner is now expected to work on it 
**Waiting for IBM**  | Diagnostic File Needed | Indicate to the Parent Case owner, that the Skills Case owner needs a diagnostic file from the client

## Related Pages
* <a href="https://mediacenter.ibm.com/media/Salesforce+-+Workflows+and+Case+Status/1_jy6ww620" target="_blank">Training Video - Workflow and Case Status</a>


