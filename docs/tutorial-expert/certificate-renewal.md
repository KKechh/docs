---
sidebar_position: 4
---

# 证书续期+自动

首先，在您 `acme.sh` 首次申请成功下来证书后，您的 DNS 凭据会自动持久化到 `~/.acme.sh/account.conf` 中。

:::info 注意

为了让 `acme.sh` 在到期前30天尝试续期，建议您在申请证书时候，根据我们说明的实际期限，设置 `--days` 参数。例如 180 天到证书设置 `--days 150`，90 天到证书设置 `--days 60`。

之后，您唯一需要关心的是证书续费成功后的服务重启异常导致的服务中断。

:::

请确保 cronjob 正确安装, 看起来是类似这样的：

```bash
crontab  -l
40 * * * * /root/.acme.sh/acme.sh --cron --home /root/.acme.sh > /dev/null
```

如果cron未生效请到 [百度搜索“Linux怎么添加定时任务”](https://www.baidu.com/s?wd=Linux%E6%80%8E%E4%B9%88%E6%B7%BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1) 或者 [Google搜索“Linux怎么添加定时任务”](https://www.google.com/search?q=Linux%E6%80%8E%E4%B9%88%E6%B7%BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)。`acme.sh` 任务为：`/root/.acme.sh/acme.sh --cron --home /root/.acme.sh > /dev/null`