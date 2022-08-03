---
sidebar_position: 35
slug: /tutorial-expert/challenge/dns-challenge/dns_dreamhost.sh
---

# DreamHost DNS

<p><a href="https://panel.dreamhost.com/?tree=home.api" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

```bash
# highlight-start
export DH_API_KEY="CHANGE TO YOUR KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dreamhost \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
