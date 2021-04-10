import { Header, Navbar } from '@blog/components';
import React from 'react';

const Work: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="projects">
        <div className="project">
          <h3>Ulam PH</h3>
          <p>
            Ulam in Filipino dialect means (viand). The app provides a curated list of Filipino viands that you can make
            or cook at your home. It is extremely simple to follow and the recipes can be acquired at your local public
            market.
          </p>
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div>Backend/Services: Firebase (Authentication, Hosting, Firestore, Cloud Functions)</div>
            <div>Mobile App: React Native</div>
            <div>Web App: NextJS (React, in progress)</div>
          </div>
          <div className="link">
            <h4>Links:</h4>
            <div>
              Google Play:{' '}
              <span onClick={() => window.open('https://play.google.com/store/apps/details?id=com.ulam.ph')}>
                https://play.google.com/store/apps/details?id=com.ulam.ph
              </span>
            </div>
            <div>
              Web (in progress): <span onClick={() => window.open('https://ulam.ph')}>https://ulam.ph</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
