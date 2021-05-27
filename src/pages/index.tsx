/** @jsxImportSource theme-ui */
import { useThemeUI } from 'theme-ui'
import { Global } from '@emotion/react'

import Layout from '../components/Layout'
const Home = () => {
  const {theme} = useThemeUI()
  console.log({themeInComponentHead: theme})
  return (
    <Layout>
      <h1>Test</h1>
      <Global
        styles={(theme) => {
          console.log({themeInGlobal: theme})
          // bg: theme.colors.w3shade0 is not compiling in dev tools
          return ({
            body: {
              bg: theme.colors.w3shade0,
            },
          })
        }}
      />
    </Layout>
  )
}

export default Home
