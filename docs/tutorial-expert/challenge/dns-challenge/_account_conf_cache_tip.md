:::caution

由于 `acme.sh` 运行过程中会将以下 API Key 持久保存到 `~/.acme.sh/account.conf`，您的 Key 重置后，再次 `export` 不一定会起作用。

在这种情况下，我们推荐您尝试直接修改 `~/.acme.sh/account.conf` 的值；需要注意保存到 `~/.acme.sh/account.conf` 的键名非原始名称，而会多一个 `SAVED_` 前缀。例如 `CF_Key` 变为 `SAVED_CF_Key`。

:::