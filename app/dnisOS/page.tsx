"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/dnisOS/styles.module.scss";
import Navbar from "@/os-components/navbar/Navbar";
import OsFoldersContextSelector from "@/contexts/OsContext";
import CloseOsBtn from "@/os-components/closeOsBtn/CloseOsBtn";
import LoadingScreen from "@/os-components/loadingScreen/LoadingScreen";
import SignInScreen from "@/os-components/signInScreen/SignInScreen";

function page() {
  const [fakeLoading, setFakeLoading] = useState<boolean>(true);
  const [fakeSignIn, setFakeSignIn] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <OsFoldersContextSelector>
      {fakeLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {fakeSignIn ? (
            <SignInScreen setFakeSignIn={setFakeSignIn} />
          ) : (
            <div className={styles.dnisOS}>
              <CloseOsBtn />
              <Navbar />
            </div>
          )}
        </>
      )}
    </OsFoldersContextSelector>
  );
}

export default page;
