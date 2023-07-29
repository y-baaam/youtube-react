import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import fakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

// const client = new YoutubeClient();
const client = new fakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

// youtubeApi 를 따로 정의하여 다른 곳에서 import를 하여 api를 관리할 수 있도록 한다.
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
