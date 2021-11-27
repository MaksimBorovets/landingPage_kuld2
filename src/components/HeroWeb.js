import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import styled from "styled-components";


function HeroWeb() {
  return (

        <HeroContainer>
          <Video src="/videos/video.mp4" autoPlay loop muted />
          <h1>KUBA LANDSCAPE DESIGN</h1>
          <p>Озеленение, автоматический полив, ландшафтный дизайн </p>
          <div className="hero-btns">
            <a
              href="https://www.instagram.com/poliv.ozelenenie/"
              target="_blank"
            >
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

export default HeroWeb;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

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
  .hero-btns {
    margin-top: 32px;
  }

  .hero-btns .btn {
    margin: 6px;
  }

  .fa-play-circle {
    margin-left: 4px;
  }

  p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 70px;
      margin-top: -150px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      margin-top: -100px;
    }

    .hero-container > p {
      font-size: 30px;
    }

    .btn-mobile {
      display: block;
      text-decoration: none;
    }

    .btn {
      width: 100%;
    }
  }
`;
