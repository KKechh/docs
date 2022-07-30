---
sidebar_position: 4
---

# Certificate Renewal

`acme.sh` certificate renewal + automatic

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

If cron does not take effect, please go to [Baidu search "How to add scheduled tasks in Linux"](https://www.baidu.com/s?wd=Linux%E6%80%8E%E4%B9%88%E6%B7% BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1) or [Google search "How to add scheduled tasks in Linux"](https://www .google.com/search?q=Linux%E6%80%8E%E4%B9%88%E6%B7%BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB %BB%E5%8A%A1). `acme.sh` task is: `"/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null`