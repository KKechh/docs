---
sidebar_position: 41
slug: /tutorial-expert/challenge/dns-challenge/dns_euserv.sh
---

# EU Serv

Provide your username and password directly, Api Key is not neccessary.

```bash
# highlight-start
export EUSERV_Username="username"
export EUSERV_Password="password"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_euserv \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
