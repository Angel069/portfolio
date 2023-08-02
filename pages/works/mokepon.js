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
    <Layout title="Mokepon">
      <Container>
        <Title>
          Mokepon <Badge>2022</Badge>
        </Title>
        <P>
        Video game created with JavaScript featuring functionalities such as choosing your Mokepon, exploring the map, Mokepon battles, and a functional server in Node.js.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Angel069/mokepon">
            https://github.com/Angel069/mokepon <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, Node.js</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/mokeponImg.png" alt="Mokepon" />
        <WorkImage src="/images/works/mokeponImg2.png" alt="Mokepon" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'