import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    Svg: require('/img/command.svg').default,
    description: (
      <>
        Safira CLI was design to be easy thought after on the day-to-day developer agility.
      </>
    ),
  },
  {
    title: 'Focused in what matters',
    Svg: require('/img/monitor.svg').default,
    description: (
      <>
        You can focus in the development and leave with us your project setup.
      </>
    ),
  },
  {
    title: 'For devs, by devs',
    Svg: require('/img/transfer.svg').default,
    description: (
      <>
        Created by developers to help others developers in everyday tasks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
