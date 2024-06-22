import React from 'react'
import styles from '../../Companents/ForgotPassword/ForgotPassword.module.scss'
const ForgotPassword = () => {
  return (
    <div className={styles.forgotPasswordSection}>
    <div className={styles.container}>
      <h4>Xoş Gəlmisiniz!</h4>
     <p>Qeydiyyatdan keçdiyiniz emaili daxil edərək sizə göndərilən linkdən şifrəni yeniləyə bilərsiniz</p>
      
        <div className={styles.formGroup}>
          <span>Email</span>
          <input type="text" placeholder="Email daxil edin" />
        <button className={styles.btn}>Daxil ol</button>
        
        </div>
    
     
      
      
    </div>
  </div>
  )
}

export default ForgotPassword
