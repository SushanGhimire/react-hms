import Main from "./Main";
import smallImage from "../assets/img/hotelEnjoy1.jpg";
import Staffs from "./Staffs";
import RelaxEnjoy from "./RelaxEnjoy";
import Footer from "./Footer";
const About = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Main
        title="About Luxury Hotel"
        subTitle=" Discover our world's #1 Luxury Room For VIP."
        button="hidden"
      />
      <div className="w-full md:flex md:space-x-4 md:pl-20 mt-20">
        <div className="flex flex-col text-center items-center justify-center space-y-4 px-5 md:pr-10">
          <div className="text-sm font-semibold px-5 font-rubik text-gray-400 tracking-widest">
            STAY WITH OUR LUXURY ROOMS
          </div>
          <div className="font-playfair text-4xl md:text-5xl px-5">
            Our Story
          </div>
          <div className="font-rubik text-gray-500 flex flex-col space-y-3 text-justify">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              illo similique natus, a recusandae? Dolorum, unde a quibusdam est?
              Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui
              delectus tempore amet!
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              illo similique natus, a recusandae? Dolorum, unde a quibusdam est?
              Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui
              delectus tempore amet!
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              illo similique natus, a recusandae? Dolorum, unde a quibusdam est?
              Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui
              delectus tempore amet!
            </span>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <img src={smallImage} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <Staffs />
      <RelaxEnjoy />
      <Footer />
    </section>
  );
};

export default About;
