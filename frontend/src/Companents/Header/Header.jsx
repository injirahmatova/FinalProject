import React from "react";
import styles from "../Header/Header.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";
import { toggleMenu, closeMenu } from '../../Redux/Slices/menuSlice';

const Header = () => {

  
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.menu.isOpen);
  const navigation= useNavigate()

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };
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
        <div className={styles.menu}>
            <button onClick={handleMenuToggle}><TiThMenu /></button>
            {isOpen && (
              <div className={styles.menuBar}>
                <div className={styles.close} onClick={handleMenuClose}>
                  <RiCloseLargeLine />
                </div>
                <ul>
                  <li onClick={() => navigation('/')}><a href="">Ana Səhifə</a></li>
                  <li onClick={() => navigation('/tariffs')}><a href="">Tariflər</a></li>
                  <li onClick={() => navigation('/shops')}><a href="">Mağazalar</a></li>
                </ul>
              </div>
            )}
          </div>       

          <div className={styles.logo}>
        <img onClick={() => navigation('/')} src="https://kango.az/new-assets/images/logo.svg" alt="" />
           
            
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
          <div className={styles.userIcon}>
          <CiUser />

          </div>
          <div className={styles.button}>
           <a onClick={() => navigation('/qeydiyyat')}  > <button>SİFARİŞ ET</button> </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
