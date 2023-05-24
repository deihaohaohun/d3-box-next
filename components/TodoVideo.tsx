"use client";

import React from "react";
import toast from "react-hot-toast";
import { startVideo } from "@/actions/video";

export function TodoVideo(props: any) {
  let { video, updateList } = props;
  const start = async (id: string) => {
    console.log(id);
    await startVideo(id);
    updateList(id);
    toast.success("开始追了!");
  };

  return (
    <div key={video.id} className="flex gap-3 relative">
      <div className="w-32 rounded-md overflow-hidden">
        <img src={video.cover} />
      </div>
      <div>
        <h2 className="text-ellipsis">{video.title}</h2>
        <label
          htmlFor={`confirm-modal-${video.id}`}
          className="btn btn-primary btn-sm absolute bottom-0"
        >
          开追!
        </label>
      </div>
      <input
        type="checkbox"
        id={`confirm-modal-${video.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`confirm-modal-${video.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4">准备好了吗?</p>
          <div className="modal-action">
            <label
              htmlFor={`confirm-modal-${video.id}`}
              className="btn"
              onClick={() => start(video.id)}
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
