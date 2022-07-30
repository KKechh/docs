---
sidebar_position: 3
---

# Certificate Issuance

Challange type:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="dns-01" label="DNS" default>

## DNS Challenge / `dns-01`

Acordding BR(Base requirements) to CA / B Forum, the Wildcard `*.example.com` must be validated by `dns-01` challenge.

The first input domain will become certificate's Common Name (CN). so we suggest you input `*.example.com` first, and the others will be sorted by ASCII orders.

### Issuance of Certificate

> Highlight **includes `--dns dns_dp`**）were the DNS API credentials. See how to configure your [DNS Module and DNS Key](configuration-your-dns-provider.md).

```js
// highlight-start
export DP_Id="1234"
export DP_Key="sADDsdasdgdsf"
// highlight-end

acme.sh --issue \
// highlight-start
    --dns dns_dp \
// highlight-end
    -d \*.<Domain1.com> \
    -d <Domain1.com> \
    -d \*.<Domain2.com> \
    -d <Domain2.com> \
    --days 150 \
    --server https://acme.hi.cn/directory
```

### Issuance successfully

Hold few minutes, your certificate will be signed under `~/.acme.sh/your.domain`.

If shows `acme.sh` command was not found and you've installed `acme.sh`, please change dir into (cd) `/home/.acme.sh` and retry.

```js
➜  ~ ~/.acme.sh/acme.sh --issue -d www1.hi.cn --dns dns_dp --server http://acme.hi.cn/directory --days 150 --force
[Wed, July 27, 2022 01:46:23 CST] Using CA: http://acme.hi.cn/directory
[Wed, July 27, 2022 01:46:23 CST] Single domain='www1.hi.cn'
[Wed, July 27, 2022 01:46:23 CST] Getting domain auth token for each domain
[Wed, July 27, 2022 01:46:26 CST] Getting webroot for domain='www1.hi.cn'
[Wed, July 27, 2022 01:46:26 CST] Verifying: www1.hi.cn
[Wed, July 27, 2022 01:46:31 CST] Success
[Wed, July 27, 2022 01:46:31 CST] Verify finished, start to sign.
[Wed, July 27, 2022 01:46:31 CST] Lets finalize the order.
[Wed, July 27, 2022 01:46:31 CST] Le_OrderFinalize='https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP/finalize'
[Wed, July 27, 2022 01:46:32 CST] Order status is processing, lets sleep and retry.
[Wed, July 27, 2022 01:46:32 CST] Retry after: 60
[Wed, July 27, 2022 01:47:34 CST] Polling order status: https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP
[Wed, July 27, 2022 01:47:35 CST] Downloading cert.
[Wed, July 27, 2022 01:47:35 CST] Le_LinkCert='https://acme.hi.cn/acme/order/ElGBOq3VAhg5m4G4qknAzP/download'
[Wed, July 27, 2022 01:47:36 CST] Cert success.
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
[Wed, July 27, 2022 01:47:36 CST] Your cert is in: /Users/mac/.acme.sh/www1.hi.cn/www1.hi.cn.cer
[Wed, July 27, 2022 01:47:36 CST] Your cert key is in: /Users/mac/.acme.sh/www1.hi.cn/www1.hi.cn.key
[Wed, July 27, 2022 01:47:36 CST] The intermediate CA cert is in: /Users/mac/.acme.sh/www1.hi.cn/ca.cer
[Wed, July 27, 2022 01:47:36 CST] And the full chain certs is there: /Users/mac/.acme.sh/www1.hi.cn/fullchain.cer
➜  ~
```

:pushpin: If reach limits(10 SAN or 1 Wildcard), it will shows error like:

```js
➜  ~ ~/.acme.sh/acme.sh --issue -d www1.hi.cn -d www2.hi.cn -d www3.hi.cn -d www4.hi.cn -d www5.hi.cn -d www6.hi.cn -d www7.hi.cn -d www8.hi.cn -d www9.hi.cn -d www10.hi.cn -d www11.hi.cn --dns dns_dp --server http://acme.hi.cn/directory --days 150 --force
[Wed, July 27, 2022 01:49:53 CST] Using CA: http://acme.hi.cn/directory
[Wed, July 27, 2022 01:49:53 CST] Multi domain='DNS:www1.hi.cn,DNS:www2.hi.cn,DNS:www3.hi.cn,DNS:www4.hi.cn,DNS:www5.hi.cn,DNS:www6.hi.cn,DNS:www7.hi.cn,DNS:www8.hi.cn,DNS:www9.hi.cn,DNS:www10.hi.cn,DNS:www11.hi.cn'
[Wed, July 27, 2022 01:49:53 CST] Getting domain auth token for each domain
// highlight-start
[Wed, July 27, 2022 01:49:55 CST] Create new order error. Le_OrderFinalize not found. {"type":"urn:ietf:params:acme:error:malformed","detail":"Free certificate does not support more than 10 FQDNs."}
// highlight-end
[Wed, July 27, 2022 01:49:55 CST] Please add '--debug' or '--log' to check more details.
[Wed, July 27, 2022 01:49:55 CST] See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh
➜  ~
```

:::tip FAQ

- ECC: append `--keylength ec-256` after your command (temporary does not support, until Oct ends);
- For `dns-01` challenge, it won't success if you skipped DNS ApiID + Key setup.
:::


</TabItem>

<TabItem value="http-01" label="HTTP">

## HTTP Challenge / `http-01`

`acme.sh` http challenge will generate a plain text file under your website folder, to verify the ownership of your website. after it, your certificate will be signed.

Warning: you must keep your 80 port open(due to limits of ACME protocol).

```bash
acme.sh --issue -d <Domain1/IP> -d <Domain2> --webroot <Website_AbsulotePath_Dir> --days 150 --server https://acme.hi.cn/directory
```

For examlpe:

```bash title="Domain format, www. + @. must provide manually if you need them all"
acme.sh --issue \
    -d www.example.com \
    -d example.com \
    -d api.example.com \
    --webroot /www/wwwroot/114514 \
    --days 150 \
    --server https://acme.hi.cn/directory
```

```bash title="IPv4 format"
acme.sh --issue \
    -d 11.4.5.14 \
    --webroot /www/wwwroot/114514 \
    --days 150 \
    --server https://acme.hi.cn/directory
```

```bash title="IPv6 format, no [ or ]"
acme.sh --issue \
    -d 1145:1419:1981:0114:5141:9198:1011:4514 \
    --webroot /home/wwwroot/ \
    --days 60 \
    --server https://acme.hi.cn/directory
```

And hold minutes, your certificate will be signed under `/root/.acme.sh/<Your domain>`, for example `/root/.acme.sh/11.4.5.14`

If shows `acme.sh` command not found, please change dir (cd) to `/root/.acme.sh/` to execute.

Only needs provide domain(s) and website dir, `acme.sh` will automatic verification file into website dir, and sign certificate.

If you are using apache server, `acme.sh` will automatic finish verification and no website dir need to provide:

```bash
acme.sh --issue  -d mydomain.com --apache --days 150 --server https://acme.hi.cn/directory
```

Or nginx:

```bash
acme.sh --issue  -d mydomain.com --nginx --days 150 --server https://acme.hi.cn/directory
```

Note that no matter in apache or nginx mode, after acme.sh completes the verification, it will be restored to the previous state and will not change your own configuration privately. The advantage is that you don't have to worry about the configuration being broken. There is also a disadvantage. You need to configure the ssl configuration yourself, otherwise you can only successfully generate a certificate, and your website still cannot access https. But for safety, you should change the configuration manually.

If you haven't run any web service yet, and port 80 is free, then acme.sh can pretend to be a webserver and temporarily listen on port 80 to complete the verification:
```
acme.sh  --issue -d mydomain.com   --standalone --days 150 --server https://acme.hi.cn/directory
```

For more advanced usage, please refer to: https://github.com/Neilpang/acme.sh/wiki/How-to-issue-a-cert
### common problem
- IP certificates can only be issued through HTTP verification, so only a single domain name certificate can be issued, and one certificate cannot be issued for multiple IPs
- Issue ECC certificate: add `--keylength ec-256` or `-k ec-256` at the end of the command line
- For certificates that use HTTP authentication, if the website directory is not set correctly, they cannot be issued successfully

</TabItem>

<TabItem value="tls-alpn-01" label="TLS-ALPN">

:::danger
HiCA **does not support** `tls-alpn-01`, so stop using from `caddy` + `HiCA` to avoid wasting your time.

Insteadly, You must use `acme.sh` + DNS or Website Dir to sign your certificate.
:::

</TabItem>

<TabItem value="manual" label="Manual Mode">

:::danger
HiCA  **does not support** Manual mode DNS or HTTP file verification.
:::

</TabItem>
</Tabs>
## Install certificate

To install the certificate is to let the web server load the certificate file in the acme.sh directory that was just obtained.

For users who use panels such as Pagoda, it is necessary to manually copy the certificate (full_chain.pem and key.pem, open in plain text mode), and fill in manually on the panel

For users who use Nginx and Apache directly, certificates can be automatically installed, and other web servers can go to their respective community/commercial company websites to find documentation

Note that the certificates generated by default are placed in the installation directory: `~/.acme.sh/`, please do not use the files in this directory directly, for example: do not directly use the files below for the nginx/apache configuration file. The files here are for internal use, and the directory structure may change

The way to automate this is to use the `--install-cert` command, specifying the target location, and the certificate file will be copied to the appropriate location, for example:

````
acme.sh --install-cert -d example.com \
--cert-file /path/to/certfile/in/apache/cert.pem \
--key-file /path/to/keyfile/in/apache/key.pem \
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \
--reloadcmd "service apache2 force-reload"
````
````
acme.sh --install-cert -d example.com \
--key-file /path/to/keyfile/in/nginx/key.pem \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd "service nginx force-reload"
````

(A small reminder, `service nginx force-reload` is used here, not `service nginx reload`. According to the test, `reload` does not reload the certificate, so `force-reload` is used)

Nginx configuration `ssl_certificate` uses `/etc/nginx/ssl/fullchain.cer` instead of `/etc/nginx/ssl/<domain>.cer`, otherwise SSL Labs test will report Chain issues Incomplete error

The `--install-cert` command can take many parameters to specify the target file. And you can specify reloadcmd. When the certificate is updated, reloadcmd will be automatically called to make the server take effect.

For detailed parameters, please refer to: https://github.com/Neilpang/acme.sh#3-install-the-issued-cert-to-apachenginx-etc

It is worth noting that all parameters specified here will be automatically recorded, and will be automatically called again after the certificate is automatically renewed in the future

Of course, you can also manually copy the certificate to the target location, but this cannot automatically update the certificate

### View installed certificate information

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
## Citations

> Use HiCA to issue free half-year IP/wildcard domain name SSL certificate - TaurusXin's independent blog: https://taurusxin.com/hica-ssl/