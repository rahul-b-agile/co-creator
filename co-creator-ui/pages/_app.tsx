import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,200"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

{
  /* <Layout>
<Component {...pageProps} />
</Layout>
); */
}

export default MyApp
