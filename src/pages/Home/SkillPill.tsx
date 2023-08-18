import { Text, createStyles } from "@mantine/core";
import { Variants, motion } from "framer-motion";
import { FC, ReactElement } from "react";

interface props {
  skill: string;
  index: number;
}

const useStyles = createStyles((theme) => ({
  pill: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    borderRadius: 20,
    border: `1px solid ${theme.colors.gray[0]}`,
    boxShadow: theme.shadows.md,
    background: theme.white,
    transformOrigin: "bottom",
  },
}));

const pillVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.7,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeInOut",
      type: "tween",
    },
  }),
};

const SkillPill: FC<props> = ({ skill, index }): ReactElement => {
  const { classes } = useStyles();
  return (
    <motion.div
      variants={pillVariants}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
      className={classes.pill}
      custom={index}
    >
      <Text align="center">{skill}</Text>
    </motion.div>
  );
};

export default SkillPill;
