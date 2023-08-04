/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React from 'react';

import Feature from '../Feature';

import styles from './styles.module.css';

type FeatureItem = {
  id: number;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    id: 1,
    title: '@nf-team/core',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,

  },
  {
    id: 2,
    title: '@nf-team/react',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,

  },
  {
    id: 3,
    title: '@nf-team/eslint-config',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  },
];

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({
            Svg, id, title,
          }) => (
            <Feature
              key={id}
              Svg={Svg}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
