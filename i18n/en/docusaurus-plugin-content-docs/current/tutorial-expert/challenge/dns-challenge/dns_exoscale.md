---
sidebar_position: 42
slug: /tutorial-expert/challenge/dns-challenge/dns_exoscale.sh
---

# Exoscale

```bash
# highlight-start
export EXOSCALE_API_KEY="<Change_to_your_EXOSCALE_API_KEY>"
export EXOSCALE_SECRET_KEY="<Change_to_your_EXOSCALE_SECRET_KEY>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_exoscale \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
