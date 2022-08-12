---
sidebar_position: 12
slug: /tutorial-expert/challenge/dns-challenge/dns_la.sh
---

# DNS.La

<p><a href="https://www.dns.la/manage/APISet.aspx" className="button button--secondary button--lg text--no-decoration">Get My API Key</a></p>

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export LA_Id="<DNS.La API ID>"
export LA_Key="<DNS.La API Key>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_la \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
