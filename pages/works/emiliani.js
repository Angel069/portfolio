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
    <Layout title="Emiliani Mexico Institute - Angel Brand">
      <Container>
        <Title>
            Emiliani Mexico Institute <Badge>2023</Badge>
        </Title>
        <P>
            The institute's website was created using Wix. The client wanted more control over the page and didn't want to be restricted by the template, so I decided to develop and redesign it from scratch using HTML, CSS, and JavaScript. I am currently still working on it, adapting to the client's needs and preferences.  It is deployed on Netlify for preview.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://instituto-emiliani-unofficial.netlify.app">
            https://instituto-emiliani-unofficial.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/emilianiImg.png" alt="Emiliani Institute image" />
        <WorkImage src="/images/works/emilianiImg2.png" alt="Emiliani Institute image" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'