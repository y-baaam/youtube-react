import React from "react";
import styles from "./index.module.css";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
    // staleTime은 데이터가 만료되어 새로운 데이터를 가져와야 하는 시간 간격을 설정하는 옵션
  );

  console.log(url);

  return (
    <div className={styles.channelInfo}>
      {url && <img src={url} className={styles.channelImg} alt={title} />}
      <div className={styles.channelDes}>
        <div className={styles.channelTitle}>{title}</div>
        {/* <div className={styles.channelSubscribe}>subscribe count</div> */}
      </div>
    </div>
  );
}
