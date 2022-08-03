---
sidebar_position: 32
slug: /tutorial-expert/challenge/dns-challenge/dns_dnsimple.sh
---

# DNSimple

<p><a href="https://dnsimple.com/user" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>


```bash
# highlight-start
export DNSimple_OAUTH_TOKEN="<CHANGE TO YOUR TOKEN>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dnsimple \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
