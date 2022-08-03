---
sidebar_position: 46
slug: /tutorial-expert/challenge/dns-challenge/dns_hetzner.sh
---

# Hetzner
You can get your API Key at [Hetzner](https://dns.hetzner.com/settings/api-token)'s page.

```bash
# highlight-start
export HETZNER_Token="Change to your HETZNER Token"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_hetzner \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
