import type { Metadata } from "next";
import { TitlePlayground } from "./_components/TitlePlayground/TitlePlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.typography.title.title,
};

const TitlePage = () => {

  return (
    <TitlePlayground />
  );
};

export default TitlePage;