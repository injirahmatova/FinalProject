import React from "react";
import styles from "../../Companents/Dashboard/Dashboard.module.scss";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigation= useNavigate()
  
  // const [logoutApiCall] = useLogoutMutation();

  // const handleLogout = async () => {
  //   console.log("Logout button clicked");
  //   try {
  //       const response = await logoutApiCall().unwrap();
  //       console.log("Logout response:", response);
  //       dispatch(logout());
  //       console.log("User info after logout:", store.getState().auth.userInfo); 
  //       navigate('/login');
  //       console.log("Navigating to login"); 
  //   } catch (error) {
  //       console.log("Logout error:", error);
  //   }
  // } 
  
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.left}>
          <ul>
            <li>
              <a href=""onClick={()=> navigation ('/şəxsi məlumatlar')} > Şəxsi məlumatlar </a>
            </li>
            <li>
              <a href="">Bağlamalar</a>
            </li>
            <li  ><a href="">Çıxış</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.note}>
            <p>
              {" "}
              <span>QEYD:</span> Hörmətli müştərilər, Nərimanov filialı xaric
              digər filiallardan bağlamanızı təhvil almaq üçün filiala
              yaxınlaşmadan öncə daşınma haqqını online ödəməlisiniz.
            </p>
            <div className={styles.btns}>
              <a href="">Faktura Yüklə</a>
              <a href="">Sorğu Yarat</a>
              <a href="">Kuryer Sifarişi</a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>salam</h4>
              <p>
                Müştəri kodu: <span></span>{" "}
              </p>
              <p>
                Şəxsiyyət vəsiqəsi: <span></span>
              </p>
            </div>
            <div className={styles.card}>
              <h4>AZN  Balansım</h4>
              <p>
                
Azərbaycana çatdırılma haqqının ödənilməsi üçün balansınızı artırabilərsiniz.
              </p>
              <a href=""> AZN balansını artır</a>
            </div>
            <div className={styles.card}>
              <h4>TL  Balansım</h4>
              <p>
                
              TL balansınızı Türkiyə sifarişlərində istifadə edə bilərsiniz.
              </p>
              <a href=""> TL balansını artır</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
