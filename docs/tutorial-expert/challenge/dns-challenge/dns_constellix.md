---
sidebar_position: 25
slug: /tutorial-expert/challenge/dns-challenge/dns_constellix.sh
---

# Constellix

```bash
# highlight-start
export CONSTELLIX_Key=""
export CONSTELLIX_Secret=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_constellix \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
