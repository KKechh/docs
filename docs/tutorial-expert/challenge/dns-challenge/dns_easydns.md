---
sidebar_position: 40
slug: /tutorial-expert/challenge/dns-challenge/dns_easydns.sh
---

# EasyDNS

<p><a href="http://docs.sandbox.rest.easydns.net/beta_signup.php" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

```bash
# highlight-start
export EASYDNS_Key="xxxxxxxxxxxxxxxxxxxxxxxx"
export EASYDNS_Token="xxxxxxxxxxxxxxxxxxxxxxxx"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_easydns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```