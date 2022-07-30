---
sidebar_position: 3
---

# Certificate Issuance

Challange type:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="dns-01" label="DNS Challenge" default>

## DNS Challenge / `dns-01`

根据 CA / B Forum 要求，通配符证书（例如 `*.example.com` 需要DNS验证。

第一个输入的域名会作为证书的Common Name（即显示的颁发给：`*.example.com`），其余域名会按字母顺序排列，如有需要请把带 `*.` 的域名排到最前面。

### 签发命令

> 高亮的地方（**包括 `--dns dns_dp`**） 表示 DNS API 的凭据，您需要按照 [配置我的 DNS 模块 Key](configuration-your-dns-provider.md) 来设置）

```js
// highlight-start
export DP_Id="1234"
export DP_Key="sADDsdasdgdsf"
// highlight-end

acme.sh --issue \
// highlight-start
    --dns dns_dp \
// highlight-end
    -d \*.<域名1.com> \
    -d <域名1.com> \
    -d \*.<域名2.com> \
    -d <域名2.com> \
    --days 150 \
    --server https://acme.hi.cn/directory
```

### 签发完成

稍等片刻，提示签发成功即可下载证书，同样位于 `~/.acme.sh/your.domain`

若提示 acme.sh 命令不存在，直接 cd 到 `/home/.acme.sh` 目录下相对路径执行命令即可。

```js
➜  ~ ~/.acme.sh/acme.sh --issue -d www1.hi.cn --dns dns_dp --server http://acme.hi.cn/directory --days 150 --force
[2022年 7月27日 星期三 01时46分23秒 CST] Using CA: http://acme.hi.cn/directory
[2022年 7月27日 星期三 01时46分23秒 CST] Single domain='www1.hi.cn'
[2022年 7月27日 星期三 01时46分23秒 CST] Getting domain auth token for each domain
[2022年 7月27日 星期三 01时46分26秒 CST] Getting webroot for domain='www1.hi.cn'
[2022年 7月27日 星期三 01时46分26秒 CST] Verifying: www1.hi.cn
[2022年 7月27日 星期三 01时46分31秒 CST] Success
[2022年 7月27日 星期三 01时46分31秒 CST] Verify finished, start to sign.
[2022年 7月27日 星期三 01时46分31秒 CST] Lets finalize the order.
[2022年 7月27日 星期三 01时46分31秒 CST] Le_OrderFinalize='https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP/finalize'
[2022年 7月27日 星期三 01时46分32秒 CST] Order status is processing, lets sleep and retry.
[2022年 7月27日 星期三 01时46分32秒 CST] Retry after: 60
[2022年 7月27日 星期三 01时47分34秒 CST] Polling order status: https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP
[2022年 7月27日 星期三 01时47分35秒 CST] Downloading cert.
[2022年 7月27日 星期三 01时47分35秒 CST] Le_LinkCert='https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP/download'
[2022年 7月27日 星期三 01时47分36秒 CST] Cert success.
// highlight-start
-----BEGIN CERTIFICATE-----
MIIGIDCCBQigAwIBAgIRAIJF7rZD8wiMCUp9OpWZuaAwDQYJKoZIhvcNAQELBQAw
gY8xCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO
BgNVBAcTB1NhbGZvcmQxGDAWBgNVBAoTD1NlY3RpZ28gTGltaXRlZDE3MDUGA1UE
AxMuU2VjdGlnbyBSU0EgRG9tYWluIFZhbGlkYXRpb24gU2VjdXJlIFNlcnZlciBD
QTAeFw0yMjA3MjYwMDAwMDBaFw0yMzAxMjIyMzU5NTlaMBUxEzARBgNVBAMTCnd3
dzEuaGkuY24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJov9JeWAq
a34MT59sEcHIcV2hiKGII1XbBqmuhuJ+wYkl9s41TLL8Eg8zAJ0HpZOpUlp97dgT
iH9y8RTx5bD4URThN8KRavX/V27z7aU1f7Y97RPAwFUwZvWCyD4hadZ7qFzuV+qI
Mliy1c/wCqzvdtXzVbPJrL8+epJMBYZ/ObzH4WYgRflBm2C2H1XxOtlaSIhiPIxv
GeEsYsbhbWP1misu6Ho9IELy2HM9sIdM6UxZmbioTqOqJZQVQxxu7bo8LV10HjRu
5P+NwmlxmJY60CsZ9Kr27MaxDoy8/lBXcrQ13HCweu6Ds54VNT/BWMfE2x+XAD9Z
lpW012aQ9qlJAgMBAAGjggLuMIIC6jAfBgNVHSMEGDAWgBSNjF7EVK2K4Xfpm/mb
BeG4AY1h4TAdBgNVHQ4EFgQU/ZWYWFYw9RumXExZi13XD+lnTz0wDgYDVR0PAQH/
BAQDAgWgMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUF
BwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAgcwJTAjBggrBgEFBQcCARYXaHR0
cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGEBggrBgEFBQcBAQR4MHYw
TwYIKwYBBQUHMAKGQ2h0dHA6Ly9jcnQuc2VjdGlnby5jb20vU2VjdGlnb1JTQURv
bWFpblZhbGlkYXRpb25TZWN1cmVTZXJ2ZXJDQS5jcnQwIwYIKwYBBQUHMAGGF2h0
dHA6Ly9vY3NwLnNlY3RpZ28uY29tMIIBgAYKKwYBBAHWeQIEAgSCAXAEggFsAWoA
dgCt9776fP8QyIudPZwePhhqtGcpXc+xDCTKhYY069yCigAAAYI7nsONAAAEAwBH
MEUCIQD9BFititX0FXUXA2VxEzlx9mNQJvhBHD+2RGXYYeKHFAIgYVE281cRzwZD
VTiLRtc5gWnoKlDIGlFJj1XEXTFGltcAdwB6MoxU2LcttiDqOOBSHumEFnAyE4VN
O9IrwTpXo1LrUgAAAYI7nsQWAAAEAwBIMEYCIQD1MpXGIFmvGd2hpKWu0+UDg76S
R5dVyW6pRsNyHMewhAIhAO2Jbfk/45TC3DJQ8Qxib6mqmJEfDul6FPP7w51WRhOF
AHcA6D7Q2j71BjUy51covIlryQPTy9ERa+zraeF3fW0GvW4AAAGCO57DJwAABAMA
SDBGAiEA5VS/hffDwBwONvBuYxQR/Tp2Snx+pj+DUM9t6XsNqE4CIQDzac9vCcLN
bxTcMmYZaVZkD62YZeFMWdwasKrWqRUncTAVBgNVHREEDjAMggp3d3cxLmhpLmNu
MA0GCSqGSIb3DQEBCwUAA4IBAQAejJvX7VQc8LJAtn7scZP0BOtlYSQmfxFaIbZA
BxKyIxpDanEJJDxLYeTZ6L8pW/xPa++Nq7gcg4DL1dQA9nnQ0Tmu8za4AjoZ1MHx
BfEDAqoj53x2Wffg3EROq/P2TeOBl01onzKvkMtltawz613dsGJvHj2yoTO1HCsR
473zCzYch+VL9fMuT8nk042mx1Kb0CZCeLphMZYBN+wV8M3JLb36FcRJzy3eEH4g
kV+EB0tdnU7lxgRZFQNd1u9Sdtdpk9xuk1s+E5ITtIE7vKQ/LMul+PcPOf6L+38C
SH7jOvH+p7k8CbrYFXFvZOGd5T8axCknS9xSSlfO602wiRR7
-----END CERTIFICATE-----
// highlight-end
[2022年 7月27日 星期三 01时47分36秒 CST] Your cert is in: /Users/mac/.acme.sh/www1.hi.cn/www1.hi.cn.cer
[2022年 7月27日 星期三 01时47分36秒 CST] Your cert key is in: /Users/mac/.acme.sh/www1.hi.cn/www1.hi.cn.key
[2022年 7月27日 星期三 01时47分36秒 CST] The intermediate CA cert is in: /Users/mac/.acme.sh/www1.hi.cn/ca.cer
[2022年 7月27日 星期三 01时47分36秒 CST] And the full chain certs is there: /Users/mac/.acme.sh/www1.hi.cn/fullchain.cer
➜  ~
```

:pushpin:在签发超过限制（10个SAN和1个通配符）的证书时，会提示超出限制。

```js
➜  ~ ~/.acme.sh/acme.sh --issue -d www1.hi.cn -d www2.hi.cn -d www3.hi.cn -d www4.hi.cn -d www5.hi.cn -d www6.hi.cn -d www7.hi.cn -d www8.hi.cn -d www9.hi.cn -d www10.hi.cn -d www11.hi.cn --dns dns_dp --server http://acme.hi.cn/directory --days 150 --force
[2022年 7月27日 星期三 01时49分53秒 CST] Using CA: http://acme.hi.cn/directory
[2022年 7月27日 星期三 01时49分53秒 CST] Multi domain='DNS:www1.hi.cn,DNS:www2.hi.cn,DNS:www3.hi.cn,DNS:www4.hi.cn,DNS:www5.hi.cn,DNS:www6.hi.cn,DNS:www7.hi.cn,DNS:www8.hi.cn,DNS:www9.hi.cn,DNS:www10.hi.cn,DNS:www11.hi.cn'
[2022年 7月27日 星期三 01时49分53秒 CST] Getting domain auth token for each domain
// highlight-start
[2022年 7月27日 星期三 01时49分55秒 CST] Create new order error. Le_OrderFinalize not found. {"type":"urn:ietf:params:acme:error:malformed","detail":"Free certificate does not support more than 10 FQDNs."}
// highlight-end
[2022年 7月27日 星期三 01时49分55秒 CST] Please add '--debug' or '--log' to check more details.
[2022年 7月27日 星期三 01时49分55秒 CST] See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh
➜  ~
```

:::tip 常见问题

- 签发ECC证书：在命令行最后添加 `--keylength ec-256`（HiCA 暂时不支持，预计 8 月将支持）；
- 对使用 DNS 验证的证书，不设置 DNS 模块的 ApiID 和 Key，将无法签发成功。
:::


</TabItem>

<TabItem value="http-01" label="HTTP 文件验证">

## HTTP 文件验证 / `http-01` 申请方式

acme.sh http 方式需要在你的网站根目录下放置一个文件，来验证你的域名所有权,完成验证.。然后就可以生成证书了。

注意：需要开启80端口（ACME协议限制）。

```bash title="提示"
acme.sh --issue -d [你的IP/域名] --webroot [网站根目录] --days 150 --server https://acme.hi.cn/directory
```

正确格式例如

```bash title="域名格式，注意如果需要 www. 或 @. 请务必手工指定，否则证书不会包含"
acme.sh --issue \
    -d www.example.com \
    -d example.com \
    -d api.example.com \
    --webroot /www/wwwroot/114514 \
    --days 150 \
    --server https://acme.hi.cn/directory
```

```bash title="IPv4格式"
acme.sh --issue \
    -d 11.4.5.14 \
    --webroot /www/wwwroot/114514 \
    --days 150 \
    --server https://acme.hi.cn/directory
```

```bash title="IPv6格式"
acme.sh --issue \
    -d 1145:1419:1981:0114:5141:9198:1011:4514 \
    --webroot /home/wwwroot/ \
    --days 60 \
    --server https://acme.hi.cn/directory
```

稍等片刻，提示签发成功即可下载证书，位于 `/root/.acme.sh/你的域名` 比如 `/root/.acme.sh/11.4.5.14`

若提示 acme.sh 命令不存在，直接 cd 到 /root 目录下的 .acme.sh 目录下只用相对路径执行命令即可。

只需要指定域名, 并指定域名所在的网站根目录. acme.sh 会全自动的生成验证文件, 并放到网站的根目录, 然后自动完成验证. 最后会聪明的删除验证文件. 整个过程没有任何副作用。

如果你用的 apache服务器, acme.sh 还可以智能的从 apache的配置中自动完成验证, 你不需要指定网站根目录：

```bash
acme.sh --issue  -d mydomain.com --apache --days 150 --server https://acme.hi.cn/directory
```

如果你使用Nginx或者反代，acme.sh还可以智能地更改Nginx配置文件自动完成验证，从而不需要指定网站根目录：

```bash
acme.sh --issue  -d mydomain.com --nginx --days 150 --server https://acme.hi.cn/directory
```

注意，无论是 apache 还是 nginx 模式，acme.sh在完成验证之后，会恢复到之前的状态，都不会私自更改你本身的配置。好处是你不用担心配置被搞坏，也有一个缺点，你需要自己配置 ssl 的配置，否则只能成功生成证书，你的网站还是无法访问https。但是为了安全, 你还是自己手动改配置吧。

如果你还没有运行任何 web 服务，80 端口是空闲的，那么 acme.sh 还能假装自己是一个webserver，临时监听80 端口，完成验证：

```
acme.sh  --issue -d mydomain.com   --standalone --days 150 --server https://acme.hi.cn/directory
```

更高级的用法请参考: https://github.com/Neilpang/acme.sh/wiki/How-to-issue-a-cert
### 常见问题
- IP证书只能通过HTTP验证签发，因此只能签发单域名证书，不能为多个IP签发一张证书
- 签发ECC证书：在命令行最后添加```--keylength ec-256``` 或 ```-k ec-256```
- 对使用HTTP验证的证书，网站目录设置不正确就无法签发成功


</TabItem>

<TabItem value="tls-alpn-01" label="TLS-ALPN 验证方式">

:::danger
HiCA **不支持** `tls-alpn-01` 申请证书。所以请不要尝试 `caddy` 了。

您必须使用 `acme.sh` 配置 DNS 模块或者配置网站目录自动申请！
:::

</TabItem>

<TabItem value="manual" label="手动模式">

:::danger
HiCA **不支持** 手动添加 DNS、手动上传 HTTP 文本文件申请证书。您必须配置 DNS 模块或者配置网站目录自动申请！
:::

</TabItem>
</Tabs>

## 安装证书

安装证书就是让网页服务器加载刚刚获取的在acme.sh目录下的证书文件

对使用宝塔等面板的用户来说，需要手动复制证书（full_chain.pem和key.pem，以纯文本模式打开），到面板上手动填写

对直接使用Nginx和Apache的用户来说，可以自动安装证书，使用其它网页服务器可以到各自的社区/商业公司网站查找文档

注意, 默认生成的证书都放在安装目录下：```~/.acme.sh/```，请不要直接使用此目录下的文件，例如：不要直接让 nginx/apache 的配置文件使用这下面的文件。这里面的文件都是内部使用，而且目录结构可能会变化

实现自动化的方法是使用 ```--install-cert``` 命令,并指定目标位置，然后证书文件会被复制到相应的位置，例如：

```
acme.sh --install-cert -d example.com \
--cert-file      /path/to/certfile/in/apache/cert.pem  \
--key-file       /path/to/keyfile/in/apache/key.pem  \
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \
--reloadcmd     "service apache2 force-reload"
```
```
acme.sh --install-cert -d example.com \
--key-file       /path/to/keyfile/in/nginx/key.pem  \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd     "service nginx force-reload"
```

（一个小提醒，这里用的是 `service nginx force-reload`，不是 `service nginx reload`，据测试，`reload` 并不会重新加载证书，所以用的 `force-reload`）

Nginx 的配置 `ssl_certificate` 使用 `/etc/nginx/ssl/fullchain.cer`，而非 `/etc/nginx/ssl/<domain>.cer`，否则 SSL Labs 的测试会报 Chain issues Incomplete 错误

`--install-cert`命令可以携带很多参数，来指定目标文件。并且可以指定 reloadcmd，当证书更新以后，reloadcmd会被自动调用，让服务器生效

详细参数请参考: https://github.com/Neilpang/acme.sh#3-install-the-issued-cert-to-apachenginx-etc

值得注意的是，这里指定的所有参数都会被自动记录下来, 并在将来证书自动更新以后，被再次自动调用

当然你也可以手动复制证书到目标位置，但是这样无法实现自动更新证书

### 查看已安装证书信息

```
acme.sh --info -d example.com
# 会输出如下内容：
DOMAIN_CONF=/root/.acme.sh/example.com/example.com.conf
Le_Domain=example.com
Le_Alt=no
Le_Webroot=dns_ali
Le_PreHook=
Le_PostHook=
Le_RenewHook=
Le_API=https://acme.hi.cn/directory
Le_Keylength=
Le_OrderFinalize=https://acme.hi.cn/acme/finalize/23xxxx150/781xxxx4310
Le_LinkOrder=https://acme.hi.cn/acme/order/233xxx150/781xxxx4310
Le_LinkCert=https://acme.hi.cn/acme/cert/04cbd28xxxxxx349ecaea8d07
Le_CertCreateTime=1649358725
Le_CertCreateTimeStr=Thu Apr  7 19:12:05 UTC 2022
Le_NextRenewTimeStr=Mon Jun  6 19:12:05 UTC 2022
Le_NextRenewTime=1654456325
Le_RealCertPath=
Le_RealCACertPath=
Le_RealKeyPath=/etc/acme/example.com/privkey.pem
Le_ReloadCmd=service nginx force-reload
Le_RealFullChainPath=/etc/acme/example.com/chain.pem
```
## 引用说明

> 使用 HiCA 签发免费的半年 IP / 通配符域名 SSL 证书 —— TaurusXin 的独立博客：https://taurusxin.com/hica-ssl/
