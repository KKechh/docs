---
sidebar_position: 52
slug: /tutorial-expert/challenge/dns-challenge/dns_hexonet.sh
---

# HexONET(1API)



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export Hexonet_Login="username!roleId"
export Hexonet_Password="rolePassword"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_hexonet \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```