import React from "react";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
