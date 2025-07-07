import React from "react";
import { socialImgs } from "../constants";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              {socialImg.name === "github" ? (
                <SiGithub size={24} />
              ) : socialImg.name === "mail" ? (
                <SiGmail size={24} />
              ) : (
                <img src={socialImg.imgPath} alt="social icon" />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kiran Jadhav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;