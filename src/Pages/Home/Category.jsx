import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mt-16">
      <SectionTitle
        heading="Order Online"
        subHeading="From 11.00am to 10.00pm"
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide className="mb-12">
          <img src={slide1} alt="" />
          <h1 className="text-3xl text-white -mt-12 text-center uppercase">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-3xl text-white -mt-12 text-center uppercase">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-3xl text-white -mt-12 text-center uppercase">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-3xl text-white -mt-12 text-center uppercase">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-3xl text-white -mt-12 text-center uppercase">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
