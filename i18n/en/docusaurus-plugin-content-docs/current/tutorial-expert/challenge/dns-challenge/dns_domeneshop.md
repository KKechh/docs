---
sidebar_position: 34
slug: /tutorial-expert/challenge/dns-challenge/dns_domeneshop.sh
---

# Domeneshop

<p><a href="https://www.domeneshop.no/admin?view=api" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DOMENESHOP_Token="CHANGE TO DOMENESHOP Token"
export DOMENESHOP_Secret="CHANGE TO DOMENESHOP Secret"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_domeneshop \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
