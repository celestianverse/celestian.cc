import type { Metadata } from "next";
import { TagPlayground } from "@/app/uikit/(pages)/tag/_components/TagPlayground/TagPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.button.title,
};

const ButtonPage = () => {

  return (
    <TagPlayground />
  );
};

export default ButtonPage;