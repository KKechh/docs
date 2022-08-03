---
sidebar_position: 2
---

# HTTP Challenge

## Introduction

The theory HTTP challenge works, was asking you to put a file at your `yourdomain.org` domain's web server's `.well-known/acme-challenge` or `.well-known/pki-validation` directories, to verify if you have the ownership of your domain(or your server).

Because CA needs to send a HTTP request to your server, so your HTTP server should be:
- HTTP service enabled at `80` port;
- Firewall rules release, to allows requests from worldwide(CA's http useragent might be send from America, EMEA, APAC or otherwhere);

If you can't be sure your server compliant the requirements, please try DNS challenge instead.

## Sign tls certificate with HTTP Challenge

:warning: Please be aware for the line highlight <absolute_webroot> is right

```bash
acme.sh --issue \
    -d <Domain> \
    -d <AdditionalDomain> \
# highlight-start
    --webroot <absolute_webroot> \
# highlight-end
    --days 150 \
    --server https://acme.hi.cn/directory
```

## Troubleshooting

If you find that the above command fails to apply for a certificate, it is recommended that you use the following procedures to perform a self-check:

1. Place a `test.txt` text file in the `.well-known/` directory under `<website root directory absolute path>`, the content is `test123`;
2. Access the requested domain name and link `http://<domain name>/.well-known/test.txt` in turn;
3. Check the open content to see if it is `test123`;
4. If the prompt 403 is displayed, please allow the access permission of the `.well-known` directory in the server software;

    For example, Nginx will prohibit directories starting with `.` by default. You can add the following configuration for nginx to allow and restart the HTTP service:
  
    ```nginx
    location /.well-known {
        allow all;
    }
    ```

    By default, Apache prohibits directories starting with `.` dots. You can add the following configuration to allow and restart the HTTP service:
  
    ```apache
    <Directory "/.well-known">
        AllowOverride All
    </Directory>
    ```

    Then re-view the contents of the `http://<domain name>/.well-known/test.txt` link for all domains.

