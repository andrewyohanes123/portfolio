import { Container, Title, createStyles } from "@mantine/core";
import { projects } from "consts";
import { FC, ReactElement, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import ProjectDetail from "./ProjectDetail";
import Project from "./Project";

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.gray[0],
    paddingTop: theme.spacing.xl,
    paddingBotton: theme.spacing.xl,
  },
}));

const Layout: FC = (): ReactElement => {
  const { classes } = useStyles();
  const [drawer, { open, close }] = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className={classes.container}>
      <Container py="xl">
        <Title onClick={open} mb="md" color="blue" order={2}>
          Projects
        </Title>
        {projects.map((project, index) => (
          <Project
            onClickDetail={() => {
              setSelectedIndex(index);
              open();
            }}
            project={project}
            key={`${project.name}-item-card`}
          />
        ))}
      </Container>
      <ProjectDetail
        selectedIndex={selectedIndex}
        onClose={close}
        opened={drawer}
      />
    </section>
  );
};

export default Layout;
