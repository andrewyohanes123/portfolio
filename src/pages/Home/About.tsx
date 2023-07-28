import { Center, Container, Text } from "@mantine/core";
import { IconSeparator } from "@tabler/icons-react";
import { FC, ReactElement } from "react";

const About: FC = (): ReactElement => {
  return (
    <section>
      <Center>
        <IconSeparator />
      </Center>
      <Container my="md">
        <Text align="justify">
          Apart from being a passionate front-end developer with 6 years of
          experience in ReactJS, NodeJS, PostgreSQL, and React Native, I also
          have a keen interest in UI/UX design and 3D projects. My focus on
          creating visually appealing and user-friendly interfaces allows me to
          merge design and functionality seamlessly. Additionally, I enjoy
          exploring the exciting possibilities of 3D technology to bring
          immersive experiences to fruition. Let's embark on an innovative
          journey where design, development, and 3D converge to craft
          extraordinary digital solutions.
        </Text>
      </Container>
    </section>
  );
};

export default About;
