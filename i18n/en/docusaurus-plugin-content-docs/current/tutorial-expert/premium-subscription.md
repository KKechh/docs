---
sidebar_position: 6
---

# Premium Subscription

## Paid Features

Regarding to our free certificate description, if you try to access the features below, the payment flow will be triggered:

- **More than ** 1 Wildcard;
- **More than** 10 Multiple domains；
- Wildcard certificate add UCC domain;
- RSA 4096 bits;
- ECC Key format;
- **Multiple** IP Addresses(IPv4 and IPv6);

## Pricing

- Multiple domains: $1.99 / domain * year (IPv4, IPv6 and non-Wildcard domains);
- Wildcard domain: $19.9 / domain * year (One non-Wildcard domain of this wildcard is included, but you must redeem it by append `-d <MainDomain.com>`, the fees for this domain will be waived);
- ECC: $1.99 / domain * year (Wildcard included. If the domain is requesting for paid, its ECC will be waived. i.e: Two wildcards, we will only take charge: appendix wildcard &times; 1($19.9) + ECC for appendix wildcard &times; 1($19.9) + first wildcard ($0) + ECC for first wildcard ($1.99) = $21.89);

## Payment method

* We're planning to accept USDT payment but still under integration.

The payment flow is very simple, we will ask for it after you request premium features by `ACME.sh`:
<code>
❯ acme.sh --issue \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--dns dns_dp \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;-d acme.hi.cn \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--days 150 \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--keylength ec-384 \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--force \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--server https://acme.hi.cn/directory<br/>
[2022年 8月 7日 星期日 18时15分30秒 CST] Using CA: https://acme.hi.cn/directory<br/>
[2022年 8月 7日 星期日 18时15分30秒 CST] Creating domain key<br/>
[2022年 8月 7日 星期日 18时15分30秒 CST] The domain key is here: <b style={{color: "green"}}>/Users/admin/.acme.sh/acme.hi.cn_ecc/acme.hi.cn.key</b><br/>
[2022年 8月 7日 星期日 18时15分30秒 CST] Single domain='acme.hi.cn'<br/>
[2022年 8月 7日 星期日 18时15分30秒 CST] Getting domain auth token for each domain<br/>
[2022年 8月 7日 星期日 18时15分32秒 CST] Getting webroot for domain='acme.hi.cn'<br/>
[2022年 8月 7日 星期日 18时15分32秒 CST] Verifying: acme.hi.cn<br/>
[2022年 8月 7日 星期日 18时15分35秒 CST] <b style={{color: "green"}}>Success</b><br/>
[2022年 8月 7日 星期日 18时15分35秒 CST] Verify finished, start to sign.<br/>
[2022年 8月 7日 星期日 18时15分35秒 CST] Lets finalize the order.<br/>
[2022年 8月 7日 星期日 18时15分35秒 CST] Le_OrderFinalize='https://acme.hi.cn/acme/order/kvQy0NMm0xxx/finalize'<br/>
[2022年 8月 7日 星期日 18时15分36秒 CST]<br/><span style={{color: "red"}}>
<br/>
FQDN(s) are validated, and will be issued after you pay $1.9(USD).<br/>
Please open Alipay to scan the QR code to pay.(Or open in browser https://www1.hi.cn/acme-purchase/kvQy0NMm0xxx)<br/>
<br/>
<div style={{lineHeight: "1.18em", fontFamily: "'Courier New',Menlo, Monaco", color: "#3cb122"}}>
█████████████████████████████████████        █████████████████████████████████████<br/>
██ ▄▄▄▄▄ ██▀▄██▀▄████ ▀█▄ ██ ▄▄▄▄▄ ██        ██ ▄▄▄▄▄ █▀ █▀▀██▄▄█ ▄▀ █▄ █ ▄▄▄▄▄ ██<br/>
██ █   █ █▄▀█▄▀▀█▄▀█▀███▀  █ █   █ ██        ██ █   █ █▀ ▄ ██▄█ █▀▄█▄▀█ █ █   █ ██<br/>
██ █▄▄▄█ ██▄▀▀ ▄▀▀ ▀█ █ ▄ ▀█ █▄▄▄█ ██        ██ █▄▄▄█ █▀█ █▄   ▀▀ ▄▄█▄ ▄█ █▄▄▄█ ██<br/>
██▄▄▄▄▄▄▄█ █▄▀▄█▄▀▄▀▄▀▄▀▄▀ █▄▄▄▄▄▄▄██        ██▄▄▄▄▄▄▄█▄█▄█ ▀▄▀▄█▄▀▄█ ▀▄█▄▄▄▄▄▄▄██<br/>
██▄ ▄█▄▄▄  ▀█▀ ▀█▀ ▄ ██ ██▀  ▀█▀▄█▀██        ██ ▄   ▀▄   ▄█▄█▄ ▀  █▀█▀█▀ ▀▄█▄▀ ▀██<br/>
█████▄▄▀▄▀▄▀ ▄ ▀ ▄ ▀▄▀▀▀ ▀▄ ▀   █ ▄██        ███▀ ▄ ▄▄█  ▀ ▄█▀█▀▄▄▀█▀█ ▄▄█▀█▄▀▄███<br/>
██▄▀▀▄▀▄▄ ▀▀  ██  ▄ █▄  ▀█▀  ██ ▀█ ██        ██▄ █ █▄▄▀▀▄▀▄▀▀▀▀█████▀▀█▀█▀▄▄▄█▀▀██<br/>
██ ▀ ▀▀▀▄███ ▀█▄██▄ ▀▀▀  ▀▀█ ▀ ▀█ ▄██        ██ ▄▄ █▄▄ ▀▀██▀ ▄▄█▄▀ █▀▀▄▄▄  ▀█▀▄███<br/>
██▄▀▀▀ █▄█▀ ▄▀ ▀█ ▄▀█   █▄▄  ███▀▄ ██        ██   ▀██▄▄▀▀▀█▄█▄▀█ █▀ ▄▀ ▀▄▀▄▄▀█ ▀██<br/>
██▀▀ █▄▄▄▀▀█ ▄ ▀ █▄▀██ ▀▀▀▀ ▀█▀ █ ▄██        ██ ▀▀█ ▀▄▀▀▀▄ ▄█▀ ▄▀ ▀██▀██▀▀▀▄▄▀▄███<br/>
██▄▀█▄▄█▄█  █ ██ █ ▀█  ▄▄█ ▀ ▀██▀▄ ██        ██▀██ ▀█▄ ▄██▄▀▀▀ █▀▀▀▄█▀▀ ▄▀▄▄▀█ ▀██<br/>
██▄▀▀▄▄█▄▀▀█▄▀█▄█▀█ ▀▀▄ ▀▀▀▄▀ ▄▄█ ▄██        ██ █ ▀ █▄▄▀▄ █▀ ▄ ▀▄█▄▄▀▀ █  ██ ▀▄███<br/>
██▄██▄▄█▄▄▀██▀ ▀██ ▀███▄█  ▄▄▄ ▄█▀▀██        ██▄█▄██▄▄█▀  █▄█▄ █▀▄█▀  █ ▄▄▄  ▀█ ██<br/>
██ ▄▄▄▄▄ █ ▄ ▄ ▀ ▀ ▀█▀█  ▄ █▄█ ▄█ ▄██        ██ ▄▄▄▄▄ █▄▀█ ▄█▀█ ▀▄ ▄▀▀▀ █▄█ ▄ ▄███<br/>
██ █   █ █▄▀  ██ ██ █▄▀ ▀█ ▄▄▄ ▄██▀██        ██ █   █ █ ██▄▀▀▀▄▀▄▀▀█▄▀█  ▄  ▀█ ███<br/>
██ █▄▄▄█ █  ▄▀█▄██▄▀▀▀█ █▀ ▀██ ▄█▀▄██        ██ █▄▄▄█ █  ▀█▀ ▄ ▀▄▄▀█▄▀█▄▀ █▀▀▀████<br/>
██▄▄▄▄▄▄▄▀  ██▄██ ▀ ▀▀▀▀█▄▄ ▄▄▄ █▄▄██        ██▄▄▄▄▄▄▄▀▄▀██▄█▄█▄▄▄█████▄▄███▄█▄███<br/>
█████████████████████████████████████        █████████████████████████████████████<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Pay)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Custom service)<br/>
</div>
<br/>
After paid, re-execute command you type / or re-execute command below:<br/>
Tips: to waive multiple-nodes fee, please regsiter you devices by(you can reach in your mailbox later):<br/>
<br/>
acme.sh --register-account --eab-kid 25k7z9QbGUvXh3 --eab-hmac-key hjHUDzxV_ZdaD281YcJNmhsR9 -m my@example.com  --server https://www1.hi.cn/directory<br/>
acme.sh --issue --dns dns_dp --force -d "acme.hi.cn" --server https://www1.hi.cn/directory -m my@example.com<br/>
</span>
<br/>
[2022年 8月 7日 星期日 18时15分37秒 CST] <span style={{color: "red"}}>Please add '--debug' or '--log' to check more details.<br/></span>
[2022年 8月 7日 星期日 18时15分37秒 CST] <span style={{color: "red"}}>See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh<br/></span>
</code>

You can scan QR code by Alipay, Wechat.

<img src="/docs/payment-1.jpg" style={{maxWidth: '360px'}} /> &nbsp; &nbsp; <img src="/docs/payment-2.jpg" style={{maxWidth: '360px'}} />

Before you pay, you can subscribe `1 year` or `2 years` even `5 years`(promotion: 4 yars paid + 1 year for free), because of `acme.sh` auto-renewal feature, we will renewal certificate automatically before previous one expires. and you shall no worry more about your certificate.

After paid, just re-execute command, to finalize your certificate!

<code>
❯ acme.sh --issue \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--dns dns_dp \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;-d acme.hi.cn \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--days 150 \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--keylength ec-384 \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--force \<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--server https://acme.hi.cn/directory<br/>
[2022年 8月 7日 星期日 19时07分40秒 CST] Using CA: https://acme.hi.cn/directory<br/>
[2022年 8月 7日 星期日 19时07分40秒 CST] Single domain='acme.hi.cn'<br/>
[2022年 8月 7日 星期日 19时07分40秒 CST] Getting domain auth token for each domain<br/>
[2022年 8月 7日 星期日 19时07分43秒 CST] Getting webroot for domain='acme.hi.cn'<br/>
[2022年 8月 7日 星期日 19时07分43秒 CST] Verifying: acme.hi.cn<br/>
[2022年 8月 7日 星期日 19时07分47秒 CST] <b style={{color: "green"}}>Success</b><br/>
[2022年 8月 7日 星期日 19时07分47秒 CST] Verify finished, start to sign.<br/>
[2022年 8月 7日 星期日 19时07分47秒 CST] Lets finalize the order.<br/>
[2022年 8月 7日 星期日 19时07分47秒 CST] Le_OrderFinalize='https://acme.hi.cn/acme/order/kvQy0NMm0msp8gDGDez4ab/finalize'<br/>
[2022年 8月 7日 星期日 19时07分49秒 CST] Order status is processing, lets sleep and retry.<br/>
[2022年 8月 7日 星期日 19时07分49秒 CST] Retry after: 15<br/>
[2022年 8月 7日 星期日 19时08分04秒 CST] Polling order status: https://acme.hi.cn/acme/order/kvQy0NMm0msp8gDGDez4ab<br/>
[2022年 8月 7日 星期日 19时08分05秒 CST] Downloading cert.<br/>
[2022年 8月 7日 星期日 19时08分05秒 CST] Le_LinkCert='https://acme.hi.cn/acme/order/kvQy0NMm0msp8gDGDez4ab/download'<br/>
[2022年 8月 7日 星期日 19时08分06秒 CST] <b style={{color: "green"}}>Cert success.</b><br/>
-----BEGIN CERTIFICATE-----<br/>
MIIGHTCCBQWgAwIBAgIRAP4qDrNNiEku/coK/y5pAUcwDQYJKoZIhvcNAQELBQAw<br/>
gY8xCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO<br/>
BgNVBAcTB1NhbGZvcmQxGDAWBgNVBAoTD1NlY3RpZ28gTGltaXRlZDE3MDUGA1UE<br/>
AxMuU2VjdGlnbyBSU0EgRG9tYWluIFZhbGlkYXRpb24gU2VjdXJlIFNlcnZlciBD<br/>
QTAeFw0yMjA4MDcwMDAwMDBaFw0yMzAyMDMyMzU5NTlaMBUxEzARBgNVBAMTCmFj<br/>
bWUuaGkuY24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGcXiWKCG9<br/>
w0nFtxnB522WbtrjZr5dQgSrXJvhw8MnhW++/5EYnqfPOlHPx5arBMzjWo9vKRza<br/>
aPnVLPfwiOrw9tUo0PF+ttk4y3HzPm1XU9BY0EZhh2CokmYLlslI9O51QkroX368<br/>
zgRr49N8e7AIh1WbGP8GlOY7YiReEuIMX0owLzRTTba7xZqTJi5571Pa+iB1AoWG<br/>
bW+NDlnGbxTR9cjS+X748zNDfi9kjRhQINSFVzLoywHzDT/fYAvY8eQzoSwua4Pe<br/>
WEMa2zcbiRril/z4cp5gdSTnTaCjNFScE6g3ZaNmAIiQXIKy+7xbuPOKmyLvCqR+<br/>
uU7HcLnWSTQ3AgMBAAGjggLrMIIC5zAfBgNVHSMEGDAWgBSNjF7EVK2K4Xfpm/mb<br/>
BeG4AY1h4TAdBgNVHQ4EFgQUAwHLVaWVVhgH7gR3FbciEDVYhA8wDgYDVR0PAQH/<br/>
BAQDAgWgMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUF<br/>
BwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAgcwJTAjBggrBgEFBQcCARYXaHR0<br/>
cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGEBggrBgEFBQcBAQR4MHYw<br/>
TwYIKwYBBQUHMAKGQ2h0dHA6Ly9jcnQuc2VjdGlnby5jb20vU2VjdGlnb1JTQURv<br/>
bWFpblZhbGlkYXRpb25TZWN1cmVTZXJ2ZXJDQS5jcnQwIwYIKwYBBQUHMAGGF2h0<br/>
dHA6Ly9vY3NwLnNlY3RpZ28uY29tMIIBfQYKKwYBBAHWeQIEAgSCAW0EggFpAWcA<br/>
dgCt9776fP8QyIudPZwePhhqtGcpXc+xDCTKhYY069yCigAAAYJ3/ZajAAAEAwBH<br/>
MEUCIEq0qCYxS97Ng/yecMX4pCeOa9MIWcAoiR0+xKxEkomAAiEAslIIEHQXjcox<br/>
U/iNnTaDIHWbLqB6ljTs3MDmtcg5vYEAdQB6MoxU2LcttiDqOOBSHumEFnAyE4VN<br/>
O9IrwTpXo1LrUgAAAYJ3/Za5AAAEAwBGMEQCIEXZQ4Dt0X/od0ZVggqmvzy+14qY<br/>
Krkdlc2dfY7NgNEFAiAyM3k/lgPY9GuVYRDmH2TFYbqF85Y5OZ5NRBiVX2tGgwB2<br/>
AOg+0No+9QY1MudXKLyJa8kD08vREWvs62nhd31tBr1uAAABgnf9loQAAAQDAEcw<br/>
RQIhALcf2I5vG5pqGlkIOLjQuqpGlbJ1WHgm6utqkeeaAb74AiAkKB+ShFuY38t7<br/>
vBhaxORUXQt+dq11+6mPSYcHyuMm8DAVBgNVHREEDjAMggphY21lLmhpLmNuMA0G<br/>
CSqGSIb3DQEBCwUAA4IBAQAQ79kR6/cEiRdWi18CilGKaNdJMzbnGPS+ZeAZA/QW<br/>
I8U+/uv9hDVKztWkB2XCKb9CvTJRY4JGA6oCQjeuvhau7dUAnGJceD/CWhqcyCOO<br/>
GMPZDpTwX1sABrGaoBO/ZJU+Wa7agOitsKT6AbTbX8eTVTYzmg/5z5xIMWVR5ovb<br/>
XX8XlIuYWGuYr++jia8F5BeJC4MVuWDLnobALgfDomcmeZKvs7SyCvP8h446mMZ4<br/>
XxVrSL3YUy/pjmZi639vJPuqIe5JePnQCgChmOgebC92q4gMd4Ih4OzjTqoxpElj<br/>
xpa8JzLxofM3Sye2BdJSplkGxwUCk8VlbM9Z2ZURXqPE<br/>
-----END CERTIFICATE-----<br/>
[2022年 8月 7日 星期日 19时08分06秒 CST] Your cert is in: <b style={{color: "green"}}>/Users/admin/.acme.sh/acme.hi.cn_ecc/acme.hi.cn.cer</b><br/>
[2022年 8月 7日 星期日 19时08分06秒 CST] Your cert key is in: <b style={{color: "green"}}>/Users/admin/.acme.sh/acme.hi.cn_ecc/acme.hi.cn.key</b><br/>
[2022年 8月 7日 星期日 19时08分06秒 CST] The intermediate CA cert is in: <b style={{color: "green"}}>/Users/admin/.acme.sh/acme.hi.cn_ecc/ca.cer</b><br/>
[2022年 8月 7日 星期日 19时08分06秒 CST] And the full chain certs is there: <b style={{color: "green"}}>/Users/admin/.acme.sh/acme.hi.cn_ecc/fullchain.cer</b><br/>
</code>

## Troubleshooting

If payment is not confirmed, or multiple-nodes fee not waive, please scan second QR code to contact us(using Wechat app to scan).

## Patent

Our `acme.sh` comercial certificate delivery feature has get authorized by [pantent named《一种ACME商业证书无头模式交付方式》](https://qxb-img-osscache.qixin.com/patents_pdf_new/2219395a941e8bae0e5cb4475b3b3610.pdf) 's owner 上海帝熙科技有限公司.