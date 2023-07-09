import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Home = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a front-end developer based in Mexico!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" size="lg" pt="4">
                        Angel Brand
                    </Heading>
                    <p>Developer Jr / Student</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center" pb="2">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/logo.jpg" alt="Profile Image"/>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" size="lg" pt="4" pb="2" borderTop="2px solid gray">
                    Work
                </Heading>
                <Paragraph>Passionate about technology and self-taught in programming, I embarked on a learning journey after completing my bachelor's degree. My self-directed approach has given me the ability to learn independently and adapt quickly.</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" size="lg" pt="4" pb="2" borderTop="2px solid gray">Bio</Heading>
                <BioSection>
                    <BioYear>2004</BioYear>
                    Born in Mexico State. Mexico.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Completed Bachelor's degree.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Started studying programming as an autodidact.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Developed my first project as a freelancer.
                </BioSection>
                <BioSection>
                    <BioYear>2023 to present</BioYear>
                    Looking for my first job and continuing to expand my knowledge as a front-end developer.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" size="lg" pt="4" pb="2" borderTop="2px solid gray">
                    I ♡
                </Heading>
                <Paragraph>
                    Technology, music, playing piano, learn new things and video games.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
        <Heading as="h3" variant="section-title" size="lg" pt="4" pb="2" borderTop="2px solid gray">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Angel069" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Angel069
              </Button>
            </Link>
          </ListItem>
          <ListItem pb="2">
            <Link href="https://www.linkedin.com/in/angel-brand-9858b0279/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Angel Brand
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title" size="lg" pt="4" pb="2" borderTop="2px solid gray">
          Email
        </Heading>
        <p>
            Contact me via email and let's build great things together.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:angel.brand069@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me
          </Button>
        </Box>
      </Section>
        </Container>
        </Layout>
    )
}

export default Home