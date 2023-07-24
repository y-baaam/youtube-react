import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../VideoCard";
import Youtube from "../../../api/youtube";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos{keyword ? `${keyword}` : `popular`}</div>
      {isLoading && <p>Loading....</p>}
      {error && <p>error</p>}
      {videos && (
        <ul>
          {videos.map((video) => {
            return <VideoCard key={video.id} video={video}></VideoCard>;
          })}
        </ul>
      )}
    </>
  );
}
