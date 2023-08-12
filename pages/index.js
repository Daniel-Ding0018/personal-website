import { Container, Box, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('white.Alpha500', 'white.Alpha200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I am a student software engineer at Monash!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Ding
          </Heading>
          <p>Tuna! ( Software Engineer / Finance / Volleyball )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/daniel.jpg"
            alt="yoyoo"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
