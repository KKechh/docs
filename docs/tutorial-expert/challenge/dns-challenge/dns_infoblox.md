---
sidebar_position: 48
slug: /tutorial-expert/challenge/dns-challenge/dns_infoblox.sh
---

# Infoblox

```bash
# highlight-start
export Infoblox_Creds=""
export Infoblox_Server="Your-InfobloxServer.com"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_infoblox \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```