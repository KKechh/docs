---
sidebar_position: 5
slug: /tutorial-expert/challenge/dns-challenge/dns_cf.sh
---

# CloudFlare

<p><a href="https://dash.cloudflare.com/profile/api-tokens" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

:::note Tutorial to Get API Key

Login you account of Cloudflare on Dash, and get your `Global API Key`:

![CloudFlare 平台获取 Global 凭据](/docs/cloudflare-get-global-key.png)
:::

:::caution 

If you wanna sign an UCC certificate, we suggest you configure `Global API Key` instead of `Zone API Key`.
:::

```bash
# highlight-start
export CF_Token="API Token"
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