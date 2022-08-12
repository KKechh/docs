---
sidebar_position: 19
slug: /tutorial-expert/challenge/dns-challenge/dns_acmeproxy.sh
---


# ACME PROXY



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export ACMEPROXY_ENDPOINT=""
export ACMEPROXY_USERNAME=""
export ACMEPROXY_PASSWORD=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_acmeproxy \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
