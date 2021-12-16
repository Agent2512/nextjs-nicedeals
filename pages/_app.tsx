import { GetServerSideProps } from 'next';
import App, { AppContext, AppProps } from 'next/app'
import Script from 'next/script';
import { useEffect } from 'react';
import { useState } from 'react';
import { Users } from '../assets/entities/Users';
import { verifyJWT } from '../assets/jwt';
import { useApi2 } from '../hooks/useApi';
import { UserContext } from '../hooks/userUser';
// import style
// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'
import { userRouteRes } from './api/user';

interface Props {
  preUser: Users | null
}

function MyApp({ Component, pageProps, router, preUser }: AppProps & Props) {
  const { get: userGet } = useApi2("api/user/")
  const [user, setUser] = useState<Users | null>(preUser)

  useEffect(() => {
    userGet<userRouteRes>().then(res => {
      if (res.isLoggedIn) {
        setUser(res.user)
      }
    })
  }, [router.pathname])

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

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   // get request form context
//   const { req } = appContext.ctx;

//   // get userToken from cookie
//   const userToken = req?.headers.cookie?.split(';').find(x => x.trim().startsWith('userToken='))?.split('=')[1]

//   // init user from token default is null
//   let user: Users | null = null

//   if (userToken) {
//     // verify token and get user from token
//     user = await verifyJWT<Users>(userToken, "user").then(x => x == false ? null : x)
//   }

//   // return appProps and user
//   // user as preUser
//   return { ...appProps, preUser: user }
// }


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("test");


//   return {
//     props: {
//       preUser: null
//     }
//   }
// }

