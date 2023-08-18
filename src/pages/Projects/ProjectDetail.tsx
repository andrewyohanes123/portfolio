import { FC, ReactElement } from "react";
import { Badge, Container, Drawer, Group, Title } from "@mantine/core";
import { projects } from "consts";

interface props {
  opened: boolean;
  onClose: () => void;
  selectedIndex: number | null;
}

const ProjectDetail: FC<props> = ({
  opened,
  onClose,
  selectedIndex,
}): ReactElement => {
  const index = selectedIndex ?? 0;
  const selectedProject = projects[index];
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Project Detail"
      position="bottom"
      zIndex={500}
      size="xl"
    >
      <Container>
        <Title order={3} variant="gradient" mb="md">
          {selectedProject.name}
        </Title>
        <Group spacing="xs" my="md">
          {selectedProject.technologies.map((tech, index) => (
            <Badge variant="dot" key={`${tech}-${index}`}>
              {tech}
            </Badge>
          ))}
        </Group>
        {selectedProject.description}
      </Container>
    </Drawer>
  );
};

export default ProjectDetail;
