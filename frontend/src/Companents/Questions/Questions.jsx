import React, { useState } from "react";
import styles from "../../Companents/Questions/Questions.module.scss";
const Questions = () => {

    const [panelOpen, setPanelOpen] = useState(false);
  
    const togglePanel = () => {
      setPanelOpen(!panelOpen); // State'i tersine çevirerek toggle yap
    };


  return (
    <div className={styles.questions}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Ən çox verilən Suallar</h2>
          <p>Bizə sualınız var? Biz sizə yardım etmək üçün buradayıq!</p>
        </div>
        <div className={styles.questionList}>
          <div className={styles.accordion}>
            <div onClick={togglePanel} className={styles.accordionHeading}>
              Necə sifariş edə bilərəm?
              
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={styles.accordionPanel}>
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={styles.accordionPanel}>
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
          <div className={styles.accordion}>
          <div onClick={togglePanel} className={styles.accordionHeading}>
              <h5>Necə sifariş edə bilərəm?</h5>
              <span></span>
            </div>
            <div className={`${styles.accordionPanel} ${
                panelOpen ? styles.panelOpen : ""
                }`}
            >
              <p>
                Türkiyənin istənilən onlayn mağazalarından sifariş edə
                bilərsiniz. Bunun üçün ilk öncə www.kango.az saytından
                qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz
                onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində
                şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd
                etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını
                istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq
                məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş
                edirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Questions
