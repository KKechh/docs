---
sidebar_position: 42
slug: /tutorial-expert/challenge/dns-challenge/dns_exoscale.sh
---

# Exoscale



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export EXOSCALE_API_KEY="<Change_to_your_EXOSCALE_API_KEY>"
export EXOSCALE_SECRET_KEY="<Change_to_your_EXOSCALE_SECRET_KEY>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_exoscale \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
