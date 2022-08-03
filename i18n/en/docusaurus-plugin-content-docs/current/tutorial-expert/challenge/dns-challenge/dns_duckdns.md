---
sidebar_position: 36
slug: /tutorial-expert/challenge/dns-challenge/dns_duckdns.sh
---

# Duck DNS

```bash
# highlight-start
export DuckDNS_Token="CHANGE TO YOUR DuckDNS Token"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_duckdns \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
