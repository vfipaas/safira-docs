import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('/img/command.svg').default,
    description: (
      <>
        Safira CLI foi desenhado para ser fácil pensando na 
        agilidade do Desenvolvedor no dia a dia.
      </>
    ),
  },
  {
    title: 'Focado no que interessa',
    Svg: require('/img/monitor.svg').default,
    description: (
      <>
        Você pode focar no desenvolvimento e
        deixar que ajudamos a configurar o devops.
      </>
    ),
  },
  {
    title: 'Desenvolvido por Dev para Dev',
    Svg: require('/img/transfer.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
