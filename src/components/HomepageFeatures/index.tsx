import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>我们提供：</h1>
        <ol>
          <li>
            ACME 公益服务:{" "}
            <a href="https://acme.hi.cn/directory" target="_blank">
              https://acme.hi.cn/directory
            </a>{" "}
            。
            <ol>
              <li>全球首家支持IPv4的ACME CA。</li>
              <li>全球首家支持IPv6的ACME CA。</li>
              <li>全球第二家非魔改版提供大陆OCSP的 ACME CA。</li>
            </ol>
          </li>
          <li>
            TLS 商业证书 ACME 零售、批发。
            <ol>
              <li>
                全球首家公开表示不提供且禁止代理商提供任何形式 Web UI、 桌面 UI
                等形式申请界面，还能卖得出去、收得回钱的 CA。
              </li>
              <li>
                全球第三、全国第一家支持 ACME 形式代理、贴牌商业证书的 CA。
              </li>
            </ol>
          </li>
          <li>物联网安全解决方案。</li>
        </ol>
      </div>
    </section>
  );
}
