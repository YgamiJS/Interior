import { useState } from "react";
import favoritePhoto from "@/assets/images/shop.png";
import line from "@/assets/images/2Vector-2.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const auth = useAuth();
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
              <Link to="/Interior/">Home</Link>
            </li>
            <li>
              <Link to="/Interior/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Interior/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Interior/Contact">Contact</Link>
            </li>
            {!auth.isAuth && (
              <>
                <li>
                  <Link to="/Interior/login">Login</Link>
                </li>
                <li>
                  <Link to="/Interior/singin">Sing In</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Interior/basket">
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
              <Link to="/Interior/">Home</Link>
            </li>
            <li>
              <Link to="/Interior/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Interior/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Interior/Contact">Contact</Link>
            </li>
            {!auth.isAuth && (
              <>
                <li>
                  <Link to="/Interior/login">Login</Link>
                </li>
                <li>
                  <Link to="/Interior/singin">Sing In</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Interior/basket">
                <img src={favoritePhoto} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
