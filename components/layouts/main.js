import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import {Box, Container, Text, VStach} from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CHABANA Mohamed Amin - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelDog />
                </NoSsr>
                {children}
            </Container>
        </Box>
<VStack w="100%" h="30px" bg="gray.400">
    <Text>Copyright 2022 | SpiriTech</Text>
</VStack>
    )
}

export default Main
