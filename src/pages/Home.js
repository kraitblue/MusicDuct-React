import React from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";


const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
    </div>
  );
};

export default Home;
