---
sidebar_position: 4
slug: /tutorial-expert/challenge/dns-challenge/dns_dpi.sh
---

# DNSPod International

<p><a href="https://console.dnspod.com/account/token/token" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

:::note Tutorial to Get API Key

Login your DNSPod account, click your avatar, click `Key credential management`, click `Add key credential`.
Save the `Token ID` and `Token Key`.

<p><img srcset="../../../../docs/dnspod-create-api-token-step-1.png 2x"></img></p>
<p><img srcset="../../../../docs/dnspod-create-api-token-step-2.png 2x"></img></p>
<p><img srcset="../../../../docs/dnspod-create-api-token-step-3.png 2x"></img></p>
<p><img srcset="../../../../docs/dnspod-create-api-token-step-4.png 2x"></img></p>

You must save the `Token ID` and `Token Key`, because you have nowehere to recovery it.
:::

```bash
#highlight-start
export DP_Id="DNSPOD API TOKEN ID"
export DP_Key="DNSPOD API TOKEN KEY"
#highlight-end

acme.sh --issue \
#highlight-start
  --dns dns_dpi \
#highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
