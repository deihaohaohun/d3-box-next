"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addHistory, addHistoryAndFinishVideo } from "@/actions/video";

export function DoneVideo(props: any) {
  const [disabled, setDisabled] = useState(false);
  let { video, updateVideo, updateList } = props;
  const addVideoHistory = async (id: string, finished: boolean = false) => {
    setDisabled(true);
    if (finished) {
      await addHistoryAndFinishVideo(id);
      toast.success("成就 +1");
      updateList(id);
    } else {
      await addHistory(id);
      toast.success("更新成功");
      updateVideo(video.id);
    }
    setDisabled(false);
  };

  return (
    <div key={video.id} className="flex gap-3 relative">
      <div className="w-32 rounded-md overflow-hidden">
        <img src={video.cover} />
      </div>
      <div>
        <h2 className="text-ellipsis">{video.title}</h2>
      </div>

      <Toaster />
    </div>
  );
}
