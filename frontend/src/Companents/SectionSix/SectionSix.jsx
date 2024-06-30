import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import styles from "../../Companents/SectionSix/SectionSix.module.scss";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const SectionSix = () => {
  return (
    <div className={styles.sectionSix}>
      <div className={styles.containerSix}>
        <div className={styles.title}>
          <h2>Ən Son Yeniliklərimiz</h2>
        </div>
     <div className={styles.cards}>
      <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/news/thumbs//turliyeden-bezek-esyalari-sifarisi.jpg"
                alt=""
              />
            </div>
            <div className={styles.content}>
              <span>
                <CiCalendar /> 2 həftə əvvəl{" "}
              </span>
              <h4>Türkiyədən bəzək əşyaları sifarişi</h4>
              <p>
                Türkiyə son illərdə məşhur alış-veriş məkanına çevrilib. Unikal
                məhsullar, sərfə
              </p>
              <span className={styles.arrow}><IoIosArrowRoundForward /></span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/news/thumbs//turliyeden-bezek-esyalari-sifarisi.jpg"
                alt=""
              />
            </div>
            <div className={styles.content}>
              <span>
                <CiCalendar /> 2 həftə əvvəl{" "}
              </span>
              <h4>Türkiyədən bəzək əşyaları sifarişi</h4>
              <p>
                Türkiyə son illərdə məşhur alış-veriş məkanına çevrilib. Unikal
                məhsullar, sərfə
              </p>
              <span className={styles.arrow}><IoIosArrowRoundForward /></span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/news/thumbs//turliyeden-bezek-esyalari-sifarisi.jpg"
                alt=""
              />
            </div>
            <div className={styles.content}>
              <span>
                <CiCalendar /> 2 həftə əvvəl{" "}
              </span>
              <h4>Türkiyədən bəzək əşyaları sifarişi</h4>
              <p>
                Türkiyə son illərdə məşhur alış-veriş məkanına çevrilib. Unikal
                məhsullar, sərfə
              </p>
              <span className={styles.arrow}><IoIosArrowRoundForward /></span>
            </div>
          </div>
     </div>
          
          </div>
      </div>
  
  );
};

export default SectionSix;
