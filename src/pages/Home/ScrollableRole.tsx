import { FC, ReactElement, useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useInterval } from "@mantine/hooks";
import { createStyles } from "@mantine/core";

const roles: string[] = ["Frontend Developer", "UI/UX Enthusiast", "3D Artist"];

const useStyles = createStyles((theme) => ({
  roleContainer: {
    padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
    borderRadius: theme.radius.md,
    background: theme.colors.gray[7],
    marginTop: theme.spacing.md,
    width: "fit-content",
    height: "fit-content",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.xs,
  },
  role: {
    color: theme.white,
    margin: 0,
  },
}));

const roleTextVariant: Variants = {
  initial: {
    y: 200,
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.5,
      },
      rotateY: {
        delay: 0.3,
      },
    },
    rotateY: -15,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.5,
      },
      rotateY: {
        delay: 0.3,
      },
    },
    rotateY: 0,
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.5,
      },
      rotateY: {
        delay: 0.3,
      },
    },
    rotateY: 15,
  },
};

const ScrollableRole: FC = (): ReactElement => {
  const { classes } = useStyles();
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const { start, active, stop } = useInterval(() => {
    setRoleIndex((index) => {
      console.log(index);
      return index === roles.length - 1 ? 0 : index + 1;
    });
  }, 3000);

  useEffect(() => {
    start();

    return () => {
      if (active) stop();
    };
  }, [stop, start, active]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.5 }}
    >
      <motion.div
        animate={{ width: "fit-content" }}
        initial={{ width: 0 }}
        className={classes.roleContainer}
      >
        <motion.h4 className={classes.role}>&gt;</motion.h4>
        <AnimatePresence mode="wait">
          {roleIndex === 0 && (
            <motion.h4
              variants={roleTextVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              key={roles[0]}
              layoutId={roles[0]}
              className={classes.role}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              {roles[0]}
            </motion.h4>
          )}
          {roleIndex === 1 && (
            <motion.h4
              variants={roleTextVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              key={roles[1]}
              layoutId={roles[1]}
              className={classes.role}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              {roles[1]}
            </motion.h4>
          )}
          {roleIndex === 2 && (
            <motion.h4
              variants={roleTextVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              key={roles[2]}
              layoutId={roles[2]}
              className={classes.role}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              {roles[2]}
            </motion.h4>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ScrollableRole;
