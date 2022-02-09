import BioLayout from '../components/BioLayout/BioLayout'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/swiper.css'
import Script from 'next/script'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/bio')) {
    return (
      <BioLayout>
        <Script
          src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"
          strategy="afterInteractive"
        />
        <Component {...pageProps} />
      </BioLayout>
    )
  }

  return (
    <Layout>
      <Script
        src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
