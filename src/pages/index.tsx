import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "../components/HomepageFeatures";

function TopBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {"🎉\xa0"}
        <Link
          to="/blog/2022/07/23/hello-hica"
          className={styles.topBannerTitleText}
        >
          <Translate>你好, HiCA!</Translate>
        </Link>
        {"\xa0🥳"}
      </div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, whiteSpace: "nowrap" }}>
          <div className={styles.topBannerDescription}>
            <Translate>{siteConfig.tagline}</Translate>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: "0.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: "Docusaurus with Keytar" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/docusaurus_keytar.svg")}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<b>免费</b>SSL, 180天, +<b>ACME</b> +<b>通配符</b> +<b>多域名</b> +<b>IP</b> +<b>.onion</b>...",
                description: "",
              }),
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
            <Translate>开始上手</Translate>
          </Link>
          <Link
            className={`button button--secondary ${styles.indexCtas2ndBtn}`}
            to="https://t.me/+O20ETkdFppVhN2Q1"
          >
            <Translate>Telegram 群</Translate>
          </Link>
          <Link
            className="button button--info"
            to="https://www.quantumca.com.cn/?__utm-source=hica-docs"
          >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512.5632 913.3056a28.8768 28.8768 0 0 1-20.48-48.896l462.9504-477.5936-224.6656-224.4096H281.6a28.8768 28.8768 0 0 1 0-57.7024h460.8a28.7744 28.7744 0 0 1 20.48 8.448l252.9792 252.9792a28.8256 28.8256 0 0 1 0.3584 40.448l-482.4064 497.92a28.7744 28.7744 0 0 1-21.0944 8.8064z"
              fill="#019A46"
            ></path>
            <path
              d="M511.5904 913.3056a28.7744 28.7744 0 0 1-20.48-8.8064L8.1408 406.5792a28.8768 28.8768 0 0 1 0-40.448L261.4272 113.152a28.8256 28.8256 0 0 1 40.96 40.96L69.3248 386.816 532.48 864.4096a28.8256 28.8256 0 0 1-20.48 48.896z"
              fill="#11AA66"
            ></path>
            <path
              d="M719.9232 397.7216a28.8256 28.8256 0 0 0-40.96-1.1264L512 563.8144 344.7808 396.5952a28.928 28.928 0 0 0-40.96 40.96l185.344 185.344a28.672 28.672 0 0 0 22.5792 10.5984 28.928 28.928 0 0 0 20.8896-8.7552c0.6144-0.6656 1.0752-1.3824 1.6384-2.0992l185.3952-185.344a28.8256 28.8256 0 0 0 0.256-39.5776z"
              fill="#F2CB51"
            ></path>
          </svg>
            <Translate>高级 SSL</Translate>
            <span className="badge badge--secondary margin-left--sm">
              <Translate>365天!</Translate>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${translate({ message: "你好, HiCA!" })} - ${translate({
        message: siteConfig.title,
      })}`}
      description={translate({ message: siteConfig.tagline })}
    >
      <main>
        <TopBanner />
        <HeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
