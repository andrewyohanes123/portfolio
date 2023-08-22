import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import "./App.css";
import Home from "pages/Home";
import { Navbar } from "components";
import About from "pages/Home/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Experiences from "pages/Experiences";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createStyles,
} from "@mantine/core";

import { MantineThemeOverride } from "@mantine/core";

import { useScroll } from "framer-motion";
import ThemeSwitcher from "components/ThemeSwitcher";

const theme: MantineThemeOverride = {
  fontFamily: "Inter",
  defaultRadius: "md",
};
const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.cyan[0],
  },
}));

const App: FC = (): ReactElement => {
  const { classes } = useStyles();
  const { scrollY } = useScroll();
  const [scheme, setScheme] = useState<ColorScheme>("light");

  const toggleScheme = useCallback(() => {
    setScheme((currentScheme) => (currentScheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.title = "Yohanes Andrew | Web Developer";
  });

  return (
    <ColorSchemeProvider toggleColorScheme={toggleScheme} colorScheme={scheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme: scheme }}
      >
        <Box className={classes.container}>
          <Navbar scrollValue={scrollY} />
          <Home />
          <About />
          <Projects />
          <Experiences />
          <Contact />
        </Box>
        <ThemeSwitcher onClick={toggleScheme} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
