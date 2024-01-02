import { Helmet } from "react-helmet-async";
import CoverBanner from "../../Shared/CoverBanner";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((menu) => menu.category === "dessert");
  const soup = menu.filter((menu) => menu.category === "soup");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const salad = menu.filter((menu) => menu.category === "salad");
  const offered = menu.filter((menu) => menu.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover image */}
      <CoverBanner bgimg={menuImage} title="our menu">
        {" "}
      </CoverBanner>

      <SectionTitle
        heading="Today's Offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      {/* offered section */}
      <MenuCategory items={offered}> </MenuCategory>
      {/* dessert section */}
      <MenuCategory items={dessert} title="dessert" coverImg={dessertImage}>
        {" "}
      </MenuCategory>
      {/* dessert section */}
      <MenuCategory items={pizza} title="pizza" coverImg={pizzaImage}>
        {" "}
      </MenuCategory>
      {/* dessert section */}
      <MenuCategory items={salad} title="salad" coverImg={saladImage}>
        {" "}
      </MenuCategory>
      {/* dessert section */}
      <MenuCategory items={soup} title="soup" coverImg={soupImage}>
        {" "}
      </MenuCategory>
    </div>
  );
};

export default Menu;
