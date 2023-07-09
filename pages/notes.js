import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbHtmlCss from '../public/images/contents/html-css.jpg'
import thumbJavascript from '../public/images/contents/javascript.jpg'


const Notes = () => (
  <Layout title="Notes">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Notes
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="HTML and CSS notes"
            thumbnail={thumbHtmlCss}
            href="https://github.com/Angel069/html-css-notes"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Javascript notes"
            thumbnail={thumbJavascript}
            href="https://github.com/Angel069/js-notes"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Notes
export { getServerSideProps } from '../components/chakra'