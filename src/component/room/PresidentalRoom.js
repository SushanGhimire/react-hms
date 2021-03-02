import Footer from "../Footer";
import Main from "../Main";
import RelaxEnjoy from "../RelaxEnjoy";
import BigRoom from "./BigRoom";

const PresidentalRoom = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Main
        title="Our Rooms"
        subTitle=" Discover our world's #1 Luxury Room For VIP."
        button="hidden"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-20 my-10">
        {Array.from(Array(9), (e, i) => {
          return (
            <div className="col-span-1" key={i}>
              <BigRoom />
            </div>
          );
        })}
      </div>
      <RelaxEnjoy />
      <Footer />
    </section>
  );
};

export default PresidentalRoom;
