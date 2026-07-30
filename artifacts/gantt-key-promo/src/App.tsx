import VideoTemplate from "@/components/video/VideoTemplate";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <VideoTemplate />
      <Analytics />
    </>
  );
}
