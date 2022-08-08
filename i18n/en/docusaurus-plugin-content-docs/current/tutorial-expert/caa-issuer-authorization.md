---
sidebar_position: 5
---

# CAA Authorization

## Preface

As for the purpose of this tutorial, we will not recommend to set CAA without any security requirement. However, if you really wanna set, we will also accept this authorization and perform the issuance.

:::caution

- Due to mechanism of CAA is based on DNS, you may modify the record after you apply it, so please do not be panic to wait its effecting.
- As the same DNS TTL & Cache reason, we also do not recommend to set CAA for newbie.

:::


## CAA Exceptions

If you see the `acme.sh` shows this status, it mean you must set CAA to continue.
![](/docs/caa-non-compliant.png)

### CAA Configuration

![](/docs/caa-grant-tutorial.png)

| DNS Host | DNS Type | DNS Value |
| ----------- | ----------- | :----------- |
| @      | CAA       | `0 issue "hi.cn"`
| @      | CAA       | `0 issue "ssl.com"`
| @      | CAA       | `0 issue "trust-provider.com"`
| @      | CAA       | `0 issue "certum.pl"`
| @      | CAA       | `0 issuewild "hi.cn"`
| @      | CAA       | `0 issuewild "ssl.com"`
| @      | CAA       | `0 issuewild "trust-provider.com"`
| @      | CAA       | `0 issuewild "certum.pl"`
