import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
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
        <a

              href="tel:+380963644865"
            >
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
    </div>
  );
}

export default HeroSection;
