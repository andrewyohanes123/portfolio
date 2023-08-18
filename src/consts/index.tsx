import { IconBrandGooglePlay, IconBrowser } from "@tabler/icons-react";
import { Experiences, Projects } from "@types";
import {
  insightPictures,
  simataPictures,
  situdePictures,
  travelPictures,
} from "assets/images";
import { List, Text, Title } from "@mantine/core";

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
        <Text>
          Technically, i'm new to UI/UX design. But, i have a UI/UX design for
          the mobile app, here's the Figma project{" "}
          <a
            href="https://www.figma.com/file/tWwyg7puaoc9bgNawMENDq/Design-home-page-situde?type=design&t=fv5L5AhNPOhSLiam-6"
            target="_blank"
          >
            SiTude
          </a>
        </Text>
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
    description: (
      <>
        <Text>
          I'm still actively developing this app. My role is to develop
          front-end UI/UX. Insight is an app that users can create article and
          post it. Also, user can search the article just like browsing using
          search engine. The article have 2 access: public and private. The
          public article is meaning that the article can access publicly using
          the search feature, while private is where the article only can get
          access if the user is logged in to the app.
        </Text>
        <Title order={4}>UI/UX Design</Title>
        <Text>
          I have some mockup for the UI/UX in Figma, but i was not updating the
          design because the time i spent to create and maintain the features i
          had created. Here's the design link :{" "}
          <a
            href="https://www.figma.com/file/XtmcgL2mLElR3sAQWWMjR0/KBDMS?type=design&t=fv5L5AhNPOhSLiam-6"
            target="_blank"
          >
            KBDMS
          </a>
        </Text>
      </>
    ),
    links: [
      {
        link: "https://insight.bitungkota.go.id",
        label: "Web App",
        icon: IconBrowser,
      },
    ],
  },
  {
    name: "Lembeh Utara Promotional Website",
    pictures: travelPictures,
    technologies: ["React", "NodeJS", "FeathersJS", "TypeScript"],
    type: ["web"],
    description: "",
    links: [
      {
        link: "http://lembehutara.bitungkota.go.id",
        label: "Web App",
        icon: IconBrowser,
      },
    ],
  },
  {
    name: "Simataruang",
    pictures: simataPictures,
    technologies: ["React", "NodeJS", "FeathersJS", "TypeScript"],
    type: ["web"],
    description: "",
    links: [
      {
        link: "http://36.95.15.250/",
        label: "Web App",
        icon: IconBrowser,
      },
    ],
  },
];

export const experiences: Experiences = [
  {
    instance: "Minahasa Tenggara Government Office",
    description: (
      <>
        <List pr="xl">
          <List.Item>
            Created and maintained e‑Ofce with digital sign integration using
            ReactJS for the frontend and NodeJS Express for the backend
          </List.Item>
          <List.Item>
            Created and maintained tower retribution system using ReactJS for
            the frontend and NodeJS Express for the backend
          </List.Item>
          <List.Item>
            Created and maintained community organization web‑app system using
            ReactJS for the frontend and NodeJS Express for the backend
          </List.Item>
          <List.Item>
            Created and maintained ofcial feld trip document generator using
            ReactJS.
          </List.Item>
        </List>
      </>
    ),
    year: [new Date("2019-10-31"), new Date("2020-08-10")],
    role: "Programmer",
  },
  {
    instance: "CTI CFF Regional Indonesia",
    description: (
      <>
        <List pr="xl">
          <List.Item>Improving and maintained the main CTI website</List.Item>
          <List.Item>
            Adding new features to the document web‑app system
          </List.Item>
        </List>
      </>
    ),
    year: [new Date("2018-03-01"), new Date("2018-06-10")],
    role: "Junior Programmer",
  },
  {
    instance: "Manado Department of Civil Registration Office",
    description: (
      <Text>
        Created and maintained queue booking web‑app system using ReactJS as the
        frontend.
      </Text>
    ),
    year: [new Date("2017-07-01"), new Date("2017-09-10")],
    role: "Programmer",
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
