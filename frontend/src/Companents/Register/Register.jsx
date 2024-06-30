import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import { useRegisterMutation } from "../../Redux/Slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Redux/Slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [passportSerie, setPassportSerie] = useState("");
  const [passportFin, setSetPassportFin] = useState("");
 

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation("/admin-panel");
    }
  }, [navigation, userInfo]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Sifreler duz deyil");
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation("/");
    } catch (error) {
      toast.error("Register fail");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <h4>Qeydiyyat</h4>
        <form onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <span>Ad</span>
            <input
              type="text"
              name="name"
              placeholder="Adınızı daxil edin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Soyadınızı daxil edin</span>
            <input
              type="text"
              name="surname"
              placeholder="Soyadınızı daxil edin"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Doğum tarixi</span>
            <DatePicker
              selected={birthDay} // State variable for birthDay
              onChange={(date) => setBirthDay(date)} // Function to update birthDay state
              dateFormat="dd/MM/yyyy" // Date format to display
              placeholderText="Doğum tarixi seçin" // Placeholder text
              className={styles.datePicker} // Optional: Apply custom styling via SCSS
            />
          </div>

          <div className={styles.formGroup}>
            <span>Cins</span>
            <select
              name="gender"
              id="inputSelect"
              className={styles.select}
              onChange={(e) => setGender(e.target.value)}
            >
              <option className={styles.option} value="female">
                Qadın
              </option>
              <option className={styles.option} value="male">
                Kişi
              </option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <span>Telefon nömrəsi</span>
            <input
              type="tel"
              name="mobile"
              placeholder="Telefon nömrəsi"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Ünvan</span>
            <input
              type="text"
              name="address"
              placeholder="Ünvanınızı daxil edin"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Filial</span>
            <select
              name="branch"
              id="inputSelect"
              className={styles.select}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option className={styles.option} value="branch">
              BAŞ OFİS-Nərimanov
              </option>
              <option className={styles.option} value="branch">
              Sumqayıt -"Asan Xidmətin" yanı
              </option>
              <option className={styles.option} value="branch">
              Bakıxanov
              </option>
              <option className={styles.option} value="branch">
              Həzi Aslanov
              </option>
              <option className={styles.option} value="branch">
              28 MAY
              </option>
              <option className={styles.option} value="branch">
              Memar Əcəmi
              </option>
              <option className={styles.option} value="branch">
              İnşaatçılar
              </option>
              <option className={styles.option} value="branch">
              Xırdalan
              </option>
              <option className={styles.option} value="branch">
              Xalqlar Dostluğu
              </option>
              <option className={styles.option} value="branch">
              Azadliq (7mk)
              </option>
              <option className={styles.option} value="branch">
              Əhmədli
              </option>
              <option className={styles.option} value="branch">
              Nəsimi Metrosu
              </option>
              <option className={styles.option} value="branch">
              Şamaxinka
              </option>
              <option className={styles.option} value="branch">
              Dostluq Kinoteatrı
              </option>
              <option className={styles.option} value="branch">
              Badamdar
              </option>
              <option className={styles.option} value="branch">
              İnqilab
              </option>
              <option className={styles.option} value="branch">
              Yeni Yasamal 
              </option>
              <option className={styles.option} value="branch">
              6cı Paralel
                </option>
                <option className={styles.option} value="branch">
                9cu mikrorayon
                </option>
                <option className={styles.option} value="branch">
                Gencə prospekti (Bakı)
                </option>
                <option className={styles.option} value="branch">
                Bakixanov (Stansiya)
                </option>
                <option className={styles.option} value="branch">
                8. mikrorayon
                </option>
                <option className={styles.option} value="branch">
                Sumqayıt-12 mkr.
                </option>
                <option className={styles.option} value="branch">
                Sumqayıt-Kristal Abşeron
                </option>
                <option className={styles.option} value="branch">
                Biləcəri
                </option>
                <option className={styles.option} value="branch">
                Yeni Yasamal (Xiyabani)
                </option>
                <option className={styles.option} value="branch">
                Köhnə Suraxanı
                </option>
                <option className={styles.option} value="branch">
                Ukrayna dairəsi
                </option>
                <option className={styles.option} value="branch">
                Lökbatan
                </option>
                <option className={styles.option} value="branch">
                Neftçilər-1
                </option>
                <option className={styles.option} value="branch">
                Neftçilər (InterTuran)
                </option>
                <option className={styles.option} value="branch">
                8.ci km-Vasmoy
                </option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <span>Şəxsiyyət vəsiqəsinin nömrəsi</span>
            <input
              type="text"
              name="passportSerie"
              placeholder="xxxxxxxxxx"
              value={password}
              onChange={(e) => setPassportSerie(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>FİN kod</span>
            <input
              type="text"
              name="passportFin"
              placeholder="FİN kodunuzu daxil edin"
              value={password}
              onChange={(e) => setSetPassportFin(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Şifrəni daxil edin</span>
            <input
              type="password"
              name="password"
              placeholder="Şifrəni daxil edin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span>Təkrar şifrə</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Təkrar şifrə"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          
        </form><button type="submit" disabled={isLoading}>
            {isLoading ? "User creating" : "Davam et"}
          </button>
      </div>
    </div>
  );
};

export default Register;
