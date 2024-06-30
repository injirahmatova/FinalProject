import React, { useEffect, useState } from "react";
import styles from '../../Companents/Brands/Brands.module.scss';
import { useSelector } from "react-redux";
import { selectBrands } from "../../Redux/Slices/brandSlice";

const Brands = () => {
  const brands = useSelector(selectBrands);
  const [currentIndex, setCurrentIndex] = useState(0);

  // looping uchun elave kopyalar daxil olmaqla umumi slayd sayi
  const totalSlides = brands.length * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 1000); // her 1 saniyeden slaydi deyishdirir

    return () => clearInterval(interval);
  }, [totalSlides]);

  // brandsdaki markalari dovre salmaq uchun 3 defe tekrarlanmish dovr yaradri
  const loopingBrands = [...brands, ...brands, ...brands];

  return (
    <div className={styles.brandsSlide}>
      <div className={styles.slideshowContainer}>
        <div className={styles.title}>
          <h2>Mağazalar</h2>
          <p>
            Aşağıdakı tariflər standart tariflərimizdir. Kampaniya zamanı
            kampaniya tarifləri keçərlidir.
          </p>
        </div>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}px)` }}
        >
          {loopingBrands.map((brand, index) => (
            <div key={index} className={styles.slide}>
              <img src={brand.url} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

