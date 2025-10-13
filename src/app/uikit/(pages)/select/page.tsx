import type { Metadata } from "next";
import { SelectPlayground } from "@/app/uikit/(pages)/select/_components/SelectPlayground/SelectPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.select.title,
};

const SelectPage = () => {
  return (
    <SelectPlayground />
  );
};

export default SelectPage;