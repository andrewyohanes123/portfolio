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
  name: {
    fontSize: 50,
    color: theme.colors.blue[5],
    margin: 0,
    display: "block",
    overflow: "hidden",
  },
  nameWrapper: {
    overFlow: "hidden",
    // display: "flex",
    // flexDirection: "column",
  },
  nameSpan: {
    display: "inline-block",
  },
}));

const textContainerVariants: Variants = {
  initial: {
    // opacity: 0,
    // y: 200,
  },
  visible: {
    // opacity: 1,
    // y: 0,
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
      delayChildren: 0.7
    },
  },
};

const bannerVariants: Variants = {
  hidden: {
    // height: "25vh",
    opacity: 0,
  },
  visible: {
    // height: "75vh",
    transition: {
      delayChildren: 0.6,
      duration: 0.4,
      staggerChildren: 0.2,
      delay: 0.2,
    },
    opacity: 1,
  },
};

const spanVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.65,
      delayChildren: 0.25,
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
          className={classes.nameWrapper}
          // initial={{ y: 0, opacity: 1 }}
          // animate={{ y: 0, opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delay: 0.8,
            opacity: { delay: 0.2 },
            ease: "easeInOut",
            duration: 0.5,
            type: "tween",
          }}
        >
          <motion.h1
            className={classes.name}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              staggerChildren: 0.1,
              delayChildren: 0.2,
              delay: 1,
            }}
          >
            <motion.span
              className={classes.nameSpan}
              variants={spanVariants}
              initial="hidden"
              animate="visible"
            >
              I'm&nbsp;
            </motion.span>
            <motion.span
              className={classes.nameSpan}
              variants={spanVariants}
              initial="hidden"
              animate="visible"
            >
              Yohanes&nbsp;
            </motion.span>
            <motion.span
              className={classes.nameSpan}
              variants={spanVariants}
              initial="hidden"
              animate="visible"
            >
              Andrew
            </motion.span>
          </motion.h1>
        </motion.div>
        <ScrollableRole />
      </Box>
    </motion.div>
  );
};

export default Layout;
