---
sidebar_position: 3
---

# 申请证书

`acme.sh` 的证书申请

## HiCA 优势
- 通过ACME提供有效期为180天的证书（大多数厂商通过ACME提供的免费证书有效期为90天）
- 提供免费IPv4证书和IPv6证书
- 提供国内OCSP
- 订阅模式支持一次付款多次自动化续签

### 特别的：
HiCA 不提供 GUI 且暂不支持其它ACME客户端，请使用acme.sh。以下教程基于Linux
- 经费有限，后端可能经常出现500等错误
- 不支持.ru、.by、.su域名（DigiCert、Sectigo对俄罗斯、白俄罗斯禁运）。
- IPv6 、.onion有效期90天（CA限制）。

## 基于 HTTP 验证申请域名或IP证书
acme.sh 实现了 ACME 协议支持的所有验证协议. 一般有两种方式验证: http-01 和 dns-01 验证。http 方式需要在你的网站根目录下放置一个文件，来验证你的域名所有权,完成验证.。然后就可以生成证书了。

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

稍等片刻，提示签发成功即可下载证书，位于 ```/root/.acme.sh/你的域名``` 比如 ```/root/.acme.sh/11.4.5.14```

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

## 申请通配符证书

根据ACME协议要求，通配符证书需要DNS验证

acme.sh支持数十家DNS服务商的API，这里以阿里云、DNSPod和Cloudflare为例，其它服务商的教程可在网上很方便地找到

使用此方法可以便捷地申请多域名和通配符证书，也可以是多域名通配符证书。通配符小于等于一个且多域名少于等于十个的情况下Hi CA不会收费。

申请通配符证书有两种方式：手动更改DNS和使用API自动验证

使用API自动验证可以在证书到期前自动续签证书，手动更改DNS则在证书到期时需要手动重新签发

Hi CA 暂不支持手动添加DNS记录申请证书

### 如何使用DNS API自动验证和续签证书

DNS方式的真正强大之处在于可以使用域名解析商提供的API自动添加 TXT 记录完成验证。

acme.sh 目前支持 Cloudflare，DNSPod，CloudXNS，Godaddy 以及 OVH 等数十种解析商的自动集成。

以DNSPod为例, 你需要先登录到DNSPod账号, 生成你的 API ID 和 API Key， 都是免费的。然后：

```
export DP_Id="1234"
export DP_Key="sADDsdasdgdsf"

acme.sh   --issue   --dns dns_dp   -d aa.com  -d www.aa.com  --server https://acme.hi.cn/directory
```

证书就会自动生成了。这里给出的 api id 和 api key 会被自动记录下来，将来你在使用 dnspod api 的时候，就不需要再次指定了。直接生成就好了：

```
acme.sh  --issue   -d  mydomain2.com   --dns  dns_dp  --server https://acme.hi.cn/directory
```

更详细的 api 用法: https://github.com/Neilpang/acme.sh/blob/master/dnsapi/README.md

所有支持的 DNS API： [配置我的 DNS 模块 Key](configuration-your-dns-provider.md)

### 使用API签发证书

第一个输入的域名会作为证书的Common Name（即显示的颁发给：```*.example.com```），其余域名会按字母顺序排列，如有需要请把带 ```*``` 的域名排到最前面。

其余DNS API名称和参数可在acme.sh的相关文档查找到

通用格式示例

```bash
acme.sh --issue -d \*.<域名1.com> -d <域名1.com> -d \*.<域名2.com> -d <域名2.com> --dns dns_服务商 --days 150 --server https://acme.hi.cn/directory
```

例如阿里云

```bash
acme.sh --issue -d \*.example.com -d example.com --dns dns_ali --days 150 --server https://acme.hi.cn/directory
```

腾讯云

```
acme.sh --issue --dns dns_dp -d \*.example.com -d example.com --days 150 --server https://acme.hi.cn/directory
```

CloudFlare

```
acme.sh --issue --dns dns_cf -d \*.example.com -d example.com --days 150 --server https://acme.hi.cn/directory
```

### 签发完成

稍等片刻，提示签发成功即可下载证书，同样位于 ```~/.acme.sh/your.domain```

若提示 acme.sh 命令不存在，直接 cd 到 家目录下的 ```.acme.sh``` 目录下只用相对路径执行命令即可。

![image](https://user-images.githubusercontent.com/110012832/180938837-f754f0d5-04c2-418f-9fd7-023ee95303d3.png)

:pushpin:在签发超过限制（10个SAN和1个通配符）的证书时，会看到如下界面

![image](https://user-images.githubusercontent.com/110012832/180938990-58945fee-7c52-4943-b529-514bfbf6bcb2.png)

仅支持支付宝扫码付款:moneybag:

### 常见问题

- :information_source:签发ECC证书：在命令行最后添加--keylength ec-256
- :bell:添加 --ocsp 启用强制OCSP可能导致签发的证书不含CT记录
- :warning::warning::warning:对使用DNS验证的证书，不设置DNS模块的ID和Key无法签发成功

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

（一个小提醒，这里用的是 ```service nginx force-reload```，不是 ```service nginx reload```，据测试，```reload``` 并不会重新加载证书，所以用的 ```force-reload```）

Nginx 的配置 ```ssl_certificate``` 使用 ```/etc/nginx/ssl/fullchain.cer```，而非 ```/etc/nginx/ssl/<domain>.cer```，否则 SSL Labs 的测试会报 Chain issues Incomplete 错误

```--install-cert```命令可以携带很多参数，来指定目标文件。并且可以指定 reloadcmd，当证书更新以后，reloadcmd会被自动调用，让服务器生效

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

## 更新 acme.sh

目前由于 acme 协议和 letsencrypt CA 都在频繁的更新，因此 acme.sh 也需要经常更新以保持同步。

升级 acme.sh 到最新版：

```
acme.sh --upgrade
```

如果你不想手动升级, 可以开启自动升级：

```bash
acme.sh  --upgrade  --auto-upgrade
```

之后, acme.sh 就会自动保持更新了

你也可以随时关闭自动更新：

```bash
acme.sh --upgrade  --auto-upgrade  0
```

acme.sh最好能设置成自动更新，否则会出现api修改后无法更新证书的情况，也可以选择一段时间更新一次。总之遇到证书突然无法更新多半是acme.sh版本问题，尝试下更新版本，然后再尝试更新证书，一般都能解决

```bash
acme.sh --v
```

## 开启Debug模式

如果出错, 请添加 debug log：

```
acme.sh  --issue  .....  --debug
```

或者：

```
acme.sh  --issue  .....  --debug  2
```

可参考： https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh
https://github.com/Neilpang/acme.sh/wiki