import {
  Box,
  Center,
  Code,
  Container,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { IconSeparator } from "@tabler/icons-react";
import { portfolioSrcs } from "assets/images";
import { FC, ReactElement } from "react";
import hiresImage from "assets/images/profile/hires.webp";
import { skills } from "consts";
import SkillPill from "./SkillPill";

const useStyles = createStyles((theme) => ({
  section: {
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    paddingBottom: theme.spacing.xl,
    background: "radial-gradient(rgba(0, 0, 0, 0) 3px,white 1px)",
    backgroundSize: `4px 4px`,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: theme.radius.xl,
    border: `5px solid ${theme.colors.gray[0]}`,
    boxShadow: theme.shadows.xl,
    display: "block",
    marginTop: theme.spacing.md,
  },
  skillsContainer: {
    padding: `${theme.spacing.xl} 0`,
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
  textContainer: {
    background: theme.white,
    borderRadius: theme.radius.xl,
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
        <Center my="md">
          <picture>
            {portfolioSrcs.map((pic, i) => (
              <source key={`${i}-${pic.media}`} src={pic.src} />
            ))}
            <img className={classes.image} src={hiresImage} />
          </picture>
        </Center>
        <Box className={classes.textContainer} my="md" py="lg" px="xl">
          <Text align="justify">
            Apart from being a passionate front-end developer with 6 years of
            experience in <Code>ReactJS</Code>, <Code>NodeJS</Code>,{" "}
            <Code>PostgreSQL</Code>, and <Code>React Native</Code>, I also have
            a keen interest in UI/UX design and 3D projects. My focus on
            creating visually appealing and user-friendly interfaces allows me
            to merge design and functionality seamlessly. Additionally, I enjoy
            exploring the exciting possibilities of 3D technology to bring
            immersive experiences to fruition. Let's embark on an innovative
            journey where design, development, and 3D converge to craft
            extraordinary digital solutions.
          </Text>
        </Box>
        <Box className={classes.skillsContainer}>
          {skills.map((skill, index) => (
            <SkillPill
              skill={skill}
              index={index}
              key={`skill-item-${skill}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default About;
