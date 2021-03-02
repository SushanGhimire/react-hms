import BigRoom from "./BigRoom";
import SmallRoom from "./SmallRoom";

const FeatureRoom = () => {
  return (
    <div className="w-full p-5 md:p-20 flex flex-col bg-gray-100 mt-10 space-y-5">
      <div className="text-sm text-center font-semibold font-rubik text-gray-400 tracking-widest">
        OUR LUXURY ROOMS
      </div>
      <div className="font-playfair text-center text-4xl md:text-5xl">
        Featured Rooms
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <BigRoom />
        </div>
        <div className="col-span-1 space-y-4">
          <SmallRoom />
        </div>
      </div>
    </div>
  );
};

export default FeatureRoom;
