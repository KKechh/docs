---
sidebar_position: 33
slug: /tutorial-expert/challenge/dns-challenge/dns_doapi.sh
---

# Do.DE

```bash
# highlight-start
export DO_LETOKEN="CHANGE TO YOUR Do.DE TOKEN"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_doapi \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
