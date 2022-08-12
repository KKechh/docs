---
sidebar_position: 14
slug: /tutorial-expert/challenge/dns-challenge/dns_cloudns.sh
---

# CloudNS

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export CLOUDNS_AUTH_ID="CHANGE TO YOUR CLOUDNS_AUTH_ID"
export CLOUDNS_SUB_AUTH_ID="CHANGE TO YOUR CLOUDNS_SUB_AUTH_ID"
export CLOUDNS_AUTH_PASSWORD="CHANGE TO YOUR CLOUDNS_AUTH_PASSWORD"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cloudns \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```