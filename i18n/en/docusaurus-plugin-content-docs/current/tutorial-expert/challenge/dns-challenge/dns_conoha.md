---
sidebar_position: 24
slug: /tutorial-expert/challenge/dns-challenge/dns_conoha.sh
---

# Conoha

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export CONOHA_Username=""
export CONOHA_Password=""
export CONOHA_TenantId=""
export CONOHA_IdentityServiceApi=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_conoha \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
