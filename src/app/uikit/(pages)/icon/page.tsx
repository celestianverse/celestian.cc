import type { Metadata } from "next";
import { IconPlayground } from "@/app/uikit/(pages)/icon/_components/IconPlayground/IconPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.dataDisplay.icon.title,
};

const IconPage = () => {

  return (
    <IconPlayground />
  );
};

export default IconPage;