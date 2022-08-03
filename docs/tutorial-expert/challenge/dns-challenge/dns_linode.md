---
sidebar_position: 12
slug: /tutorial-expert/challenge/dns-challenge/dns_linode.sh
---

# Linode

```bash
# highlight-start
export LINODE_API_KEY="CHANGE TO YOUR LINODE_API_KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_linode \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
