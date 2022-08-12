---
sidebar_position: 37
slug: /tutorial-expert/challenge/dns-challenge/dns_durabledns.sh
---

# Durable DNS



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DD_API_User="xxxxx"
export DD_API_Key="xxxxxx"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_durabledns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
