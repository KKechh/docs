---
sidebar_position: 1
---

# FQDN 验证

什么是 FQDN 验证? 如何选择验证类型? `dns-01` 还是 `http-01` ?

:::tip 提示
HiCA 支持如下验证方式：
- :white_check_mark: `dns-01`
- :white_check_mark: `http-01`
:::

:::caution  警告
HiCA 不支持如下验证方式：
- :x: `tls-alpn-01`，
-  :x: [**`DNS alias mode`**](https://github.com/acmesh-official/acme.sh/wiki/DNS-alias-mode)：也就是通过 CNAME 委托 `_acme-challenge.` 域名的模式，考虑到专利侵权的原因(《[一种ACME集中管理系统及其负载均衡方法](https://qxb-img-osscache.qixin.com/patents_pdf_new/6e5447c9df704525ca8dad1f3174149a.pdf)》)，出于可能侵权的顾虑，我们不支持这种方式申请我们的证书，
-  :x: [**`DNS manual mode`**](https://github.com/acmesh-official/acme.sh/wiki/DNS-manual-mode)：也就是 `acme.sh --issue -d <域名> -d <额外域名> --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please` 类型，
-  :x: [**`Stateless mode`**](https://github.com/acmesh-official/acme.sh/wiki/Stateless-Mode)
-  :x: **`Standalone mode`**，
-  :x: **`Standalone tls-alpn mode`**。
:::

## 什么是 FQDN 验证，为什么要验证？

作为公网可信证书的签发机构，CA 需要解决一个问题：怎么确定申请人的身份对申请的网站域名拥有控制权？

因为 CA 要避免心怀诡异的人申请到你网站的证书（比方说如果黑客申请到了 `*.google.com` 的证书，那么就会威胁到 Google 业务的安全！

于是，早年的 CA 就想到了以下策略：

### **DNS 验证**: 

<details>
<summary> 介绍 </summary>

通过申请人给域名添加一条DNS解析，来证明自己的申请资格。

ACME 中 DNS 验证定义为 `dns-01`。

:::danger 警告
HiCA 申请通配符证书必须使用 `dns-01` 验证。
:::


下述验证类型均属于DNS验证：

```bash title="ACME 样式"
_acme-challenge.<YOUR_DOMAIN>   TXT   tn7UzQBPFq03WOrAs9lyGsOLfWVeZvzikU8.TpQY6VzddC6ZI3A1wtia
```

```bash title="DigiCert 样式"
_dnsauth.<YOUR_DOMAIN>   TXT   fD2WaHbkRDkRk4tbS1n91LGV6Mh8rbaJPtr
```

```bash title="Sectigo、SSL.com 样式"
_203E9A41095FD4DC3C7EC8F877CF83CE.<YOUR_DOMAIN>   CNAME   3FB6CDD546409985A0A193EE8BDDF8DE.A041DF8B9192FCBEC0C585EF51FF0FEB.CC65A.trust-provider.com
```

```bash title="GlobalSign 样式"
@.<YOUR_DOMAIN>       TXT   globalsign-domain-verification=FkSDOqIL1EPGT1rrbV9DsaS3R5xKh6m2Pw0FsmzrjZ
```

> 题外话：关于为什么解析主机头要么为 `@` 要么为 `_` 开头，可以见我们研究人员这篇文章：[《趣话 PKI/CA (一) 申请证书验证为何以“_“开头》](https://zhuanlan.zhihu.com/p/348254463?)。


在解析完成后，申请人需要告知CA，CA去查询对应的 DNS 主机，如果解析值匹配，就认为申请人有资格。

在 `acme.sh` + `HiCA` 中，使用 dns 验证的使用方式为:
```bash title="注意，此处尚未执行设置 DNS API 的命令，所以是错误的！"
acme.sh --issue \
  -d "<YOUR_DOMAIN>" \ # 这里放入你的域名，可以通配符，比如 `*.example.com`
  --dns dns_dp \ # 这里放入你的 DNS 提供商，比如 dns_dp（DNSPod）、dns_cf（CloudFlare)
  --days=150 \ # 第150天自动续期
  --server https://acme.hi.cn/directory
```

而 DNS API 是需要 API 权限的，所以，我们需要 `export XX_API=<API_KEY>...` 来设置。

```bash title="设置 DNS API"
export DP_Id=<你的DNSPod的API ID>
export DP_Key=<你的DNSPod的API Key>
```

#### 优点：
  - 您可以使用此验证方式来颁发包含通配符域名的证书。
  - 即使您有多个 Web 服务器，它也能正常工作。

#### 缺点：
  - 在 Web 服务器上保留 API 凭据存在风险。
  - 您的 DNS 提供商可能不提供 API。
  - 您的 DNS API 可能无法提供有关更新时间的信息。

</details>

DNS 验证进阶教程请见 [配置我的 DNS 模块 Key](configuration-your-dns-provider.md)。


### **文件验证（HTTP 验证或 HTTPS验证）**: 

<details>
<summary>介绍</summary>

选择此验证，CA会要求申请人往服务器上传一份文本文件（内容有要求）来证明申请人的域名控制资格。

ACME 中 DNS 验证定义为 `http-01`。

:::danger 警告
ACME 不支持 `HTTPS` 验证(:443)，只支持 `HTTP`(:80)。
:::

#### 优点：
  - 它可以轻松地自动化进行而不需要关于域名配置的额外知识。
  - 它允许托管服务提供商为通过 CNAME 指向它们的域名颁发证书。
  - 它适用于现成的 Web 服务器。

#### 缺点：
  - 如果您的 ISP 封锁了 80 端口，该验证将无法正常工作（这种情况多见于住宅 ISP 和国内一些默认封 80 的机房会这么做）。
  - 我们不允许您使用此验证方式来颁发通配符证书。
  - 您如果有多个 Web 服务器，则必须确保该文件在所有这些服务器上都可用。

</details>

### **TLS ALPN验证**: 

<details>
<summary>介绍</summary>

ACME 中 DNS 验证定义为 `tls-alpn-01`。

因为HiCA不支持此验证方式，所以此处不详细介绍。

:::danger 警告
ACME 支持 `tls-alpn-01` 验证，但HiCA不支持。
:::

</details>

### **邮箱验证**: 

<details>
<summary>介绍</summary>

:::danger 警告
ACME 不支持邮箱验证（因为无法自动化）。
:::

选择此验证，CA会向选择邮箱中发送一封邮件，按照要求填写唯一Token即可完成验证。

  * 基于域名搭建的域名邮箱
    *  `admin@<YOUR_DOMAIN>`
    *  `administrator@<YOUR_DOMAIN>`
    *  `postmaster@<YOUR_DOMAIN>`
    *  `webmaster@<YOUR_DOMAIN>`
    *  `hostmaster@<YOUR_DOMAIN>`
  * 域名注册时候的WHOIS管理员邮箱
    * 国际域名因为ICANN合规要求，基本都开了Whois Privacy，现在已经查询不到
    * CN域名没有遵守Whois Privacy，暂时还可以用WHOIS邮箱

</details>

### 总结

| 验证方式      | ACME 支持      | HiCA 支持  |
| ------------ | ------------- | --------- |
| DNS验证      | `dns-01`       | ✔️  |
| 文件验证      | `http-01`     | ✔️ |
| TLS ALPN验证 | `tls-alpn-01`  | ❌        |
| 邮箱验证      | ❌             | ❌        |

## 我应该选择那种验证方式?

您应该先评估您要申请 SSL 的站点是否包括通配符资产，如果包括，则应该考虑 `dns-01` 验证方式。
如果不包括，应该优先考虑 `http-01` 验证方式；如果服务器 80 端口不通，则应该考虑 `dns-01` 验证方式。
