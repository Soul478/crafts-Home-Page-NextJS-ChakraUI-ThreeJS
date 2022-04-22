import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
<Box>
    <NextLink href="/works" passHref>
        <Link>Works</Link>
    </NextLink>
<span>
    &nbsp;
    <ChevronRightIcon />
    &nbsp;
</span>
<Heading display='inline-block' as="h3" fontSize={20} mb={4}>
    {children}
</Heading>
</Box>
)

export const WorkImage = ({alt}) => (
    <Image borderRadius="lg" w="full" src={alt} mb={4} alt='Work'/>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)