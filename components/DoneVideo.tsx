"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function DoneVideo(props: any) {
  const [disabled, setDisabled] = useState(false);
  let { video } = props;

  return (
    <div key={video.id} className="flex gap-3 relative">
      <div className="w-32 rounded-md overflow-hidden">
        <img src={video.cover} />
      </div>
      <div>
        <h2 className="text-ellipsis">{video.title}</h2>

        <button
          className="btn btn-primary btn-sm absolute bottom-0"
          disabled={disabled}
        >
          查看历史
        </button>
      </div>

      <Toaster />
    </div>
  );
}
