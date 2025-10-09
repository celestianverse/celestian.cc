import type { Metadata } from "next";
import { DividerPlayground } from "@/app/uikit/(pages)/divider/_components/DividerPlayground/DividerPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.utilities.divider.title,
};

const DividerPage = () => {

  return (
    <DividerPlayground />
  );
};

export default DividerPage;