import React from "react";
import styles from "../../Companents/Stores/Stores.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {selectStores} from '../../Redux/Slices/storesSlice'

// const stores = [
//   {
//     category: "Avtomobil mehsullari" ,
//     img: "https://kango.az/storage/shops/59.png",
//     link: "https://www.aloparca.com/",
//   },
// ];

const Stores = () => {
  const dispatch = useDispatch();
  
  const categories =useSelector ((state) => state.stores.categories )
  const stores = useSelector((state) => state.stores.stores)
  const selectedCategory = useSelector((state) => state.stores.selectedCategory);

const filteredShops = selectedCategory
? stores.filter(stores => stores.category ===selectedCategory)
:  stores;
  // const handleStoresClick = (stores) => {
  //   dispatch(selectStores(stores));
  // };

  return (
    <div className={styles.storeSection}>
      <div className={styles.container}>
        <select name="inputSelect" id="inputSelect">
        
          {stores.map((stores, index) => (
            <option
              // key={index}
              // onClick={() => handleStoresClick(stores)}
              // value=""
            >
              {stores.category}
            </option>
          ))}

        </select>
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
          <a
            href="https://www.boyner.com.tr/kampanyalar-c-3340249"
            target="_blank"
          >
            <img
              src="https://kango.az/storage/shops/100.png"
              alt="team-thumb"
            />
          </a>
          <a href="https://www.camper.com/tr_TR" target="_blank">
            <img src="https://kango.az/storage/shops/99.png" alt="team-thumb" />
          </a>
          <a href="https://www2.hm.com/tr_tr/index.html" target="_blank">
            <img src="https://kango.az/storage/shops/98.png" alt="team-thumb" />
          </a>
          <a href="https://bebetto.com.tr/tr/sayfa/anasayfa" target="_blank">
            <img src="https://kango.az/storage/shops/97.png" alt="team-thumb" />
          </a>
          <a href="https://www.pierrecardin.com.tr/#" target="_blank">
            <img src="https://kango.az/storage/shops/23.png" alt="" />
          </a>
          <a href="https://tr.uspoloassn.com/" target="_blank">
            <img src="https://kango.az/storage/shops/26.png" alt="" />
          </a>
          <a href="https://www.lacoste.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/33.png" alt="" />
          </a>
          <a href="https://www.defacto.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/36.png" alt="" />
          </a>
          <a href="https://derimod.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/37.png" alt="" />
          </a>
          <a href="https://www.ipekyol.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/38.png" alt="" />
          </a>
          <a href="https://shop.mango.com/tr/tr" target="_blank">
            <img src="https://kango.az/storage/shops/43.png" alt="" />
          </a>
          <a href="https://www.kigili.com/" target="_blank">
            <img src="https://kango.az/storage/shops/39.png" alt="" />
          </a>
          <a href="https://www.cartersoshkosh.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/46.png" alt="" />
          </a>
          <a href="https://www.davidjones.com.tr/Bakim.aspx" target="_blank">
            <img src="https://kango.az/storage/shops/52.png" alt="" />
          </a>
          <a href="https://www.minicity.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/53.png" alt="" />
          </a>
          <a href="https://www.myvalice.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/56.png" alt="" />
          </a>
          <a href="https://www.akakce.com/" target="_blank">
            <img src="https://kango.az/storage/shops/57.png" alt="" />
          </a>
          <a href="https://www.aldoshoes.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/58.png" alt="" />
          </a>
          <a href="https://www.aloparca.com/" target="_blank">
            <img src="https://kango.az/storage/shops/59.png" alt="" />
          </a>
          <a href="https://www.betashoes.com/" target="_blank">
            <img src="https://kango.az/storage/shops/61.png" alt="" />
          </a>
          <a href="https://www.brandroom.com.tr/kadin" target="_blank">
            <img src="https://kango.az/storage/shops/62.png" alt="" />
          </a>
          <a href="https://www.edzashoes.com/" target="_blank">
            <img src="https://kango.az/storage/shops/63.png" alt="" />
          </a>
          <a href="https://www.elleshoes.com/" target="_blank">
            <img src="https://kango.az/storage/shops/63.png" alt="" />
          </a>
          <a href="https://www.gon.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/65.png" alt="" />
          </a>
          <a href="https://www.hepsiburada.com/" target="_blank">
            <img src="https://kango.az/storage/shops/66.png" alt="" />
          </a>
          <a href="https://www.hoticshoes.com/" target="_blank">
            <img src="https://kango.az/storage/shops/67.png" alt="" />
          </a>
          <a href="https://www.lutvelizade.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/68.png" alt="" />
          </a>
          <a href="https://www.marjin.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/69.png" alt="" />
          </a>
          <a href="https://www.stepbystep.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/70.png" alt="" />
          </a>
          <a href="https://www.yesil.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/72.png" alt="" />
          </a>
          <a href="https://www.vagotomotiv.com/" target="_blank">
            <img src="https://kango.az/storage/shops/73.png" alt="" />
          </a>
          <a href="https://tasdemirlerotoyedekparca.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/74.png" alt="" />
          </a>
          <a href="https://www.parcafilosu.com/" target="_blank">
            <img src="https://kango.az/storage/shops/76.png" alt="" />
          </a>
          <a href="https://www.boyner.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/78.png" alt="" />
          </a>
          <a href="https://www.pullandbear.com/tr/" target="_blank">
            <img src="https://kango.az/storage/shops/80.png" alt="" />
          </a>
          <a href="https://www.colins.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/81.png" alt="" />
          </a>
          <a href="https://www.massimodutti.com/tr" target="_blank">
            <img src="https://kango.az/storage/shops/82.png" alt="" />
          </a>
          <a href="https://www.panco.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/83.png" alt="" />
          </a>
          <a href="https://www.tergan.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/84.png" alt="" />
          </a>

          <a href="https://tr.benetton.com/" target="_blank">
            <img src="https://kango.az/storage/shops/85.png" alt="" />
          </a>
          <a href="https://www.columbia.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/86.png" alt="" />
          </a>
          <a href="https://www.zara.com/tr/" target="_blank">
            <img src="https://kango.az/storage/shops/90.png" alt="" />
          </a>
          <a href="https://www.twist.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/91.png" alt="" />
          </a>
          <a href="https://www.oxxoshop.com/eu/en" target="_blank">
            <img src="https://kango.az/storage/shops/92.png" alt="" />
          </a>
          <a href="https://pvh.com/brands/tommy-hilfiger" target="_blank">
            <img src="https://kango.az/storage/shops/93.png" alt="" />
          </a>
          <a href="https://www.newbalance.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/94.png" alt="" />
          </a>
          <a href="https://www.saten.com/" target="_blank">
            <img src="https://kango.az/storage/shops/95.png" alt="" />
          </a>
          <a href="https://www.reebok.com.tr/" target="_blank">
            <img src="https://kango.az/storage/shops/96.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stores;
