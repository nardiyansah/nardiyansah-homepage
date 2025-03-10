import { Box, Heading, Span, TimelineConnector, TimelineContent, TimelineItem, TimelineRoot, TimelineTitle } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Box pt={"5"}>
      <Heading>Bio</Heading>
      <TimelineRoot>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>Jun 2022</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Software Engineer</Span>
              <Span color={"fg.muted"}>at</Span>
              <Span>Tokopedia</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>Feb 2022</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Backend Engineer (Internship)</Span>
              <Span color={"fg.muted"}>at</Span>
              <Span>Pegipegi</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>Oct 2021</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Backend Developer (Internship)</Span>
              <Span color={"fg.muted"}>at</Span>
              <Span>Photon</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>Jun 2021</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Freelance Web Developer</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>May 2021</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Generasi Gigih Participant - Backend Engineer Path</Span>
              <Span color={"fg.muted"}>at</Span>
              <Span>Yayasan Anak Bangsa Bisa</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent width={"auto"}>
            <TimelineTitle whiteSpace={"nowrap"}>Dec 2021</TimelineTitle>
          </TimelineContent>
          <TimelineConnector />
          <TimelineContent>
            <TimelineTitle>
              <Span>Graduated from Informatic Engineering Bachelor's Degree</Span>
              <Span color={"fg.muted"}>at</Span>
              <Span>Institution Technology of Sumatera</Span>
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>
    </Box>
  )
}
