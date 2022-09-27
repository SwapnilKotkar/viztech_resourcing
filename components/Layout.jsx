import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <html lang="en">
        <Head>
          <title>Viztech Resourcing | A Hiring Platform</title>
          <meta charset="UTF-8"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Viztech Resourcing is a candidate hiring platform. A Place That Helps You To Reach Your Destiny. We do recruitment right here. We link you to the right people." />
          <meta property='og:title' content='Viztech Resourcing | A Hiring Platform' />
          <meta property='og:description' content="Viztech Resourcing is a candidate hiring platform. A Place That Helps You To Reach Your Destiny" />
          <meta name="keywords" content="Employee, Job, Candidate, Hiring, HR, Recruitment, Company, IT Company" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
          <link rel="alternate" href="/Viztech_favicon-32x32.png" sizes='any' type="image/x-icon" />
          <link rel="shortcut icon" href="/Viztech_favicon-16x16.png" sizes='any' type="image/x-icon" />
          <link rel="apple-touch-icon" href="/Viztech_favicon-64x64.png" sizes='180x180' type="image/x-icon" />
          <link rel="apple-touch-icon" href="/Viztech_favicon-32x32.png" sizes='167x167' type="image/x-icon" />
          <link rel="apple-touch-icon" href="/Viztech_favicon-16x16.png" sizes='152x152' type="image/x-icon" />
          <link rel="mask-icon" href="/Viztech_favicon-32x32.png" type="image/x-icon" color='#000000' />
      </Head>
        <body>
          <header>
            <Navbar/>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </body>
      </html>
    </>
  )
}

export default Layout