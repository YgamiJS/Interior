import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { FeedBack } from "@/Components";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <FeedBack />
          <ul>
            <li className="medium-text">Support</li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
          </ul>
          <ul>
            <li className="medium-text">Useful Link</li>
            <li>
              <Link to="">Payment & Tax</Link>
            </li>
            <li>
              <Link to="">Team of service</Link>
            </li>
            <li>
              <Link to="">Privaci Policy</Link>
            </li>
          </ul>
          <ul>
            <li className="medium-text">Our Menu</li>
            <li>
              <Link to="">Best Product</Link>
            </li>
            <li>
              <Link to="">Category</Link>
            </li>
          </ul>
          <ul>
            <li className="medium-text">Address</li>
            <li>
              <Link to="">
                JL. Setiabudhi No. 193 Sukasari, Bandung
                <br /> West Java, Indonesia
              </Link>
            </li>
            <li>
              <Link to="">hallo@daunku.com</Link>
            </li>
          </ul>
        </div>
        <hr />
        <p>© 2023 davixq - All rights reserved.</p>
      </div>
    </footer>
  );
};
