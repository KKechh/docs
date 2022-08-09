---
sidebar_position: 1
---

# 为宝塔登陆入口添加 SSL

:::caution
本教程是为宝塔启用 IPv4。暂没演示 IPv6 的教程。
:::

## 准备工作

以下2种方式选择操作1项：
- **单独的IP站点方式**：在宝塔的站点管理，创建一个IP的站点。
- **默认站点方式**：在宝塔的站点管理，设置一个**默认站点**。

然后

启用宝塔面板的 HTTPS 服务，证书可以选择任意站点的或者自签名。刷新访问 `https://<你的IP>:8888`，忽略浏览器警告继续访问宝塔面板。

<img srcset="/docs/aapanel-enable-https-login.png 2x" />

## 脚本

> 以下文件是宝塔面板的证书备份，当 `bt reload` 报错，您可以手工更换回去。
> - 私钥备份：`/www/server/panel/ssl/privateKey.pem.bak`，恢复请直接重命名去除结尾的 `.bak`。
> - 证书备份：`/www/server/panel/ssl/certificate.pem.bak`，恢复请直接重命名去除结尾的 `.bak`。

如果直接运行脚本，不会在180天到期前获得自动更新。建议您先手工获取证书，然后按照 “定时更新” 教程获得在到期前获得自动续期。

**请不要忘记**修改邮箱为您真实邮箱！

```bash
email="my@example.com"
ip=$(curl -s -4 ip.sb)
webroot=$(cat $((grep -r " "$ip /www/server/panel/vhost/nginx/ || grep -r "default_server" /www/server/panel/vhost/nginx/) | grep server_name | awk '{print $1}' | cut -d ':' -f1) | egrep 'root ' | awk '{print $2}' | cut -d ';' -f1)

cp /www/server/panel/ssl/privateKey.pem /www/server/panel/ssl/privateKey.pem.bak
cp /www/server/panel/ssl/certificate.pem /www/server/panel/ssl/certificate.pem.bak

/root/.acme.sh/acme.sh --register-account \
    --email $email \
    --server https://acme.hi.cn/directory && \
/root/.acme.sh/acme.sh --issue \
    -d $ip --webroot $webroot \
    --server https://acme.hi.cn/directory \
    --force && \
cp /root/.acme.sh/$ip/$ip.key /www/server/panel/ssl/privateKey.pem && \
cp /root/.acme.sh/$ip/fullchain.cer /www/server/panel/ssl/certificate.pem && \
bt reload
```

成功后，可以刷新 `https://<你的IP>:8888` 即可通过 HTTPS 安全的访问宝塔面板。

## 定时更新

您可以直接在宝塔“计划任务”添加定时。

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-1.png 2x" />

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-2.png 2x" />

设置完成后，可以模拟运行测试一下。如果展示如下，则表示成功。

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-3.png 2x" />
