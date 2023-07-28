import { FC, ReactElement } from "react";
import "./App.css";
import Home from "pages/Home";
import { Navbar } from "components";
import About from "pages/Home/About";

const App: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
};

export default App;
