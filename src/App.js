import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle/globalStyles";
import HeroSection from "./components/HeroSection";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo } from "./data/InfoData";

function App() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown open={open} toggle={toggle} />
        <HeroSection slides={SliderData} />
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataTwo} />
      </Router>
    </>
  );
}

export default App;
