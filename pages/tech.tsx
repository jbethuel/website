import { Navbar } from '@blog/components';
import { routes } from 'config/routes';
import React, { Fragment } from 'react';
interface technology {
  title: string;
  details: string[];
}

const items: technology[] = [
  {
    title: 'Language',
    details: ['Typescript (main)', 'Javascript']
  },
  {
    title: 'Frontend',
    details: ['React', 'React Native', 'Next', 'Redux', 'Mobx', 'Sass']
  },
  {
    title: 'Backend',
    details: [
      'Node (Express, Hapi, Google Cloud Run)',
      'Mongoose (MongoDB)',
      'GraphQL',
      'Serverless (Google Cloud Functions)'
    ]
  },
  {
    title: 'Servers',
    details: ['Amazon (Elastic Beanstalk)', 'Digital Ocean', 'Google Cloud']
  },
  {
    title: 'Testing',
    details: ['Jest', 'React Testing Library', 'Sinon', 'Cypress']
  },
  {
    title: 'Others',
    details: [
      'Github Actions',
      'Docker',
      'Google Cloud Build',
      'Google Cloud Bucket',
      'Google BigQuery',
      'Monorepo (Yarn & Lerna)',
      'Firebase',
      'Netlify',
      'Fastlane'
    ]
  }
];

const Work = () => {
  return (
    <Fragment>
      <Navbar activeTab={routes.tech} />
      <main className="tech">
        {items.map(item => (
          <div className="item" key={item.title}>
            <div className="title">{item.title}:</div>
            {item.details.map(detail => (
              <div className="details" key={detail}>
                - {detail}
              </div>
            ))}
          </div>
        ))}
      </main>
    </Fragment>
  );
};

export default Work;
