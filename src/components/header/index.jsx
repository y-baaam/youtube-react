import React from "react";
import SearchInput from "../searchInput";
import { BsSun, BsMoon } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./index.module.css";
import Home from "../page/home";
import { Link, Routes } from "react-router-dom";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.headerContainer}>
      {/* <span className={styles.headerIconContainer}> */}
      <Link to={"/"} className={styles.headerIconContainer}>
        <img src="/img/youtube.png" alt="" width={50} />
        <span className={styles.mainIconText}>Youtube</span>
      </Link>
      {/* </span> */}

      <SearchInput />

      <div className={styles.headerMenu}>
        <div onClick={toggleDarkMode}>{darkMode ? <BsSun /> : <BsMoon />}</div>
        <div>user</div>
      </div>
    </header>
  );
}
