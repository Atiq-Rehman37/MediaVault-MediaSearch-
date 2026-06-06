import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
const Home = () => {
  useEffect(() => {
    document.title = "MediaVault — Search & Save Media";
  }, []);
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default Home;
