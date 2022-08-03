---
sidebar_position: 43
slug: /tutorial-expert/challenge/dns-challenge/dns_freedns.sh
---

# Afraid free DNS

Provide your username and password directly, Api Key is not neccessary.

```bash
# highlight-start
export FREEDNS_User="<change_to_your_freedns_username>"
export FREEDNS_Password="<change_to_your_freedns_password>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_freedns \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
