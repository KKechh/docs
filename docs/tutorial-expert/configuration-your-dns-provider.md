---
sidebar_position: 2
---

# 配置我的 DNS 模块 Key

通常而言，DNS 模块都是基于 API 去调用的，所以需要配置 API Key 才能自动解析成功。
如果您不配置 DNS 模块 Key，`acme.sh` 是无法为您签发、续签 SSL 证书的。


请您选择您具体使用的 DNS 服务商，查看配置 API Key 的教程：

:::danger 找不到DNS服务商的提示
如果您在下面找不到您的 DNS 服务商，意味着您的服务商可能出于商业或者技术原因，没有支持 `acme.sh`（例如 `dns.com`、`dns.la`、`juming.com`），建议您联系您的 DNS 服务商寻求帮助。
:::

<details>

<summary>DNSPod(腾讯云、TencentCloud)</summary>

<p><a href="https://console.dnspod.cn/account/token/token" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::tip

登陆自己的 DNSPod 帐户，点击自己头像，选择密钥管理，添加一个密钥，将 ID 和 Token 记录下来：

<p><img srcset="/docs/dnspod-create-api-token-step-1.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-2.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-3.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-4.png 2x"></img></p>

创建成功后，千万记着把ID和Token记录下来，因为窗口一旦关闭信息就无法找回了。
:::


```js
// highlight-start
export DP_Id="DNSPOD API TOKEN ID"
export DP_Key="DNSPOD API TOKEN KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dp \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSPod.com(DNSPod国际版)</summary>

<p><a href="https://console.dnspod.com/account/token/token" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::tip

登陆自己的 DNSPod 帐户，点击自己头像，选择密钥管理，添加一个密钥，将 ID 和 Token 记录下来：

<p><img srcset="/docs/dnspod-create-api-token-step-1.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-2.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-3.png 2x"></img></p>
<p><img srcset="/docs/dnspod-create-api-token-step-4.png 2x"></img></p>

创建成功后，千万记着把ID和Token记录下来，因为窗口一旦关闭信息就无法找回了。
:::



```js
// highlight-start
export DPI_Id="DNSPOD国际 API TOKEN ID"
export DPI_Key="DNSPOD国际 API TOKEN KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dpi \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>阿里云(Aliyun)</summary>

<p><a href="https://ram.console.aliyun.com/manage/ak" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::tip 获取API Key

首先在阿里云申请一个 AccessKey，用于 API 操作阿里云服务，可以使用创建子用户的方法（更安全），并且只授权 AliyunDNSFullAccess 权限

![阿里云RAM](/docs/alibabacloud-ram-permission-grant-window.png)

保存好你得到的Key和Secret
:::


```js
// highlight-start
export Ali_Key="阿里云API KEY"
export Ali_Secret="阿里云API Secret"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_ali \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudFlare</summary>

<p><a href="https://dash.cloudflare.com/profile/api-tokens" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

:::tip

登录 Cloudflare Dash 后在 API Token 菜单里添加一个 API Token：

![CloudFlare 平台建立 API 凭据](/docs/cloudflare-create-api-token-step-1.png)

然后选择 Edit Zone DNS 的模板

![CloudFlare 平台建立 API 凭据](/docs/cloudflare-create-api-token-step-2.png)

选择你要编辑的域名，也可以加入你服务器的 IP 作为白名单

![CloudFlare 平台建立 API 凭据](/docs/cloudflare-create-api-token-step-3.png)

完成后会给你一串字符，把他复制下来，需要填入下方的 CF_Token 参数

![CloudFlare 平台建立 API 凭据](/docs/cloudflare-create-api-token-step-4.png)

然后进入域名的管理页面，在右侧 API 列找到 Account ID 和 Zone ID 并复制

![CloudFlare 平台建立 API 凭据](/docs/cloudflare-create-api-token-step-5.png)

保存好你的Token、Zone ID和Account ID

:pushpin:请避免使用Global API，全局API权限过大，容易造成安全问题

:::


```js
// highlight-start
export CF_Token="API Token"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_cf \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>GoDaddy</summary>

<p><a href="https://developer.godaddy.com/keys" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>

```js
// highlight-start
export GD_Key=""
export GD_Secret=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_gd \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>HE.net</summary>

:::tip
直接填入用户名密码，无需API Key
:::

```js
// highlight-start
export HE_Username=""
export HE_Password=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_he \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>京东云(JDCloud)</summary>

```js
// highlight-start
export JD_ACCESS_KEY_ID=""
export JD_ACCESS_KEY_SECRET=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_jd \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>HexONET(1API)</summary>

```js
// highlight-start
export Hexonet_Login="username!roleId"
export Hexonet_Password="rolePassword"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_hexonet \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Amazon Route53</summary>

<p><a href="https://console.aws.amazon.com/iam/" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>


```js
// highlight-start
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_aws \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Azure</summary>

```js
// highlight-start
export AZUREDNS_SUBSCRIPTIONID=""
export AZUREDNS_TENANTID=""
export AZUREDNS_APPID=""
export AZUREDNS_CLIENTSECRET=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_azure \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Linode</summary>

```js
// highlight-start
export LINODE_API_KEY="CHANGE TO YOUR LINODE_API_KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_linode \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Linode V4</summary>

```js
// highlight-start
export LINODE_V4_API_KEY="CHANGE TO YOUR LINODE_V4_API_KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_linode_v4 \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudNS</summary>

```js
// highlight-start
export CLOUDNS_AUTH_ID="CHANGE TO YOUR CLOUDNS_AUTH_ID"
export CLOUDNS_SUB_AUTH_ID="CHANGE TO YOUR CLOUDNS_SUB_AUTH_ID"
export CLOUDNS_AUTH_PASSWORD="CHANGE TO YOUR CLOUDNS_AUTH_PASSWORD"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_cloudns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudDNS</summary>

```js
// highlight-start
export CLOUDDNS_EMAIL="CHANGE TO YOUR CLOUDDNS_EMAIL"
export CLOUDDNS_PASSWORD="CHANGE TO YOUR CLOUDDNS_PASSWORD"
export CLOUDDNS_CLIENT_ID="CHANGE TO YOUR CLOUDDNS_CLIENT_ID"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_clouddns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>

<details>

<summary>Dyn.com</summary>

```js
// highlight-start
export DYN_Customer="customer"
export DYN_Username="apiuser"
export DYN_Password="secret"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dyn \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>1984hosting</summary>

```js
// highlight-start
export One984HOSTING_Username="CHANGE TO YOUR 1984HOSTING Username"
export One984HOSTING_Password="CHANGE TO YOUR 1984HOSTING Password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_1984hosting \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>acmedns</summary>

```js
// highlight-start
export ACMEDNS_UPDATE_URL="CHANGE TO YOUR ACMEDNS_UPDATE_URL"
export ACMEDNS_USERNAME="CHANGE TO YOUR ACMEDNS_USERNAME"
export ACMEDNS_PASSWORD="CHANGE TO YOUR ACMEDNS_PASSWORD"
export ACMEDNS_SUBDOMAIN="CHANGE TO YOUR ACMEDNS_SUBDOMAIN"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_acmedns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>acmeproxy</summary>

```js
// highlight-start
export ACMEPROXY_ENDPOINT=""
export ACMEPROXY_USERNAME=""
export ACMEPROXY_PASSWORD=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_acmeproxy \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>active24</summary>

```js
// highlight-start
export ACTIVE24_Token="CHANGE TO YOUR Token"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_active24 \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>arvan</summary>

```js
// highlight-start
export Arvan_Token="CHANGE TO YOUR Token"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_arvan \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>autodns</summary>

```js
// highlight-start
export AUTODNS_USER="username"
export AUTODNS_PASSWORD="password"
export AUTODNS_CONTEXT="context"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_autodns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>cn</summary>

```js
// highlight-start
export CN_User="CHANGE TO YOUR CN User"
export CN_Password="CHANGE TO YOUR CN Password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_cn \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>conoha</summary>

```js
// highlight-start
export CONOHA_Username=""
export CONOHA_Password=""
export CONOHA_TenantId=""
export CONOHA_IdentityServiceApi=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_conoha \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>constellix</summary>

```js
// highlight-start
export CONSTELLIX_Key=""
export CONSTELLIX_Secret=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_constellix \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>cyon</summary>

```js
// highlight-start
export CY_Username=""
export CY_Password=""
export CY_OTP_Secret=""
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_cyon \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DirectAdmin</summary>

```js
// highlight-start
export DA_Api="https://remoteDAUsername:remoteDAPassword@DirectAdmin.domain:8443"
export DA_Api_Insecure=1

acme.sh --issue \
// highlight-start
  --dns dns_da \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>ddnss</summary>

```js
// highlight-start
export DDNSS_Token="CHANGE-TO-YOUR-DDNSS-TOKEN"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_ddnss \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>desec</summary>

```js
// highlight-start
export DEDYN_TOKEN="Your DEDYN TOKEN"
export DEDYN_NAME="foobar.dedyn.io"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_desec \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>df</summary>

```js
// highlight-start
export DF_user="(your dyndnsfree.de username)"
export DF_password="(your dyndnsfree.de password)"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_df \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DigitalOcean</summary>

```js
// highlight-start
export DO_API_KEY="Change to your DigitalOcean KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dgon \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSimple</summary>

API Key 可在[https://dnsimple.com/user](https://dnsimple.com/user)中获取。


```js
// highlight-start
export DNSimple_OAUTH_TOKEN="CHANGE TO YOUR TOKEN"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dnsimple \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Domain-Offensive / Resellerinterface / Domainrobot</summary>

```js
// highlight-start
export DO_PID="CHANGE TO YOUR PID"
export DO_PW="CHANGE TO YOUR PW"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_do \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Do.DE</summary>

```js
// highlight-start
export DO_LETOKEN="CHANGE TO YOUR Do.DE TOKEN"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_doapi \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>domeneshop</summary>

```js
// highlight-start
export DOMENESHOP_Token="CHANGE TO DOMENESHOP Token"
export DOMENESHOP_Secret="CHANGE TO DOMENESHOP Secret"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_domeneshop \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DreamHost DNS</summary>

```js
// highlight-start
export DH_API_KEY="CHANGE TO YOUR KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dreamhost \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>duckdns</summary>

```js
// highlight-start
export DuckDNS_Token="CHANGE TO YOUR DuckDNS Token"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_duckdns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>durabledns</summary>

```js
// highlight-start
export DD_API_User="xxxxx"
export DD_API_Key="xxxxxx"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_durabledns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Dynu</summary>

```js
// highlight-start
export Dynu_ClientId="Change to your Dynu Client ID"
export Dynu_Secret="Change to your Dynu Secret"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_dynu \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DynV6</summary>

```js
// highlight-start
export KEY="path/to/keyfile" # Change to your DynV6 private key file here

acme.sh --issue \
// highlight-start
  --dns dns_dynv6 \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>easydns</summary>

```js
// highlight-start
export EASYDNS_Key="xxxxxxxxxxxxxxxxxxxxxxxx"
export EASYDNS_Token="xxxxxxxxxxxxxxxxxxxxxxxx"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_easydns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>euserv</summary>

```js
// highlight-start
export EUSERV_Username="username"
export EUSERV_Password="password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_euserv \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>exoscale</summary>

```js
// highlight-start
export EXOSCALE_API_KEY="Change to your EXOSCALE API KEY"
export EXOSCALE_SECRET_KEY="Change to your EXOSCALE SECRET KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_exoscale \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>freedns</summary>

```js
// highlight-start
export FREEDNS_User="change to your freedns username"
export FREEDNS_Password="change to your freedns password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_freedns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Gandi LiveDNS</summary>

```js
// highlight-start
export GANDI_LIVEDNS_KEY="Change to your Gandi Livedns KEY"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_gandi_livedns \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Gratisdns.com</summary>

```js
// highlight-start
export GDNSDK_Username="change to your GDNSDK Username"
export GDNSDK_Password="change to your GDNSDK Password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_gdnsdk \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>hetzner</summary>
API Key 可以在 [Hetzner](https://dns.hetzner.com/settings/api-token) 的页面找到。


```js
// highlight-start
export HETZNER_Token="Change to your HETZNER Token"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_hetzner \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>hostingde</summary>

```js
// highlight-start
export HOSTINGDE_ENDPOINT='https://secure.hosting.de'
export HOSTINGDE_APIKEY='xxxxx'

acme.sh --issue \
// highlight-start
  --dns dns_hostingde \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>infoblox</summary>

```js
// highlight-start
export Infoblox_Creds=""
export Infoblox_Server="Your-InfobloxServer.com"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_infoblox \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>internetbs</summary>

```js
// highlight-start
export INTERNETBS_API_KEY="Change to your INTERNETBS API KEY"
export INTERNETBS_API_PASSWORD="Change to your INTERNETBS API PASSWORD"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_internetbs \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>inwx</summary>

```js
// highlight-start
export INWX_User="username"
export INWX_Password="password"
// highlight-end

acme.sh --issue \
// highlight-start
  --dns dns_inwx \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>ispconfig</summary>

```js
// highlight-start
export ISPC_User="remoteUser"
export ISPC_Password="remotePassword"
export ISPC_Api="https://ispc.domain.tld:8080/remote/json.php"
export ISPC_Api_Insecure=1

acme.sh --issue \
// highlight-start
  --dns dns_ispconfig \
// highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>

