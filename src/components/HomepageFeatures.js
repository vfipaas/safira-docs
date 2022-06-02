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
    title: 'Focado no que importa',
    Svg: require('/img/monitor.svg').default,
    description: (
      <>
        Você pode focar no desenvolvimento e
        deixar com a gente as configurações do setup do seu projeto.
      </>
    ),
  },
  {
    title: 'Feito por devs para devs',
    Svg: require('/img/transfer.svg').default,
    description: (
      <>
        Criado por desenvolvedores para ajudar outros desenvolvedores durante o dia a dia.
        .
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
