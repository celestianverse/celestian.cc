import type { Metadata } from "next";
import { TextPlayground } from "./_components/TextPlayground/TextPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.dataDisplay.text.title,
};

const TextPage = () => {
  return (
    <TextPlayground />
  );
};

export default TextPage;