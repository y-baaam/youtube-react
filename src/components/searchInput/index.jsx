import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onChangeParams = (e) => {
    setText(e.target.value);
  };

  const { keyword } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

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
