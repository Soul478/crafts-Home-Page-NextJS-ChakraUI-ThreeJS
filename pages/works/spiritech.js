import { Container, Badge, Link, List, Image, ListItem, SimpleGrid, GridItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, /*WorkImage*/ Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="SpiriTech">
            <Container>
                <Title>
                SpiriTech <Badge>2021</Badge>
                </Title>
                <P>
                A High-Quality Services WebSite with 100+ plugins, cross-platform and encrypted data sync support. The life-time revenus is more than $2k.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://spi94rit78ech.epizy.com'>
                            Spi94riT78ech <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML/CSS, WordPress, JavaScript</span>
                    </ListItem>
                </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
          ><Image src="/images/works/spiritech_01.png" alt="Spiritech" borderRadius={10}/></GridItem>
          <GridItem>
            <Image src="/images/works/spiritech_02.png" alt="Spiritech" borderRadius={10}/>
            </GridItem>
        </SimpleGrid>
                
            </Container>
        </Layout>
    )
}

export default Work