Date:2019-11-11

## Overview

Single Sign On (SSO) is a mechanism that allows users to access multiple applications on different servers without having to re-enter their username and password. In SSO environments, Lightweight Third Party Authentication (LTPA) keys are exchanged between Process Portal, Process Federation Server, and each IBM BPM server in the federated environment. When users log in to one server, they can access all the other servers in the federated environment for which they are authorized without getting prompted again for their credentials.

## Component

1.Lightweight Third Party Authentication (LTPA)
IBM Proprietary mechanism for passing security information from one server to another.

2.LTPA Key
A string used by WebSphere to create the LTPA Token. This must be the same on each server trying to do SSO.

3.LTPA Token
A cookie created WebSphere security that contains the user and expiration. It is stored by the client. Once WebSphere AppServer sends it to the client, it no longer exists on the server.

## Troubleshooting

#### Data Collection

1.Core security trace string:
```
*=info:com.ibm.ws.security.*=all:com.ibm.websphere.security.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all
```
2.If the problem is related to authentication to an Enterprise JavaBean:
```
*=info:com.ibm.ws.security.*=all:com.ibm.websphere.security.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all:SASRas=all:ORBRas=all
```

3.If the problem is related to security domains:
```
*=info:com.ibm.ws.security.*=all:com.ibm.websphere.security.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all:SecurityDomain=all
```
#### Data Analysis

Below is a trace example of a normal SSO initial login procedure.

1.Initial login with security enabled.
```
[6/15/09 11:03:12:328 CDT] 00000036 EJSWebCollabo >  preInvoke Entry
                                 com.ibm.ws.webcontainer.srt.SRTServletRequest@7c6a7c6a
                                 com.ibm.ws.webcontainer.srt.SRTServletResponse@195c195c
                                 /
                                 default_host
                                 Snoop Servlet
                                 true
[6/15/09 11:03:12:343 CDT] 00000036 EJSWebCollabo 3   Http Header names and values:
Host=[localhost:9444]
User-Agent=[Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11]
Accept=[text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8]
Accept-Language=[en-us,en;q=0.5]
Accept-Encoding=[gzip,deflate]
Accept-Charset=[ISO-8859-1,utf-8;q=0.7,*;q=0.7]
Keep-Alive=[300]
Connection=[keep-alive]
Cookie=[TJE=; TE3=]
[6/15/09 11:03:12:343 CDT] 00000036 WebCollaborat 3   Invoked and received Subject are null, setting it anonymous/unauthenticated.
[6/15/09 11:03:12:343 CDT] 00000036 WSCredentialI >  <init> Entry
                                 ""
                                 UNAUTHENTICATED
                                 ****
[6/15/09 11:03:12:343 CDT] 00000036 WSCredentialI <  <init> Exit
[6/15/09 11:03:12:343 CDT] 00000036 ContextManage 3   Setting caller subject: Subject:
	Principal: /UNAUTHENTICATED
	Public Credential: com.ibm.ws.security.auth.WSCredentialImpl@60e060e0
[6/15/09 11:03:12:343 CDT] 00000036 PermissionRol 3   No permissions found for /snoop:GET
[6/15/09 11:03:12:343 CDT] 00000036 WebConstraint >  getRequiredRoles :  /snoop GET Entry
[6/15/09 11:03:12:343 CDT] 00000036 WebResourceCo >  matches Entry
                                 /snoop
                                 GET
[6/15/09 11:03:12:343 CDT] 00000036 WebResourceCo 3   Checking URL: /snoop/*
….
[6/15/09 11:03:12:343 CDT] 00000036 PermissionRol 3   DefaultApplication.ear, /snoop:GET required roles are org.eclipse.jst.j2ee.common.internal.impl.SecurityRoleImpl(All Role)
…..
[6/15/09 11:03:12:343 CDT] 00000036 WebResourceCo >  getMatchType Entry
                                 /snoop/*
[6/15/09 11:03:12:343 CDT] 00000036 WebResourceCo 3   URI Match type = PATHNAME
[6/15/09 11:03:12:343 CDT] 00000036 WebResourceCo <  getMatchType Exit
[6/15/09 11:03:12:343 CDT] 00000036 WebConstraint <  getConstraints not null Exit
[6/15/09 11:03:12:343 CDT] 00000036 WebCollaborat 3   URI -  /snoop.GET is protected
```

2.Login after basic auth.
```
[6/16/09 9:56:06:484 CDT] 00000037 EJSWebCollabo 3   Http Header names and values:
Host=[localhost:9444]
User-Agent=[Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11]
Accept=[text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8]
Accept-Language=[en-us,en;q=0.5]
Accept-Encoding=[gzip,deflate]
Accept-Charset=[ISO-8859-1,utf-8;q=0.7,*;q=0.7]
Keep-Alive=[300]
Connection=[keep-alive]
Authorization=[Basic d2FzYWRtaW46dzM4c3BoZXJl]
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica >  handleSSO Entry
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica <  handleSSO: no cookies present in the request. Exit
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica >  handleBasicAuth Entry
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica 3   Authorization: Basic d2FzYWRtaW46dzM4c3BoZXJl
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica 3   BasicAuthEncoding:null
[6/16/09 9:56:06:484 CDT] 00000037 WebAuthentica >  basicAuthenticate Entry
[6/16/09 9:56:06:484 CDT] 00000037 ContextManage >  login(realm, user, password) -> login(defaultWIMFileBasedRealm, wasadmin, *********, system.WEB_INBOUND AppContext: {RedirectURL=null, WebAppName=Default Web Application}) Entry
```

3.Setting SSO domain.
```
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   Setting SSO cookie with name: LtpaToken2 logout false, value: pGZ7oztr2Lt Ze….JIV8gS2NWnJ
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes >  getSSODomain Entry
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   SSO Domain List: .ibm.com
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   SSO Domain will be set to an empty string if a parent domain is not found in the list above.
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   URL: https://pork5-009041030204.austin.ibm.com:9444/snoop
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   Request host: pork5-009041030204.austin.ibm.com
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   Domain match found: '.ibm.com'
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes 3   SSO Domain is: '.ibm.com'
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes <  getSSODomain Exit
[6/16/09 10:07:15:046 CDT] 00000037 WebAttributes <  createCookiesStatic: returning 2 cookie(s) to add to response. Exit
```

4. Additional login with LTPA Token.
```
[6/16/09 9:39:57:765 CDT] 00000037 EJSWebCollabo 3   Http Header names and values:
Host=[localhost:9444]
User-Agent=[Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11]
Accept=[text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8]
Accept-Language=[en-us,en;q=0.5]
Accept-Encoding=[gzip,deflate]
Accept-Charset=[ISO-8859-1,utf-8;q=0.7,*;q=0.7]
Keep-Alive=[300]
Connection=[keep-alive]
Cookie=[TJE=; TE3=N0:C N1:C N2:C N3:C N4:C N5:C N6:C N7:C N8:C N9:C N10:C N11:C N12:C N13:C N14:C N15:C N16:C N17:C N18:C N19:C N20:C N21:C N22:C N23:C N24:C N25:C; LtpaToken2=lBYo2YVPzkgwFI………..Clm/02yUO7EAnhG8JG83DrdTLiqC4AI1noWZAzHC; LtpaToken=hgWQ1fVerkXY1N…………zR/R78VUmz8Cqgt0r0VRkucfVEzi+eyMi4Q==]
[6/16/09 9:39:57:765 CDT] 00000037 WebAuthentica >  handleSSO Entry
[6/16/09 9:39:57:765 CDT] 00000037 WebAuthentica 3   Attempting primary cookie validation for: LtpaToken2
[6/16/09 9:39:57:765 CDT] 00000037 WebAuthentica >  getCookieValues Entry
                                 LtpaToken2
[6/16/09 9:39:57:765 CDT] 00000037 WebAuthentica 3   lBYo2YVPzkgwFI1UlFkTQmqHxmxl+MLriYZXoGS8VP71V7uUG7s8tMfONH…….AI1noWZAzHC
[6/16/09 9:39:57:765 CDT] 00000037 WebAuthentica <  getCookieValues Exit
[6/16/09 9:51:00:218 CDT] 00000037 LTPAServerObj 3   BEGIN VALIDATING TOKEN: some errors may occur, look for SUCCESS:
…..
[6/16/09 9:51:00:218 CDT] 00000037 LTPAToken     <  validate LTPAToken from byte[] Exit
[6/16/09 9:51:00:218 CDT] 00000037 LTPATokenFact <  validateTokenBytes (success) Exit
[6/16/09 9:51:00:218 CDT] 00000037 LTPAServerObj <  validateToken -> SUCCESS: validated using tokenFactoryArray[0]: com.ibm.ws.security.ltpa.LTPATokenFactory Exit
[6/16/09 9:51:00:218 CDT] 00000037 LTPAServerObj 3   Prediction successful:token:com.ibm.ws.security.ltpa.LTPATokenFactory::256
[6/16/09 9:51:00:218 CDT] 00000037 LTPAServerObj <  validateToken Exit
```

## Reference

1. Managing LTPA Keys
https://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/tsec_sslmanagelptakeys.html

2. SSO with WebSphere and Domino
http://www-12.lotus.com/ldd/doc/domino_notes/7.0/help7_admin.nsf/f4b82fbb75e942a6852566ac0037f284/0bb0e5440ba375098525706f0065d9cb?OpenDocument

3. WebSphere Security, SSO ,LTPA and Form Login
https://ibm.ent.box.com/file/540939659327

