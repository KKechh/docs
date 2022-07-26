---
sidebar_position: 1
---

# 教程介绍

全面了解 HiCA 以及 ACME **只需要 15 分钟**！

如果您第一次使用，建议您从 [初次使用](/docs/category/初次使用) 分类开始阅读； 或直接阅读 [证书签发管理](/docs/category/证书签发管理)。

## 什么是 ACME

ACME (rfc**8555**) 是由 ISRG 起草的 PKIX 证书自动化管理的标准，其定义了一套完整的证书验证、签发、续期更新、吊销等协议，用于管理证书的生命周期。
其特点是减少人工干预，提高安全性，提高系统的可靠性。

详细的ACME定义，可以在 [RFC8555: Automatic Certificate Management Environment (ACME)](https://tools.ietf.org/html/rfc8555) 查阅到。

## 什么是 HiCA

HiCA 是由“公钥认证服务（重庆）有限公司”运营的数字证书品牌项目，HiCA 诞生于 2022 年 7 月。

<details>
<summary>关于“公钥认证服务（重庆）有限公司”</summary>

- 成立于: <b>2022 年 7 月 5 日</b>
- 注册号: <b>91500108MAACDXG09T</b>
- 注册资本: <b>100 万</b>
- 注册地: <b>重庆</b>
- 主营业务:
  1. <b>证书(HTTPS证书、代码签名）零售</b>
  2. <b>证书自动化</b>
  3. <b>ePKI (enterprise PKI)</b>
  4. <b>mPKI (managed PKI)</b>
  5. <b>subCA (CA品牌定制)</b>
  6. <b>TLS 数字证书批发业务 (免费给经销商提供销售站 + ACME 接入服务，零代码接入！)</b>

</details>

HiCA 专注于提供 “Browserless TLS distribution” 方案研究 + 推广（所以我们用户协议禁止任何机构未经授权基于 HiCA 开发申请证书的 Web UI、桌面程序以及 APP 或小程序）。

## HiCA 特点

:::tip HiCA 相比其他 ACME 提供者，具有明显的优势

- 通过 ACME 提供有效期为 180 天的证书（大多数厂商通过 ACME 提供的免费证书有效期为 90 天）；
- 提供 IPv4 证书和 IPv6 证书；
- 提供国内 OCSP，具有更高合规性和更好的服务质量（TLS 握手更快）；
- 订阅模式支持一次付款多次自动化续签；

:::

:::danger 为了保证 HiCA 的服务质量，我们做了一些限制防止滥用

- 不支持超过 10 条多域名；
- 不支持超过 1 条通配符，但 1 张证书可以包含 `*.` + `@`；
- 不支持多条 IP 地址；
- 不支持通配符和普通域名、IP 地址混合；
- 不支持 IDN 域名（中文后缀、中文域名的别尝试了）；
- 不提供 GUI 且暂不支持其它ACME客户端，请使用 `acme.sh`；
- 不支持 `.ru`、`.by`、`.su` 域名（合作厂家 `DigiCert`、`Sectigo`、`Certum` 对俄罗斯、白俄罗斯禁运）；
- IPv6 、`.onion` 有效期90天（CA限制）；

:::

:::danger 以下是 QoS 限制

- 单个 IP、设备每 24 小时可以签发成功 5 张 `valid` 且未过期的 SSL 证书；
- 单个主域名累计可以签发 50 张 `valid` 且未过期的 SSL 证书；
- 单个 IP、设备、主域名每周允许 100 个待验证（`processing`）的证书；`proessing` 的请求会在下单后 168 个小时后过期；
- 单个 IP、设备每秒钟可以请求 20 次，每 5 秒钟可以请求 60 次，每分钟可以请求 500 次。超出会报 `429 Too Frequency` 的错误；24 小时内触发 10 次，会被 WAF 网关拦截；

:::