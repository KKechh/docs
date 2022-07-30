---
sidebar_position: 1
---

# FQDN Validation

What's validation for your domains(FQDN), and what type should i use between `dns-01` and `http-01`?

:::tip
HiCA doesn't support `tls-alpn-01`, but supports `dns-01`、`http-01`.
:::

## What is validation of FQDN, and why?

As a public-trusted CA, we must solve a problem: **how to proof you are the webmaster of your website?**

Because the CA wants to prevent malicious people from applying for your website's certificate (for example, if a hacker applies for a `*.google.com` certificate, then it will threaten the security of Google business!

Therefore, the CA in the early thought of strategies:

### **DNS Challenge(DNS Validation)**: 

<details>
<summary> Introduction </summary>

Ask for registrant to create a DNS record, to proof the ownership of the website.

ACME's DNS challenge was defined `dns-01`.

:::danger warning
In HiCA, wildcard certificate must `dns-01` challenge.
:::


Those situation are DNS validations:：

```bash title="in ACME"
_acme-challenge.<YOUR_DOMAIN>   TXT   tn7UzQBPFq03WOrAs9lyGsOLfWVeZvzikU8.TpQY6VzddC6ZI3A1wtia
```

```bash title="in DigiCert"
_dnsauth.<YOUR_DOMAIN>   TXT   fD2WaHbkRDkRk4tbS1n91LGV6Mh8rbaJPtr
```

```bash title="in Sectigo、SSL.com"
_203E9A41095FD4DC3C7EC8F877CF83CE.<YOUR_DOMAIN>   CNAME   3FB6CDD546409985A0A193EE8BDDF8DE.A041DF8B9192FCBEC0C585EF51FF0FEB.CC65A.trust-provider.com
```

```bash title="in GlobalSign"
@.<YOUR_DOMAIN>       TXT   globalsign-domain-verification=FkSDOqIL1EPGT1rrbV9DsaS3R5xKh6m2Pw0FsmzrjZ
```

> Off topic: For why parsing host headers either start with `@` or `_`, see this article by our researchers：[《Interesting PKI/CA (1) Why does the application for certificate verification begin with "_"》](https://zhuanlan.zhihu.com/p/348254463?)。


After the resolution is completed, the applicant needs to inform the CA, and the CA will query the corresponding DNS host. If the resolution value matches, the applicant is considered eligible.

In `acme.sh` + `HiCA`, the way to use dns authentication is:
```bash title="Note that the command to set up the DNS API has not been executed here, so it is wrong!"
acme.sh --issue \
  -d "<YOUR_DOMAIN>" \ # Put your domain name here, you can wildcard, such as `*.example.com`
  --dns dns_dp \ # Put your DNS provider here, like dns_dp (DNSPod), dns_cf (CloudFlare)
  --days=150 \ # Automatic renewal on day 150
  --server https://acme.hi.cn/directory
```

The DNS API requires API permissions, so we need `export XX_API=<API_KEY>...` to set it.

```bash title="设置 DNS API"
export DP_Id=<你的DNSPod的API ID>
export DP_Key=<你的DNSPod的API Key>
```

#### shortcoming:
  - There is a risk of keeping API credentials on the web server.
  - Your DNS provider may not provide the API.
  - Your DNS API may not be able to provide information about the update time.

</details>

Please refer to [Configure My DNS Module Key](configuration-your-dns-provider.md) for the advanced DNS verification tutorial.


### **File Challenge (HTTP or HTTPS Validation)**:

<details>
<summary>introduce</summary>

If this verification is selected, the CA will require the applicant to upload a text file (content required) to the server to prove the applicant's domain name control qualification.

DNS validation in ACME is defined as `http-01`.

:::danger warning
ACME does not support `HTTPS` authentication (:443), only `HTTP` (:80).
:::

#### advantage:
   - It can be easily automated without additional knowledge about domain name configuration.
   - It allows hosting providers to issue certificates for domains that point to them via CNAME.
   - It works with off-the-shelf web servers.

#### shortcoming:
   - If your ISP blocks port 80, the verification will not work properly (this is more common in residential ISPs and some domestic computer rooms that block 80 by default).
   - We do not allow you to use this authentication method to issue wildcard certificates.
   - If you have multiple web servers, you must ensure that the file is available on all of them.

</details>

### **TLS ALPN Challenge**: 

<details>
<summary>Introduction</summary>

DNS validation in ACME is defined as `tls-alpn-01`.

Because HiCA does not support this verification method, it will not be described in detail here.

:::danger warning
ACME supports `tls-alpn-01` authentication, but HiCA does not.
:::

</details>

### **E-mail verification**: 

<details>

<summary>Introduction</summary>

:::danger warning
ACME does not support email verification (because it cannot be automated).
:::

Select this verification, the CA will send an email to the selected mailbox, fill in the unique Token as required to complete the verification.

  * Domain name mailbox built based on domain name
    * `admin@<YOUR_DOMAIN>`
    * `administrator@<YOUR_DOMAIN>`
    * `postmaster@<YOUR_DOMAIN>`
    * `webmaster@<YOUR_DOMAIN>`
    * `hostmaster@<YOUR_DOMAIN>`
  * The WHOIS administrator email address when the domain name was registered
    * Due to ICANN compliance requirements, international domain names have basically opened Whois Privacy, and now they are no longer available
    * CN domain names do not comply with Whois Privacy, and WHOIS mailboxes can still be used for the time being

</details>

### Summarize

| Authentication Method | ACME Support | HiCA Support |
| ------------ | ------------- | --------- |
| DNS Verification | `dns-01` | ✔️ |
| File Authentication | `http-01` | ✔️ |
| TLS ALPN Authentication | `tls-alpn-01` | ❌ |
| Email Verification | ❌ | ❌ |

## Which authentication method should I choose?

You should first evaluate whether the site you are applying for SSL includes wildcard assets, and if so, you should consider the `dns-01` authentication method.
If not included, the `http-01` authentication method should be given priority; if the server port 80 is blocked, the `dns-01` authentication method should be considered.