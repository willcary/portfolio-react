import React from "react";
import Header from "./components/Header.js"
import Intro from "./components/Intro.js"
import Services from "./components/Services.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <About />
      <Projects />
      <Footer />

      <script src="./js/index.js"></script>
    </>
  );
}

export default App;
