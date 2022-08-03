---
sidebar_position: 2
---

# HTTP 验证

## 介绍

HTTP 验证的原理，是在您 `yourdomain.org` 域名的 web 服务器 `.well-known/acme-challenge` 或 `.well-known/pki-validation` 目录下放置一份文件，由此来验证您是否拥有 `yourdomain.org` 的控制权。

由于 CA 证书颁发机构会在过程中发出 HTTP 请求到您的服务器，因此您服务器需要：
- 启用 `80` 端口的 HTTP 服务；
- 放行防火墙规则（CA 的 HTTP 爬虫可能来自美洲、EMEA 等地区），所以您服务器不允许拦截境外 IP）；

如果您无法实现上述要求，建议您尝试 DNS 验证。

## 采用 HTTP 验证申请证书

:warning: 注意高亮位置的 <网站根目录绝对路径> 需要设置成正确路径

```bash
acme.sh --issue \
    -d <域名> \
    -d <追加域名> \
# highlight-start
    --webroot <网站根目录绝对路径> \
# highlight-end
    --days 150 \
    --server https://acme.hi.cn/directory
```

## 故障排查

如果您发现上述命令无法申请证书，建议您采用如下程序执行自检：

1. 在 `<网站根目录绝对路径>` 下面 `.well-known/` 目录放置一份 `test.txt` 记事本文件，内容为 `test123`；
2. 依次将所请求之域名，拼凑链接 `http://<域名>/.well-known/test.txt` 访问；
3. 检视打开之内容，是否为 `test123`；
4. 如果打开提示 403，请在服务器软件放行 `.well-known` 目录的访问权限；

    例如 Nginx 默认会禁止 `.` 点开头的目录，可以添加以下配置放行并重启 HTTP 服务：
  
    ```nginx
    location /.well-known {
        allow all;
    }
    ```

    Apache 默认会禁止 `.` 点开头的目录，可以添加以下配置放行并重启 HTTP 服务：
  
    ```apache
    <Directory "/.well-known">
        AllowOverride All
    </Directory>
    ```

    然后从新检视所有域名的 `http://<域名>/.well-known/test.txt` 链接打开后的内容。

