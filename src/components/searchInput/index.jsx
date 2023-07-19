import React, { useEffect } from "react";
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YOUTUBE_API_KEY}
    `).then((res) => res.json());
  });

  return (
    <form className={styles.searchInputForm} onSubmit={handleSubmit}>
      <input className={styles.searchInput}></input>
      <button className={styles.searchButton}>
        <BsSearch></BsSearch>
      </button>
    </form>
  );
}
