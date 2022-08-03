---
sidebar_position: 34
slug: /tutorial-expert/challenge/dns-challenge/dns_domeneshop.sh
---

# Domeneshop

<p><a href="https://www.domeneshop.no/admin?view=api" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

```bash
# highlight-start
export DOMENESHOP_Token="CHANGE TO DOMENESHOP Token"
export DOMENESHOP_Secret="CHANGE TO DOMENESHOP Secret"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_domeneshop \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
