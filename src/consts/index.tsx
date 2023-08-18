import { IconBrandGooglePlay, IconBrowser } from "@tabler/icons-react";
import { Projects } from "@types";
import { insightPictures, situdePictures } from "assets/images";
import { Text, Title } from "@mantine/core";

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
      "Axios",
    ],
    type: ["mobile", "web"],
    description: (
      <>
        <Text>
          I was worked as a frontend engineer for this project. This App is a
          public app for managing local government official document. There are
          two types of the frontend, the first is the mobile and second is the
          web app. The mobile app is developed using React Native, while the web
          i was using React JS.
        </Text>
        <Title order={4}>API Communication</Title>
        <Text>
          For the API communication, my colleague and i choose FeathersJS
          because the simplicity of the API. We use socket.io as the primary
          protocol communication, but when it comes to upload the websocket is
          not ideal so we use Axios too to further optimize the experience when
          uploading occurs
        </Text>
        <Title order={4}>Design UI/UX</Title>
        <Text>Technically, i'm new to UI/UX design. But, i have a UI/UX design for the mobile app, here's the Figma project</Text>
      </>
    ),
    links: [
      {
        link: "https://tumumpadua.org",
        label: "Web App",
        icon: IconBrowser,
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.kelurahanapp&pcampaignid=web_share",
        label: "Play Store",
        icon: IconBrandGooglePlay,
      },
    ],
  },
  {
    name: "Insight Bitung",
    pictures: insightPictures,
    technologies: ["React", "NodeJS", "FeathersJS", "TypeScript"],
    type: ["web"],
    description: "",
    links: [
      {
        link: "https://insight.bitungkota.go.id",
        label: "Web App",
        icon: IconBrowser,
      },
    ],
  },
];

export const skills: string[] = [
  "React JS",
  "React Native",
  "NodeJS",
  "TypeScript",
  "PostgreSQL",
  "HTML",
  "CSS",
  "UI/UX",
  "Shell Scripting",
  "Linux",
];
