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
    title: 'Reference Guide',
    Svg: require('@site/static/img/display-code-light.svg').default,
    description: (
      <>
        Documentation and Reference guide to help create high quality hands-free user experiences
      </>
    ),
  
  },
  {
    title: 'Code Samples & Tutorials',
    Svg: require('@site/static/img/language-light.svg').default,
    description: (
      <>
        Code samples showing best practices and how to leverage the features of our devices
      </>
    ),
  },
  {
    title: 'Downloads',
    Svg: require('@site/static/img/laptop-arrow-down-light.svg').default,
    description: (
      <>
       Download code, projects and applications to help with your development journey
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
        <h3 className={styles.featureTitle}>{title}</h3>
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
