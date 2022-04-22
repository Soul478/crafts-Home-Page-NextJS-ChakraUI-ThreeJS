import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbSpiriTech from '../public/images/works/spiritech_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbQuran from '../public/images/works/quran_eyecatch.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.4}>
                    <WorkGridItem id="quran" title="Quran" thumbnail={thumbQuran}>
                        A Wonderful quran website, Enjoy!
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider my={6} />
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="spiritech" title="SpiriTech" thumbnail={thumbSpiriTech}>
                        A markdown Tech-Market site with encrypted data sync support
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem
                    id="walknote"
                    title="walknote"
                    thumbnail={thumbWalknote}>
                        Music recommendation app for IOS
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works