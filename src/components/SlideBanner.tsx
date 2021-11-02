import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import homeImage1 from "../assets/home-img-1.png";
import homeImage2 from "../assets/home-img-2.png";
import homeImage3 from "../assets/home-img-3.png";

import css from "./SlideBanner.module.css";

interface Props {}

export const SlideBanner: React.FC<Props> = () => {
  return (
    <div className={css.wrapper}>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className={css.slide}>
            <div>
              <div className={css.subtitle}>Our Special Dish</div>
              <div className={css.title}>Spicy Noodles</div>
              <div className={css.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                similique ipsum minus quo consectetur, totam quia exercitationem
                eius veniam fugit, earum tempora officiis. Vel tempora provident
                quaerat consectetur! Nemo, necessitatibus!
              </div>
              <button className={css.btn}>Order Now</button>
            </div>
            <div className={css.image}>
              <img src={homeImage1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slide}>
            <div>
              <div className={css.subtitle}>Our Special Dish</div>
              <div className={css.title}>Spicy Noodles</div>
              <div className={css.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                similique ipsum minus quo consectetur, totam quia exercitationem
                eius veniam fugit, earum tempora officiis. Vel tempora provident
                quaerat consectetur! Nemo, necessitatibus!
              </div>
              <button className={css.btn}>Order Now</button>
            </div>
            <div className={css.image}>
              <img src={homeImage2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slide}>
            <div>
              <div className={css.subtitle}>Our Special Dish</div>
              <div className={css.title}>Spicy Noodles</div>
              <div className={css.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                similique ipsum minus quo consectetur, totam quia exercitationem
                eius veniam fugit, earum tempora officiis. Vel tempora provident
                quaerat consectetur! Nemo, necessitatibus!
              </div>
              <button className={css.btn}>Order Now</button>
            </div>
            <div className={css.image}>
              <img src={homeImage3} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
