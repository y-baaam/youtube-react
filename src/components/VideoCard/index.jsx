import React from "react";
import styles from "./index.module.css";
import moment from "moment";
// import "moment/locale/ko";
import { useNavigate } from "react-router-dom";
import ChannelInfo from "../ChannelInfo";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt, id } = video.snippet;

  // 게시한 후 시간이 얼마나 지났는지 나타내기
  const publishDate = publishedAt.substring(0, 10);
  const publishDateDiff = moment(publishDate, "YYYY-MM-DD").fromNow();

  const navigate = useNavigate();

  const onClickIntoVideoDetail = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li className={styles.videoCard} onClick={onClickIntoVideoDetail}>
      <img
        className={styles.videoCardThumbnailImg}
        src={thumbnails.medium.url}
        alt=""
        width={thumbnails.medium.width}
        height={thumbnails.medium.height}
        onClick={onClickIntoVideoDetail}
      />
      <ChannelInfo title={title} id={id} />

      <div className={styles.videoCardDescription}>
        <div
          className={styles.videoCardTextContainer}
          onClick={onClickIntoVideoDetail}
        >
          {/* <div className={styles.videoCardTitle}>{title}</div>
          <div className={styles.videoCardChannelTitle}>{channelTitle}</div> */}
          <div className={styles.videoCardPublishedAt}> {publishDateDiff}</div>
        </div>
      </div>
    </li>
  );
}
