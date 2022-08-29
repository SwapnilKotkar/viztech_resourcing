import '../styles/globals.css'
import {LoginContext} from '../context/LoginContext'
import Layout from '../components/Layout'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  
  return (
    <LoginContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </LoginContext>
    )
}

export default MyApp
