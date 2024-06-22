import React from "react";
import styles from "../Header/Header.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation= useNavigate()
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
              <a onClick={() => navigation('/daşınma şərtləri')} href="">Daşınma şərtləri</a>
              <a onClick={() => navigation('/şəxsi məlumatların qorunması')} href="">Şəxsi məlumatların qorunması</a>
            </div>
          </div>

          <div className={styles.headerTopRight}>
            <a onClick={() => navigation('/qeydiyyat')} href="">QEYDİYYAT</a>
            <span> / </span>
            <a onClick={() => navigation('/daxil ol')} href="">DAXİL OL</a>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.containerBottom}>
          <div className={styles.logo}>
            <a href="http://localhost:3000/" title="Kango.az"><img src="https://kango.az/new-assets/images/logo.svg" alt="" />
            </a>
            
          </div>
          <div className={styles.navBar}>
            <ul>
              <li>
                <a onClick={() => navigation('/haqqımızda')} href="">Haqqımızda</a>
              </li>
              <li>
                <a onClick={() => navigation('/filiallar')} href="">Filiallar</a>
              </li>
              <li>
                <a onClick={() => navigation('/tarifler')}  href="">Tariflər</a>
              </li>
              <li>
                <a  onClick={() => navigation('/xidmətlər')} href="">Xidmətlər</a>
              </li>
              <li>
                <a onClick={() => navigation('/mağazalar')} href="">Mağazalar</a>
              </li>
              <li>
                <a onClick={() => navigation('/xəbərlər')} href="">Xəbərlər</a>
              </li>
              <li>
                <a onClick={() => navigation('/suallar')} href="">Suallar</a>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
           <a href="http://localhost:3002/daxil%20ol"> <button>SİFARİŞ ET</button> </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
