---
sidebar_position: 22
slug: /tutorial-expert/challenge/dns-challenge/dns_autodns.sh
---

# Auto DNS

```bash
# highlight-start
export AUTODNS_USER="<username>"
export AUTODNS_PASSWORD="<password>"
export AUTODNS_CONTEXT="<context>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_autodns \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
