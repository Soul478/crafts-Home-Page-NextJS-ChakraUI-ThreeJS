import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" height="bottom">
      &copy; {new Date().getFullYear()} CHABANA Mohamed Amin | All Rights Reserved
    </Box>
  )
}

export default Footer
