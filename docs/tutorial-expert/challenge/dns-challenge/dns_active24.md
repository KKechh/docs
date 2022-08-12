---
sidebar_position: 20
slug: /tutorial-expert/challenge/dns-challenge/dns_active24.sh
---


# Active 24



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export ACTIVE24_Token="<CHANGE_TO_YOUR_TOKEN>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_active24 \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
