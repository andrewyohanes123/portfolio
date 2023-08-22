import { createStyles } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC, ReactElement } from "react";

const switchButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      delay: 1,
      type: "tween",
      ease: "backInOut",
    },
  },
  clicked: {
    scale: 0.8,
  },
};

const useStyles = createStyles((theme) => ({
  button: {
    position: "fixed",
    bottom: theme.spacing.lg,
    right: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    background: theme.colorScheme === "dark" ? theme.black : theme.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: "25%",
    width: 50,
    height: 50,
    boxShadow: theme.shadows.lg,
    overflow: "hidden",
  },
}));

type props = {
  onClick?: () => void;
};

const ICON_SIZE: number = 30;

const iconContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 4.6,
      type: "tween",
      ease: "backInOut",
    },
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};

const ThemeSwitcher: FC<props> = ({ onClick }): ReactElement => {
  const { classes, theme } = useStyles();
  return (
    <motion.button
      className={classes.button}
      variants={switchButtonVariants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      whileTap="clicked"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={theme.colorScheme}
          variants={iconContainerVariants}
          exit="exit"
        >
          {theme.colorScheme === "dark" ? (
            <IconMoon size={ICON_SIZE} />
          ) : (
            <IconSun size={ICON_SIZE} color={theme.colors.gray[6]} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeSwitcher;
