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
    <Layout title="Angel Brand Solutions - Angel Brand">
      <Container>
        <Title>
            Angel Brand Solutions <Badge>2023</Badge>
        </Title>
        <P>
            I created this website to offer my services as a freelancer and help my clients create their own websites. Here, I list the various prices I offer and showcase my skills, as the site is 100% designed and developed by me.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jardinmideseo.com.mx">
            https://angelbrandsolutions.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, Lax.js</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/mywebsiteImg.png" alt="My website image" />
        <WorkImage src="/images/works/mywebsiteImg2.png" alt="My website image" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'