---
sidebar_position: 5
slug: /tutorial-expert/challenge/dns-challenge/dns_cf.sh
---

# CloudFlare

<p><a href="https://dash.cloudflare.com/profile/api-tokens" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::caution 

如果您需要申请多域名，我们推荐您使用 `Global API Key`，而不是 `Zone API Key`。

:::

:::note 获取 API Key 教程

登录 Cloudflare Dash 后在 API Token 菜单获取 `Global API Key`:

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
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```