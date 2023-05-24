"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const modules = [
    {
      title: "哔哩历史",
      url: "/bili-history/doing",
    },
    {
      title: "菜谱",
    },
    {
      title: "钢铁匣",
    },
    {
      title: "复习笔记",
    },
  ];

  const router = useRouter();
  const jumpPage = (url: string = "") => {
    if (url === "") return toast.error("还没开发完 o.o");
    router.push(url);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="modules w-4/5 grid grid-cols-4 gap-3 justify-center items-center">
        {modules.map(m => (
          <div
            key={m.title}
            className="bg-neutral text-3xl text-center px-3 py-8 rounded-xl cursor-pointer"
            onClick={() => jumpPage(m.url)}
          >
            {m.title}
          </div>
        ))}
      </div>
    </div>
  );
}
