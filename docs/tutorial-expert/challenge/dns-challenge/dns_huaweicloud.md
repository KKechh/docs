---
sidebar_position: 9
slug: /tutorial-expert/challenge/dns-challenge/dns_huaweicloud.sh
---

# 华为云

<p><a href="https://console.huaweicloud.com/iam/?region=cn-north-4&ttl=1496744804#/iam/users" className="button button--secondary button--lg text--no-decoration">管理子账户</a></p>

:::note 关于华为云DNS模块

您不可以使用华为云主账号，因为华为云主账号是华为的账号，华为云 IAM 系统无法直接鉴别账号。

您必须使用华为云子账号
:::


```bash
#highlight-start
export HUAWEICLOUD_Username="admin" # 子账户用户名
export HUAWEICLOUD_Password="" # 子账户密码
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
