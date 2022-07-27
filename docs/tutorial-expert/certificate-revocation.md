---
sidebar_position: 4
---

# 证书作废

如何作废您申请下来的证书

:::danger 注意
此操作会导致您的服务不可访问！
:::


输入

```bash title="查询当前所有证书"
acme.sh --list
```

查看当前acme.sh客户端存放的证书

```bash title="吊销证书"
#吊销证书
acme.sh  --revoke -d [证书的通用名] --server https://acme.hi.cn/directory

#从acme.sh目录中移除此证书
acme.sh  --remove -d [证书的通用名] --server https://acme.hi.cn/directory
```