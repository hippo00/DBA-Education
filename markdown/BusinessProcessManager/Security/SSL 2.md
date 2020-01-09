Date:2019-11-12

## Overview

Secure Sockets Layer (SSL) is the most widely used protocol for implementing cryptography on the Web. SSL uses a combination of cryptographic processes to provide secure communication over a network. SSL provides a secure enhancement to the standard TCP/IP sockets protocol used for Internet communications. Secure sockets layer is added between the transport layer and the application layer in the standard TCP/IP protocol stack.

WebSphere Application Server uses Java Secure Sockets Extension (JSSE) as the SSL implementation for secure connections. JSSE is part of the Java 2 Standard Edition (J2SE) specification and is included in the IBM implementation of the Java Runtime Extension (JRE).

## Component

1.SSL handshake
Communication using SSL begins with an exchange of information between the client and the server. This exchange of information is called the SSL handshake. The three main purposes of the SSL handshake are:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Negotiate the cipher suite
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The SSL session begins with a negotiation between the client and the server as to which cipher suite they will use. A cipher suite is a set of cryptographic algorithms and key sizes to encrypt data.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Authenticate identity
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authenticating the server allows the client to be sure that the server represents the entity that the client believes the server represents.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Establish information security by agreeing on encryption mechanisms
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The client and server exchange information that allows them to agree on the same secret key. For example, with RSA, the client uses the server's public key, obtained from the public key certificate, to encrypt the secret key information.

2.JSSE
JSSE handles the handshake negotiation and protection capabilities that are provided by SSL to ensure secure connectivity exists across most protocols. JSSE uses on X.509 certificate-based asymmetric key pairs for secure connection protection and some data encryption.

3.X.509 certificates
The digitally-signed X.509 certificates are used for SSL. X.509 certificates include the information about distinguished name, expiration, serial number, algorithm ID, Issuer and so on. A certificate must be signed by a CA because the certificate represents the identity of an entity to the general public.

4.Keystore
A keystore is a database of key material. It consists of an entity's identity and its private key, and can be used for a variety of cryptographic purposes. There are various types of keystores available, including "PKCS12" and "JKS."

5.Truststore
A truststore is a keystore which is used when making decisions about what to trust. If you receive some data from an entity that you already trust, and if you can verify that the entity is the one it claims to be, then you can assume that the data really came from that entity.

6.Cipher suite 
A cipher suite is a combination of cryptographic parameters that define the security algorithms and key sizes used for authentication, key agreement, encryption, and integrity protection.

7.Public key cryptography
Public key cryptography uses an encryption algorithm in which two keys are produced. One key is made public while the other is kept private. The public key and the private key are cryptographic inverses; what one key encrypts only the other key can decrypt. Public key cryptography is also called asymmetric cryptography.

## Troubleshooting

#### Data Collection

1.MustGather for JSSE, SSL or JCE problems
http://www-01.ibm.com/support/docview.wss?uid=swg21162961

2.SSL=all trace tells about
* Which type of SSL configuration is selected (Dynamic, programmatic, managed scope, direct selection)
* Which truststore/keystore is used

3.javax.net.debug trace tells about
* Certificate chain sent from remote
* Distinguished name, expiration, serial number, Issuer etc.,,,
* Cipher Suite used in the session

#### Data Analysis

Below is an example of JSSE trace on client side.

1.Send “Client hello” to SSL server
```
[3/3/10 11:30:11:828 JST] 00000021 SystemOut     O   *** ClientHello, TLSv1
[3/3/10 11:30:11:828 JST] 00000021 SystemOut     O   Cipher Suites: [SSL_RSA_WITH_RC4_128_MD5, SSL_RSA_WITH_RC4_128_SHA, SSL_RSA_WITH_AES_128_CBC_SHA,SSL_DHE_RSA_WITH_AES_128_CBC_SHA,, SSL_DHE_DSS_WITH_RC4_128_SHA]
[3/3/10 11:30:11:828 JST] 00000021 SystemOut     O   [write] MD5 and SHA1
```
2.Receive “Server hello” from SSL server
```
[3/3/10 11:30:11:937 JST] 00000021 SystemOut     O   *** ServerHello, TLSv1
[3/3/10 11:30:11:937 JST] 00000021 SystemOut     O   Cipher Suite: SSL_RSA_WITH_RC4_128_MD5
```
3.Receive “Certificate chain” from SSL server
```
[3/3/10 11:30:11:968 JST] 00000021 SystemOut     O   *** Certificate chain
[3/3/10 11:30:11:984 JST] 00000021 SystemOut     O   chain [0] = [
[ Version: V3
  Subject: CN=mods.makuhari.japan.ibm.com, OU=Terms of use at www.verisign.com/cps/testca (c)05, OU=IBM, O=SWTS, L=Makuhari, ST=Toyko, C=JP
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
 Validity: [From: Sun Feb 28 09:00:00 JST 2010,
               To: Mon Mar 15 08:59:59 JST 2010]
  Issuer: CN=VeriSign Class 3 Secure Server 1024-bit Test CA, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)07, OU=VeriSign Trust Network, OU=FOR TEST PURPOSES ONLY, O="VeriSign, Inc.", C=US
  SerialNumber: [75567502602804770198902073950259089487]
[3/3/10 11:30:11:984 JST] 00000021 SystemOut     O   chain [1] = [
[ Version: V3
  Subject: CN=VeriSign Class 3 Secure Server 1024-bit Test CA, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)07, OU=VeriSign Trust Network, OU=FOR TEST PURPOSES ONLY, O="VeriSign, Inc.", C=US
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
 Validity: [From: Tue Apr 24 09:00:00 JST 2007,
               To: Mon Apr 24 08:59:59 JST 2017]
  Issuer: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
  SerialNumber: [19080311188043284684508743335647212147]
…
[3/3/10 11:30:11:984 JST] 00000021 SystemOut     O   chain [2] = [
[ Version: V1
  Subject: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
```
4.Check whether server certificate is trusted( Search signer certificate in truststore)
```
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa >  checkServerTrusted Entry
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3   Certificate information:
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3     Subject DN: CN=mods.makuhari.japan.ibm.com, OU=Terms of use at www.verisign.com/cps/testca (c)05, OU=IBM, O=SWTS, L=Makuhari, ST=Toyko, C=JP
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3     Issuer DN: CN=VeriSign Class 3 Secure Server 1024-bit Test CA, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)07, OU=VeriSign Trust Network, OU=FOR TEST PURPOSES ONLY, O="VeriSign, Inc.", C=US
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3     Serial number: 75567502602804770198902073950259089487
…
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3   Certificate information:
[3/3/10 11:30:11:984 JST] 00000021 WSX509TrustMa 3     Subject DN: CN=VeriSign Class 3 Secure Server 1024-bit Test CA, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)07, OU=VeriSign Trust Network, OU=FOR TEST PURPOSES ONLY, O="VeriSign, Inc.", C=US
[3/3/10 11:30:12:000 JST] 00000021 WSX509TrustMa 3     Issuer DN: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
[3/3/10 11:30:12:000 JST] 00000021 WSX509TrustMa 3     Serial number: 19080311188043284684508743335647212147
…
[3/3/10 11:30:12:000 JST] 00000021 WSX509TrustMa 3   Certificate information:
[3/3/10 11:30:12:000 JST] 00000021 WSX509TrustMa 3     Subject DN: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
```
<p>5.Is the server trusted? (Is the signer certificate for the server certificate found?)</p>
  
```
[3/3/10 11:30:12:000 JST] 00000021 SystemOut     O   Found trusted certificate:
[3/3/10 11:30:12:015 JST] 00000021 SystemOut     O   [
[ Version: V3
  Subject: CN=mods.makuhari.japan.ibm.com, OU=Terms of use at www.verisign.com/cps/testca (c)05, OU=IBM, O=SWTS, L=Makuhari, ST=Toyko, C=JP
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
 Validity: [From: Sun Feb 28 09:00:00 JST 2010,
               To: Mon Mar 15 08:59:59 JST 2010]
  Issuer: CN=VeriSign Class 3 Secure Server 1024-bit Test CA, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)07, OU=VeriSign Trust Network, OU=FOR TEST PURPOSES ONLY, O="VeriSign, Inc.", C=US
  SerialNumber: [75567502602804770198902073950259089487
[3/3/10 11:30:12:062 JST] 00000021 SystemOut     O   Found trusted certificate:
[3/3/10 11:30:12:062 JST] 00000021 SystemOut     O   [
[ Version: V1
  Subject: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
 Validity: [From: Sat Apr 20 09:00:00 JST 2002,
               To: Wed Aug 02 08:59:59 JST 2028]
  Issuer: OU=For Test Purposes Only, OU=VeriSign Trust Network, OU=Terms of use at https://www.verisign.com/cps/testca/ (c)02, OU=Class 3 TEST Public Primary Certification Authority - G2, O="VeriSign, Inc.", C=US
  SerialNumber: [104676769249816804185635383688073198822]
```
6.Server is trusted by the SSL client
```
[3/3/10 11:30:12:062 JST] 00000021 WSX509TrustMa 3   Server is trusted by all X509TrustManagers.
[3/3/10 11:30:12:062 JST] 00000021 WSX509TrustMa <  checkServerTrusted Exit
```
7.Receive “Certificate request” from SSL server
```
[3/3/10 11:30:12:078 JST] 00000021 SystemOut     O   *** CertificateRequest
[3/3/10 11:30:12:078 JST] 00000021 SystemOut     O   Cert Authorities:
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   <CN=mods.toyosu.japan.ibm.com, O=IBM, C=US>
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   <CN=hnao, OU=user, O=stsc, C=US>
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   <CN=jclient, OU=SWG, O=IBM, C=US>
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   <CN=jserver, OU=SWG, O=IBM, C=US>
…
```
8.Receive “Server hello done” from SSL server
```
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   *** ServerHelloDone
```
9.Send “Client certificate” to SSL server
```
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   matching alias: hnao_client_certificate02
[3/3/10 11:30:12:093 JST] 00000021 WSX509KeyMana >  normalizeAliasName Entry
                                 hnao_client_certificate02
[3/3/10 11:30:12:093 JST] 00000021 WSX509KeyMana <  chooseClientAlias Exit
                                 hnao_client_certificate02
[3/3/10 11:30:12:093 JST] 00000021 SystemOut     O   chain [0] = [
[ Version: V3
  Subject: CN=hnao, OU=user, O=stsc, C=US
  Signature Algorithm: SHA1withRSA, OID = 1.2.840.113549.1.1.5
 Validity: [From: Wed Jan 13 00:27:50 JST 2010,
               To: Thu Jan 13 00:27:50 JST 2011]
  Issuer: CN=hnao, OU=user, O=stsc, C=US
  SerialNumber: [5292370009037]
```
10.Send “Client key exchange” to SSL server
```
[3/3/10 11:30:12:109 JST] 00000021 SystemOut     O   *** ClientKeyExchange, RSA PreMasterSecret, TLSv1
[3/3/10 11:30:12:109 JST] 00000021 SystemOut     O   Random Secret:  { 3, 1, 228, 152, 55, 141, 9, 21, 110, 20, 191, 108, 121, 121, 19, 136, 117, 141, 244, 29, 
```
11.Send “Certificate Verify” to SSL server
```
[3/3/10 11:30:12:312 JST] 00000021 SystemOut     O   *** CertificateVerify
```
12.Send “Change cipher spec” to SSL server
```
[3/3/10 11:30:12:328 JST] 00000021 SystemOut     O   WebContainer : 0, WRITE: TLSv1 Change Cipher Spec, length = 1
```
13.Send “Finished” to SSL server
```
[3/3/10 11:30:12:359 JST] 00000021 SystemOut     O   *** Finished
```
14.Send “Change Cipher Spec” to SSL server
```
[3/3/10 11:30:12:375 JST] 00000021 SystemOut     O   WebContainer : 0, READ: TLSv1 Change Cipher Spec, length = 1
```
15.Receive “Finished” from SSL server
```
[3/3/10 11:30:12:375 JST] 00000021 SystemOut     O   *** Finished
```

#### Reference

1. Java Authentication and Authorization Service (JAAS) Reference Guide
http://java.sun.com/j2se/1.5.0/docs/guide/security/jsse/JSSERefGuide.html#SSLOverview

2. WebSphere Application Server Security Handbook
http://www.redbooks.ibm.com/redbooks/pdfs/sg246316.pdf

3. SSL PD Education
https://ibm.ent.box.com/file/540907035140

