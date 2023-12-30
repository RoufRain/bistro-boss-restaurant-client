import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import featuredImage from "../../assets/home/featured.jpg";
import "../../../src/css/Featured.css";

const FeaturedItem = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-10">
      <SectionTitle subHeading="Check it out" heading="Featured item">
        {" "}
      </SectionTitle>

      <div className="md:flex  justify-center items-center  pb-12 pt-8 px-16">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2023</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum,
            harum sunt earum quaerat atque saepe at dolorem odit in pariatur ad
            commodi vel a dicta quasi repudiandae nobis! Eos, sequi laudantium
            sit veniam nesciunt voluptatum! Soluta porro aut eaque aliquam.
            Explicabo, magni corrupti inventore quod porro sapiente. Veniam,
            beatae.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
