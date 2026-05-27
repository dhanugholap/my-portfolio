import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,        // animate only once — faster scroll
      easing: 'ease-out',
      offset: 30,
      delay: 0,
      throttleDelay: 50,
    })
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dhananjay Gholap - React.js, Python & AI Full Stack Developer from Pune." />
        <meta name="keywords" content="Dhananjay Gholap, React Developer, Python Developer, Full Stack Developer, Portfolio" />
        <meta name="author" content="Dhananjay Gholap" />
        <title>Dhananjay Gholap - Portfolio</title>
        <link rel="preload" as="image" href="/DSC_6460.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
