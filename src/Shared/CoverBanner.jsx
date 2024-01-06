import { Parallax } from "react-parallax";

const CoverBanner = ({ bgimg, title }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={bgimg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center  text-neutral-content ">
          <div className="w-[400px] text-center p-8 md:py-8 md:pt-8 lg:py-12 lg:pt-20 md:h-[200px] lg:h-[300px] md:w-[600px] lg:w-[980px] bg-[#15151599]">
            <h1 className="mb-5 text-xl md:text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverBanner;
