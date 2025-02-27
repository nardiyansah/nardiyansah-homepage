import { Stack, Link as ChakraLink, Container, Box } from "@chakra-ui/react"
import React from "react"
import Link from "next/link"


export default function NavBar() {
  return (
    <Container centerContent={true}>
      <Box px={2} py={2}>
        <Stack direction={{ base: "column", md: "row" }} >
          <ChakraLink asChild>
            <Link href="/">About</Link>
          </ChakraLink>
        </Stack>
      </Box>
    </Container>
  )
}
