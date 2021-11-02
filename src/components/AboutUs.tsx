import React from "react";
import { FaDollarSign, FaHeadset, FaShippingFast } from "react-icons/fa";

import aboutImage from "../assets/about-img.png";

import css from "./AboutUs.module.css";
interface Props {}

export const AboutUs: React.FC<Props> = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.subtitle}>About Us</div>
        <div className={css.title}>WHY CHOOSE US?</div>
      </div>
      <div className={css.body}>
        <div className={css.image}>
          <img src={aboutImage} alt="" />
        </div>
        <div className={css.info}>
          <div>
            <div className={css.title}>Best Food In The Country</div>
            <p className={css.text}>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore,
              Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi
              Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta
              Odio Corporis Nihil! <br /> Lorem Ipsum Dolor Sit Amet,
              Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos
              Cumque Deleniti Iste Alias, Eum Natus.
            </p>
            <div className={css.badges}>
              <div className={css.badge}>
                <FaShippingFast />
                <span>Free Delivery</span>
              </div>
              <div className={css.badge}>
                <FaDollarSign />
                <span>Easy Payment</span>
              </div>
              <div className={css.badge}>
                <FaHeadset />
                <span>24/7 Service</span>
              </div>
            </div>
            <div>
              <button className={css.btn}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
