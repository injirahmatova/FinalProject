import React from "react";
import styles from "../../Companents/AboutUs/AboutUs.module.scss";
const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>HAQQIMIZDA</h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content}>
          
            <p>“Kango" MMC <br />
            "KANGO"MMC nin fəaliyyəti daşıyıcı şirkət olmasıdır. Azərbaycanın
              ən sürətli və güvənili karqo şirkəti olmaq üçün yola çıxdıq.
              Şirkətimiz Türkiyənin onlayn alış-veriş səhifələrinin daha əlçatan
              olması məqsədi ilə qurulmuşdur. İş prinsipimiz, bütün Türk onlayn
              alış-veriş mağazalarının (Trendyol, Morhipo, Hepsiburada, Koton,
              Zara, LC Waiki və s.) Azərbaycana birbaşa göndərməkdən imtina
              etdikləri məhsulları müştərilərimizə daha rahat və daha münasib
              qiymətə çatdırmaqdır. <br />
Şirkətimiz Azərbaycan Respublikasının qanunvericiliyinə uyğun
              olaraq əldə etdiyi lisenziya ilə həm ölkədaxili, həm də Türkiyədən
              sifarişlərin çatdırılmasını həyata keçirir. 35 filial ilə
              müştərilərimizə daha yaxın olmağa çalışırıq. Hədəfimiz
              Azərbaycanın bütün bölgələrində dövlətimizə və millətimizə xidmət
              etməkdir. <br />
Daha öncədədən əldə etdiyimiz təcrübələrə əsaslanaraq, keyfiyyətli
              xidmət edəcəyimizdən sizləri əmin edirik. <br />

            </p>
            
              
           
            
              
            
          </div>

          <div className={styles.image}>
            <img src="https://kango.az/new-assets/images/2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
