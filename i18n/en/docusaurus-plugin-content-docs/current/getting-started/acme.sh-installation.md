---
sidebar_position: 1
---

# Install ACME.sh

:::danger Important notice
Due to our TOS, you need and only could access our service via `ACME.sh`.

No other ACME clients were allowed. and welcome to report if any organisation、individual providing GUI、webpage、app depends on our service at [report-abuse@corp.hi.cn](mailto:report-abuse@corp.hi.cn).
:::

:::tip
We suggest you to switch to `root` on Linux

```bash
sudo su
```

Note: `root` is not neccessary and not recommended on MacOS.
:::

Run installation script:

```bash
curl https://get.acme.sh | sh -s email=my@example.com
```

Note: after installtation, reopen your terminal(if ssh client, choose re-connect) to make your `acme.sh` work.

type `acme.sh` and enter, if displays like this means `acme` works:

```bash
➜  ~ acme.sh --version
https://github.com/acmesh-official/acme.sh
v3.0.3
```


## Upgrade acme.sh

Because acme and CA are offen upgrading, so `acme.sh` needs to upgraded.

Upgrade acme.sh to latest version:

```
acme.sh --upgrade
```

If you don't want upgrade manually, you could try automaticlly upgrade:

```bash
acme.sh  --upgrade  --auto-upgrade
```

Then, acme.sh will automatically upgrade to latest version.

And you can turn off automaticlly upgrade by:

```bash
acme.sh --upgrade  --auto-upgrade  0
```

You'd better to configure acme.sh into automaticlly upgrade, or it possibly failure to issuance because of DNS api change. or you can manually upgrade by. Otherwise, if you met errors when sign certificate, better to try to upgrade first, and retry, usually fix problems and everything's fine.

```bash
acme.sh --v
```

## Exceptions handle

**You'd turn on debug if exception**

If exception, please add debug log：

```
acme.sh  --issue  .....  --debug
```

Or:

```
acme.sh  --issue  .....  --debug  2
```

Reference: 
- [https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh](https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh)
- [https://github.com/Neilpang/acme.sh/wiki](https://github.com/Neilpang/acme.sh/wiki)


> If have problems when installing `acme.sh`, don't feedback to HiCA, you'd figure is it neccessary to feedback to [ACME.sh official repo issues](https://github.com/acmesh-official/acme.sh/issues/new).