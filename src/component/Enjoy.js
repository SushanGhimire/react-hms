import smallImage from "../assets/img/hotelEnjoy.jpg";
const Enjoy = () => {
  return (
    <div className="w-full md:flex md:space-x-4 md:pl-20 mt-20">
      <div
        className="flex flex-col text-center items-center justify-center space-y-4 px-5 md:pr-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="text-sm font-semibold px-5 font-rubik text-gray-400 tracking-widest">
          STAY WITH OUR LUXURY ROOMS
        </div>
        <div className="font-playfair text-4xl md:text-5xl px-5">
          Stay and Enjoy
        </div>
        <div className="font-rubik text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo
          similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis
          deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus
          tempore amet!
        </div>
        <button className="button">MORE ABOUT US</button>
      </div>
      <div
        className="mt-5 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={smallImage} alt="" />
      </div>
    </div>
  );
};

export default Enjoy;
