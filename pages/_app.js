import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Initial AOS setup
    AOS.init({
      duration: 500,
      once: false,       // animate every time element comes into view
      mirror: true,      // reset the animation when scrolling back past an element
      easing: 'ease-out',
      offset: 30,
      delay: 0,
      throttleDelay: 50,
    })
    document.body.classList.add('aos-ready')

    // Refresh AOS on every route change (back/forward navigation)
    const handleRouteChange = () => {
      setTimeout(() => AOS.refresh(), 100)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      document.body.classList.remove('aos-ready')
    }
  }, [router.events])

  // Also refresh when page becomes visible again (tab switch / back button)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(() => AOS.refresh(), 100)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
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
