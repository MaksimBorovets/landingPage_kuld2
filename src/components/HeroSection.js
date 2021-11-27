import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import heroImg from "../forGalery/6.jpg";
import styled from 'styled-components'
import { BrowserView, MobileView } from "react-device-detect";

function HeroSection() {
  return (
    <HeroContainer>
              <Video src="/videos/video.mp4" autoPlay loop muted />

      <MobileView>
        <Img src={heroImg} />
      </MobileView>

      <h1>KUBA LANDSCAPE DESIGN</h1>
      <p>Озеленение, автоматический полив, ландшафтный дизайн </p>
      <div className="hero-btns">
        <a href="https://www.instagram.com/poliv.ozelenenie/" target="_blank">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            @poliv.ozelenenie
            <i style={{ marginLeft: 5 }} class="fab fa-instagram" />
          </Button>
        </a>
        <a href="tel:+380963644865">
          <Button
            toPage="galery"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            +380963644865 <i class="fas fa-phone"></i>
          </Button>
        </a>
      </div>
    </HeroContainer>
  );
}

export default HeroSection;


const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

const Img = styled.img`
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`
const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  h1 {
  color: #fff;
  font-size: 100px;
  margin-top: -100px;
}


p {
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
`