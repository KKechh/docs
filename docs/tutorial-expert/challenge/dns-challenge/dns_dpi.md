---
sidebar_position: 4
slug: /tutorial-expert/challenge/dns-challenge/dns_dpi.sh
---

# DNSPod 国际版

<p><a href="https://console.dnspod.com/account/token/token" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::note 获取 API Key 教程

登陆自己的 DNSPod 帐户，点击自己头像，选择密钥管理，添加一个密钥，将 ID 和 Token 记录下来：

<p><img srcset="/docs/dnspod-create-api-token-step-1.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-2.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-3.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-4.png 2x"></img></p>

创建成功后，千万记着把ID和Token记录下来，因为窗口一旦关闭信息就无法找回了。
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
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
