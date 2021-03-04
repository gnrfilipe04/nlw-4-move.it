import Link from "next/link";
import { useState } from "react";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [isInputChange, setIsInputChange] = useState(false)
  const seta = '->';
  const buttonColor ='#4cd62b' 

  return (
    <div className={styles.container}>
      <div>
        <img src="simbolo.svg" />
      </div>
      <div className={styles.loginColumn}>
        <img src="Logo.svg" />

        <div className={styles.loginContent}>
            <h1>Bem vindo</h1>
            <img src="Git.svg" />

            <div>
                <input onFocus={() => setIsInputChange(true)} onChange={(e) => setUserName(e.currentTarget.value)} placeholder='Digite seu username' />
                <button style={{background: isInputChange ? '#4cd62b' : '#4953b8'}}>
                    <Link href={{ pathname: "home", query: { userName: userName } }}>
                    <a>{seta}</a>
                    </Link>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
