import React from "react";
import { useState } from "react";
import searchIcon from "../img/search.png";
import cancelIcon from "../img/cancel.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <nav className=" bg-gray-800 text-white flex items-center py-2 px-3 space-x-4">
      <div className="lg:mr-7">Logo</div>
      <ul className="flex space-x-4 lg:space-x-7">
        <li></li>
        <li className="hover:brightness-50 cursor-pointer">Home</li>
        <li className="hover:brightness-50 cursor-pointer">About</li>
        <li className="hover:brightness-50 cursor-pointer">Contant</li>
        <li className="hover:brightness-50 cursor-pointer">Services</li>
      </ul>
      <div className="ml-auto flex items-center space-x-3 transition-all ease-in duration-1000">
        {open ? (
          <div className="bg gray-700">
            <input
              className="text-white bg-gray-700 rounded-md pl-3 w-32 outline-none focus-within:bg-gray-600 capitalize"
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {text.length === 0 ? (
              ""
            ) : (
              <img
                className="absolute right-12 top-3.5 invert h-3.5 rounded-r-md"
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
