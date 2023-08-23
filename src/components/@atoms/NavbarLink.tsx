import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    background: "transparent",
    border: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[4],
    fontSize: theme.fontSizes.md,
    transition: "all 0.5s ease-in-out",
    fontWeight: 600,
    padding: `${theme.spacing.sm}`,
    ":hover": {
      color: theme.colors.green[5],
      transition: "all 0.5s ease-in-out",
    },
    cursor: "pointer",
  },
}));

type props = {
  title?: string;
};

const NavbarLink: FC<props> = ({ title }): ReactElement => {
  const { classes } = useStyles();
  return <motion.button className={classes.button}>{title}</motion.button>;
};

export default NavbarLink;
