import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbDesire from '../public/images/works/jardinImg.png'
import ThumbMyWebsite from '../public/images/works/mywebsiteImg.png'
import thumbEmiliani from '../public/images/works/emilianiImg.png'
import thumbTravel from '../public/images/works/travelImg.png'
import thumbMokepon from '../public/images/works/mokeponImg.png'
import thumbTesla from '../public/images/works/teslaImg2.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="mywebsite" title="Angel Brand Solutions" thumbnail={ThumbMyWebsite}>
                        Website where I offer my services as a freelancer
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="desire" title="Mi Deseo Garden" thumbnail={thumbDesire}>
                        Website for an event garden
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="emiliani" title="Emiliani Mexico Institute" thumbnail={thumbEmiliani}>
                        Academic website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="travel" title="Travel" thumbnail={thumbTravel}>
                        Layout design for a travel website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="mokepon" title="Mokepon" thumbnail={thumbMokepon}>
                        Combat video game with Mokepons
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="tesla" title="Tesla Clone" thumbnail={thumbTesla}>
                        Tesla website home page clone
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works