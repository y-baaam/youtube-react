import React from "react";
import styles from "./index.module.css";
import moment from "moment";

import { useNavigate } from "react-router-dom";

export default function SearchListItem({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  // 게시한 후 시간이 얼마나 지났는지 나타내기
  const publishDate = publishedAt.substring(0, 10);
  const publishDateDiff = moment(publishDate, "YYYY-MM-DD").fromNow();
  const navigate = useNavigate();

  // navigate 를 할 때 state 로 데이터를 같이 보낼 수 있다.
  const onClickIntoVideoDetail = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li className={styles.searchItem}>
      <img
        className={styles.searchItemThumbnailImg}
        src={thumbnails.medium.url}
        alt=""
        width={thumbnails.medium.width}
        height={thumbnails.medium.height}
        onClick={onClickIntoVideoDetail}
      />

      <div className={styles.searchItemDescription}>
        <div className={styles.searchItemChannelImg} alt={""} src={""} />
        <div
          className={styles.searchItemTextContainer}
          onClick={onClickIntoVideoDetail}
        >
          <div className={styles.searchItemTitle}>{title}</div>
          <div className={styles.searchItemChannelTitle}>{channelTitle}</div>
          <div className={styles.searchItemPublishedAt}> {publishDateDiff}</div>
        </div>
      </div>
    </li>
  );
}
