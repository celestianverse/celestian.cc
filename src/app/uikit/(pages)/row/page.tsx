import type { Metadata } from "next";
import { RowPlayground } from "@/app/uikit/(pages)/row/_components/RowPlayground/RowPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.row.title,
};

const RowPage = () => {
  return (
    <RowPlayground />
  );
};

export default RowPage;