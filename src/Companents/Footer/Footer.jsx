import React from "react";
import styles from "../../Companents/Footer/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <a href="http://localhost:3000/"  title="Kango.az">
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
                <li><a href="http://localhost:3000/haqq%C4%B1m%C4%B1zda">Haqqımızda</a></li>
                <li><a href="http://localhost:3000/tarifler">Tariflər</a></li>
                <li><a href="http://localhost:3000/xidm%C9%99tl%C9%99r">Xidmətlər</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href="http://localhost:3000/ma%C4%9Fazalar">Mağazalar</a></li>
                <li><a href="http://localhost:3000/suallar">Suallar</a></li>
                <li><a href="http://localhost:3000/filiallar">Filiallar</a></li>
            </ul>
          </div>
          <div className={styles.topBlock}>
            <ul>
                <li><a href="http://localhost:3000/da%C5%9F%C4%B1nma%20%C5%9F%C9%99rtl%C9%99ri">Daşınma şərtləri</a></li>
                <li><a href="http://localhost:3000/%C5%9F%C9%99xsi%20m%C9%99lumatlar%C4%B1n%20qorunmas%C4%B1">Şəxsi məlumatların qorunması</a></li>
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
