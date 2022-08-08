---
sidebar_position: 5
---

# CAA 授权

## 前言

为了方便您日后的使用，我们不推荐没有强安全需求的用户设置 `CAA`。当然，如果您一定要设置，我们也会积极认同此授权，并执行签发与否。

:::caution

- 因为 CAA 机制基于 DNS，所以您修改后申请不生效清不要着急，可能您的 DNS 修改还未生效。
- 正因为存在 DNS 缓存等原因，我们也不推荐新手设置 CAA。

:::

## CAA 报错

如果您看到 `acme.sh` 显示此错误，则表示您必须设置 CAA 授权才能继续申请证书。
![](/docs/caa-non-compliant.png)

## CAA 设置方式

![](/docs/caa-grant-tutorial.png)


| 主机记录 | 类型 | 解析值 |
| ----------- | ----------- | :----------- |
| @      | CAA       | `0 issue "hi.cn"`
| @      | CAA       | `0 issue "ssl.com"`
| @      | CAA       | `0 issue "trust-provider.com"`
| @      | CAA       | `0 issue "certum.pl"`
| @      | CAA       | `0 issuewild "hi.cn"`
| @      | CAA       | `0 issuewild "ssl.com"`
| @      | CAA       | `0 issuewild "trust-provider.com"`
| @      | CAA       | `0 issuewild "certum.pl"`
