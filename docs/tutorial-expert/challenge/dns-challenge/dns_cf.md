---
sidebar_position: 5
slug: /tutorial-expert/challenge/dns-challenge/dns_cf.sh
---

# CloudFlare

<p><a href="https://dash.cloudflare.com/profile/api-tokens" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::note 获取 API Key 教程

登录 Cloudflare Dash 后在 API Token 菜单获取 `Global API Key`:

![CloudFlare 平台获取 Global 凭据](/docs/cloudflare-get-global-key.png)
:::

:::caution 

如果您需要申请多域名，我们推荐您使用 `Global API Key`，而不是 `Zone API Key`。
:::

```bash
# highlight-start
export CF_Token="API Token"
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