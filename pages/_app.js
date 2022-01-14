import BioLayout from '../components/BioLayout/BioLayout'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/swiper.css'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/bio')) {
    return (
      <BioLayout>
        <Component {...pageProps} />
      </BioLayout>
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
