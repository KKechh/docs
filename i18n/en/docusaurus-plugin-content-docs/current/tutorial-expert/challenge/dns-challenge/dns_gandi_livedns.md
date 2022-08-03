---
sidebar_position: 44
slug: /tutorial-expert/challenge/dns-challenge/dns_gandi_livedns.sh
---

# Gandi LiveDNS

<p><a href="https://account.gandi.net/zh-hans/users/digitalsign/security" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

```bash
# highlight-start
export GANDI_LIVEDNS_KEY="Change to your Gandi Livedns KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_gandi_livedns \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
