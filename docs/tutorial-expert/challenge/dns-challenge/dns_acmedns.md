---
sidebar_position: 18
slug: /tutorial-expert/challenge/dns-challenge/dns_acmedns.sh
---

# ACME DNS

项目介绍: [https://github.com/joohoi/acme-dns](https://github.com/joohoi/acme-dns)

```bash
# highlight-start
export ACMEDNS_UPDATE_URL="https://auth.acme-dns.io"

export ACMEDNS_USERNAME="<CHANGE_TO_ACMEDNS_USERNAME>"
export ACMEDNS_PASSWORD="<CHANGE_TO_ACMEDNS_PASSWORD>"
export ACMEDNS_SUBDOMAIN="<CHANGE_TO_ACMEDNS_SUBDOMAIN>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_acmedns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```