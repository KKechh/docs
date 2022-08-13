---
sidebar_position: 4
---

# Certificate Renewal

After you have successfully issued a certificate, your DNS credentials will be stored in `~/.acme.sh/account.conf`.

:::info Warning

To ensure `acme.sh` tries to renew your certificate at the 30 days before it expires, please set `--days` parameter according to the actual validity period. For example, the certificate with 180 days length set `--days 150`, and the certificate with 90 days length set `--days 60`.

After it, you only need to care about the restart issue which causes outage.

:::

Make sure cronjob is installed correctly, it looks like this:

```bash
crontab -l
56 * * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
````

If cron does not take effect, please go to [Google search "How to add scheduled tasks in Linux"](https://www.google.com/search?q=How+to+add+scheduled+tasks+in+Linux). `acme.sh` task is: `"/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null`