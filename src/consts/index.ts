import { Projects } from "@types";
import { insightPictures, situdePictures } from "assets/images";

export const projects: Projects = [
  {
    name: "SiTude",
    pictures: situdePictures,
    technologies: [
      "React",
      "NodeJS",
      "FeathersJS",
      "TypeScript",
      "React Native",
    ],
    type: ["mobile", "web"],
    description: "",
    links: ["https://tumumpadua.org"],
  },
  {
    name: "Insight Bitung",
    pictures: insightPictures,
    technologies: ["React", "NodeJS", "FeathersJS", "TypeScript"],
    type: ["web"],
    description: "",
    links: ["https://insight.bitungkota.go.id"],
  },
];
