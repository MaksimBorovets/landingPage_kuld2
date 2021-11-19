import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Свяжитесь с нами</p>
        <div class="social-media-wrap">
          <Link style={{ fontSize: 20 }} to="/" className="navbar-logo">
            KULD
            <i style={{ marginLeft: 5 }} class="fas fa-tree"></i>
          </Link>

          <div class="social-icons">
            <a
              style={{ marginLeft: 10, color: "white" }}
              href="tel:+380963644865"
            >
              +380963644865
            </a>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              href="https://www.instagram.com/poliv.ozelenenie/"
            >
              @poliv.ozelenenie
              <i style={{ marginLeft: 5 }} class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
