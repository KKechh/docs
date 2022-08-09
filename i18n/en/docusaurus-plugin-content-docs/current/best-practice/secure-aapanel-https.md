---
sidebar_position: 1
---

# Enable SSL for AAPanel login

:::caution
This is a best practice for securing your AAPanel installation w/ IPv4. And no IPv6 tutorials meantime.
:::

## Prerequisites

* **1**. First of first, please ensure you've got `acme.sh` installed. Otherwise, please read [ACME.sh installation](../getting-started/acme.sh-installation.md).

* **2**. Perform 1 option from the following:
  - **Individual IP site mode**: Create an IP site in AAPanel site management.
  - **Default server mode**: Set a default site in AAPanel site management.

## Script

If run script directly, it won't reinstall certificate before 180 days expiration. we recommend to run this script and set a auto-renewal job by tutorial "[Cronjob](#cronjob)".

**Don't forget to** change email line `email="my@example.com"` to your real one!

> In the script defined following filepaths are backups for AAPanel's certificate, if `bt reload` errors, you may switch back.
> - Private key backup: `/www/server/panel/ssl/privateKey.pem.bak`, You may restore by remove the suffix `.bak` in the filename.
> - Certificate backup: `/www/server/panel/ssl/certificate.pem.bak` You may restore by remove the suffix `.bak` in the filename.

#### script code

```bash
email="my@example.com"
ip=$(curl -s -4 ip.sb)
webroot=$(cat $((grep -r " "$ip /www/server/panel/vhost/nginx/ || grep -r "default_server" /www/server/panel/vhost/nginx/) | grep server_name | awk '{print $1}' | cut -d ':' -f1) | egrep 'root ' | awk '{print $2}' | cut -d ';' -f1)

if [ -z "$webroot" ]; then
  echo "Please create an IP site, or set a Default site!"
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

after success, please refresh `https://<IP>:8888` to visit AAPanel via secure https.

## Cronjob

You can create a cron job in AAPanel's "Cron" feature, the cron script content, you can copy it from [here](#script-code).

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-1.png 2x" />

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-2.png 2x" />

After configuration, you can simulate to test, if shows following message, it means auto renewal should work.

<img srcset="../../docs/aapanel-enable-https-login-crond-auto-renewal-step-3.png 2x" />
