---
sidebar_position: 1
---

# 安装 acme.sh

:::tip 提示
Linux 建议切换到root模式，可以减少证书安装时的问题

```bash
sudo su
```

注意：MacOS 推荐不用切换到 root。
:::

```bash
curl https://get.acme.sh | sh -s email=my@example.com
```

如果上面官方下载地址失败 或者 太慢，可以选用国内的备用地址

```bash
curl https://gitcode.net/cert/cn-acme.sh/-/raw/master/install.sh?inline=false | sh -s email=my@example.com
```

注意：安装完成后，再重新打开命令行（如果是 SSH，选择重新连接），以使acme.sh命令生效。
输入 `acme.sh` 回车，如果出现下面效果，表示安装成功了！

```bash
➜  ~ acme.sh --version
https://github.com/acmesh-official/acme.sh
v3.0.3
```
