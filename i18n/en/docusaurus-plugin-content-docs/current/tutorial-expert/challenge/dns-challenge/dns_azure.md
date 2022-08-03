---
sidebar_position: 11
slug: /tutorial-expert/challenge/dns-challenge/dns_azure.sh
---

# Azure

```bash
# highlight-start
export AZUREDNS_SUBSCRIPTIONID=""
export AZUREDNS_TENANTID=""
export AZUREDNS_APPID=""
export AZUREDNS_CLIENTSECRET=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_azure \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```