import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment
  return (
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
  )
}

export default MyApp
