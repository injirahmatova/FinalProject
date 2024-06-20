import React from "react";
import styles from "../../Companents/Footer/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <a href="https://kango.az/" target="_blank">
              <img
                src="https://kango.az/new-assets/images/grey-logo.svg"
                alt=""
              />
            </a>
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
                <li><a href="">Haqqımızda</a></li>
                <li><a href="">Tariflər</a></li>
                <li><a href="">Xidmətlər</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href="">Mağazalar</a></li>
                <li><a href="">Suallar</a></li>
                <li><a href="">Filiallar</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href="">Daşınma şərtləri</a></li>
                <li><a href="">Şəxsi məlumatların qorunması</a></li>
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
