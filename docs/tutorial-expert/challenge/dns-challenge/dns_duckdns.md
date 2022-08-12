---
sidebar_position: 36
slug: /tutorial-expert/challenge/dns-challenge/dns_duckdns.sh
---

# Duck DNS



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DuckDNS_Token="CHANGE TO YOUR DuckDNS Token"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_duckdns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
