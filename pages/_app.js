import '../styles/globals.css'
import '../styles/swiper.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
