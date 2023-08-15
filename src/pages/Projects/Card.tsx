import { useDisclosure } from "@mantine/hooks";
import { Project } from "@types";
import { FC, ReactElement } from "react";
import {
  Badge,
  Image,
  Card as MantineCard,
  Title,
  createStyles,
} from "@mantine/core";
import { AnimatePresence, Variants, motion } from "framer-motion";

type props = {
  project: Project;
};

const useStyles = createStyles((theme) => ({
  textContainer: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    // background: theme.fn.linearGradient(
    //   180,
    //   theme.fn.rgba(theme.white, 0),
    //   theme.fn.rgba(theme.colors.gray[8], 0.6),
    //   theme.fn.rgba(theme.colors.gray[8], 1)
    // ),
    background: theme.fn.rgba(theme.colors.gray[9], 0.65),
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backdropFilter: "blur(10px)",
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  card: {
    position: "relative",
    overflow: "hidden",
    ":hover": {
      transform: "scale(1.2)",
      zIndex: 100,
      transition: "all ease-in-out 500ms",
      boxShadow: theme.shadows.md,
    },
    transformOrigin: "top",
    cursor: "pointer",
    transition: "all ease-in-out 500ms",
  },
}));

const textContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const Card: FC<props> = ({ project }): ReactElement => {
  const [hovered, { open, close }] = useDisclosure();
  const { classes } = useStyles();

  return (
    <MantineCard
      className={classes.card}
      onMouseEnter={open}
      onMouseLeave={close}
      p={0}
      withBorder
    >
      {project.pictures.length > 0 && (
        <Image src={project.pictures[0]} alt={project.pictures[0]} />
      )}
      <AnimatePresence>
        {hovered && (
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.textContainer}
          >
            <Title color="white" order={3}>
              {project.name}
            </Title>
            {project.type.map((type) => (
              <Badge mr="xs" key={`item-${type}-${project.name}`}>
                {type}
              </Badge>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </MantineCard>
  );
};

export default Card;
