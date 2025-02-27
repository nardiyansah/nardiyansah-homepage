import { Box, Heading, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";

export default function Social() {
  return (
    <Box>
      <Heading>Find Me</Heading>
      <Link href="https://github.com/nardiyansah"><FaGithub />nardiyansah</Link>
    </Box>
  )
}
