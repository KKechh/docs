---
sidebar_position: 43
slug: /tutorial-expert/challenge/dns-challenge/dns_freedns.sh
---

# Afraid free DNS

直接修改成用户密码，无需 API Key

```bash
# highlight-start
export FREEDNS_User="<change_to_your_freedns_username>"
export FREEDNS_Password="<change_to_your_freedns_password>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_freedns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
