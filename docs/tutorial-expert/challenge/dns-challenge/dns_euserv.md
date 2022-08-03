---
sidebar_position: 41
slug: /tutorial-expert/challenge/dns-challenge/dns_euserv.sh
---

# EU Serv

直接提供用户密码，无需 API Key。

```bash
# highlight-start
export EUSERV_Username="username"
export EUSERV_Password="password"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_euserv \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
