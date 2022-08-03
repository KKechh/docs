---
sidebar_position: 19
slug: /tutorial-expert/challenge/dns-challenge/dns_acmeproxy.sh
---


# ACME PROXY

```bash
# highlight-start
export ACMEPROXY_ENDPOINT=""
export ACMEPROXY_USERNAME=""
export ACMEPROXY_PASSWORD=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_acmeproxy \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
