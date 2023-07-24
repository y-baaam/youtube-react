import Header from "./components/header";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  const [mostPopularVideos, setMostPopularVideos] = useState([]);

  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    try {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${YOUTUBE_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMostPopularVideos(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [YOUTUBE_API_KEY]);

  // console.log(mostPopularVideos);
  // const videoItemMap = useMemo(() => {
  //   mostPopularVideos.map((v) => {
  //     return <div>{v.items}</div>;
  //   });
  // }, []);

  return (
    <div className={styles.main}>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
