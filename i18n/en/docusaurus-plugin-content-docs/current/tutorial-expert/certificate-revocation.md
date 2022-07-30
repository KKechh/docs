---
sidebar_position: 4
---

# Certificate Revocation

How to void the certificate you applied for

:::danger Note
This action will render your service inaccessible!
:::


enter

```bash title="Query all current certificates"
acme.sh --list
````

View the certificate stored by the current acme.sh client

```bash title="revoke certificate"
#revoke certificate
acme.sh --revoke -d <common name of certificate> --server https://acme.hi.cn/directory

#Remove this certificate from the acme.sh directory
acme.sh --remove -d <common name of certificate> --server https://acme.hi.cn/directory
````