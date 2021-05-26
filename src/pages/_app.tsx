import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Head from 'next/head'

function StatefulApp({ pageProps, Component }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Istok+Web:wght@400;700&&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return <StatefulApp pageProps={pageProps} Component={Component} />
}

export default MyApp
