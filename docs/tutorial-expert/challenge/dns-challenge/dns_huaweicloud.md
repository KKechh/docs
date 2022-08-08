---
sidebar_position: 9
slug: /tutorial-expert/challenge/dns-challenge/dns_huaweicloud.sh
---

# 华为云

<p><a href="https://console.huaweicloud.com/iam/?region=cn-north-4&ttl=1496744804#/iam/users" className="button button--secondary button--lg text--no-decoration">管理子账户</a></p>

:::danger

注意，华为云模块不支持 API 密钥！必须使用子账户用户名 + 密码方式！

:::

:::note 关于华为云DNS模块

您不可以使用华为云主账号，因为华为云主账号是华为的账号，华为云 IAM 系统无法直接鉴别账号。

您必须使用华为云子账号。

:::
<img srcset="/docs/huaweicloud-create-subaccount-step-0.png 2x"/>

注意箭头位置这个值(图上为 `hica`)就是 `HUAWEICLOUD_DomainName`

![](/docs/huaweicloud-create-subaccount-step-1.png)
在华为云控制台，点击右上角用户名，点击 `统一身份管理`

![](/docs/huaweicloud-create-subaccount-step-2.png)
输入用户名，勾选密码并输入密码，登录保护选择 `不开启`，点击 `下一步`

![](/docs/huaweicloud-create-subaccount-step-3.png)
勾选 `power_user` 和 `admin`，点击 `创建用户`

![](/docs/huaweicloud-create-subaccount-step-4.png)
创建成功

```bash
#highlight-start
export HUAWEICLOUD_Username="<子账户用户名>" # 子账户用户名
export HUAWEICLOUD_Password="<子账户密码>" # 子账户密码
export HUAWEICLOUD_DomainName="" # https://auth.huaweicloud.com/authui/login?id=<复制这里的值>
#highlight-end

acme.sh --issue \
#highlight-start
  --dns dns_huaweicloud \
#highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
