import bigRoom from "../../assets/img/bigroom.jpg";
const BigRoom = () => {
  return (
    <div className="flex flex-col space-y-5 bg-white border-gray-300 border pb-10">
      <div className="w-full h-auto">
        <img src={bigRoom} className="" alt="" />
      </div>
      <div className="px-10 font-playfair text-2xl text-text">
        Presidential Room
      </div>

      <div className="flex px-10 space-x-2 text-gray-500 font-rubik">
        <div>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </div>
        <div>2 guests</div>
      </div>
      <div className="text-gray-700 font-rubik px-10">
        Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac
        nisi vulputate fringilla.
      </div>
      <div className="px-10">
        <button className="button text-sm hover:shadow-md">
          BOOK NOW FROM $20
        </button>
      </div>
    </div>
  );
};

export default BigRoom;
