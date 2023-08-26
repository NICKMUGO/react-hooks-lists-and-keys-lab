import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const ID=["1","2","3"]
  return <nav>
    <a href="#home" key={ID[0]}>home</a>
    <a href="#about" key={ID[1]}>about</a>
    <a href="#projects" key={ID[2]}>projects</a>
  </nav>;
}

export default NavBar;
