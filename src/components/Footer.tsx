import React from "react";
import css from "./Footer.module.css";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        <div>
          <div className={css.title}>Location</div>
          <ul className={css.links}>
            <li>
              <a href="#">India</a>
            </li>
            <li>
              <a href="#">Japan</a>
            </li>
            <li>
              <a href="#">Russia</a>
            </li>
            <li>
              <a href="#">USA</a>
            </li>
            <li>
              <a href="#">France</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={css.title}>Quick Links</div>
          <ul className={css.links}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dishes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={css.title}>Contact Info</div>
          <ul className={css.links}>
            <li>
              <a href="#">+123-456-7890</a>
            </li>
            <li>
              <a href="#">+111-222-3333</a>
            </li>
            <li>
              <a href="#">Shaikhanas@Gmail.Com</a>
            </li>
            <li>
              <a href="#">Anasbhai@Gmail.Com</a>
            </li>
            <li>
              <a href="#">Mumbai, India - 400104</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={css.title}>Follow Us</div>
          <ul className={css.links}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.copyright}>
        <div>
          Copyright @ 2021 By{" "}
          <span style={{ color: "var(--green)", fontWeight: 500 }}>
            Mr. Web Designer
          </span>
        </div>
      </div>
    </div>
  );
};
