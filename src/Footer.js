import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="Footer">
      <p>This app made with &#10084; {date.getFullYear()} &copy;</p>
    </footer>
  );
};

export default Footer;
