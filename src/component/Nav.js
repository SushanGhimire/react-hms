const Nav = () => {
  return (
    <div className="w-full flex relative">
      <div className="w-full h-full md:flex items-center bg-black bg-opacity-40 px-5 lg:px-20 justify-between py-5">
        <div className="w-full md:w-auto flex items-center justify-between text-white font-semibold font-rubik tracking-widest text-xl">
          LUXURYHOTEL
          <div className="flex md:hidden border border-white px-1">
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
        <div className="flex md:space-x-4 text-white text-lg font-rubik items-center transition-all">
          <div className="mt-2 md:mt-0 cursor-pointer">Home</div>
          <div className="mt-2 md:mt-0 cursor-pointer">Room</div>
          <div className="mt-2 md:mt-0 cursor-pointer">Blog</div>
          <div className="mt-2 md:mt-0 cursor-pointer">About</div>
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
