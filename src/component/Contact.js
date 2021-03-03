import ContactComponent from "./ContactComponent";
import Footer from "./Footer";
import Main from "./Main";
import RelaxEnjoy from "./RelaxEnjoy";
const Contact = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden font-rubik">
      <Main
        title="Contact Our Hotel"
        subTitle=" Discover our world's #1 Luxury Room For VIP."
        button="hidden"
      />
      <ContactComponent />
      <RelaxEnjoy />
      <Footer />
    </section>
  );
};

export default Contact;
