import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-[560px] md:max-w-[780px] lg:max-w-[1400px] overflow-hidden">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
