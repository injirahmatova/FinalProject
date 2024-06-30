import React from "react";
import styles from "../../Companents/SectionThree/SectionThree.module.scss";
import { FaManatSign } from "react-icons/fa6";
const SectionThree = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.containerThree}>
        <div className={styles.title}>
          <h2>Tariflərimiz</h2>
          <p>
            Diqqət! Azərbaycan Respublikası milli valyutasının devalvasiyasına
            uyğun olaraq, tariflərimizdə ABŞ dolları ekvivalentinə uyğun
            dəyişikliklər edilə bilər.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h5>STANDART VƏ MAYE</h5>
              <p>Bakı şəhəri üzrə</p>
            </div>

            <ul className={styles.cardList}>
              <li>
                <span>0 - 100 qr</span>
                <p>
                  {" "}
                  2.2 <FaManatSign />{" "}
                </p>{" "}
              </li>
              <li>
                <span>101 qr - 250 qr</span>{" "}
                <p>
                  3.38 <FaManatSign />
                </p>
              </li>
              <li>
                <span>251 qr - 500 qr</span>{" "}
                <p>
                  5.08
                  <FaManatSign />
                </p>
              </li>
              <li>
                <span>501 qr - 1 kg</span>{" "}
                <p>
                  6.51
                  <FaManatSign />
                </p>
              </li>
              <li>
                <span>1 kg üzərində</span>{" "}
                <p>
                  x 6.51
                  <FaManatSign />
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h5>STANDART VƏ MAYE</h5>
              <p>Abşeron və Sumqayıt şəhərləri üzrə</p>
            </div>

            <ul className={styles.cardList}>
              <li>
                <span>0 - 100 qr</span>
                <p>
                  {" "}
                  2.2 <FaManatSign />{" "}
                </p>{" "}
              </li>
              <li>
                <span>101 qr - 250 qr</span>{" "}
                <p>
                  3.38 <FaManatSign />
                </p>
              </li>
              <li>
                <span>251 qr - 500 qr</span>{" "}
                <p>
                  5.08
                  <FaManatSign />
                </p>
              </li>
              <li>
                <span>501 qr - 1 kg</span>{" "}
                <p>
                  6.51
                  <FaManatSign />
                </p>
              </li>
              <li>
                <span>1 kg üzərində</span>{" "}
                <p>
                  x 6.51
                  <FaManatSign />
                </p>
              </li>
            </ul>
          </div>

 <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h5>HƏCMSƏL MƏHSULLAR ÜZRƏ</h5>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.bodyText}>
              Üç tərəfinin (en, uzunluq, hündürlük) cəmi 1 metrdən çox olan
              bağlamalar həcmsəl çəki kimi hesablanır. Həcmsəl çəki = En x
              Uzunluq x Hündürlük / 6000 
              <span>
                x 6.51 <FaManatSign />
              </span>
            </div>
            <div className={styles.bodyIcon}>
              <img
                src="https://kango.az/new-assets/images/box_icon.png"
                alt=""
              />
            </div>
          </div>
        </div>



        </div>
       
      </div>
    </div>
  );
};

export default SectionThree;
