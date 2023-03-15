import React, { useState } from "react";
import favoritePhoto from "@/assets/images/shop.png";
import line from "@/assets/images/2Vector-2.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";

export const Header = () => {
  const [visiblity, setIsVisiblity] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsVisiblity(!visiblity);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container + " container"}>
        <nav className={styles.dekstop__navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/basket">
                <img src={favoritePhoto} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.mobile__navbar} onClick={toggleMenu}>
          <button className={styles.button}>
            <span>
              <img src={line} />
            </span>
            <span>
              <img src={line} />
            </span>
            <span>
              <img src={line} />
            </span>
          </button>
          <ul className={clsx(visiblity ? styles.visiblity : styles.hidden)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/basket">
                <img src={favoritePhoto} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
