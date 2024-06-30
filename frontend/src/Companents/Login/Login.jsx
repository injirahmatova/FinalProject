import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useLoginMutation } from "../../Redux/Slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Redux/Slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigation = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation("/");
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation("/");
    } catch (error) {
      toast.error("Sehv email ya sifre");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <h4>Xoş Gəlmisiniz!</h4>
        <h4>Giriş</h4>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="Email daxil edin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Şifrə</span>
            <input
              type="password"
              name="password"
              placeholder="***************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.saveAndForgot}>
            <label htmlFor="">
              <input type="checkbox" value="save" />
              <p>Yadda saxla</p>
            </label>
            <a onClick={() => navigation("/daxil ol/forgot")} href="">
              Şifrəmi unutdum
            </a>
          </div>
          {loginError && <div className={styles.error}>{loginError}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging..." : "Daxil ol"}
          </button>
          <div className={styles.loginNow}>
            <p>
              Hələ də qeydiyyatdan keçməmisiniz?{" "}
              <a href="http://localhost:3000/qeydiyyat">Qeydiyyatdan</a> keçin
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

