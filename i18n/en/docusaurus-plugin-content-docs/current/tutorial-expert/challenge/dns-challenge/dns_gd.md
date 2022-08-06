---
sidebar_position: 6
slug: /tutorial-expert/challenge/dns-challenge/dns_gd.sh
---

# GoDaddy

<p><a href="https://developer.godaddy.com/keys" className="button button--secondary button--lg text--no-decoration">Get My API Key</a></p>


:::note Get My API Key

Click `Create New Api Key` button

<img srcset="/docs/godaddy-create-api-token-step-1.png 2x" />

In the dialog, `Name` input box can be left blank. Just make sure `Environment` is set to `Production`

<img srcset="/docs/godaddy-create-api-token-step-2.png 2x" />

In the result page, save your `Key` (`GD_Key`) and `Secret` (`GD_Secret`) to use later.

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
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```