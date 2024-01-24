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
    <Layout title="Academic Website Template">
      <Container>
        <Title>
          Academic Website Template <Badge>2023</Badge>
        </Title>
        <P> 
            I created this template as a proposal to update an academic website. I implemented a design that followed the school logo's colors and conveyed a user-friendly interface. In the main section, information for parents and new students would be provided, and with a bit more exploration, users could access more specific information such as history, environmental footprint, and more. I added a contact section and a menu. The website is fully responsive and adaptable to any device.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://academic-website-emiliani.netlify.app">
            https://academic-website-emiliani.netlify.app <ExternalLinkIcon mx="2px" />
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
  
        <WorkImage src="/images/works/emilianiImg.png" alt="Academic Website" />
        <WorkImage src="/images/works/emilianiImg2.png" alt="Academic Website" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'