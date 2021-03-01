import Nav from "./Nav";
import front from "../assets/img/hotel.jpg";
import FrontPage from "./FrontPage";
import FeatureRoom from "./room/FeatureRoom";
import Enjoy from "./Enjoy";
const Home = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <main
        className="w-full min-h-screen flex flex-col  bg-fixed"
        style={{
          backgroundImage: ` url(${front})`,
        }}
      >
        <Nav />
        <FrontPage />
      </main>
      <Enjoy />
      <FeatureRoom />
      {/* <RelaxEnjoy /> */}
      {/* <RecentBlogs /> */}
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
