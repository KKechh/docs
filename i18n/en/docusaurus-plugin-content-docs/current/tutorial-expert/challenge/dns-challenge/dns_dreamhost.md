---
sidebar_position: 35
slug: /tutorial-expert/challenge/dns-challenge/dns_dreamhost.sh
---

# DreamHost DNS

<p><a href="https://panel.dreamhost.com/?tree=home.api" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DH_API_KEY="CHANGE TO YOUR KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dreamhost \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
