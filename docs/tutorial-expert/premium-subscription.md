---
sidebar_position: 6
---

# VIP 订阅

## 付费功能

按照我们前面提及的免费证书限制，当您需要以下特性时候，会自动触发收费流程：

- **超过** 1 个通配符；
- **超过** 10 条多域名；
- 通配符追加多域名；
- RSA 4096 密钥；
- ECC 密钥；
- **多个** IP 地址；

## 定价

- 多域名：¥ 10/年；（含 IPv4、IPv6 非通配符）；
- 通配符: ¥ 100/年；（通配符会赠送主域名，您需要手工加上 `-d <主域名>` 参数，我们会自动为您免除费用）；
- ECC：¥ 10/年 * 条数；（通配符也是 ¥10/年；如果是超出域名的 ECC，不参与重复扣费，例如两条通配符会收取您超出一条的 100元 + 超出一条通配符的 ECC 0元 + 第一条通配符的 0元 + 第一条图片发的 ECC 的 10元 = ¥110 元整）；

## 付费方式

向您收取费用的方式很简单粗暴，我们会直接在 `ACME.sh` 命令行返回：
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
域名验证已通过，在您支付完￥10.00(CNY)即可签发<br/>
请支付宝扫码支付: (或者直接浏览器打开 https://www1.hi.cn/acme-purchase/kvQy0NMm0xxx)<br/>
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(支付)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(微信客服)<br/>
</div>
<br/>
(欢迎代理咨询：提供 ACME 销售模式+自动续期，包括上面微信客服二维码也将会是你自己的)<br/>
支付完成后请重新运行此命令 / 或如下命令:<br/>
小贴士: 在您部署到多服时，为避免重复计费，需在所有服务器运行下面全部命令(已发邮箱，可以稍后尝试)：<br/>
<br/>
acme.sh --register-account --eab-kid 25k7z9QbGUvXh3 --eab-hmac-key hjHUDzxV_ZdaD281YcJNmhsR9 -m my@example.com  --server https://www1.hi.cn/directory<br/>
acme.sh --issue --dns dns_dp --force -d "acme.hi.cn" --server https://www1.hi.cn/directory -m my@example.com<br/>
</span>
<br/>
[2022年 8月 7日 星期日 18时15分37秒 CST] <span style={{color: "red"}}>Please add '--debug' or '--log' to check more details.<br/></span>
[2022年 8月 7日 星期日 18时15分37秒 CST] <span style={{color: "red"}}>See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh<br/></span>
</code>

您可以使用支付宝、微信扫描 `(支付)` 的二维码，

<img src="/docs/payment-1.jpg" style={{maxWidth: '360px'}} /> &nbsp; &nbsp; <img src="/docs/payment-2.jpg" style={{maxWidth: '360px'}} />

在确认支付前，您可以选择 `1年` 至 `5年` ( 5年更优惠： 买4年送1年) 多年期证书，得益于 ACME 的自动续费优势，我们会在证书到期前自动为您更新一张证书，订阅期间您不用关心证书到期的事情了。

支付完成后，重新运行命令，即可获得您想申请的证书。

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

## 异常处理

如果遇到支付后重复提示仍需要付费，或者换服务器后需要付费，扫码 `(微信客服)` 二维码，可以添加客服好友处理。

## 专利

我们 `acme.sh` 商用证书交付获得了 [《一种ACME商业证书无头模式交付方式》专利](https://qxb-img-osscache.qixin.com/patents_pdf_new/2219395a941e8bae0e5cb4475b3b3610.pdf) 所有人 上海帝熙科技有限公司 的授权。