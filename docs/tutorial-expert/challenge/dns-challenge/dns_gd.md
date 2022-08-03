---
sidebar_position: 6
slug: /tutorial-expert/challenge/dns-challenge/dns_gd.sh
---

# GoDaddy

<p><a href="https://developer.godaddy.com/keys" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

```bash
# highlight-start
export GD_Key=""
export GD_Secret=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_gd \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```