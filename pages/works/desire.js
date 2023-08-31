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
    <Layout title="My Desire Garden">
      <Container>
        <Title>
          Mi Deseo Garden <Badge>2023</Badge>
        </Title>
        <P>
            Website created for an event garden with extensive information, photos, and a quotation creation and submission system. 100% designed and developed by me.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jardinmideseo.com.mx">
            https://jardinmideseo.com.mx <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, Bootstrap</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/jardinImg.png" alt="Desire" />
        <WorkImage src="/images/works/jardinImg2.png" alt="Desire" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'