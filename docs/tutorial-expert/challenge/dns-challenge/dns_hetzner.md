---
sidebar_position: 46
slug: /tutorial-expert/challenge/dns-challenge/dns_hetzner.sh
---

# Hetzner
API Key 可以在 [Hetzner](https://dns.hetzner.com/settings/api-token) 的页面找到。



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export HETZNER_Token="Change to your HETZNER Token"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_hetzner \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
