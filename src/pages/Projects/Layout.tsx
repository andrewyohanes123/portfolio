import { Container, Text, Title, createStyles } from "@mantine/core";
import { projects } from "consts";
import { FC, ReactElement } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.gray[8],
    paddingTop: theme.spacing.xl,
    paddingBotton: theme.spacing.xl,
  },
}));

const Layout: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <section className={classes.container}>
      <Container py="xl">
        <Title color="blue" order={2}>
          Projects
        </Title>
        {projects.map((project) => (
          <Text key={project.name}>{project.name}</Text>
        ))}
      </Container>
    </section>
  );
};

export default Layout;
