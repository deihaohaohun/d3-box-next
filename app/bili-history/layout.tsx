"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-4/5 m-auto">
      <div className="tabs mt-8">
        <Link
          href="/bili-history/doing"
          className={clsx("tab tab-lifted", current === 0 && "tab-active")}
          onClick={() => setCurrent(0)}
        >
          Doing
        </Link>
        <Link
          href="/bili-history/todo"
          className={clsx("tab tab-lifted", current === 1 && "tab-active")}
          onClick={() => setCurrent(1)}
        >
          Todo
        </Link>
        <Link
          href="/bili-history/done"
          className={clsx("tab tab-lifted", current === 2 && "tab-active")}
          onClick={() => setCurrent(2)}
        >
          Done
        </Link>
      </div>

      {children}
    </div>
  );
}
