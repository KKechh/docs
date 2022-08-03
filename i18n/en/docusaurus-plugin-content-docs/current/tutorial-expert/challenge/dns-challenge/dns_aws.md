---
sidebar_position: 10
slug: /tutorial-expert/challenge/dns-challenge/dns_aws.sh
---

# Amazon Route53

<p><a href="https://console.aws.amazon.com/iam/" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>


```bash
# highlight-start
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_aws \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
