import React from "react";
import { useState } from "react";
import searchIcon from "../img/search.png";
import cancelIcon from "../img/cancel.png";
import menuIcon from "../img/sort-button-with-three-lines.png";
import backIcon from "../img/back.png";
import { useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [showSideBar, setShowSideBar] = useState("-translate-x-full");
  const [navIcon, setNavIcon] = useState(menuIcon);
  const handleNavbarToggle = () => {
    setShowSideBar(
      showSideBar === "-translate-x-full" ? "0" : "-translate-x-full"
    );
    setNavIcon(navIcon === menuIcon ? backIcon : menuIcon);
  };
  useEffect(() => {}, [showSideBar]);

  return (
    <nav className="sticky top-0 z-10 bg-gray-800 text-white flex items-center py-2 px-3">
      <div className="ml-1 mr-2 w-8 invert md:[display:none]">
        <img
          className="cursor-pointer"
          src={navIcon}
          alt=""
          onClick={handleNavbarToggle}
        />
      </div>
      <div className="lg:mr-7 order-2 md:order-1 z-10 cursor-pointer md:text-xl">
        Logo
      </div>
      <ul
        className={`order-1 absolute pl-4 pr-10 pt-2.5 md:p-0 top-12 left-0 text-xl md:text-base h-screen ${showSideBar} leading-loose md:leading-none md:translate-x-0 bg-cyan-900  md:bg-inherit md:order-2 md:h-auto  md:flex md:static md:space-x-4 lg:space-x-7 transition-translate ease-out duration-300 md:transition-none`}
      >
        <li></li>
        <li className="hover:brightness-50 cursor-pointer">Home</li>
        <li className="hover:brightness-50 cursor-pointer">About</li>
        <li className="hover:brightness-50 cursor-pointer">Contant</li>
        <li className="hover:brightness-50 cursor-pointer">Services</li>
      </ul>
      <div className="order-3 ml-auto flex items-center space-x-3">
        {open ? (
          <form
            className="bg gray-700 flex items-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className={`text-white bg-gray-700 rounded-md py-1 md:py-0.5 pl-3 pr-9 w-32 outline-none focus-within:bg-gray-600 capitalize`}
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="search"
            />
            {text.length === 0 ? (
              ""
            ) : (
              <img
                className="absolute right-14 z-10 invert w-5 rounded-r-md cursor-pointer"
                src={cancelIcon}
                alt=""
                onClick={() => setText("")}
              />
            )}
          </form>
        ) : (
          ""
        )}
        <label htmlFor="search">
          <img
            className="invert w-6 cursor-pointer"
            src={searchIcon}
            alt="Nav"
            onClick={() =>
              open === false
                ? setOpen(true)
                : (open === true) & (text.length !== 0)
                ? setOpen(true)
                : setOpen(false)
            }
          />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
