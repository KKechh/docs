---
sidebar_position: 3
slug: /tutorial-expert/challenge/dns-challenge/dns_ali.sh
---

# Alibaba Cloud

<p><a href="https://ram.console.aliyun.com/manage/ak" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

:::note Get API Key

At first, you'd generate an AccessKey to access API or alibabacloud.

we suggest you to use RAM(subaccount w/ API credential) instead by grant `AliyunDNSFullAccess` permission, it will be more secure!


![阿里云RAM](/docs/alibabacloud-ram-permission-grant-window.png)

保存好你得到的Key和Secret
:::

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
#highlight-start
export Ali_Key="<Change_to_AlibabaCloud_API_KEY"
export Ali_Secret="<Change_to_AlibabaCloud_API_Secret"
#highlight-end

acme.sh --issue \
#highlight-start
  --dns dns_ali \
#highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
