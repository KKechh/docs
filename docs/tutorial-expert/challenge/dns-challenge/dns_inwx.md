---
sidebar_position: 50
slug: /tutorial-expert/challenge/dns-challenge/dns_inwx.sh
---

# Inwx

直接修改成用户密码，无需 API Key



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export INWX_User="<your_inwx_username>"
export INWX_Password="<your_inwx_password>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_inwx \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
