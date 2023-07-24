import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default function SearchInput() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onChangeParams = (e) => {
    setText(e.target.value);
  };
  const { keyword } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  // useEffect(() => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YOUTUBE_API_KEY}
  //   `).then((res) => res.json());
  // });

  return (
    <form className={styles.searchInputForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        onChange={onChangeParams}
        placeholder="검색"
        value={text}
      />
      <button className={styles.searchButton}>
        <BsSearch></BsSearch>
      </button>
    </form>
  );
}
