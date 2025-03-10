import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default function Social() {
  return (
    <Box>
      <Heading pt={"5"}>Find Me</Heading>
      <VStack float={"left"}>
        <Link href="https://github.com/nardiyansah"><FaGithub />nardiyansah</Link>
        <Link href="https://www.linkedin.com/in/nardiyansah/"><FaLinkedin />nardiyansah</Link>
        <Link href="https://x.com/nardiyansahtj"><FaTwitter />nardiyansah</Link>
        <Link href="https://instagram.com/nardiyansahtj"><FaInstagram />nardiyansah</Link>
      </VStack>
    </Box>
  )
}
