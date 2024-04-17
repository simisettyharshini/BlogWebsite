import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import banner from "../../assets/images/banner.png"
export const Home = () => {
  return (
    <>
      <img src={banner} alt="" />
      <Category />
      <Card />
    </>
  );
};
