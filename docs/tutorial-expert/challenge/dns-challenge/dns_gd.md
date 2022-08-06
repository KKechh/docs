---
sidebar_position: 6
slug: /tutorial-expert/challenge/dns-challenge/dns_gd.sh
---

# GoDaddy

<p><a href="https://developer.godaddy.com/keys" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>


:::note 获取 API Key

点击 `Create New Api Key` 按钮

<img srcset="/docs/godaddy-create-api-token-step-1.png 2x" />

在弹出对话框，`Name` 输入框可填写也可以不填写。只需要注意 `Environment` 选择 `Production`，

<img srcset="/docs/godaddy-create-api-token-step-2.png 2x" />

在结果页，保存好你得到的 `Key` （对应 export 命令的 `GD_Key`) 和 `Secret` (对应 export 命令的 `GD_Secret`)，以便后续使用。

<img srcset="/docs/godaddy-create-api-token-step-3.png 2x" />


:::

```bash
# highlight-start
export GD_Key=""
export GD_Secret=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_gd \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```