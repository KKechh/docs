---
sidebar_position: 1
---

# 安装 ACME.sh

:::danger 重要信息
按照我们的[服务条款](/EULA)，您只能使用 `ACME.sh` 来访问 HiCA。

其他 ACME 客户端请勿尝试！更请不要使用任何机构组织、个人提供的 GUI 工具。欢迎举报： [report-abuse@corp.hi.cn](mailto:report-abuse@corp.hi.cn)。
:::

:::tip 提示
Linux 建议切换到root模式，可以减少证书安装时的问题

```bash
sudo su
```

注意：MacOS 推荐不用切换到 root。
:::

## 安装

```bash
# 此处的邮箱，请填写您的真实邮箱，后续订单故障诊断时候会用到！
curl https://get.acme.sh | sh -s email=my@example.com
```

如果上面官方下载地址失败 或者 太慢，可以选用国内的备用地址：

```bash
# 此处的邮箱，请填写您的真实邮箱，后续订单故障诊断时候会用到！
curl https://gitcode.net/cert/cn-acme.sh/-/raw/master/install.sh?inline=false | sh -s email=my@example.com
```

注意：安装完成后，再重新打开命令行（如果是 SSH，选择重新连接），以使acme.sh命令生效。
输入 `acme.sh` 回车，如果出现下面效果，表示安装成功了！

```bash
➜  ~ acme.sh --version
https://github.com/acmesh-official/acme.sh
v3.0.3
```


## 更新

目前由于 acme 协议和 letsencrypt CA 都在频繁的更新，因此 acme.sh 也需要经常更新以保持同步。

升级 acme.sh 到最新版：

```
acme.sh --upgrade
```

如果你不想手动升级, 可以开启自动升级：

```bash
acme.sh  --upgrade  --auto-upgrade
```

之后, acme.sh 就会自动保持更新了

你也可以随时关闭自动更新：

```bash
acme.sh --upgrade  --auto-upgrade  0
```

acme.sh最好能设置成自动更新，否则会出现api修改后无法更新证书的情况，也可以选择一段时间更新一次。总之遇到证书突然无法更新多半是acme.sh版本问题，尝试下更新版本，然后再尝试更新证书，一般都能解决

```bash
acme.sh --v
```

## 调试

**报错需要先开启 debug**

如果出错, 请添加 debug log：

```
acme.sh  --issue  .....  --debug
```

或者：

```
acme.sh  --issue  .....  --debug  2
```

可参考： 
- [https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh](https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh)
- [https://github.com/Neilpang/acme.sh/wiki](https://github.com/Neilpang/acme.sh/wiki)


> `acme.sh` 安装错误的问题，不要反馈给 HiCA。您需要自行看情况，决定需不需要反馈给 [ACME.sh 官方](https://github.com/acmesh-official/acme.sh/issues/new) 。
