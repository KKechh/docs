---
sidebar_position: 9
slug: /tutorial-expert/challenge/dns-challenge/dns_huaweicloud.sh
---

# Huawei Cloud

<p><a href="https://console.huaweicloud.com/iam/?region=cn-north-4&ttl=1496744804#/iam/users" className="button button--secondary button--lg text--no-decoration">Manage subaccounts(IAM)</a></p>

:::note Warning

You can't export master user here, because master account belongs to Huawei Group, not Huawei Cloud. The IAM can't access your master account!

You must try sub account here instead!
:::


```bash
#highlight-start
export HUAWEICLOUD_Username="admin" # Subaccount's username
export HUAWEICLOUD_Password="" # Subaccount's password
export HUAWEICLOUD_DomainName="" # https://auth.huaweicloud.com/authui/login?id=<copy_this_value>
#highlight-end

acme.sh --issue \
#highlight-start
  --dns dns_huaweicloud \
#highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
