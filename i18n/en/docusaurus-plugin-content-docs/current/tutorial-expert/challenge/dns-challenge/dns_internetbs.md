---
sidebar_position: 49
slug: /tutorial-expert/challenge/dns-challenge/dns_internetbs.sh
---

# Internetbs

```bash
# highlight-start
export INTERNETBS_API_KEY="Change to your INTERNETBS API KEY"
export INTERNETBS_API_PASSWORD="Change to your INTERNETBS API PASSWORD"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_internetbs \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
