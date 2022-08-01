---
title: 故障诊断
---

# 故障诊断

提供以下您下单时候的信息，我们程序将辅助您找到申请不下来的原因。

<form action="https://docs.hi.cn/api/diagnosis" method="POST" target="_blank">
  <div className="DocSearch-Form">
    <input
      className="DocSearch-Input"
      placeholder="邮箱"
      type="email"
    ></input>
  </div>

  在[安装 `ACME.sh`](/docs/getting-started/acme.sh-installation#安装)时候填写的邮箱

  <div className="DocSearch-Form">
    <input
      className="DocSearch-Input"
      placeholder="域名"
      type="text"
    ></input>
  </div>

  IP 证书请输入 IP 地址。如果多域名只需输入其中一个

  <div className="DocSearch-Form">
    <select className="DocSearch-Input" placeholder="验证方式">
      <option>
        请选择验证方式
      </option>
      <option value="http-01">
        HTTP
      </option>
      <option value="dns-01">
        DNS
      </option>
    </select>
  </div>

  需要与您申请时候的验证方式保持一致

  <button type="submit" className="button button--secondary button--lg">
    提交
  </button>
</form>
