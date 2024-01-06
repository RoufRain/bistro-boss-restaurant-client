import { useState } from "react";
import orderCoverImage from "../../assets/shop/banner2.jpg";
import CoverBanner from "../../Shared/CoverBanner";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  //for highlight tab when we click from menu page to order, with index number

  const [menu] = useMenu();

  console.log(category);

  const dessert = menu.filter((menu) => menu.category === "dessert");
  const soup = menu.filter((menu) => menu.category === "soup");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const salad = menu.filter((menu) => menu.category === "salad");
  const drinks = menu.filter((menu) => menu.category === "drinks");
  //   const offered = menu.filter((menu) => menu.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <CoverBanner title="Order Food" bgimg={orderCoverImage}>
        {" "}
      </CoverBanner>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
