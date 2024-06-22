import React from "react";
import styles from "../../Companents/Login/Login.module.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigation= useNavigate()
  return (
    <div className={styles.loginSection}>
      <div className={styles.container}>
        <h4>Xoş Gəlmisiniz!</h4>
        <h4>Giriş</h4>
        <div className={styles.loginForm}>
          <div className={styles.formGroup}>
            <span>Email</span>
            <input type="text" placeholder="Email daxil edin" />
          </div>
          <div className={styles.formGroup}>
            <span>Şifrə</span>
            <input
              type="password"
              name="password"
              placeholder="***************"
             
            />
            <button type="button"></button>
          </div>
          <div className={styles.saveAndForgot}>
            <label htmlFor="">
              <input type="checkbox" value="save" />
              <p>Yadda saxla</p>
            </label>
            <a onClick={() => navigation('/daxil ol/forgot')} href="">Şifrəmi unutdum</a>
          </div>
        </div>
        <button className={styles.btn}>Daxil ol</button>
        <div className={styles.loginNow}>
          <p>
            Hələ də qeydiyyatdan keçməmisiniz? <a href="http://localhost:3000/qeydiyyat">Qeydiyyatdan</a> keçin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
