---
sidebar_position: 45
slug: /tutorial-expert/challenge/dns-challenge/dns_gdnsdk.sh
---

# Gratisdns.com

直接修改成用户密码，无需 API Key



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export GDNSDK_Username="<change to your GDNSDK Username>"
export GDNSDK_Password="<change to your GDNSDK Password>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_gdnsdk \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```