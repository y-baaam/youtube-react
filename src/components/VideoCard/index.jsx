import React from "react";
import styles from "./index.module.css";

export default function VideoCard({ video }) {
  return (
    <div className={styles.videoCard}>
      {video.snippet.title}
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
    </div>
  );
}
