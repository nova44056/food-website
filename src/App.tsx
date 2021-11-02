import React from "react";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PopularDishes } from "./components/PopularDishes";
import { SlideBanner } from "./components/SlideBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <SlideBanner />
      <PopularDishes />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
