import styled from 'styled-components'

const Content = styled.div({ marginTop: '3rem' })
const Link = styled.a`
  color: #ffffff; !important
`

function Home() {
  return (
    <Content>
      <p>
        Hello! I'm Joseph Bethuel Dela Cruz <br />
        Software engineer based at Cagayan de Oro City, Philippines.
      </p>

      <p>
        I have been software engineer for about 3+ years in a startup company which was founded and operating locally.
        This is my first job and designated as a mobile software engineer using React Native. Even though my job description was frontend developer,
        I also worked on backend stuffs for the features that we implemented.
      </p>

      <p>
        Due to the recent pandemic events, I am working from home situated at Malaybalay City, Bukidnon.
        I am looking for new opportunity for a side project or even a full time job, depends on the offer. Email me so we can talk about it.
      </p>

      <Content>
        <small>
          This site (<Link href="https://github.com/jbethuel/site">repo</Link>) was
          built by <Link href="https://nextjs.org/">NextJS</Link> and deployed at <Link href="https://www.netlify.com/">Netlify.</Link>
        </small>
      </Content>
    </Content>
  )
}

export default Home