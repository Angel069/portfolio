import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Secret Number - JS Game">
      <Container>
        <Title>
          Secret Number - JS Game<Badge>2024</Badge>
        </Title>
        <P> 
            I developed this game based on the Alura courses with the Oracle Next Education program. Here, I revisited basic programming logic concepts and put them into practice to create this game.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://secret-number-js-game.netlify.app/">
            https://secret-number-js-game.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/secretNumberImg.png" alt="JS Game" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'