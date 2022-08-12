---
sidebar_position: 5
slug: /tutorial-expert/challenge/dns-challenge/dns_cf.sh
---

# CloudFlare

<p><a href="https://dash.cloudflare.com/profile/api-tokens" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

:::caution 

If you wanna sign an UCC certificate, we suggest you configure `Global API Key` instead of `Zone API Key`.

:::

:::note Tutorial to Get API Key

Login you account of Cloudflare on Dash, and get your `Global API Key`:

![CloudFlare 平台获取 Global 凭据](/docs/cloudflare-get-global-key.png)

:::

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export CF_Email="<Cloudflare_Account_Email>"
export CF_Key="<Cloudflare_Global_API_Key>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cf \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```