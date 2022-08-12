---
sidebar_position: 39
slug: /tutorial-expert/challenge/dns-challenge/dns_dynv6.sh
---

# DynV6

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export KEY="path/to/keyfile" # Change to your DynV6 private key file here

acme.sh --issue \
# highlight-start
  --dns dns_dynv6 \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
