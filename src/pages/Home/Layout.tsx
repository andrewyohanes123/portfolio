import { Box, Title, createStyles } from "@mantine/core";
import { Variants, motion } from "framer-motion";
import { FC, ReactElement } from "react";
import ScrollableRole from "./ScrollableRole";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "75vh",
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
    maxWidth: "60rem",
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
      type: "tween",
    },
  },
};

const bannerVariants: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "75vh",
    transition: {
      delayChildren: 0.6,
      duration: 0.4,
      staggerChildren: 0.2,
      delay: 0.2
    },
  },
};

const Layout: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      className={classes.container}
    >
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
            type: "tween",
          }}
        >
          <Title size={50} variant="gradient" color="teal">
            I'm Yohanes Andrew
          </Title>
        </motion.div>
        <ScrollableRole />
      </Box>
    </motion.div>
  );
};

export default Layout;
