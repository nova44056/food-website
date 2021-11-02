import React from "react";
import css from "./Header.module.css";
import {
  FaBars,
  FaCartPlus,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUtensils,
} from "react-icons/fa";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <div className={css.icon}>
          <FaUtensils />
        </div>
        <span>Resto.</span>
      </div>
      <nav className={css.nav}>
        <ul>
          <li className={css.active}>
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
      </nav>
      <div className={css.icons}>
        <MobileNav />
        <div>
          <FaSearch />
        </div>
        <div>
          <FaHeart />
        </div>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

const MobileNav: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <div
      onClick={() => {
        document.querySelector(`.${css.nav}`)?.classList.toggle(css.expand);
        setActive(!active);
      }}
    >
      {active ? <FaTimes /> : <FaBars />}
    </div>
  );
};
