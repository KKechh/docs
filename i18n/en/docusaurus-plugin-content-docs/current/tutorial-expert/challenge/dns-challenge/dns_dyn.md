---
sidebar_position: 16
slug: /tutorial-expert/challenge/dns-challenge/dns_dyn.sh
---

# Dyn.com

```bash
# highlight-start
export DYN_Customer="customer"
export DYN_Username="apiuser"
export DYN_Password="secret"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dyn \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
