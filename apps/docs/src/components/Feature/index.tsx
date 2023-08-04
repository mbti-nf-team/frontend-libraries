import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

function Feature({
  title, Svg,
}: Props) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Feature;
