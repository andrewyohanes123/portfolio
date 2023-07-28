import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    background: "transparent",
    border: "none",
    color: theme.colors.dark[5],
    fontSize: theme.fontSizes.md,
    transition: "all 0.5s ease-in-out",
    fontWeight: 500,
    padding: `${theme.spacing.sm}`,
    ":hover": {
      color: theme.colors.green[5],
      transition: "all 0.5s ease-in-out",
      marginLeft: theme.spacing.lg,
      marginRight: theme.spacing.lg,
    },
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
