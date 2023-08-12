import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../layouts/navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pt={8} padding={'0'}>
      <Head>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Daniel Ding - Homepage</title>
      </Head>

      <Navbar path={router.asPath}></Navbar>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
