---
sidebar_position: 47
slug: /tutorial-expert/challenge/dns-challenge/dns_hostingde.sh
---

# Hosting.DE

<p><a href="https://secure.hosting.de/profile/apikeys/new" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export HOSTINGDE_ENDPOINT='https://secure.hosting.de'
export HOSTINGDE_APIKEY='xxxxx'

acme.sh --issue \
# highlight-start
  --dns dns_hostingde \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```