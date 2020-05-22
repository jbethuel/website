function Tech() {
  return (
    <div className="content-container">
      <h2>Technology</h2>
      <div className="tech-stack-container">
        <div>
          <h3>Front End</h3>
          <ul>
            <li>React Native</li>
            <li>React</li>
            <li>Next</li>
          </ul>
        </div>
        <div>
          <h3>Node Backend</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Hapi</li>
            <li>GraphQL / Apollo</li>
          </ul>
        </div>
        <div>
          <h3>Language</h3>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div>
          <h3>Server / Database</h3>
          <ul>
            <li>Digital Ocean</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Works</h2>
        <ul>
          <li><a className="link" target="_blank" href="https://streetby.com">StreetBy</a></li>
          <li><a className="link" target="_blank" href="https://streetby.com">StreetBy Tours (paused due to pandemic)</a></li>
          <li><a className="link" target="_blank" href="https://aboutbukidnon.com">About Bukidnon</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Tech