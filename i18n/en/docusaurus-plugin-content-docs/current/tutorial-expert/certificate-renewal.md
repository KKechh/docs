---
sidebar_position: 4
---

# Certificate Renewal

`acme.sh` 证书续期+自动

:::info 注意
`acme.sh` 默认会自动添加定时作业每150天凌晨一点续期证书。您基本不需要修改配置即可不间断业务。

您唯一需要关心的是证书续费成功后的服务重启异常导致的服务中断。
:::


如果使用自动HTTP验证或DNS API方式签发了证书，且正确设置cron（定时任务），那么acme.sh会在每天零点自动检查所有证书的有效期，若距离到期小于30天则自动续签

请确保 cronjob 正确安装, 看起来是类似这样的：

```bash
crontab  -l
56 * * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
```

如果cron未生效请到 [百度搜索“Linux怎么添加定时任务”](https://www.baidu.com/s?wd=Linux%E6%80%8E%E4%B9%88%E6%B7%BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1) 或者 [Google搜索“Linux怎么添加定时任务”](https://www.google.com/search?q=Linux%E6%80%8E%E4%B9%88%E6%B7%BB%E5%8A%A0%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)。`acme.sh` 任务为：`"/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null`