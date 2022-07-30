---
sidebar_position: 2
---

# DNS Module and DNS Key

Usually, DNS modules were working via request API, so must provide the API key.
If you don't provide dns module's key, `acme.sh` can't issuance、renewal ssl certificates for you.


Please select your actual using DNS provider, and see tuturial about how to configure API key:

:::danger Can't looking out my DNS provider
If you can't find your dns provider, means your DNS provider didn't support by `acme.sh` (such as `dns.com`、`dns.la`、`juming.com` etc...). May considering for technical reasons or business reasons. we can only suggess you to look help from your DNS provider.
:::

<details>

<summary>DNSPod(腾讯云、TencentCloud)</summary>

:::tip Get my API Key
[https://console.dnspod.cn/account/token/token](https://console.dnspod.cn/account/token/token)

Login your DNSPod account, click avatar, click api secrets management, create a new API credential and copy your ID and Token.

![image](https://user-images.githubusercontent.com/110012832/180937011-b74bfe96-dcd0-4f85-b75c-255ec08e1961.png)

Save your DNSPod API Key + ID。
:::


```js
// highlight-start
export DP_Id="DNSPOD API TOKEN ID"
export DP_Key="DNSPOD API TOKEN KEY"
// highlight-end

acme.sh --issue \
  --dns dns_dp \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSPod.com(DNSPod国际版)</summary>

:::tip Get my API Key
[https://console.dnspod.cn/account/token/token](https://console.dnspod.cn/account/token/token)

Login your DNSPod account, click avatar, click api secrets management, create a new API credential and copy your ID and Token.

![image](https://user-images.githubusercontent.com/110012832/180937011-b74bfe96-dcd0-4f85-b75c-255ec08e1961.png)

Save your DNSPod API Key + ID。
:::


```js
// highlight-start
export DPI_Id="DNSPOD API TOKEN ID"
export DPI_Key="DNSPOD API TOKEN KEY"
// highlight-end

acme.sh --issue \
  --dns dns_dpi \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Alibaba Cloud(Aliyun)</summary>

:::tip Get my API Key
[https://ram.console.aliyun.com/manage/ak](https://ram.console.aliyun.com/manage/ak)


Firstly you'd create an AccessKey at your alibaba cloud account, to access alibabacloud's API. And you can using RAM to create(more secure and recommended!), and grant `AliyunDNSFullAccess` permission only.

![image](https://user-images.githubusercontent.com/110012832/180936947-ab8469ce-430f-413a-8034-f3455f36807b.png)

Save your Key And Secret.
:::


```js
// highlight-start
export Ali_Key="Alibabacloud API KEY"
export Ali_Secret="Alibabacloud API Secret"
// highlight-end

acme.sh --issue \
  --dns dns_ali \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>CloudFlare</summary>

:::tip Get my API Key
[https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

Login Cloudflare Dash and Add an API token at the menu named "API Token":

![image](https://user-images.githubusercontent.com/110012832/180937088-aec42321-138b-4d86-b38c-f006b4647cab.png)

click Edit Zone DNS template:

![image](https://user-images.githubusercontent.com/110012832/180937112-790c1284-d4a0-4ae7-8987-be342eb0749c.png)

Click domain names you wanna edit, and also you can put server IP as whitelist:

![image](https://user-images.githubusercontent.com/110012832/180937148-3b63bfe4-3361-40e5-bc03-1ca5345e5282.png)

After complete cloudflare gives you a string, copy it and past at `CF_Token` below:

![image](https://user-images.githubusercontent.com/110012832/180937162-07edc8bd-9e96-47c4-9b57-04bc7a392420.png)

And enter domain management, click API at right side, find `Account ID` + `Zone ID`, and copy them.

![image](https://user-images.githubusercontent.com/110012832/180937183-d1059652-d4d6-4b34-954c-96a0d9823f2e.png)

Save your `CF_Token`、`Zone ID` and `Account ID`.

:pushpin:Avoid Global API, unless you need multi-domain SSL.

:::


```js
// highlight-start
export CF_Token="API Token"
// highlight-end

acme.sh --issue \
  --dns dns_cf \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>GoDaddy</summary>

:::tip Get my API Key
[https://developer.godaddy.com/keys](https://developer.godaddy.com/keys)
:::


```js
// highlight-start
export GD_Key=""
export GD_Secret=""
// highlight-end

acme.sh --issue \
  --dns dns_gd \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>HE.net</summary>

:::tip
Username and Password pasted here, no API needed.
:::

```js
// highlight-start
export HE_Username=""
export HE_Password=""
// highlight-end

acme.sh --issue \
  --dns dns_he \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_jd \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_hexonet \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>Amazon Route53</summary>

:::tip Get my API Key
[https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/)
:::


```js
// highlight-start
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
// highlight-end

acme.sh --issue \
  --dns dns_aws \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_azure \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_linode \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_linode_v4 \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_cloudns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_clouddns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_dyn \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_1984hosting \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_acmedns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_acmeproxy \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_active24 \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_arvan \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_autodns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_cn \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_conoha \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_constellix \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_cyon \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_da \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_ddnss \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_desec \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_df \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_dgon \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>


<details>

<summary>DNSimple</summary>

API Key 可在[https://dnsimple.com/user](https://dnsimple.com/user)中Get my 。


```js
// highlight-start
export DNSimple_OAUTH_TOKEN="CHANGE TO YOUR TOKEN"
// highlight-end

acme.sh --issue \
  --dns dns_dnsimple \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_do \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_doapi \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_domeneshop \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_dreamhost \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_duckdns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_durabledns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_dynu \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_dynv6 \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_easydns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_euserv \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_exoscale \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_freedns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_gandi_livedns \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_gdnsdk \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_hetzner \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_hostingde \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_infoblox \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_internetbs \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_inwx \
  -d <DomainName> \
  -d <AdditionalDomainName> \
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
  --dns dns_ispconfig \
  -d <DomainName> \
  -d <AdditionalDomainName> \
  --days 150 \
  --server https://acme.hi.cn/directory
```

</details>

