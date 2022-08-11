---
sidebar_position: 12
slug: /tutorial-expert/challenge/dns-challenge/dns_la.sh
---

# DNS.La

<p><a href="https://www.dns.la/manage/APISet.aspx" className="button button--secondary button--lg text--no-decoration">设置 API Key</a></p>

```bash
# highlight-start
export LA_Id="<DNS.La API ID>"
export LA_Key="<DNS.La API Key>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_la \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
