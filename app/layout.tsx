import { Provider } from "@/components/ui/provider"
import NavBar from "@/app/components/navigation"
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <NavBar />
          <Container maxW={"4xl"}>
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
