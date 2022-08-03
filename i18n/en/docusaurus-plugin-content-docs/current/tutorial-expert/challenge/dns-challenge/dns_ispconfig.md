---
sidebar_position: 51
slug: /tutorial-expert/challenge/dns-challenge/dns_ispconfig.sh
---


# ISP Config

```bash
# highlight-start
export ISPC_User="remoteUser"
export ISPC_Password="remotePassword"
export ISPC_Api="https://ispc.domain.tld:8080/remote/json.php"
export ISPC_Api_Insecure=1

acme.sh --issue \
# highlight-start
  --dns dns_ispconfig \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```