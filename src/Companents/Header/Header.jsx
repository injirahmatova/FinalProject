import React from "react";
import styles from "../Header/Header.module.scss";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.containerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.number}>
              <div className={styles.icon}>
                {" "}
                <FiPhoneCall />
              </div>
              <span>+99412 525 43 43</span>
            </div>
            <div className={styles.title}>
              <a href="">Daşınma şərtləri</a>
              <a href="">Şəxsi məlumatların qorunması</a>
            </div>
          </div>

          <div className={styles.headerTopRight}>
            <a href="">QEYDİYYAT</a>
            <span> / </span>
            <a href="">DAXİL OL</a>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.containerBottom}>
          <div className={styles.logo}>
            <img src="https://kango.az/new-assets/images/logo.svg" alt="" />
          </div>
          <div className={styles.navBar}>
            <ul>
              <li>
                <a href="">Haqqımızda</a>
              </li>
              <li>
                <a href="">Filiallar</a>
              </li>
              <li>
                <a href="">Tariflər</a>
              </li>
              <li>
                <a href="">Xidmətlər</a>
              </li>
              <li>
                <a href="">Mağazalar</a>
              </li>
              <li>
                <a href="">Xəbərlər</a>
              </li>
              <li>
                <a href="">Suallar</a>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <button>SİFARİŞ ET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
