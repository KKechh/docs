import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        会使用linux命令行即可申请签发我们的SSL证书，上手容易，操作简单。
        我们还提供丰富的文档库，便于每个第一次入门ACME的人快速查找相关文档。
      </>
    ),
  },
  {
    title: '自动快捷',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        使用HiCA后，您的服务器会自动到期续费SSL，您无需采取额外操作即可不在关心
        SSL只是到期的事情！解放您的时间去交友搞基！
      </>
    ),
  },
  {
    title: '标准合规',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        符合RFC8555标准，我们无法接触您的私钥、您的服务器和数据。您大可以信任我们、爱上我们、
        白嫖我们！请相信我，你和我们都会享受的！
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
