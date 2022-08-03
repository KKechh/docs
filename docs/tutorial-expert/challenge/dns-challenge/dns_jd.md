---
sidebar_position: 8
slug: /tutorial-expert/challenge/dns-challenge/dns_jd.sh
---

# 京东云(JDCloud)

```bash
# highlight-start
export JD_ACCESS_KEY_ID=""
export JD_ACCESS_KEY_SECRET=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_jd \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
