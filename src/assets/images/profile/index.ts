import hires from "./hires.webp";
import midres from "./midres.webp";
import lowres from "./lowres.webp";

export type ProfileSrcs = {
  src: string;
  media: string;
};

export const portfolioSrcs: ProfileSrcs[] = [
  {
    media: "(max-width: 400px)",
    src: lowres,
  },
  {
    media: "(max-width: 1000px)",
    src: midres,
  },
  {
    media: "(max-width: 1400px)",
    src: hires,
  },
];
