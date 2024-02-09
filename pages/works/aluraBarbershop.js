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
    <Layout title="Website template for a Barbershop">
      <Container>
        <Title>
          Website template for a Barbershop <Badge>2024</Badge>
        </Title>
        <P> 
            This website is part of the 4 HTML and CSS courses from the Oracle Next Education program in partnership with Alura. I learned everything from the basics such as tag types to more complex things like advanced CSS selectors and media queries.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://barberia-aluraa.netlify.app/">
            https://barberia-aluraa.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/aluraImg.png" alt="Barbershop website" />
        <WorkImage src="/images/works/aluraImg2.png" alt="Barbershop website" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'