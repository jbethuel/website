import React from 'react'
import { Header, Navbar } from '@blog/components'
interface technology {
  title: string
  details: string[]
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
      'Docker',
      'Google Cloud Build',
      'Google Cloud Bucket',
      'Google BigQuery',
      'Monorepo (Lerna)',
      'Firebase',
      'Netlify',
      'Fastlane'
    ]
  }
]

const Work = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="tech">
        {items.map(item => (
          <div className="item">
            <div className="title">{item.title}:</div>
            {item.details.map(detail => (
              <div className="details">- {detail}</div>
            ))}
          </div>
        ))}
      </main>
    </div>
  )
}

export default Work
