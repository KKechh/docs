---
sidebar_position: 10
slug: /tutorial-expert/challenge/dns-challenge/dns_aws.sh
---

# Amazon Route53

<p><a href="https://us-east-1.console.aws.amazon.com/iamv2/home#/users" className="button button--secondary button--lg text--no-decoration">Get my API Key</a></p>

:::note Create API Subaccounts

![aws-create-api-credential-step-1.png](/docs/aws-create-api-credential-step-en-1.png)

First, click the `Add users` button;

![aws-create-api-credential-step-2.png](/docs/aws-create-api-credential-step-en-2.png)

`User Name` input a new user name, such as `HiCA-acme`;

`Select AWS credential Type` select `Access Key - Programmatic Access`;

![aws-create-api-credential-step-3.png](/docs/aws-create-api-credential-step-en-3.png)

At the window, execute:
- Set the permission selection to `Attach existing policies directly`;
- Filter the policy input `AmazonRoute53ResolverFullAccess`; and check the policy;
- Click the `Next: Tags` button;

![aws-create-api-credential-step-4.png](/docs/aws-create-api-credential-step-en-4.png)

Skip the tag setting, click the `Next: Review` button;

![aws-create-api-credential-step-5.png](/docs/aws-create-api-credential-step-en-5.png)

Click the `Create user` button;

![aws-create-api-credential-step-6.png](/docs/aws-create-api-credential-step-en-6.png)

Copy and save the `Access key ID` and `Secret access key`; The export command will need to use as `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

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
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
