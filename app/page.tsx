import { Box } from "@chakra-ui/react";
import Greeting from "@/app/components/greeting";
import Social from "@/app/components/social";

export default function Home() {
  return (
    <Box>
      <Greeting />
      <Social />
    </Box>
  );
}
