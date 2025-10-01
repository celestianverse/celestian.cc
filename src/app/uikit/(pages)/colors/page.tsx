import type { Metadata } from "next";
import { ColorsPlayground } from "@/app/uikit/(pages)/colors/_components/ColorsPlayground/ColorsPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.general.colors.title,
};

const ColorsPage = () => {

  return (
    <ColorsPlayground />
  );
};

export default ColorsPage;