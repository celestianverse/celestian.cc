import type { Metadata } from "next";
import { ColumnPlayground } from "./_components/ColumnPlayground/ColumnPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.column.title,
};

const RowPage = () => {
  return (
    <ColumnPlayground />
  );
};

export default RowPage;