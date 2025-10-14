import type { Metadata } from "next";
import { GridPlayground } from "./_components/GridPlayground/GridPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.grid.title,
};

const GridPage = () => {
  return (
    <GridPlayground />
  );
};

export default GridPage;