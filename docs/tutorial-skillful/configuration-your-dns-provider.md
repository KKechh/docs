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

:::tip 获取API Key
[https://console.dnspod.cn/account/token/token](https://console.dnspod.cn/account/token/token)

登陆自己的 DNSPod 帐户，点击自己头像，选择密钥管理，添加一个密钥，将 ID 和 Token 记录下来：

![image](https://user-images.githubusercontent.com/110012832/180937011-b74bfe96-dcd0-4f85-b75c-255ec08e1961.png)

保存好你的DNSPod API Key 和 ID。
:::


```bash
export DP_Id="DNSPOD API TOKEN ID"
export DP_Key="DNSPOD API TOKEN KEY"

acme.sh --issue \
  --dns dns_dp \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSPod.com(DNSPod国际版)</summary>

:::tip 获取API Key
[https://console.dnspod.com/account/token/token](https://console.dnspod.com/account/token/token)

登陆自己的 DNSPod 帐户，点击自己头像，选择密钥管理，添加一个密钥，将 ID 和 Token 记录下来：

![image](https://user-images.githubusercontent.com/110012832/180937011-b74bfe96-dcd0-4f85-b75c-255ec08e1961.png)

保存好你的DNSPod API Key 和 ID。
:::



```bash
export DPI_Id="DNSPOD国际 API TOKEN ID"
export DPI_Key="DNSPOD国际 API TOKEN KEY"

acme.sh --issue \
  --dns dns_dpi \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>阿里云(Aliyun)</summary>

:::tip 获取API Key
[https://ram.console.aliyun.com/manage/ak](https://ram.console.aliyun.com/manage/ak)


首先在阿里云申请一个 AccessKey，用于 API 操作阿里云服务，可以使用创建子用户的方法（更安全），并且只授权 AliyunDNSFullAccess 权限

![image](https://user-images.githubusercontent.com/110012832/180936947-ab8469ce-430f-413a-8034-f3455f36807b.png)

保存好你得到的Key和Secret
:::


```bash
export Ali_Key="阿里云API KEY"
export Ali_Secret="阿里云API Secret"

acme.sh --issue \
  --dns dns_ali \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudFlare</summary>

:::tip 获取API Key
[https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

登录 Cloudflare Dash 后在 API Token 菜单里添加一个 API Token：

![image](https://user-images.githubusercontent.com/110012832/180937088-aec42321-138b-4d86-b38c-f006b4647cab.png)

然后选择 Edit Zone DNS 的模板

![image](https://user-images.githubusercontent.com/110012832/180937112-790c1284-d4a0-4ae7-8987-be342eb0749c.png)

选择你要编辑的域名，也可以加入你服务器的 IP 作为白名单

![image](https://user-images.githubusercontent.com/110012832/180937148-3b63bfe4-3361-40e5-bc03-1ca5345e5282.png)

完成后会给你一串字符，把他复制下来，需要填入下方的 CF_Token 参数

![image](https://user-images.githubusercontent.com/110012832/180937162-07edc8bd-9e96-47c4-9b57-04bc7a392420.png)

然后进入域名的管理页面，在右侧 API 列找到 Account ID 和 Zone ID 并复制

![image](https://user-images.githubusercontent.com/110012832/180937183-d1059652-d4d6-4b34-954c-96a0d9823f2e.png)

保存好你的Token、Zone ID和Account ID

:pushpin:请避免使用Global API，全局API权限过大，容易造成安全问题

:::


```bash
export CF_Token="API Token"

acme.sh --issue \
  --dns dns_cf \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>GoDaddy</summary>

:::tip 获取API Key
[https://developer.godaddy.com/keys](https://developer.godaddy.com/keys)
:::


```bash
export GD_Key=""
export GD_Secret=""

acme.sh --issue \
  --dns dns_gd \
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

```bash
export HE_Username=""
export HE_Password=""

acme.sh --issue \
  --dns dns_he \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
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
  --days 150 \
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
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Amazon Route53</summary>

:::tip 获取API Key
[https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/)
:::


```bash
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""

acme.sh --issue \
  --dns dns_aws \
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
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
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>

