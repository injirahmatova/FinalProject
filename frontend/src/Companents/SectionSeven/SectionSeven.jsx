import React from "react";
import styles from "../../Companents/SectionSeven/SectionSeven.module.scss";
const SectionSeven = () => {
  return (
    <div className={styles.sectionSeven}>
      <div className={styles.containerSeven}>
        <div className={styles.content}>
          <h2>Mobil tətbiq</h2>
          <p>
            Kango.az mobil tətbiqini Apple Store və Google Play-dən yükləyə
            bilərsiniz.
          </p>
          <div className={styles.image}>
          <a href="https://apps.apple.com/us/app/kango-az/id1619490148" target="_blank">
          <img
              src="https://kango.az/new-assets//images/appstore.svg"
              alt="team-thumb"
            />
          </a>
          <a href="https://play.google.com/store/search?q=kango&c=apps" target="_blank">

             <img
              src="https://kango.az/new-assets//images/playstore.svg"
              alt="team-thumb"
            />
          </a>
           
          </div>
        </div>
        <div className={styles.photo}>
            <img src="https://kango.az/new-assets//images/app.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
