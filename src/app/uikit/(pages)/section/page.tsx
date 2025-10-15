import type { Metadata } from "next";
import { SectionPlayground } from "./_components/SectionPlayground/SectionPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.section.title,
};

const SectionPage = () => {
  return (
    <SectionPlayground />
  );
};

export default SectionPage;