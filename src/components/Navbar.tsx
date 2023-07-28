import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { createStyles } from "@mantine/core";
import NavbarLink from "./@atoms/NavbarLink";

const useStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.xs,
    padding: `${theme.spacing.md} ${theme.spacing.sm}`,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    justifyContent: 'flex-end'
  },
}));

const Navbar: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <motion.div className={classes.navbar}>
      <NavbarLink title="About" />
      <NavbarLink title="Projects" />
      <NavbarLink title="Contact Me" />
    </motion.div>
  );
};

export default Navbar;
