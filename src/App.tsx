import { FC, ReactElement, useEffect } from "react";
import "./App.css";
import Home from "pages/Home";
import { Navbar } from "components";
import About from "pages/Home/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Experiences from "pages/Experiences";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.cyan[0],
  },
}));

const App: FC = (): ReactElement => {
  const { classes } = useStyles();

  useEffect(() => {
    document.title = "Yohanes Andrew | Web Developer";
  });

  return (
    <Box className={classes.container}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </Box>
  );
};

export default App;
