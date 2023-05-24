"use client";

import React, { useEffect, useState } from "react";
import { DoingVideo } from "./DoingVideo";
import { Video, VideoStatus } from "@prisma/client";
import { getVideos } from "@/actions/video";
import { DoneVideo } from "./DoneVideo";
import { TodoVideo } from "./TodoVideo";

export default function VideoPage(props: any) {
  let status: VideoStatus = props.status;
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos(status).then(res => {
      setVideos(res);
    });
  }, []);

  const updateVideo = (id: string) => {
    let v = videos.find(v => v.id === id)!;
    v.current++;
    setVideos([...videos]);
  };

  const updateList = (id: string) => {
    let idx = videos.findIndex(v => v.id === id)!;
    videos.splice(idx, 1);
    setVideos([...videos]);
  };

  return (
    <div className="mt-4 grid grid-cols-4 gap-3">
      {videos.map(v => {
        if (status === "Doing") {
          return (
            <DoingVideo
              key={v.id}
              video={v}
              updateVideo={updateVideo}
              updateList={updateList}
            ></DoingVideo>
          );
        } else if (status === "Todo") {
          return (
            <TodoVideo key={v.id} video={v} updateList={updateList}></TodoVideo>
          );
        } else {
          return <DoneVideo key={v.id} video={v}></DoneVideo>;
        }
      })}
    </div>
  );
}
