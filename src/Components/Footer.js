import React from "react";
import { social } from "../data";
import logo from "../assets/img/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* Social Icons  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, i) => {
              return (
                <a className="text-accent text-base" key={i} href={item.href}>
                  {item.icon}{" "}
                </a>
              );
            })}
          </div>
          {/* Logo  */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* Copyright  */}
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
