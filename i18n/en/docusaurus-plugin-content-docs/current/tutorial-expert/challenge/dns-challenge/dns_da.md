---
sidebar_position: 27
slug: /tutorial-expert/challenge/dns-challenge/dns_da.sh
---

# DirectAdmin

```bash
# highlight-start
export DA_Api="https://remoteDAUsername:remoteDAPassword@DirectAdmin.domain:8443"
export DA_Api_Insecure=1

acme.sh --issue \
# highlight-start
  --dns dns_da \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
