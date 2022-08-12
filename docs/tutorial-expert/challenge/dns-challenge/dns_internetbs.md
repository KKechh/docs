---
sidebar_position: 49
slug: /tutorial-expert/challenge/dns-challenge/dns_internetbs.sh
---

# Internetbs



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export INTERNETBS_API_KEY="Change to your INTERNETBS API KEY"
export INTERNETBS_API_PASSWORD="Change to your INTERNETBS API PASSWORD"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_internetbs \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
