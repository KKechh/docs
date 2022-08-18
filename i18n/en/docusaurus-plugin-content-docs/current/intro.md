---
sidebar_position: 1
---

# Introduction

To know about HiCA + ACME **in only 15 minutes**！

If it's your first time to use, we recommend your reading shall starts from [starter](/docs/category/开始上手) chapter; or you can read [certificate management](/docs/category/证书签发管理) directly。

## What is ACME

ACME (rfc**8555**) was a PKIX standard drafted by ISRG(Internet security research group), which defined a series of protocol to validate certificate(challenge)、to issue、to renew and to revoke, etc... it can be used to manage certificate's lifecycle.
The feature of ACME is automatic, humancost reducing and security+stablity enhancing.

The details of definition of ACME, shall read at [RFC8555: Automatic Certificate Management Environment (ACME)](https://tools.ietf.org/html/rfc8555).

## What is HiCA

HiCA is operated by "PKI (Chongqing) Co., Ltd."(公钥认证服务（重庆）有限公司), which founded at Jul 2022.

<details>
<summary>More about "PKI (Chongqing) Co., Ltd."</summary>

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
- Provide IPv4 or IPv6 certificates(no other CAs which has ability of ACME + IP);
- Provide China accelerated OCSP/CRL(better performance, TLS handshake will be faster);
- Support multi-year certificates(subscription payment or pay once);

:::

## Abuse warning

<details>
<summary>
<b>To ensure HiCA service performance, there're some limitations</b> (Know more)
</summary>

:::info **These are limitations** and you can read our [End user license agreement](/EULA)。

- You can only access our service via `acme.sh`. other program with UI is prohibited. You are not allowed to access any service under `https://acme.hi.cn` via other program or other UI！
- You may not hijack web, ddos、CC attach depends on our service！
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

:::info **These are certificate limitations (we may offer premnium subscriptions later)**

- Payment required to request more than 10 sans;
- Payment required to request more than 1 wildcard domain name, but `*.` + `@.` is for free;
- Payment required to request multiple IP address in one certificate;
- Payment required to request mixed wildcard domains + normal domains + IP address;
- Payment required to request IDN domain names;
- Does not support (Purchase included) `.ru`、`.by`、`.su` suffixes (due to CAs `DigiCert`、`Sectigo`、`Certum`'s regulation)；
- IPv6 、`.onion` only support 90 days(due to CAs' limitations, Purchase included)）；

:::

:::note Those are **soft limits**, will only reject attempts, **won't block**

- one IP address or one device can sign 5 `valid` certificates in 24 hours;
- one top-level domain can enroll 50 `valid` and non-expired certificates;
- one IP address or one device can request 100 `processing` orders; after 168 hours the `processing` order will be invalid, and the quota will be purged;

:::

:::caution Those are QoS limits, ***will block devices***

- one IP address or one device can request up to 20 queries per second;
- one IP address or one device can request up to 60 queries every 5 seconds;
- one IP address or one device can request up to 500 queries every 60 seconds;

Exceeded strategies:
  - Trigger `429 Too Frequency` http exception；
  - Trigger 10 times, will be treat as abuse, and WAF will block client IP and device for 168 hours(7 days);

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
