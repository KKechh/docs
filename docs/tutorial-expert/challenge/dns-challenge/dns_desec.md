---
sidebar_position: 28
slug: /tutorial-expert/challenge/dns-challenge/dns_desec.sh
---

# Desec



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DEDYN_TOKEN="Your DEDYN TOKEN"
export DEDYN_NAME="foobar.dedyn.io"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_desec \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
