export type Project = {
  name:string;
  pictures: string[];
  type: ("mobile" | "web")[];
  description: string;
  technologies: string[];
  links: string[];
};

export type Projects = Project[];