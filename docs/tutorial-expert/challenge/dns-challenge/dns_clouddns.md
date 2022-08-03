---
sidebar_position: 15
slug: /tutorial-expert/challenge/dns-challenge/dns_clouddns.sh
---

# CloudDNS

```bash
# highlight-start
export CLOUDDNS_EMAIL="CHANGE TO YOUR CLOUDDNS_EMAIL"
export CLOUDDNS_PASSWORD="CHANGE TO YOUR CLOUDDNS_PASSWORD"
export CLOUDDNS_CLIENT_ID="CHANGE TO YOUR CLOUDDNS_CLIENT_ID"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_clouddns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```