---
sidebar_position: 33
slug: /tutorial-expert/challenge/dns-challenge/dns_do.sh
---

# Domain-Offensive / Resellerinterface / Domainrobot

```bash
# highlight-start
export DO_PID="CHANGE TO YOUR PID"
export DO_PW="CHANGE TO YOUR PW"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_do \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
