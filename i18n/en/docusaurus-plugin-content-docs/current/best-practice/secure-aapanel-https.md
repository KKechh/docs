---
sidebar_position: 1
---

# Enable SSL for AAPanel login

:::caution
This is a best practice for securing your AAPanel installation w/ IPv4. Currently no IPv6 tutorials.
:::

## Prerequisites

Perform 1 option from the following:
- **Individual IP site mode**: Create an IP site in AAPanel site management.
- **Default server mode**: Set a default site in AAPanel site management.

Then

Enable SSL for the site in AAPanel 8888 service, and set the certificate and key from any site's or choose self-signed. refresh `https://<IP>:8888`, ignore browser's certificate warning, continue to visit AAPanel.

<img srcset="../../docs/aapanel-enable-https-login.png 2x" />

## Script

> Following files are backups for AAPanel's certificate, if `bt reload` errors, you may switch back.
> - Private key backup: `/www/server/panel/ssl/privateKey.pem.bak`, You may restore by remove the suffix `.bak` in the filename.
> - Certificate backup: `/www/server/panel/ssl/certificate.pem.bak` You may restore by remove the suffix `.bak` in the filename.

If run script directly, it won't reinstall certificate before 180 days expiration. we recommend to run this script and set a auto-renewal job by tutorial "Cronjob".

**Don't forget to** change email to your real one!

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

after success, please refresh `https://<IP>:8888` to visit AAPanel via secure https.

## Cronjob

You can create a cron job in AAPanel's "Cron" feature.

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-1.png 2x" />

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-2.png 2x" />

After configuration, you can simulate to test, if shows following message, it means auto renewal should work.

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-3.png 2x" />
