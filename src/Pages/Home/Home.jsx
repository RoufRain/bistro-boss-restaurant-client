import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import SecondBanner from "./SecondBanner";
import FeaturedItem from "./FeaturedItem";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner> </Banner>
      <Category> </Category>
      <SecondBanner> </SecondBanner>
      <PopularMenu> </PopularMenu>
      <FeaturedItem> </FeaturedItem>
      <Testimonial> </Testimonial>
    </div>
  );
};

export default Home;
