import React, { Fragment } from 'react'
import { Header } from '../components/Header'

interface Technology {
  title: string
  details: string[]
}

const items: Technology[] = [
  {
    title: 'Language',
    details: ['Typescript (main)', 'Javascript'],
  },
  {
    title: 'Frontend',
    details: ['React', 'React Native', 'Next', 'Redux', 'Mobx', 'Sass'],
  },
  {
    title: 'Backend',
    details: [
      'Node (Express, Hapi, Google Cloud Run)',
      'Mongoose (MongoDB)',
      'GraphQL',
      'Serverless (Google Cloud Functions)',
    ],
  },
  {
    title: 'Servers',
    details: ['Amazon (Elastic Beanstalk)', 'Digital Ocean', 'Google Cloud'],
  },
  {
    title: 'Testing',
    details: ['Jest', 'React Testing Library', 'Sinon', 'Cypress'],
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
      'Fastlane',
    ],
  },
]

export default function Tech() {
  return (
    <Fragment>
      <Header />
      <main className="tech">
        {items.map((item, index) => (
          <div key={index} className="category">
            <h2>{item.title}</h2>
            {item.details.map((detail, index) => (
              <div className="tech" key={index}>
                - {detail}
              </div>
            ))}
          </div>
        ))}
      </main>
    </Fragment>
  )
}
