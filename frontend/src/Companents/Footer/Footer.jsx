import React from "react";
import styles from "../../Companents/Footer/Footer.module.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigation= useNavigate()
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            
              <img
                src="https://kango.az/new-assets/images/grey-logo.svg"
                alt="" onClick={() => navigation('/')} 
              />
           
            <div className={styles.socialList}>
              <a href="https://www.facebook.com/kango.az" target="_blank">
                <img
                  src="https://kango.az/new-assets/images/icons8-facebook-25.png"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/kango.az/" target="_blank">
                <img
                  src="https://kango.az/new-assets/images/icons8-instagram-25.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkW4Uv3lKmwC34hpqpfu4pw/videos"
                target="_blank"
              >
                <img
                  src="https://kango.az/new-assets/images/icons8-youtube-25.png"
                  alt=""
                />
              </a>
            </div>
            <a href="">+99412 525 43 43</a>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href=""  onClick={() => navigation('/haqqımızda')}>Haqqımızda</a></li>
                <li><a href="" onClick={() => navigation('/tarifler')}>Tariflər</a></li>
                <li><a href="" onClick={() => navigation('/xidmətlər')}>Xidmətlər</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href="" onClick={() => navigation('/mağazalar')}>Mağazalar</a></li>
                <li><a href=""onClick={() => navigation('/suallar')} >Suallar</a></li>
                <li><a  href=""onClick={() => navigation('/filiallar')}>Filiallar</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a onClick={() => navigation('/daşınma şərtləri')} href="">Daşınma şərtləri</a></li>
                <li><a onClick={() => navigation('/şəxsi məlumatların qorunması')} href="">Şəxsi məlumatların qorunması</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
            <p>© 2024 Kango.az | Bütün Hüquqlar Qorunur</p>
            <div className={styles.bottomLogo}>
                <img src="https://kargolux.az/kargolux/assets/images/icons/visamaster.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
