---
sidebar_position: 7
slug: /tutorial-expert/challenge/dns-challenge/dns_he.sh
---

# HE.net

:::tip
直接填入用户名密码，无需API Key
:::

```bash
# highlight-start
export HE_Username=""
export HE_Password=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_he \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```