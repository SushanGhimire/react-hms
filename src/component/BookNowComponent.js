import BigRoom from "./room/BigRoom";
const BookNowComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 lg:px-20 my-20 md:space-x-10 font-rubik">
      {/* contact side  */}
      <div className="col-span-1 flex flex-col lg:px-10 md:space-y-5">
        <div className="w-full  font-playfair text-2xl md:text-4xl pb-10">
          Reservation Form
        </div>
        <div className="w-full md:flex md:space-x-3 ">
          <div className="relative space-y-3">
            <label htmlFor="" className="text-gray-600">
              Arrival Date
            </label>
            <input type="text" className=" input-style" />
            <div className="absolute top-8 right-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="relative space-y-3">
            <label htmlFor="" className="text-gray-600">
              Departure Date
            </label>
            <input type="text" className=" input-style" />
            <div className="absolute top-8 right-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* guest  */}
        <div className="w-full md:flex md:space-x-3 0">
          <div className="w-full space-y-3">
            <label htmlFor="" className="text-gray-600">
              Room
            </label>
            <select
              name=""
              id=""
              className="border w-full py-3 px-5 border-gray-300 focus:outline-none focus:border-text text-gray-600 bg-white "
            >
              <option value=""> 1 Room</option>
              <option value=""> 2 Room</option>
              <option value=""> 3 Room</option>
              <option value=""> 4 Room</option>
              <option value=""> 5 Room</option>
            </select>
          </div>
          <div className=" w-full space-y-3">
            <label htmlFor="" className="text-gray-600">
              Guests
            </label>
            <select name="" id="" className="input-style bg-white py-3 ">
              <option value=""> 1 Guest</option>
              <option value=""> 2 Guest</option>
              <option value=""> 3 Guest</option>
              <option value=""> 4 Guest</option>
              <option value=""> 5 Guest</option>
            </select>
          </div>
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Email
          </label>
          <input type="text" className=" input-style" />
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Write a Note
          </label>
          <textarea
            name=""
            className="input-style"
            id=""
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="button py-4 px-8 text-sm">SEND MESSAGE</button>
        </div>
      </div>
      {/* image  */}
      <div className="col-span-1 flex flex-col lg:px-10 space-y-5 mt-10 md:mt-0">
        <div className="w-full  font-playfair text-2xl  md:text-4xl md:pb-10">
          Featured Room
        </div>
        <BigRoom />
      </div>
    </div>
  );
};

export default BookNowComponent;
