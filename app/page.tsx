import { Box } from "@chakra-ui/react";
import Greeting from "@/app/components/greeting";
import Social from "@/app/components/social";
import Bio from "@/app/components/bio"

export default function Home() {
  return (
    <Box>
      <Greeting />
      <Bio />
      <Social />
    </Box>
  );
}
