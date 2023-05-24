"use server";

import prisma from "@/lib/prisma";
import { VideoStatus } from "@prisma/client";

export async function getVideos(status: VideoStatus) {
  const videos = await prisma.video.findMany({
    where: {
      status,
    },
  });
  return videos;
}

export async function addHistory(id: string) {
  await prisma.video.update({
    where: { id },
    data: {
      current: {
        increment: 1,
      },
      historys: {
        create: {},
      },
    },
  });
}

export async function addHistoryAndFinishVideo(id: string) {
  await prisma.video.update({
    where: { id },
    data: {
      status: "Done",
      historys: {
        create: {},
      },
    },
  });
}

export async function startVideo(id: string) {
  await prisma.video.update({
    where: { id },
    data: {
      current: { increment: 1 },
      status: "Doing",
    },
  });
}
