import type { Metadata } from "next";
import { SwitchPlayground } from "./_components/SwitchPlayground/SwitchPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.switch.title,
};

const SwitchPage = () => {
  return (
    <SwitchPlayground />
  );
};

export default SwitchPage;