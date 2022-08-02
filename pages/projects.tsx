import React, { Fragment } from 'react'
import { Header } from '../components/Header'

export default function Projects() {
  return (
    <Fragment>
      <Header />
      <main className="projects">
        <div className="project">
          <h2>Ulam PH</h2>
          <p>
            Ulam in Filipino dialect means (viand). The app provides a curated list of Filipino viands that you can make
            or cook at your home.
          </p>
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div>Language: Typescript</div>
            <div>Front End: React (CRA, Next), React Native, React Query, Zustand, Antd, Sass</div>
            <div>Back End/Services: Auth0, Fastify(Node), MongoDB, Swagger</div>
            <div>DevOps: Github Actions, AWS(Route 53, ACM, S3, Cloudfront, API Gateway, ECR, Lambda)</div>
          </div>
          <div className="link">
            <h4>Links:</h4>
            <div>
              Github:{' '}
              <a href="https://github.com/jbethuel/old-ulam" target="_blank" rel="noreferrer">
                https://github.com/jbethuel/old-ula
              </a>
            </div>
            <div>
              Website:{' '}
              <a href="https://ulam.ph" target="_blank" rel="noreferrer">
                https://ulam.ph
              </a>
            </div>
            <div>
              Admin:{' '}
              <a href="https://admin.ulam.ph" target="_blank" rel="noreferrer">
                https://admin.ulam.ph
              </a>
            </div>
            <div>
              API:{' '}
              <a href="https://api.ulam.ph" target="_blank" rel="noreferrer">
                https://api.ulam.ph
              </a>
            </div>
            <div>
              Google Play:{' '}
              <a href="https://play.google.com/store/apps/details?id=com.ulam.ph" target="_blank" rel="noreferrer">
                https://play.google.com/store/apps/details?id=com.ulam.ph
              </a>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}
