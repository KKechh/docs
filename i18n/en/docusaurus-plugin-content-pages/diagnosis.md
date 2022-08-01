---
title: Diagnosis
---

# Diagnosis

![Docusaurus Plushie](../../../blog/2022-07-23-welcome/docusaurus-plushie-banner.jpeg)

Fill information of your order, our program will help you diagnosis why not issued by yourself.

<form action="https://docs.hi.cn/api/diagnosis" method="POST" target="_blank">
  <div className="DocSearch-Form">
    <input
      className="DocSearch-Input"
      placeholder="E-mail"
      type="email"
      name="contact"
      tabindex="1"
    ></input>
  </div>

  The email when [installation `ACME.sh`](/docs/getting-started/acme.sh-installation#installation)

  <div className="DocSearch-Form">
    <input
      className="DocSearch-Input"
      placeholder="Domain"
      type="text"
      name="identifier"
      tabindex="2"
    ></input>
  </div>

  Domain or IP address, if UCC please provide any one of them

  <div className="DocSearch-Form">
    <select className="DocSearch-Input" placeholder="Challenge type" name="challenge" tabindex="3">
      <option>
        Please select a challenge type
      </option>
      <option value="http-01">
        HTTP / http-01
      </option>
      <option value="dns-01">
        DNS / dns-01
      </option>
    </select>
  </div>

  The challenge type should be the same as when you apply for it

  <button type="submit" className="button button--secondary button--lg" tabindex="4">
    Submit
  </button>
</form>
