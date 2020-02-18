import { Pane } from 'evergreen-ui'
import Head from 'next/head'

function Page(props) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>

      <Pane
        marginLeft="auto"
        marginRight="auto"
        maxWidth={1200}
        marginTop={24}
        // display="flex"
        alignItems="center"
        justifyContent="center"
        // border="default"
      >
        {props.children}
      </Pane>
    </>
  )
}

export default Page