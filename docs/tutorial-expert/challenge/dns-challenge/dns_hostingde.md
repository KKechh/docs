---
sidebar_position: 47
slug: /tutorial-expert/challenge/dns-challenge/dns_hostingde.sh
---

# Hosting.DE

<p><a href="https://secure.hosting.de/profile/apikeys/new" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>


```bash
# highlight-start
export HOSTINGDE_ENDPOINT='https://secure.hosting.de'
export HOSTINGDE_APIKEY='xxxxx'

acme.sh --issue \
# highlight-start
  --dns dns_hostingde \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```