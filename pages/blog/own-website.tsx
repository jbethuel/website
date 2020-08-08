import React from 'react'

import Title from '../../components/title'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import SEO from '../../components/seo'

import { netlify, scripts } from '../../components/code'

const Code = ({ text }) => <span className='bg-black p-1'>{text}</span>

const Article = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <p className='mt-4 text-2xl font-semibold'>
          Building your own website or blog with free hosting
        </p>
        <p>Prerequisites: Github Account, Netlify Account, ReactJS knowledge</p>

        <Title text='1. Setup Your App' />
        <p>
          Head over to{' '}
          <a
            className='underline'
            href='https://nextjs.org/docs/getting-started'
            target='_blank'
          >
            NextJS docs
          </a>
          &nbsp;and setup your app. You may use create-next-app command or the
          manual method.
          <p className='mt-2'>
            • Play around with the <Code text='pages/index.js' /> file. Write
            your welcoming message or about yourself. Pretty much anything you
            want to show in your website.
          </p>
          <p className='mt-2'>
            You can also add pages by adding another file inside the{' '}
            <Code text='pages' /> folder. NextJS has awesome docs/guides that
            you can follow.
          </p>
          <p className='mt-4'>
            • Create the file <span className='bg-black p-1'>netlify.toml</span>
            and type in these code.
          </p>
          <pre className='mt-2 bg-black p-2'>{netlify}</pre>
          <p className='mt-4'>
            • Make sure that <Code text='npm run build' /> and{' '}
            <Code text='npm run export' /> exists in your{' '}
            <Code text='package.json' /> file in the root of your project and
            contains these next commands.
          </p>
          <pre className='mt-2 bg-black p-2'>{scripts}</pre>
          <p className='mt-4'>
            • Netlify will execute these commands upon deploying later on.
          </p>
        </p>

        <Title text='2. Push/upload the project to your github repository' />
        <p>
          If you don't have any experience with Git, Learn Git first. Everybody
          uses it in real world and it is a MUST have skill in software
          development. This is a good youtube video I recommend to watch. &nbsp;
          <a
            target='_blank'
            className='underline'
            href='https://www.youtube.com/watch?v=RGOj5yH7evk'
          >
            https://www.youtube.com/watch?v=RGOj5yH7evk
          </a>
        </p>

        <Title text='3. Deploying in Netlify' />
        <p className='mt-1'> • Login/Signup to Netlify</p>
        <p className='mt-1'> • In this example we used github, so select it.</p>
        <p> • Click "New site from Git" and select Github</p>
        <p className='mt-1'>
          It may prompt you to access your repositories in your github account.
        </p>
        <p className='mt-1'>
          • Select the repository that you created and uploaded your NextJS app.
        </p>
        <p className='mt-1'>
          This will read the deployment configuration that we wrote earlier
          which is the <b>netlify.toml</b>
        </p>
        <p className='mt-1'>
          • Click that "Deploy Site" button. Wait for the netlify to build it.
          It should be up and running in any minute now. They would provide a
          special link for your website. Usually it is on netlify.app domain.
          Congrats! 🍻
        </p>

        <p className='mt-4 text-lg font-bold'>
          ✨ Netlify will automatically deploy your changes when you commit your
          updates on Github ✨
        </p>

        <Title text='4. [OPTIONAL] Use your own domain' />
        <p>
          You may want to use your own custom domain. For my instance, it is{' '}
          <Code text='jbethuel.com' />.
        </p>
        <p>
          I bought mine at{' '}
          <a target='_blank' href='https://namecheap.com' className='underline'>
            namecheap.com
          </a>{' '}
          for $5. For this, you should have your credit card ready. After
          purchasing your own domain, netlify and namecheap needs a little bit
          of configuration. This guide will help you
        </p>
        <p className='mt-2'>
          <a
            target='_blank'
            href='https://dev.to/easybuoy/setting-up-domain-with-namecheap-netlify-1a4d'
            className='underline'
          >
            https://dev.to/easybuoy/setting-up-domain-with-namecheap-netlify-1a4d
          </a>
        </p>

        <p className='text-2xl mt-8 font-bold'>CHEERS 🍻</p>

        <div className='h-40' />
      </Container>
    </>
  )
}

export default Article
