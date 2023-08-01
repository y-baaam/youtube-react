import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../VideoCard";
import { useYoutubeApi } from "../../../context/YoutubeApiContext";
import styles from "./index.module.css";
import SearchListItem from "../../SearchListItem";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading, // 비동기작업을 수행하는 동안 true 가 되고, 데이터 가져오기가 완료 되면 false로 설정된다.
    error, //  데이터를 가져오는 과정에서 발생한 오류가 담기는 변수이다. 오류가 발생하지 않았을 경우에는 null이 할당된다.
    data: videos, // 가져온 데이터가 담기는 변수
  } = useQuery(
    // 이 useQuery의 고유 키가 videos key
    ["videos", keyword],

    // 두번째 파라미터는 데이터를 가져오는 함수
    // 비동기 함수를 호출하고, 그 결과를 반환하는 역할
    () => {
      return youtube.search(keyword);
    }
  );

  // api 로 가져온 youtube 데이터에 keyword 를 넣어서 keyword 가 있는지 여부를 확인하여 VideoCard 를 출력할지 SearchItem 을 출력할지 정함 .
  return (
    <>
      {isLoading && <p>Loading....</p>}
      {error && <p>error</p>}
      {!keyword ? (
        <ul className={styles.videoCardContainer}>
          {videos &&
            videos.map((video) => {
              return <VideoCard key={video.id} video={video}></VideoCard>;
            })}
        </ul>
      ) : (
        <ul className={styles.searchListItem}>
          {videos &&
            videos.map((video) => {
              return (
                <SearchListItem key={video.id} video={video}></SearchListItem>
              );
            })}
        </ul>
      )}
    </>
  );
}
