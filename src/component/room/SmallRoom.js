import smallRoom from "../../assets/img/hotelroom1.jpg";
const SmallRoom = () => {
  return (
    <div className="w-full h-80 md:h-1/2 space-y-4">
      {Array.from(Array(2), (e, i) => {
        return (
          <div
            className="w-full h-full relative object-cover"
            key={i}
            style={{
              backgroundImage: ` url(${smallRoom})`,
            }}
          >
            <div className="w-full h-full absolute bg-black bg-opacity-30 flex items-end">
              <div className="flex space-x-4 font-rubik text-white items-center px-5 py-3">
                <div className="text-sm">HOTEL ROOM</div>
                <div className="bg-yellow-500 text-sm px-2 py-1 rounded">
                  FROM $20
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SmallRoom;
