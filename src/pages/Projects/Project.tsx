import {
  Group,
  Title,
  createStyles,
  Badge,
  Image,
  Button,
} from "@mantine/core";
import { Project } from "@types";
import { Variants, motion } from "framer-motion";
import { FC, ReactElement } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.gray[8]
        : theme.colors.gray[0],
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    margin: `${theme.spacing.xs} 0`,
    position: "relative",
    minHeight: 500,
    overflow: "hidden",
    boxShadow: theme.shadows.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      alignItems: "center",
      minHeight: 300,
    },
  },
  projectImage: {
    display: "inline-block",
    borderRadius: theme.radius.xl,
    userSelect: "none",
    pointerEvents: "none",
  },
  textContainer: {
    width: "40%",
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  imageContainer: {
    position: "absolute",
    borderRadius: theme.radius.lg,
    overflow: "hidden",
    boxShadow: theme.shadows.xl,
    right: "-40%",
    bottom: "-15%",
    width: "100%",
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[1]}`,
    [theme.fn.smallerThan("sm")]: {
      position: "relative",
      right: 0,
      bottom: 0,
      width: "100%",
    },
  },
}));

interface props {
  project: Project;
  onClickDetail?: () => void;
}

const pictureContainerVariants: Variants = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const textContainerVariants: Variants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const Project: FC<props> = ({ project, onClickDetail }): ReactElement => {
  const { classes } = useStyles();
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={classes.card}
    >
      <Group>
        <motion.div
          variants={textContainerVariants}
          viewport={{ once: true }}
          className={classes.textContainer}
        >
          <Title variant="gradient" order={4} my="md">
            {project.name}
          </Title>
          <Group spacing="xs">
            {project.technologies.map((tech) => (
              <Badge variant="dot" key={`${tech}-tech-item-${project.name}`}>
                {tech}
              </Badge>
            ))}
          </Group>
          <Group my="md" spacing="xs">
            {project.links.map((link, index) => (
              <Button
                key={`${link.link}-${index}`}
                variant="white"
                component="a"
                href={link.link}
                target="_blank"
                leftIcon={<link.icon />}
              >
                {link.label}
              </Button>
            ))}
          </Group>
          <Button onClick={onClickDetail} compact color="dark" fullWidth>
            Detail
          </Button>
        </motion.div>
        <motion.div
          variants={pictureContainerVariants}
          viewport={{ once: true }}
          className={classes.imageContainer}
        >
          <Image
            alt={`Project ${project.name} picture`}
            src={project.pictures[0]}
            className={classes.projectImage}
          />
        </motion.div>
      </Group>
    </motion.div>
  );
};

export default Project;
