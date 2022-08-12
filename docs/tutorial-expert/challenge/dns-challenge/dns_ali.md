---
sidebar_position: 3
slug: /tutorial-expert/challenge/dns-challenge/dns_ali.sh
---

# 阿里云

<p><a href="https://ram.console.aliyun.com/manage/ak" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::note 获取 API Key

首先在阿里云申请一个 AccessKey，用于 API 操作阿里云服务，可以使用创建子用户的方法（更安全），并且只授权 AliyunDNSFullAccess 权限

![阿里云RAM](/docs/alibabacloud-ram-permission-grant-window.png)

保存好你得到的Key和Secret
:::




import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
#highlight-start
export Ali_Key="阿里云API KEY"
export Ali_Secret="阿里云API Secret"
#highlight-end

acme.sh --issue \
#highlight-start
  --dns dns_ali \
#highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
