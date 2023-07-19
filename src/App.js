import Header from "./components/header";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/page/home";
import Result from "./components/page/result";
import Watch from "./components/page/watch";

function App() {
  const [videos, setVideos] = useState([]);
  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=kpop+music&key=${YOUTUBE_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVideos(data);
  //     });
  // }, []);
  // console.log(videos);

  return (
    <div className={styles.main}>
      <Header />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/result" element={Result} />
        <Route path="/watch" element={Watch} />
      </Routes>
      <div className={styles.appContents}></div>
    </div>
  );
}

export default App;
