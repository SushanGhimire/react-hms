import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  let [display, setDisplay] = useState("hidden");
  let [list, setList] = useState("hidden");
  const handleDisplay = (e) => {
    if (display === "hidden") {
      setDisplay("");
    } else {
      setDisplay("hidden");
    }
  };
  const handelMenu = (e) => {
    setList("");
  };
  const handelMenuList = (e) => {
    setList("hidden");
  };
  return (
    <div className="w-full flex relative z-50">
      <div className="w-full h-full md:flex items-center bg-black bg-opacity-40 px-5 lg:px-20 justify-between py-5">
        <div className="w-full md:w-auto flex items-center justify-between text-white font-semibold font-rubik tracking-widest text-xl">
          <Link to="/">LUXURYHOTEL</Link>
          <div
            className="flex md:hidden border border-white px-1"
            onClick={handleDisplay}
          >
            <svg
              className="w-8 h-9 cursor-pointer text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`md:flex md:space-x-4 text-white text-lg font-rubik items-center  transition-all ${display}`}
        >
          <Link to="/" className="mt-2 md:mt-0 cursor-pointer">
            Home
          </Link>
          <div
            className="mt-2 md:mt-0 cursor-pointer   menu relative"
            onMouseEnter={handelMenu}
            onMouseLeave={handelMenuList}
          >
            <span className="flex  items-center">
              Room{" "}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <div
              className={`md:absolute md:bg-white w-44 md:rounded-md md:shadow-md md:top-10  ${list}`}
              onMouseEnter={handelMenu}
              onMouseLeave={handelMenuList}
            >
              <ul className="text-gray-800  py-3 font-rubik text-sm font-medium flex flex-col relative">
                <div className=" w-full  h-10 absolute -top-6"></div>
                <span className="hidden md:flex bg-white h-4 w-4 transform rotate-45 absolute -top-1.5 left-5"></span>
                <Link
                  to="/presidentalRoom"
                  className="px-3 hover:bg-text text-white md:text-black hover:text-white transition-all py-2.5 mt-1"
                >
                  Presidental Room
                </Link>
                <Link
                  to="/luxuryRoom"
                  className="px-3 hover:bg-text text-white md:text-black hover:text-white transition-all py-2.5"
                >
                  Luxury Room
                </Link>
                <Link
                  to="/deluxRoom"
                  className="px-3 hover:bg-text text-white md:text-black hover:text-white transition-all py-2.5"
                >
                  Delux Room
                </Link>
              </ul>
            </div>
          </div>
          <Link to="/blogs" className="mt-2 md:mt-0 cursor-pointer">
            Blog
          </Link>
          <Link to="/about" className="mt-2 md:mt-0 cursor-pointer">
            About
          </Link>
          <div className="mt-2 md:mt-0 cursor-pointer">Contact</div>
          <div className="border-2 mt-2 md:mt-0 border-white py-3 px-5">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
