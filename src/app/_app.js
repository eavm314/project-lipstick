import './globals.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <Component {...pageProps}/>
}

export default MyApp