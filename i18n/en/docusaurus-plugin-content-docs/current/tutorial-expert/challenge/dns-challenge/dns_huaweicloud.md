---
sidebar_position: 9
slug: /tutorial-expert/challenge/dns-challenge/dns_huaweicloud.sh
---

# Huawei Cloud

<p><a href="https://console.huaweicloud.com/iam/?region=cn-north-4&ttl=1496744804#/iam/users" className="button button--secondary button--lg text--no-decoration">Manage subaccounts(IAM)</a></p>


:::danger

Warning, Huawei Cloud module does not support API keys! You must use subaccount username + password method!

:::

:::note Warning

You can't export master user here, because master account belongs to Huawei Group, not Huawei Cloud. The IAM can't access your master account!

You must try sub account here instead!

:::

<img srcset="/docs/huaweicloud-create-subaccount-step-en-0.png 2x"/>

Remember the arrow pointed value(`hica` in the picture), and it is the `HUAWEICLOUD_DomainName` we'd to export

![](/docs/huaweicloud-create-subaccount-step-en-1.png)
In Huawei Cloud console, click on the top right user name, click on `Identity and Access Management` (`IAM`)

![](/docs/huaweicloud-create-subaccount-step-en-2.png)
Input username, check password and click `Next` button

![](/docs/huaweicloud-create-subaccount-step-en-3.png)

Check on `power_user` and `admin`, click `Create user` button

![](/docs/huaweicloud-create-subaccount-step-en-4.png)
success

```bash
#highlight-start
export HUAWEICLOUD_Username="<subaccount_username>" # Subaccount's username
export HUAWEICLOUD_Password="<subaccount_password>" # Subaccount's password
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
