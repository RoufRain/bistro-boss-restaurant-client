import img from "../../assets/home/chef-service.jpg";

const SecondBanner = () => {
  return (
    <div className="relative">
      <img src={img} alt="" className="h-[200px] md:h-64 lg:h-[572px] w-full" />
      <div
        className="bg-[#FFF] text-center absolute
      left-8 top-10 right-8 p-2   md:left-10 md:top-12 md:right-10 md:p-6 lg:left-24 lg:top-32 lg:right-24 lg:p-20 "
      >
        <h2 className="font-Cinzel md:text-xl lg:text-4xl font-normal text-[#151515] mb-2 text-center">
          Bistro Boss
        </h2>
        <p className="text-center font-Inter text-xs  md:text-lg lg:text-xl font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default SecondBanner;
