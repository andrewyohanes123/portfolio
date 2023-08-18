import { FC, ReactElement, useEffect } from "react";
import "./App.css";
import Home from "pages/Home";
import { Navbar } from "components";
import About from "pages/Home/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Experiences from "pages/Experiences";
import { Box, createStyles } from "@mantine/core";
import { useScroll } from "framer-motion";

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.cyan[0],
  },
}));

const App: FC = (): ReactElement => {
  const { classes } = useStyles();
  const { scrollY } = useScroll();

  useEffect(() => {
    document.title = "Yohanes Andrew | Web Developer";
  });

  return (
    <Box className={classes.container}>
      <Navbar scrollValue={scrollY} />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </Box>
  );
};

export default App;
