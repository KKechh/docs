---
sidebar_position: 26
slug: /tutorial-expert/challenge/dns-challenge/dns_cyon.sh
---

# Cyon

```bash
# highlight-start
export CY_Username=""
export CY_Password=""
export CY_OTP_Secret=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cyon \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
