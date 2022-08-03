---
sidebar_position: 4
---

# Certificate Renewal

:::note
The tutorial below, shall be concerned if only you requested certificate by `--dns` mode.

Or if you requested by `--webroot`, no further action is neccessary.
:::

At first, when you get certificate signed by `acme.sh`, you need to persist your DNS credentials to `~/.acme.sh/dnsapi/dns_**.sh` file.
For example, `~/.acme.sh/dnsapi/dns_dp.sh` starts with the following lines:

```shell
#!/bin/bash

# Dnspod.cn Domain api
#
# highlight-start
#DP_Id="1234"
#
#DP_Key="sADDsdasdgdsf"
# highlight-end

REST_API="https://dnsapi.cn"
```

You need to change it to

```shell
#!/bin/bash

# Dnspod.cn Domain api
#
# highlight-start
DP_Id="<Change to dns API ID>"
#
DP_Key="<Change to dns API Key>"
# highlight-end

REST_API="https://dnsapi.cn"
```

Then `acme.sh` will try to renew certificate automatically 30 days before expiration.

:::info Note
`acme.sh` will automatically add a cron job by default to renew the certificate every 150 days at 1am. You basically do not need to modify the configuration for uninterrupted business.

The only thing you need to care about is the service interruption caused by the abnormal restart of the service after the certificate renewal is successful.
:::


If the certificate is issued using automatic HTTP verification or DNS API, and cron (timed task) is set correctly, then acme.sh will automatically check the validity period of all certificates at 0:00 every day, and automatically renew if the expiration date is less than 30 days.

Make sure cronjob is installed correctly, it looks like this:

```bash
crontab -l
56 * * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
````

If cron does not take effect, please go to [Google search "How to add scheduled tasks in Linux"](https://www.google.com/search?q=How+to+add+scheduled+tasks+in+Linux). `acme.sh` task is: `"/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null`