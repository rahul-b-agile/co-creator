import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import { Context1 } from './context'
import { useState } from 'react'

function MyApp({ Component, pageProps }: any) {
  const [userObject, setUserObject] = useState({
    SkillPage: {},
   
    

  })
  const [userObject1, setUserObject1] = useState()
  return (
    <div>
    

    <Head>

<link

rel="stylesheet"

href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,200"

/>

</Head>
      <Layout>
        <Context1.Provider
          value={{
            userObject: userObject,
            setUserObject: setUserObject,
            userObject1:userObject1,
            setUserObject1:setUserObject1
           
          }} 
        
        >
          <Component {...pageProps} />
        </Context1.Provider>
      </Layout>
     
    </div>
  )
}

export default MyApp
