---
sidebar_position: 29
slug: /tutorial-expert/challenge/dns-challenge/dns_df.sh
---

# DF

```bash
# highlight-start
export DF_user="(your dyndnsfree.de username)"
export DF_password="(your dyndnsfree.de password)"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_df \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
