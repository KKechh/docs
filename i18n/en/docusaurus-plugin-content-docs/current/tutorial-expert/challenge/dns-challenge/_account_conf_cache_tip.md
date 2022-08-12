:::caution

Because `acme.sh` will save the following API Key to `~/.acme.sh/account.conf` during the process, so if your reset keys future, your attempts to try `export` second time, it won't work.

In this case, we recommend you try to directly modify `~/.acme.sh/account.conf` value; But be aware keyname saved to `~/.acme.sh/account.conf` will not be the original keyname, it will got a `SAVED_` prefix. For example, `CF_Key` will be turned into `SAVED_CF_Key`.

:::