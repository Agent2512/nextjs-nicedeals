import { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { useState } from 'react';
import { Users } from '../assets/entities/Users';
import { useApi, useApi2 } from '../hooks/useApi';
import { UserContext } from '../hooks/userUser';
// import style
// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'
import { userRouteRes } from './api/user';

function MyApp({ Component, pageProps }: AppProps) {
  const { get } = useApi2("api/user")
  const [user, setUser] = useState<Users | null>(null)

  if (typeof window != 'undefined') {
    if (user == null) {

      get<userRouteRes>("").then(res => {
        if (res.isLoggedIn) {
          setUser(res.user)
        }
      })
    }
  }


  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export default MyApp
