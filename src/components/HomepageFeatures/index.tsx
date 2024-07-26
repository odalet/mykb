import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  url: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blog',
    url: 'blog',
    // Image source: https://iconscout.com/fr/free-illustration/ingenieur-logiciel-2043023
    Svg: require('@site/static/img/software-engineer.svg').default,
    description: (
      <>
        My Blog Posts
      </>
    ),
  },
  {
    title: 'Links',
    url: 'docs',
    // Image source: https://iconscout.com/free-illustration/testing-2043021
    Svg: require('@site/static/img/testing.svg').default,
    description: (
      <>
        Links I collected over time
      </>
    ),
  }
];

function Feature({ title, url, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={url}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </a>
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
