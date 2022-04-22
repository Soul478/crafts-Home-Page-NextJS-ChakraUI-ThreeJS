import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button,
    List,
    ListItem,
    Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter,
IoLogoInstagram,
IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center">
                Hello, I&apos;m a Full-Stack Programmer based in Morocco !
                </Box>
                
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    CHABANA Mohamed Amin
                </Heading>
                <p>
                    Digital Tech (Developer / Administrator / Artist)
                </p>
                    </Box>
                    <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center"
                    >
                        <br></br>
                        <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        bordersolid="solid"
                        maxWidth="123px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/Amin.jpg"
                        alt="Profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                    </Heading>
                        <Paragraph>Mohamed Amin is a Freelance, Full-Stack Developer and 
                            Systems Administrator based in Morocco with a passion of building 
                            digital services/stuff he wants. He has a knack for things launching 
                            products, from planning and designing all the way to solving real-life 
                            problems with code. When not online, he loves hanging out with his camera. 
                            Currently he is living off of his own city called {' '}<NextLink 
                            href="/works/SpiriTech" passHref>
                                <Link>SpiriTech</Link>
                            </NextLink>
                            .
                        </Paragraph>
                        <Box align="center" my={4}>
                            <NextLink href="/works" passHref>
                                <Button rightIcon={<ChevronRightIcon />} colorsheme="teal">
                                My portfolio
                                </Button>
                            </NextLink>
                        </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" >
                    Bio   
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Born in Ouezzane, Morocco.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Graduate in the IT as a Specialized Technician at the Specialized Institute Of Applied Technology
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Completed the Bachelor&apos;s Program (Informatics Systems Engineering) in the National School of Applied Sciences at Ibn Tofail University
                    </BioSection>
                    <BioSection>
                        <BioYear>2020 to present</BioYear>
                        Works as a freelance
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                    I 🤍
                    </Heading>
                    <Paragraph>
                        Art, Music,{' '}
                        <Link href="https://illust.odoruinu.net/" passHref>
                            Drawing
                        </Link>
                        , Travel, Machine Learning
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Soul478" target="_blank" passHref>
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                            @Soul478
                        </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/chabana21404878" target="_blank" passHref>
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                            @CHABANA_Med_Amin
                        </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/medaminch" target="_blank" passHref>
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                            CHABANA Mohamed Amin
                        </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>

    )
}

export default Page