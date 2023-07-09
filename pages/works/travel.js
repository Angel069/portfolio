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
    <Layout title="Travel">
      <Container>
        <Title>
          Travel <Badge>2023</Badge>
        </Title>
        <P>
        Template for a travel website created with React and styled with SCSS, 100% responsive.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://travelwebsite-react.netlify.app">
            https://travelwebsite-react.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, SCSS, Javascript, React</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/travelImg.png" alt="Travel" />
        <WorkImage src="/images/works/travelImg2.png" alt="Travel" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'