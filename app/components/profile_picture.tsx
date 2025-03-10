import { Center, Image } from "@chakra-ui/react";
import { default as NextImage } from "next/image";
import profilePict from "@/public/profile.jpg"

export default function Profile() {
  return (
    <Center>
      <Image asChild boxSize="150px" borderRadius="full">
        <NextImage src={profilePict} alt="profile picture of author" />
      </Image>
    </Center>
  )
}
