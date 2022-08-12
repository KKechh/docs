---
sidebar_position: 21
slug: /tutorial-expert/challenge/dns-challenge/dns_arvan.sh
---

# Arvan

<p><a href="https://accounts.arvancloud.com/login?lang=en" className="button button--secondary button--lg text--no-decoration">Get API Key</a></p>

:::note How to create API Key?

To use API for ArvanCloud products, first you need to be authenticated. You need to use your API Key in your account for gaining access to API functionalities. Then click on your name and select ”Profile”.
![image](https://help.arvancloud.com/hc/article_attachments/360011156539/change-information-1.png)

In the “API keys“ section, by selecting “Generate New API Key” you can create a new API Key:

![image](https://help.arvancloud.com/hc/article_attachments/360011156599/api-key-2.png)

After selecting  “Generate New API Key”, you should select a name for your API:

![inmage](https://help.arvancloud.com/hc/article_attachments/360011156639/api-key-3.png)

After confirmation, your API will be created:

![image](https://help.arvancloud.com/hc/article_attachments/360011156739/api-key-4.png)

You can see the created API key in this screenshot. Consider that after closing this page, the API Key will not be returned at all, so you need to make sure that you save and protect it well.

But you can regenerate your forgotten API Key :

![image](https://help.arvancloud.com/hc/article_attachments/360011156819/api-key-5.png)

After confirmation of the key rebuild, a new key will be created for you with the same name.

By using this key, which is formatted as follows, you can enter the key in the HEADER, of the authorization section and use its APIs easily:

Apikey XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

Consider that the word “A” in Apikey should be entered capitalized.
:::

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export Arvan_Token="<CHANGE_TO_YOUR_TOKEN>"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_arvan \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
