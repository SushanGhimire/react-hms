import smallRoom from "../../assets/img/hotelroom1.jpg";
const SmallRoom = () => {
  return (
    <div className="w-full h-80 md:h-1/2 space-y-4">
      <div
        class="w-full h-full relative object-cover"
        style={{
          backgroundImage: ` url(${smallRoom})`,
          backgroundPosition: `-100px -100px;`,
        }}
      >
        <div class="w-full h-full absolute bg-black bg-opacity-30 flex items-end">
          <div class="flex space-x-4 font-rubik text-white items-center px-5 py-3">
            <div class="text-sm">HOTEL ROOM</div>
            <div class="bg-yellow-500 text-sm px-2 py-1 rounded">FROM $20</div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full relative object-cover"
        style={{
          backgroundImage: ` url(${smallRoom})`,
          backgroundPosition: `-100px -100px;`,
        }}
      >
        <div class="w-full h-full absolute bg-black bg-opacity-30 flex items-end">
          <div class="flex space-x-4 font-rubik text-white items-center px-5 py-3">
            <div class="text-sm">HOTEL ROOM</div>
            <div class="bg-yellow-500 text-sm px-2 py-1 rounded">FROM $20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallRoom;
