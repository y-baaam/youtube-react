import React from "react";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../../ChannelInfo";
import RelatedVideos from "../../RelatedVideos";

export default function VideoDetail() {
  // navigation을 할 때 같이 보낸 데이터를 불러오는 방법
  const {
    state: { video },
  } = useLocation();

  const { channelId, title, channelTitle } = video.snippet;
  return (
    <section className={styles.videoDetailPage}>
      <div className={styles.videoContents}>
        <div className={styles.video}>
          <iframe
            className={styles.videoPlayer}
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            title="youtubePlayer"
          ></iframe>
        </div>

        <div className={styles.videoTextContentsWrapper}>
          <div className={styles.videoTitle}>{title}</div>
          <ChannelInfo id={channelId} title={channelTitle} />

          <div className={styles.videoDescription}>video description</div>
          <div className={styles.videoRelatedListBottom}>
            <RelatedVideos id={video.id} />
          </div>

          <div className={styles.comment}>comment</div>
        </div>
      </div>
      <div className={styles.videoRelatedListRight}>
        <RelatedVideos id={video.id} />
      </div>
    </section>
  );
}
