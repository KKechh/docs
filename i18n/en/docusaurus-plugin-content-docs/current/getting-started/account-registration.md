---
sidebar_position: 2
---

# Account Registration


## Registration

:::note Important
You must change the highlight line into your real email address, or you **CAN'T**:
- use the `diagnosis` tool
- get notifiactions when renew your certificate (including failure)
- revoke your certificate (requires email confirmation)
:::

```js
acme.sh --register-account --accountemail \
// highlight-start
    my@example.com \
// highlight-end
    --server http://acme.hi.cn/directory
```

If message below apears

```bash
❯ acme.sh --register-account --accountemail \
    <change@email.address> \
    --server http://acme.hi.cn/directory
[2022年 8月 2日 星期二 21时38分53秒 CST] Registering account: http://acme.hi.cn/directory
[2022年 8月 2日 星期二 21时38分55秒 CST] Registered
[2022年 8月 2日 星期二 21时38分55秒 CST] ACCOUNT_THUMBPRINT='pAQLaWoYYD5PXp1YbrqFtF3BcU_bv3Ns96c51VyT80g'
```

it means registration is successful.

## FAQ(s)

1. Throws exception: **The contact belongs to a reserved domain, and it's invalid.**

    ```bash
    ❯ acme.sh --register-account --accountemail \
        my@example.com \
        --server http://acme.hi.cn/directory
    [2022年 8月 2日 星期二 21时44分33秒 CST] Create account key ok.
    [2022年 8月 2日 星期二 21时44分33秒 CST] Registering account: http://acme.hi.cn/directory
    [2022年 8月 2日 星期二 21时44分34秒 CST] Register account Error: {"type":"urn:ietf:params:acme:error:invalidContact","detail":"The contact belongs to a reserved domain, and it's invalid."}
    ```
    **Reason:**
    Because the `example.com` and etc domains reserved addresseses, which HiCA doesn't accept registration from those.
    
    **Solution:**
    Try your real email address.

2. You **NEEDN'T** execute account register command every time. You only need to register account once after `acme.sh` gets installed.
