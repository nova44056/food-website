import React from "react";
import { FaEye, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

import dish1 from "../assets/dish-1.png";
import dish2 from "../assets/dish-2.png";
import dish3 from "../assets/dish-3.png";
import dish4 from "../assets/dish-4.png";
import dish5 from "../assets/dish-5.png";
import dish6 from "../assets/dish-6.png";

import css from "./PopularDishes.module.css";
interface Props {}

export const PopularDishes: React.FC<Props> = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.subtitle}>Our dishes</div>
        <div className={css.title}>Popular Dishes</div>
      </div>
      <div className={css.grid}>
        {[dish1, dish2, dish3, dish4, dish5, dish6].map((image) => (
          <Card image={image} />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt="" />
      </div>
      <div className={css.title}>Tasty Food</div>
      <div className={css.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <div className={css.footer}>
        <div className={css.subtitle}>$15.99</div>
        <button className={css.btn}>Add to Cart</button>
      </div>
      <div className={`${css.icon} ${css.left}`}>
        <FaEye />
      </div>
      <div className={`${css.icon} ${css.right}`}>
        <FaHeart />
      </div>
    </div>
  );
};
