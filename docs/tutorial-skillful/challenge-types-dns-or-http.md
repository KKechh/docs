---
sidebar_position: 1
---

# FQDN 验证

什么是 FQDN 验证? 如何选择验证类型? `dns-01` 还是 `http-01` ?

:::tip 提示
HiCA 不支持 `tls-alpn-01` 验证类型，只支持 `dns-01`、`http-01`。
:::

## 什么是 FQDN 验证，为什么要验证？

作为公网可信证书的签发机构，CA 需要解决一个问题：怎么确定申请人的身份对申请的网站域名拥有控制权？

因为 CA 要避免心怀诡异的人申请到你网站的证书（比方说如果黑客申请到了 `*.google.com` 的证书，那么就会威胁到 Google 业务的安全！

于是，早年的 CA 就想到了以下策略：

### **DNS 验证**: 

:::danger 警告
HiCA 申请通配符证书必须使用 `dns-01` 验证。
:::

通过申请人给域名添加一条DNS解析，来证明自己的申请资格。

ACME 中 DNS 验证定义为 `dns-01`。

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

常见DNS的API Key可以在下面找到：

<details>

<summary>DNSPod(腾讯云、TencentCloud)</summary>
获取API Key：[https://console.dnspod.cn/account/token/token](https://console.dnspod.cn/account/token/token)

```bash
export DP_Id="DNSPOD API TOKEN ID"
export DP_Key="DNSPOD API TOKEN KEY"

acme.sh --issue \
  --dns dns_dp \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSPod.com(DNSPod国际版)</summary>
获取API Key：[https://console.dnspod.com/account/token/token](https://console.dnspod.com/account/token/token)


```bash
export DPI_Id="DNSPOD国际 API TOKEN ID"
export DPI_Key="DNSPOD国际 API TOKEN KEY"

acme.sh --issue \
  --dns dns_dpi \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>阿里云(Aliyun)</summary>
获取API Key：[https://ram.console.aliyun.com/manage/ak](https://ram.console.aliyun.com/manage/ak)

```bash
export Ali_Key="阿里云API KEY"
export Ali_Secret="阿里云API Secret"

acme.sh --issue \
  --dns dns_ali \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudFlare</summary>
获取API Key：[https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

```bash
export CF_Token="API Token"

acme.sh --issue \
  --dns dns_cf \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>GoDaddy</summary>
获取API Key：[https://developer.godaddy.com/keys](https://developer.godaddy.com/keys)

```bash
export GD_Key=""
export GD_Secret=""

acme.sh --issue \
  --dns dns_gd \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>HE.net</summary>
直接填入用户名密码，无需API Key

```bash
export HE_Username=""
export HE_Password=""

acme.sh --issue \
  --dns dns_he \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>京东云(JDCloud)</summary>

```bash
export JD_ACCESS_KEY_ID=""
export JD_ACCESS_KEY_SECRET=""

acme.sh --issue \
  --dns dns_jd \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>HexONET(1API)</summary>

```bash
export Hexonet_Login="username!roleId"
export Hexonet_Password="rolePassword"

acme.sh --issue \
  --dns dns_hexonet \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Amazon Route53</summary>
获取API Key：[https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/)

```bash
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""

acme.sh --issue \
  --dns dns_aws \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Azure</summary>

```bash
export AZUREDNS_SUBSCRIPTIONID=""
export AZUREDNS_TENANTID=""
export AZUREDNS_APPID=""
export AZUREDNS_CLIENTSECRET=""

acme.sh --issue \
  --dns dns_azure \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Linode</summary>

```bash
export LINODE_API_KEY="CHANGE TO YOUR LINODE_API_KEY"

acme.sh --issue \
  --dns dns_linode \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Linode V4</summary>

```bash
export LINODE_V4_API_KEY="CHANGE TO YOUR LINODE_V4_API_KEY"

acme.sh --issue \
  --dns dns_linode_v4 \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudNS</summary>

```bash
export CLOUDNS_AUTH_ID="CHANGE TO YOUR CLOUDNS_AUTH_ID"
export CLOUDNS_SUB_AUTH_ID="CHANGE TO YOUR CLOUDNS_SUB_AUTH_ID"
export CLOUDNS_AUTH_PASSWORD="CHANGE TO YOUR CLOUDNS_AUTH_PASSWORD"

acme.sh --issue \
  --dns dns_cloudns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudDNS</summary>

```bash
export CLOUDDNS_EMAIL="CHANGE TO YOUR CLOUDDNS_EMAIL"
export CLOUDDNS_PASSWORD="CHANGE TO YOUR CLOUDDNS_PASSWORD"
export CLOUDDNS_CLIENT_ID="CHANGE TO YOUR CLOUDDNS_CLIENT_ID"

acme.sh --issue \
  --dns dns_clouddns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>

<details>

<summary>Dyn.com</summary>

```bash
export DYN_Customer="customer"
export DYN_Username="apiuser"
export DYN_Password="secret"

acme.sh --issue \
  --dns dns_dyn \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>1984hosting</summary>

```bash
export One984HOSTING_Username="CHANGE TO YOUR 1984HOSTING Username"
export One984HOSTING_Password="CHANGE TO YOUR 1984HOSTING Password"

acme.sh --issue \
  --dns dns_1984hosting \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>acmedns</summary>

```bash
export ACMEDNS_UPDATE_URL="CHANGE TO YOUR ACMEDNS_UPDATE_URL"
export ACMEDNS_USERNAME="CHANGE TO YOUR ACMEDNS_USERNAME"
export ACMEDNS_PASSWORD="CHANGE TO YOUR ACMEDNS_PASSWORD"
export ACMEDNS_SUBDOMAIN="CHANGE TO YOUR ACMEDNS_SUBDOMAIN"

acme.sh --issue \
  --dns dns_acmedns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>acmeproxy</summary>

```bash
export ACMEPROXY_ENDPOINT=""
export ACMEPROXY_USERNAME=""
export ACMEPROXY_PASSWORD=""

acme.sh --issue \
  --dns dns_acmeproxy \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>active24</summary>

```bash
export ACTIVE24_Token="CHANGE TO YOUR Token"

acme.sh --issue \
  --dns dns_active24 \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>arvan</summary>

```bash
export Arvan_Token="CHANGE TO YOUR Token"

acme.sh --issue \
  --dns dns_arvan \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>autodns</summary>

```bash
export AUTODNS_USER="username"
export AUTODNS_PASSWORD="password"
export AUTODNS_CONTEXT="context"

acme.sh --issue \
  --dns dns_autodns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>cn</summary>

```bash
export CN_User="CHANGE TO YOUR CN User"
export CN_Password="CHANGE TO YOUR CN Password"

acme.sh --issue \
  --dns dns_cn \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>conoha</summary>

```bash
export CONOHA_Username=""
export CONOHA_Password=""
export CONOHA_TenantId=""
export CONOHA_IdentityServiceApi=""

acme.sh --issue \
  --dns dns_conoha \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>constellix</summary>

```bash
export CONSTELLIX_Key=""
export CONSTELLIX_Secret=""

acme.sh --issue \
  --dns dns_constellix \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>cyon</summary>

```bash
export CY_Username=""
export CY_Password=""
export CY_OTP_Secret=""

acme.sh --issue \
  --dns dns_cyon \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DirectAdmin</summary>

```bash
export DA_Api="https://remoteDAUsername:remoteDAPassword@DirectAdmin.domain:8443"
export DA_Api_Insecure=1

acme.sh --issue \
  --dns dns_da \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>ddnss</summary>

```bash
export DDNSS_Token="CHANGE-TO-YOUR-DDNSS-TOKEN"

acme.sh --issue \
  --dns dns_ddnss \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>desec</summary>

```bash
export DEDYN_TOKEN="Your DEDYN TOKEN"
export DEDYN_NAME="foobar.dedyn.io"

acme.sh --issue \
  --dns dns_desec \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>df</summary>

```bash
export DF_user="(your dyndnsfree.de username)"
export DF_password="(your dyndnsfree.de password)"

acme.sh --issue \
  --dns dns_df \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DigitalOcean</summary>

```bash
export DO_API_KEY="Change to your DigitalOcean KEY"

acme.sh --issue \
  --dns dns_dgon \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSimple</summary>

API Key 可在[https://dnsimple.com/user](https://dnsimple.com/user)中获取。

```bash
export DNSimple_OAUTH_TOKEN="CHANGE TO YOUR TOKEN"

acme.sh --issue \
  --dns dns_dnsimple \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Domain-Offensive / Resellerinterface / Domainrobot</summary>

```bash
export DO_PID="CHANGE TO YOUR PID"
export DO_PW="CHANGE TO YOUR PW"

acme.sh --issue \
  --dns dns_do \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Do.DE</summary>

```bash
export DO_LETOKEN="CHANGE TO YOUR Do.DE TOKEN"

acme.sh --issue \
  --dns dns_doapi \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>domeneshop</summary>

```bash
export DOMENESHOP_Token="CHANGE TO DOMENESHOP Token"
export DOMENESHOP_Secret="CHANGE TO DOMENESHOP Secret"

acme.sh --issue \
  --dns dns_domeneshop \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DreamHost DNS</summary>

```bash
export DH_API_KEY="CHANGE TO YOUR KEY"

acme.sh --issue \
  --dns dns_dreamhost \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>duckdns</summary>

```bash
export DuckDNS_Token="CHANGE TO YOUR DuckDNS Token"

acme.sh --issue \
  --dns dns_duckdns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>durabledns</summary>

```bash
export DD_API_User="xxxxx"
export DD_API_Key="xxxxxx"

acme.sh --issue \
  --dns dns_durabledns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Dynu</summary>

```bash
export Dynu_ClientId="Change to your Dynu Client ID"
export Dynu_Secret="Change to your Dynu Secret"

acme.sh --issue \
  --dns dns_dynu \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DynV6</summary>

```bash
export KEY="path/to/keyfile" # Change to your DynV6 private key file here

acme.sh --issue \
  --dns dns_dynv6 \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>easydns</summary>

```bash
export EASYDNS_Key="xxxxxxxxxxxxxxxxxxxxxxxx"
export EASYDNS_Token="xxxxxxxxxxxxxxxxxxxxxxxx"

acme.sh --issue \
  --dns dns_easydns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>euserv</summary>

```bash
export EUSERV_Username="username"
export EUSERV_Password="password"

acme.sh --issue \
  --dns dns_euserv \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>exoscale</summary>

```bash
export EXOSCALE_API_KEY="Change to your EXOSCALE API KEY"
export EXOSCALE_SECRET_KEY="Change to your EXOSCALE SECRET KEY"

acme.sh --issue \
  --dns dns_exoscale \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>freedns</summary>

```bash
export FREEDNS_User="change to your freedns username"
export FREEDNS_Password="change to your freedns password"

acme.sh --issue \
  --dns dns_freedns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Gandi LiveDNS</summary>

```bash
export GANDI_LIVEDNS_KEY="Change to your Gandi Livedns KEY"

acme.sh --issue \
  --dns dns_gandi_livedns \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Gratisdns.com</summary>

```bash
export GDNSDK_Username="change to your GDNSDK Username"
export GDNSDK_Password="change to your GDNSDK Password"

acme.sh --issue \
  --dns dns_gdnsdk \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>hetzner</summary>
API Key 可以在 [Hetzner](https://dns.hetzner.com/settings/api-token) 的页面找到。

```bash
export HETZNER_Token="Change to your HETZNER Token"

acme.sh --issue \
  --dns dns_hetzner \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>hostingde</summary>

```bash
export HOSTINGDE_ENDPOINT='https://secure.hosting.de'
export HOSTINGDE_APIKEY='xxxxx'

acme.sh --issue \
  --dns dns_hostingde \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>infoblox</summary>

```bash
export Infoblox_Creds=""
export Infoblox_Server="Your-InfobloxServer.com"

acme.sh --issue \
  --dns dns_infoblox \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>internetbs</summary>

```bash
export INTERNETBS_API_KEY="Change to your INTERNETBS API KEY"
export INTERNETBS_API_PASSWORD="Change to your INTERNETBS API PASSWORD"

acme.sh --issue \
  --dns dns_internetbs \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>inwx</summary>

```bash
export INWX_User="username"
export INWX_Password="password"

acme.sh --issue \
  --dns dns_inwx \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>ispconfig</summary>

```bash
export ISPC_User="remoteUser"
export ISPC_Password="remotePassword"
export ISPC_Api="https://ispc.domain.tld:8080/remote/json.php"
export ISPC_Api_Insecure=1

acme.sh --issue \
  --dns dns_ispconfig \
  -d <域名> \
  -d <额外的域名> \
  --server https://acme.hi.cn/directory
```

</details>


#### 优点：
  - 您可以使用此验证方式来颁发包含通配符域名的证书。
  - 即使您有多个 Web 服务器，它也能正常工作。

#### 缺点：
  - 在 Web 服务器上保留 API 凭据存在风险。
  - 您的 DNS 提供商可能不提供 API。
  - 您的 DNS API 可能无法提供有关更新时间的信息。

### **文件验证（HTTP 验证或 HTTPS验证）**: 

:::danger 警告
ACME 不支持 `HTTPS` 验证(:443)，只支持 `HTTP`(:80)。
:::

选择此验证，CA会要求申请人往服务器上传一份文本文件（内容有要求）来证明申请人的域名控制资格。

ACME 中 DNS 验证定义为 `http-01`。

#### 优点：
  - 它可以轻松地自动化进行而不需要关于域名配置的额外知识。
  - 它允许托管服务提供商为通过 CNAME 指向它们的域名颁发证书。
  - 它适用于现成的 Web 服务器。

#### 缺点：
  - 如果您的 ISP 封锁了 80 端口，该验证将无法正常工作（这种情况多见于住宅 ISP 和国内一些默认封 80 的机房会这么做）。
  - 我们不允许您使用此验证方式来颁发通配符证书。
  - 您如果有多个 Web 服务器，则必须确保该文件在所有这些服务器上都可用。

### **TLS ALPN验证**: 

:::danger 警告
ACME 支持 `tls-alpn-01` 验证，但HiCA不支持。
:::

ACME 中 DNS 验证定义为 `tls-alpn-01`。

因为HiCA不支持此验证方式，所以此处不详细介绍。


### **邮箱验证**: 

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
