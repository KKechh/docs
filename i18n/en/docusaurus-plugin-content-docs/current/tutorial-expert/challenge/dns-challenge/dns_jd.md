---
sidebar_position: 8
slug: /tutorial-expert/challenge/dns-challenge/dns_jd.sh
---

# JD Cloud

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export JD_ACCESS_KEY_ID=""
export JD_ACCESS_KEY_SECRET=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_jd \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
