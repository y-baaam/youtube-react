import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "react-query";
import SearchListItem from "../SearchListItem";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {error && <p>error</p>}

      <ul>
        {videos &&
          videos.map((video) => {
            return (
              <SearchListItem key={video.id} video={video}></SearchListItem>
            );
          })}
      </ul>
    </div>
  );
}
