import { Container, SimpleGrid, Title, createStyles } from "@mantine/core";
import { projects } from "consts";
import { FC, ReactElement } from "react";
import Card from "./Card";

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
        <SimpleGrid my="xl" cols={2}>
          {projects.map((project) => (
            <Card project={project} key={`${project.name}-item-card`} />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Layout;
