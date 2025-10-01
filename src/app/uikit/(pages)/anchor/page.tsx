import type { Metadata } from "next";
import { AnchorPlayground } from "./_components/AnchorPlayground/AnchorPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.anchor.title,
};

const AnchorPage = () => {

  return (
    <AnchorPlayground />
  );
};

export default AnchorPage;