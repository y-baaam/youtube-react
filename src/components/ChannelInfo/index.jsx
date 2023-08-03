import React from "react";
import styles from "./index.module.css";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(["channel", id], () =>
    youtube.channelImageURL(id)
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
