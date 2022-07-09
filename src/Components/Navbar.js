import React from "react";
import { useState } from "react";
import searchIcon from "../img/search.png";
import cancelIcon from "../img/cancel.png";
import menuIcon from "../img/sort-button-with-three-lines.png";
import backIcon from "../img/back.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [showSideBar, setShowSideBar] = useState("full");
  const [navIcon, setNavIcon] = useState(menuIcon);
  const handleNavbarToggle = () => {
    setShowSideBar(showSideBar === "full" ? "0" : "full");
    setNavIcon(navIcon === menuIcon ? backIcon : menuIcon);
  };

  return (
    <nav className="sticky top-0 z-10 bg-gray-800 text-white flex items-center py-2 px-3">
      <div className="ml-1 mr-2 w-5 invert md:[display:none]">
        <img
          className="cursor-pointer"
          src={navIcon}
          alt=""
          onClick={handleNavbarToggle}
        />
      </div>
      <div className="lg:mr-7 order-2 md:order-1 z-10">Logo</div>
      <ul
        className={`order-1 absolute pl-4 pr-10 pt-2.5 md:p-0 top-10 left-0 h-screen -translate-x-${showSideBar} leading-loose md:leading-none md:translate-x-0 bg-cyan-900  md:bg-inherit md:order-2 md:h-auto  md:flex md:static md:space-x-4 lg:space-x-7 transition-translate ease-out duration-300 md:transition-none`}
      >
        <li></li>
        <li className="hover:brightness-50 cursor-pointer">Home</li>
        <li className="hover:brightness-50 cursor-pointer">About</li>
        <li className="hover:brightness-50 cursor-pointer">Contant</li>
        <li className="hover:brightness-50 cursor-pointer">Services</li>
      </ul>
      <div className="order-3 ml-auto flex items-center space-x-3">
        {open ? (
          <div className="bg gray-700 flex items-center">
            <input
              className="text-white bg-gray-700 rounded-md pl-3 w-32 outline-none pr-8 focus-within:bg-gray-600 capitalize"
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {text.length === 0 ? (
              ""
            ) : (
              <img
                className="absolute right-14 z-10 invert h-3.5 rounded-r-md"
                src={cancelIcon}
                alt=""
                onClick={() => setText("")}
              />
            )}
          </div>
        ) : (
          ""
        )}
        <img
          className="invert h-5 cursor-pointer"
          src={searchIcon}
          alt="Nav"
          onClick={() => setOpen(!open)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
