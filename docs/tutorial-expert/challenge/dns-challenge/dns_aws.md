---
sidebar_position: 10
slug: /tutorial-expert/challenge/dns-challenge/dns_aws.sh
---

# Amazon Route53

<p><a href="https://console.aws.amazon.com/iam/" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>


```bash
# highlight-start
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_aws \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
