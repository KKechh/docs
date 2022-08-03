---
sidebar_position: 9
slug: /tutorial-expert/challenge/dns-challenge/dns_hexonet.sh
---

# HexONET(1API)

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