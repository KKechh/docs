---
sidebar_position: 26
slug: /tutorial-expert/challenge/dns-challenge/dns_cyon.sh
---

# Cyon



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export CY_Username=""
export CY_Password=""
export CY_OTP_Secret=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cyon \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
