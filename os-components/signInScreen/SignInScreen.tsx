import React from "react";
import styles from "@/os-components/signInScreen/styles.module.scss";

type SignInScreenProps = {
  setFakeSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignInScreen = ({ setFakeSignIn }: SignInScreenProps) => {
  return (
    <div className={styles.signInScreen}>
      <div className={styles.glasmorphism}>
        <div className={styles.signInBtn} onClick={() => setFakeSignIn(false)}>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
