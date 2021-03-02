const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-gray-200 p-5 text-center md:p-20 font-rubik">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <ul className="w-full md:space-y-4">
            <li className="text-gray-500 text-sm tracking-widest font-semibold">
              PHONE SUPPORT
            </li>
            <li className="text-sm">24/7 Call us now</li>
            <li className="text-sm">9876785420</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="w-full md:space-y-4">
            <li className="text-gray-500 text-sm tracking-widest font-semibold">
              CONNECT WITH US
            </li>
            <li className="text-sm">We are socialized. Follow us</li>
            <li className="text-sm">9876785420</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="w-full md:space-y-4">
            <li className="text-gray-500 text-sm tracking-widest font-semibold">
              CONNECT WITH US
            </li>
            <li className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              odio.
            </li>
            <li>
              <div className="flex relative items-center">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="px-6 w-full py-2 border-2 border-gray-300 focus:outline-none focus:border-text "
                />
                <svg
                  className="w-6 h-6 absolute right-0 mr-3 text-gray-500  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center text-sm md:text-base md:px-20 py-10 text-gray-700">
        © Copyright ©2021 All rights reserved | This template is made by Sushan
        Ghimire
      </div>
    </div>
  );
};

export default Footer;
