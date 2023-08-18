import { FC, ReactElement, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { createStyles } from "@mantine/core";
import NavbarLink from "./@atoms/NavbarLink";

const useStyles = createStyles((theme) => ({
  navbar: {
    padding: `${theme.spacing.md} ${theme.spacing.sm}`,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
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

const Navbar: FC = (): ReactElement => {
  const { classes } = useStyles();
  const navbar = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: navbar });

  return (
    <motion.div
      style={{
        backdropFilter: `blur(${scrollYProgress}px)`,
      }}
      className={classes.navbar}
    >
      <motion.div ref={navbar} className={classes.linkContainer}>
        <NavbarLink title="About" />
        <NavbarLink title="Projects" />
        <NavbarLink title="Contact Me" />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
