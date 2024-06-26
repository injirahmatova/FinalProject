import React from 'react'
import { GoArrowRight } from "react-icons/go";

import styles from "../../Companents/SectionFive/SectionFive.module.scss"
import { useNavigate } from 'react-router-dom';
const SectionFive = () => {
  const navigation= useNavigate()
  return (
    <div className={styles.sectionFive}>
      <div className={styles.containerFive}>
        <div className={styles.containerTop}>
          <h2>Haqqımızda</h2>
        </div>
        <div className={styles.containerBottom }>
          <div className={styles.left}>
            <img src="https://kango.az/new-assets//images/about.png" alt="" />
          </div>
          <div className={styles.right}>
            <p>“Kango" MMC  "KANGO"MMC nin fəaliyyəti daşıyıcı şirkət olmasıdır. Azərbaycanın ən sürətli və güvənili karqo şirkəti olmaq üçün yola çıxdıq. Şirkətimiz Türkiyənin onlayn alış-veriş səhifələrinin daha əlçatan olması məqsədi ilə qurulmuşdur. İş prinsipimiz, bütün Türk  onlayn alış-veriş mağazalarının (Trendyol, Morhipo, Hepsiburada, Koton, Zara, LC Waiki və s.) Azərbaycana birbaşa göndərməkdən imtina etdikləri məhsulları müştərilərimizə daha rahat və daha münasib qiymətə çatdırmaqdır. Şirkətimiz  ...</p>
           <button onClick={() => navigation('/haqqımızda')}>Daha Ətraflı <GoArrowRight /></button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive
