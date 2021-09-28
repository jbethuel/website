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
    details: ['React (CRA, Next)', 'React Native', 'Redux, Zustand', 'Sass, Styled Components, Antd, Bootstrap'],
  },
  {
    title: 'Backend',
    details: ['Node (Express, Hapi, Fastify)', 'MongoDB, Firestore', 'GraphQL, Swagger'],
  },
  {
    title: 'Testing',
    details: ['Jest, React Testing Library, Sinon, Cypress'],
  },
  {
    title: 'Cloud',
    details: [
      'Amazon Web Services (Route 53, S3, Cloudfront, Certificate Manager, ECS, ECR, SNS, SES)',
      'Google Cloud Platform (Firebase, Cloud Run, Container Registry, Cloud Functions)',
      'Microsoft Azure',
      'Digital Ocean',
    ],
  },
  {
    title: 'Others',
    details: [
      'Github Actions, Google Cloud Build',
      'Docker, Monorepo (Yarn or Lerna)',
      'Netlify',
      'Fastlane',
      'Notion, Jira',
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
