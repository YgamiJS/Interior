import { useState } from "react";
import favoritePhoto from "@/assets/images/shop.png";
import line from "@/assets/images/2Vector-2.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/hooks/useRedux";

export const Header = () => {
  const favoriteProducts = useAppSelector(
    (state) => state.favoritesProducts.merchandises
  );
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
            <li className={styles.basket}>
              <Link to="/Interior/basket">
                <img src={favoritePhoto} alt="" />
              </Link>
              {favoriteProducts.length > 0 && (
                <div className={styles.countFavoriteProducts}>
                  {favoriteProducts.length}
                </div>
              )}
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
            <li className={styles.basket}>
              <Link to="/Interior/basket">
                <img src={favoritePhoto} alt="" />
              </Link>
              {favoriteProducts.length > 0 && (
                <div className={styles.countFavoriteProducts}>
                  {favoriteProducts.length}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
