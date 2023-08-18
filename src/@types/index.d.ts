import { TablerIconsProps } from "@tabler/icons-react";
import { FC, ReactNode } from "react";

export type Project = {
  name: string;
  pictures: string[];
  type: ("mobile" | "web")[];
  description: ReactNode;
  technologies: string[];
  links: ProjectLink[];
};

export type ProjectLink = {
  link: string;
  label: ReactNode;
  icon: FC<TablerIconsProps>;
};

export type Projects = Project[];
