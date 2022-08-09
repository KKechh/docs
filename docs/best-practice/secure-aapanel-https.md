---
sidebar_position: 1
---

# 为宝塔登陆入口添加 SSL

:::caution
本教程是为宝塔启用 IPv4。暂没演示 IPv6 的教程。
:::

## 准备工作

* **1.** 首先的首先，您需要确认您宝塔所在服务器已经安装了 `acme.sh`。否则请阅读 [安装 ACME.sh](../getting-started/acme.sh-installation.md)。

* **2.** 以下2种方式选择操作1项：
  - **单独的IP站点方式**：在宝塔的站点管理，创建一个IP的站点。
  - **默认站点方式**：在宝塔的站点管理，设置一个**默认站点**。

## 脚本

直接运行脚本不会在到期前获得自动更新。建议您先手工获取证书，然后按照 “[定时更新](#定时更新)” 教程获得在到期前获得自动续期。

**请不要忘记**修改邮箱那行代码 `email="my@example.com"` 为您真实邮箱！

> 脚本中，以下文件是宝塔面板的证书备份，当 `bt reload` 报错，您可以手工更换回去。
> - 私钥备份：`/www/server/panel/ssl/privateKey.pem.bak`，恢复请直接重命名去除结尾的 `.bak`。
> - 证书备份：`/www/server/panel/ssl/certificate.pem.bak`，恢复请直接重命名去除结尾的 `.bak`。

#### 脚本代码

```bash
email="my@example.com"
ip=$(curl -s -4 ip.sb)
webroot=$(cat $((grep -r " "$ip /www/server/panel/vhost/nginx/ || grep -r "default_server" /www/server/panel/vhost/nginx/) | grep server_name | awk '{print $1}' | cut -d ':' -f1) | egrep 'root ' | awk '{print $2}' | cut -d ';' -f1)

if [ -z "$webroot" ]; then
  echo "请先创建1个IP站点或者设置1个默认站点！"
  exit 1
fi

/bin/cp -rf /www/server/panel/ssl/privateKey.pem /www/server/panel/ssl/privateKey.pem.bak
/bin/cp -rf /www/server/panel/ssl/certificate.pem /www/server/panel/ssl/certificate.pem.bak

/root/.acme.sh/acme.sh --register-account \
    --email $email \
    --server https://acme.hi.cn/directory && \
/root/.acme.sh/acme.sh --issue \
    -d $ip --webroot $webroot \
    --server https://acme.hi.cn/directory \
    --force && \
/bin/cp -rf /root/.acme.sh/$ip/$ip.key /www/server/panel/ssl/privateKey.pem && \
/bin/cp -rf /root/.acme.sh/$ip/fullchain.cer /www/server/panel/ssl/certificate.pem && \
echo "True" > /www/server/panel/data/ssl.pl && \
bt reload && \
/bin/cp -rf /root/.acme.sh/$ip/$ip.key /www/server/panel/vhost/cert/$ip/privkey.pem && \
/bin/cp -rf /root/.acme.sh/$ip/fullchain.cer /www/server/panel/vhost/cert/$ip/fullchain.pem && \
bt reload
```

成功后，可以刷新 `https://<你的IP>:8888` 即可通过 HTTPS 安全的访问宝塔面板。

## 定时更新

您可以直接在宝塔“计划任务”添加定时，任务的脚本代码在[这里](#脚本代码)。

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-1.png 2x" />

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-2.png 2x" />

设置完成后，可以模拟运行测试一下。如果展示如下，则表示成功。

<img srcset="/docs/aapanel-enable-https-login-crond-auto-renewal-step-3.png 2x" />
