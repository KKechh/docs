---
sidebar_position: 1
---

# Introduction

To know about HiCA + ACME **in only 15 minutes**！

If it's your first time to use, we recommend your reading shall starts from [starter](/docs/category/初次使用) chapter; or you can read [certificate management](/docs/category/证书签发管理) directly。

## What is ACME

ACME (rfc**8555**) was a PKIX standard drafted by ISRG(Internet security research group), which defined a serial about certificate validation(challenge)、issuance、renewal updates、revocation and etc... protocols, can be used to management certificate's lifecycle.
The feature of ACME is automatic, humancost reducement and security+stablity enhancement.

The details of definition of ACME, shall read at [RFC8555: Automatic Certificate Management Environment (ACME)](https://tools.ietf.org/html/rfc8555).

## What is HiCA

HiCA is operated by "PKI(Chongqing) Limited"(公钥认证服务（重庆）有限公司), which founded at Jul 2022.

<details>
<summary>More about "PKI(Chongqing) Limited"</summary>

- Organization Name: <b>公钥认证服务（重庆）有限公司</b>
- Director: <b>Sue</b>
- Established At: <b>5th, Jul 2022</b>
- Registration Number: <b>91500108MAACDXG09T</b>
- Initial Capital: <b>1 million (Chinese Yuan) </b>
- Offical Location: <b>Chongqing</b>
- Business scope:
  1. <b>TLS Certificates retail(HTTPS Certificates、 S/Mime、 Code Signing and Verified Mark Certificates)</b>
  2. <b>TLS Certificates automaticlly solutions</b>
  3. <b>ePKI (enterprise PKI)</b>
  4. <b>mPKI (managed PKI)</b>
  5. <b>subordinate CA (custom brand)</b>
  6. <b>TLS wholesale(offer salesfront + acme, for no cost + no code!)</b>

</details>

HiCA is focused on “Browserless TLS distribution” solution research + campaign(and that's the reason we disabled ourself and our resellers to provide HiCA's TLS certificates via any kind of UI, such as Web UI、desktop software and APP, mini-programs).

## Features of HiCA

:::tip HiCA has absolute advantages than other ACME or Free ssl provider

**Advantages**

- Provide 180 days certificates via ACME(mostly vendor provide 90 days certificates);
- Provide IPv4 or IPv6 certificates(no other CA provide by ACME);
- Provide China accelerated OCSP/CRL(better performance, TLS handshake will be faster);
- Support multi-year certificates(subscription payment or pay once);

:::

## Abuse warning

<details>
<summary>
<b>为了保证 HiCA 的服务质量，我们加了些防滥用限制</b> (展开了解详情)
</summary>

:::info **以下是条款限制**，具体请见我们的 [用户协议](https://www1.hi.cn/EULA/)。

- 只能使用 `acme.sh` 申请数字证书，不得使用 GUI 且暂不支持其它ACME客户端访问 `https://acme.hi.cn` 的任何服务！
- 不利用本服务从事Web入侵防护、CC防护等防护售卖业务！
- 不得将数字证书服务各个部分分开用于任何目的！
- 除重庆公钥明示许可外，不得修改、翻译、改编、出租、转许可、在信息网络上传播或转让重庆公钥提供的软件，也不得逆向工程、反编译或试图以其他方式发现重庆公钥提供的软件的源代码！
- 若重庆公钥的服务涉及第三方软件之许可使用的，您同意遵守相关的许可协议的约束！
- 您利用数字证书服务进行防护的业务须为正常的商业、科研等符合国家法律规定的业务，不得用于从事任何非法业务，包括但不限于:
  - 违反国家规定的政治宣传和/或新闻；
  - 涉及国家秘密和/或安全；
  - 封建迷信和/或淫秽、色情和/或教唆犯罪；
  - 博彩有奖、赌博游戏、“私服”、“外挂”等非法互联网出版活动；
  - 违反国家民族和宗教政策；
  - 妨碍互联网运行安全；
  - 侵害他人合法权益和/或其他有损于社会秩序、社会治安、公共道德的活动；
  - 其他违反法律法规、部门规章或国家政策的内容。
- 不建立或利用有关设备、配置运行与所购服务无关的程序或进程，或者故意编写恶意代码导致大量占用重庆公钥云计算资源中的服务器内存、CPU或者网络带宽资源，给重庆公钥云平台或者重庆公钥的其他用户的网络、服务器（包括但不限于本地及外地和国际的网络、服务器等）、产品/应用等带来严重的负荷，影响重庆公钥与国际互联网或者重庆公钥与特定网络、服务器及重庆公钥内部的通畅联系，或者导致重庆公钥平台产品与服务或者重庆公钥的其他用户网站所在的服务器宕机、死机或者用户基于平台的产品/应用不可访问等！
- 不进行任何破坏或试图破坏网络安全的行为（包括但不限于钓鱼，黑客，网络诈骗，网站或空间中含有或涉嫌散播：病毒、木马、恶意代码，及通过虚拟服务器对其他网站、服务器进行涉嫌攻击行为如扫描、嗅探、ARP欺骗、DDoS等）！
- 不进行任何改变或试图改变重庆公钥提供的系统配置或破坏系统安全的行为！

:::

:::info **以下是证书限制**

- 不支持超过 10 条多域名；
- 不支持超过 1 条通配符，但 1 张证书可以包含 `*.` + `@`；
- 不支持多条 IP 地址；
- 不支持通配符和普通域名、IP 地址混合；
- 不支持 IDN 域名（中文后缀、中文域名的别尝试了）；
- 不支持 `.ru`、`.by`、`.su` 域名（合作厂家 `DigiCert`、`Sectigo`、`Certum` 对俄罗斯、白俄罗斯禁运）；
- IPv6 、`.onion` 有效期90天（CA限制）；

:::

:::note 以下是**软限制**，只会阻止新下单操作**不会屏蔽**

- 单个 IP、设备每 24 小时可以签发成功 5 张 `valid` 且未过期的 SSL 证书；
- 单个主域名累计可以签发 50 张 `valid` 且未过期的 SSL 证书；
- 单个 IP、设备、主域名每周允许 100 个待验证（`processing`）的证书；`proessing` 的请求会在下单后 168 个小时后过期；

:::

:::caution 以下是 QoS 限制，***会屏蔽***

- 单个 IP、设备每 1 秒允许请求不超 20 次；
- 单个 IP、设备每 5 秒允许请求不超 60 次；
- 单个 IP、设备每 60 秒允许请求不超 500 次；

配额超出策略：
  - 超出 `429 Too Frequency` 的错误；
  - 24 小时内触发 10 次视为严重滥用，会被 WAF 网关屏蔽 168 小时（7日）；
:::

</details>

<details>

<summary><b>违法警示</b> (含主管部门联系通道)</summary>

:::danger 违法警示

据《网络安全法》以及各地预防和打击电信诈骗网络犯罪案件的若干意见，当有必要时，公钥基础设施（重庆）服务有限公司有义务配合公安机关、电信主管部门、网络信息管理等有关部门，对滥用我司免费产品、服务的账号；将其邮箱、Whois 快照、IP地址以及域名、证书信息等进行报告上交。

若您违反相关法规，您可以会面临：

- 证书被吊销；
- 主流CA、网站联盟、可信数据库拉黑您的站点；
- 公安机关的传讯、拘留、处罚甚至承担刑事责任！

:::

:::tip 主管部门通道

主管部门若需我司尽责义务以配合调查，请用 `.gov.cn` 邮箱发至 `cybercrime-request@corp.hi.cn`；并提供：
- 身份 +可供核实您身份的方式
- 具体情况说明
- 立案函，需印章（例如立案回执、报告）

我司将在中华人民共和国网络安全法允许的框架内配合贵单位的工作。

:::

</details>