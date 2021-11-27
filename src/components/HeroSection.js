import React from "react";
import "../App.css";
import { BrowserView, MobileView } from "react-device-detect";
import HeroWeb from "./HeroWeb";
import HeroMobile from "./HeroMobile";

function HeroSection() {
  return (
    <>
     <BrowserView><HeroWeb/></BrowserView>
     <MobileView><HeroMobile/></MobileView>
    </>
  );
}

export default HeroSection;
