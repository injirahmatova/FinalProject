// import React from "react";
// import styles from "../../Companents/Register/Register.module.scss";
// import { CiCalendar } from "react-icons/ci";

// const Register = () => {
//   return (
//     <div className={styles.registerSection}>
//       <div className={styles.container}>
//         <h4>Qeydiyyat</h4>
//         <div className={styles.registerForm}>
//           <div className={styles.formGroup}>
//             <span>Ad</span>
//             <input
//               type="text"
//               name="first_name"
//               placeholder="Adınızı daxil edin"
//             />
//           </div>
        //   <div className={styles.formGroup}>
        //     <span>Soyadınızı daxil edin</span>
        //     <input
        //       type="text"
        //       name="first_name"
        //       placeholder="Soyadınızı daxil edin"
        //     />
        //   </div>
//           <div className={styles.formGroup}>
//             <span>Doğum tarixi</span>
//             <input
//               type="text"
//               name="birthday"
//               data-toggle="datepicker"
//               placeholder=" Exp: 22.06.2024"
//             />
//           </div>
        //   <div className={styles.formGroup}>
        //     <span>Ad</span>
        //     <input
        //       type="text"
        //       name="first_name"
        //       placeholder="Adınızı daxil edin"
        //     />
        //   </div>
        //   <div className={styles.formGroup}>
        //     <span>Ad</span>
        //     <input
        //       type="text"
        //       name="first_name"
        //       placeholder="Adınızı daxil edin"
        //     />
        //   </div>
        //   <div className={styles.formGroup}>
        //     <span>Ad</span>
        //     <input
        //       type="text"
        //       name="first_name"
        //       placeholder="Adınızı daxil edin"
        //     />
        //   </div>
//         </div>
//         <button>Davam et</button>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  styles from '../../Companents/Register/Register.module.scss'
import { FiCalendar } from "react-icons/fi";
const Register = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.registerSection}>
      <div className={styles.container}>
        <h4>Qeydiyyat</h4>
        <div className={styles.registerForm}>
        <div className={styles.formGroup}>
           <span>Ad</span>
            <input
             type="text"
              name="first_name"
              placeholder="Adınızı daxil edin"
            />
           </div>
           <div className={styles.formGroup}>
            <span>Soyadınızı daxil edin</span>
            <input
              type="text"
              name="first_name"
              placeholder="Soyadınızı daxil edin"
            />
          </div>
          <div className={styles.formGroup}>
            <span>Doğum tarixi</span>
            <DatePicker className={styles.datepicker}
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd.MM.yyyy"
              placeholderText="Exp: 22.06.2024"
            />
             <FiCalendar className={styles.calendarIcon} />
          </div>
          <div className={styles.formGroup}>
            <span>Cins</span>
            <select name="inputSelect" id="inputSelect" className={styles.select}>
              <option className={styles.option} value="female">Qadın</option>
              <option className={styles.option} value="male">Kişi</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <span>Mobil</span>
            <div className={styles.number}>
<input type="text"  className={styles.numberPrefix} readonly value="+994"/>
<span className={styles.inputDivider}></span>
<input type="tel" name="mobile" id placeholder="x x x x x x x x x"/>
            </div>
         
          </div>
          <div className={styles.formGroup}>
            <span>Email</span>
            <input
              type="text"
              name="first_name"
              placeholder="Emailinizi daxil edin"
            />
          </div>
        </div>
        <button className={styles.btn}>Davam et</button>
      </div>
    </div>
  );
};

export default Register;
