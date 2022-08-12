---
sidebar_position: 13
slug: /tutorial-expert/challenge/dns-challenge/dns_linode_v4.sh
---

# Linode V4

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export LINODE_V4_API_KEY="CHANGE TO YOUR LINODE_V4_API_KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_linode_v4 \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```