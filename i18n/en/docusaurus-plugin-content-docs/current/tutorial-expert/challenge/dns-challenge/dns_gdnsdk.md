---
sidebar_position: 45
slug: /tutorial-expert/challenge/dns-challenge/dns_gdnsdk.sh
---

# Gratisdns.com

Provide your username and password directly, Api Key is not neccessary.

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export GDNSDK_Username="<change to your GDNSDK Username>"
export GDNSDK_Password="<change to your GDNSDK Password>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_gdnsdk \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```