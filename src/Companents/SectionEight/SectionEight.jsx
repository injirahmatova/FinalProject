import React from "react";
import styles from "../../Companents/SectionEight/SectionEight.module.scss";
const SectionEight = () => {
  return (
    <div className={styles.sectionEight}>
      <div className={styles.containerEight}>
        <div className={styles.title}>
          <h2>Mağazalar</h2>
          <p>
            Aşağıdakı tariflər standart tariflərimizdir. Kampaniya zamanı
            kampaniya tarifləri keçərlidir.
          </p>
        </div>
        <div className={styles.storesList}>
          <a href="https://www.patirti.com/" target="_blank">
            <img
              src="https://kango.az/storage/shops/107.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://gap.com.tr/" target="_blank">
            <img
              src="https://kango.az/storage/shops/105.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.flo.com.tr/" target="_blank">
            <img
              src="https://kango.az/storage/shops/104.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.alacatistili.com/" target="_blank">
            <img
              src="https://kango.az/storage/shops/103.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.karaca.com/" target="_blank">
            <img
              src="https://kango.az/storage/shops/102.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.trendyol.com/" target="_blank">
            <img
              src="https://kango.az/storage/shops/101.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.boyner.com.tr/kampanyalar-c-3340249" target="_blank">
            <img
              src="https://kango.az/storage/shops/100.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.camper.com/tr_TR" target="_blank">
            <img
              src="https://kango.az/storage/shops/99.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www2.hm.com/tr_tr/index.html" target="_blank">
            <img
              src="https://kango.az/storage/shops/98.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://bebetto.com.tr/tr/sayfa/anasayfa" target="_blank">
            <img
              src="https://kango.az/storage/shops/97.png"
              alt="team-thumb"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
// import React, { useState, useEffect } from "react";
// import styles from "../../Companents/SectionEight/SectionEight.module.scss";

// const SectionEight = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Slaytların listesi
//   const slides = [
//     "https://kango.az/storage/shops/97.png",
//     "https://kango.az/storage/shops/98.png",
//     "https://kango.az/storage/shops/99.png",
//     "https://kango.az/storage/shops/100.png",
//     "https://kango.az/storage/shops/101.png",
//     "https://kango.az/storage/shops/102.png",
//     "https://kango.az/storage/shops/103.png",
//     "https://kango.az/storage/shops/104.png",
//     "https://kango.az/storage/shops/105.png",
//     "https://kango.az/storage/shops/106.png",
//   ];

//   useEffect(() => {
//     // Otomatik geçiş için interval oluştur
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3 saniyede bir geçiş yap

//     // Component unmount olduğunda interval'i temizle
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className={styles.sectionEight}>
//       <div className={styles.containerEight}>
//         <div className={styles.title}>
//           <h2>Mağazalar</h2>
//           <p>
//             Aşağıdaki mağazalar standart mağazalarımızdır. Kampanya zamanı
//             kampanya mağazaları geçerlidir.
//           </p>
//         </div>
//         <div className={styles.carousel}>
//           <div className={styles.slider}>
//             {slides.map((slide, index) => (
//               <img
//                 key={index}
//                 className={index === currentIndex ? styles.slideActive : styles.slideInactive}
//                 src={slide}
//                 alt={`Store ${index + 1}`}
//               />
//             ))}
//           </div>
//           <div className={styles.controls}>
//             <button className={styles.controlButton} onClick={handlePrevSlide}>
//               &#60;
//             </button>
//             <button className={styles.controlButton} onClick={handleNextSlide}>
//               &#62;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionEight;
