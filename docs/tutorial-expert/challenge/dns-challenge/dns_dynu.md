---
sidebar_position: 38
slug: /tutorial-expert/challenge/dns-challenge/dns_dynu.sh
---

# Dynu



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export Dynu_ClientId="<Change_to_your_Dynu_Client_ID>"
export Dynu_Secret="<Change_to_your_Dynu_Secret>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dynu \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
