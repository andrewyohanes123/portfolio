import { FC, ReactElement } from "react";
import { MotionValue, Variants, motion, useTransform } from "framer-motion";
import { createStyles } from "@mantine/core";
import NavbarLink from "./@atoms/NavbarLink";

interface props {
  scrollValue: MotionValue<number>;
}

const useStyles = createStyles((theme) => ({
  navbar: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 400,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.xs,
    justifyContent: "flex-end",
    maxWidth: "60rem",
    margin: "0 auto",
  },
}));

const navbarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.85,
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

const Navbar: FC<props> = ({ scrollValue }): ReactElement => {
  const { classes, theme } = useStyles();
  const blur = useTransform(scrollValue, [0, 100], ["blur(0px)", "blur(10px)"]);
  const backgroundColor = useTransform(
    scrollValue,
    [0, 100],
    [theme.fn.rgba(theme.white, 0), theme.fn.rgba(theme.white, 0.6)]
  );
  const border = useTransform(
    scrollValue,
    [0, 100],
    [`0 px solid ${theme.colors.gray[1]}`, `1 px solid ${theme.colors.gray[1]}`]
  );

  return (
    <motion.div
      style={{
        backdropFilter: blur,
        backgroundColor,
        border,
      }}
      className={classes.navbar}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={classes.linkContainer}>
        <NavbarLink title="About" />
        <NavbarLink title="Projects" />
        <NavbarLink title="Experiences" />
        <NavbarLink title="Contact Me" />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
