"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { addHistory, addHistoryAndFinishVideo } from "@/actions/video";

export function DoingVideo(props: any) {
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
        <div>当前在看：{video.current} P</div>
        <div>共：{video.total} P</div>
        {video.current === video.total ? (
          <button
            className="btn btn-primary btn-sm absolute bottom-0"
            disabled={disabled}
            onClick={() => addVideoHistory(video.id, true)}
          >
            标记看过
          </button>
        ) : (
          <button
            className="btn btn-primary btn-sm absolute bottom-0"
            disabled={disabled}
            onClick={() => addVideoHistory(video.id)}
          >
            追一集
          </button>
        )}
      </div>
    </div>
  );
}
