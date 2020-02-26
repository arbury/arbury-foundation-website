import { Pane } from 'evergreen-ui'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function Page(props) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>

      <Pane
        marginLeft="auto"
        marginRight="auto"
        maxWidth={900}
        marginTop={24}
        // display="flex"
        alignItems="center"
        justifyContent="center"
        // border="default"
      >
        <Pane
          minHeight="calc(100vh - 70px)"
        >
        <Header />
         <Pane
          padding={16}
         >
          {props.children}
         </Pane>

        </Pane>

        <Footer />
      </Pane>
    </>
  )
}

export default Page