import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCertificate1 from '../public/images/contents/63766ce4e600c0000eb40000.png'
import thumbCertificate2 from '../public/images/contents/diploma-computacion-basica-1.png'
import thumbCertificate3 from '../public/images/contents/diploma-html-css-1.png'
import thumbCertificate4 from '../public/images/contents/diploma-html-practico-1.png'
import thumbCertificate5 from '../public/images/contents/diploma-practico-css-1.png'
import thumbCertificate6 from '../public/images/contents/diploma-intro-historia-internet-1.png'
import thumbCertificate7 from '../public/images/contents/diploma-pensamiento-logico-lenguajes-1.png'
import thumbCertificate8 from '../public/images/contents/CSS 2023-03-27T20_31_10+00_00 Angel Gabriel Brand Sanchez-1.png'
import thumbCertificate9 from '../public/images/contents/DOM 2023-04-21T14_08_49+00_00 Angel Gabriel Brand Sanchez-1.png'
import thumbCertificate10 from '../public/images/contents/HFE 2023-04-26T21_12_30+00_00 Angel Gabriel Brand Sanchez-1.png'
import thumbCertificate11 from '../public/images/contents/HTML 2023-03-22T20_06_01+00_00 Angel Gabriel Brand Sanchez-1.png'
import thumbCertificate12 from '../public/images/contents/JS 2023-04-18T20_36_07+00_00 Angel Gabriel Brand Sanchez-1.png'
import thumbCertificate13 from '../public/images/contents/RFE 2023-04-26T21_12_38+00_00 Angel Gabriel Brand Sanchez-1.png'


const Notes = () => (
  <Layout title="Certificates">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Certificates
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.1}>
          <GridItem
            title="Javascript"
            thumbnail={thumbCertificate1}
          />
      </Section>

      <Section delay={0.3}>
          <GridItem
            title="Basic computing"
            thumbnail={thumbCertificate2}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="HTML and CSS"
            thumbnail={thumbCertificate3}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="HTML and CSS practice course"
            thumbnail={thumbCertificate4}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="CSS layout"
            thumbnail={thumbCertificate5}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Introduction to the web"
            thumbnail={thumbCertificate6}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Programming languages"
            thumbnail={thumbCertificate7}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="CSS"
            thumbnail={thumbCertificate8}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="DOM"
            thumbnail={thumbCertificate9}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Frontend tools"
            thumbnail={thumbCertificate10}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="HTML"
            thumbnail={thumbCertificate11}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Javascript"
            thumbnail={thumbCertificate12}
          />
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Frontend route"
            thumbnail={thumbCertificate13}
          />
        </Section>

        </SimpleGrid>
    </Container>
  </Layout>
)

export default Notes
export { getServerSideProps } from '../components/chakra'