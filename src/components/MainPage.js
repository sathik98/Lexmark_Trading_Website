import React from "react";
import NavBar2 from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import CryptoFuture from "./CryptoFuture/CryptoFuture";
import Trade from "./Trade/Trade";
import Reliable from "./Reliable/Reliable";
import Compactibility from "./Compactibility/Compactibility";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
const MainPage = () => {
  return (
    <div className="MainPage">
      <NavBar2 />
      <Banner />
      <CryptoFuture />
      <Trade />
      <Reliable />
      <Compactibility />
      <Experience />
      <Footer />
    </div>
  );
};

export default MainPage;
