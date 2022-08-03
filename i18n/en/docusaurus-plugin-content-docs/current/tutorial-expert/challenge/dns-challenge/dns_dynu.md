---
sidebar_position: 38
slug: /tutorial-expert/challenge/dns-challenge/dns_dynu.sh
---

# Dynu

```bash
# highlight-start
export Dynu_ClientId="<Change_to_your_Dynu_Client_ID>"
export Dynu_Secret="<Change_to_your_Dynu_Secret>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dynu \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```