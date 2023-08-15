import {
  Box,
  Center,
  Container,
  Group,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { IconSeparator } from "@tabler/icons-react";
import { portfolioSrcs } from "assets/images";
import { FC, ReactElement } from "react";
import hiresImage from "assets/images/profile/hires.webp";

const useStyles = createStyles((theme) => ({
  section: {
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    paddingBottom: theme.spacing.xl,
  },
  image: {
    width: "80%",
    height: "80%",
    borderRadius: theme.radius.lg,
    border: `5px solid ${theme.colors.gray[0]}`,
    boxShadow: theme.shadows.lg,
    display: "block",
    marginTop: theme.spacing.md,
  },
}));

const About: FC = (): ReactElement => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <section className={classes.section}>
      <Center>
        <IconSeparator color={theme.colors.gray[2]} size={50} />
      </Center>
      <Container my="md" pb="xl">
        <Title color="blue" order={2} my="lg">
          About Me
        </Title>
        <Group my="md" grow>
          <Box>
            <picture>
              {portfolioSrcs.map((pic, i) => (
                <source key={`${i}-${pic.media}`} src={pic.src} />
              ))}
              <img className={classes.image} src={hiresImage} />
            </picture>
          </Box>
          <Box>
            <Text align="justify">
              Apart from being a passionate front-end developer with 6 years of
              experience in ReactJS, NodeJS, PostgreSQL, and React Native, I
              also have a keen interest in UI/UX design and 3D projects. My
              focus on creating visually appealing and user-friendly interfaces
              allows me to merge design and functionality seamlessly.
              Additionally, I enjoy exploring the exciting possibilities of 3D
              technology to bring immersive experiences to fruition. Let's
              embark on an innovative journey where design, development, and 3D
              converge to craft extraordinary digital solutions.
            </Text>
          </Box>
        </Group>
      </Container>
    </section>
  );
};

export default About;
