import { ComponentType, SVGProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

type Props = {
  title: string;
  Thumbnail: ComponentType<SVGProps<SVGSVGElement>>;
};

function Feature({
  title, Thumbnail,
}: Props) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Thumbnail className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Feature;
