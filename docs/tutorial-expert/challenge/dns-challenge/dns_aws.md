---
sidebar_position: 10
slug: /tutorial-expert/challenge/dns-challenge/dns_aws.sh
---

# Amazon Route53

<p><a href="https://us-east-1.console.aws.amazon.com/iamv2/home#/users" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::note 创建 API 子账户

![aws-create-api-credential-step-1.png](/docs/aws-create-api-credential-step-1.png)

首先，点击 “创建用户” 按钮；

![aws-create-api-credential-step-2.png](/docs/aws-create-api-credential-step-2.png)

`用户名` 处输入一个新的用户名，例如 `HiCA-acme`；

`选择 AWS 访问类型` 选择 `访问密钥-编程访问`；

![aws-create-api-credential-step-3.png](/docs/aws-create-api-credential-step-3.png)

在界面上，执行：
- 设置权限选择 `直接附加现有策略`；
- 筛选策略输入 `AmazonRoute53FullAccess`；并勾选这个策略；
- 点击 `下一步：标签` 按钮；

![aws-create-api-credential-step-4.png](/docs/aws-create-api-credential-step-4.png)

跳过标签设置，直接点击 `下一步：审核` 按钮；

![aws-create-api-credential-step-5.png](/docs/aws-create-api-credential-step-5.png)

点击 `创建用户` 按钮；

![aws-create-api-credential-step-6.png](/docs/aws-create-api-credential-step-6.png)

复制 `访问密钥ID` 和 `私有访问密钥` 的值，妥善保存，后面 export 的 `AWS_ACCESS_KEY_ID`、 `AWS_SECRET_ACCESS_KEY` 将用到这两个值；

:::



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_aws \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
