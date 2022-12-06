import React from "react";

import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function Navbar(props) {
  return (
    <>
      {/* Navbar */}
      {console.log(props.colors)}
      <nav className={"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 "
     +(props.colors === "bg-lovelyBlue" ? " bg-lovelyBlue" : " bg-DarkBlue")}>
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white py-3 text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
