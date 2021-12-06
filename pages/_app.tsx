import { AppProps } from 'next/app'
import Script from 'next/script';
import { UserContext } from '../hooks/userUser';
// import style
// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
      <UserContext.Provider value={null}>
        <Component {...pageProps} />
      </UserContext.Provider>
      
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export default MyApp
