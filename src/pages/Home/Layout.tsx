import { Box, Button, Group, Title, createStyles } from "@mantine/core";
import { Variants, motion } from "framer-motion";
import { FC, ReactElement } from "react";
import ScrollableRole from "./ScrollableRole";
// import background from "assets/images/resources/rect234.png";
import { IconBrandGithub, IconDownload } from "@tabler/icons-react";

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
      180,
      theme.colors.cyan[theme.colorScheme === "dark" ? 8 : 0],
      theme.colors.blue[theme.colorScheme === "dark" ? 5 : 1],
      theme.colors.teal[theme.colorScheme === "dark" ? 4 : 0]
    ),
    // backgroundImage: `url(${background})`,
    // backgroundSize: "50%",
    // backgroundBlendMode: "soft-light",
    // backgroundRepeat: "repeat-x",
    [theme.fn.smallerThan("sm")]: {
      backgroundSize: "150%",
    },
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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.teal[2]
        : theme.colors.blue[5],
    margin: 0,
    display: "block",
    overflow: "hidden",
  },
  nameWrapper: {
    overFlow: "hidden",
  },
  nameSpan: {
    display: "inline-block",
    textShadow: theme.shadows.lg,
  },
}));

const textContainerVariants: Variants = {
  initial: {
    // opacity: 0,
    // y: 200,
  },
  visible: {
    transition: {
      opacity: {
        delay: 0.5,
      },
      delay: 0.7,
      staggerChildren: 0.2,
      type: "tween",
      delayChildren: 0.7,
    },
  },
};

const bannerVariants: Variants = {
  hidden: {
    // height: "25vh",
    opacity: 0,
  },
  visible: {
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
    y: 100,
  },
  visible: (index: number) => ({
    y: 0,
    transition: {
      delay: 0.7 * index + 0.01,
    },
  }),
};

const nameString: string[] = "I'm Yohanes Andrew".split(" ");

const Layout: FC = (): ReactElement => {
  const { classes, theme } = useStyles();
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
        <Title
          color={theme.colorScheme === "dark" ? "white" : "dark"}
          order={3}
        >
          Hi There!
        </Title>
        <motion.div
          className={classes.nameWrapper}
          // initial={{ y: 0, opacity: 1 }}
          // animate={{ y: 0, opacity: 1 }}
          transition={{
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
            {nameString.map((word, index) => (
              <motion.span
                className={classes.nameSpan}
                variants={spanVariants}
                initial="hidden"
                animate="visible"
                key={`${word}-${index}`}
                custom={index}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <Group py="md">
          <Button
            color="dark"
            component="a"
            target="_blank"
            href="https://github.com/andrewyohanes123/"
            leftIcon={<IconBrandGithub />}
          >
            GitHub
          </Button>
          <Button leftIcon={<IconDownload />} variant="white">
            My Resume
          </Button>
        </Group>
        <ScrollableRole />
      </Box>
    </motion.div>
  );
};

export default Layout;
