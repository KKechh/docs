---
sidebar_position: 7
slug: /tutorial-expert/challenge/dns-challenge/dns_he.sh
---

# HE.net

Provide your username and password directly, Api Key is not neccessary.

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export HE_Username=""
export HE_Password=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_he \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```