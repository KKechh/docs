---
sidebar_position: 2
---

# 注册设备


## 注册

:::note 重要信息
您需要修改高亮位置为您的真实邮箱，否则您将无法：
- 使用[故障诊断](/diagnosis)工具
- 续期通知(包含自动续期异常通知)
- 吊销您的证书(需要邮件确认)
:::

```js
acme.sh --register-account --accountemail \
// highlight-start
    my@example.com \
// highlight-end
    --server http://acme.hi.cn/directory
```

如果提示
```bash
❯ acme.sh --register-account --accountemail \
    <change@email.address> \
    --server http://acme.hi.cn/directory
[2022年 8月 2日 星期二 21时38分53秒 CST] Registering account: http://acme.hi.cn/directory
[2022年 8月 2日 星期二 21时38分55秒 CST] Registered
[2022年 8月 2日 星期二 21时38分55秒 CST] ACCOUNT_THUMBPRINT='pAQLaWoYYD5PXp1YbrqFtF3BcU_bv3Ns96c51VyT80g'
```

则表示注册成功。

## 常见问题

1. 报错：**The contact belongs to a reserved domain, and it's invalid.**

    ```bash
    ❯ acme.sh --register-account --accountemail \
        my@example.com \
        --server http://acme.hi.cn/directory
    [2022年 8月 2日 星期二 21时44分33秒 CST] Create account key ok.
    [2022年 8月 2日 星期二 21时44分33秒 CST] Registering account: http://acme.hi.cn/directory
    [2022年 8月 2日 星期二 21时44分34秒 CST] Register account Error: {"type":"urn:ietf:params:acme:error:invalidContact","detail":"The contact belongs to a reserved domain, and it's invalid."}
    ```
   **报错原因：**
    因为 `example.com` 等地址属于保留地址，HiCA 不允许此类 E-mail 地址注册，

    **解决方式：**
    请使用您的真实邮箱。

2. 您**不需要**每次申请都执行设备注册，只需在 `acme.sh` 安装成功后**执行成功一次**即可。