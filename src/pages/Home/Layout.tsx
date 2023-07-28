import { Box, Title, createStyles } from "@mantine/core";
import { Variants, motion } from "framer-motion";
import { FC, ReactElement } from "react";
import ScrollableRole from "./ScrollableRole";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100vw",
    height: "50vh",
    padding: theme.spacing.xl,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.fn.linearGradient(
      10,
      theme.colors.teal[0],
      theme.colors.cyan[0],
      theme.colors.blue[1]
    ),
  },
  box: {
    width: "100%",
    maxWidth: '60rem',
    padding: `${theme.spacing.md}`,
    transformOrigin: "left",
    display: "block",
  },
}));

const textContainerVariants: Variants = {
  initial: {
    opacity: 0,
    y: -500,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      // y: {
      //   delay: 0.2,
      // },
      opacity: {
        delay: 0.5,
      },
      delay: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const Layout: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Box
        variants={textContainerVariants}
        animate="visible"
        initial="initial"
        className={classes.box}
        component={motion.div}
      >
        <Title color="dark" order={3}>
          Hi There!
        </Title>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delay: 0.8,
            opacity: { delay: 0.2 },
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          <Title size={50} variant="gradient" color="teal">
            I'm Yohanes Andrew
          </Title>
        </motion.div>
        <ScrollableRole />
      </Box>
    </div>
  );
};

export default Layout;
