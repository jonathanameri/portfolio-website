import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
    </div>
  );
}

export default App;
