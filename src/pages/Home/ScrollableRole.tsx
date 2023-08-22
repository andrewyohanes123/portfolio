import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useInterval } from "@mantine/hooks";
import { createStyles } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const roles: string[] = ["Frontend Developer", "UI/UX Enthusiast", "3D Artist"];

const useStyles = createStyles((theme) => ({
  roleContainer: {
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
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
      scale: {
        delay: 0.3,
      },
      duration: 0.6,
    },
    scale: 0.7,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.5,
      },
      scale: {
        delay: 0.3,
      },
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween'
    },
    scale: 1,
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.5,
      },
      scale: {
        delay: 0.3,
      },
      duration: 0.6,
    },
    scale: 0.715,
  },
};

const ScrollableRole: FC = (): ReactElement => {
  const { classes, theme } = useStyles();
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const { start, active, stop } = useInterval(() => {
    setRoleIndex((index) => {
      return index + 1;
    });
  }, 3000);
  const customIndex = useMemo(() => roleIndex % roles.length, [roleIndex]);

  useEffect(() => {
    start();

    return () => {
      if (active) stop();
    };
  }, [stop, start, active]);

  const role = roles[customIndex];

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
        layout
        layoutId="role-container"
      >
        <IconChevronRight color={theme.white} />
        <AnimatePresence mode="wait">
          <motion.h4
            variants={roleTextVariant}
            initial="initial"
            animate="visible"
            exit="exit"
            // layoutId={role}
            key={`${customIndex}-${role}`}
            className={classes.role}
          >
            {role}
          </motion.h4>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ScrollableRole;
