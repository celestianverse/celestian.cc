import type { Metadata } from "next";
import { SegmentsPlayground } from "@/app/uikit/(pages)/segments/_components/SegmentsPlayground/SegmentsPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.segments.title,
};

const SegmentsPage = () => {
  return (
    <SegmentsPlayground/>
  );
};

export default SegmentsPage;