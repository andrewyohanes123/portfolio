import { FC, ReactElement } from "react";
import { Drawer, Title } from "@mantine/core";

interface props {
  opened: boolean;
  onClose: () => void;
}

const ProjectDetail: FC<props> = ({ opened, onClose }): ReactElement => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Project Detail"
      position="bottom"
    >
      <Title>Project 1</Title>
    </Drawer>
  );
};

export default ProjectDetail;
