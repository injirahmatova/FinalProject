import React from "react";
import styles from "../SectionTwo/SectionTwo.module.scss";
const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.containerTwo}>
        <div className={styles.title}>
          <h2>Kango.az necə işləyir?</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/new-assets/images/solar_document-add-linear.png"
                alt=""
              />
            </div>
            <h4>Qeydiyyat</h4>
            <p>
              İlk öncə qeydiyyat bölməsinə daxil olub, xanaları dolduraraq
              qeydiyyatdan keçin.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/new-assets/images/015-user-1%201.png"
                alt=""
              />
            </div>
            <h4>Şəxsi kabinet</h4>
            <p>
              Şəxsi kabinetinizə daxil olaraq Türkiyə ünvanınızı əldə edin.
              Sifarişlərinizi izləyin.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/new-assets/images/ph_shopping-cart-thin.png"
                alt=""
              />
            </div>
            <h4>Sifariş et</h4>
            <p>
              "Sifariş et"<br />
              düyməsinə daxil  <br />
              olaraq məhsulun <br />
              linkini bizə göndərin.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/new-assets/images/fluent_location-28-regular.png"
                alt=""
              />
            </div>
            <h4>Təhvil al</h4>
            <p>
              Sifarişiniz Türkiyə ofisimizə gəldikdən sonra yola salınır.
              Ofisimizdən təhvil ala bilərsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
