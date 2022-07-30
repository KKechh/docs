import Translate from "@docusaurus/Translate";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1><Translate>我们提供：</Translate></h1>
        <ol>
          <li>
          <Translate>ACME 公益服务:</Translate>
            <a href="https://acme.hi.cn/directory" target="_blank">
              https://acme.hi.cn/directory
            </a>
            。
            <ol>
              <li><Translate>全球首家支持IPv4的ACME CA。</Translate></li>
              <li><Translate>全球首家支持IPv6的ACME CA。</Translate></li>
              <li><Translate>全球第二家非魔改版提供大陆OCSP的 ACME CA。</Translate></li>
            </ol>
          </li>
          <li>
          <Translate>TLS 商业证书 ACME 零售、批发。</Translate>
            <ol>
              <li>
              <Translate>全球首家公开表示不提供且禁止代理商提供任何形式 Web UI、 桌面 UI 等形式申请界面，还能卖得出去、收得回钱的 CA。</Translate>
              </li>
              <li>
              <Translate>全球第三、全国第一家支持 ACME 形式代理、贴牌商业证书的 CA。</Translate>
              </li>
            </ol>
          </li>
          <li><Translate>物联网安全解决方案。</Translate></li>
        </ol>
      </div>
    </section>
  );
}
