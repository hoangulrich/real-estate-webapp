import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle/globalStyles";
import HeroSection from "./components/HeroSection";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <HeroSection slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
