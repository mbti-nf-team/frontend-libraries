import { ComponentType, SVGProps } from 'react';

import Feature from '../Feature';

import DocusaurusMountain from '../../assets/undraw_docusaurus_mountain.svg';
import DocusaurusReact from '../../assets/undraw_docusaurus_react.svg';
import DocusaurusTree from '../../assets/undraw_docusaurus_tree.svg';

import styles from './index.module.scss';

type FeatureItem = {
  id: number;
  title: string;
  Thumbnail: ComponentType<SVGProps<SVGSVGElement>>;
};

const FeatureList: FeatureItem[] = [
  {
    id: 1,
    title: '@nf-team/core',
    Thumbnail: DocusaurusMountain,
  },
  {
    id: 2,
    title: '@nf-team/react',
    Thumbnail: DocusaurusTree,

  },
  {
    id: 3,
    title: '@nf-team/eslint-config',
    Thumbnail: DocusaurusReact,
  },
  {
    id: 4,
    title: '@nf-team/stylelint-config',
    Thumbnail: DocusaurusMountain,
  },
];

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({
            Thumbnail, id, title,
          }) => (
            <Feature
              key={id}
              Thumbnail={Thumbnail}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
