import Nav from "./Nav";
import FrontPage from "./FrontPage";
import front from "../assets/img/hotel.jpg";
const Main = ({ title, button, subTitle }) => {
  return (
    <main
      className="w-full min-h-screen flex flex-col  bg-fixed"
      style={{
        backgroundImage: ` url(${front})`,
      }}
    >
      <Nav />
      <FrontPage title={title} subTitle={subTitle} button={button} />
    </main>
  );
};

export default Main;
