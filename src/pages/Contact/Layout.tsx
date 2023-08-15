import { Box, Container, Title } from "@mantine/core";
import { FC, ReactElement } from "react";

const Layout: FC = (): ReactElement => {
  return (
    <Box component="section" bg="blue">
      <Container c="blue" py="xl">
        <Title color="white" order={2}>
          Contact Me
        </Title>
      </Container>
    </Box>
  );
};

export default Layout;
