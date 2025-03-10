import { Box } from "@chakra-ui/react";
import Greeting from "@/app/components/greeting";
import Social from "@/app/components/social";
import Bio from "@/app/components/bio"
import Profile from "@/app/components/profile_picture";

export default function Home() {
  return (
    <Box pt={"5"}>
      <Profile />
      <Greeting />
      <Bio />
      <Social />
    </Box>
  );
}
