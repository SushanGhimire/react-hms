import FeatureRoom from "./room/FeatureRoom";
import Enjoy from "./Enjoy";
import RelaxEnjoy from "./RelaxEnjoy";
import RecentBlog from "./blogs/RecentBlog";
import Footer from "./Footer";
import Main from "./Main";
const Home = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Main
        title="Welcome To Our Luxury Rooms"
        subTitle=" Discover our world's #1 Luxury Room For VIP."
        button=""
      />
      <Enjoy />
      <FeatureRoom />
      <RelaxEnjoy />
      <RecentBlog />
      <Footer />
    </section>
  );
};

export default Home;
