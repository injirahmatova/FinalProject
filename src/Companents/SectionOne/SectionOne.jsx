import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS dosyasını import edin
import { Carousel } from "bootstrap"; // Bootstrap Carousel componentini import edin
import styles from "../../Companents/SectionOne/SectionOne.module.scss";

const SectionOne = () => {
  // Carousel component'i için ref oluşturun
  const carouselRef = React.useRef(null);

  // Component render edildiğinde Carousel'ı initialize edin
  React.useEffect(() => {
    const carousel = carouselRef.current;
    new Carousel(carousel, {
      interval: 2000, // Otomatik geçiş süresi (ms)
      // Diğer Carousel seçenekleri buraya eklenebilir
    });
  }, []);

  return (
    <div className={styles.sectionOne}>
      <div className={styles.containerOne}>
        <div
          ref={carouselRef}
          id={styles.carouselExampleControls}
          className={`carousel slide ${styles.carouselSlide}`}
          data-bs-ride="carousel"
        >
          <div className={styles.carouselIndicators}>
            {/* Carousel için gösterge düğmeleri */}
            <button
              type="button"
              data-bs-target={`#${styles.carouselExampleControls}`}
              data-bs-slide-to="0"
              className={`${styles.activeCircle}`}
              style={{ height: "8px", width: "8px" }}
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target={`#${styles.carouselExampleControls}`}
              data-bs-slide-to="1"
              className={`${styles.roundedCircle}`}
              style={{ height: "8px", width: "8px" }}
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target={`#${styles.carouselExampleControls}`}
              data-bs-slide-to="2"
              className={`${styles.roundedCircle}`}
              style={{ height: "8px", width: "8px" }}
              aria-label="Slide 3"
            ></button>
          </div>
          <div className={`carousel-inner ${styles.carouselInner}`}>
            {/* Carousel içeriği */}
            <div className={`carousel-item ${styles.carouselItemActive}`}>
              <img
                src="https://kango.az/new-assets/images/slide_back.webp"
                alt="slider-background"
                draggable="false"
                className={`${styles.dBlock} ${styles.w100} ${styles.positionRelative}`}
              />
              <div className={styles.titlePositionAbsolute}>
                <p>
                  Həftədə 2-3 yox
                  <span>tam 7 reys ilə bağlamaların göndərilməsi</span>
                </p>
              </div>
              <div className={styles.imagePositionAbsolute}>
                <img
                  src="https://kango.az/storage/slider/7f116160-f0f6-4a66-b607-9e0eb983e22c.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="20000">
              <img
                src="https://kango.az/new-assets/images/slide_back.webp"
                alt="slider-background"
                draggable="false"
                className={`${styles.dBlock} ${styles.w100} ${styles.positionRelative}`}
              />
              <div className={styles.titlePositionAbsolute}>
                <p>
                  <strong>Türkiyənin onlayn mağazalardan </strong>
                  <strong>bağlamaların çatdırılması</strong>
                </p>
              </div>
              <div className={styles.imagePositionAbsolute}>
                <img
                  src="https://kango.az/storage/slider/7ff3f521-7cf2-43c3-94eb-7ab008643acc.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="20000">
              <img
                src="https://kango.az/new-assets/images/slide_back.webp"
                alt="slider-background"
                draggable="false"
                className={`${styles.dBlock} ${styles.w100} ${styles.positionRelative}`}
              />
              <div className={styles.titlePositionAbsolute}>
                <p>
                  Trendyol.com'da
                  <span>35'dən çox Filial / Gəl Al</span> nöqtələri
                </p>
              </div>
              <div className={styles.imagePositionAbsolute}>
                <img
                  src="https://kango.az/storage/slider/e3f58f43-fe31-439e-84f2-efffcb89cb4a.jpg"
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

export default SectionOne;
