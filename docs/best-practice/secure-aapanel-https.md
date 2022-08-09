---
sidebar_position: 1
---

# 为宝塔面板启用安全 HTTPS

:::note
请先弃用宝塔面板的 HTTPS 服务，证书可以选择任意站点的或者自签名。忽略浏览器警告可以继续登陆宝塔面板。
:::

:::caution
本教程是为宝塔启用 IPv4。暂没演示 IPv6 的教程。
:::

## 脚本

> 以下文件是宝塔面板的证书备份，当 `bt reload` 报错，您可以手工更换回去。
> - `/www/server/panel/ssl/privateKey.pem.bak`
> - `/www/server/panel/ssl/certificate.pem.bak`

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

## 定时更新

您可以直接在宝塔“计划任务”添加定时。

更详细教程稍后到来...
