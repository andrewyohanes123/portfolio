import { FC, ReactElement } from "react";
import "./App.css";
import Home from "pages/Home";
import { Navbar } from "components";
import About from "pages/Home/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";

const App: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
