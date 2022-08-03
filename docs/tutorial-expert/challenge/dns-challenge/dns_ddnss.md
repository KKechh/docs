---
sidebar_position: 27
slug: /tutorial-expert/challenge/dns-challenge/dns_ddnss.sh
---

# Ddnss

```bash
# highlight-start
export DDNSS_Token="CHANGE-TO-YOUR-DDNSS-TOKEN"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_ddnss \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
