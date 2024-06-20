// import React from "react";

// import styles from "../../Companents/SectionOne/SectionOne.module.scss";

// const SectionOne = () => {

//   return (
//     <div className={styles.sectionOne}>
//       <div className={styles.containerOne}>

//           <div className={styles.carousel}>
//             <div className={styles.content}>
//               <p>
//                 Həftədə 2-3 yox<br/>
//                 <span>tam 7 reys ilə bağlamaların göndərilməsi</span>{" "}
//               </p>
//             </div>
//             <div className={styles.photo}>
//               <img
//                 src="https://kango.az/storage/slider/7f116160-f0f6-4a66-b607-9e0eb983e22c.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className={styles.carousel}>
//             <div className={styles.content}>
//             <p>
//                    <strong>Türkiyənin onlayn mağazalardan </strong>
//                    <strong>bağlamaların çatdırılması</strong>
//                  </p>
//             </div>
//             <div className={styles.photo}>
//             <img
//                    src="https://kango.az/storage/slider/7ff3f521-7cf2-43c3-94eb-7ab008643acc.jpg"
//                   alt=""
//                />
//             </div>
//           </div>
//           <div className={styles.carousel}>
//             <div className={styles.content}>
//             <p>
//                 Trendyol.com'da
//                    <span>35'dən çox Filial / Gəl Al</span> nöqtələri
//                 </p>
//             </div>
//             <div className={styles.photo}>
//             <img
//                 src="https://kango.az/storage/slider/e3f58f43-fe31-439e-84f2-efffcb89cb4a.jpg"
//                   alt=""
//                 />
//             </div>
//           </div>
//           </div>
//       </div>

//   );
// };


import React, { useState, useEffect } from "react";
import styles from "../../Companents/SectionOne/SectionOne.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://kango.az/storage/slider/7f116160-f0f6-4a66-b607-9e0eb983e22c.jpg",
      text: "Həftədə 2-3 yox\n" + "<span>tam 7 reys ilə bağlamaların göndərilməsi</span>",
    },
    {
      image: "https://kango.az/storage/slider/7ff3f521-7cf2-43c3-94eb-7ab008643acc.jpg",
      text: "<strong>Türkiyənin onlayn mağazalardan </strong><strong>bağlamaların çatdırılması</strong>",
    },
    // {
    //   image: "https://kango.az/storage/slider/e3f58f43-fe31-439e-84f2-efffcb89cb4a.jpg",
    //   text: "Trendyol.com'da\n" + "<span>35'dən çox Filial / Gəl Al</span> nöqtələri",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 saniyede bir geçiş yap

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sectionOne}>
      <div className={styles.containerOne}>
        <div className={styles.carousel}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: slides[currentIndex].text }}
          />
          <div className={styles.photo}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={index === currentIndex ? styles.active : styles.inactive}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <IoIosArrowBack className={styles.arrowLeft} onClick={goToPrevSlide} />
            <IoIosArrowForward className={styles.arrowRight} onClick={goToNextSlide} />
          </div>
          <div className={styles.dots}>
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={index === currentIndex ? styles.dotActive : styles.dot}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
