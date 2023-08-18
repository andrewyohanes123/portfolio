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
      rotateY: {
        delay: 0.3,
      },
      duration: 0.6,
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
      duration: 0.6,
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
      duration: 0.6,
    },
    rotateY: 15,
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
          {roles.map((role, index) => (
            <motion.div
              key={`role-item-${role}-${index}`}
              style={
                {
                  display: index !== customIndex ? "none" : "inline-block",
                }
              }
            >
              {index === customIndex && (
                <motion.h4
                  variants={roleTextVariant}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  layoutId={role}
                  className={classes.role}
                >
                  {role}
                </motion.h4>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ScrollableRole;
