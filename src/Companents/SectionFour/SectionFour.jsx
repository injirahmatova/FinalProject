import React from 'react'
import styles from '../../Companents/SectionFour/SectionFour.module.scss'
const SectionFour = () => {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.containerFour}>
        <div className={styles.title}>
          <h2>Xidmətlərimiz</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/eb7838e6-df33-47e9-b847-5b342c94e00c.png"
                alt=""
              />
            </div>
            <h4>Türkiyədən “Çatdırılma ” xidməti</h4>
        <p>Kango.az Türkiyənin alış-veriş saytlarından online sifariş olunan malların, poçt bağlamaların Türkiyədən çatdırılmasını həyata keçirir. Türkiyədən qəbul olunmuş bağlamalar 3-6 iş günü ərzində müştərilərə çatdırılır. Qeyd edək ki, standart məhsullar həftənin hər iş günü, maye və bateryalı məhsullar isə həftədə 1 vəya 2 dəfə göndərişi icra olunur</p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/a8b31599-bc65-41b4-b743-35b02c8d67f4.png"
                alt=""
              />
            </div>
            <h4>“Kuryer” xidməti</h4>
            <p>
            Biz həmçinin Bakı anbarına daxil olmuş bağlamanızın istənilən ünvana çatdırılmasını da təşkil edirik. Bununla da siz vaxtınıza qənaət etmiş olursunuz. Qiymətlərlə bağlı tariflər bölməsində məlumat əldə edə bilərsiniz.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/830c1026-193f-43a2-b3b8-281c55687447.png"
                alt=""
              />
            </div>
            <h4>Geri qaytarma (Türkiyədən)</h4>
            <p>
            Türkiyə depomuza daxil olmuş defekt, yanlış və zədələnmiş formada çatdırılmış sifarişlərinizin, habelə iadə etmək istədiyiniz hərhansı bağlamanızı satıcı mağazaya geri qaytarılmasını həyata keçiririk. (bunun üçün satıcı mağazanın iadə xidməti aktiv olmalıdır)
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/2065115a-bfaa-4b8f-bef5-21546085d8fa.png"
                alt=""
              />
            </div>
            <h4>Tredyoldan birbaşa çatdırılma</h4>
            <p>
            Trendyol.com saytından birbaşa Azərbaycan ünvanınıza 35'dən çox Kango "GƏL AL" nöqtələrini seçərək sifariş edə bilərsiniz.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/ab5a1d2b-d3f4-440f-9137-ae83f1779d61.png"
                alt=""
              />
            </div>
            <h4>Emanat ilə balans artımı</h4>
            <p>
            Kango.az hesabınızdakı balansınızı E-manat ödəmə terminalları vasitəsi ilə artıra bilərsiniz
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="https://kango.az/storage/services/036f7a3f-ce93-45cd-9984-05fb8e81789a.png"
                alt=""
              />
            </div>
            <h4>Təcili Sifariş</h4>
            <p>
            HAZIRDA TƏCİLİ SİFARİŞ XİDMƏTİMİZ AKTİV DEYİLDİR.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
