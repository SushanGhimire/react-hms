import BookNowComponent from "./BookNowComponent";
import Footer from "./Footer";
import Main from "./Main";
import RelaxEnjoy from "./RelaxEnjoy";

const BookNow = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Main
        title="Reservation"
        subTitle=" Discover our world's #1 Luxury Room For VIP."
        button="hidden"
      />
      <BookNowComponent />
      <RelaxEnjoy />
      <Footer />
    </section>
  );
};

export default BookNow;
