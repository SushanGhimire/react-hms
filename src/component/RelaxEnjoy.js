import relax from "../assets/img/hotelroom2.jpg";
const RelaxEnjoy = () => {
  return (
    <div className="w-full h-96 bg-gray-100">
      <div
        className="w-full h-full  bg-no-repeat bg-center bg-fixed relative"
        style={{
          backgroundImage: ` url(${relax})`,
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 space-y-4">
          <div
            className="font-playfair text-3xl md:text-5xl font-medium text-white text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Relax and Enjoy your Holiday
          </div>
          <div
            className="font-rubik text-lg text-center md:text-xl font-medium text-white px-5 md:px-40"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quidem tempore expedita facere facilis, dolores!
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxEnjoy;
